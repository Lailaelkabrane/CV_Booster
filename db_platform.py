# db_platform.py — Fetch real platform data from Azure Cosmos PostgreSQL
import os
import logging

log = logging.getLogger("cv_booster")

DB_HOST     = os.getenv("AZURE_HOST",     "c-shared-db-cluster.6uhq2s7lsktnhd.postgres.cosmos.azure.com")
DB_NAME     = os.getenv("AZURE_DB",       "shared-db")
DB_USER     = os.getenv("AZURE_USER",     "citus")
DB_PASSWORD = os.getenv("AZURE_PASSWORD")
DB_PORT     = int(os.getenv("AZURE_PORT", "5432"))

# No more fake demo data — every status has a clear meaning
FALLBACK_PLATFORM_DATA = {
    "status": "db_error",
    "quiz":           None,
    "labs":           [],
    "certifications": [],
}

DOMAIN_MAP = {
    "cyberPercentage": "Cybersecurity",
    "aiPercentage":    "Artificial Intelligence & ML",
    "cloudPercentage": "Cloud Computing",
    "dataPercentage":  "Data Analytics & BI",
    "devPercentage":   "Software Engineering",
}

PROFILE_TO_LEVEL = {
    "expert":        "Expert",
    "senior":        "Expert",
    "advanced":      "Advanced",
    "engineer":      "Advanced",
    "analyst":       "Advanced",
    "intermediate":  "Intermediate",
    "junior":        "Intermediate",
    "beginner":      "Beginner",
    "debutant":      "Beginner",
    "fundamentals":  "Beginner",
}

def _score_to_level(score: int) -> str:
    if score >= 75: return "Expert"
    if score >= 55: return "Advanced"
    if score >= 35: return "Intermediate"
    return "Beginner"

def _fmt_date(dt) -> str:
    if dt is None: return ""
    if isinstance(dt, str): return dt
    try: return dt.strftime("%b %Y")
    except: return str(dt)

def _get_conn():
    import psycopg2
    return psycopg2.connect(
        host=DB_HOST, dbname=DB_NAME, user=DB_USER,
        password=DB_PASSWORD, port=DB_PORT,
        sslmode="require", connect_timeout=8,
    )

def _fetch_quiz(cur, uid: int):
    try:
        cur.execute("""
            SELECT domain, scores, "primaryProfile", completed_at
            FROM   assessment_results
            WHERE  user_id = %s AND scores IS NOT NULL AND "primaryProfile" IS NOT NULL
            ORDER  BY completed_at DESC LIMIT 1
        """, (uid,))
        row = cur.fetchone()
        if not row: return None
        scores_json = row[1] or {}
        profile_raw = row[2] or ""
        best_domain, best_pct = row[0] or "General", 0
        for key, label in DOMAIN_MAP.items():
            pct = scores_json.get(key, 0)
            if isinstance(pct, (int, float)) and pct > best_pct:
                best_pct, best_domain = pct, label
        total_score = int(best_pct) if best_pct > 0 else min(
            sum(v for v in scores_json.values() if isinstance(v, (int, float))), 100)
        profile_lower = profile_raw.lower()
        level = None
        for keyword, lvl in PROFILE_TO_LEVEL.items():
            if keyword in profile_lower: level = lvl; break
        if not level: level = _score_to_level(total_score)
        return {"domain": best_domain, "score": total_score, "level": level}
    except Exception as e:
        log.error("Quiz fetch error uid=%s: %s", uid, e)
        cur.connection.rollback(); return None

