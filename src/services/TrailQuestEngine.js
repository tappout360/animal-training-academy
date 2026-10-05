// WarrenWise Animal Academy - Herd Trail Quest Engine
// Manages party condition, supplies, herd bond, cosmetic unlocks, and trail progression

import { ALL_COSMETICS } from '../data/game/cosmeticsCatalog.js';
import { TRAIL_HAZARDS, getRandomTrailHazard } from '../data/game/trailHazards.js';

const STORAGE_PREFIX = 'ww_herd_trail_quest_';

export const CONDITION_LEVELS = {
  EXCELLENT: { label: 'Excellent', color: 'text-emerald-700 bg-emerald-100 border-emerald-300', emoji: '✨' },
  GOOD: { label: 'Good', color: 'text-green-700 bg-green-100 border-green-300', emoji: '🌿' },
  TIRED: { label: 'Tired', color: 'text-amber-700 bg-amber-100 border-amber-300', emoji: '⛅' },
  AT_RISK: { label: 'At Risk', color: 'text-rose-700 bg-rose-100 border-rose-300', emoji: '⚠️' }
};

export const TRAIL_DIFFICULTY_TIERS = {
  TIER_1: {
    tier: 1,
    name: 'Homestead Valley (Novice)',
    mileRange: '0 - 25 Miles',
    hazardRisk: 'Low',
    pointsMultiplier: 1.0,
    penaltyMultiplier: 0.8,
    badgeColor: 'text-emerald-700 bg-emerald-100 border-emerald-300',
    description: 'Gentle valley roads, fundamental care vocabulary, forgiving weather.'
  },
  TIER_2: {
    tier: 2,
    name: 'Timberline Ridge (Journeyman)',
    mileRange: '25 - 55 Miles',
    hazardRisk: 'Moderate',
    pointsMultiplier: 1.3,
    penaltyMultiplier: 1.1,
    badgeColor: 'text-cyan-700 bg-cyan-100 border-cyan-300',
    description: 'Rising hills, technical feed math, quarantine protocols, deeper breed questions.'
  },
  TIER_3: {
    tier: 3,
    name: 'High Divide Passes (Advanced)',
    mileRange: '55 - 85 Miles',
    hazardRisk: 'High',
    pointsMultiplier: 1.7,
    penaltyMultiplier: 1.5,
    badgeColor: 'text-amber-700 bg-amber-100 border-amber-300',
    description: 'Rockfalls, sudden storms, body condition score analysis, genetic & fault disqualifications.'
  },
  TIER_4: {
    tier: 4,
    name: 'Championship Pavilion Arena (Master Showman)',
    mileRange: '85 - 100 Miles',
    hazardRisk: 'Extreme / Judge Inspection',
    pointsMultiplier: 2.2,
    penaltyMultiplier: 2.0,
    badgeColor: 'text-purple-700 bg-purple-100 border-purple-300',
    description: 'Grand Fair ring pressure, rapid oral judge defense, breed standard perfection.'
  }
};

export const WAGON_AILMENTS = {
  squeaking_axle: {
    id: 'squeaking_axle',
    name: 'Squeaking Dry Axle & Mud Clog',
    emoji: '⚙️',
    description: 'Dry wooden hubs and gritty road clay make an ear-splitting grinding noise that rattles and stresses your animal.',
    cureItemId: 'repair_axle_grease',
    penaltyText: '-10% Calm Temperament & slower wagon pace'
  },
  torn_canvas: {
    id: 'torn_canvas',
    name: 'Torn Drafty Wagon Canvas',
    emoji: '⛺',
    description: 'Prairie gusts tore open a canvas seam, letting cold trail winds and blinding road dust swirl into the carrier.',
    cureItemId: 'repair_canvas_patch',
    penaltyText: '-15% Coat Gloss from trail dust infiltration'
  },
  jarred_springs: {
    id: 'jarred_springs',
    name: 'Jarred Carrier Suspension & Rattles',
    emoji: '🔩',
    description: 'Rocky ruts loosened the carrier mounting bolts, causing bone-jarring vibration whenever the wagon rolls.',
    cureItemId: 'repair_suspension_felt',
    penaltyText: '-10% Pose Training readiness due to road fatigue'
  },
  sludgy_keg: {
    id: 'sludgy_keg',
    name: 'Sludgy Water Keg & Algae Film',
    emoji: '💧',
    description: 'Warm trail sun built up algae slime inside the drinking barrel, causing animal dehydration hesitation.',
    cureItemId: 'camp_charcoal_filter',
    penaltyText: '-15% Vigor & Hydration'
  }
};

