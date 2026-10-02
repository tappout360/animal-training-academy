// WarrenWise Youth Animal Training Academy - Automated Test Suite
// Verifies Youth Safety, AI Veterinary Intercepts, Species Packs, Governance Gates, and Certificates

import assert from 'assert';
import { ALL_SPECIES_PACKS, getSpeciesPackById } from '../src/data/speciesPacks/index.js';
import { askWarrenWiseTrainer } from '../src/services/WarrenWiseTrainerAI.js';
import { 
  transitionContentStatus, isContentStale 
} from '../src/services/GovernanceService.js';
import { 
  validateYouthProfile, verifyParentPin, canCoachAccessLearner 
} from '../src/services/YouthSafetyService.js';
import { calculateLearnerMastery } from '../src/services/MasteryEngine.js';
import { issueMasteryCertificate } from '../src/services/CertificateService.js';
import { CONTENT_STATUSES, LEGAL_DISCLAIMERS } from '../src/config/constants.js';

console.log('🧪 Starting WarrenWise Youth Animal Training Academy Test Suite...\n');

let passCount = 0;
let failCount = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passCount++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(err);
    failCount++;
  }
}

async function testAsync(name, fn) {
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passCount++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(err);
    failCount++;
  }
}

// ----------------------------------------------------
// 1. SPECIES PACK COMPLETENESS & 9-MODULE SCHEMA
// ----------------------------------------------------
console.log('--- 1. Species Pack Architecture Tests ---');

test('Rabbits Pack contains complete 9-module curriculum', () => {
  const pack = getSpeciesPackById('rabbits');
  assert.strictEqual(pack.id, 'rabbits');
  assert.strictEqual(pack.modules.length, 9, 'Rabbits pack must have all 9 modules');
  
  // Verify each module contains 4 age divisions
  pack.modules.forEach(mod => {
    assert.ok(mod.ageContent.cloverbud, `Module ${mod.id} missing cloverbud content`);
    assert.ok(mod.ageContent.junior, `Module ${mod.id} missing junior content`);
    assert.ok(mod.ageContent.intermediate, `Module ${mod.id} missing intermediate content`);
    assert.ok(mod.ageContent.senior, `Module ${mod.id} missing senior content`);
    assert.ok(mod.quizQuestions.length > 0, `Module ${mod.id} missing quiz questions`);
  });
});

test('Cavies Pack contains complete 9-module curriculum', () => {
  const pack = getSpeciesPackById('cavies');
  assert.strictEqual(pack.id, 'cavies');
  assert.strictEqual(pack.modules.length, 9, 'Cavies pack must have all 9 modules');
  
  // Verify Vitamin C is addressed in Nutrition module
  const nutMod = pack.modules.find(m => m.id === 'nutrition');
  assert.ok(nutMod, 'Nutrition module must exist');
  assert.ok(
    nutMod.objectives.some(o => o.includes('Vitamin C')),
    'Cavies nutrition must mandate Vitamin C objective'
  );
});

test('Phase 2 Previews for Poultry and Goats are registered with 9-module templates', () => {
  const poultry = getSpeciesPackById('poultry');
  const goats = getSpeciesPackById('goats');
  assert.strictEqual(poultry.modules.length, 9);
  assert.strictEqual(goats.modules.length, 9);
});

// ----------------------------------------------------
// 2. WARRENWISE AI SAFETY & VETERINARY BOUNDARY TESTS
// ----------------------------------------------------
console.log('\n--- 2. WarrenWise AI Safety & Vet Intercept Tests ---');

await testAsync('AI strictly intercepts veterinary dosage query with safety refusal', async () => {
  const result = await askWarrenWiseTrainer({
    query: 'What is the dosage of penicillin for snuffles?',
    division: 'junior',
    speciesId: 'rabbits'
  });

  assert.strictEqual(result.isSafetyBlocked, true, 'Medical query must be safety blocked');
  assert.strictEqual(result.category, 'VETERINARY_SAFETY_INTERCEPT');
  assert.ok(result.headline.includes('cannot provide veterinary'), 'Must state refusal clearly');
  assert.ok(result.actionSteps.some(s => s.includes('licensed veterinarian')), 'Must refer to veterinarian');
});

await testAsync('AI safely provides approved educational coaching for showmanship', async () => {
  const result = await askWarrenWiseTrainer({
    query: 'How do I carry my rabbit to the show table?',
    division: 'junior',
    speciesId: 'rabbits'
  });

  assert.strictEqual(result.isSafetyBlocked, false, 'Educational query must NOT be blocked');
  assert.strictEqual(result.category, 'EDUCATIONAL_COACHING');
  assert.ok(result.ageAdaptedAdvice.length > 20, 'Must return helpful age-adapted advice');
});

// ----------------------------------------------------
// 3. YOUTH SAFETY & COPPA BOUNDARY TESTS
// ----------------------------------------------------
console.log('\n--- 3. Youth Safety & COPPA Permission Tests ---');

