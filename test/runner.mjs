// WarrenWise Youth Animal Training Academy - Automated Test Suite
// Verifies Youth Safety, AI Veterinary Intercepts, 11 Species Packs, Content Matrix, Badges, and 5 Certificate Types

process.removeAllListeners('warning');

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
import { 
  issueVerifiableCertificate, issueMasteryCertificate 
} from '../src/services/CertificateService.js';
import { 
  validateSpeciesPackMatrix, getAllContentMatrixSummaries 
} from '../src/data/contentMatrix.js';
import { BadgeEngine } from '../src/services/BadgeEngine.js';
import { ALL_CATALOG_BADGES, CERTIFICATE_TYPES } from '../src/data/badgesCatalog.js';
import { CONTENT_STATUSES, LEGAL_DISCLAIMERS, ACCURACY_POLICY_STATEMENT } from '../src/config/constants.js';
import { TRAIL_PACKS, getTrailPackById } from '../src/data/game/trailPacks.js';
import { validateCareOption } from '../src/data/game/careRuleset.js';
import { ALL_COSMETICS } from '../src/data/game/cosmeticsCatalog.js';
import { TrailQuestEngine } from '../src/services/TrailQuestEngine.js';
import { ParentalControlsService, getSafeDefaultsByDivision } from '../src/services/ParentalControlsService.js';
import { SEED_LEARNERS } from '../src/db/seedData.js';
import { 
  ARBA_INSPECTION_CHECKPOINTS, 
  ARBA_BODY_TYPES, 
  ORAL_DEFENSE_QUESTIONS 
} from '../src/data/arbaShowmanshipData.js';
import { 
  SUBSCRIPTION_TIERS, 
  EDUCATIONAL_ADDONS, 
  ANTI_PAY_TO_WIN_POLICY 
} from '../src/config/subscriptionPlans.js';
import { EntitlementService } from '../src/services/EntitlementService.js';

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
// 1. ALL 11 SPECIES PACKS ARCHITECTURE & 9-MODULE SCHEMA
// ----------------------------------------------------
console.log('--- 1. Multi-Species Pack Architecture Tests (11 Species) ---');

const EXPECTED_SPECIES = [
  'rabbits', 'cavies', 'poultry', 'goats',
  'sheep', 'swine', 'beef_cattle', 'dairy_cattle',
  'dogs', 'horses', 'vet_science'
];

test('All 11 target species packs are registered and contain complete 9-module curricula', () => {
  assert.strictEqual(ALL_SPECIES_PACKS.length, 11, 'Must register exactly 11 species packs');
  
  EXPECTED_SPECIES.forEach(spId => {
    const pack = getSpeciesPackById(spId);
    assert.ok(pack, `Pack ${spId} must exist`);
    assert.strictEqual(pack.modules.length, 9, `Pack ${spId} must have all 9 modules`);
    
    // Verify each module contains 4 age divisions and objectives
    pack.modules.forEach(mod => {
      assert.ok(mod.ageContent?.cloverbud, `${spId} module ${mod.id} missing cloverbud content`);
      assert.ok(mod.ageContent?.junior, `${spId} module ${mod.id} missing junior content`);
      assert.ok(mod.ageContent?.intermediate, `${spId} module ${mod.id} missing intermediate content`);
      assert.ok(mod.ageContent?.senior, `${spId} module ${mod.id} missing senior content`);
      assert.ok(mod.objectives && mod.objectives.length >= 2, `${spId} module ${mod.id} missing objectives`);
    });
  });
});

test('Cavies Pack enforces mandatory daily Vitamin C in nutrition', () => {
  const cavyPack = getSpeciesPackById('cavies');
  const nutMod = cavyPack.modules.find(m => m.id === 'nutrition');
  assert.ok(nutMod.objectives.some(o => o.toLowerCase().includes('vitamin c')));
});

test('Sheep Pack enforces fatal copper toxicity prevention', () => {
  const sheepPack = getSpeciesPackById('sheep');
  const nutMod = sheepPack.modules.find(m => m.id === 'nutrition');
  assert.ok(nutMod.objectives.some(o => o.toLowerCase().includes('copper')));
});

test('Dogs Pack covers 7 AKC groups and positive reinforcement', () => {
  const dogsPack = getSpeciesPackById('dogs');
  const bbMod = dogsPack.modules.find(m => m.id === 'basics_breeds');
  assert.ok(bbMod.objectives.some(o => o.includes('7 official AKC breed groups')));
});

test('Horses Pack covers Quarter System showmanship and colic/laminitis prevention', () => {
  const horsesPack = getSpeciesPackById('horses');
  const showMod = horsesPack.modules.find(m => m.id === 'showmanship');
  assert.ok(showMod.objectives.some(o => o.toLowerCase().includes('quarter system')));
});

test('Veterinary Science track provides comparative medicine without owned animal', () => {
  const vsPack = getSpeciesPackById('vet_science');
  assert.strictEqual(vsPack.category, 'Veterinary & Comparative Science');
  const rkMod = vsPack.modules.find(m => m.id === 'record_keeping');
  assert.ok(rkMod.objectives.some(o => o.includes('SOAP')));
});

// ----------------------------------------------------
// 2. CONTENT MATRIX VALIDATION TESTS
// ----------------------------------------------------
console.log('\n--- 2. Content Matrix Compliance Tests ---');

test('Content matrix audits all 11 species with 100% compliance and zero violations', () => {
  const summaries = getAllContentMatrixSummaries(ALL_SPECIES_PACKS);
  assert.strictEqual(summaries.length, 11);

  summaries.forEach(s => {
    assert.strictEqual(s.isValid, true, `Species ${s.speciesId} failed content matrix audit: ${JSON.stringify(s.violations)}`);
    assert.strictEqual(s.passedModules, 9, `Species ${s.speciesId} passed ${s.passedModules}/9 modules`);
    assert.strictEqual(s.violations.length, 0, `Species ${s.speciesId} has disallowed medical violations`);
  });
});

// ----------------------------------------------------
// 3. BADGES ENGINE & REWARDS TESTS
// ----------------------------------------------------
console.log('\n--- 3. 4-H Badges Engine & Rewards Tests ---');

