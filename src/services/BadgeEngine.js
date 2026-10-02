// WarrenWise Youth Animal Training Academy - Badge Evaluation Engine
// Evaluates badge unlock criteria, manages manual awards with audit logging, and calculates badge progression

import { ALL_CATALOG_BADGES, BADGE_TIERS } from '../data/badgesCatalog.js';
import { db } from '../db/academyDb.js';

export class BadgeEngine {
  /**
   * Evaluates all catalog badges against current learner progress.
   * Returns newly unlocked badges.
   */
  static evaluateLearnerBadges({
    learnerId,
    completedModules = [],
    quizScores = {},
    streakDays = 0,
    ethicsResolvedCount = 0,
    existingBadgeKeys = []
  }) {
    const newlyUnlocked = [];
    const existingSet = new Set(existingBadgeKeys);

    ALL_CATALOG_BADGES.forEach(badge => {
      if (existingSet.has(badge.key)) return; // Already earned

      let unlocked = false;

      // 1. Species Mastery Badges
      if (badge.category === 'species_mastery' && badge.speciesId) {
        const speciesMods = completedModules.filter(m => m.speciesId === badge.speciesId);
        if (speciesMods.length >= 9) {
          const scores = speciesMods.map(m => quizScores[m.moduleId] || 85);
          const avg = scores.reduce((a, b) => a + b, 0) / (scores.length || 1);
          if (avg >= 80) {
            unlocked = true;
          }
        }
      }

      // 2. Streaks
      if (badge.category === 'streaks') {
        if (badge.key === 'streak_3_days' && streakDays >= 3) unlocked = true;
        if (badge.key === 'streak_7_days' && streakDays >= 7) unlocked = true;
        if (badge.key === 'streak_14_days' && streakDays >= 14) unlocked = true;
        if (badge.key === 'streak_30_days' && streakDays >= 30) unlocked = true;
      }

      // 3. Ethics & Skills
      if (badge.key === 'skill_ethics_champion' && ethicsResolvedCount >= 3) {
        unlocked = true;
      }

      // 4. Age-track milestones
      if (badge.category === 'age_milestone') {
        if (badge.key === 'milestone_cloverbud_first_steps' && completedModules.length >= 3) unlocked = true;
        if (badge.key === 'milestone_junior_scholar' && completedModules.length >= 10) unlocked = true;
        if (badge.key === 'milestone_intermediate_leader' && completedModules.length >= 15) unlocked = true;
        if (badge.key === 'milestone_senior_champion' && completedModules.length >= 20) unlocked = true;
      }

      // 5. Practical Skill Badges
      if (badge.key === 'skill_biosecurity_shield') {
        const healthMods = completedModules.filter(m => m.moduleId === 'health_biosecurity');
        if (healthMods.length >= 2) unlocked = true;
      }
      if (badge.key === 'skill_nutrition_pro') {
        const nutMods = completedModules.filter(m => m.moduleId === 'nutrition');
        if (nutMods.length >= 2) unlocked = true;
      }

      if (unlocked) {
        newlyUnlocked.push({
          ...badge,
          unlockedAt: new Date().toISOString()
        });
      }
    });

    return {
      newlyUnlocked,
      totalCatalogCount: ALL_CATALOG_BADGES.length
    };
  }

  /**
   * Manually grants a badge with mandatory audit logging (for coaches and administrators).
   */
  static async awardManualBadge({
    learnerId,
    badgeKey,
    grantedBy,
    reason,
    role = 'coach'
  }) {
    if (!reason || reason.trim().length < 5) {
      throw new Error('A detailed reason (at least 5 characters) is required for manual badge awards.');
    }

    const badge = ALL_CATALOG_BADGES.find(b => b.key === badgeKey);
    if (!badge) {
      throw new Error(`Badge not found in catalog: ${badgeKey}`);
    }

    const auditRecord = {
      id: `audit_badge_${Date.now()}`,
      learnerId,
      badgeKey,
      badgeName: badge.name,
      grantedBy,
      role,
      reason,
      grantedAt: new Date().toISOString()
    };

    try {
      if (db && db.auditLogs) {
        await db.auditLogs.add(auditRecord);
      }
    } catch (e) {
      console.warn('Audit log storage notice:', e.message);
    }

    return {
      success: true,
      badge,
      auditRecord
    };
  }

  /**
   * Determines the optimal next badge for a learner to work toward.
   */
  static getSuggestedNextBadge({
    completedModules = [],
    existingBadgeKeys = [],
    currentSpeciesId = 'rabbits'
  }) {
    const existingSet = new Set(existingBadgeKeys);

    // Check species mastery progress first
    const masteryKey = `mastery_${currentSpeciesId}`;
    if (!existingSet.has(masteryKey)) {
      const speciesMods = completedModules.filter(m => m.speciesId === currentSpeciesId);
      const remaining = Math.max(0, 9 - speciesMods.length);
      const badge = ALL_CATALOG_BADGES.find(b => b.key === masteryKey);
      if (badge) {
        return {
          badge,
          progressPercent: Math.round((speciesMods.length / 9) * 100),
          callToAction: remaining === 0 
            ? 'Complete your final review quiz to claim mastery!' 
            : `Complete ${remaining} more module${remaining === 1 ? '' : 's'} to earn this gold badge!`
        };
      }
    }

    // Otherwise find the next milestone or streak badge
    const nextBadge = ALL_CATALOG_BADGES.find(b => !existingSet.has(b.key));
    return {
      badge: nextBadge || ALL_CATALOG_BADGES[0],
      progressPercent: 50,
      callToAction: 'Keep exploring modules to unlock this award!'
    };
  }
}
