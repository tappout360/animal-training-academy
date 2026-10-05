import { 
  RABBIT_TRAIL_DAYS, 
  getRabbitDayScript, 
  HERD_MEMORY_TEMPLATE 
} from '../data/game/rabbitTrailScript.js';

export { RABBIT_TRAIL_DAYS, getRabbitDayScript, HERD_MEMORY_TEMPLATE };

const LIVING_HERD_STORAGE_KEY = 'ww_living_herd_state_';
const BARN_BOARD_STORAGE_KEY = 'ww_family_barn_board_';

const _memoryStore = new Map();

function storageGet(key) {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
      const val = localStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch (e) {}
  return _memoryStore.get(key) || null;
}

function storageSet(key, value) {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
      localStorage.setItem(key, value);
    }
  } catch (e) {}
  _memoryStore.set(key, value);
}

export const HERD_MOODS = {
  happy: { 
    id: 'happy',
    label: 'Joyful & Eager', 
    emoji: '😊', 
    color: 'text-emerald-700 bg-emerald-100 border-emerald-300',
    desc: 'Companion is lively, nuzzling your hand and eager to learn on the trail!' 
  },
  thirsty: { 
    id: 'thirsty',
    label: 'Needs Spring Water', 
    emoji: '💧', 
    color: 'text-sky-700 bg-sky-100 border-sky-300',
    desc: 'The afternoon trail was dry. Fresh, chilled water in a clean sipper will bring back bright eyes!' 
  },
  restless: { 
    id: 'restless',
    label: 'Restless & Seeking Fiber', 
    emoji: '🌾', 
    color: 'text-amber-700 bg-amber-100 border-amber-300',
    desc: 'Companion needs calm chewing forage to maintain healthy gut motility.' 
  },
  cozy: { 
    id: 'cozy',
    label: 'Content & Resting', 
    emoji: '🏡', 
    color: 'text-teal-700 bg-teal-100 border-teal-300',
    desc: 'Snuggled in sweet-smelling clean pine bedding, ready for grooming.' 
  },
  proud: { 
    id: 'proud',
    label: 'Show-Ring Composed', 
    emoji: '⭐', 
    color: 'text-purple-700 bg-purple-100 border-purple-300',
    desc: 'Table stance practiced, ears alert, and coat shining with championship luster!' 
  }
};

