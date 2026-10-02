# Standardized Species Pack Authoring Template

All species packs in the WarrenWise Youth Animal Training Academy adhere to a standardized 9-module schema to maintain pedagogical consistency and facilitate cross-species mastery tracking.

## Standard Pack Metadata Schema
```javascript
export const SAMPLE_SPECIES_PACK = {
  id: 'species_id',             // Unique identifier (e.g., 'swine', 'sheep', 'cattle')
  name: 'Species Academy Name', // e.g., 'Swine Project Academy'
  species: 'Common Name',       // e.g., 'Market Swine'
  category: 'Livestock Category',// e.g., 'Large Livestock'
  icon: 'Shield',               // Lucide icon name
  version: '1.0.0',
  lastVerifiedDate: 'YYYY-MM-DD',
  verifiedBy: 'Extension Livestock Specialist',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [ /* 9 modules matching standard keys */ ]
};
```

## The 9 Mandatory Module Topics

Every pack must implement all 9 topics in this exact order:

| Order | Module ID | Core Educational Focus | Mandatory Safety Gate? |
|---|---|---|---|
| **1** | `basics_breeds` | Breeds, market vs breeding purposes, body types, standard varieties. | No |
| **2** | `daily_care` | Housing, penning dimensions, bedding safety, watering systems, temperature control. | No |
| **3** | `nutrition` | Digestive physiology (ruminant, hindgut, monogastric), daily rations, water, mineral needs. | Yes (Nutrition Review) |
| **4** | `health_biosecurity` | Daily observation checks, quarantine protocols, sanitizing, reporting signs of illness to vet. | **Yes (Mandatory Animal Safety Gate)** |
| **5** | `handling_welfare` | Humane handling, flight zones, low-stress movement, Five Freedoms of animal welfare. | **Yes (Mandatory Animal Safety Gate)** |
| **6** | `record_keeping` | Animal identification (ear tags, tattoos, notches), feed expense log, FCR / ADG math, budget. | No |
| **7** | `showmanship` | Table/ring presentation routine, show equipment, judge oral questions, ring courtesies. | No |
| **8** | `ethics_character` | The 4-H Pledge, ethical sportsmanship, no tampering or cosmetic cheating, withdrawal periods. | No |
| **9** | `communication_goals`| SMART project goals, public demonstrations, educational displays, year-end reflections. | No |

## Module Age Content Requirement
Each module must define `ageContent` across all 4 divisions:
- `cloverbud`: Early reader, visual, gentle, story-based read-aloud prompt, low-stakes check.
- `junior`: Step-by-step instructions, fundamental terms, practical checklists.
- `intermediate`: Applied biological principles, disqualifications, calculations.
- `senior`: Standard of Perfection allocations, pre-judge oral reasons, leadership.