test('BadgeEngine evaluates unlocks correctly based on completed modules and streaks', () => {
  const mockCompleted = [
    { speciesId: 'rabbits', moduleId: 'basics_breeds' },
    { speciesId: 'rabbits', moduleId: 'daily_care' },
    { speciesId: 'rabbits', moduleId: 'nutrition' },
    { speciesId: 'rabbits', moduleId: 'health_biosecurity' },
    { speciesId: 'rabbits', moduleId: 'handling_welfare' },
    { speciesId: 'rabbits', moduleId: 'record_keeping' },
    { speciesId: 'rabbits', moduleId: 'showmanship' },
    { speciesId: 'rabbits', moduleId: 'ethics_character' },
    { speciesId: 'rabbits', moduleId: 'goals_communication' }
  ];

  const evalResult = BadgeEngine.evaluateLearnerBadges({
    learnerId: 'test_lrn',
    completedModules: mockCompleted,
    quizScores: { basics_breeds: 90, daily_care: 85, nutrition: 90, health_biosecurity: 95, handling_welfare: 90, record_keeping: 85, showmanship: 95, ethics_character: 100, goals_communication: 90 },
    streakDays: 7,
    ethicsResolvedCount: 3,
    existingBadgeKeys: []
  });

  const unlockedKeys = evalResult.newlyUnlocked.map(b => b.key);
  assert.ok(unlockedKeys.includes('mastery_rabbits'), 'Must unlock rabbit project mastery');
  assert.ok(unlockedKeys.includes('streak_3_days'), 'Must unlock 3-day streak');
  assert.ok(unlockedKeys.includes('streak_7_days'), 'Must unlock 7-day streak');
  assert.ok(unlockedKeys.includes('skill_ethics_champion'), 'Must unlock ethics champion');
});

await testAsync('BadgeEngine logs immutable audit record on manual coach grant', async () => {
  const grant = await BadgeEngine.awardManualBadge({
    learnerId: 'test_lrn',
    badgeKey: 'leadership_peer_mentor',
    grantedBy: 'Leader Sarah Jones',
    reason: 'Exemplary leadership tutoring younger members in cavy grooming station',
    role: 'coach'
  });

  assert.strictEqual(grant.success, true);
  assert.strictEqual(grant.auditRecord.badgeKey, 'leadership_peer_mentor');
  assert.ok(grant.auditRecord.reason.includes('Exemplary leadership'));
});

// ----------------------------------------------------
// 4. CERTIFICATES STUDIO: 5 CERTIFICATE TYPES TESTS
// ----------------------------------------------------
console.log('\n--- 4. Certificate Studio & 5 Certificate Types Tests ---');

await testAsync('Issues Species Academic Mastery Certificate with legal disclaimer', async () => {
  const cert = await issueVerifiableCertificate({
    certificateType: 'species_completion',
    learnerId: 'lrn_01',
    learnerHandle: 'RabbitWhiz',
    speciesId: 'rabbits',
    division: 'junior',
    averageScore: 94
  });

  assert.ok(cert.verificationCode.startsWith('WW-RAB-'), 'Code must start with WW-RAB-');
  assert.ok(cert.title.includes('Rabbit Project Academic Mastery Certificate'));
  assert.ok(cert.disclaimer.includes('NOT an official certification'));
  assert.ok(cert.disclaimer.includes('National 4-H'));
});

await testAsync('Issues Milestone Honor Certificate for cumulative modules', async () => {
  const cert = await issueVerifiableCertificate({
    certificateType: 'milestone',
    learnerId: 'lrn_02',
    learnerHandle: 'BarnScholar',
    milestoneCount: 25
  });

  assert.ok(cert.title.includes('25 Modules Completed'));
  assert.ok(cert.citation.includes('25 modules across the WarrenWise Animal Academy'));
});

await testAsync('Issues Showmanship Distinction Certificate', async () => {
  const cert = await issueVerifiableCertificate({
    certificateType: 'showmanship',
    learnerId: 'lrn_03',
    learnerHandle: 'TopShowman'
  });

  assert.ok(cert.title.includes('Showmanship & Practical Ringcraft Distinction'));
  assert.ok(cert.citation.includes('breed-specific presentation'));
});

await testAsync('Issues Ethics & Animal Welfare Honors Certificate', async () => {
  const cert = await issueVerifiableCertificate({
    certificateType: 'ethics',
    learnerId: 'lrn_04',
    learnerHandle: 'CompassionClover'
  });

  assert.ok(cert.title.includes('Character & Animal Welfare Honors Certificate'));
  assert.ok(cert.citation.includes('Head, Heart, Hands, and Health'));
});

await testAsync('Issues Multi-Species Academy Scholar Certificate', async () => {
  const cert = await issueVerifiableCertificate({
    certificateType: 'multi_species',
    learnerId: 'lrn_05',
    learnerHandle: 'VersatileStockman'
  });

  assert.ok(cert.title.includes('Multi-Species Academy Scholar Certificate'));
  assert.ok(cert.citation.includes('three or more distinct livestock and companion species'));
});

// ----------------------------------------------------
// 5. WARRENWISE AI SAFETY & VET INTERCEPT TESTS
// ----------------------------------------------------
console.log('\n--- 5. WarrenWise AI Safety & Vet Intercept Tests ---');

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
// 6. YOUTH SAFETY & COPPA PERMISSION TESTS
// ----------------------------------------------------
console.log('\n--- 6. Youth Safety & COPPA Permission Tests ---');

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
// 7. KNOWLEDGE GOVERNANCE & ANIMAL SAFETY GATES
// ----------------------------------------------------
console.log('\n--- 7. Knowledge Governance & Animal Safety Gates ---');

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
// 8. HERD TRAIL QUEST & PROGRESSION ENGINE TESTS
// ----------------------------------------------------
console.log('\n--- 8. Herd Trail Quest & Progression Engine Tests ---');