export const LIVING_HERD_NEEDS = [
  {
    id: 'heat_safety',
    title: 'Heat Safety Alert',
    category: 'Environment & Welfare',
    badge: 'Trail Hydration',
    prompt: 'Prairie trail temperatures are climbing to 88°F this afternoon. What is the safest stewardship practice for your companion crate?',
    options: [
      {
        id: 'opt_cool_shade',
        text: 'Provide fresh cold water, roll down the breathable canvas sunshade, and place a frozen water bottle for cooling.',
        isCorrect: true,
        feedback: 'Correct! Gentle shade, continuous hydration, and passive frozen cooling protect against heat stress safely.'
      },
      {
        id: 'opt_dose_water',
        text: 'Add human sports drink and electrolyte powder directly to the water bottle to boost energy.',
        isCorrect: false,
        feedback: 'Incorrect and unsafe! Never administer unprescribed additives or human electrolyte drinks without a veterinarian.'
      },
      {
        id: 'opt_lock_box',
        text: 'Close all wagon vents tightly to seal out the outdoor trail heat.',
        isCorrect: false,
        feedback: 'Dangerous! Lack of air circulation rapidly elevates internal compartment temperatures and causes fatal heatstroke.'
      }
    ],
    safeAdvice: 'Provide fresh cold water, ample airflow, and frozen resting bottles. Never give human medications.',
    rewards: { condition: 15, bondXp: 25, tokens: 5, masteryStars: 1, trait: 'carefulness' }
  },
  {
    id: 'timothy_fiber',
    title: 'Gut Motility & Long-Stem Fiber',
    category: 'Nutrition & Digestion',
    badge: 'Fiber First',
    prompt: 'Your companion has been resting quietly in camp. What is the most critical dietary foundation required for healthy herbivore digestion?',
    options: [
      {
        id: 'opt_fiber_hay',
        text: 'Abundant, clean timothy or grass hay available 24/7 to keep the digestive tract constantly active.',
        isCorrect: true,
        feedback: 'Spot on! Long-stem grass fiber is non-negotiable for cecal fermentation, dental wear, and gut motility.'
      },
      {
        id: 'opt_corn_treats',
        text: 'A large bowl of sweet corn and cereal grains to replace trail road calories quickly.',
        isCorrect: false,
        feedback: 'Incorrect. High-starch grains and corn can trigger fatal cecal dysbiosis and enterotoxemia in small stock.'
      },
      {
        id: 'opt_vitamin_pill',
        text: 'A daily human multivitamin tablet crushed into wet food.',
        isCorrect: false,
        feedback: 'Prohibited. Human vitamins cause severe toxicity in animals. Feed balanced species forage only.'
      }
    ],
    safeAdvice: 'High-fiber grass hay must form 80%+ of the diet for rabbits, cavies, and sheep.',
    rewards: { condition: 12, bondXp: 20, tokens: 5, masteryStars: 1, trait: 'consistency' }
  },
  {
    id: 'clean_sipper',
    title: 'Sanitary Water System Check',
    category: 'Husbandry & Sanitation',
    badge: 'Pure Spring Water',
    prompt: 'You inspect the water sipper valve on the traveling wagon carrier and notice a green algae film beginning to form. What should you do?',
    options: [
      {
        id: 'opt_scrub_sanitize',
        text: 'Empty the sipper, scrub the bottle and metal ball nozzle with clean brush and hot water, then refill with pure spring water.',
        isCorrect: true,
        feedback: 'Excellent biosecurity! Thorough mechanical cleaning prevents harmful bacterial buildup and water refusal.'
      },
      {
        id: 'opt_top_off',
        text: 'Just pour new water on top of the old water to save time before hitting the trail.',
        isCorrect: false,
        feedback: 'Incorrect! Old stagnant water harbors bacteria that cause diarrhea and dehydration.'
      },
      {
        id: 'opt_chlorine_drop',
        text: 'Add household bleach drops to the sipper while your animal is drinking.',
        isCorrect: false,
        feedback: 'Extremely dangerous! Never expose animals to toxic chemicals or bleach residue.'
      }
    ],
    safeAdvice: 'Daily scrubbing and clean refills keep water sweet and animals drinking vigorously.',
    rewards: { condition: 15, bondXp: 25, tokens: 5, masteryStars: 1, trait: 'carefulness' }
  },
  {
    id: 'gentle_grooming',
    title: 'Show Sheen & Skin Inspection',
    category: 'Grooming & Health Observation',
    badge: 'Master Groomer',
    prompt: 'Before arriving at the afternoon check station, how should you examine and groom your companion’s coat?',
    options: [
      {
        id: 'opt_brush_inspect',
        text: 'Use a soft camelhair brush in gentle strokes along hair growth, checking skin for flakes, mites, or cuts.',
        isCorrect: true,
        feedback: 'Outstanding! Gentle grooming builds companion trust while providing a thorough daily health check.'
      },
      {
        id: 'opt_wire_brush',
        text: 'Use a stiff metal wire BBQ brush to scrape out dried trail mud quickly.',
        isCorrect: false,
        feedback: 'Harmful! Harsh wire bristles scratch delicate skin and cause trauma.'
      },
      {
        id: 'opt_perfume_spray',
        text: 'Spray human perfume or scented aerosol deodorant over the coat for ring fragrance.',
        isCorrect: false,
        feedback: 'Prohibited! Aerosol chemicals damage sensitive animal respiratory tracts and disqualify entries.'
      }
    ],
    safeAdvice: 'Use natural soft brushes and calm touch. Note any abnormalities for adult or vet review.',
    rewards: { condition: 14, bondXp: 25, tokens: 5, masteryStars: 1, trait: 'showReadiness' }
  },
  {
    id: 'table_stance',
    title: 'Showmanship Table Composure',
    category: 'Ring Technique & Composure',
    badge: 'Table Poise',
    prompt: 'At the campsite practice table, what is the best technique to help your animal feel calm and confident during a 2-minute pose examination?',
    options: [
      {
        id: 'opt_gentle_hands',
        text: 'Support the chest gently, align front paws squarely under shoulders, speak with a calm quiet voice, and reward relaxed stillness.',
        isCorrect: true,
        feedback: 'Champion poise! Animals mirror the exhibitor’s calm confidence and learn that the table is safe.'
      },
      {
        id: 'opt_push_down',
        text: 'Push firmly down on the animal’s spine whenever it attempts to adjust its weight.',
        isCorrect: false,
        feedback: 'Incorrect! Excessive downward force causes fear, struggle, and poor spine presentation.'
      },
      {
        id: 'opt_pinch_ears',
        text: 'Hold the animal strictly by its ears to keep it immobilized on the rug.',
        isCorrect: false,
        feedback: 'Disqualifying cruelty! Never lift or hold rabbits or cavies by their ears.'
      }
    ],
    safeAdvice: 'Support body weight fully, align paws naturally, and practice with quiet patience.',
    rewards: { condition: 12, bondXp: 30, tokens: 5, masteryStars: 1, trait: 'showReadiness' }
  },
  {
    id: 'draft_protection',
    title: 'Nighttime Draft & Temperature Guard',
    category: 'Shelter & Comfort',
    badge: 'Cozy Haven',
    prompt: 'Camp has settled in the high timberline passes where night temperatures drop abruptly. How do you protect your carrier crate from cold drafts?',
    options: [
      {
        id: 'opt_burlap_tuck',
        text: 'Cover three sides of the crate with clean burlap or canvas, keeping the front ventilated, and add a deep layer of dry straw.',
        isCorrect: true,
        feedback: 'Perfect stewardship! Blocking cross drafts while preserving fresh ventilation keeps animals warm and lungs clear.'
      },
      {
        id: 'opt_campfire_smoke',
        text: 'Move the animal crate right next to the campfire so smoke drifts inside to keep bugs away.',
        isCorrect: false,
        feedback: 'Extremely harmful! Smoke causes severe respiratory distress and lung irritation.'
      },
      {
        id: 'opt_heat_lamp_unattended',
        text: 'Hang an unshielded 250W glass heat lamp directly over dry straw inside the wagon.',
        isCorrect: false,
        feedback: 'Severe fire hazard! Unsupervised heat lamps near combustible straw cause devastating barn fires.'
      }
    ],
    safeAdvice: 'Block drafts safely, maintain ventilation, and use deep dry bedding for natural thermal insulation.',
    rewards: { condition: 15, bondXp: 20, tokens: 5, masteryStars: 1, trait: 'carefulness' }
  },
  {
    id: 'fair_sportsmanship',
    title: 'Exhibitor Ethics & Sportsmanship',
    category: 'Character & 4-H Pledge',
    badge: 'Heart of a Champion',
    prompt: 'In a close showmanship class, another junior exhibitor drops their comb right before the judge approaches. What does true sportsmanship look like?',
    options: [
      {
        id: 'opt_help_courteous',
        text: 'Politely notify the table steward or hold your animal steady with courteous poise, wishing your fellow exhibitor well.',
        isCorrect: true,
        feedback: 'Exemplary character! 4-H showmanship values sportsmanship and mutual respect above all rosettes.'
      },
      {
        id: 'opt_laugh_distract',
        text: 'Point and laugh to draw the judge’s attention to their mistake.',
        isCorrect: false,
        feedback: 'Poor sportsmanship! Derogatory behavior violates fair exhibitor pledges and diminishes the ring.'
      },
      {
        id: 'opt_argue_judge',
        text: 'Interrupt the judge to demand that the competitor be disqualified on the spot.',
        isCorrect: false,
        feedback: 'Disrespectful! Judges manage the ring with professionalism; exhibitors maintain courtesy and dignity.'
      }
    ],
    safeAdvice: 'Head, Heart, Hands, and Health. Exemplify gracious conduct win or lose.',
    rewards: { condition: 10, bondXp: 30, tokens: 5, masteryStars: 1, trait: 'ethics' }
  }
];