export const TRAIL_OUTFITTER_CATALOG = [
  // --- WAGON REPAIR & AILMENT CURES (Repeatable Point Sinks) ---
  {
    id: 'repair_axle_grease',
    name: 'Pine Pitch & Tallow Axle Grease',
    category: 'wagon_repair',
    cost: 60,
    emoji: '🛢️',
    description: 'Heavy pine pitch grease that lubricates dry wheel hubs, washes out gritty road mud, and stops screeching axle friction.',
    effect: { wagonDurability: 25, temperament: 5 },
    clearsAilment: 'squeaking_axle',
    lore: 'Essential pioneer caravan maintenance. Smooth-rolling wheels keep transit stress to an absolute minimum.'
  },
  {
    id: 'repair_canvas_patch',
    name: 'Waxed Canvas & Heavy Needle Kit',
    category: 'wagon_repair',
    cost: 75,
    emoji: '🧵',
    description: 'Weatherproof waxed canvas patches that stitch up torn wagon covers, sealing out prairie dust storms and drafty winds.',
    effect: { canvasCover: 30, coatCondition: 8 },
    clearsAilment: 'torn_canvas',
    lore: 'A secure waterproof cover keeps the animal compartment warm, dry, and protected from blinding dust squalls.'
  },
  {
    id: 'repair_suspension_felt',
    name: 'Shock-Absorbing Felt Shims & Bolts',
    category: 'wagon_repair',
    cost: 80,
    emoji: '🔩',
    description: 'Dense wool felt pads and hand-forged shims that dampen wagon vibration and quiet rattling carrier brackets.',
    effect: { carrierCushion: 25, poseTraining: 8 },
    clearsAilment: 'jarred_springs',
    lore: 'Cushions the carrier against rocky mountain jolts, preserving calm leg posture and confident stance.'
  },
  {
    id: 'repair_wagon_overhaul',
    name: 'Master Wheelwright Wagon Overhaul',
    category: 'wagon_repair',
    cost: 160,
    emoji: '🛠️',
    description: 'Complete caravan overhaul: re-trues wheels, waterproofs canvas, tightens suspension, and clears all wagon ailments!',
    effect: { wagonDurability: 100, canvasCover: 100, carrierCushion: 100, fullRestore: true },
    clearsAllAilments: true,
    lore: 'Restores the pioneer wagon to factory showroom condition, ensuring flawless performance across high mountain passes.'
  },

  // --- CAMP BETTERMENT & RESTOCK (Repeatable Point Sinks) ---
  {
    id: 'camp_cedar_bedding',
    name: 'Mountain Pine & Cedar Flake Pack',
    category: 'camp_betterment',
    cost: 70,
    emoji: '🪵',
    description: 'Aromatic, absorbent wood shavings that freshen camp stalls, soak up trail moisture, and keep show coats clean.',
    effect: { beddingSupply: 35, campComfort: 20, coatCondition: 10 },
    lore: 'Clean, dry bedding is essential to prevent hock sores and maintain spotless show fur.'
  },
  {
    id: 'camp_charcoal_filter',
    name: 'Pure Charcoal Spring Water Filter',
    category: 'camp_betterment',
    cost: 85,
    emoji: '🚰',
    description: 'Pioneer filtration keg lined with mountain hardwood charcoal. Cures sludgy water and restores pure hydration reserves.',
    effect: { waterSupply: 40, campComfort: 15, vigorHydration: 15 },
    clearsAilment: 'sludgy_keg',
    lore: 'Clean, crisp water encourages continuous drinking, bright alert eyes, and smooth digestive motility.'
  },
  {
    id: 'camp_timothy_bales',
    name: '1st-Cutting Sun-Cured Timothy Bale',
    category: 'camp_betterment',
    cost: 65,
    emoji: '🌾',
    description: 'Golden high-fiber mountain hay bale that refills feed reserves and keeps natural gut motility moving during camp rests.',
    effect: { feedSupply: 35, campComfort: 15, vigorHydration: 10 },
    lore: 'Unlimited clean grass hay is the cornerstone of digestive health and calm chewing on the trail.'
  },
  {
    id: 'camp_sunshade_awning',
    name: 'Roll-Out Campsite Sunshade Awning',
    category: 'camp_betterment',
    cost: 95,
    emoji: '⛺',
    description: 'Extends a breathable canvas canopy from the wagon side, lowering resting stall temperatures by 10-15 degrees.',
    effect: { campComfort: 25, temperament: 15 },
    lore: 'Deep shade during midday stops keeps core body temperatures safe and prevents heat exhaustion.'
  },
  {
    id: 'camp_hearth_lantern',
    name: 'Cozy Hearth Lantern & Calming Tea',
    category: 'camp_betterment',
    cost: 75,
    emoji: '🏮',
    description: 'Warm campfire lantern light and dried chamomile sprigs that create a serene, tranquil camp atmosphere at dusk.',
    effect: { campComfort: 15, temperament: 15, bondXp: 15 },
    lore: 'A peaceful campfire evening cements the bond between showman and companion after a demanding trail day.'
  },
  {
    id: 'camp_grand_deluxe_betterment',
    name: 'Grand Camp Restock & Trail Hearth Feast',
    category: 'camp_betterment',
    cost: 180,
    emoji: '🏕️',
    description: 'Master campsite betterment: refills Feed, Water, and Bedding to 100%, raises Camp Comfort to 100%, and grants +10 to all show quality pillars!',
    effect: { fullCampRestock: true, campComfort: 100, coatCondition: 10, vigorHydration: 10, temperament: 10, poseTraining: 10 },
    lore: 'A celebration banquet for the caravan party, placing your show animal at the peak of physical condition.'
  },

  // --- TRAIL CARE GEAR & ABILITIES (One-Time Unlocks) ---
  {
    id: 'gear_soft_brush',
    name: 'Camelhair Show Brush',
    category: 'gear',
    cost: 120,
    emoji: '🪮',
    description: 'Ultra-soft natural bristles that remove trail road dust and produce a high-gloss show sheen.',
    effect: { coatCondition: 20 },
    lore: 'Preferred by champion rabbit, cavy, and poultry showmen for final ring dusting.'
  },
  {
    id: 'gear_spring_keg',
    name: 'Pure Spring Water Keg',
    category: 'gear',
    cost: 140,
    emoji: '🚰',
    description: 'Insulated oak barrel keeping fresh mountain spring water chilled against afternoon trail heat.',
    effect: { vigorHydration: 20 },
    lore: 'Clean water is the bedrock of animal hydration, digestion, and bright alert eyes.'
  },
  {
    id: 'gear_timothy_cakes',
    name: 'Mountain Timothy Hay Cakes',
    category: 'care',
    cost: 100,
    emoji: '🌾',
    description: 'Sun-cured mountain grass compressed into easy-travel cakes for healthy gut motility.',
    effect: { vigorHydration: 12, coatCondition: 8 },
    lore: 'High long-stem fiber ensures smooth digestion and calm chewing during long trail days.'
  },
  {
    id: 'gear_wagon_sunshade',
    name: 'Canvas Wagon Sunshade',
    category: 'gear',
    cost: 160,
    emoji: '⛺',
    description: 'Roll-down breathable canvas canopy shielding the animal carrier cart from glare and trail dust.',
    effect: { temperament: 15, vigorHydration: 10 },
    lore: 'Keeps transport compartments up to 10 degrees cooler when crossing open sunny plains.'
  },
  {
    id: 'gear_lavender_sprig',
    name: 'Calming Herbal Scent Sprig',
    category: 'care',
    cost: 90,
    emoji: '🌿',
    description: 'Dried lavender and chamomile hung beside the crate to soothe nerves and travel restlessness.',
    effect: { temperament: 20 },
    lore: 'A natural, gentle scent that helps animals settle into peaceful rest between trail halts.'
  },
  {
    id: 'gear_pose_mirror',
    name: 'Show Stance Practice Mirror',
    category: 'gear',
    cost: 150,
    emoji: '🪞',
    description: 'Portable felt-backed inspection stand used at camp to practice square posing and breed stance.',
    effect: { poseTraining: 25 },
    lore: 'Youth practice observing proper front foot alignment, loin fullness, and steady posture.'
  },
  {
    id: 'skill_gentle_hands',
    name: 'Showmanship Touch ("Gentle Hands")',
    category: 'ability',
    cost: 200,
    emoji: '🤲',
    description: 'Mastery technique: confident, calm handling that reassures the animal before judge inspection.',
    effect: { temperament: 25, poseTraining: 10 },
    lore: 'Judges award top marks when an animal displays calm trust and zero fear on the show table.'
  },
  {
    id: 'skill_ring_presence',
    name: 'Exhibitor Ring Poise',
    category: 'ability',
    cost: 280,
    emoji: '⭐',
    description: 'Advanced showmanship skill granting bonus presentation composure during the final judging ring.',
    effect: { poseTraining: 20, coatCondition: 15 },
    lore: 'Eye contact with the judge, courteous manners, and prompt answers in the oral exam.'
  }
];