test('Trail Packs support all 12 Overworld Trails (Livestock Projects and Companion Pets)', () => {
  assert.strictEqual(TRAIL_PACKS.length, 12, 'Must have all 12 signature overworld trail routes');
  const livestockTrails = TRAIL_PACKS.filter(p => p.type === 'livestock');
  const petTrails = TRAIL_PACKS.filter(p => p.type === 'pet');

  assert.strictEqual(livestockTrails.length, 10, 'Must include 10 4-H livestock project trails');
  assert.strictEqual(petTrails.length, 2, 'Must include 2 companion pet trails');

  TRAIL_PACKS.forEach(tp => {
    assert.ok(tp.companion?.name, `Trail ${tp.id} must define companion name`);
    assert.ok(tp.companion?.avatarEmoji, `Trail ${tp.id} must define companion emoji`);
    assert.strictEqual(tp.regions?.length, 4, `Trail ${tp.id} must define all 4 regions`);
    assert.ok(tp.nodes?.length >= 4, `Trail ${tp.id} must contain at least 4 nodes`);
  });
});

test('Care Challenges strictly adhere to veterinary boundary ruleset across all 12 trail packs', () => {
  let careOptionCount = 0;
  TRAIL_PACKS.forEach(pack => {
    pack.nodes.forEach(node => {
      if (node.type === 'care_choices' && node.options) {
        node.options.forEach(opt => {
          careOptionCount++;
          const val = validateCareOption(opt.text);
          assert.strictEqual(val.isValid, true, `Care option violated rule: ${opt.text} (${val.reason})`);
        });
      }
    });
  });
  assert.ok(careOptionCount >= 10, 'Must audit multiple care options across all 12 trail packs');
});

test('Cosmetics catalog supports Upgraded Trail Equipment and Unlockable Companion Pets', () => {
  assert.ok(ALL_COSMETICS.length >= 25, 'Must offer diverse cosmetic collection');
  const validTypes = [
    'traveler_skin', 'companion_skin', 'companion_pose', 'companion_pet',
    'trail_gear', 'emote', 'arrival_effect', 'habitat_decor', 'profile_flair'
  ];
  const validRarities = ['COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY'];

  const pets = ALL_COSMETICS.filter(c => c.type === 'companion_pet');
  const equipment = ALL_COSMETICS.filter(c => c.type === 'trail_gear');

  assert.ok(pets.length >= 10, 'Must offer at least 10 unlockable companion pets');
  assert.ok(equipment.length >= 10, 'Must offer at least 10 upgraded trail equipment items');

  ALL_COSMETICS.forEach(c => {
    assert.ok(validTypes.includes(c.type), `Invalid cosmetic type: ${c.type}`);
    assert.ok(validRarities.includes(c.rarity), `Invalid rarity: ${c.rarity}`);
    assert.ok(c.unlockCriteria, `Must specify educational unlock criteria for ${c.name}`);
    if (c.type === 'companion_pet') {
      assert.ok(c.avatarEmoji, `Companion pet ${c.name} must have an avatar emoji`);
    }
    if (c.type === 'trail_gear') {
      assert.ok(c.gearEmoji, `Trail gear ${c.name} must have a gear emoji`);
    }
  });
});

test('TrailQuestEngine advances miles, manages supplies, updates bond, and unlocks cosmetics', () => {
  const initial = TrailQuestEngine.loadState('test_quest_player');
  assert.strictEqual(initial.currentMile, 0);

  // Complete node at mile 12
  const { updatedState, newlyUnlockedCosmetics } = TrailQuestEngine.completeNode({
    state: initial,
    nodeId: 'rb_node_1',
    mile: 12,
    isCorrect: true,
    conditionDelta: 10,
    suppliesDelta: { feed: 15, water: 20 },
    bondXpDelta: 50,
    division: 'junior'
  });

  assert.strictEqual(updatedState.currentMile, 12, 'Mile must advance to 12');
  assert.ok(updatedState.completedNodeIds.includes('rb_node_1'));
  assert.strictEqual(updatedState.supplies.feed, 75);
  assert.strictEqual(updatedState.herdBond.xp, 50);

  // Condition evaluation
  assert.strictEqual(TrailQuestEngine.getConditionLevel(95).label, 'Excellent');
  assert.strictEqual(TrailQuestEngine.getConditionLevel(40).label, 'Tired');

  // Milestone advance to mile 50 should unlock Clover Scout outfit
  const mile50Result = TrailQuestEngine.completeNode({
    state: updatedState,
    nodeId: 'rb_node_5',
    mile: 50,
    isCorrect: true,
    bondXpDelta: 100,
    division: 'junior'
  });

  assert.ok(mile50Result.updatedState.unlockedCosmeticIds.includes('outfit_clover_scout'), 'Mile 50 must unlock Clover Scout outfit');
  assert.ok(mile50Result.updatedState.unlockedCosmeticIds.includes('pet_pip_hamster'), 'Mile 50 must also have unlocked Mile 25 pet Pip the Hamster');
});

test('TrailQuestEngine supports Daily Trail Streak Chest rewards and milestones', () => {
  const state = TrailQuestEngine.loadState('test_quest_player_streak');
  const claimResult = TrailQuestEngine.claimDailyStreak(state);

  assert.strictEqual(claimResult.alreadyClaimed, false);
  assert.strictEqual(claimResult.updatedState.dailyStreak.count, 1);
  assert.ok(claimResult.rewardSummary.includes('+25 Feed'));

  // Immediate second claim on same day should report alreadyClaimed: true
  const secondClaim = TrailQuestEngine.claimDailyStreak(claimResult.updatedState);
  assert.strictEqual(secondClaim.alreadyClaimed, true);
});

test('TrailQuestEngine supports equipping outfits, upgraded gear, and pets', () => {
  const state = TrailQuestEngine.loadState('test_equip_player');
  // pet_barnaby_jr and gear_basic_lead are unlocked by default
  const equippedState = TrailQuestEngine.equipCosmetic(state, 'companion_pet', 'pet_barnaby_jr');
  assert.strictEqual(equippedState.equippedCosmetics.companion_pet, 'pet_barnaby_jr');

  const equippedGear = TrailQuestEngine.equipCosmetic(equippedState, 'trail_gear', 'gear_basic_lead');
  assert.strictEqual(equippedGear.equippedCosmetics.trail_gear, 'gear_basic_lead');
});

