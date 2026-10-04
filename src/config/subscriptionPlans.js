// WarrenWise Youth Animal Training Academy - Subscription & Monetization Configuration
// Transparent, parent-safe, zero pay-to-win pricing architecture for 4-H families and clubs

export const SUBSCRIPTION_TIERS = {
  free: {
    id: 'free',
    name: 'Free "Clover" Tier',
    badgeText: 'Community Standard',
    priceMonthly: 0,
    priceAnnual: 0,
    maxChildren: 1,
    allowedSpecies: ['rabbits', 'cavies'],
    maxTrailTier: 1,
    aiTutor: false,
    verifiableCerts: false,
    recordBookIncluded: false,
    crossDeviceSync: false,
    clubLeaderDashboard: false,
    description: 'Essential community access with Rabbit & Cavy core curricula, Homestead Valley trail, and basic quizzes.',
    whatParentsGet: [
      'Basic parental limit controls',
      'Free educational access with zero advertisements',
      'No surprise charges ever'
    ],
    whatYouthGet: [
      'Rabbit & Cavy Module 1-9 lessons',
      'Homestead Valley Trail (Tier 1)',
      'Basic quizzes and core badges',
      'Standard pioneer trail outfit'
    ]
  },
  pro: {
    id: 'pro',
    name: 'Youth Pro Showman',
    badgeText: 'Individual Youth',
    priceMonthly: 7.99,
    priceAnnual: 59,
    maxChildren: 1,
    allowedSpecies: 'ALL',
    maxTrailTier: 4,
    aiTutor: true,
    verifiableCerts: true,
    recordBookIncluded: false,
    crossDeviceSync: true,
    clubLeaderDashboard: false,
    description: 'Complete animal training adventure and AI coach for a dedicated youth showman.',
    whatParentsGet: [
      'Single child Pro learning passport',
      'WarrenWise AI safety intercepts for peace of mind',
      'Verifiable completion certificates for school/4-H portfolios',
      'Parent-controlled spending and screen-time locks'
    ],
    whatYouthGet: [
      'All 11 Livestock & Companion Species Packs',
      'All 4 Herd Trail Quest difficulty tiers (to Championship Pavilion)',
      'Unlimited WarrenWise AI Show Trainer coaching',
      '50+ Trail cosmetics, upgraded gear, and unlockable pets',
      'Official downloadable achievement certificates'
    ]
  },
  family: {
    id: 'family',
    name: 'Family Barn Pass',
    badgeText: 'Best Value for 4-H Families',
    popular: true,
    priceMonthly: 12.99,
    priceAnnual: 99,
    maxChildren: 5,
    allowedSpecies: 'ALL',
    maxTrailTier: 4,
    aiTutor: true,
    verifiableCerts: true,
    recordBookIncluded: true,
    crossDeviceSync: true,
    clubLeaderDashboard: false,
    description: 'All-inclusive family license supporting up to 5 youth showmen with Fair Record Book included.',
    whatParentsGet: [
      'Up to 5 linked youth profiles under one parent account',
      'Master Parent Control Center with per-child limit controls',
      'County Fair Record Book & Weigh-In Kit included ($14.99 value)',
      'Cross-device barn sync for tablets and phones offline',
      'Priority educational support'
    ],
    whatYouthGet: [
      'All Pro features unlocked for all siblings (up to 5)',
      'Independent progress, ribbons, and cosmetic lockers per child',
      'Full access to all 11 species & showmanship simulators',
      'Digital weigh-in logger and printable fair affidavit sheets'
    ]
  },
  club: {
    id: 'club',
    name: '4-H Club / FFA Chapter Charter',
    badgeText: 'Club & Chapter License',
    priceMonthly: 24.99,
    priceAnnual: 199,
    maxChildren: 30,
    allowedSpecies: 'ALL',
    maxTrailTier: 4,
    aiTutor: true,
    verifiableCerts: true,
    recordBookIncluded: true,
    crossDeviceSync: true,
    clubLeaderDashboard: true,
    description: 'Official annual charter for 4-H clubs and FFA chapters with roster management and leader tools.',
    whatParentsGet: [
      'Covered under club sponsorship (free for participating families)',
      'Leader verified educational accuracy',
      'Club meeting activity drills and icebreakers'
    ],
    whatYouthGet: [
      'Full Pro curriculum access for up to 30 enrolled members',
      'Club group challenges and skillathon drill prep',
      'Official meeting certificates and badge tracking'
    ],
    whatLeadersGet: [
      'Master Coach Dashboard for 30 enrolled youth',
      'One-click progress and attendance exports for fair boards',
      'Skillathon test generator and table review tools'
    ]
  }
};