export const FAIR_SEASON_ARCS = [
  {
    id: 'project_start',
    weekRange: 'Weeks 1 - 2',
    name: 'Project Start & Early Bond',
    description: 'Selecting your project animal, establishing safe housing, learning anatomy vocabulary, and building daily trust.',
    icon: '🌱',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-300'
  },
  {
    id: 'conditioning',
    weekRange: 'Weeks 3 - 6',
    name: 'Conditioning & Daily Care',
    description: 'Consistent long-stem fiber, coat sheen brushing, endurance on the trail, and weather hazard preparedness.',
    icon: '🌾',
    color: 'text-amber-700 bg-amber-50 border-amber-300'
  },
  {
    id: 'fair_week',
    weekRange: 'Weeks 7 - 8',
    name: 'County Fair Sim Championship',
    description: 'Arrival health check, weigh-in affidavit verification, table inspection simulator, and 15-second oral defense.',
    icon: '🏆',
    color: 'text-purple-700 bg-purple-50 border-purple-300'
  },
  {
    id: 'reflection',
    weekRange: 'Post-Fair',
    name: 'Mastery Showcase & Mentorship',
    description: 'Finalizing the digital barn record book, reflecting on project growth, and mentoring younger Cloverbuds.',
    icon: '📜',
    color: 'text-blue-700 bg-blue-50 border-blue-300'
  }
];