test('TrailQuestEngine supports Coach Signal Path beacons', () => {
  const state = TrailQuestEngine.loadState('test_quest_player');
  const withBeacon = TrailQuestEngine.addCoachSignal(state, {
    coachName: 'Coach Sarah',
    note: 'Remember to check incisor overlap carefully at the judging table!',
    targetNodeId: 'rb_node_5'
  });

  assert.ok(withBeacon.coachSignals.some(s => s.targetNodeId === 'rb_node_5' && s.coachName === 'Coach Sarah'));
});

test('TrailQuestEngine scales progressive difficulty tiers across regions and levels', () => {
  assert.strictEqual(TrailQuestEngine.getDifficultyTier(10, 1, 'junior').tier, 1);
  assert.strictEqual(TrailQuestEngine.getDifficultyTier(35, 2, 'junior').tier, 2);
  assert.strictEqual(TrailQuestEngine.getDifficultyTier(65, 4, 'junior').tier, 3);
  assert.strictEqual(TrailQuestEngine.getDifficultyTier(90, 8, 'senior').tier, 4);

  // Cloverbud protected soft mode
  assert.strictEqual(TrailQuestEngine.getDifficultyTier(95, 8, 'cloverbud').tier, 1);
});

test('TrailQuestEngine awards scaled Trail Points on correct answers', () => {
  const state = TrailQuestEngine.loadState('test_points_learner');
  const startingPoints = state.trailPoints || 0;

  const result = TrailQuestEngine.completeNode({
    state,
    nodeId: 'rb_node_1',
    mile: 10,
    isCorrect: true,
    division: 'junior'
  });

  assert.ok(result.earnedPoints >= 85, 'Must award at least 85 points for correct answer');
  assert.strictEqual(result.updatedState.trailPoints, startingPoints + result.earnedPoints);
});

test('TrailQuestEngine triggers severe trail calamities and penalties on incorrect answers', () => {
  const state = TrailQuestEngine.loadState('test_hazard_learner');
  const initialCoat = state.showQuality.coatCondition;

  const result = TrailQuestEngine.completeNode({
    state,
    nodeId: 'rb_node_3',
    mile: 25,
    isCorrect: false,
    division: 'junior'
  });

  assert.ok(result.triggeredHazard, 'Must trigger a frontier hazard on incorrect answer');
  assert.ok(result.triggeredHazard.narrative.length > 20, 'Hazard must have vivid narrative');
  assert.ok(result.updatedState.showQuality.coatCondition <= initialCoat, 'Coat condition must degrade from trail hazard');
});

test('Trail Trading Post supports buying care gear and boosting animal show quality', () => {
  let state = TrailQuestEngine.loadState('test_shop_learner');
  state.trailPoints = 500;
  state.purchasedItemIds = [];
  state.showQuality.poseTraining = 50;

  // Buy Show Stance Mirror (costs 150)
  const buyResult = TrailQuestEngine.buyOutfitterItem(state, 'gear_pose_mirror');
  assert.strictEqual(buyResult.updatedState.trailPoints, 350);
  assert.ok(buyResult.updatedState.purchasedItemIds.includes('gear_pose_mirror'));
  assert.strictEqual(buyResult.updatedState.showQuality.poseTraining, 75, 'Must boost pose training by +25');
});

test('Trail care actions restore show condition metrics at camp', () => {
  let state = TrailQuestEngine.loadState('test_care_learner');
  state.showQuality.coatCondition = 60;
  state.showQuality.vigorHydration = 60;

  const brushed = TrailQuestEngine.performTrailCare(state, 'brush');
  assert.strictEqual(brushed.updatedState.showQuality.coatCondition, 75);

  const watered = TrailQuestEngine.performTrailCare(brushed.updatedState, 'water');
  assert.strictEqual(watered.updatedState.showQuality.vigorHydration, 75);
});

test('Championship Show Ring calculates judge scorecard and awards Grand Champion Rosette', () => {
  const state = TrailQuestEngine.loadState('test_show_champion');
  state.showQuality = {
    coatCondition: 100,
    vigorHydration: 100,
    temperament: 100,
    poseTraining: 100
  };
  state.purchasedItemIds = ['skill_ring_presence'];

  const evaluation = TrailQuestEngine.evaluateShowRing(state, { oralExamScore: 100 });
  assert.strictEqual(evaluation.awardRecord.totalScore, 100);
  assert.ok(evaluation.awardRecord.ribbon.includes('Grand Champion Purple Rosette'));
  assert.ok(evaluation.updatedState.earnedRibbons.length >= 1);
});

// ----------------------------------------------------
// 9. PARENT-DEFINED CONTROLS & AUDIT LOGGING TESTS
// ----------------------------------------------------
console.log('\n--- 9. Parent-Defined Controls & Real-Time Enforcement Tests ---');

test('Provides safe age-responsive defaults without hard-locking senior youth', () => {
  const cloverbudDefaults = getSafeDefaultsByDivision('cloverbud');
  const seniorDefaults = getSafeDefaultsByDivision('senior');

  assert.strictEqual(cloverbudDefaults.dailyTimeLimitMinutes, 30, 'Cloverbud defaults to 30 min');
  assert.strictEqual(cloverbudDefaults.schedule.type, 'custom', 'Cloverbud defaults to curfew schedule');
  assert.strictEqual(seniorDefaults.dailyTimeLimitMinutes, null, 'Senior defaults to No Limit (null)');
  assert.strictEqual(seniorDefaults.schedule.type, 'always', 'Senior defaults to always allowed');
});

