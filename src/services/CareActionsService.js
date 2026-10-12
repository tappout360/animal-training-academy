// WarrenWise Youth Animal Training Academy - CareActionsService
// Implements the tactile Pet Care Actions Layer with real controls,
// gesture vocabulary, persistent Herd Readiness, offline storage, and Show Ring multipliers.

export const CARE_ACTION_TYPES = {
  FEED: 'feed',
  WATER: 'water',
  BRUSH: 'brush',
  CLEAN_UP: 'clean_up',
  FILL_WITH_LOVE: 'fill_with_love',
  NAIL_CHECK: 'nail_check',
  EAR_EYE_CHECK: 'ear_eye_check',
  POSE_PRACTICE: 'pose_practice'
};

export const CARE_ACTION_SPECS = {
  [CARE_ACTION_TYPES.FEED]: {
    id: 'feed',
    name: 'Feed & Forage Measure',
    icon: '🌾',
    verb: 'Measure & Offer Feed',
    gestureInstruction: 'Measure golden timothy hay (75%+) and calibrated pellets, then offer to your companion.',
    masteryObjective: 'Nutritional Stewardship: Proper forage-to-concentrate ratio (high fiber prevents GI stasis)',
    primaryCitation: 'ARBA Raising Better Rabbits & Cavies, Nutrition Standard, pp. 24-28',
    targetComponent: 'vigorHydration',
    qualityFactors: ['hayRatio', 'pelletRatio', 'holdSteadiness'],
    weight: 0.20
  },
  [CARE_ACTION_TYPES.WATER]: {
    id: 'water',
    name: 'Fresh Spring Water',
    icon: '💧',
    verb: 'Fill Water Reservoir',
    gestureInstruction: 'Press and hold the valve to fill the water bottle to the optimal green line (75% - 95%).',
    masteryObjective: 'Hydration Vigor: Constant fresh clean water is critical for metabolic health and kidney function',
    primaryCitation: 'ARBA Official Standards Committee Bulletins on Husbandry',
    targetComponent: 'vigorHydration',
    qualityFactors: ['optimalFill', 'noSpill', 'freshnessCheck'],
    weight: 0.20
  },
  [CARE_ACTION_TYPES.BRUSH]: {
    id: 'brush',
    name: 'Coat Brush & Groom',
    icon: '🪮',
    verb: 'Gentle Stroke Grooming',
    gestureInstruction: 'Swipe smoothly in the direction of fur growth. Rushed motions pull undercoat—keep it calm.',
    masteryObjective: 'Coat Condition & Sheen: Stimulates skin oils, maintains rollback/flyback density, removes dead molt',
    primaryCitation: 'ARBA Standard of Perfection, General Condition & Fur Standard',
    targetComponent: 'coatCondition',
    qualityFactors: ['strokeSmoothness', 'calmSpeed', 'coverage'],
    weight: 0.20
  },
  [CARE_ACTION_TYPES.CLEAN_UP]: {
    id: 'clean_up',
    name: 'Clean Up After',
    icon: '🧹',
    verb: 'Sanitize Bedding & Stall',
    gestureInstruction: 'Clear soiled corners to the compost bin and scatter fresh, dust-free kiln-dried pine shavings.',
    masteryObjective: 'Sanitation & Biosecurity: Clean dry bedding prevents ammonia respiratory burns and sore hocks',
    primaryCitation: 'ARBA Raising Better Rabbits & Cavies, Biosecurity & Housing',
    targetComponent: 'cleanliness',
    qualityFactors: ['spotsCleared', 'beddingCoverage', 'hocksProtection'],
    weight: 0.20
  },
  [CARE_ACTION_TYPES.FILL_WITH_LOVE]: {
    id: 'fill_with_love',
    name: 'Fill with Love',
    icon: '💖',
    verb: 'Calm Petting & Trust Hold',
    gestureInstruction: 'Hold and gently stroke your companion without rushing. Watch for soft-loafing and purring.',
    masteryObjective: 'Ethical Handling & Bond: Positive calm interactions lower cortisol and build table show poise',
    primaryCitation: '4-H Youth Animal Science Showmanship Manual',
    targetComponent: 'temperament',
    qualityFactors: ['calmDuration', 'gentlenessScore', 'unbrokenContact'],
    weight: 0.20
  },
  [CARE_ACTION_TYPES.NAIL_CHECK]: {
    id: 'nail_check',
    name: 'Toenail Inspection',
    icon: '🐾',
    verb: 'Inspect Paws & Claws',
    gestureInstruction: 'Inspect rear and front claws for clean, trimmed edges with zero broken or missing nails.',
    masteryObjective: 'Physical Inspection: ARBA General Disqualifications require all toenails to match and be intact',
    primaryCitation: 'ARBA Official Show Rules, Disqualifications, Sec. 18',
    targetComponent: 'poseTraining',
    qualityFactors: ['pawCheckCount', 'clawIntegrity'],
    weight: 0.10
  },
  [CARE_ACTION_TYPES.EAR_EYE_CHECK]: {
    id: 'ear_eye_check',
    name: 'Ear & Eye Health Check',
    icon: '👂',
    verb: 'Examine Ears & Eyes',
    gestureInstruction: 'Check inside ear base for clean folds (free of mites/scabs) and verify bright clear eyes.',
    masteryObjective: 'Health Surveillance: Pre-show check for ear mites (Psoroptes cuniculi) and clear conjunctiva',
    primaryCitation: 'ARBA Registrar’s Study Guide, Health Disqualifications',
    targetComponent: 'vigorHydration',
    qualityFactors: ['earClarity', 'eyeClarity'],
    weight: 0.10
  },
  [CARE_ACTION_TYPES.POSE_PRACTICE]: {
    id: 'pose_practice',
    name: 'Breed Standard Pose',
    icon: '🪞',
    verb: 'Set Up Show Stance',
    gestureInstruction: 'Align front feet square under eyes, tuck hindquarters, and support the natural top-line rise.',
    masteryObjective: 'Showmanship Stance: Standard positioning showcases the breed body type to the judge',
    primaryCitation: 'ARBA Standard of Perfection, Body Types (Compact, Commercial, Semi-Arch, Full Arch, Cylindrical)',
    targetComponent: 'poseTraining',
    qualityFactors: ['footAlignment', 'toplineRise', 'poseDuration'],
    weight: 0.10
  }
};

