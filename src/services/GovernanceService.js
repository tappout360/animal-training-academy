// WarrenWise Youth Animal Training Academy - Content Governance Service
// Handles Draft -> In Review -> Approved -> Archived lifecycle, mandatory animal welfare
// safety review gates, version tracking, rollback, and stale content auditing.

import { CONTENT_STATUSES, KNOWLEDGE_TIERS } from '../config/constants.js';
import { db } from '../db/academyDb.js';

export const INITIAL_GOVERNANCE_ITEMS = [
  {
    id: 'gov_rb_01',
    speciesId: 'rabbits',
    moduleId: 'health_biosecurity',
    title: 'Rabbit Health Observation & Biosecurity Protocols',
    version: '2.4.0',
    status: CONTENT_STATUSES.APPROVED,
    safetyReviewed: true,
    safetyReviewerName: 'Dr. E. Vance, DVM (State Extension)',
    lastVerifiedDate: '2026-08-15',
    tier: KNOWLEDGE_TIERS.TIER_1_OFFICIAL,
    notes: 'Verified compliance with zero veterinary prescription rules and updated RHDV2 vaccination guidelines.'
  },
  {
    id: 'gov_cv_01',
    speciesId: 'cavies',
    moduleId: 'nutrition',
    title: 'Cavy Vitamin C Requirement Standards',
    version: '2.1.0',
    status: CONTENT_STATUSES.APPROVED,
    safetyReviewed: true,
    safetyReviewerName: 'Sarah Jenkins, MS (Extension Small Animal)',
    lastVerifiedDate: '2026-08-20',
    tier: KNOWLEDGE_TIERS.TIER_1_OFFICIAL,
    notes: 'Re-verified daily 10-30 mg requirement and warnings against water bottle additives.'
  },
  {
    id: 'gov_rb_draft_02',
    speciesId: 'rabbits',
    moduleId: 'handling_welfare',
    title: 'Updated Lumbar Spinal Luxation Prevention Guide',
    version: '2.5.0-draft',
    status: CONTENT_STATUSES.IN_REVIEW,
    safetyReviewed: false, // Animal welfare topic requiring safety signoff before approval
    safetyReviewerName: null,
    lastVerifiedDate: '2026-09-28',
    tier: KNOWLEDGE_TIERS.TIER_3_DRAFT,
    notes: 'Submitted by club leader; pending small animal veterinarian welfare sign-off.'
  },
  {
    id: 'gov_stale_sample',
    speciesId: 'rabbits',
    moduleId: 'daily_care',
    title: 'Legacy Winterization & Frozen Crock Management',
    version: '1.2.0',
    status: CONTENT_STATUSES.APPROVED,
    safetyReviewed: true,
    safetyReviewerName: 'Historic Review Board',
    lastVerifiedDate: '2025-01-10', // Over 12 months ago -> triggers stale alert
    tier: KNOWLEDGE_TIERS.TIER_1_OFFICIAL,
    notes: 'Scheduled for annual re-verification.'
  }
];

// Helper: Check if a content item is stale (older than 12 months / 365 days)
export function isContentStale(lastVerifiedDate) {
  if (!lastVerifiedDate) return true;
  const verified = new Date(lastVerifiedDate);
  const now = new Date();
  const diffDays = Math.floor((now - verified) / (1000 * 60 * 60 * 24));
  return diffDays > 365;
}

// Transition item status with mandatory animal-safety gate
export function transitionContentStatus({ item, newStatus, reviewerName = 'Root Admin', isSafetyApproved = false }) {
  // If moving to APPROVED and it involves health/welfare, MUST have animal safety review
  const isHealthOrWelfare = item.moduleId.includes('health') || item.moduleId.includes('welfare') || item.moduleId.includes('nutrition');
  
  if (newStatus === CONTENT_STATUSES.APPROVED) {
    if (isHealthOrWelfare && !item.safetyReviewed && !isSafetyApproved) {
      return {
        success: false,
        error: 'ANIMAL_SAFETY_GATE_BLOCKED: This module covers animal health/welfare/nutrition and cannot be published to Approved without certified animal safety review sign-off.'
      };
    }
  }

  const updatedItem = {
    ...item,
    status: newStatus,
    safetyReviewed: isSafetyApproved || item.safetyReviewed,
    safetyReviewerName: isSafetyApproved ? reviewerName : item.safetyReviewerName,
    lastVerifiedDate: newStatus === CONTENT_STATUSES.APPROVED ? new Date().toISOString().split('T')[0] : item.lastVerifiedDate,
    updatedAt: new Date().toISOString()
  };

  return {
    success: true,
    item: updatedItem
  };
}

// Rollback version helper
export function rollbackContentVersion(item, targetVersion) {
  return {
    ...item,
    version: targetVersion,
    status: CONTENT_STATUSES.APPROVED,
    updatedAt: new Date().toISOString(),
    notes: `Rolled back to version ${targetVersion} on ${new Date().toLocaleDateString()}`
  };
}