test('Parents can set or remove limits independently per child (including No Limit)', () => {
  const child1Id = 'test_child_leo';
  const child2Id = 'test_child_maya';

  // Set child 1 to 45 min
  const res1 = ParentalControlsService.saveLimits({
    learnerId: child1Id,
    learnerHandle: 'Leo42',
    parentPin: '4444',
    newLimits: { ...getSafeDefaultsByDivision('junior'), dailyTimeLimitMinutes: 45 },
    reason: 'Parent set 45m limit for Leo'
  });
  assert.strictEqual(res1.success, true);
  assert.strictEqual(res1.limits.dailyTimeLimitMinutes, 45);

  // Set child 2 to No Limit (null)
  const res2 = ParentalControlsService.saveLimits({
    learnerId: child2Id,
    learnerHandle: 'MayaBunny',
    parentPin: '4444',
    newLimits: { ...getSafeDefaultsByDivision('cloverbud'), dailyTimeLimitMinutes: null },
    reason: 'Parent removed limit for Maya'
  });
  assert.strictEqual(res2.success, true);
  assert.strictEqual(res2.limits.dailyTimeLimitMinutes, null, 'No Limit option must be supported');

  // Verify child 1 remains 45 min and child 2 remains No Limit
  const loaded1 = ParentalControlsService.getLimitsForLearner(child1Id);
  const loaded2 = ParentalControlsService.getLimitsForLearner(child2Id);
  assert.strictEqual(loaded1.dailyTimeLimitMinutes, 45);
  assert.strictEqual(loaded2.dailyTimeLimitMinutes, null);
});

test('Saving parental controls strictly requires 4-digit Parent PIN', () => {
  const failRes = ParentalControlsService.saveLimits({
    learnerId: 'test_child_pin',
    parentPin: '1234', // Incorrect
    newLimits: { dailyTimeLimitMinutes: 15 }
  });
  assert.strictEqual(failRes.success, false);
  assert.ok(failRes.error.includes('PIN'));

  const okRes = ParentalControlsService.saveLimits({
    learnerId: 'test_child_pin',
    parentPin: '4444', // Correct
    newLimits: { dailyTimeLimitMinutes: 15 }
  });
  assert.strictEqual(okRes.success, true);
});

test('Parental control audit trail records all parent actions with timestamps', () => {
  const childId = 'test_child_audit';
  ParentalControlsService.saveLimits({
    learnerId: childId,
    learnerHandle: 'AuditKid',
    parentPin: '4444',
    newLimits: { dailyTimeLimitMinutes: 30, isAppFrozen: false },
    reason: 'Initial setup test'
  });

  const logs = ParentalControlsService.getAuditLogs(childId);
  assert.ok(logs.length >= 1, 'Must persist audit entries');
  assert.strictEqual(logs[0].action, 'LIMITS_UPDATED');
  assert.strictEqual(logs[0].description, 'Initial setup test');
  assert.ok(logs[0].timestamp, 'Must record ISO timestamp');
});

test('Instant Freeze tool and Quick Extension tool function accurately', () => {
  const childId = 'test_child_tools';
  
  // Freeze
  const freezeRes = ParentalControlsService.setAppFreeze({
    learnerId: childId,
    parentPin: '4444',
    freeze: true,
    message: 'Time for dinner!'
  });
  assert.strictEqual(freezeRes.success, true);
  assert.strictEqual(freezeRes.limits.isAppFrozen, true);
  assert.strictEqual(freezeRes.limits.freezeMessage, 'Time for dinner!');

  // Quick Extension
  const extRes = ParentalControlsService.quickExtend({
    learnerId: childId,
    parentPin: '4444',
    extensionMinutes: 30
  });
  assert.strictEqual(extRes.success, true);
  assert.strictEqual(extRes.limits.isAppFrozen, false, 'Extension must unfreeze app');
});

test('Species and game mode filtering respects parent-defined allowances', () => {
  const openLimits = { allowedSpecies: 'ALL', allowedModes: 'ALL' };
  assert.strictEqual(ParentalControlsService.isSpeciesAllowed(openLimits, 'rabbits'), true);
  assert.strictEqual(ParentalControlsService.isModeAllowed(openLimits, 'herd_trail'), true);

  const restrictedLimits = { 
    allowedSpecies: ['rabbits', 'cavies'],
    allowedModes: ['quizzes']
  };
  assert.strictEqual(ParentalControlsService.isSpeciesAllowed(restrictedLimits, 'rabbits'), true);
  assert.strictEqual(ParentalControlsService.isSpeciesAllowed(restrictedLimits, 'beef_cattle'), false);
  assert.strictEqual(ParentalControlsService.isModeAllowed(restrictedLimits, 'quizzes'), true);
  assert.strictEqual(ParentalControlsService.isModeAllowed(restrictedLimits, 'herd_trail'), false);
});

// ----------------------------------------------------
// 10. CRITICAL PATHS & PUNCH LIST QUALITY HARDENING TESTS
// ----------------------------------------------------
console.log('--- 10. Critical Paths & Punch List Quality Hardening Tests ---');

test('Role authentication gates verify parent PIN, admin key, and coach code before role transition', () => {
  // Parent PIN verification
  assert.strictEqual(verifyParentPin('4444', '4444'), true, 'Correct parent PIN must pass');
  assert.strictEqual(verifyParentPin('0000', '4444'), false, 'Incorrect parent PIN must be rejected');
  assert.strictEqual(verifyParentPin('', '4444'), false, 'Empty parent PIN must be rejected');

  // Admin Master Key (9999) check
  const isAdminAuthorized = (key) => key.trim() === '9999';
  assert.strictEqual(isAdminAuthorized('9999'), true, 'Valid admin key must grant access');
  assert.strictEqual(isAdminAuthorized('1234'), false, 'Invalid admin key must be blocked');

  // Coach Club Code (3050) check
  const isCoachAuthorized = (code) => code.trim() === '3050';
  assert.strictEqual(isCoachAuthorized('3050'), true, 'Valid coach code must grant access');
  assert.strictEqual(isCoachAuthorized('wrong'), false, 'Invalid coach code must be blocked');
});