def _fetch_labs(cur, uid: int):
    try:
        cur.execute("""
            SELECT l.id, l.title, lp.time_spent, lp.completed_at
            FROM   lab_progress lp JOIN labs l ON l.id = lp.lab_id
            WHERE  lp.user_id = %s AND lp.is_completed = true
            ORDER  BY lp.completed_at DESC
        """, (uid,))
        rows = cur.fetchall()
        result = []
        for i, row in enumerate(rows):
            ts = row[2] or 0
            score = min(70 + min(ts // 10, 30), 100) if ts > 0 else 80
            result.append({"id": f"lab{row[0]}", "title": row[1] or f"Lab {i+1}",
                           "score": score, "date": _fmt_date(row[3])})
        return result
    except Exception as e:
        log.error("Labs fetch error uid=%s: %s", uid, e)
        cur.connection.rollback(); return []

def _fetch_certifications(cur, uid: int):
    try:
        cur.execute("""
            SELECT DISTINCT c.id, c.title, c.provider, ucp.completed_at
            FROM   user_course_progress ucp
            JOIN   courses co       ON co.id = ucp.course_id
            JOIN   certifications c ON c.id  = co.certification_id
            WHERE  ucp.user_id = %s
            ORDER  BY ucp.completed_at DESC NULLS LAST
        """, (uid,))
        rows = cur.fetchall()
        return [{"id": f"cert{r[0]}", "title": r[1] or f"Cert {r[0]}",
                 "org": r[2] or "Platform", "date": _fmt_date(r[3])}
                for r in rows]
    except Exception as e:
        log.error("Certs fetch error uid=%s: %s", uid, e)
        cur.connection.rollback(); return []

def fetch_platform_data(user_id: str) -> dict:
    if not user_id or user_id in ("", "user_default"):
        return {"status": "no_user_id", "quiz": None, "labs": [], "certifications": []}

    try:
        uid = int(user_id)
    except ValueError:
        return {"status": "invalid_user", "quiz": None, "labs": [], "certifications": []}

    try:
        conn = _get_conn()
        cur  = conn.cursor()

        # Check user exists
        cur.execute("SELECT id, full_name FROM users WHERE id = %s", (uid,))
        row = cur.fetchone()
        if not row:
            cur.close(); conn.close()
            log.warning("User %s not found", uid)
            return {"status": "invalid_user", "quiz": None, "labs": [], "certifications": []}

        log.info("✓ User found: id=%s name=%s", row[0], row[1])

        quiz  = _fetch_quiz(cur, uid)
        labs  = _fetch_labs(cur, uid)
        certs = _fetch_certifications(cur, uid)
        cur.close(); conn.close()

        # User exists but has NO data at all
        if not quiz and not labs and not certs:
            log.info("User %s exists but has no platform data", uid)
            return {"status": "no_data", "quiz": None, "labs": [], "certifications": []}

        return {
            "status": "ok",
            "quiz":           quiz  or {"domain": "General", "score": 0, "level": "Beginner"},
            "labs":           labs,
            "certifications": certs,
        }

    except Exception as e:
        log.error("DB error user %s: %s", user_id, e)
        return {"status": "db_error", "quiz": None, "labs": [], "certifications": []}

def get_platform_data_or_fallback(user_id: str) -> dict:
    try:
        return fetch_platform_data(user_id)
    except Exception as e:
        log.error("Unexpected error: %s", e)
        return {"status": "db_error", "quiz": None, "labs": [], "certifications": []}


# ── Domain matching ───────────────────────────────────────────────────────────
_DB_DOMAIN_MAP_FALLBACK = {
    "cloud":    ["cloud", "cloud computing"],
    "ia":       ["ai", "artificial intelligence", "ai & ml", "machine learning"],
    "securite": ["cybersecurity", "cyber"],
    "data":     ["data analytics", "data analytics & bi", "data science"],
    "dev":      ["software engineering", "web development", "devops"],
}

_domain_embedder = None
_domain_emb_cache: dict = {}

def _get_domain_embedder():
    global _domain_embedder
    if _domain_embedder is not None:
        return _domain_embedder
    try:
        from sentence_transformers import SentenceTransformer
        _domain_embedder = SentenceTransformer("all-MiniLM-L6-v2")
        log.info("✅ Domain embedder loaded (db_platform)")
    except ImportError:
        log.warning("⚠  sentence-transformers not installed — domain matching uses keyword fallback")
        _domain_embedder = False
    return _domain_embedder

def _embed(text: str):
    if text not in _domain_emb_cache:
        from sentence_transformers import util as st_util
        _domain_emb_cache[text] = _get_domain_embedder().encode(
            text, convert_to_tensor=True, show_progress_bar=False)
    return _domain_emb_cache[text]

def _domain_matches(cert_domain: str, quiz_domain: str) -> bool:
    cert_d = cert_domain.lower().strip()
    quiz_d = quiz_domain.lower().strip()
    model  = _get_domain_embedder()
    if model:
        try:
            from sentence_transformers import util as st_util
            sim = float(st_util.cos_sim(_embed(cert_d), _embed(quiz_d))[0][0])
            log.debug("Domain similarity '%s' ↔ '%s': %.2f", cert_d, quiz_d, sim)
            return sim >= 0.45
        except Exception as e:
            log.error("Semantic domain match failed: %s — falling back to keywords", e)
    for db_key, quiz_keys in _DB_DOMAIN_MAP_FALLBACK.items():
        if db_key in cert_d:
            if any(q in quiz_d for q in quiz_keys):
                return True
    return False


def fetch_recommendations(user_id: str, quiz_domain: str) -> dict:
    """Fetch certifications the user has not completed yet, prioritized by domain."""
    if not user_id or user_id in ("", "user_default"):
        return {"certifications": [], "labs": []}
    try:
        uid = int(user_id)
    except ValueError:
        return {"certifications": [], "labs": []}

    try:
        conn = _get_conn()
        cur  = conn.cursor()

        cur.execute("""
            SELECT c.id, c.title, c.provider, c.domain, c.level, c.duration
            FROM   certifications c
            WHERE  c.available = true
              AND  c.id NOT IN (
                SELECT co.certification_id
                FROM   user_course_progress ucp
                JOIN   courses co ON co.id = ucp.course_id
                WHERE  ucp.user_id = %s
              )
            ORDER BY c.id
        """, (uid,))
        rows = cur.fetchall()

        all_certs = [
            {"id": r[0], "title": r[1] or "", "provider": r[2] or "",
             "domain": r[3] or "", "level": r[4] or "", "duration": r[5] or ""}
            for r in rows if r[1]
        ]

        domain_certs = [c for c in all_certs if _domain_matches(c["domain"], quiz_domain)]
        recommended  = domain_certs if domain_certs else all_certs

        cur.close(); conn.close()
        log.info("✓ %d cert recommendations for user %s (domain: %s)",
                 len(recommended), uid, quiz_domain)
        return {"certifications": recommended[:6], "labs": []}

    except Exception as e:
        log.error("Recommendations fetch error user %s: %s", user_id, e)
        return {"certifications": [], "labs": []}