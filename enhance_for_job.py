# ─────────────────────────────────────────────────────────────────────────────
# enhance_for_job.py — CV enhancement for a specific job offer
#
#   POST /enhance-cv-for-job   → fetch CV from CosmosDB + job hardcoded →
#                                LLM rewrites CV for the job → return DOCX
#   GET  /job-data/{job_id}    → return job info (hardcoded for now)
#
# Imported by main.py:  import enhance_for_job
# ─────────────────────────────────────────────────────────────────────────────
import re
import io
import json
import logging

from fastapi import Form, Path as FPath
from fastapi.responses import StreamingResponse, JSONResponse
from azure.cosmos import CosmosClient, PartitionKey, exceptions as cosmos_exceptions

from main import (
    app, client, log,
    AZURE_DEPLOYMENT,
    COSMOS_ENDPOINT, COSMOS_KEY, COSMOS_DB, COSMOS_CONTAINER,
)
from enhance_cv import (
    generate_docx,
    parse_llm_output,
    infer_job_title,
    DOMAIN_TO_ROLE, LEVEL_TO_SENIORITY,
)
from main import calculate_ats_score, parse_cv_sections, detect_domain, get_domain_keywords


# ─────────────────────────────────────────────────────────────────────────────
# HARDCODED DEMO JOB  (replace with real CosmosDB fetch when job search is ready)
# The developer of job search will replace this with a real query
# ─────────────────────────────────────────────────────────────────────────────
DEMO_JOBS = {
    "32e610bd-3b5c-4835-8582-2a135368e74e": {
        "id":              "32e610bd-3b5c-4835-8582-2a135368e74e",
        "title":           "Principal Full Stack Developer",
        "location":        "Canada",
        "seniority":       "Lead",
        "description":     "Lead, design, and develop high-quality, secure, performant applications. Provide project and team leadership to break down, estimate, and organize work.",
        "responsibilities":"Lead, design, and develop high-quality, secure, performant applications. Provide project and team leadership.",
        "requirements":    "Strong experience in full stack development, leadership, cloud technologies, React, Node.js, Python, CI/CD.",
        "source":          "eluta",
    },
    # Add more hardcoded jobs here as needed
    # "another-job-id": { ... }
}


def _get_cosmos_container():
    c  = CosmosClient(COSMOS_ENDPOINT, credential=COSMOS_KEY)
    db = c.create_database_if_not_exists(COSMOS_DB)
    return db.create_container_if_not_exists(
        id=COSMOS_CONTAINER,
        partition_key=PartitionKey(path="/id"),
    )


def _fetch_user_cv_from_cosmos(user_id: str) -> dict | None:
    """Fetch the user's saved CV document from CosmosDB."""
    try:
        container = _get_cosmos_container()
        try:
            doc = container.read_item(item=user_id, partition_key=user_id)
            log.info("✓ CV fetched from CosmosDB for user %s", user_id)
            return doc
        except cosmos_exceptions.CosmosResourceNotFoundError:
            log.warning("No CV found in CosmosDB for user %s", user_id)
            return None
    except Exception as e:
        log.error("CosmosDB fetch error user %s: %s", user_id, e)
        return None


def _get_job(job_id: str) -> dict | None:
    """Get job data — hardcoded for now, real CosmosDB query later."""
    return DEMO_JOBS.get(job_id)