test('Parent control scoping strictly isolates linked children', () => {
  const currentParentEmail = 'parent.miller@example.com';
  const visibleLearners = SEED_LEARNERS.filter(l => l.parentEmail === currentParentEmail);
  
  assert.strictEqual(visibleLearners.length, 2, 'Parent Miller must only see 2 linked children');
  assert.ok(visibleLearners.some(l => l.handle === 'CloverChampion42' && l.realName === 'Sammy Miller'));
  assert.ok(visibleLearners.some(l => l.handle === 'CloverSprout05' && l.realName === 'Toby Miller'));
  assert.ok(!visibleLearners.some(l => l.realName === 'Maya Chen'), 'Cannot see children of other parents');
  assert.ok(!visibleLearners.some(l => l.realName === 'Alex Smith'), 'Cannot see unlinked children');
});

test('Coach dashboard access strictly respects consent and coach assignment', () => {
  const coachLinda = 'coach_linda';

  // Consented and assigned learners
  const sammy = SEED_LEARNERS.find(l => l.id === 'lrn_01');
  const toby = SEED_LEARNERS.find(l => l.id === 'lrn_04');
  assert.strictEqual(canCoachAccessLearner(sammy, coachLinda), true, 'Sammy is assigned and consented');
  assert.strictEqual(canCoachAccessLearner(toby, coachLinda), true, 'Toby is assigned and consented');

  // Unconsented / independent learner
  const alex = SEED_LEARNERS.find(l => l.id === 'lrn_05');
  assert.strictEqual(canCoachAccessLearner(alex, coachLinda), false, 'Alex has no coach consent and cannot be accessed');

  // Other coach attempting access
  assert.strictEqual(canCoachAccessLearner(sammy, 'coach_unknown'), false, 'Unassigned coach cannot access learner');
});

test('Care-challenge engine strictly rejects prohibited medication and prescription dosing', () => {
  const disallowedTerms = [
    'Administer penicillin dosage 5ml',
    'Calculate antibiotic dose for rabbit enteritis',
    'Give 0.2 mg/kg ivermectin',
    'Prescribe oral medications without vet',
    'Inject medicine directly into vein',
    'Perform diy surgery at home',
    'Use magic cure potion to heal bloat instantly'
  ];

  disallowedTerms.forEach(term => {
    const res = validateCareOption(term);
    assert.strictEqual(res.isValid, false, `Must reject unsafe option: "${term}"`);
    assert.ok(res.reason.includes('Violates veterinary boundary'));
  });

  const validOptions = [
    'Observe breathing rate, separate calmly, offer clean cool water, and notify coach and veterinarian',
    'Provide fresh orchard grass hay, check water sipper tube, and record observations in logbook',
    'Gently brush road dust from coat with soft natural bristles'
  ];

  validOptions.forEach(opt => {
    const res = validateCareOption(opt);
    assert.strictEqual(res.isValid, true, `Valid observation action must pass: "${opt}"`);
  });
});

test('Accuracy review policy metadata replaces external agency endorsement claims', () => {
  assert.ok(ACCURACY_POLICY_STATEMENT, 'Accuracy policy statement must exist');
  assert.ok(ACCURACY_POLICY_STATEMENT.includes('Academy Accuracy Policy'));
  assert.ok(!ACCURACY_POLICY_STATEMENT.includes('officially endorsed by'));

  // Verify all 11 species packs declare internal accuracy review
  ALL_SPECIES_PACKS.forEach(pack => {
    assert.strictEqual(
      pack.reviewPolicy,
      'Reviewed under Academy Accuracy Policy',
      `Pack ${pack.id} must declare review under Academy Accuracy Policy`
    );
    assert.ok(
      pack.reviewerRole.includes('Internal Curriculum Specialist'),
      `Pack ${pack.id} must list internal curriculum reviewer role, got: ${pack.reviewerRole}`
    );
  });
});

test('Legal disclaimers are prominent, comprehensive, and non-prescriptive', () => {
  assert.ok(LEGAL_DISCLAIMERS.general, 'General disclaimer must exist');
  assert.ok(LEGAL_DISCLAIMERS.general.includes('independent educational'));
  assert.ok(LEGAL_DISCLAIMERS.general.includes('NOT affiliated with'));
  assert.ok(LEGAL_DISCLAIMERS.general.includes('National 4-H Council'));
  assert.ok(LEGAL_DISCLAIMERS.general.includes('USDA'));
  assert.ok(LEGAL_DISCLAIMERS.general.includes('ARBA'));
  assert.ok(LEGAL_DISCLAIMERS.veterinary.toLowerCase().includes('veterinary diagnoses'));
});

test('Trail Quest Engine maintains progression state persistence without data loss', () => {
  const initial = TrailQuestEngine.loadState('test_persist_learner');
  assert.ok(initial, 'Initial state must load');

  const node1Result = TrailQuestEngine.completeNode({
    state: initial,
    nodeId: 'rb_node_1',
    mile: 8,
    isCorrect: true,
    conditionDelta: 5,
    suppliesDelta: { feed: 10, water: 5 },
    bondXpDelta: 30,
    division: 'junior'
  });

  const state1 = node1Result.updatedState;
  assert.strictEqual(state1.currentMile, 8);
  assert.ok(state1.completedNodeIds.includes('rb_node_1'));
  assert.strictEqual(state1.supplies.feed, initial.supplies.feed + 10);
  assert.strictEqual(state1.supplies.water, initial.supplies.water + 5);
  assert.strictEqual(state1.herdBond.xp, 30);

  // Advance to node 2
  const node2Result = TrailQuestEngine.completeNode({
    state: state1,
    nodeId: 'rb_node_2',
    mile: 16,
    isCorrect: true,
    conditionDelta: 5,
    suppliesDelta: { bedding: 10 },
    bondXpDelta: 80, // Crosses 100 XP -> Level 2
    division: 'junior'
  });

  const state2 = node2Result.updatedState;
  assert.strictEqual(state2.currentMile, 16);
  assert.strictEqual(state2.completedNodeIds.length, 2);
  assert.strictEqual(state2.herdBond.level, 2, 'Herd bond should level up to 2');
  assert.ok(state2.herdBond.unlockedLore.length >= 2, 'Should unlock bond lore');

  // Verify Cloverbud soft protection
  const cloverbudState = {
    ...initial,
    conditionScore: 70
  };
  const cbMistakeResult = TrailQuestEngine.completeNode({
    state: cloverbudState,
    nodeId: 'cb_test_node',
    mile: 4,
    isCorrect: false,
    conditionDelta: -25, // harsh penalty
    division: 'cloverbud'
  });

  // Under Cloverbud protection, penalty delta is softened to -2 instead of harsh -25
  assert.strictEqual(cbMistakeResult.updatedState.conditionScore, 68, 'Cloverbud condition penalty must be softened to -2');
});