export const EDUCATIONAL_ADDONS = [
  {
    id: 'addon_record_book',
    title: 'County Fair Record Book & Weigh-In Kit',
    category: 'Digital Tool',
    price: 14.99,
    type: 'one_time',
    emoji: '📋',
    includedInTiers: ['family', 'club'],
    badgeText: 'Included in Family Pass',
    description: 'Dynamic Average Daily Gain (ADG) calculation engine, feed investment ledgers, and printable official fair affidavit PDFs.',
    features: [
      'Automated rate-of-gain tracking from scale weights',
      'Feed cost and expense tracking per animal',
      'Official county fair weigh-in print layout with signature blocks',
      'Offline-ready for barn scale sessions'
    ]
  },
  {
    id: 'addon_masterclass_meat_pen',
    title: 'Specialty Masterclass: Market Meat Pen Economics',
    category: 'Curriculum Masterclass',
    price: 9.99,
    type: 'one_time',
    emoji: '⚖️',
    description: 'Advanced 3-rabbit uniform meat pen selection, weight curve targeting, and auction ring presentation strategy.',
    features: [
      'Uniformity scoring rubric (matching loin, rump, and bone)',
      'Feed conversion ratio (FCR) optimization schedules',
      'Auction buyer letter templates and oral sale pitch drills',
      'Exhibition weigh-in disqualification avoidance'
    ]
  },
  {
    id: 'addon_masterclass_camelids',
    title: 'Specialty Masterclass: Camelid Fiber & Packing',
    category: 'Curriculum Masterclass',
    price: 9.99,
    type: 'one_time',
    emoji: '🦙',
    description: 'Comprehensive llama and alpaca training covering fleece grading, pack obstacle courses, and public handling.',
    features: [
      'Fleece staple length and micron grading guides',
      'Pack saddle rigging and trail safety protocols',
      'Public demonstration manners and obstacle navigation',
      'Comparative ruminant nutrition and care'
    ]
  },
  {
    id: 'addon_physical_patch',
    title: 'Official Embroidered Mastery Vest Patch',
    category: 'Physical Keepsake',
    price: 8.99,
    type: 'merch',
    emoji: '🎖️',
    description: 'High-density 3.5" iron-on embroidered clover achievement patch for showmanship coats, vests, and project bags.',
    features: [
      'Authentic gold metallic thread border',
      'Earnable upon Module 9 Mastery completion in any species',
      'Parent-authorized shipping directly to home address',
      'Tangible keepsake celebrating hard work and animal care'
    ]
  }
];

export const ANTI_PAY_TO_WIN_POLICY = {
  TITLE: 'Our Promise: Zero Pay-To-Win Education',
  SUMMARY: 'WarrenWise Animal Academy is designed to teach real-world animal husbandry, character, and welfare. We promise:',
  POINTS: [
    'No paid advantage in quizzes, mastery scores, or knowledge exams.',
    'No randomized loot boxes, countdown timer skips, or exploitative spending tricks.',
    'All paid features are educational tools or cosmetic upgrades approved by parents.',
    'Core animal safety rules and parental limits are never locked behind paywalls.'
  ]
};
