# CV-Booster-Agent
#  CV Booster — SUBUL Platform

> Plateforme intelligente d'enrichissement de CV alimentée par l'IA, intégrée à l'écosystème SUBUL.

 **[Voir la documentation complète & démo visuelle (PDF)](./CV_Booster_Demo.pdf)**

---

##  Vue d'ensemble

CV Booster est une suite de deux applications web qui permettent aux utilisateurs de :

1. **Enrichir et sauvegarder leur CV** avec leurs données réelles de la plateforme SUBUL (quiz de positionnement, certifications validées, labs complétés)
2. **Adapter leur CV à une offre d'emploi spécifique** grâce à une réécriture IA ciblée

---

##  Structure du projet

```
CV-Booster-Finale/
├── main.py                  # Point d'entrée FastAPI + scoring ATS
├── enhance_cv.py            # Réécriture LLM + génération DOCX
├── enhance_for_job.py       # Endpoint boost CV pour offre d'emploi
├── save_cv.py               # Extraction structurée + sauvegarde CosmosDB
├── cv_extraction.py         # Extraction texte PDF/DOCX (2 colonnes, vision)
├── db_platform.py           # Connexion PostgreSQL SUBUL
├── explain_ats.py           # Explication score ATS via LLM
├── .env                     # Variables d'environnement (non versionné)
├── Frontend/
│   ├── app/
│   │   ├── page.tsx                  # App 1 — CV Profile Builder
│   │   └── job-boost/page.tsx        # App 2 — Job CV Enhancer
│   └── components/
│       ├── CVBoosterApp.tsx
│       ├── JobBoosterApp.tsx
│       ├── EnrichScreen.tsx
│       ├── MissingSectionsModal.tsx
│       └── ResultInsights.tsx
└── CV_Booster_Demo.pdf      # Documentation & captures d'écran
```

---

##  Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | Next.js 15 + TypeScript |
| Backend | FastAPI (Python 3.12) |
| IA Générative | Azure OpenAI GPT-4o / GPT-4o-mini |
| Vision IA | GPT-4o Vision (CVs graphiques/scannés) |
| Base NoSQL | Azure CosmosDB (profils CV) |
| Base SQL | Azure Cosmos PostgreSQL (données SUBUL) |
| Embeddings | Sentence Transformers MiniLM |
| Génération DOCX | python-docx |

---

##  Installation

### Backend

```bash
cd CV-Booster-Finale
pip install -r requirements.txt
```

Créer un fichier `.env` à la racine 


```

Lancer le backend :

```bash
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

##  URLs d'accès

| Application | URL |
|-------------|-----|
| App 1 — CV Profile Builder | `http://localhost:3000/?user_id={ID}` |
| App 2 — Job CV Enhancer | `http://localhost:3000/job-boost?user_id={ID}&job_id={JOB_ID}` |
| API Backend | `http://localhost:8000` |
| Documentation API (Swagger) | `http://localhost:8000/docs` |

---

##  Fonctionnalités

### App 1 — CV Profile Builder
- Upload CV (PDF, DOCX, TXT)
- Extraction intelligente avec détection de mise en page 2 colonnes
- Enrichissement avec données réelles SUBUL (quiz, certifications, labs)
- Complétion des sections manquantes (langues, expérience, éducation)
- Structuration LLM et sauvegarde dans Azure CosmosDB

### App 2 — Job CV Enhancer
- Affichage des détails de l'offre d'emploi
- Récupération du CV sauvegardé depuis CosmosDB
- Réécriture IA ciblée sur le poste (mots-clés, profil, compétences)
- Choix de langue de sortie (Auto / Français / Anglais)
- Téléchargement en 3 formats : ATS Optimized, Basic/Classic, Modern/Creative

---

##  Documentation

La documentation complète avec les captures d'écran, les pipelines détaillés et les instructions de configuration est disponible dans le fichier **[CV_Booster_Demo.pdf](./CV_Booster_Demo.pdf)**.

---

