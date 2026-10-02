// WarrenWise Trainer AI - Intelligent Study Coach for Youth Animal Projects
// Adapted & elevated from WarrenWise Engine with strict veterinary refusal boundaries,
// age-adapted tutoring, quiz remediation, and approved-curriculum question generation.

import { AGE_DIVISIONS, KNOWLEDGE_TIERS, LEGAL_DISCLAIMERS } from '../config/constants.js';
import { ALL_SPECIES_PACKS } from '../data/speciesPacks/index.js';
import { db } from '../db/academyDb.js';

// Strict medical & veterinary keywords that trigger immediate safety interception
const MEDICAL_KEYWORDS = [
  'treat', 'cure', 'dosage', 'dose', 'medication', 'medicine', 'antibiotic',
  'penicillin', 'amoxicillin', 'ivermectin', 'inject', 'injection', 'prescription',
  'sick', 'illness', 'dying', 'abscess', 'surgery', 'bleeding', 'snuffles',
  'pasturella', 'pasteurella', 'wound', 'vomit', 'diarrhea', 'seizure'
];

export async function askWarrenWiseTrainer({
  query,
  division = 'junior',
  speciesId = 'rabbits',
  contextModuleId = null,
  learnerId = 'demo_learner'
}) {
  const q = query.trim().toLowerCase();
  const divConfig = AGE_DIVISIONS[division] || AGE_DIVISIONS.junior;
  const timestamp = new Date().toISOString();

  // 1. Strict Medical & Veterinary Safety Filter
  const flaggedMedical = MEDICAL_KEYWORDS.some(word => q.includes(word));
  if (flaggedMedical) {
    const refusalResponse = {
      isSafetyBlocked: true,
      category: 'VETERINARY_SAFETY_INTERCEPT',
      sourceTier: KNOWLEDGE_TIERS.TIER_1_OFFICIAL,
      title: 'Veterinary Safety & Animal Welfare Boundary',
      headline: 'WarrenWise Trainer cannot provide veterinary diagnoses, prescriptions, or medication dosages.',
      ageAdaptedAdvice: division === 'cloverbud'
        ? 'Oh no! If your little animal friend is feeling sick or hurt, please go tell your mom, dad, or club leader right this second so they can call a helpful veterinarian doctor!'
        : 'Youth Animal Academy safety rules strictly prohibit giving medical treatment, antibiotic dosages, or disease cures. 4-H exhibitors observe symptoms, isolate sick animals to protect the herd, and consult a licensed veterinarian.',
      actionSteps: [
        '1. Immediately isolate the animal from the herd in a clean, quiet, draft-free quarantine cage.',
        '2. Provide clean fresh water and observe whether the animal is eating hay or drinking.',
        '3. Contact a licensed veterinarian specializing in small animals / exotics / livestock.',
        '4. Notify your 4-H project leader or county Extension agent for biosecurity guidance.'
      ],
      disclaimer: LEGAL_DISCLAIMERS.veterinary
    };

    // Log to audit trail in IndexedDB if available
    try {
      if (db) {
        await db.aiAuditLogs.add({
          id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
          learnerId,
          query,
          topic: 'veterinary_intercept',
          flaggedMedical: true,
          safetyBlocked: true,
          timestamp
        });
      }
    } catch (e) {
      console.warn('AI audit logging notice:', e.message);
    }

    return refusalResponse;
  }

  // 2. Curated Approved Knowledge Search
  const pack = ALL_SPECIES_PACKS.find(p => p.id === speciesId) || ALL_SPECIES_PACKS[0];
  let matchedModule = contextModuleId 
    ? pack.modules.find(m => m.id === contextModuleId)
    : null;

  if (!matchedModule) {
    // Search module titles and content
    matchedModule = pack.modules.find(m => {
      const titleMatch = m.title.toLowerCase().includes(q) || q.includes(m.topicId);
      const objMatch = m.objectives.some(obj => obj.toLowerCase().includes(q));
      return titleMatch || objMatch;
    }) || pack.modules[0];
  }

  const moduleContent = matchedModule.ageContent[division] || matchedModule.ageContent.junior;

  // 3. Construct Age-Responsive Coaching Response
  let response = {
    isSafetyBlocked: false,
    category: 'EDUCATIONAL_COACHING',
    sourceTier: KNOWLEDGE_TIERS.TIER_1_OFFICIAL,
    species: pack.species,
    moduleTitle: matchedModule.title,
    headline: moduleContent.headline || `Coaching Tips for ${matchedModule.title}`,
    ageAdaptedAdvice: generateAgeAdaptedTutoring(query, division, matchedModule, pack),
    studyTips: [
      `Review ${matchedModule.title} in the ${pack.species} pack for division ${divConfig.name}.`,
      'Practice step-by-step handling and observation daily in the barn.',
      'Test your knowledge with the interactive module quiz to earn mastery badges.'
    ],
    relatedQuestions: matchedModule.quizQuestions.slice(0, 2).map(q => q.question),
    disclaimer: LEGAL_DISCLAIMERS.general
  };

  // Log successful interaction
  try {
    if (db) {
      await db.aiAuditLogs.add({
        id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        learnerId,
        query,
        topic: matchedModule.topicId,
        flaggedMedical: false,
        safetyBlocked: false,
        timestamp
      });
    }
  } catch (e) {}

  return response;
}

