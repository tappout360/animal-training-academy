// WarrenWise Youth Animal Training Academy - Complete Badges & Awards Catalog
// 4-H-Style Badges, Multi-Species Mastery, Skill Badges, Streaks, and Leadership Accolades

export const BADGE_TIERS = {
  BRONZE: { 
    id: 'BRONZE',
    label: 'Bronze Clover', 
    color: 'from-amber-600 to-amber-700', 
    border: 'border-amber-400',
    bg: 'bg-amber-50 text-amber-800'
  },
  SILVER: { 
    id: 'SILVER',
    label: 'Silver Star', 
    color: 'from-slate-400 to-slate-500', 
    border: 'border-slate-300',
    bg: 'bg-slate-50 text-slate-700'
  },
  GOLD: { 
    id: 'GOLD',
    label: 'Gold Champion', 
    color: 'from-amber-400 to-yellow-500', 
    border: 'border-yellow-300',
    bg: 'bg-yellow-50 text-yellow-800'
  },
  PLATINUM: { 
    id: 'PLATINUM',
    label: 'Ruby Grand Champion', 
    color: 'from-rose-500 to-red-600', 
    border: 'border-rose-300',
    bg: 'bg-rose-50 text-rose-800'
  },
  CLOVER: { 
    id: 'CLOVER',
    label: 'Emerald Four-Leaf', 
    color: 'from-emerald-500 to-green-600', 
    border: 'border-emerald-300',
    bg: 'bg-emerald-50 text-emerald-800'
  }
};

export const BADGE_CATEGORIES = [
  { id: 'all', label: 'All Badges' },
  { id: 'species_mastery', label: 'Species Mastery' },
  { id: 'skill', label: 'Practical Skills' },
  { id: 'streaks', label: 'Consistency & Habits' },
  { id: 'leadership', label: 'Leadership & Service' },
  { id: 'age_milestone', label: 'Age-Track Milestones' },
  { id: 'module', label: 'Module Conformance' }
];

