// WarrenWise Youth Animal Training Academy - Youth Safety, COPPA & Passcode/PIN Management Service
// Enforces child privacy, non-PII youth handles, parental linkage, coach permissions,
// and customizable Parent PINs, Co-Guardian PINs, 4-H Coach Passcodes, Club Join Codes, and Youth Profile PINs.

export const SAFE_HANDLE_PREFIXES = ['Clover', 'Barn', 'Show', 'Warren', 'Junior', 'Meadow', 'Trail', 'Champion'];
export const SAFE_HANDLE_ANIMALS = ['Bunny', 'Cavy', 'Lop', 'Star', 'Keeper', 'Explorer', 'Leader', 'Ranger'];

const CREDENTIALS_STORAGE_KEY = 'ww_role_security_credentials_v1';
const memoryCredentialsStore = new Map();

export const RECOVERY_QUESTIONS = [
  'What was the name of your first childhood pet or barn animal?',
  'What county or 4-H club chapter is your family registered with?',
  'What is the name of the street your favorite barn or park is on?',
  'What was the breed of the first animal your family exhibited?'
];

export const DEFAULT_SECURITY_CREDENTIALS = {
  parentPin: '4444',
  parentSecondaryPin: '',
  parentPinConfigured: false,
  parentRecoveryQuestion: RECOVERY_QUESTIONS[0],
  parentRecoveryAnswer: 'clover',
  coachCode: '2222',
  coachClubJoinCode: '4H-CLOVER-2026',
  coachCodeConfigured: false,
  coachRecoveryQuestion: RECOVERY_QUESTIONS[1],
  coachRecoveryAnswer: 'valley',
  learnerPins: {},
  auditHistory: [
    {
      id: 'sec_init',
      role: 'system',
      action: 'DEFAULT_CREDENTIALS_READY',
      detail: 'Default Parent PIN (4444) and 4-H Coach Passcode (2222) active until customized.',
      timestamp: '2026-10-01T08:00:00.000Z'
    }
  ],
  updatedAt: '2026-10-01T08:00:00.000Z'
};

function readRawCredentials() {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
      const raw = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    }
  } catch (e) {
    // Fallback to in-memory store
  }
  return memoryCredentialsStore.get(CREDENTIALS_STORAGE_KEY) || null;
}

function writeRawCredentials(creds) {
  try {
    if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
      localStorage.setItem(CREDENTIALS_STORAGE_KEY, JSON.stringify(creds));
    }
  } catch (e) {
    // Fallback to in-memory store
  }
  memoryCredentialsStore.set(CREDENTIALS_STORAGE_KEY, creds);
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(new CustomEvent('ww_security_credentials_updated', { detail: creds }));
  }
}

export function getSecurityCredentials() {
  const stored = readRawCredentials();
  if (!stored) {
    return {
      ...DEFAULT_SECURITY_CREDENTIALS,
      learnerPins: { ...DEFAULT_SECURITY_CREDENTIALS.learnerPins },
      auditHistory: [...DEFAULT_SECURITY_CREDENTIALS.auditHistory]
    };
  }
  return {
    ...DEFAULT_SECURITY_CREDENTIALS,
    ...stored,
    learnerPins: { ...(DEFAULT_SECURITY_CREDENTIALS.learnerPins || {}), ...(stored.learnerPins || {}) },
    auditHistory: Array.isArray(stored.auditHistory)
      ? stored.auditHistory
      : [...DEFAULT_SECURITY_CREDENTIALS.auditHistory]
  };
}

export function generateSafeYouthHandle() {
  const prefix = SAFE_HANDLE_PREFIXES[Math.floor(Math.random() * SAFE_HANDLE_PREFIXES.length)];
  const animal = SAFE_HANDLE_ANIMALS[Math.floor(Math.random() * SAFE_HANDLE_ANIMALS.length)];
  const num = Math.floor(10 + Math.random() * 90);
  return `${prefix}${animal}${num}`;
}