// Generate age-adapted explanations
function generateAgeAdaptedTutoring(query, division, module, pack) {
  const q = query.toLowerCase();
  
  if (division === 'cloverbud') {
    if (q.includes('feed') || q.includes('eat') || q.includes('hay')) {
      return `Bunnies and cavies love crunchy green grass hay! Make sure they have a nice big pile every single day. And remember, carrots and sweet snacks are only for tiny special rewards!`;
    }
    if (q.includes('hold') || q.includes('pick') || q.includes('carry')) {
      return `Always hold your animal friend with TWO gentle hands! Tuck them close to your tummy like a little football so their back legs feel safe and cannot jump.`;
    }
    return `You are doing a fantastic job learning about your ${pack.species}! Keep your hands gentle, give fresh water every day, and smile big for the judge!`;
  }

  if (division === 'junior') {
    if (q.includes('showmanship') || q.includes('routine')) {
      return `Remember the junior showmanship keys: Walk up to the table with a secure two-handed football carry, place your animal on the mat facing the judge, and go step-by-step through ears, eyes, teeth, feet, and fur. Keep smiling!`;
    }
    if (q.includes('vitamin c') || q.includes('scurvy')) {
      return `Cavies cannot make their own Vitamin C! They need 10 to 30 mg every day from fresh green bell peppers or fortified cavy pellets to prevent Scurvy.`;
    }
    return `In your ${module.title} studies, focus on mastering the core definitions, daily schedules, and identifying healthy signs vs signs of stress.`;
  }

  if (division === 'intermediate') {
    return `For the Intermediate division, focus on the 'Why' behind the rules. Understand body type curves, feed conversion ratios (FCR), how poor ventilation elevates ammonia and harms respiratory cilia, and memorize standard show disqualifications.`;
  }

  // Senior Division
  return `At the Senior division level, prepare pre-judge oral reasons using Standard of Perfection terminology. Evaluate point allocations across body type vs fur vs head/ears, understand genetic inheritance of faults, and uphold agricultural leadership and biosecurity protocols.`;
}

// Quiz Remediation: Explains a missed question in simpler language
export function explainMissedQuestion({ question, selectedOption, correctOption, explanation, division }) {
  const divInfo = AGE_DIVISIONS[division] || AGE_DIVISIONS.junior;
  
  if (division === 'cloverbud') {
    return {
      encouragement: "That was a super good try! Let’s learn it together:",
      simpleExplanation: `The right answer is "${correctOption}". ${explanation}`,
      nextStep: "Try the fun picture card again!"
    };
  }

  return {
    encouragement: `Good effort! Here is the WarrenWise breakdown for ${divInfo.name}:`,
    whyIncorrect: `You selected "${selectedOption}".`,
    whyCorrect: `The approved standard answer is "${correctOption}".`,
    coreReasoning: explanation,
    studyRule: `Standard Reference: Approved ${divInfo.name} Curriculum Tier 1.`
  };
}

// Coach Assist: Generates automated learner progress summary for coaches & parents
export function generateCoachProgressSummary({ learnerHandle, ageDivision, completedModules, weakTopics = [], averageScore = 85 }) {
  const divInfo = AGE_DIVISIONS[ageDivision] || AGE_DIVISIONS.junior;
  
  let summary = `${learnerHandle} (${divInfo.name}) has completed ${completedModules.length} training modules with an average accuracy of ${averageScore}%.`;
  
  if (weakTopics.length > 0) {
    summary += ` Recommended focus areas: ${weakTopics.join(', ')}. Practice oral question drills and review biosecurity flashcards before the upcoming fair.`;
  } else {
    summary += ` Demonstrating high mastery across all active modules! Ready for advanced showmanship and skillathon station practice.`;
  }

  return {
    learnerHandle,
    divisionName: divInfo.name,
    overallScore: averageScore,
    weakTopics,
    coachNote: summary,
    generatedAt: new Date().toLocaleDateString()
  };
}