def _cosmos_doc_to_cv_text(doc: dict) -> str:
    """Convert a CosmosDB CV document back to plain text for the LLM."""
    lines = []

    # Name
    name = f"{doc.get('first_name', '')} {doc.get('last_name', '')}".strip()
    if name:
        lines.append(name)

    # Contact
    contact_parts = [p for p in [
        doc.get("email", ""),
        doc.get("phone", ""),
        doc.get("linkedin", ""),
    ] if p]
    if contact_parts:
        lines.append("  |  ".join(contact_parts))

    # Summary
    if doc.get("summary"):
        lines.append("\nPROFILE")
        lines.append(doc["summary"])

    # Experience entries
    exp = doc.get("experience_entries", [])
    if exp:
        lines.append("\nPROFESSIONAL EXPERIENCE")
        for e in exp:
            title   = e.get("title", "")
            company = e.get("company", "")
            date    = f"{e.get('start','')} - {e.get('end','')}".strip(" -")
            desc    = e.get("description", "")
            if title or company:
                lines.append(f"**{title} | {company}**\t{date}")
            if desc:
                for sentence in desc.split(". "):
                    if sentence.strip():
                        lines.append(f"- {sentence.strip()}")

    # Education — now an array of all entries
    edu_array = doc.get("education", [])
    edu_extra = doc.get("education_entries", [])  # user-filled from modal
    all_edu = (edu_array if isinstance(edu_array, list) else []) + (edu_extra or [])
    if all_edu:
        lines.append("\nEDUCATION")
        for e in all_edu:
            if isinstance(e, dict):
                degree = e.get("degree", "") or e.get("title", "")
                inst   = e.get("institution", "") or e.get("university", "")
                start  = e.get("start", "")
                end    = e.get("end", "")
                field  = e.get("field", "")
                date_s = f"{start} - {end}".strip(" -") if start or end else ""
                if degree:
                    lines.append(f"**{degree}**\t{date_s}")
                if inst:
                    lines.append(f"  {inst}{' — ' + field if field else ''}")
    elif isinstance(edu_array, str) and edu_array:
        lines.append("\nEDUCATION")
        lines.append(edu_array)

    # Skills — now a dict of categories
    skills = doc.get("skills", {})
    if skills:
        lines.append("\nSKILLS")
        if isinstance(skills, dict):
            for cat, skill_list in skills.items():
                if skill_list:
                    cat_label = cat.replace("_", " ").title()
                    lines.append(f"**{cat_label}:** {', '.join(skill_list)}")
        elif isinstance(skills, str) and skills:
            lines.append(skills)

    # Certifications
    certs = doc.get("certifications", [])
    if certs:
        lines.append("\nCERTIFICATIONS")
        for c in certs:
            title = c.get("title", "")
            org   = c.get("org", "")
            date  = c.get("date", "")
            if title:
                lines.append(f"**{title}** · {org}\t{date}")

    # Projects (labs)
    projects = doc.get("projects", [])
    if projects:
        lines.append("\nPROJECTS")
        for p in projects:
            title = p.get("title", "")
            desc  = p.get("description", "")
            date  = p.get("date", "")
            if title:
                lines.append(f"**{title}**\t{date}")
                if desc:
                    lines.append(f"- {desc}")

    # Languages
    langs = doc.get("languages", [])
    if langs:
        lines.append("\nLANGUAGES")
        for l in langs:
            lang  = l.get("language", "")
            level = l.get("level", "")
            if lang:
                lines.append(f"{lang}: {level}" if level else lang)

    return "\n".join(lines)


def _generate_cv_for_job(cv_text: str, job: dict, platform_doc: dict, cv_language: str = "auto") -> str:
    """Call LLM to rewrite the CV optimized for a specific job."""

    # Build job context
    job_context = "\n".join([
        f"Job Title: {job.get('title', '')}",
        f"Location: {job.get('location', '')}",
        f"Seniority: {job.get('seniority', '')}",
        f"Description: {job.get('description', '')}",
        f"Responsibilities: {job.get('responsibilities', '')}",
        f"Requirements: {job.get('requirements', '')}",
    ])

    # Determine output language
    if cv_language == "fr":
        cv_lang = "French"
    elif cv_language == "en":
        cv_lang = "English"
    else:
        cv_lang = "French" if any(w in cv_text[:500].lower() for w in [
            "expérience", "éducation", "compétences", "formation", "résumé",
            "projets", "langues", "certifications", "ingénieur"
        ]) else "English"

    # Platform quiz info
    quiz   = platform_doc.get("quiz") or {}
    domain = quiz.get("domain", "")
    level  = quiz.get("level", "")

    # Build strong language instruction
    lang_instruction = f"""
═══════════════════════════════════════════
CRITICAL LANGUAGE REQUIREMENT — NON-NEGOTIABLE:
You MUST write the ENTIRE CV output in {cv_lang.upper()}.
- Translate ALL content to {cv_lang} — profile, bullets, descriptions, section headers
- This applies even if the original CV is in a different language
- Only proper nouns (names, company names, tool names, certification titles) stay as-is
- Section headers must be in {cv_lang} and ALL CAPS
- Do NOT write a single sentence in any other language
═══════════════════════════════════════════
"""

    system_prompt = f"""You are an expert multilingual CV writer.{lang_instruction}
TARGET JOB:
{job_context}

INSTRUCTIONS:
- Rewrite the PROFILE section to directly address this job's requirements
- Emphasize skills and experience that match the job description
- Use keywords from the job description naturally throughout the CV
- Reorder skills to highlight the most relevant ones first
- Keep ALL original information — do not invent or remove real content
- Keep ALL certifications from the original CV
- Keep ALL projects from the original CV
- NEVER invent new experiences, projects, or skills

OUTPUT FORMAT:
- First line = candidate full name only
- Section headers in ALL CAPS in {cv_lang}
- Use **text** markers ONLY for: job titles, company names, degree titles, project names, skill labels
- NEVER wrap dates in ** markers
- Use \\t (tab) to right-align dates
- Blank line between sections
"""

    user_prompt = f"""CANDIDATE'S CV:
---
{cv_text}
---

{f"Platform domain: {domain} — Level: {level}" if domain else ""}

REMINDER: Write the ENTIRE output in {cv_lang.upper()}. Translate everything to {cv_lang}.
Rewrite this CV optimized for the job offer above."""

    resp = client.chat.completions.create(
        model=AZURE_DEPLOYMENT,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": user_prompt},
        ],
        temperature=0.3,
        max_tokens=3000,
    )
    return resp.choices[0].message.content.strip()


# ═════════════════════════════════════════════════════════════════════════════
# ENDPOINT 1 — GET /job-data/{job_id}
# Returns job info for the frontend to display
# ═════════════════════════════════════════════════════════════════════════════