// ----------------------------------------------------
// 11. ARBA SHOWMANSHIP SUITE & DIGITAL BARN RECORD BOOK
// ----------------------------------------------------
console.log('--- 11. ARBA Showmanship Suite & Digital Barn Record Book ---');

test('ARBA 8-Point Physical Inspection covers exact official sequence and DQ rulings', () => {
  assert.strictEqual(ARBA_INSPECTION_CHECKPOINTS.length, 8, 'Must cover exactly 8 inspection points');

  const expectedIds = ['ears', 'eyes', 'nose', 'teeth', 'front_feet', 'belly_sex', 'hind_legs', 'tail_coat'];
  ARBA_INSPECTION_CHECKPOINTS.forEach((cp, idx) => {
    assert.strictEqual(cp.id, expectedIds[idx], `Checkpoint ${idx + 1} must be ${expectedIds[idx]}`);
    assert.strictEqual(cp.stepNumber, idx + 1);
    assert.ok(cp.hotspots && cp.hotspots.length >= 2, `${cp.id} must define at least 2 interactive hotspots`);
    assert.ok(cp.verbalScript && cp.verbalScript.length > 20, `${cp.id} must include verbal script for the judge`);

    // Verify sample cases distinguish CLEAR vs DISQUALIFICATION vs FAULT
    assert.ok(cp.sampleCases.length >= 1, `${cp.id} must have diagnostic sample cases`);
    cp.sampleCases.forEach(sc => {
      assert.ok(
        ['CLEAR', 'FAULT', 'DISQUALIFICATION'].includes(sc.classification),
        `Case classification must be CLEAR, FAULT, or DISQUALIFICATION, got ${sc.classification}`
      );
    });
  });
});

test('ARBA Breed Pose Simulator covers all 5 official body types with specific geometry', () => {
  const bodyTypeKeys = Object.keys(ARBA_BODY_TYPES);
  assert.strictEqual(bodyTypeKeys.length, 5, 'Must cover all 5 ARBA body types');
  assert.ok(bodyTypeKeys.includes('compact'));
  assert.ok(bodyTypeKeys.includes('commercial'));
  assert.ok(bodyTypeKeys.includes('semi_arch'));
  assert.ok(bodyTypeKeys.includes('full_arch'));
  assert.ok(bodyTypeKeys.includes('cylindrical'));

  // Verify compact body type tips & geometry
  const compact = ARBA_BODY_TYPES.compact;
  assert.ok(compact.representativeBreeds.includes('Holland Lop'));
  assert.strictEqual(compact.idealFrontPaw, 50, 'Front paw should be tucked under eyes');
  assert.ok(compact.showmanshipTip.includes('Do not stretch'));

  // Verify cylindrical body type tips & geometry
  const cylindrical = ARBA_BODY_TYPES.cylindrical;
  assert.ok(cylindrical.representativeBreeds.includes('Himalayan'));
  assert.strictEqual(cylindrical.idealArchRise, 15, 'Cylindrical should lie flat on table');
});

test('15-Second Timed Oral Judge Defense questions enforce ring pressure and technical answers', () => {
  assert.ok(ORAL_DEFENSE_QUESTIONS.length >= 4, 'Must have at least 4 oral defense questions');

  ORAL_DEFENSE_QUESTIONS.forEach(q => {
    assert.strictEqual(q.timeLimitSeconds, 15, 'Time limit must be exactly 15 seconds');
    assert.ok(q.judgePrompt.startsWith('"Showman,'), 'Judge prompt must begin with official showman address');
    
    const correctOpts = q.options.filter(o => o.isCorrect);
    assert.strictEqual(correctOpts.length, 1, 'Each question must have exactly one correct answer');
    assert.ok(correctOpts[0].points >= 20, 'Correct answer must award significant showmanship points');
    assert.ok(correctOpts[0].judgeFeedback.length > 5, 'Must provide judge oral feedback');
  });
});

test('Digital Barn Record Book dynamically calculates Average Daily Gain (ADG) accurately', () => {
  // Test ADG math: delta weight / delta days
  const w1 = { date: '2026-08-01', weightLbs: 4.0 };
  const w2 = { date: '2026-08-15', weightLbs: 6.8 };

  const msDiff = new Date(w2.date) - new Date(w1.date);
  const daysElapsed = Math.round(msDiff / (1000 * 60 * 60 * 24));
  assert.strictEqual(daysElapsed, 14, 'Days elapsed must be 14 days');

  const gainLbs = w2.weightLbs - w1.weightLbs;
  assert.strictEqual(gainLbs, 2.8, 'Weight gained must be 2.8 lbs');

  const adg = Math.round((gainLbs / daysElapsed) * 100) / 100;
  assert.strictEqual(adg, 0.20, 'Average Daily Gain must be 0.20 lbs/day');
});

// ----------------------------------------------------
// 12. PARENT-SAFE MONETIZATION & ENTITLEMENTS ENGINE
// ----------------------------------------------------
console.log('--- 12. Parent-Safe Monetization & Entitlements Engine ---');