export class CareActionsService {
  /**
   * Returns age-adapted sensitivity parameters for live gesture recognition.
   */
  static getAgeBandSettings(ageDivision = 'junior') {
    switch (ageDivision) {
      case 'cloverbud':
        return {
          maxBrushSpeed: 2.8,       // very forgiving speed threshold
          minLoveSeconds: 2.0,      // shorter hold duration
          waterOptimalRange: [65, 100], // wide fill window
          gentlenessFloor: 85,      // never harshly penalizes young kids
          rewardScale: 1.25,
          feedbackStyle: 'delightful_encouraging'
        };
      case 'senior':
      case 'registrar_track':
        return {
          maxBrushSpeed: 1.6,       // tight standard
          minLoveSeconds: 4.5,
          waterOptimalRange: [75, 95],
          gentlenessFloor: 40,
          rewardScale: 1.0,
          feedbackStyle: 'technical_precision'
        };
      case 'intermediate':
      case 'junior':
      default:
        return {
          maxBrushSpeed: 1.9,
          minLoveSeconds: 3.0,
          waterOptimalRange: [75, 95],
          gentlenessFloor: 60,
          rewardScale: 1.0,
          feedbackStyle: 'balanced_steward'
        };
    }
  }

  /**
   * Calculates individual action quality (0 to 100) based on player execution metrics.
   */
  static evaluateActionQuality(actionType, metrics = {}, ageDivision = 'junior') {
    const settings = this.getAgeBandSettings(ageDivision);
    let quality = 80;

    switch (actionType) {
      case CARE_ACTION_TYPES.FEED: {
        const hay = metrics.hayPortionPct || 0;
        const pellets = metrics.pelletPortionPct || 0;
        // Perfect: Hay 75% - 100%, Pellets 50% - 100%
        if (hay >= 75 && pellets >= 50) {
          quality = 100;
        } else if (hay >= 50 || pellets >= 50) {
          quality = 75;
        } else {
          quality = 50;
        }
        break;
      }

      case CARE_ACTION_TYPES.WATER: {
        const fill = metrics.waterFillPct || 0;
        const [minOpt, maxOpt] = settings.waterOptimalRange;
        if (fill >= minOpt && fill <= maxOpt) {
          quality = 100;
        } else if (fill > maxOpt) {
          quality = 80; // overflow deduction
        } else {
          quality = Math.max(30, Math.round((fill / minOpt) * 80));
        }
        break;
      }

      case CARE_ACTION_TYPES.BRUSH: {
        const strokes = metrics.brushStrokes || 0;
        const rushed = metrics.rushedCount || 0;
        const gentle = metrics.gentleCount || 0;
        const luster = metrics.coatLusterPct || 0;

        if (luster >= 85 && rushed === 0) {
          quality = 100;
        } else if (luster >= 80) {
          const penalty = Math.min(25, rushed * 5);
          quality = Math.max(settings.gentlenessFloor, 95 - penalty);
        } else {
          quality = Math.max(40, Math.round((luster / 85) * 80));
        }
        break;
      }

      case CARE_ACTION_TYPES.CLEAN_UP: {
        const cleared = metrics.soiledSpotsCleared || 0;
        const spread = metrics.freshBeddingSpread || 0;
        if (cleared >= 3 && spread >= 3) {
          quality = 100;
        } else {
          quality = Math.round(((cleared + spread) / 6) * 90);
        }
        break;
      }

      case CARE_ACTION_TYPES.FILL_WITH_LOVE: {
        const lovePct = metrics.loveMeterPct || 0;
        const duration = metrics.durationSeconds || 3.0;
        if (lovePct >= 100 && duration >= settings.minLoveSeconds) {
          quality = 100;
        } else {
          quality = Math.max(settings.gentlenessFloor, Math.round((lovePct / 100) * 90));
        }
        break;
      }

      case CARE_ACTION_TYPES.NAIL_CHECK:
      case CARE_ACTION_TYPES.EAR_EYE_CHECK:
      case CARE_ACTION_TYPES.POSE_PRACTICE: {
        quality = metrics.completed ? 100 : 70;
        break;
      }

      default:
        quality = 85;
    }

    return Math.max(0, Math.min(100, Math.round(quality)));
  }

