// WarrenWise Youth Animal Training Academy - Initial Seed Data

import { INITIAL_GOVERNANCE_ITEMS } from '../services/GovernanceService.js';

export const SEED_LEARNERS = [
  {
    id: 'lrn_01',
    handle: 'CloverChampion42',
    realName: 'Sammy Miller',
    ageDivision: 'junior',
    parentEmail: 'parent.miller@example.com',
    parentConsentGranted: true,
    coachId: 'coach_linda',
    clubName: 'Evergreen 4-H Club',
    avatar: 'Rabbit',
    streakDays: 4,
    xp: 420,
    createdAt: '2026-09-01'
  },
  {
    id: 'lrn_02',
    handle: 'BarnExplorer08',
    realName: 'Maya Chen',
    ageDivision: 'cloverbud',
    parentEmail: 'parent.chen@example.com',
    parentConsentGranted: true,
    coachId: 'coach_linda',
    clubName: 'Evergreen 4-H Club',
    avatar: 'Sparkles',
    streakDays: 2,
    xp: 180,
    createdAt: '2026-09-10'
  },
  {
    id: 'lrn_03',
    handle: 'SeniorLeader17',
    realName: 'Jordan Vance',
    ageDivision: 'senior',
    parentEmail: 'parent.vance@example.com',
    parentConsentGranted: true,
    coachId: 'coach_linda',
    clubName: 'Evergreen 4-H Club',
    avatar: 'Award',
    streakDays: 7,
    xp: 950,
    createdAt: '2026-08-15'
  },
  {
    id: 'lrn_04',
    handle: 'CloverSprout05',
    realName: 'Toby Miller',
    ageDivision: 'cloverbud',
    parentEmail: 'parent.miller@example.com',
    parentConsentGranted: true,
    coachId: 'coach_linda',
    clubName: 'Evergreen 4-H Club',
    avatar: 'Sparkles',
    streakDays: 3,
    xp: 210,
    createdAt: '2026-09-12'
  },
  {
    id: 'lrn_05',
    handle: 'IndependentScholar99',
    realName: 'Alex Smith',
    ageDivision: 'junior',
    parentEmail: 'parent.smith@example.com',
    parentConsentGranted: false, // Explicitly no coach consent
    coachId: null,
    clubName: 'Independent Home Project',
    avatar: 'Compass',
    streakDays: 1,
    xp: 90,
    createdAt: '2026-09-28'
  }
];

export const SEED_PROGRESS = [
  // Learner 1 progress in Rabbits
  { id: 'prg_1', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'basics_breeds', status: 'completed', score: 100, completedAt: '2026-09-15' },
  { id: 'prg_2', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'daily_care', status: 'completed', score: 90, completedAt: '2026-09-18' },
  { id: 'prg_3', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'nutrition', status: 'completed', score: 85, completedAt: '2026-09-21' },
  { id: 'prg_4', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'health_biosecurity', status: 'completed', score: 95, completedAt: '2026-09-24' },
  { id: 'prg_5', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'handling_welfare', status: 'completed', score: 100, completedAt: '2026-09-26' },
  { id: 'prg_6', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'record_keeping', status: 'completed', score: 80, completedAt: '2026-09-28' },
  { id: 'prg_7', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'showmanship', status: 'completed', score: 95, completedAt: '2026-09-30' },
  { id: 'prg_8', learnerId: 'lrn_01', speciesId: 'rabbits', moduleId: 'ethics_character', status: 'completed', score: 100, completedAt: '2026-10-01' },
  // Learner 1 progress in Cavies
  { id: 'prg_9', learnerId: 'lrn_01', speciesId: 'cavies', moduleId: 'basics_breeds', status: 'completed', score: 90, completedAt: '2026-09-22' },
  { id: 'prg_10', learnerId: 'lrn_01', speciesId: 'cavies', moduleId: 'nutrition', status: 'completed', score: 95, completedAt: '2026-09-25' }
];

export const SEED_ASSIGNMENTS = [
  {
    id: 'asg_01',
    coachId: 'coach_linda',
    learnerId: 'lrn_01',
    speciesId: 'rabbits',
    moduleId: 'communication_goals',
    title: 'Complete Project Goals & Public Speaking Module',
    dueDate: '2026-10-10',
    completed: false
  },
  {
    id: 'asg_02',
    coachId: 'coach_linda',
    learnerId: 'lrn_01',
    speciesId: 'rabbits',
    moduleId: 'showmanship',
    title: 'Practice 12-Step Oral Showmanship Routine with Timer',
    dueDate: '2026-10-05',
    completed: true
  }
];

export const SEED_OBSERVATIONS = [
  {
    id: 'obs_01',
    coachId: 'coach_linda',
    learnerId: 'lrn_01',
    speciesId: 'rabbits',
    topic: 'Barn Showmanship Table Routine Practice',
    date: '2026-09-28',
    score: 94,
    criteriaScores: {
      carryingFootballTuck: 5,
      tablePose: 5,
      teethCheck: 4,
      earTattooCheck: 5,
      courtesyAndSmile: 5
    },
    coachFeedback: 'Excellent confidence, Sammy! Make sure to hold your top teeth parting just a second longer so the judge has plenty of time to view occlusion.'
  }
];

export const SEED_CERTIFICATE = {
  id: 'cert_seed_01',
  verificationCode: 'WW-CERT-RAB-2026-7842',
  learnerId: 'lrn_01',
  learnerDisplayName: 'Sammy Miller (CloverChampion42)',
  speciesId: 'rabbits',
  division: 'junior',
  title: 'Rabbit Project Academic Mastery Certificate',
  averageScore: 93,
  issueDate: 'October 1, 2026',
  disclaimer: 'Educational Mastery Certificate issued by WarrenWise Youth Animal Training Academy. This document verifies completion of app-based learning modules. It is NOT an official certification, nor an endorsement by National 4-H, USDA NIFA, ARBA, or state Extension agencies.',
  verifiedAuthority: 'WarrenWise Academic Curriculum Board'
};