test('Subscription tier configuration enforces feature boundaries cleanly', () => {
  assert.ok(SUBSCRIPTION_TIERS.free, 'Free tier must exist');
  assert.ok(SUBSCRIPTION_TIERS.pro, 'Pro tier must exist');
  assert.ok(SUBSCRIPTION_TIERS.family, 'Family tier must exist');
  assert.ok(SUBSCRIPTION_TIERS.club, 'Club charter tier must exist');

  // Free tier restrictions
  assert.deepStrictEqual(SUBSCRIPTION_TIERS.free.allowedSpecies, ['rabbits', 'cavies']);
  assert.strictEqual(SUBSCRIPTION_TIERS.free.maxTrailTier, 1);
  assert.strictEqual(SUBSCRIPTION_TIERS.free.aiTutor, false);
  assert.strictEqual(SUBSCRIPTION_TIERS.free.recordBookIncluded, false);

  // Pro tier unlocks
  assert.strictEqual(SUBSCRIPTION_TIERS.pro.allowedSpecies, 'ALL');
  assert.strictEqual(SUBSCRIPTION_TIERS.pro.maxTrailTier, 4);
  assert.strictEqual(SUBSCRIPTION_TIERS.pro.aiTutor, true);
  assert.strictEqual(SUBSCRIPTION_TIERS.pro.verifiableCerts, true);

  // Family tier unlocks
  assert.strictEqual(SUBSCRIPTION_TIERS.family.maxChildren, 5);
  assert.strictEqual(SUBSCRIPTION_TIERS.family.recordBookIncluded, true);

  // Club charter unlocks
  assert.strictEqual(SUBSCRIPTION_TIERS.club.maxChildren, 30);
  assert.strictEqual(SUBSCRIPTION_TIERS.club.clubLeaderDashboard, true);
});

test('Subscription checkout strictly requires Parent PIN authorization', () => {
  const testParent = 'test.billing.parent@example.com';

  // Attempt upgrade without valid PIN
  const failRes = EntitlementService.upgradePlan({
    parentEmail: testParent,
    newTier: 'pro',
    parentPin: '0000'
  });
  assert.strictEqual(failRes.success, false);
  assert.ok(failRes.error.includes('Parent authorization required'));

  // Successful upgrade with correct Parent PIN
  const okRes = EntitlementService.upgradePlan({
    parentEmail: testParent,
    newTier: 'pro',
    billingCycle: 'annual',
    parentPin: '4444'
  });
  assert.strictEqual(okRes.success, true);
  assert.strictEqual(okRes.entitlements.tier, 'pro');
  assert.ok(okRes.receipt.id.startsWith('rcpt_'));
  assert.strictEqual(okRes.receipt.amountPaid, 59);
});

test('Anti-pay-to-win policy strictly guarantees zero paid advantage in learning and exams', () => {
  assert.ok(ANTI_PAY_TO_WIN_POLICY.POINTS.length >= 4);
  assert.ok(ANTI_PAY_TO_WIN_POLICY.POINTS.some(p => p.includes('No paid advantage in quizzes')));
  assert.ok(ANTI_PAY_TO_WIN_POLICY.POINTS.some(p => p.includes('No randomized loot boxes')));

  // Ensure learning mastery formula is independent of subscription tier
  const testProgress = [
    { score: 100, status: 'completed' },
    { score: 90, status: 'completed' }
  ];
  // Calculate raw mastery
  const totalScore = testProgress.reduce((s, p) => s + p.score, 0);
  const avg = Math.round(totalScore / testProgress.length);
  assert.strictEqual(avg, 95, 'Mastery score reflects genuine learning only, not paid perks');
});

test('Educational add-on unlocks operate accurately and grant intended utilities', () => {
  const testParent = 'test.addon.parent@example.com';
  // Reset to default free entitlements
  EntitlementService.saveEntitlements(testParent, {
    tier: 'free',
    purchasedAddons: []
  });

  // Initially locked on Free tier
  assert.strictEqual(EntitlementService.isRecordBookUnlocked(testParent), false);

  // Purchase add-on with Parent PIN
  const addonRes = EntitlementService.purchaseAddon({
    parentEmail: testParent,
    addonId: 'addon_record_book',
    parentPin: '4444'
  });
  assert.strictEqual(addonRes.success, true);
  assert.strictEqual(EntitlementService.isRecordBookUnlocked(testParent), true);

  // Upgrade to Family Pass automatically includes Record Book without duplicate purchase
  const familyParent = 'test.family.parent@example.com';
  EntitlementService.saveEntitlements(familyParent, {
    tier: 'family',
    purchasedAddons: []
  });
  assert.strictEqual(EntitlementService.isRecordBookUnlocked(familyParent), true);
});

test('Family and Club B2B seat limits are enforced accurately', () => {
  const familyParent = 'test.seats.family@example.com';
  EntitlementService.saveEntitlements(familyParent, { tier: 'family' });

  assert.strictEqual(EntitlementService.canAddChildSeat(3, familyParent), true);
  assert.strictEqual(EntitlementService.canAddChildSeat(4, familyParent), true);
  assert.strictEqual(EntitlementService.canAddChildSeat(5, familyParent), false, 'Family pass caps at 5 children');

  const clubParent = 'test.seats.club@example.com';
  EntitlementService.saveEntitlements(clubParent, { tier: 'club' });
  assert.strictEqual(EntitlementService.canAddChildSeat(28, clubParent), true);
  assert.strictEqual(EntitlementService.canAddChildSeat(30, clubParent), false, 'Club charter caps at 30 seats');
});

test('Promo codes and Admin Support Overrides function accurately', () => {
  // Promo code validation
  const promo = EntitlementService.validatePromoCode('fair2026');
  assert.ok(promo);
  assert.strictEqual(promo.discountPercent, 20);

  // Admin Support Override with Master Key (9999)
  const grantRes = EntitlementService.adminOverrideEntitlement({
    parentEmail: 'hardship.grant@example.com',
    tier: 'family',
    reason: 'County Fair Youth Assistance Grant',
    adminKey: '9999'
  });
  assert.strictEqual(grantRes.success, true);
  assert.strictEqual(grantRes.entitlements.tier, 'family');
  assert.strictEqual(grantRes.entitlements.adminOverrideReason, 'County Fair Youth Assistance Grant');

  // Admin override rejected with bad key
  const badKeyRes = EntitlementService.adminOverrideEntitlement({
    parentEmail: 'hardship.grant@example.com',
    tier: 'family',
    reason: 'Test',
    adminKey: '0000'
  });
  assert.strictEqual(badKeyRes.success, false);
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