export const WEEKLY_MAGNET_EVENTS = [
  {
    id: 'storm_weekend',
    dayOfWeek: 6, // Saturday
    title: 'Frontier Storm Weekend',
    badge: 'Storm Preparedness',
    bonusText: '2x Careful Care XP & High-Wind Shelter Drills',
    icon: '⛈️'
  },
  {
    id: 'showring_saturday',
    dayOfWeek: 6,
    title: 'Show-Ring Saturday Clinic',
    badge: 'Ring Composure',
    bonusText: 'Double Cosmetic Tokens on Oral Defense Challenges',
    icon: '🏆'
  },
  {
    id: 'coach_challenge',
    dayOfWeek: 2, // Tuesday
    title: 'Coach Beacon Challenge',
    badge: 'Club Leader Mentee',
    bonusText: '+50 Herd Bond XP on Leader-Recommended Nodes',
    icon: '📍'
  },
  {
    id: 'bond_day',
    dayOfWeek: 0, // Sunday
    title: 'Companion Bond Sunday',
    badge: 'Gentle Hands',
    bonusText: 'Unlock Special Campsite Habitat Decoration Seed',
    icon: '💖'
  }
];

export const DEFAULT_LIVING_HERD_STATE = {
  lastCheckDate: null,
  consecutiveDays: 1,
  currentMoodId: 'happy',
  currentDayNumber: 1,
  completedDayNumbers: [],
  herdMemory: { ...HERD_MEMORY_TEMPLATE },
  memoryTraits: {
    consistency: 75,
    carefulness: 80,
    ethics: 85,
    showReadiness: 70
  },
  todayNeedCompleted: false,
  cosmeticTokens: 25,
  masteryStars: 8,
  seasonArcIndex: 1, // 'conditioning'
  herdStoryLog: [
    {
      id: 'story_init',
      date: new Date().toISOString().split('T')[0],
      title: 'Journey Begun at Clover Homestead',
      choiceDescription: 'Welcomed your companion into the traveling caravan with fresh timothy hay and gentle bedding.',
      outcomeText: 'Your companion perked up its ears and explored the cart with curious, relaxed steps.',
      traitsBoosted: ['consistency', 'carefulness']
    }
  ]
};

export const SEED_FAMILY_BARN_POSTS = [
  {
    id: 'post_1',
    authorName: 'Coach Sarah (Club Leader)',
    role: 'coach',
    time: '2 hours ago',
    text: 'Great work on the Timberline Ridge section everyone! Remember to check water bottles twice daily during hot weather.',
    badge: 'Coach Beacon',
    photoEmoji: '🏆',
    cheers: 8
  },
  {
    id: 'post_2',
    authorName: 'Mom & Dad',
    role: 'parent',
    time: 'Yesterday',
    text: 'So proud of your calm handling score on the table pose practice today! Keep up the daily routine! 🌟',
    badge: 'Parent Cheer',
    photoEmoji: '🐇',
    cheers: 5
  },
  {
    id: 'post_3',
    authorName: 'CloverChampion42 (You)',
    role: 'youth',
    time: 'Today',
    text: 'Completed Morning Barn Check! Solved the Heat Safety challenge and cleaned the water sipper. Bond level is rising!',
    badge: 'Daily Win',
    photoEmoji: '✨',
    cheers: 12
  }
];

export class LivingHerdEngine {
  /**
   * Loads living herd state from local storage or returns safe defaults.
   */
  static loadLivingHerdState(learnerId = 'current_learner') {
    try {
      const raw = storageGet(`${LIVING_HERD_STORAGE_KEY}${learnerId}`);
      if (raw) {
        return { ...DEFAULT_LIVING_HERD_STATE, ...JSON.parse(raw) };
      }
    } catch (e) {
      console.warn('Living herd read notice:', e.message);
    }
    return { ...DEFAULT_LIVING_HERD_STATE };
  }

