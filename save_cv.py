# ─────────────────────────────────────────────────────────────────────────────
# save_cv.py — Simplified CV workflow endpoints
#
#   GET  /platform-data/{user_id}  → real quiz + labs + certs from PostgreSQL
#   POST /extract-cv               → extract text + detect missing sections
#   POST /save-cv                  → merge CV + platform data → save to CosmosDB
#
# Imported by main.py:  import save_cv
# ─────────────────────────────────────────────────────────────────────────────
import json
import re
import logging

from fastapi import UploadFile, File, Form, Path as FPath
from fastapi.responses import JSONResponse
from azure.cosmos import CosmosClient, PartitionKey, exceptions as cosmos_exceptions

from main import (
    app, client, log,
    AZURE_DEPLOYMENT,
    COSMOS_ENDPOINT, COSMOS_KEY, COSMOS_DB, COSMOS_CONTAINER,
    _clean_noise, _has_real_content,
    parse_cv_sections, detect_domain,
)
from cv_extraction import (
    extract_text_from_pdf,
    extract_text_from_docx,
)
from db_platform import get_platform_data_or_fallback, fetch_recommendations


# ─────────────────────────────────────────────────────────────────────────────
# CosmosDB helper
# ─────────────────────────────────────────────────────────────────────────────
def _get_cosmos_container():
    c  = CosmosClient(COSMOS_ENDPOINT, credential=COSMOS_KEY)
    db = c.create_database_if_not_exists(COSMOS_DB)
    return db.create_container_if_not_exists(
        id=COSMOS_CONTAINER,
        partition_key=PartitionKey(path="/id"),
    )


# ─────────────────────────────────────────────────────────────────────────────
# LLM: extract structured fields from raw CV text
# ─────────────────────────────────────────────────────────────────────────────
def _extract_cv_structured(raw_text: str) -> dict:
    prompt = f"""You are a precise multilingual CV data extractor. The CV may be in French or English.
French section names: "Expérience professionnelle"=experience, "Éducation/Formation"=education,
"Compétences"=skills, "Projets"=projects, "Certifications"=certifications, "Résumé/Présentation"=summary.

EXTRACTION RULES — read carefully:

1. EDUCATION — JSON array, one object per education entry (extract ALL, not just the highest):
   - Each entry: {{"degree": "degree title", "institution": "school name", "start": "year", "end": "year or present", "field": "field of study"}}
   - Extract EVERY education entry listed (classes prépa, licence, master, etc.)
   - If start/end not found, use empty string ""

2. CERTIFICATIONS — JSON array, one object per certification:
   - Each cert: {{"title": "cert name only", "org": "issuing org only", "date": "year or empty"}}
   - DO NOT merge multiple certs. Extract EVERY certification listed.

3. PROJECTS — JSON array, one object per project:
   - Each project: {{"title": "project title", "description": "its own description only"}}
   - Extract EVERY project listed. Description must belong ONLY to that project.

4. SKILLS — JSON object with categories. Infer categories from the skills found:
   - Use keys like: "programming", "data_ml", "cloud_devops", "nlp_ai", "tools", "soft_skills"
   - Each category is an array of skill strings
   - Only include categories that have actual skills
   - Example: {{"programming": ["Python", "SQL", "Java"], "cloud_devops": ["Docker", "AWS", "CI/CD"]}}

5. SUMMARY — copy the professional summary verbatim if present. null if not found.

6. EMPTY FIELDS — use null (not empty string "") for missing values.

Return ONLY valid JSON, no markdown, no explanation:
{{
  "first_name": "string or null",
  "last_name": "string or null",
  "email": "string or null",
  "phone": "string or null",
  "linkedin": "string or null",
  "role": "current or target job title or null",
  "seniority": "Junior | Mid | Senior | Lead | Executive or null",
  "years_experience": "number as string or null",
  "industry": "string or null",
  "summary": "professional summary verbatim or null",
  "skills": {{}},
  "education": [],
  "certifications": [],
  "projects": []
}}

CV TEXT:
{raw_text[:6000]}
"""
    resp = client.chat.completions.create(
        model=AZURE_DEPLOYMENT,
        messages=[{"role": "user", "content": prompt}],
        max_tokens=3000,
        temperature=0,
    )
    raw = resp.choices[0].message.content.strip()
    raw = raw.replace("```json", "").replace("```", "").strip()
    parsed = json.loads(raw)

    # ── Clean empty strings → null ────────────────────────────────────────────
    for key in ["first_name", "last_name", "email", "phone", "linkedin",
                "role", "seniority", "years_experience", "industry", "summary"]:
        val = parsed.get(key)
        if val == "" or val == "string" or val == "null":
            parsed[key] = None

    # ── Normalize education: ensure list of dicts ─────────────────────────────
    edu = parsed.get("education", [])
    if isinstance(edu, str):
        # Legacy: single string → wrap in array
        parsed["education"] = [{"degree": edu, "institution": "", "start": "", "end": "", "field": ""}] if edu else []
    elif isinstance(edu, list):
        normalized = []
        for e in edu:
            if isinstance(e, dict):
                normalized.append({
                    "degree":      e.get("degree", "") or "",
                    "institution": e.get("institution", "") or "",
                    "start":       e.get("start", "") or "",
                    "end":         e.get("end", "") or "",
                    "field":       e.get("field", "") or "",
                })
            elif isinstance(e, str) and e.strip():
                normalized.append({"degree": e.strip(), "institution": "", "start": "", "end": "", "field": ""})
        parsed["education"] = normalized

    # ── Normalize certifications ──────────────────────────────────────────────
    certs = parsed.get("certifications", [])
    if isinstance(certs, str):
        parsed["certifications"] = [{"title": c.strip(), "org": "", "date": ""} for c in certs.split(",") if c.strip()]
    elif isinstance(certs, list):
        normalized = []
        for c in certs:
            if isinstance(c, dict) and c.get("title"):
                normalized.append({"title": c.get("title", ""), "org": c.get("org", ""), "date": c.get("date", "")})
            elif isinstance(c, str) and c.strip():
                normalized.append({"title": c.strip(), "org": "", "date": ""})
        parsed["certifications"] = normalized

    # ── Normalize projects ────────────────────────────────────────────────────
    projects = parsed.get("projects", [])
    if isinstance(projects, str):
        parsed["projects"] = [{"title": p.strip(), "description": ""} for p in projects.split(",") if p.strip()]
    elif isinstance(projects, list):
        normalized = []
        for p in projects:
            if isinstance(p, dict) and p.get("title"):
                normalized.append({"title": p.get("title", ""), "description": p.get("description", "")})
            elif isinstance(p, str) and p.strip():
                normalized.append({"title": p.strip(), "description": ""})
        parsed["projects"] = normalized

    # ── Normalize skills: ensure dict of lists ────────────────────────────────
    skills = parsed.get("skills", {})
    if isinstance(skills, str):
        # Legacy: comma-separated string → put in generic category
        skill_list = [s.strip() for s in skills.split(",") if s.strip()]
        parsed["skills"] = {"technical": skill_list} if skill_list else {}
    elif isinstance(skills, list):
        # List of strings → put in generic category
        parsed["skills"] = {"technical": [s for s in skills if s]} if skills else {}
    elif isinstance(skills, dict):
        # Remove empty categories
        parsed["skills"] = {k: v for k, v in skills.items() if isinstance(v, list) and v}
    else:
        parsed["skills"] = {}

    return parsed


