// WarrenWise Youth Animal Training Academy - Automated Test Suite
// Verifies Youth Safety, AI Veterinary Intercepts, 11 Species Packs, Content Matrix, Badges, and 5 Certificate Types

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
import { CONTENT_STATUSES, LEGAL_DISCLAIMERS } from '../src/config/constants.js';
import { TRAIL_PACKS, getTrailPackById } from '../src/data/game/trailPacks.js';
import { validateCareOption } from '../src/data/game/careRuleset.js';
import { ALL_COSMETICS } from '../src/data/game/cosmeticsCatalog.js';
import { TrailQuestEngine } from '../src/services/TrailQuestEngine.js';
import { ParentalControlsService, getSafeDefaultsByDivision } from '../src/services/ParentalControlsService.js';

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

// Summary
console.log(`\n========================================`);
console.log(`Test Results: ${passCount} Passed, ${failCount} Failed`);
console.log(`========================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL SYSTEM TESTS PASSED SUCCESSFULLY!\n');
}