  /**
   * Persists living herd state.
   */
  static saveLivingHerdState(learnerId = 'current_learner', state) {
    try {
      storageSet(`${LIVING_HERD_STORAGE_KEY}${learnerId}`, JSON.stringify(state));
    } catch (e) {
      console.warn('Living herd write notice:', e.message);
    }
    return state;
  }

  /**
   * Computes the daily herd status including warm re-entry calculations,
   * today's rotating need, current mood, season arc, and weekly magnet event.
   */
  static getDailyStatus(learnerId, questState = {}) {
    const state = LivingHerdEngine.loadLivingHerdState(learnerId);
    const today = new Date().toISOString().split('T')[0];

    let daysElapsed = 0;
    let isCompletedToday = state.lastCheckDate === today && state.todayNeedCompleted;
    let isWarmReentry = false;
    let welcomeMessage = '';

    if (state.lastCheckDate) {
      const last = new Date(state.lastCheckDate);
      const curr = new Date(today);
      const diffTime = Math.abs(curr - last);
      daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }

    // Warm Re-entry: Player missed 2 or more days
    // Never punish with death or harsh zeroing; companion waited safely!
    if (daysElapsed >= 2) {
      isWarmReentry = true;
      welcomeMessage = `Welcome back! The herd rested safely in camp while you were away. Your companion was gently waiting and is excited to see you!`;
      // Ensure condition floor does not drop below 65 on re-entry
      if (questState.conditionScore && questState.conditionScore < 65) {
        questState.conditionScore = 65;
      }
    } else if (daysElapsed === 1) {
      welcomeMessage = `Good morning! The barn is quiet and fresh. Let's start today’s Morning Barn Check!`;
    } else if (isCompletedToday) {
      welcomeMessage = `Great stewardship today! Morning Barn Check complete. Take a bonus trail run or practice table stance!`;
    } else {
      welcomeMessage = `Ready for Morning Barn Check! Solve today's care need to boost herd bond.`;
    }

    // Determine today's rotating need (deterministic by day of year)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const needIndex = dayOfYear % LIVING_HERD_NEEDS.length;
    const todayNeed = LIVING_HERD_NEEDS[needIndex];

    // Determine current mood based on condition & bond
    const condition = questState.conditionScore || 85;
    let currentMood = HERD_MOODS.happy;
    if (condition >= 90) currentMood = HERD_MOODS.proud;
    else if (condition >= 80) currentMood = HERD_MOODS.happy;
    else if (condition >= 65) currentMood = HERD_MOODS.cozy;
    else if (condition >= 50) currentMood = HERD_MOODS.restless;
    else currentMood = HERD_MOODS.thirsty;

    // Season Arc (can cycle based on miles or progress)
    const miles = questState.currentMile || 0;
    let seasonArc = FAIR_SEASON_ARCS[1]; // default conditioning
    if (miles < 25) seasonArc = FAIR_SEASON_ARCS[0]; // project_start
    else if (miles < 70) seasonArc = FAIR_SEASON_ARCS[1]; // conditioning
    else if (miles < 95) seasonArc = FAIR_SEASON_ARCS[2]; // fair_week
    else seasonArc = FAIR_SEASON_ARCS[3]; // reflection

    // Weekly Magnet Event
    const dayOfWeek = new Date().getDay();
    const weeklyEvent = WEEKLY_MAGNET_EVENTS.find(e => e.dayOfWeek === dayOfWeek) || WEEKLY_MAGNET_EVENTS[0];

    return {
      state,
      today,
      daysElapsed,
      isCompletedToday,
      isWarmReentry,
      welcomeMessage,
      todayNeed,
      currentMood,
      seasonArc,
      weeklyEvent,
      currentDayNumber: state.currentDayNumber || 1,
      completedDayNumbers: state.completedDayNumbers || [],
      herdMemory: state.herdMemory || { ...HERD_MEMORY_TEMPLATE },
      activeDayScript: getRabbitDayScript(state.currentDayNumber || 1),
      allDayScripts: RABBIT_TRAIL_DAYS,
      memoryTraits: state.memoryTraits || DEFAULT_LIVING_HERD_STATE.memoryTraits,
      cosmeticTokens: state.cosmeticTokens || 25,
      masteryStars: state.masteryStars || 8
    };
  }