# ─────────────────────────────────────────────────────────────────────────────
# Build the CosmosDB document merging CV + platform data
# ─────────────────────────────────────────────────────────────────────────────
def _build_cosmos_doc(
    user_id: str,
    existing: dict,
    cv_structured: dict,
    domain: str,
    quiz_data: dict | None,
    labs_data: list,
    certs_data: list,
    extra_data: dict,
) -> dict:
    """
    Merges:
      - Original CV structured fields (name, email, skills, summary, etc.)
      - Certifications: those found in the CV + those selected from platform
      - Projects: labs selected from platform
      - Languages / Education / Experience: from extra_data (user-filled missing sections)
      - Quiz: domain + level from platform quiz
    """

    # ── Certifications: merge CV original (array of objects) + platform selected ─
    cv_certs_raw = cv_structured.get("certifications", []) or []
    # Ensure each CV cert is a proper dict with source tag
    cv_cert_list = []
    for c in cv_certs_raw:
        if isinstance(c, dict) and c.get("title"):
            cv_cert_list.append({
                "title":  c.get("title", "").strip(),
                "org":    c.get("org", "").strip(),
                "date":   c.get("date", "").strip(),
                "source": "cv",
            })

    # Platform certs selected by user
    platform_cert_list = [
        {
            "title":  c.get("title", "").strip(),
            "org":    c.get("org", "").strip(),
            "date":   c.get("date", "").strip(),
            "source": "platform",
        }
        for c in certs_data if c.get("title")
    ]

    # Deduplicate: if a platform cert has the same title as a CV cert, keep platform version
    platform_titles = {c["title"].lower() for c in platform_cert_list}
    cv_cert_list_deduped = [c for c in cv_cert_list if c["title"].lower() not in platform_titles]
    all_certs = cv_cert_list_deduped + platform_cert_list

    # ── Projects: CV projects + platform labs ────────────────────────────────
    cv_projects_raw = cv_structured.get("projects", []) or []
    cv_project_list = []
    for p in cv_projects_raw:
        if isinstance(p, dict) and p.get("title"):
            cv_project_list.append({
                "title":       p.get("title", "").strip(),
                "description": p.get("description", "").strip(),
                "source":      "cv",
            })

    platform_lab_list = [
        {
            "title":       l.get("title", "").strip(),
            "date":        l.get("date", "").strip(),
            "score":       l.get("score", 0),
            "description": f"SUBUL Lab — Score: {l.get('score', 0)}/100",
            "source":      "platform_lab",
        }
        for l in labs_data if l.get("title")
    ]

    projects = cv_project_list + platform_lab_list

    # ── Extra data (user-filled missing sections) ────────────────────────────
    languages  = extra_data.get("languages", [])
    education  = extra_data.get("education", [])
    experience = extra_data.get("experience", [])

    # ── Quiz ────────────────────────────────────────────────────────────────
    quiz_domain = (quiz_data or {}).get("domain", domain)
    quiz_level  = (quiz_data or {}).get("level", "")
    quiz_score  = (quiz_data or {}).get("score", 0)

    doc = {
        "id":               user_id,
        # Basic identity — prefer new data, null if truly missing
        "first_name":       cv_structured.get("first_name")       or existing.get("first_name") or None,
        "last_name":        cv_structured.get("last_name")        or existing.get("last_name")  or None,
        "email":            cv_structured.get("email")            or existing.get("email")      or None,
        "phone":            cv_structured.get("phone")            or existing.get("phone")      or None,
        "linkedin":         cv_structured.get("linkedin")         or existing.get("linkedin")   or None,
        # Professional profile
        "role":             cv_structured.get("role")             or existing.get("role")             or None,
        "seniority":        cv_structured.get("seniority")        or existing.get("seniority")        or None,
        "years_experience": cv_structured.get("years_experience") or existing.get("years_experience") or None,
        "industry":         cv_structured.get("industry")         or existing.get("industry")         or None,
        "domain":           quiz_domain or domain or None,
        "level":            quiz_level  or existing.get("level")  or None,
        # Skills as categories dict
        "skills":           cv_structured.get("skills")           or existing.get("skills")    or {},
        # Summary
        "summary":          cv_structured.get("summary")          or existing.get("summary")   or None,
        # Education as array of all entries
        "education":        cv_structured.get("education")        or existing.get("education") or [],
        # Platform quiz
        "quiz": {
            "domain": quiz_domain,
            "level":  quiz_level,
            "score":  quiz_score,
        } if quiz_data else existing.get("quiz"),
        # Merged certifications (CV original + platform)
        "certifications": all_certs,
        # Labs as projects
        "projects": projects,
        # User-filled missing sections
        "languages":         languages  or existing.get("languages", []),
        "experience_entries": experience or existing.get("experience_entries", []),
    }

    return doc