  /**
   * Processes a completed pet care session with multiple actions,
   * updates rolling Herd Readiness, adjusts showQuality, and yields awards.
   */
  static processCareSession(currentState = {}, sessionData = {}, ageDivision = 'junior') {
    const performedActions = sessionData.actions || {};
    const actionTypes = Object.keys(performedActions);

    let totalWeightedQuality = 0;
    let totalWeight = 0;
    const actionResults = {};

    // 1. Calculate each action's quality score
    actionTypes.forEach(actionKey => {
      const spec = CARE_ACTION_SPECS[actionKey];
      if (spec) {
        const quality = this.evaluateActionQuality(actionKey, performedActions[actionKey], ageDivision);
        actionResults[actionKey] = {
          quality,
          spec
        };
        totalWeightedQuality += quality * spec.weight;
        totalWeight += spec.weight;
      }
    });

    const baseCareScore = totalWeight > 0 ? Math.round(totalWeightedQuality / totalWeight) : 80;

    // Coverage bonus: doing all 5 core actions grants +10% bonus
    const coreActions = [
      CARE_ACTION_TYPES.FEED,
      CARE_ACTION_TYPES.WATER,
      CARE_ACTION_TYPES.BRUSH,
      CARE_ACTION_TYPES.CLEAN_UP,
      CARE_ACTION_TYPES.FILL_WITH_LOVE
    ];
    const coreCount = coreActions.filter(k => performedActions[k]).length;
    const isFullHerdCoverage = coreCount >= 5;
    const coverageBonus = isFullHerdCoverage ? 10 : Math.round((coreCount / 5) * 5);

    const dailyCareScore = Math.min(100, baseCareScore + coverageBonus);

    // 2. Rolling Herd Readiness Calculation (Persists across days)
    const prevReadiness = currentState.herdReadiness ?? 80;
    // Rolling formula: 40% memory of previous days + 60% today's care session
    const updatedHerdReadiness = Math.round(prevReadiness * 0.4 + dailyCareScore * 0.6);

    // 3. Handling Style Determination
    const rushedTotal = Object.values(performedActions).reduce((acc, a) => acc + (a?.rushedCount || 0), 0);
    const gentleTotal = Object.values(performedActions).reduce((acc, a) => acc + (a?.gentleCount || 0), 0);

    let handlingStyle = 'thorough_steward';
    if (rushedTotal > gentleTotal / 2 && rushedTotal > 4) {
      handlingStyle = 'hurried_handler';
    } else if (gentleTotal > 12 && dailyCareScore >= 90) {
      handlingStyle = 'gentle_master';
    }

    // 4. Update Show Conformation Quality Metrics
    const showQuality = { ...(currentState.showQuality || {
      coatCondition: 80,
      vigorHydration: 85,
      temperament: 80,
      poseTraining: 75,
      cleanliness: 80
    }) };

    // Apply immediate boosts from performed actions
    if (performedActions.brush) {
      showQuality.coatCondition = Math.min(100, showQuality.coatCondition + 12);
    }
    if (performedActions.water || performedActions.feed) {
      showQuality.vigorHydration = Math.min(100, showQuality.vigorHydration + 10);
    }
    if (performedActions.clean_up) {
      showQuality.cleanliness = Math.min(100, (showQuality.cleanliness || 80) + 15);
    }
    if (performedActions.fill_with_love) {
      showQuality.temperament = Math.min(100, showQuality.temperament + 12);
    }
    if (performedActions.pose_practice) {
      showQuality.poseTraining = Math.min(100, showQuality.poseTraining + 15);
    }

    // 5. Calculate Show Advantage / Multiplier
    const showAdvantage = this.calculateShowAdvantage(updatedHerdReadiness);

    // 6. Dual Rewards (Mastery XP + Cosmetic Tokens)
    const earnedMasteryXp = Math.round(dailyCareScore * 0.4);
    const earnedCosmeticTokens = isFullHerdCoverage ? 8 : 4;

    // 7. Update Pet Care Counts for cumulative tracking
    const currentCounts = { ...(currentState.petCareCounts || {}) };
    actionTypes.forEach(k => {
      currentCounts[k] = (currentCounts[k] || 0) + 1;
    });

    const careRecord = {
      timestamp: new Date().toISOString(),
      dailyCareScore,
      herdReadiness: updatedHerdReadiness,
      handlingStyle,
      coreActionsCompleted: coreCount,
      showAdvantageBonus: showAdvantage.bonusPoints,
      multiplier: showAdvantage.multiplier
    };

    const careHistory = [...(currentState.careHistory || []).slice(-19), careRecord];

    const updatedState = {
      ...currentState,
      herdReadiness: updatedHerdReadiness,
      showQuality,
      petCareCounts: currentCounts,
      lastCareSession: careRecord,
      careHistory,
      trailPoints: (currentState.trailPoints || 0) + earnedCosmeticTokens,
      herdBond: {
        ...(currentState.herdBond || { level: 1, xp: 0 }),
        xp: (currentState.herdBond?.xp || 0) + earnedMasteryXp
      }
    };

    return {
      dailyCareScore,
      herdReadiness: updatedHerdReadiness,
      handlingStyle,
      showAdvantage,
      actionResults,
      earnedMasteryXp,
      earnedCosmeticTokens,
      isFullHerdCoverage,
      updatedState
    };
  }