  /**
   * Resolves today's Morning Barn Check challenge.
   * Awards dual rewards (Learning progress + World progress)
   * Updates memory traits and appends a narrative story event to the Herd Story Log.
   */
  static resolveDailyNeed({ learnerId = 'current_learner', questState, needId, optionId }) {
    const need = LIVING_HERD_NEEDS.find(n => n.id === needId);
    if (!need) throw new Error(`Daily care need ${needId} not found.`);

    const option = need.options.find(o => o.id === optionId);
    if (!option) throw new Error(`Option ${optionId} not found.`);

    const isCorrect = option.isCorrect;
    const livingState = LivingHerdEngine.loadLivingHerdState(learnerId);
    const today = new Date().toISOString().split('T')[0];

    // Compute trait changes
    const updatedTraits = { ...livingState.memoryTraits };
    if (isCorrect) {
      if (need.rewards.trait && updatedTraits[need.rewards.trait] !== undefined) {
        updatedTraits[need.rewards.trait] = Math.min(100, updatedTraits[need.rewards.trait] + 6);
      }
      updatedTraits.consistency = Math.min(100, updatedTraits.consistency + 4);
    } else {
      updatedTraits.carefulness = Math.max(30, updatedTraits.carefulness - 4);
    }

    // Dual Reward Spine
    const earnedStars = isCorrect ? need.rewards.masteryStars : 0;
    const earnedTokens = isCorrect ? need.rewards.tokens : 1;
    const earnedBondXp = isCorrect ? need.rewards.bondXp : 10;
    const earnedCondition = isCorrect ? need.rewards.condition : -3;

    // Create Herd Story Log entry
    const storyEntry = {
      id: `story_${Date.now()}`,
      date: today,
      title: `${need.title} (${isCorrect ? 'Carefully Solved' : 'Learning Moment'})`,
      choiceDescription: option.text,
      outcomeText: isCorrect
        ? `Your companion thrived with proper stewardship! ${option.feedback}`
        : `An important lesson was learned: ${option.feedback} The herd rested while you adjusted care.`,
      traitsBoosted: isCorrect ? [need.rewards.trait || 'carefulness', 'consistency'] : ['resilience']
    };

    const nextConsecutive = livingState.lastCheckDate === today 
      ? livingState.consecutiveDays 
      : (livingState.consecutiveDays || 1) + 1;

    const newLivingState = {
      ...livingState,
      lastCheckDate: today,
      consecutiveDays: nextConsecutive,
      todayNeedCompleted: true,
      currentMoodId: isCorrect ? 'proud' : 'cozy',
      memoryTraits: updatedTraits,
      cosmeticTokens: (livingState.cosmeticTokens || 0) + earnedTokens,
      masteryStars: (livingState.masteryStars || 0) + earnedStars,
      herdStoryLog: [storyEntry, ...(livingState.herdStoryLog || [])].slice(0, 30) // keep last 30
    };

    LivingHerdEngine.saveLivingHerdState(learnerId, newLivingState);

    // Update questState (Bond XP, Condition Score)
    const updatedQuestState = { ...questState };
    updatedQuestState.conditionScore = Math.max(35, Math.min(100, (updatedQuestState.conditionScore || 85) + earnedCondition));
    if (updatedQuestState.herdBond) {
      updatedQuestState.herdBond = {
        ...updatedQuestState.herdBond,
        xp: (updatedQuestState.herdBond.xp || 0) + earnedBondXp
      };
      // Check bond level up
      const newLevel = Math.min(10, Math.floor(updatedQuestState.herdBond.xp / 100) + 1);
      if (newLevel > (updatedQuestState.herdBond.level || 1)) {
        updatedQuestState.herdBond.level = newLevel;
      }
    }

    return {
      isCorrect,
      feedback: option.feedback,
      earnedStars,
      earnedTokens,
      earnedBondXp,
      earnedCondition,
      updatedLivingState: newLivingState,
      updatedQuestState,
      storyEntry,
      tomorrowTease: 'Tomorrow: Timberline Ridge Weather & Draft Inspection!'
    };
  }