export const DEFAULT_QUEST_STATE = {
  activeTrailPackId: 'rabbits_trail',
  currentMile: 0,
  completedNodeIds: [],
  trailPoints: 250, // Points earned from answering quizzes accurately
  conditionScore: 95, // Overall 0 - 100
  wagonStatus: {
    durability: 85, // 0 - 100%
    canvasCover: 80, // 0 - 100%
    carrierCushion: 75, // 0 - 100%
    activeAilment: null // null or WAGON_AILMENTS[key]
  },
  campStatus: {
    comfortLevel: 80, // 0 - 100%
    hydrationPurity: 85, // 0 - 100%
    forageFreshness: 80 // 0 - 100%
  },
  showQuality: {
    coatCondition: 85, // 0 - 100 (Grooming, brushing, clean bedding)
    vigorHydration: 90, // 0 - 100 (Clean water, high quality forage, rest)
    temperament: 80, // 0 - 100 (Gentle handling, low stress)
    poseTraining: 75 // 0 - 100 (Practicing table stance at rest camps)
  },
  purchasedItemIds: ['gear_soft_brush', 'gear_spring_keg'],
  supplies: {
    feed: 60,
    water: 50,
    bedding: 40,
    enrichment: 30,
    grooming: 100,
    firstAidKnowledge: 60,
    transportGear: 80
  },
  herdBond: {
    xp: 0,
    level: 1,
    unlockedLore: ['Your companion nuzzles your hand, eager to begin the wagon trail journey!']
  },
  equippedCosmetics: {
    traveler_skin: 'outfit_trail_blazer',
    companion_skin: 'comp_classic_fur',
    companion_pet: 'pet_barnaby_jr',
    trail_gear: 'gear_basic_lead',
    emote: 'emote_hat_tip',
    arrival_effect: 'arrival_clover_breeze',
    habitat_decor: 'decor_pine_bench'
  },
  unlockedCosmeticIds: [
    'outfit_trail_blazer',
    'comp_classic_fur',
    'pet_barnaby_jr',
    'gear_basic_lead',
    'emote_hat_tip',
    'decor_pine_bench',
    'arrival_clover_breeze'
  ],
  dailyStreak: {
    count: 1,
    lastClaimDate: null
  },
  coachSignals: [
    {
      id: 'cs_welcome',
      coachName: 'Coach Sarah',
      note: 'Welcome to Herd Trail Quest! Focus on daily hydration and gentle handling at the rest stops.',
      targetNodeId: 'rb_node_1',
      date: 'Today'
    }
  ],
  earnedRibbons: []
};

