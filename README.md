# WarrenWise Youth Animal Training Academy 🍀
> **Standalone Educational Platform for 4-H & Youth Livestock Animal Projects**  
> *(Working title: 4-H Animal Training Academy)*

[![Tests](https://img.shields.io/badge/Tests-12%20Passed-emerald.svg)](file:///D:/Jason/animal-training-academy/test/runner.mjs)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)

---

## ⚠️ Important Legal & Accuracy Disclaimers
1. **Independent Educational Training App First**: WarrenWise Youth Animal Training Academy is an independent educational training platform. This application is **NOT affiliated with, endorsed by, sponsored by, or an official replacement for** the National 4-H Council, USDA National Institute of Food and Agriculture (NIFA), American Rabbit Breeders Association (ARBA), American Cavy Breeders Association (ACBA), Youth for the Quality Care of Animals (YQCA), or any state/county Cooperative Extension service.
2. **Observation & Prevention Only**: This application and its AI coaches do **NOT** provide veterinary diagnoses, prescriptions, treatment protocols, or medication dosages. Always consult a licensed veterinarian or local Extension specialist for sick or injured animals.
3. **Local Rules Notice**: Fair rules, weigh-in dates, age cutoffs, and exhibition classifications vary by state, county, and fair board. Always verify specific requirements with your local 4-H club leader, FFA advisor, or county extension agent.
4. **App Mastery Badges & Certificates**: Badges and certificates issued by this platform verify completion of app-based learning modules only. They do not constitute official county, state, national, or industry credentials.

---

## Key Features

### 1. Multi-Species Standardized Curriculum (9 Modules)
Every species pack implements a rigorous 9-module template:
1. **Basics & Breeds**: Body types, recognized breeds, variety groups, 4-Class vs 6-Class.
2. **Daily Care & Housing**: Cage dimensions, wire safety, resting boards, climate control (< 85°F).
3. **Nutrition Principles**: Hindgut & ruminant physiology, grass hay, daily Vitamin C requirements.
4. **Health Observation & Biosecurity**: 5-point daily health check, 30-day quarantine, RHDV2 awareness.
5. **Handling & Welfare**: Safe football carries, spinal protection, Five Freedoms.
6. **Record Keeping & Budgeting**: Feed conversion ratios (FCR), ear tattoos, project ledgers.
7. **Showmanship Foundations**: Complete step-by-step table routines, judge presentation, proper attire.
8. **Ethics & Character**: 4-H Pledge in the barn, avoiding cosmetic tampering, meat withdrawal periods.
9. **Project Communication & Goal Setting**: SMART goals, demonstrations, buyer invitation letters.

- **Phase 1 Deep Packs**: **Rabbits** (`rabbitsPack.js`) & **Cavies** (`caviesPack.js`)
- **Phase 2 Previews**: **Poultry** (`poultryPack.js`) & **Goats** (`goatsPack.js`)

### 2. Age-Responsive Learning Tracks
Dynamic vocabulary and cognitive depth tailored for 4 age divisions:
- **Cloverbud / Explorer (Ages 5–8)**: Gentle, picture-oriented, mascot-led, read-aloud prompts, low-stakes praise.
- **Junior (Ages 9–11)**: Step-by-step showmanship procedures, breed standards, feeding routines.
- **Intermediate (Ages 12–14)**: Body type mechanics, disqualifications, feed conversion math, biosecurity air exchange.
- **Senior (Ages 15–18)**: Standard of Perfection point allocations, genetics, pre-judge oral reasons, agricultural leadership.

### 3. Interactive Testing & Mastery Engine
- **Module Quizzes**: Instant feedback, explanations, and celebratory confetti.
- **Skillathon ID Drills**: Hands-on stations for Breed ID, Body Anatomy, Tack & Equipment, and Nutrition.
- **Showmanship Oral Studio**: Step-by-step 12-step drill, verbal scripts, stopwatch practice timer, simulated judge oral questions, and model answers.
- **Ethics Scenario Simulator**: Real-world moral dilemmas (fair heat emergencies, stray white hairs before class, market meat pen withdrawal dates).
- **Competency Radar & Mastery Heatmap**: Tracks the 9 dimensions and auto-generates personalized remediation plans.

### 4. WarrenWise Trainer AI
- **Adaptive Study Tutor**: Age-appropriate explanations from Tier 1 approved knowledge.
- **Quiz Remediation Assistant**: Breaks down missed questions in simpler terms.
- **Strict Veterinary Refusal Filter**: Immediately intercepts medication or dosage questions with an animal welfare alert and vet referral guidance.
- **Coach Assist Copilot**: Automatically generates learner progress summaries for club leaders and parents.

### 5. Coach, Leader & Parent Hub
- **Club Roster & Mastery Heatmaps**: View enrolled learners and knowledge gaps.
- **Assignment Engine**: Create homework drills with due dates.
- **Practical Barn Observation Checklist**: Live 1-to-5 scoring rubric for in-person barn showmanship practices.
- **Printable 4-H Record Book Export**: Standard formatted portfolio report for fair submission.

### 6. Knowledge Governance & Animal Safety Gate
- **Lifecycle Workflow**: `Draft` ➔ `In Review` ➔ `Approved` ➔ `Archived`.
- **Mandatory Animal Safety Gate**: Prevents publishing animal health, handling, or nutrition modules without certified safety sign-off.
- **Stale Content Auditing**: Flags content older than 365 days for annual re-verification.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/tappout360/animal-training-academy.git
cd animal-training-academy

# Install dependencies
npm install
```

### Running Tests
```bash
npm test
```

### Starting the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

---

## Documentation
- [`ACCURACY_POLICY.md`](docs/ACCURACY_POLICY.md)
- [`AI_SAFETY_BOUNDARIES.md`](docs/AI_SAFETY_BOUNDARIES.md)
- [`SPECIES_PACK_TEMPLATE.md`](docs/SPECIES_PACK_TEMPLATE.md)
- [`REUSE_ARCHITECTURE_MAP.md`](docs/REUSE_ARCHITECTURE_MAP.md)
- [`TEST_PLANS.md`](docs/TEST_PLANS.md)

---

## License
MIT License