  /**
   * Resolves Day-1 to Day-7 Habit Loop script challenge.
   * Handles care_choices, trail_quiz, showmanship_sequence, catch_classify, ethics_scenario, and mini_fair_sim.
   */
  static resolveRabbitDay({
    learnerId = 'current_learner',
    questState = {},
    dayNumber = 1,
    selectedOptionId = null,
    sequenceOrder = [],
    stationAnswers = {}
  }) {
    const day = getRabbitDayScript(dayNumber);
    if (!day) throw new Error(`Day script ${dayNumber} not found.`);

    const livingState = LivingHerdEngine.loadLivingHerdState(learnerId);
    const today = new Date().toISOString().split('T')[0];

    let isCorrect = false;
    let feedback = '';
    let choiceDescription = '';
    let stationScores = null;
    let practiceRibbon = null;

    // 1. Evaluate by challenge type
    if (day.challengeType === 'showmanship_sequence') {
      const expected = (day.sequenceSteps || []).map(s => s.step);
      isCorrect = Array.isArray(sequenceOrder) && 
        sequenceOrder.length === expected.length && 
        sequenceOrder.every((val, idx) => val === expected[idx]);
      feedback = isCorrect
        ? 'Flawless sequence! Barnaby rests calmly with feet square on the table.'
        : 'Sequence misstep: Always approach calmly before supporting hindquarters and securing hold.';
      choiceDescription = isCorrect ? 'Completed calm 4-step table handling sequence in correct order.' : 'Practiced handling order steps.';
    } else if (day.challengeType === 'mini_fair_sim') {
      const stations = day.stations || [];
      let correctCount = 0;
      stationScores = stations.map((st, idx) => {
        const userAns = stationAnswers[st.id] !== undefined ? stationAnswers[st.id] : stationAnswers[idx];
        const correctOpt = st.options.find(o => o.isCorrect);
        const matches = userAns === correctOpt?.text || userAns === correctOpt?.id || userAns === true;
        if (matches) correctCount++;
        return { station: st.stationName, passed: matches };
      });

      isCorrect = correctCount >= 2;
      const tierKey = correctCount >= 3 ? 3 : (correctCount >= 2 ? 2 : 1);
      practiceRibbon = day.scoringTiers[tierKey] || day.scoringTiers[1];

      feedback = `Fair Day Sim Complete: ${correctCount}/3 Stations Passed. Awarded: ${practiceRibbon.ribbon}!`;
      choiceDescription = `Completed Show-Ring Saturday Mini Finale (${correctCount}/3 stations).`;

      // Auto-post to Family Barn Board upon Day 7 completion
      LivingHerdEngine.addFamilyBarnPost(learnerId, {
        authorName: 'CloverChampion42 (You)',
        role: 'youth',
        text: `Week 1 Trail Complete! Barnaby and I completed Show-Ring Saturday and earned the ${practiceRibbon.ribbon}! 🏆`,
        photoEmoji: '🏆',
        badge: 'Week 1 Finale'
      });
    } else {
      const selectedOption = (day.options || []).find(o => o.id === selectedOptionId || o.text === selectedOptionId);
      if (selectedOption) {
        isCorrect = !!selectedOption.isCorrect;
        feedback = selectedOption.feedback;
        choiceDescription = selectedOption.text;
      } else {
        const correctOpt = (day.options || []).find(o => o.isCorrect);
        isCorrect = false;
        feedback = correctOpt?.feedback || 'Please choose a welfare-conscious action.';
        choiceDescription = 'Reviewed stewardship choices.';
      }
    }

    // 2. Update herdMemory: { consistency, ethics, heatSafety, handling, biosecurity }
    const updatedHerdMemory = {
      ...(livingState.herdMemory || HERD_MEMORY_TEMPLATE)
    };
    const traitKey = day.correctOutcome.memoryTrait;
    const traitDelta = day.correctOutcome.traitDelta || 10;
    if (traitKey && updatedHerdMemory[traitKey] !== undefined) {
      updatedHerdMemory[traitKey] = Math.max(20, Math.min(100, updatedHerdMemory[traitKey] + (isCorrect ? traitDelta : -4)));
    }

    // Also update general memoryTraits
    const updatedTraits = { ...(livingState.memoryTraits || DEFAULT_LIVING_HERD_STATE.memoryTraits) };
    if (isCorrect) {
      if (traitKey === 'ethics') updatedTraits.ethics = Math.min(100, (updatedTraits.ethics || 80) + 8);
      else if (traitKey === 'consistency') updatedTraits.consistency = Math.min(100, (updatedTraits.consistency || 75) + 6);
      else updatedTraits.carefulness = Math.min(100, (updatedTraits.carefulness || 80) + 6);
    }

    // 3. Rewards
    const conditionDelta = isCorrect ? day.correctOutcome.conditionDelta : -4;
    const bondDelta = isCorrect ? day.correctOutcome.bondDelta : 10;
    const earnedStars = isCorrect ? (day.correctOutcome.rewards?.masteryStars || 1) : 0;
    const earnedTokens = isCorrect ? (day.correctOutcome.rewards?.cosmeticToken || 5) : 1;

    // 4. Create narrative Story Log entry
    const storyEntry = {
      id: `story_day_${dayNumber}_${Date.now()}`,
      date: today,
      title: `Day ${dayNumber}: ${day.title}`,
      choiceDescription,
      outcomeText: isCorrect ? day.correctOutcome.herdReaction : `Lesson learned: ${feedback}`,
      traitsBoosted: [traitKey || 'carefulness']
    };

    const nextCompletedDays = Array.from(new Set([...(livingState.completedDayNumbers || []), dayNumber]));
    const nextDayNumber = Math.min(7, dayNumber + 1);

    const newLivingState = {
      ...livingState,
      lastCheckDate: today,
      currentDayNumber: nextDayNumber,
      completedDayNumbers: nextCompletedDays,
      herdMemory: updatedHerdMemory,
      memoryTraits: updatedTraits,
      todayNeedCompleted: true,
      currentMoodId: isCorrect ? 'proud' : 'cozy',
      cosmeticTokens: (livingState.cosmeticTokens || 0) + earnedTokens,
      masteryStars: (livingState.masteryStars || 0) + earnedStars,
      herdStoryLog: [storyEntry, ...(livingState.herdStoryLog || [])].slice(0, 30)
    };

    LivingHerdEngine.saveLivingHerdState(learnerId, newLivingState);

    // 5. Update questState (condition & bond)
    const updatedQuestState = { ...questState };
    updatedQuestState.conditionScore = Math.max(35, Math.min(100, (updatedQuestState.conditionScore || 85) + conditionDelta));
    if (updatedQuestState.herdBond) {
      updatedQuestState.herdBond = {
        ...updatedQuestState.herdBond,
        xp: (updatedQuestState.herdBond.xp || 0) + bondDelta
      };
      const newLevel = Math.min(10, Math.floor(updatedQuestState.herdBond.xp / 100) + 1);
      if (newLevel > (updatedQuestState.herdBond.level || 1)) {
        updatedQuestState.herdBond.level = newLevel;
      }
    }

    return {
      dayNumber,
      dayTitle: day.title,
      isCorrect,
      feedback,
      herdReaction: isCorrect ? day.correctOutcome.herdReaction : `Barnaby paused and waited while you adjusted care. ${feedback}`,
      tomorrowTease: day.correctOutcome.tomorrowTease,
      rewards: day.correctOutcome.rewards,
      practiceRibbon,
      stationScores,
      earnedStars,
      earnedTokens,
      earnedBondXp: bondDelta,
      earnedCondition: conditionDelta,
      herdMemory: updatedHerdMemory,
      updatedLivingState: newLivingState,
      updatedQuestState,
      storyEntry
    };
  }

