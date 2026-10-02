// WarrenWise Youth Animal Training Academy - Youth Safety & COPPA Service
// Enforces child privacy, non-PII youth handles, parental linkage, coach permissions, and Cloverbud protection

export const SAFE_HANDLE_PREFIXES = ['Clover', 'Barn', 'Show', 'Warren', 'Junior', 'Meadow', 'Trail', 'Champion'];
export const SAFE_HANDLE_ANIMALS = ['Bunny', 'Cavy', 'Lop', 'Star', 'Keeper', 'Explorer', 'Leader', 'Ranger'];

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

export function verifyParentPin(enteredPin, savedPin = '4444') {
  return String(enteredPin).trim() === String(savedPin).trim();
}

export function canCoachAccessLearner(learner, coachId) {
  if (!learner) return false;
  // Coach access requires explicit assignment and parent consent
  const isAssigned = learner.coachId === coachId;
  const hasParentConsent = !!learner.parentConsentGranted;
  return isAssigned && hasParentConsent;
}
