// WarrenWise Youth Animal Training Academy - Rewards & Badges Specification

export const BADGE_TIERS = {
  BRONZE: { label: 'Bronze Clover', color: 'from-amber-600 to-amber-700', border: 'border-amber-400' },
  SILVER: { label: 'Silver Star', color: 'from-slate-400 to-slate-500', border: 'border-slate-300' },
  GOLD: { label: 'Gold Champion', color: 'from-amber-400 to-yellow-500', border: 'border-yellow-300' },
  PLATINUM: { label: 'Ruby Grand Champion', color: 'from-rose-500 to-red-600', border: 'border-rose-300' },
  CLOVER: { label: 'Emerald Four-Leaf', color: 'from-emerald-500 to-green-600', border: 'border-emerald-300' }
};

export const MASTER_BADGES = [
  {
    key: 'first_steps',
    name: 'First Steps in the Barn',
    description: 'Completed your very first 4-H Academy learning module.',
    icon: 'Compass',
    tier: 'BRONZE',
    category: 'onboarding'
  },
  {
    key: 'breed_expert_rabbits',
    name: 'Rabbit Breed Master',
    description: 'Scored 100% on the Rabbits Basics & Breeds module quiz.',
    icon: 'Rabbit',
    tier: 'GOLD',
    speciesId: 'rabbits',
    category: 'breeds'
  },
  {
    key: 'biosecurity_guardian',
    name: 'Biosecurity Guardian',
    description: 'Mastered health observation, clean footwear, and 30-day quarantine protocols.',
    icon: 'ShieldAlert',
    tier: 'CLOVER',
    category: 'health'
  },
  {
    key: 'cavy_vitamin_c',
    name: 'Cavy Nutrition Scholar',
    description: 'Demonstrated complete understanding of daily Vitamin C requirements in cavies.',
    icon: 'Apple',
    tier: 'SILVER',
    speciesId: 'cavies',
    category: 'nutrition'
  },
  {
    key: 'showmanship_star',
    name: 'Table Showmanship Star',
    description: 'Completed the full 12-step showmanship routine drill without errors.',
    icon: 'Award',
    tier: 'PLATINUM',
    category: 'showmanship'
  },
  {
    key: 'ethics_champion',
    name: 'Head, Heart, Hands & Health',
    description: 'Resolved all 3 ethics and animal welfare scenario dilemmas with top integrity scores.',
    icon: 'HeartHandshake',
    tier: 'CLOVER',
    category: 'ethics'
  },
  {
    key: 'streak_3_days',
    name: 'Barn Habit Builder (3-Day Streak)',
    description: 'Studied training academy modules 3 days in a row.',
    icon: 'Flame',
    tier: 'BRONZE',
    category: 'streak'
  },
  {
    key: 'streak_7_days',
    name: 'Daily Devotion (7-Day Streak)',
    description: 'Maintained a 7-day study and barn practice streak.',
    icon: 'Flame',
    tier: 'GOLD',
    category: 'streak'
  }
];

export const CERTIFICATE_CRITERIA = {
  rabbits: {
    title: 'Rabbit Project Academic Mastery Certificate',
    requiredModules: 9,
    minAverageScore: 80,
    disclaimer: 'Educational Mastery Certificate issued by WarrenWise Youth Animal Training Academy. This document verifies completion of app-based learning modules. It is NOT an official certification, nor an endorsement by National 4-H, USDA NIFA, ARBA, or state Extension agencies.'
  },
  cavies: {
    title: 'Cavy Project Academic Mastery Certificate',
    requiredModules: 9,
    minAverageScore: 80,
    disclaimer: 'Educational Mastery Certificate issued by WarrenWise Youth Animal Training Academy. This document verifies completion of app-based learning modules. It is NOT an official certification, nor an endorsement by National 4-H, USDA NIFA, ACBA, ARBA, or state Extension agencies.'
  }
};
