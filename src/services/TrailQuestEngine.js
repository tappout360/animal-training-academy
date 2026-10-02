// WarrenWise Animal Academy - Herd Trail Quest Engine
// Manages party condition, supplies, herd bond, cosmetic unlocks, and trail progression

import { ALL_COSMETICS } from '../data/game/cosmeticsCatalog.js';

const STORAGE_PREFIX = 'ww_herd_trail_quest_';

export const CONDITION_LEVELS = {
  EXCELLENT: { label: 'Excellent', color: 'text-emerald-700 bg-emerald-100 border-emerald-300', emoji: '✨' },
  GOOD: { label: 'Good', color: 'text-green-700 bg-green-100 border-green-300', emoji: '🌿' },
  TIRED: { label: 'Tired', color: 'text-amber-700 bg-amber-100 border-amber-300', emoji: '⛅' },
  AT_RISK: { label: 'At Risk', color: 'text-rose-700 bg-rose-100 border-rose-300', emoji: '⚠️' }
};

export const DEFAULT_QUEST_STATE = {
  activeTrailPackId: 'rabbits_trail',
  currentMile: 0,
  completedNodeIds: [],
  conditionScore: 95, // 0 - 100
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
    unlockedLore: ['Your companion nuzzles your hand, eager to begin the trail journey!']
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
  practiceRibbons: []
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
          return { ...DEFAULT_QUEST_STATE, ...JSON.parse(data) };
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
    updated.supplies = newSupplies;

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
      newlyUnlockedCosmetics: unlockedNow
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
      rewardSummary: `Day ${nextCount} Streak! Received +25 Feed, +25 Water, +15 Bedding, and +50 Herd Bond XP!${nextCount >= 5 ? ' 🌟 Unlocked Solar Barn Lantern Pack!' : ''}`
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