export const ALL_CATALOG_BADGES = [
  // --- 1. SPECIES MASTERY BADGES (11 Species) ---
  {
    key: 'mastery_rabbits',
    name: 'Rabbit Project Academic Master',
    description: 'Completed all 9 modules in the Rabbit Project Academy with an average score of 80% or higher.',
    speciesId: 'rabbits',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Rabbit modules with score >= 80%'
  },
  {
    key: 'mastery_cavies',
    name: 'Cavy Project Academic Master',
    description: 'Completed all 9 modules in the Cavy Project Academy with an average score of 80% or higher.',
    speciesId: 'cavies',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Cavy modules with score >= 80%'
  },
  {
    key: 'mastery_poultry',
    name: 'Poultry Project Academic Master',
    description: 'Mastered large fowl, bantams, biosecurity, and egg science across all 9 poultry modules.',
    speciesId: 'poultry',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Poultry modules with score >= 80%'
  },
  {
    key: 'mastery_goats',
    name: 'Goat Project Academic Master',
    description: 'Mastered dairy and meat goat husbandry, FAMACHA scoring, and ruminant nutrition.',
    speciesId: 'goats',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Goat modules with score >= 80%'
  },
  {
    key: 'mastery_sheep',
    name: 'Sheep Project Academic Master',
    description: 'Mastered market lamb bracing, wool grades, copper toxicity prevention, and scrapie tags.',
    speciesId: 'sheep',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Sheep modules with score >= 80%'
  },
  {
    key: 'mastery_swine',
    name: 'Swine Project Academic Master',
    description: 'Mastered universal ear notching, lysine nutrition, heat stress prevention, and PQA Plus principles.',
    speciesId: 'swine',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Swine modules with score >= 80%'
  },
  {
    key: 'mastery_beef_cattle',
    name: 'Beef Cattle Academic Master',
    description: 'Mastered BQA neck injections, flight zone management, show stick mechanics, and ADG tracking.',
    speciesId: 'beef_cattle',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Beef Cattle modules with score >= 80%'
  },
  {
    key: 'mastery_dairy_cattle',
    name: 'Dairy Cattle Academic Master',
    description: 'Mastered the PDCA scorecard, parlor milking sanitation, CMT paddle testing, and backward leading.',
    speciesId: 'dairy_cattle',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Dairy Cattle modules with score >= 80%'
  },
  {
    key: 'mastery_dogs',
    name: 'Canine Project Academic Master',
    description: 'Mastered 7 AKC groups, positive reinforcement markers, ring patterns, rabies laws, and CGC standards.',
    speciesId: 'dogs',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Dog modules with score >= 80%'
  },
  {
    key: 'mastery_horses',
    name: 'Equine Horsemanship Master',
    description: 'Mastered the Quarter System, colic & laminitis prevention, ASTM helmet safety, and negative Coggins testing.',
    speciesId: 'horses',
    category: 'species_mastery',
    tier: 'GOLD',
    icon: 'Award',
    points: 100,
    criteriaText: 'Complete all 9 Horse modules with score >= 80%'
  },
  {
    key: 'mastery_vet_science',
    name: 'Veterinary Science Scholar',
    description: 'Mastered comparative anatomy, humane clinical restraint, diagnostic parasitology, SOAP records, and surgical asepsis.',
    speciesId: 'vet_science',
    category: 'species_mastery',
    tier: 'PLATINUM',
    icon: 'Award',
    points: 120,
    criteriaText: 'Complete all 9 Vet Science modules with score >= 85%'
  },

  // --- 2. SKILL BADGES (Core Competencies) ---
  {
    key: 'skill_showmanship_virtuoso',
    name: 'Showmanship Virtuoso',
    description: 'Demonstrated flawless poise, ring awareness, and scored 90%+ in Showmanship Foundations modules.',
    category: 'skill',
    tier: 'PLATINUM',
    icon: 'Award',
    points: 75,
    criteriaText: 'Score 90%+ in 2 or more Showmanship modules'
  },
  {
    key: 'skill_biosecurity_shield',
    name: 'Biosecurity Shield Guardian',
    description: 'Completed health observation with mastery of quarantine, boot disinfection, and zoonotic prevention.',
    category: 'skill',
    tier: 'CLOVER',
    icon: 'ShieldAlert',
    points: 60,
    criteriaText: 'Complete Health Observation modules across 2+ species'
  },
  {
    key: 'skill_nutrition_pro',
    name: 'Ration Balancing & Nutrition Pro',
    description: 'Mastered species nutritional constraints (sheep copper toxicity, cavy Vitamin C, swine lysine).',
    category: 'skill',
    tier: 'SILVER',
    icon: 'Apple',
    points: 50,
    criteriaText: 'Complete Nutrition modules across 2+ species'
  },
  {
    key: 'skill_records_ace',
    name: 'Enterprise Record Book Ace',
    description: 'Accurately tracked expenses, feed conversion ratios (FCR), and official livestock identification.',
    category: 'skill',
    tier: 'BRONZE',
    icon: 'FileText',
    points: 40,
    criteriaText: 'Complete Record Keeping modules with 100% quiz accuracy'
  },
  {
    key: 'skill_ethics_champion',
    name: 'Head, Heart, Hands & Health Champion',
    description: 'Successfully resolved complex animal welfare dilemmas upholding honesty and sportsmanship.',
    category: 'skill',
    tier: 'CLOVER',
    icon: 'HeartHandshake',
    points: 80,
    criteriaText: 'Complete 3 Ethics scenario dilemmas with high integrity'
  },

  // --- 3. CONSISTENCY & HABIT STREAKS ---
  {
    key: 'streak_3_days',
    name: 'Barn Habit Starter (3-Day Streak)',
    description: 'Practiced animal academy lessons 3 days in a row.',
    category: 'streaks',
    tier: 'BRONZE',
    icon: 'Flame',
    points: 25,
    criteriaText: 'Maintain a 3-day study streak'
  },
  {
    key: 'streak_7_days',
    name: 'Daily Barn Devotion (7-Day Streak)',
    description: 'Maintained a full 7-day study streak in the barn and academy.',
    category: 'streaks',
    tier: 'SILVER',
    icon: 'Flame',
    points: 50,
    criteriaText: 'Maintain a 7-day study streak'
  },
  {
    key: 'streak_14_days',
    name: 'Dedicated Stockman (14-Day Streak)',
    description: 'Completed 14 consecutive days of animal knowledge practice.',
    category: 'streaks',
    tier: 'GOLD',
    icon: 'Flame',
    points: 100,
    criteriaText: 'Maintain a 14-day study streak'
  },
  {
    key: 'streak_30_days',
    name: 'Iron Showman (30-Day Streak)',
    description: 'A full month of daily commitment to animal welfare and learning excellence.',
    category: 'streaks',
    tier: 'PLATINUM',
    icon: 'Flame',
    points: 200,
    criteriaText: 'Maintain a 30-day study streak'
  },

  // --- 4. LEADERSHIP & SERVICE BADGES ---
  {
    key: 'leadership_peer_mentor',
    name: 'Junior Leader & Peer Mentor',
    description: 'Helped younger club members review quiz concepts and encouraged sportsmanship.',
    category: 'leadership',
    tier: 'SILVER',
    icon: 'Users',
    points: 50,
    criteriaText: 'Earned through verified coach/leader endorsement'
  },
  {
    key: 'leadership_public_voice',
    name: 'Agricultural Ambassador',
    description: 'Delivered an educational demonstration explaining animal safety to the public.',
    category: 'leadership',
    tier: 'GOLD',
    icon: 'Megaphone',
    points: 75,
    criteriaText: 'Complete Project Goals & Communication with distinction'
  },
  {
    key: 'leadership_barn_watchdog',
    name: 'Barn Safety Watchdog',
    description: 'Identified facility safety hazards (barbed wire, heat stress, bio-hazards) proactively.',
    category: 'leadership',
    tier: 'CLOVER',
    icon: 'Eye',
    points: 60,
    criteriaText: 'Score 100% on Housing & Daily Care safety checks'
  },

  // --- 5. AGE-TRACK MILESTONES ---
  {
    key: 'milestone_cloverbud_first_steps',
    name: 'Cloverbud First Flight',
    description: 'Completed your first 3 read-aloud lessons in the Cloverbud track.',
    category: 'age_milestone',
    tier: 'BRONZE',
    icon: 'Compass',
    points: 20,
    criteriaText: 'Complete 3 Cloverbud lessons'
  },
  {
    key: 'milestone_junior_scholar',
    name: 'Junior Division Scholar',
    description: 'Demonstrated foundational proficiency across 10 Junior track modules.',
    category: 'age_milestone',
    tier: 'SILVER',
    icon: 'BookOpen',
    points: 50,
    criteriaText: 'Complete 10 Junior track modules'
  },
  {
    key: 'milestone_intermediate_leader',
    name: 'Intermediate Conformation Analyst',
    description: 'Completed 15 intermediate modules mastering anatomy, feed analysis, and judging.',
    category: 'age_milestone',
    tier: 'GOLD',
    icon: 'Star',
    points: 80,
    criteriaText: 'Complete 15 Intermediate track modules'
  },
  {
    key: 'milestone_senior_champion',
    name: 'Senior Premier Master Showman',
    description: 'Completed 20 senior modules mastering EPD genetics, jurisprudence, and enterprise budgets.',
    category: 'age_milestone',
    tier: 'PLATINUM',
    icon: 'Award',
    points: 150,
    criteriaText: 'Complete 20 Senior track modules'
  }
];