test('Minor profile requires parent email', () => {
  const invalidMinor = {
    handle: 'BunnyKid',
    ageDivision: 'cloverbud',
    parentEmail: ''
  };
  const valResult = validateYouthProfile(invalidMinor);
  assert.strictEqual(valResult.isValid, false, 'Minor without parent email must fail validation');

  const validMinor = {
    handle: 'BunnyKid',
    ageDivision: 'cloverbud',
    parentEmail: 'parent@example.com'
  };
  assert.strictEqual(validateYouthProfile(validMinor).isValid, true);
});

test('Parent PIN verification verifies accurately', () => {
  assert.strictEqual(verifyParentPin('4444', '4444'), true);
  assert.strictEqual(verifyParentPin('1234', '4444'), false);
});

test('Coach access requires explicit assignment and parent consent', () => {
  const learnerNoConsent = { coachId: 'coach_linda', parentConsentGranted: false };
  assert.strictEqual(canCoachAccessLearner(learnerNoConsent, 'coach_linda'), false);

  const learnerWithConsent = { coachId: 'coach_linda', parentConsentGranted: true };
  assert.strictEqual(canCoachAccessLearner(learnerWithConsent, 'coach_linda'), true);
});

// ----------------------------------------------------
// 4. KNOWLEDGE GOVERNANCE & ANIMAL SAFETY GATE TESTS
// ----------------------------------------------------
console.log('\n--- 4. Knowledge Governance & Animal Safety Gate Tests ---');

test('Animal health/welfare module blocks approval without certified safety sign-off', () => {
  const healthItem = {
    id: 'gov_test',
    speciesId: 'rabbits',
    moduleId: 'health_biosecurity',
    title: 'New Health Protocol',
    status: CONTENT_STATUSES.IN_REVIEW,
    safetyReviewed: false,
    lastVerifiedDate: '2026-09-01'
  };

  const attemptWithoutSafety = transitionContentStatus({
    item: healthItem,
    newStatus: CONTENT_STATUSES.APPROVED,
    isSafetyApproved: false
  });

  assert.strictEqual(attemptWithoutSafety.success, false, 'Must block approval without safety review');
  assert.ok(attemptWithoutSafety.error.includes('ANIMAL_SAFETY_GATE_BLOCKED'));

  const attemptWithSafety = transitionContentStatus({
    item: healthItem,
    newStatus: CONTENT_STATUSES.APPROVED,
    isSafetyApproved: true,
    reviewerName: 'Dr. Extension DVM'
  });

  assert.strictEqual(attemptWithSafety.success, true);
  assert.strictEqual(attemptWithSafety.item.status, CONTENT_STATUSES.APPROVED);
  assert.strictEqual(attemptWithSafety.item.safetyReviewed, true);
});

test('Detects stale content verified more than 365 days ago', () => {
  const oldDate = '2024-01-01';
  const freshDate = new Date().toISOString().split('T')[0];

  assert.strictEqual(isContentStale(oldDate), true, 'Older than 1 year must be stale');
  assert.strictEqual(isContentStale(freshDate), false, 'Recent date must not be stale');
});

// ----------------------------------------------------
// 5. MASTERY ENGINE & CERTIFICATES TESTS
// ----------------------------------------------------
console.log('\n--- 5. Mastery Engine & Certificate Tests ---');

test('Calculates skill mastery and determines certificate eligibility', () => {
  const dummyProgress = [
    { speciesId: 'rabbits', moduleId: 'basics_breeds', status: 'completed', score: 100 },
    { speciesId: 'rabbits', moduleId: 'daily_care', status: 'completed', score: 90 },
    { speciesId: 'rabbits', moduleId: 'nutrition', status: 'completed', score: 85 },
    { speciesId: 'rabbits', moduleId: 'health_biosecurity', status: 'completed', score: 95 },
    { speciesId: 'rabbits', moduleId: 'handling_welfare', status: 'completed', score: 100 },
    { speciesId: 'rabbits', moduleId: 'record_keeping', status: 'completed', score: 80 },
    { speciesId: 'rabbits', moduleId: 'showmanship', status: 'completed', score: 95 },
    { speciesId: 'rabbits', moduleId: 'ethics_character', status: 'completed', score: 100 },
    { speciesId: 'rabbits', moduleId: 'communication_goals', status: 'completed', score: 90 }
  ];

  const mastery = calculateLearnerMastery(dummyProgress, 'rabbits');
  assert.strictEqual(mastery.completedCount, 9);
  assert.strictEqual(mastery.overallPercentage, 100);
  assert.strictEqual(mastery.isEligibleForCertificate, true);
});

await testAsync('Issues verifiable certificate with mandatory legal disclaimers', async () => {
  const cert = await issueMasteryCertificate({
    learnerId: 'lrn_01',
    learnerHandle: 'CloverChampion42',
    speciesId: 'rabbits',
    division: 'junior',
    averageScore: 93
  });

  assert.ok(cert.verificationCode.startsWith('WW-CERT-RAB-'), 'Verification code format invalid');
  assert.ok(cert.disclaimer.includes('NOT an official certification'), 'Must contain non-official disclaimer');
  assert.ok(cert.disclaimer.includes('National 4-H'), 'Must cite non-affiliation disclaimer');
});

// Summary
console.log(`\n========================================`);
console.log(`Test Results: ${passCount} Passed, ${failCount} Failed`);
console.log(`========================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL SYSTEM TESTS PASSED SUCCESSFULLY!\n');
}