  /**
   * Safe Family Barn Board Social Feed (COPPA & Parent-Safe)
   * Only accessible to linked family members and consented club coach.
   * Zero public stranger chat, zero minor PII.
   */
  static getFamilyBarnPosts(learnerId = 'current_learner') {
    try {
      const raw = storageGet(`${BARN_BOARD_STORAGE_KEY}${learnerId}`);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Family barn board read notice:', e.message);
    }
    return [...SEED_FAMILY_BARN_POSTS];
  }

  /**
   * Adds an encouraging post or showcase pose to the private family board.
   */
  static addFamilyBarnPost(learnerId = 'current_learner', postData) {
    const existing = LivingHerdEngine.getFamilyBarnPosts(learnerId);
    const newPost = {
      id: `post_${Date.now()}`,
      time: 'Just now',
      cheers: 1,
      ...postData
    };
    const updated = [newPost, ...existing];
    try {
      storageSet(`${BARN_BOARD_STORAGE_KEY}${learnerId}`, JSON.stringify(updated));
    } catch (e) {
      console.warn('Family barn board write notice:', e.message);
    }
    return updated;
  }

  /**
   * Cheers / reacts to a family board post.
   */
  static cheerPost(learnerId = 'current_learner', postId) {
    const existing = LivingHerdEngine.getFamilyBarnPosts(learnerId);
    const updated = existing.map(p => {
      if (p.id === postId) {
        return { ...p, cheers: (p.cheers || 0) + 1 };
      }
      return p;
    });
    try {
      storageSet(`${BARN_BOARD_STORAGE_KEY}${learnerId}`, JSON.stringify(updated));
    } catch (e) {
      // Ignore
    }
    return updated;
  }
}