export const CERTIFICATE_TYPES = {
  SPECIES_COMPLETION: {
    id: 'species_completion',
    title: 'Species Academic Mastery Certificate',
    description: 'Issued upon completing all 9 modules of an individual species curriculum with 80%+ score.',
    icon: 'Award'
  },
  MILESTONE: {
    id: 'milestone',
    title: 'Curriculum Milestone Certificate of Honor',
    description: 'Issued upon reaching major cumulative module milestones (10, 25, or 50 completed modules).',
    icon: 'CheckCircle2'
  },
  SHOWMANSHIP: {
    id: 'showmanship',
    title: 'Showmanship & Presentation Distinction',
    description: 'Issued upon completing table/arena ring mechanics, oral questions, and sportsmanship criteria.',
    icon: 'Sparkles'
  },
  ETHICS: {
    id: 'ethics',
    title: 'Character & Animal Welfare Honors Certificate',
    description: 'Issued for outstanding adherence to the 4-H pledge, humane animal care, and bioethics.',
    icon: 'HeartHandshake'
  },
  MULTI_SPECIES: {
    id: 'multi_species',
    title: 'Multi-Species Academy Scholar Certificate',
    description: 'Issued to versatile youth who master core modules across 3 or more distinct animal species.',
    icon: 'ShieldCheck'
  }
};