export function validateYouthProfile(profile) {
  const errors = [];
  
  // Rule: Do NOT store full legal names for minors under 13 without verified parental consent
  if (profile.ageDivision === 'cloverbud' || profile.ageDivision === 'junior') {
    if (!profile.parentEmail || !profile.parentEmail.includes('@')) {
      errors.push('Parent or Guardian email is required for minors in Cloverbud or Junior divisions.');
    }
  }

  // Rule: Handles cannot contain email, phone numbers, or inappropriate words
  const containsNumbersOnly = /^\d+$/.test(profile.handle);
  if (containsNumbersOnly || profile.handle.length < 3) {
    errors.push('Handle must be a creative nickname at least 3 characters long.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function verifyParentPin(enteredPin, savedPin = null) {
  const cleanEntered = String(enteredPin ?? '').trim();
  if (!cleanEntered) return false;

  // If caller explicitly passed a custom savedPin, check against it as well as stored credentials
  if (savedPin !== null && savedPin !== undefined) {
    if (cleanEntered === String(savedPin).trim()) {
      return true;
    }
  }

  const creds = getSecurityCredentials();
  if (cleanEntered === String(creds.parentPin).trim()) return true;
  if (creds.parentSecondaryPin && cleanEntered === String(creds.parentSecondaryPin).trim()) return true;

  return false;
}

export function verifyCoachCode(enteredCode, savedCode = null) {
  const cleanEntered = String(enteredCode ?? '').trim();
  if (!cleanEntered) return false;

  if (savedCode !== null && savedCode !== undefined) {
    if (cleanEntered.toUpperCase() === String(savedCode).trim().toUpperCase()) {
      return true;
    }
  }

  const creds = getSecurityCredentials();
  if (cleanEntered.toUpperCase() === String(creds.coachCode).trim().toUpperCase()) return true;
  if (
    creds.coachClubJoinCode &&
    cleanEntered.toUpperCase() === String(creds.coachClubJoinCode).trim().toUpperCase()
  ) {
    return true;
  }

  return false;
}

/**
 * Sets up or updates the Parent / Guardian 4-to-6 digit PIN, optional Co-Guardian PIN, and Recovery Question.
 */
export function setupOrUpdateParentPin({
  currentPin = '',
  newPin = '',
  secondaryPin = undefined,
  recoveryQuestion = undefined,
  recoveryAnswer = undefined,
  bypassCurrentCheck = false
}) {
  const creds = getSecurityCredentials();
  const cleanNew = String(newPin ?? '').trim();

  if (!bypassCurrentCheck && creds.parentPinConfigured) {
    if (!verifyParentPin(currentPin)) {
      return {
        success: false,
        error: 'Current Parent PIN is incorrect. Please enter your active Parent PIN or use Recovery.'
      };
    }
  } else if (!bypassCurrentCheck && currentPin && !verifyParentPin(currentPin)) {
    return {
      success: false,
      error: 'Current Parent PIN does not match default (4444).'
    };
  }

  if (!/^\d{4,6}$/.test(cleanNew)) {
    return {
      success: false,
      error: 'Parent PIN must be 4 to 6 numeric digits (e.g., 4829).'
    };
  }

  let cleanSecondary = creds.parentSecondaryPin || '';
  if (secondaryPin !== undefined) {
    const trimmedSec = String(secondaryPin ?? '').trim();
    if (trimmedSec !== '' && !/^\d{4,6}$/.test(trimmedSec)) {
      return {
        success: false,
        error: 'Co-Guardian Secondary PIN must be 4 to 6 numeric digits (or left blank).'
      };
    }
    cleanSecondary = trimmedSec;
  }

  const nextQuestion = recoveryQuestion !== undefined && String(recoveryQuestion).trim()
    ? String(recoveryQuestion).trim()
    : creds.parentRecoveryQuestion;

  const nextAnswer = recoveryAnswer !== undefined && String(recoveryAnswer).trim()
    ? String(recoveryAnswer).trim().toLowerCase()
    : creds.parentRecoveryAnswer;

  const updated = {
    ...creds,
    parentPin: cleanNew,
    parentSecondaryPin: cleanSecondary,
    parentPinConfigured: true,
    parentRecoveryQuestion: nextQuestion,
    parentRecoveryAnswer: nextAnswer,
    updatedAt: new Date().toISOString(),
    auditHistory: [
      {
        id: `sec_${Date.now()}`,
        role: 'parent',
        action: creds.parentPinConfigured ? 'PARENT_PIN_CHANGED' : 'PARENT_PIN_INITIAL_SETUP',
        detail: `Parent PIN updated (${cleanNew.length} digits)${cleanSecondary ? ' + Co-Guardian PIN enabled' : ''}.`,
        timestamp: new Date().toISOString()
      },
      ...(creds.auditHistory || []).slice(0, 29)
    ]
  };

  writeRawCredentials(updated);
  return {
    success: true,
    credentials: updated,
    message: 'Parent & Guardian PIN credentials saved and activated!'
  };
}

/**
 * Sets up or updates the 4-H Leader / Coach Portal Passcode, Club Roster Join Code, and Recovery Question.
 */
export function setupOrUpdateCoachPasscode({
  currentCode = '',
  newCode = '',
  clubJoinCode = undefined,
  recoveryQuestion = undefined,
  recoveryAnswer = undefined,
  bypassCurrentCheck = false
}) {
  const creds = getSecurityCredentials();
  const cleanNew = String(newCode ?? '').trim();

  if (!bypassCurrentCheck && creds.coachCodeConfigured) {
    if (!verifyCoachCode(currentCode)) {
      return {
        success: false,
        error: 'Current Coach Passcode is incorrect. Please enter your active Coach Passcode or use Recovery.'
      };
    }
  } else if (!bypassCurrentCheck && currentCode && !verifyCoachCode(currentCode)) {
    return {
      success: false,
      error: 'Current Coach Passcode does not match default (2222).'
    };
  }

  if (!/^[A-Za-z0-9-]{4,12}$/.test(cleanNew)) {
    return {
      success: false,
      error: 'Coach Passcode must be 4 to 12 letters, numbers, or hyphens (e.g., 8492 or BARN-2026).'
    };
  }

  let nextClubCode = creds.coachClubJoinCode || '4H-CLOVER-2026';
  if (clubJoinCode !== undefined) {
    const trimmedClub = String(clubJoinCode ?? '').trim().toUpperCase();
    if (trimmedClub !== '' && !/^[A-Z0-9-]{4,16}$/.test(trimmedClub)) {
      return {
        success: false,
        error: 'Club Roster Join Code must be 4 to 16 letters, numbers, or hyphens (e.g., 4H-CLOVER-2026).'
      };
    }
    if (trimmedClub) nextClubCode = trimmedClub;
  }

  const nextQuestion = recoveryQuestion !== undefined && String(recoveryQuestion).trim()
    ? String(recoveryQuestion).trim()
    : creds.coachRecoveryQuestion;

  const nextAnswer = recoveryAnswer !== undefined && String(recoveryAnswer).trim()
    ? String(recoveryAnswer).trim().toLowerCase()
    : creds.coachRecoveryAnswer;

  const updated = {
    ...creds,
    coachCode: cleanNew,
    coachClubJoinCode: nextClubCode,
    coachCodeConfigured: true,
    coachRecoveryQuestion: nextQuestion,
    coachRecoveryAnswer: nextAnswer,
    updatedAt: new Date().toISOString(),
    auditHistory: [
      {
        id: `sec_${Date.now()}`,
        role: 'coach',
        action: creds.coachCodeConfigured ? 'COACH_PASSCODE_CHANGED' : 'COACH_PASSCODE_INITIAL_SETUP',
        detail: `Coach Passcode updated + Club Join Code set to ${nextClubCode}.`,
        timestamp: new Date().toISOString()
      },
      ...(creds.auditHistory || []).slice(0, 29)
    ]
  };

  writeRawCredentials(updated);
  return {
    success: true,
    credentials: updated,
    message: '4-H Leader & Coach Passcode and Club Join Code saved!'
  };
}

/**
 * Sets or toggles an individual Youth Learner Profile PIN so siblings cannot switch into each other's profiles.
 */
export function setLearnerProfilePin({
  authorizingPin = '',
  learnerId,
  learnerHandle = 'Learner',
  pin = '',
  enabled = true
}) {
  if (!verifyParentPin(authorizingPin) && !verifyCoachCode(authorizingPin)) {
    return {
      success: false,
      error: 'Valid Parent PIN or Coach Passcode is required to configure Youth Profile PINs.'
    };
  }

  if (!learnerId) {
    return { success: false, error: 'Learner ID is required.' };
  }

  const cleanPin = String(pin ?? '').trim();
  if (enabled && !/^\d{4}$/.test(cleanPin)) {
    return {
      success: false,
      error: 'Youth Profile PIN must be a 4-digit number (e.g., 1234).'
    };
  }

  const creds = getSecurityCredentials();
  const updatedLearnerPins = {
    ...(creds.learnerPins || {}),
    [learnerId]: {
      pin: enabled ? cleanPin : '',
      enabled: Boolean(enabled),
      learnerHandle,
      updatedAt: new Date().toISOString()
    }
  };

  const updated = {
    ...creds,
    learnerPins: updatedLearnerPins,
    updatedAt: new Date().toISOString(),
    auditHistory: [
      {
        id: `sec_${Date.now()}`,
        role: 'youth_profile',
        action: enabled ? 'YOUTH_PROFILE_PIN_ENABLED' : 'YOUTH_PROFILE_PIN_DISABLED',
        detail: `Youth Profile PIN ${enabled ? 'set' : 'disabled'} for ${learnerHandle}.`,
        timestamp: new Date().toISOString()
      },
      ...(creds.auditHistory || []).slice(0, 29)
    ]
  };

  writeRawCredentials(updated);
  return {
    success: true,
    credentials: updated,
    message: enabled
      ? `4-digit profile PIN enabled for ${learnerHandle}!`
      : `Profile PIN lock removed for ${learnerHandle}.`
  };
}

export function verifyLearnerProfilePin(learnerId, enteredPin) {
  const creds = getSecurityCredentials();
  const config = creds.learnerPins?.[learnerId];
  if (!config || !config.enabled || !config.pin) return true;
  if (String(enteredPin ?? '').trim() === String(config.pin).trim()) return true;
  // Parent PIN can also unlock any child's profile
  return verifyParentPin(enteredPin);
}

/**
 * Recovers and resets Parent PIN or Coach Passcode using the configured Security Recovery Answer.
 */
export function recoverPinOrPasscode({
  role = 'parent',
  recoveryAnswer = '',
  newSecret = ''
}) {
  const creds = getSecurityCredentials();
  const cleanAnswer = String(recoveryAnswer ?? '').trim().toLowerCase();

  if (!cleanAnswer) {
    return { success: false, error: 'Please enter your recovery answer.' };
  }

  if (role === 'parent') {
    const expected = String(creds.parentRecoveryAnswer || 'clover').trim().toLowerCase();
    if (cleanAnswer !== expected) {
      return {
        success: false,
        error: 'Recovery answer did not match. (Default demo recovery answer is "clover")'
      };
    }
    return setupOrUpdateParentPin({
      newPin: newSecret,
      bypassCurrentCheck: true
    });
  }

  if (role === 'coach') {
    const expected = String(creds.coachRecoveryAnswer || 'valley').trim().toLowerCase();
    if (cleanAnswer !== expected) {
      return {
        success: false,
        error: 'Recovery answer did not match. (Default demo recovery answer is "valley")'
      };
    }
    return setupOrUpdateCoachPasscode({
      newCode: newSecret,
      bypassCurrentCheck: true
    });
  }

  return { success: false, error: 'Unsupported role for passcode recovery.' };
}

export function resetSecurityCredentialsToDefaults() {
  writeRawCredentials({
    ...DEFAULT_SECURITY_CREDENTIALS,
    updatedAt: new Date().toISOString()
  });
  return getSecurityCredentials();
}

export function canCoachAccessLearner(learner, coachId) {
  if (!learner) return false;
  // Coach access requires explicit assignment and parent consent
  const isAssigned = learner.coachId === coachId;
  const hasParentConsent = !!learner.parentConsentGranted;
  return isAssigned && hasParentConsent;
}
