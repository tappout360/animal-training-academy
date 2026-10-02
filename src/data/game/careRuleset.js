// WarrenWise Animal Academy - Herd Trail Quest
// Content Safety Ruleset for Care & Sickness Challenges
// Strictly maintains youth safety, animal welfare, and legal veterinary boundaries

export const CARE_SAFETY_PRINCIPLES = {
  OBSERVATION_FIRST: 'Observe and note objective signs (temperature, appetite, posture, breathing, mucosal color).',
  COMFORT_BASICS: 'Provide basic husbandry comfort (clean dry bedding, fresh cool water, ventilation, shelter from elements).',
  BIOSECURITY_ISOLATION: 'Safely separate unwell animals from the rest of the herd/party to prevent disease transmission.',
  PROFESSIONAL_ESCALATION: 'Contact a licensed veterinarian, Extension educator, or parent/coach immediately.',
  DISALLOWED_TREATMENT: 'NEVER prescribe medication names, dosages (mg/kg), injections without vet supervision, or fantasy "instant cure" items.'
};

export const PROHIBITED_CARE_TERMS = [
  'penicillin dosage',
  'antibiotic dose',
  'mg/kg',
  'prescribe',
  'inject medicine',
  'home surgery',
  'diy surgery',
  'magic cure potion',
  'instant heal herb',
  'tranquilizer',
  'sedative'
];

/**
 * Validates that an educational care option complies with youth animal welfare rules.
 * Flags any prohibited medical dosing or fantasy cure claims.
 */
export function validateCareOption(optionText) {
  const text = (optionText || '').toLowerCase();
  for (const term of PROHIBITED_CARE_TERMS) {
    if (text.includes(term)) {
      return {
        isValid: false,
        reason: `Violates veterinary boundary: contains prohibited medical or fantasy term "${term}".`
      };
    }
  }
  return { isValid: true };
}