export class TrailQuestEngine {
  /**
   * Loads current game state from local storage or defaults.
   */
  static loadState(learnerId = 'current_learner') {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        const data = localStorage.getItem(`${STORAGE_PREFIX}${learnerId}`);
        if (data) {
          const parsed = JSON.parse(data);
          return {
            ...DEFAULT_QUEST_STATE,
            ...parsed,
            wagonStatus: { ...DEFAULT_QUEST_STATE.wagonStatus, ...(parsed.wagonStatus || {}) },
            campStatus: { ...DEFAULT_QUEST_STATE.campStatus, ...(parsed.campStatus || {}) }
          };
        }
      }
    } catch (e) {
      console.warn('Storage read notice:', e.message);
    }
    return { ...DEFAULT_QUEST_STATE };
  }

  /**
   * Persists game state.
   */
  static saveState(learnerId = 'current_learner', state) {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
        localStorage.setItem(`${STORAGE_PREFIX}${learnerId}`, JSON.stringify(state));
      }
    } catch (e) {
      console.warn('Storage write notice:', e.message);
    }
    return state;
  }

  /**
   * Translates numeric condition score (0-100) into friendly status.
   */
  static getConditionLevel(score) {
    if (score >= 80) return CONDITION_LEVELS.EXCELLENT;
    if (score >= 60) return CONDITION_LEVELS.GOOD;
    if (score >= 35) return CONDITION_LEVELS.TIRED;
    return CONDITION_LEVELS.AT_RISK;
  }

  /**
   * Evaluates current trail difficulty tier based on miles traveled, Herd Bond, and age division.
   */
  static getDifficultyTier(mile = 0, bondLevel = 1, division = 'junior') {
    if (division === 'cloverbud') {
      return TRAIL_DIFFICULTY_TIERS.TIER_1;
    }
    if (mile >= 85) {
      return TRAIL_DIFFICULTY_TIERS.TIER_4;
    }
    if (mile >= 55 || bondLevel >= 6) {
      return TRAIL_DIFFICULTY_TIERS.TIER_3;
    }
    if (mile >= 25 || bondLevel >= 3) {
      return TRAIL_DIFFICULTY_TIERS.TIER_2;
    }
    return TRAIL_DIFFICULTY_TIERS.TIER_1;
  }

  /**
   * Processes the completion of a trail challenge node.
   */
  static completeNode({
    state,
    nodeId,
    mile,
    isCorrect = true,
    conditionDelta = 0,
    suppliesDelta = {},
    bondXpDelta = 20,
    division = 'junior'
  }) {
    const updated = { ...state };

    if (!updated.completedNodeIds.includes(nodeId)) {
      updated.completedNodeIds = [...updated.completedNodeIds, nodeId];
    }

    // Advance miles (never going backwards)
    if (mile > updated.currentMile) {
      updated.currentMile = mile;
    }

    // Determine progressive difficulty tier
    const difficultyTier = TrailQuestEngine.getDifficultyTier(
      updated.currentMile, 
      updated.herdBond?.level || 1, 
      division
    );

    // Update condition (clamped between 20 and 100, no death spiral)
    const baseConditionDelta = isCorrect ? Math.max(10, conditionDelta) : Math.min(-5, conditionDelta);
    // Cloverbud division has soft protection against negative condition
    const finalConditionDelta = (division === 'cloverbud' && baseConditionDelta < 0) ? -2 : baseConditionDelta;
    updated.conditionScore = Math.max(25, Math.min(100, updated.conditionScore + finalConditionDelta));

    // Update supplies
    const newSupplies = { ...updated.supplies };
    Object.entries(suppliesDelta).forEach(([k, v]) => {
      if (newSupplies[k] !== undefined) {
        newSupplies[k] = Math.max(10, Math.min(100, newSupplies[k] + v));
      }
    });

    // Update Herd Bond
    const currentBond = { ...updated.herdBond };
    currentBond.xp += isCorrect ? bondXpDelta : Math.floor(bondXpDelta / 2);
    // Level up every 100 XP
    const newLevel = Math.min(10, Math.floor(currentBond.xp / 100) + 1);
    if (newLevel > currentBond.level) {
      currentBond.level = newLevel;
      currentBond.unlockedLore.push(
        `Herd Bond Level ${newLevel}: Your companion now recognizes your footsteps and greets you with joyful tail wags and relaxed curiosity!`
      );
    }
    updated.herdBond = currentBond;

    // Award Trail Points (The better you answer, and the higher the difficulty tier, the more points you get!)
    const streakBonus = Math.min(40, (updated.dailyStreak?.count || 1) * 10);
    const divisionBonus = division === 'senior' ? 35 : (division === 'intermediate' ? 20 : 10);
    let earnedPoints = 20;

    let triggeredHazard = null;
    const currentQuality = { ...(updated.showQuality || { coatCondition: 85, vigorHydration: 90, temperament: 80, poseTraining: 75 }) };

    if (isCorrect) {
      // Points scaled by progressive difficulty tier
      earnedPoints = Math.round((75 + divisionBonus + streakBonus) * difficultyTier.pointsMultiplier);
      currentQuality.temperament = Math.min(100, currentQuality.temperament + 5);
      currentQuality.poseTraining = Math.min(100, currentQuality.poseTraining + 4);
      currentQuality.coatCondition = Math.max(20, currentQuality.coatCondition - 2);
    } else {
      // Incorrect answer: Trigger severe frontier trail calamity!
      earnedPoints = division === 'cloverbud' ? 35 : 15;
      triggeredHazard = getRandomTrailHazard(nodeId || 'care_choices');

      // Cloverbuds have soft low-pressure protection against severe setbacks
      const penaltyMult = division === 'cloverbud' ? 0.2 : (difficultyTier.penaltyMultiplier || 1.0);
      const minConditionFloor = division === 'cloverbud' ? 60 : 15;

      if (triggeredHazard.penalties.coatCondition) {
        currentQuality.coatCondition = Math.max(minConditionFloor, currentQuality.coatCondition + Math.round(triggeredHazard.penalties.coatCondition * penaltyMult));
      }
      if (triggeredHazard.penalties.vigorHydration) {
        currentQuality.vigorHydration = Math.max(minConditionFloor, currentQuality.vigorHydration + Math.round(triggeredHazard.penalties.vigorHydration * penaltyMult));
      }
      if (triggeredHazard.penalties.temperament) {
        currentQuality.temperament = Math.max(minConditionFloor, currentQuality.temperament + Math.round(triggeredHazard.penalties.temperament * penaltyMult));
      }
      if (triggeredHazard.penalties.poseTraining) {
        currentQuality.poseTraining = Math.max(minConditionFloor, currentQuality.poseTraining + Math.round(triggeredHazard.penalties.poseTraining * penaltyMult));
      }

      // Incur supply loss if hazard damages wagon stores (waived for Cloverbuds)
      if (division !== 'cloverbud') {
        if (triggeredHazard.penalties.supplies?.feed && newSupplies.feed) {
          newSupplies.feed = Math.max(5, newSupplies.feed + triggeredHazard.penalties.supplies.feed);
        }
        if (triggeredHazard.penalties.supplies?.water && newSupplies.water) {
          newSupplies.water = Math.max(5, newSupplies.water + triggeredHazard.penalties.supplies.water);
        }
        if (triggeredHazard.penalties.supplies?.bedding && newSupplies.bedding) {
          newSupplies.bedding = Math.max(5, newSupplies.bedding + triggeredHazard.penalties.supplies.bedding);
        }
      }
    }

    updated.supplies = newSupplies;
    updated.showQuality = currentQuality;
    updated.trailPoints = (updated.trailPoints || 0) + earnedPoints;

    // Update Wagon Integrity and Camp Comfort with trail friction
    const currentWagon = { ...(updated.wagonStatus || DEFAULT_QUEST_STATE.wagonStatus) };
    const currentCamp = { ...(updated.campStatus || DEFAULT_QUEST_STATE.campStatus) };

    const wearDura = isCorrect ? 4 : 10;
    const wearCanvas = isCorrect ? 2 : 6;
    const wearCushion = isCorrect ? 2 : 5;

    currentWagon.durability = Math.max(15, (currentWagon.durability || 85) - wearDura);
    currentWagon.canvasCover = Math.max(15, (currentWagon.canvasCover || 80) - wearCanvas);
    currentWagon.carrierCushion = Math.max(15, (currentWagon.carrierCushion || 75) - wearCushion);
    currentCamp.comfortLevel = Math.max(15, (currentCamp.comfortLevel || 80) - (isCorrect ? 3 : 8));

    // If an incorrect calamity struck, assign wagon ailment if none currently active
    if (!isCorrect && !currentWagon.activeAilment) {
      if (triggeredHazard?.id === 'hazard_deluge_mud') {
        currentWagon.activeAilment = WAGON_AILMENTS.squeaking_axle;
      } else if (triggeredHazard?.id === 'hazard_dust_storm') {
        currentWagon.activeAilment = WAGON_AILMENTS.torn_canvas;
      } else if (triggeredHazard?.id === 'hazard_downed_timber') {
        currentWagon.activeAilment = WAGON_AILMENTS.jarred_springs;
      } else if (triggeredHazard?.id === 'hazard_contaminated_water') {
        currentWagon.activeAilment = WAGON_AILMENTS.sludgy_keg;
      } else if (currentWagon.durability < 60) {
        currentWagon.activeAilment = WAGON_AILMENTS.squeaking_axle;
      }
    }

    updated.wagonStatus = currentWagon;
    updated.campStatus = currentCamp;

    // Check for new cosmetic unlocks (skins, pets, upgraded equipment, emotes, decor)
    const unlockedNow = [];
    ALL_COSMETICS.forEach(cosmetic => {
      if (updated.unlockedCosmeticIds.includes(cosmetic.id)) return;

      let shouldUnlock = false;
      // Milestones & Distance
      if (cosmetic.id === 'outfit_clover_scout' && updated.currentMile >= 50) shouldUnlock = true;
      if (cosmetic.id === 'outfit_barn_pioneer' && updated.herdBond.xp >= 300) shouldUnlock = true;
      if (cosmetic.id === 'comp_sunset_bay' && updated.herdBond.level >= 5) shouldUnlock = true;
      if (cosmetic.id === 'emote_bunny_hop' && updated.currentMile >= 50) shouldUnlock = true;
      if (cosmetic.id === 'decor_wind_chime' && updated.herdBond.level >= 8) shouldUnlock = true;

      // Unlockable Pets
      if (cosmetic.id === 'pet_pip_hamster' && updated.currentMile >= 25) shouldUnlock = true;
      if (cosmetic.id === 'pet_luna_kitten' && updated.herdBond.level >= 3) shouldUnlock = true;
      if (cosmetic.id === 'pet_bramble_kid' && updated.herdBond.level >= 5) shouldUnlock = true;
      if (cosmetic.id === 'pet_copper_pup' && updated.currentMile >= 55) shouldUnlock = true;
      if (cosmetic.id === 'pet_buttercup_calf' && updated.herdBond.level >= 7) shouldUnlock = true;
      if (cosmetic.id === 'pet_chester_foal' && updated.currentMile >= 85) shouldUnlock = true;
      if (cosmetic.id === 'pet_andy_alpaca' && updated.completedNodeIds.length >= 8) shouldUnlock = true;

      // Upgraded Trail Equipment
      if (cosmetic.id === 'gear_brass_flask' && isCorrect && updated.currentMile >= 15) shouldUnlock = true;
      if (cosmetic.id === 'gear_solar_fan' && updated.currentMile >= 25) shouldUnlock = true;
      if (cosmetic.id === 'gear_gilded_brush' && updated.herdBond.level >= 6) shouldUnlock = true;
      if (cosmetic.id === 'gear_jeweled_halter' && updated.completedNodeIds.length >= 6) shouldUnlock = true;
      if (cosmetic.id === 'gear_leather_caddy' && updated.supplies.grooming >= 90) shouldUnlock = true;

      if (shouldUnlock) {
        updated.unlockedCosmeticIds = [...updated.unlockedCosmeticIds, cosmetic.id];
        unlockedNow.push(cosmetic);
      }
    });

    return {
      updatedState: updated,
      newlyUnlockedCosmetics: unlockedNow,
      earnedPoints,
      triggeredHazard,
      difficultyTier
    };
  }

  /**
   * Purchases care gear, abilities, wagon repairs, or camp betterments with earned Trail Points.
   */
  static buyOutfitterItem(state, itemId) {
    const item = TRAIL_OUTFITTER_CATALOG.find(i => i.id === itemId);
    if (!item) {
      throw new Error(`Item ${itemId} not found in Trail Outfitter catalog.`);
    }

    const currentPoints = state.trailPoints || 0;
    if (currentPoints < item.cost) {
      throw new Error(`Insufficient Trail Points. Required: ${item.cost}, Available: ${currentPoints}.`);
    }

    const purchased = state.purchasedItemIds || [];
    const isRepeatable = item.category === 'wagon_repair' || item.category === 'camp_betterment';
    if (!isRepeatable && purchased.includes(itemId)) {
      throw new Error(`You already possess ${item.name}!`);
    }

    const updated = { ...state };
    updated.trailPoints = currentPoints - item.cost;
    if (!isRepeatable) {
      updated.purchasedItemIds = [...purchased, itemId];
    }

    // Wagon repairs & cures
    if (item.category === 'wagon_repair') {
      const wagon = { ...(updated.wagonStatus || DEFAULT_QUEST_STATE.wagonStatus) };
      if (item.effect.fullRestore) {
        wagon.durability = 100;
        wagon.canvasCover = 100;
        wagon.carrierCushion = 100;
      } else {
        if (item.effect.wagonDurability) {
          wagon.durability = Math.min(100, (wagon.durability || 85) + item.effect.wagonDurability);
        }
        if (item.effect.canvasCover) {
          wagon.canvasCover = Math.min(100, (wagon.canvasCover || 80) + item.effect.canvasCover);
        }
        if (item.effect.carrierCushion) {
          wagon.carrierCushion = Math.min(100, (wagon.carrierCushion || 75) + item.effect.carrierCushion);
        }
      }

      if (item.clearsAllAilments) {
        wagon.activeAilment = null;
      } else if (item.clearsAilment && wagon.activeAilment?.id === item.clearsAilment) {
        wagon.activeAilment = null;
      }
      updated.wagonStatus = wagon;
    }

    // Camp betterment & supplies restock
    if (item.category === 'camp_betterment') {
      const camp = { ...(updated.campStatus || DEFAULT_QUEST_STATE.campStatus) };
      if (item.effect.campComfort === 100) {
        camp.comfortLevel = 100;
      } else if (item.effect.campComfort) {
        camp.comfortLevel = Math.min(100, (camp.comfortLevel || 80) + item.effect.campComfort);
      }

      const supplies = { ...(updated.supplies || DEFAULT_QUEST_STATE.supplies) };
      if (item.effect.fullCampRestock) {
        supplies.feed = 100;
        supplies.water = 100;
        supplies.bedding = 100;
      } else {
        if (item.effect.feedSupply) {
          supplies.feed = Math.min(100, (supplies.feed || 60) + item.effect.feedSupply);
        }
        if (item.effect.waterSupply) {
          supplies.water = Math.min(100, (supplies.water || 50) + item.effect.waterSupply);
        }
        if (item.effect.beddingSupply) {
          supplies.bedding = Math.min(100, (supplies.bedding || 40) + item.effect.beddingSupply);
        }
      }
      updated.supplies = supplies;

      if (item.effect.bondXp) {
        const bond = { ...(updated.herdBond || DEFAULT_QUEST_STATE.herdBond) };
        bond.xp = (bond.xp || 0) + item.effect.bondXp;
        updated.herdBond = bond;
      }

      if (item.clearsAilment && updated.wagonStatus?.activeAilment?.id === item.clearsAilment) {
        updated.wagonStatus = { ...updated.wagonStatus, activeAilment: null };
      }
      updated.campStatus = camp;
    }

    // Apply immediate stat boosts
    const quality = { ...(updated.showQuality || { coatCondition: 85, vigorHydration: 90, temperament: 80, poseTraining: 75 }) };
    if (item.effect.coatCondition) quality.coatCondition = Math.min(100, quality.coatCondition + item.effect.coatCondition);
    if (item.effect.vigorHydration) quality.vigorHydration = Math.min(100, quality.vigorHydration + item.effect.vigorHydration);
    if (item.effect.temperament) quality.temperament = Math.min(100, quality.temperament + item.effect.temperament);
    if (item.effect.poseTraining) quality.poseTraining = Math.min(100, quality.poseTraining + item.effect.poseTraining);

    updated.showQuality = quality;

    return {
      updatedState: updated,
      purchasedItem: item
    };
  }

  /**
   * Performs a direct wagon repair using earned points.
   */
  static repairWagon(state, repairItemId) {
    return TrailQuestEngine.buyOutfitterItem(state, repairItemId);
  }

  /**
   * Performs camp betterment using earned points.
   */
  static betterCamp(state, bettermentItemId) {
    return TrailQuestEngine.buyOutfitterItem(state, bettermentItemId);
  }

  /**
   * Quick-cures currently active wagon ailment if player has sufficient points.
   */
  static cureActiveAilment(state) {
    const ailment = state.wagonStatus?.activeAilment;
    if (!ailment) {
      return { updatedState: state, cured: false, message: 'Your wagon is running smoothly with no active ailments!' };
    }
    const cureItem = TRAIL_OUTFITTER_CATALOG.find(i => i.id === ailment.cureItemId);
    if (!cureItem) {
      return { updatedState: state, cured: false, message: 'No remedy available for this ailment.' };
    }
    const result = TrailQuestEngine.buyOutfitterItem(state, cureItem.id);
    return {
      updatedState: result.updatedState,
      cured: true,
      cureItem,
      message: `Cured ${ailment.name} with ${cureItem.name}! Wagon condition restored.`
    };
  }

  /**
   * Performs an interactive grooming / care routine at camp.
   */
  static performTrailCare(state, actionType) {
    const updated = { ...state };
    const quality = { ...(updated.showQuality || { coatCondition: 85, vigorHydration: 90, temperament: 80, poseTraining: 75 }) };
    let message = '';

    switch (actionType) {
      case 'brush':
        quality.coatCondition = Math.min(100, quality.coatCondition + 15);
        message = 'You gently brushed away trail dust with the show brush. Coat is glowing!';
        break;
      case 'water':
        quality.vigorHydration = Math.min(100, quality.vigorHydration + 15);
        message = 'You offered chilled, fresh spring water. Eyes are bright and alert!';
        break;
      case 'pose':
        quality.poseTraining = Math.min(100, quality.poseTraining + 15);
        message = 'You practiced proper show table square stance. Animal holds posture steady!';
        break;
      case 'comfort':
        quality.temperament = Math.min(100, quality.temperament + 15);
        message = 'Gentle reassurance and calming herbs relaxed your companion completely.';
        break;
      default:
        break;
    }

    updated.showQuality = quality;
    return {
      updatedState: updated,
      message
    };
  }

  /**
   * Evaluates the Grand Championship Show Ring performance based on
   * arriving animal condition + showmanship oral exam score.
   */
  static evaluateShowRing(state, { oralExamScore = 100, exhibitorNotes = '' }) {
    const quality = state.showQuality || { coatCondition: 85, vigorHydration: 90, temperament: 80, poseTraining: 75 };
    
    // Physical Condition Index (50% of total score)
    const physicalScore = (
      quality.coatCondition * 0.25 +
      quality.vigorHydration * 0.25 +
      quality.temperament * 0.25 +
      quality.poseTraining * 0.25
    ) * 0.5;

    // Showmanship Knowledge & Presentation (50% of total score)
    const knowledgeScore = (oralExamScore / 100) * 50;

    // Ring Poise ability bonus if owned
    const hasRingPoise = (state.purchasedItemIds || []).includes('skill_ring_presence');
    const bonus = hasRingPoise ? 5 : 0;

    const totalScore = Math.min(100, Math.round(physicalScore + knowledgeScore + bonus));

    let ribbon = 'White Ribbon';
    let ribbonColor = 'text-slate-600 bg-slate-100 border-slate-300';
    let ribbonTitle = 'Participant Honors';
    let ribbonIcon = '🎗️';

    if (totalScore >= 95) {
      ribbon = 'Grand Champion Purple Rosette';
      ribbonColor = 'text-purple-700 bg-purple-100 border-purple-300';
      ribbonTitle = 'Grand Champion of Show';
      ribbonIcon = '🏆';
    } else if (totalScore >= 90) {
      ribbon = 'Reserve Champion Rosette';
      ribbonColor = 'text-indigo-700 bg-indigo-100 border-indigo-300';
      ribbonTitle = 'Reserve Champion of Show';
      ribbonIcon = '🥈';
    } else if (totalScore >= 80) {
      ribbon = 'Blue Ribbon (First Class)';
      ribbonColor = 'text-blue-700 bg-blue-100 border-blue-300';
      ribbonTitle = 'Blue Ribbon Showmanship';
      ribbonIcon = '🏅';
    } else if (totalScore >= 70) {
      ribbon = 'Red Ribbon (Second Class)';
      ribbonColor = 'text-rose-700 bg-rose-100 border-rose-300';
      ribbonTitle = 'Red Ribbon Exhibitor';
      ribbonIcon = '🎖️';
    }

    const awardRecord = {
      id: `award_${Date.now()}`,
      trailPackId: state.activeTrailPackId,
      date: new Date().toISOString().split('T')[0],
      totalScore,
      physicalScore: Math.round(physicalScore * 2),
      knowledgeScore: Math.round(knowledgeScore * 2),
      ribbon,
      ribbonTitle,
      ribbonIcon,
      judgeFeedback: totalScore >= 90
        ? 'Superb demonstration of 4-H husbandry! Coat sheen, hydration, and table composure are outstanding. Highly commendable!'
        : 'Good effort across the overland trail! Continue practicing breed standard posing and daily grooming before the next regional convention.'
    };

    const updated = {
      ...state,
      earnedRibbons: [awardRecord, ...(state.earnedRibbons || [])]
    };

    return {
      updatedState: updated,
      awardRecord
    };
  }

  /**
   * Equips a cosmetic item (skin, equipment, pet, emote, decor).
   */
  static equipCosmetic(state, type, cosmeticId) {
    if (!state.unlockedCosmeticIds.includes(cosmeticId)) {
      throw new Error('Cosmetic item is locked. Complete trail challenges to unlock it!');
    }
    return {
      ...state,
      equippedCosmetics: {
        ...state.equippedCosmetics,
        [type]: cosmeticId
      }
    };
  }

  /**
   * Claims daily trail streak reward chest (feed, water, bedding, bond XP).
   */
  static claimDailyStreak(state) {
    const today = new Date().toISOString().split('T')[0];
    const streak = state.dailyStreak || { count: 1, lastClaimDate: null };

    if (streak.lastClaimDate === today) {
      return {
        alreadyClaimed: true,
        updatedState: state,
        rewardSummary: 'You have already opened today’s Trail Care Chest! Return tomorrow to keep your streak alive.'
      };
    }

    const nextCount = streak.lastClaimDate ? streak.count + 1 : 1;
    const updated = {
      ...state,
      dailyStreak: {
        count: nextCount,
        lastClaimDate: today
      },
      trailPoints: (state.trailPoints || 0) + (nextCount * 25),
      supplies: {
        ...state.supplies,
        feed: Math.min(100, state.supplies.feed + 25),
        water: Math.min(100, state.supplies.water + 25),
        bedding: Math.min(100, state.supplies.bedding + 15)
      },
      herdBond: {
        ...state.herdBond,
        xp: state.herdBond.xp + 50
      }
    };

    // Streak milestone unlock
    const newUnlocks = [];
    if (nextCount >= 5 && !updated.unlockedCosmeticIds.includes('gear_solar_lantern')) {
      updated.unlockedCosmeticIds = [...updated.unlockedCosmeticIds, 'gear_solar_lantern'];
      newUnlocks.push('gear_solar_lantern');
    }

    return {
      alreadyClaimed: false,
      updatedState: updated,
      rewardSummary: `Day ${nextCount} Streak! Received +${nextCount * 25} Trail Points, +25 Feed, +25 Water, +15 Bedding, and +50 Herd Bond XP!${nextCount >= 5 ? ' 🌟 Unlocked Solar Barn Lantern Pack!' : ''}`
    };
  }

  /**
   * Adds a Coach Signal Beacon onto the learner's trail.
   */
  static addCoachSignal(state, { coachName, note, targetNodeId }) {
    const newSignal = {
      id: `signal_${Date.now()}`,
      coachName,
      note,
      targetNodeId,
      date: 'Just now'
    };
    return {
      ...state,
      coachSignals: [newSignal, ...state.coachSignals]
    };
  }
}