@app.get("/job-data/{job_id}")
async def get_job_data(job_id: str = FPath(...)):
    job = _get_job(job_id)
    if not job:
        return JSONResponse({"error": "Job not found"}, status_code=404)
    # Return only display fields (no internal scoring)
    return JSONResponse({
        "id":              job.get("id", ""),
        "title":           job.get("title", ""),
        "location":        job.get("location", ""),
        "seniority":       job.get("seniority", ""),
        "description":     job.get("description", ""),
        "responsibilities":job.get("responsibilities", ""),
        "requirements":    job.get("requirements", ""),
        "source":          job.get("source", ""),
    })


# ═════════════════════════════════════════════════════════════════════════════
# ENDPOINT 2 — POST /enhance-cv-for-job
# Fetches user CV + job from CosmosDB, rewrites with LLM, returns DOCX
# ═════════════════════════════════════════════════════════════════════════════

@app.post("/enhance-cv-for-job")
async def enhance_cv_for_job(
    user_id:     str = Form(...),
    job_id:      str = Form(...),
    cv_format:   str = Form("ats"),
    cv_language: str = Form("auto"),  # "auto" | "fr" | "en"
):
    log.info("🎯 Enhance for job — user: %s | job: %s | format: %s",
             user_id, job_id, cv_format)

    # ── 1. Fetch job ──────────────────────────────────────────────────────────
    job = _get_job(job_id)
    if not job:
        return JSONResponse({"error": f"Job '{job_id}' not found."}, status_code=404)

    # ── 2. Fetch user CV from CosmosDB ────────────────────────────────────────
    cv_doc = _fetch_user_cv_from_cosmos(user_id)
    if not cv_doc:
        return JSONResponse({
            "error": "No saved CV found for this user. Please save your CV first."
        }, status_code=404)

    # ── 3. Convert CosmosDB doc → plain text ──────────────────────────────────
    cv_text = _cosmos_doc_to_cv_text(cv_doc)
    if not cv_text or len(cv_text.strip()) < 50:
        return JSONResponse({"error": "CV data is incomplete."}, status_code=422)

    # ── 4. ATS score BEFORE ───────────────────────────────────────────────────
    domain          = detect_domain(cv_text)
    domain_keywords = get_domain_keywords(domain)
    sections_before = parse_cv_sections(cv_text)
    score_before    = calculate_ats_score(sections_before, cv_text, domain_keywords=domain_keywords)
    log.info("📊 ATS score BEFORE: %d/100", score_before["total"])

    # ── 5. LLM rewrite for job ────────────────────────────────────────────────
    try:
        llm_text = _generate_cv_for_job(cv_text, job, cv_doc, cv_language)
        log.info("✓ LLM output: %d chars", len(llm_text))
        if len(llm_text) < 100:
            return JSONResponse({"error": "LLM response too short."}, status_code=500)
    except Exception as e:
        log.error("LLM error: %s", e)
        return JSONResponse({"error": f"LLM error: {str(e)}"}, status_code=500)

    # ── 6. Parse + ATS score AFTER ────────────────────────────────────────────
    parsed_llm = parse_llm_output(llm_text)

    # Infer job title from platform quiz
    platform_data = {"quiz": cv_doc.get("quiz")}
    parsed_llm["job_title"] = infer_job_title(platform_data, parsed_llm["sections"])

    score_after = calculate_ats_score(
        {**parsed_llm["sections"],
         "header": [parsed_llm["name"]] + parsed_llm["sections"].get("contact", [])},
        llm_text,
        domain_keywords=domain_keywords,
    )
    log.info("📊 ATS score AFTER: %d/100 (Δ %+d)",
             score_after["total"], score_after["total"] - score_before["total"])

    # ── 7. Generate DOCX ──────────────────────────────────────────────────────
    docx_bytes = generate_docx(parsed_llm, cv_format)
    name       = parsed_llm["name"].split()[0] if parsed_llm["name"] else "CV"
    job_title_safe = re.sub(r"[^\w\s-]", "", job.get("title", "Job")).replace(" ", "_")[:30]

    return StreamingResponse(
        io.BytesIO(docx_bytes),
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={
            "Content-Disposition":    f'attachment; filename="{name}_CV_{job_title_safe}.docx"',
            "X-ATS-Score-Before":     str(score_before["total"]),
            "X-ATS-Score-After":      str(score_after["total"]),
            "X-ATS-Breakdown-Before": json.dumps(score_before["breakdown"]),
            "X-ATS-Breakdown-After":  json.dumps(score_after["breakdown"]),
            "X-Parsed-CV":            json.dumps(parsed_llm),
            "X-Domain":               domain,
            "X-Job-Title":            job.get("title", ""),
            "Access-Control-Expose-Headers":
                "X-ATS-Score-Before,X-ATS-Score-After,X-ATS-Breakdown-Before,"
                "X-ATS-Breakdown-After,X-Parsed-CV,X-Domain,X-Job-Title",
        },
    )