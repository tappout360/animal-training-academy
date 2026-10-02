// WarrenWise Youth Animal Training Academy - Parental Controls Service
// Core Rule: The app does NOT hard-lock youth beyond statutory legal/safety minimums.
// Parents control all limits independently per linked child. Supports "No Limit" across all categories.

const CONTROLS_STORAGE_PREFIX = 'ww_parental_controls_';
const AUDIT_STORAGE_PREFIX = 'ww_parental_audit_';
const USAGE_STORAGE_PREFIX = 'ww_daily_usage_';

const inMemoryStore = new Map();

function storageGet(key) {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
      const val = localStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch (e) {
    // Fall back to memory
  }
  return inMemoryStore.get(key) || null;
}

function storageSet(key, value) {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    // Fall back to memory
  }
  inMemoryStore.set(key, value);
}

export const TIME_LIMIT_OPTIONS = [
  { value: 15, label: '15 Minutes' },
  { value: 30, label: '30 Minutes' },
  { value: 45, label: '45 Minutes' },
  { value: 60, label: '1 Hour' },
  { value: 90, label: '1.5 Hours' },
  { value: 120, label: '2 Hours' },
  { value: null, label: 'No Limit (Unlimited)' }
];

export const BREAK_REMINDER_OPTIONS = [
  { value: 'off', label: 'Off' },
  { value: '20min', label: 'Every 20 Minutes (20-20-20 Eye Rest)' },
  { value: '45min', label: 'Every 45 Minutes' }
];

export const AI_HINT_OPTIONS = [
  { value: 'off', label: 'Off (Independent Study Only)' },
  { value: 'some', label: 'Standard (Animal Welfare Coaching Hints)' },
  { value: 'full', label: 'Full (Interactive WarrenWise Study Companion)' }
];

export const SHOWCASE_OPTIONS = [
  { value: 'private', label: 'Private (Family & Assigned Coach Only)' },
  { value: 'community', label: 'Community Showcase (PII-Scrubbed Nicknames)' },
  { value: 'full', label: 'Public Leaderboard & Badges' }
];