  /**
   * Computes the Fair Day Sim / Championship Show Ring placement multiplier
   * based on the accumulated Herd Readiness.
   */
  static calculateShowAdvantage(herdReadiness = 80) {
    if (herdReadiness >= 95) {
      return {
        tier: 'Grand Champion Caliber',
        multiplier: 1.15,
        bonusPoints: 15,
        poseStability: 'Rock Solid (Zero Table Jitter)',
        coatGlow: 'Pristine Rollback / Flyback Sheen',
        judgeRemark: 'Exemplary daily stewardship! The animal demonstrates magnificent condition, sparkling clean hocks, and calm confidence.'
      };
    } else if (herdReadiness >= 85) {
      return {
        tier: 'Reserve Champion Caliber',
        multiplier: 1.10,
        bonusPoints: 10,
        poseStability: 'Steady & Attentive',
        coatGlow: 'Clean Lustrous Fur',
        judgeRemark: 'Well cared for companion with bright eyes, hydrated tissue elasticity, and attentive show ring posture.'
      };
    } else if (herdReadiness >= 70) {
      return {
        tier: 'Blue Ribbon Standard',
        multiplier: 1.05,
        bonusPoints: 5,
        poseStability: 'Good Show Poise',
        coatGlow: 'Good Condition',
        judgeRemark: 'Sound husbandry demonstrated. Regular daily grooming and clean dry bedding evident.'
      };
    } else {
      return {
        tier: 'Needs Care Refinement',
        multiplier: 0.90,
        bonusPoints: 0,
        poseStability: 'Restless / Nervous',
        coatGlow: 'Slight Trail Dust & Molt',
        judgeRemark: 'Animal exhibits mild restlessness and slight coat dustiness. Daily brushing and calming trust sessions recommended.'
      };
    }
  }
}