# ═════════════════════════════════════════════════════════════════════════════
# ENDPOINT 1 — POST /extract-cv
# ─────────────────────────────────────────────────────────────────────────────
# Extracts text from the uploaded CV and returns detected missing sections.
# No ATS scoring, no LLM enrichment — fast and lightweight.
# ═════════════════════════════════════════════════════════════════════════════

@app.post("/extract-cv")
async def extract_cv(file: UploadFile = File(...)):
    content  = await file.read()
    filename = (file.filename or "").lower()

    # ── Text extraction ───────────────────────────────────────────────────────
    if filename.endswith(".pdf"):
        raw_text = extract_text_from_pdf(content)
    elif filename.endswith(".docx"):
        raw_text = extract_text_from_docx(content)
    elif filename.endswith(".txt"):
        raw_text = content.decode("utf-8", errors="ignore")
    else:
        return JSONResponse(
            {"error": "Unsupported file type. Please upload PDF, DOCX, or TXT."},
            status_code=400,
        )

    log.info("📄 /extract-cv — %d chars from %s", len(raw_text), file.filename)

    # ── Content guard ─────────────────────────────────────────────────────────
    clean_text = _clean_noise(raw_text)
    ok, reason = _has_real_content(clean_text)
    if not ok:
        return JSONResponse({"error": reason}, status_code=422)

    # ── Detect missing sections ───────────────────────────────────────────────
    sections = parse_cv_sections(raw_text)
    missing  = []
    if not sections.get("experience"):  missing.append("experience")
    if not sections.get("education"):   missing.append("education")
    if not sections.get("languages"):   missing.append("languages")

    log.info("🔍 Missing sections: %s", missing)

    return JSONResponse({
        "text":             raw_text,
        "missing_sections": missing,
    })