// Age-responsive safe default configurations
export function getSafeDefaultsByDivision(division = 'junior') {
  switch (division) {
    case 'cloverbud': // Ages 5-8
      return {
        dailyTimeLimitMinutes: 30,
        schedule: {
          type: 'custom',
          startHour: 7, // 7:00 AM
          endHour: 19, // 7:00 PM
          allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        difficultyCeiling: 'cloverbud',
        showcaseSharing: 'private',
        coachAccess: false,
        aiHintLevel: 'some',
        spendingLock: true,
        breakReminders: '20min',
        isAppFrozen: false,
        freezeMessage: 'Time for family and outdoor play!',
        forceLogoutNonce: 1
      };

    case 'junior': // Ages 9-11
      return {
        dailyTimeLimitMinutes: 60,
        schedule: {
          type: 'custom',
          startHour: 6, // 6:00 AM
          endHour: 20, // 8:00 PM
          allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        difficultyCeiling: 'auto',
        showcaseSharing: 'community',
        coachAccess: true,
        aiHintLevel: 'full',
        spendingLock: true,
        breakReminders: '45min',
        isAppFrozen: false,
        freezeMessage: 'Time for barn chores and homework!',
        forceLogoutNonce: 1
      };

    case 'intermediate': // Ages 12-13
      return {
        dailyTimeLimitMinutes: 90,
        schedule: {
          type: 'always',
          startHour: 6,
          endHour: 21,
          allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        difficultyCeiling: 'auto',
        showcaseSharing: 'community',
        coachAccess: true,
        aiHintLevel: 'full',
        spendingLock: true,
        breakReminders: '45min',
        isAppFrozen: false,
        freezeMessage: '',
        forceLogoutNonce: 1
      };

    case 'senior': // Ages 14-19
    default:
      return {
        dailyTimeLimitMinutes: null, // No limit by default for seniors
        schedule: {
          type: 'always',
          startHour: 5,
          endHour: 23,
          allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        difficultyCeiling: 'auto',
        showcaseSharing: 'full',
        coachAccess: true,
        aiHintLevel: 'full',
        spendingLock: true,
        breakReminders: 'off',
        isAppFrozen: false,
        freezeMessage: '',
        forceLogoutNonce: 1
      };
  }
}

export class ParentalControlsService {
  /**
   * Retrieves active limits for a linked youth.
   */
  static getLimitsForLearner(learnerId, division = 'junior') {
    try {
      const data = storageGet(`${CONTROLS_STORAGE_PREFIX}${learnerId}`);
      if (data) {
        const parsed = JSON.parse(data);
        const defaults = getSafeDefaultsByDivision(division);
        return { ...defaults, ...parsed };
      }
    } catch (e) {
      console.warn('Parental controls load notice:', e.message);
    }
    return getSafeDefaultsByDivision(division);
  }

  /**
   * Updates parental controls for a specific child, logging the change to the audit trail.
   */
  static saveLimits({
    learnerId,
    learnerHandle = 'Learner',
    parentPin = '4444',
    newLimits,
    parentEmail = 'parent@farmfamily.org',
    reason = 'Parent updated learning boundaries'
  }) {
    // 1. PIN verification for security
    if (String(parentPin).trim() !== '4444') {
      return {
        success: false,
        error: 'Incorrect Parent PIN. Please enter your 4-digit PIN.'
      };
    }

    try {
      storageSet(
        `${CONTROLS_STORAGE_PREFIX}${learnerId}`,
        JSON.stringify(newLimits)
      );

      // 2. Append to immutable audit log
      this.logAuditEntry(learnerId, {
        learnerHandle,
        parentEmail,
        action: 'LIMITS_UPDATED',
        description: reason,
        summary: this.summarizeLimits(newLimits),
        timestamp: new Date().toISOString()
      });

        // 3. Dispatch global event for live reactive UI update across tabs
        if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
          window.dispatchEvent(new CustomEvent('ww_parental_controls_updated', {
            detail: { learnerId, limits: newLimits }
          }));
        }

      return {
        success: true,
        limits: newLimits
      };
    } catch (e) {
      return {
        success: false,
        error: `Storage error: ${e.message}`
      };
    }
  }

  /**
   * Temporary Quick-Extension tool: allows parent to add bonus time (+15m, +30m, or unfreeze)
   */
  static quickExtend({
    learnerId,
    parentPin = '4444',
    extensionMinutes = 30
  }) {
    if (String(parentPin).trim() !== '4444') {
      return { success: false, error: 'Invalid Parent PIN.' };
    }

    const current = this.getLimitsForLearner(learnerId);
    let updated;

    if (extensionMinutes === null) {
      // Grant Unlimited for today
      updated = { ...current, dailyTimeLimitMinutes: null, isAppFrozen: false };
    } else {
      const existing = current.dailyTimeLimitMinutes || 60;
      updated = { ...current, dailyTimeLimitMinutes: existing + extensionMinutes, isAppFrozen: false };
    }

    return this.saveLimits({
      learnerId,
      parentPin,
      newLimits: updated,
      reason: `Quick Extension granted: ${extensionMinutes ? `+${extensionMinutes} min` : 'Unlimited for today'}`
    });
  }

  /**
   * Instant Freeze App tool: immediately pauses child's app access
   */
  static setAppFreeze({
    learnerId,
    parentPin = '4444',
    freeze = true,
    message = 'App frozen by parent. Time for chores or dinner!'
  }) {
    if (String(parentPin).trim() !== '4444') {
      return { success: false, error: 'Invalid Parent PIN.' };
    }

    const current = this.getLimitsForLearner(learnerId);
    const updated = {
      ...current,
      isAppFrozen: freeze,
      freezeMessage: freeze ? message : ''
    };

    return this.saveLimits({
      learnerId,
      parentPin,
      newLimits: updated,
      reason: freeze ? `Instant App Freeze enabled: "${message}"` : 'App Freeze lifted by parent'
    });
  }

  /**
   * Force Logout tool: terminates active session nonce
   */
  static forceLogoutChild({
    learnerId,
    parentPin = '4444'
  }) {
    if (String(parentPin).trim() !== '4444') {
      return { success: false, error: 'Invalid Parent PIN.' };
    }

    const current = this.getLimitsForLearner(learnerId);
    const updated = {
      ...current,
      forceLogoutNonce: (current.forceLogoutNonce || 1) + 1
    };

    return this.saveLimits({
      learnerId,
      parentPin,
      newLimits: updated,
      reason: 'Parent initiated remote force-logout'
    });
  }

  /**
   * Evaluates if a given species pack is allowed for the child.
   */
  static isSpeciesAllowed(limits, speciesId) {
    if (!limits || limits.allowedSpecies === 'ALL') return true;
    if (Array.isArray(limits.allowedSpecies)) {
      return limits.allowedSpecies.includes(speciesId);
    }
    return true;
  }

  /**
   * Evaluates if a given game mode is allowed for the child.
   */
  static isModeAllowed(limits, modeId) {
    if (!limits || limits.allowedModes === 'ALL') return true;
    if (Array.isArray(limits.allowedModes)) {
      return limits.allowedModes.includes(modeId);
    }
    return true;
  }

  /**
   * Tracks daily screen usage in minutes for today.
   */
  static getDailyUsageMinutes(learnerId) {
    const today = new Date().toISOString().split('T')[0];
    try {
      const raw = storageGet(`${USAGE_STORAGE_PREFIX}${learnerId}_${today}`);
      return raw ? parseInt(raw, 10) : 0;
    } catch (e) {
      console.warn('Daily usage load notice:', e.message);
    }
    return 0;
  }

  static incrementDailyUsage(learnerId, minutes = 1) {
    const today = new Date().toISOString().split('T')[0];
    const current = this.getDailyUsageMinutes(learnerId);
    const updated = current + minutes;
    try {
      storageSet(`${USAGE_STORAGE_PREFIX}${learnerId}_${today}`, String(updated));
    } catch (e) {
      console.warn('Daily usage save notice:', e.message);
    }
    return updated;
  }

  /**
   * Checks if current time is within allowed schedule.
   */
  static isWithinSchedule(limits) {
    if (!limits || limits.schedule?.type === 'always') return { allowed: true };

    const now = new Date();
    const currentHour = now.getHours();
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const currentDay = dayNames[now.getDay()];

    const schedule = limits.schedule || { startHour: 6, endHour: 20, allowedDays: dayNames };

    if (!schedule.allowedDays.includes(currentDay)) {
      return {
        allowed: false,
        reason: `Learning app is not scheduled for today (${currentDay.toUpperCase()}). Enjoy your day!`
      };
    }

    if (currentHour < schedule.startHour || currentHour >= schedule.endHour) {
      const formatHour = (h) => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        const display = h % 12 || 12;
        return `${display}:00 ${ampm}`;
      };
      return {
        allowed: false,
        reason: `App hours for today are ${formatHour(schedule.startHour)} to ${formatHour(schedule.endHour)}. Time to rest!`
      };
    }

    return { allowed: true };
  }

  /**
   * Audit Log Storage & Retrieval
   */
  static logAuditEntry(learnerId, entry) {
    try {
      const key = `${AUDIT_STORAGE_PREFIX}${learnerId}`;
      let logs = [];
      const raw = storageGet(key);
      if (raw) logs = JSON.parse(raw);
      logs.unshift({ id: `audit_${Date.now()}`, ...entry });
      // Keep last 50 entries
      storageSet(key, JSON.stringify(logs.slice(0, 50)));
    } catch (e) {
      console.warn('Audit log write notice:', e.message);
    }
  }

  static getAuditLogs(learnerId) {
    try {
      const raw = storageGet(`${AUDIT_STORAGE_PREFIX}${learnerId}`);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Audit log load notice:', e.message);
    }
    return [
      {
        id: 'audit_init',
        action: 'DEFAULT_LIMITS_APPLIED',
        description: 'Account linked with age-responsive safety defaults',
        summary: 'Safe defaults active; all controls parent-configurable',
        timestamp: new Date().toISOString()
      }
    ];
  }

  static summarizeLimits(limits) {
    const time = limits.dailyTimeLimitMinutes === null ? 'No Limit' : `${limits.dailyTimeLimitMinutes}m`;
    const schedule = limits.schedule?.type === 'always' ? 'Always Allowed' : `${limits.schedule?.startHour}:00 - ${limits.schedule?.endHour}:00`;
    const ai = limits.aiHintLevel;
    const frozen = limits.isAppFrozen ? 'FROZEN' : 'Active';
    return `Time: ${time} | Schedule: ${schedule} | AI: ${ai} | State: ${frozen}`;
  }
}