# ═════════════════════════════════════════════════════════════════════════════
# ENDPOINT 2 — POST /save-cv
# ─────────────────────────────────────────────────────────────────────────────
# Receives the CV file + user selections + extra user-filled data,
# extracts structured fields via LLM, merges everything, and upserts
# to CosmosDB. Returns {"status": "saved"}.
# ═════════════════════════════════════════════════════════════════════════════

@app.post("/save-cv")
async def save_cv(
    file:       UploadFile = File(...),
    user_id:    str        = Form(""),
    quiz_data:  str        = Form("null"),
    labs_data:  str        = Form("[]"),
    certs_data: str        = Form("[]"),
    extra_data: str        = Form("{}"),
):
    if not user_id or user_id == "user_default":
        return JSONResponse({"error": "user_id is required to save."}, status_code=400)

    content  = await file.read()
    filename = (file.filename or "").lower()

    # ── Extract text ──────────────────────────────────────────────────────────
    if filename.endswith(".pdf"):
        raw_text = extract_text_from_pdf(content)
    elif filename.endswith(".docx"):
        raw_text = extract_text_from_docx(content)
    elif filename.endswith(".txt"):
        raw_text = content.decode("utf-8", errors="ignore")
    else:
        return JSONResponse({"error": "Unsupported file type."}, status_code=400)

    log.info("📄 /save-cv — %d chars from %s — user: %s", len(raw_text), file.filename, user_id)

    # ── Parse JSON form fields ────────────────────────────────────────────────
    try:
        quiz  = json.loads(quiz_data)
    except Exception:
        quiz  = None
    try:
        labs  = json.loads(labs_data)
    except Exception:
        labs  = []
    try:
        certs = json.loads(certs_data)
    except Exception:
        certs = []
    try:
        extra = json.loads(extra_data)
    except Exception:
        extra = {}

    # ── Detect domain ─────────────────────────────────────────────────────────
    domain = detect_domain(raw_text)

    # ── LLM: extract structured CV fields ────────────────────────────────────
    try:
        cv_structured = _extract_cv_structured(raw_text)
        log.info("✓ CV structured extraction OK")
    except Exception as e:
        log.error("⚠ LLM extraction failed: %s — using empty fields", e)
        cv_structured = {}

    # ── Load existing CosmosDB doc (to not overwrite good data) ──────────────
    existing = {}
    try:
        container = _get_cosmos_container()
        try:
            existing = container.read_item(item=user_id, partition_key=user_id)
        except cosmos_exceptions.CosmosResourceNotFoundError:
            existing = {}
    except Exception as e:
        log.warning("⚠ CosmosDB read failed (will create new): %s", e)

    # ── Build merged document ─────────────────────────────────────────────────
    doc = _build_cosmos_doc(
        user_id=user_id,
        existing=existing,
        cv_structured=cv_structured,
        domain=domain,
        quiz_data=quiz,
        labs_data=labs,
        certs_data=certs,
        extra_data=extra,
    )

    # ── Upsert to CosmosDB ────────────────────────────────────────────────────
    try:
        container = _get_cosmos_container()
        container.upsert_item(doc)
        log.info("✅ CosmosDB upsert OK — user_id: %s", user_id)
    except Exception as e:
        log.error("❌ CosmosDB save failed: %s", e)
        return JSONResponse({"error": f"Database save failed: {str(e)}"}, status_code=500)

    return JSONResponse({
        "status":  "saved",
        "user_id": user_id,
        "domain":  domain,
        "certifications_count": len(doc.get("certifications", [])),
        "projects_count":       len(doc.get("projects", [])),
    })


# ═════════════════════════════════════════════════════════════════════════════
# ENDPOINT 3 — GET /platform-data/{user_id}
# Previously in enhance_cv.py — moved here so it works with the new pipeline.
# ═════════════════════════════════════════════════════════════════════════════

@app.get("/platform-data/{user_id}")
async def get_platform_data(user_id: str = FPath(...)):
    data = get_platform_data_or_fallback(user_id)

    if data.get("status") == "ok":
        quiz_domain = (data.get("quiz") or {}).get("domain", "")
        recs = fetch_recommendations(user_id, quiz_domain)
        data["recommendations"] = recs
    else:
        data["recommendations"] = {"certifications": [], "labs": []}

    log.info("📡 /platform-data/%s → status=%s labs=%d certs=%d",
             user_id, data.get("status"),
             len(data.get("labs", [])),
             len(data.get("certifications", [])))

    return JSONResponse(data)