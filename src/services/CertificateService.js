// WarrenWise Youth Animal Training Academy - Certificate Service
// Generates verifiable mastery certificates with embedded legal non-affiliation notices

import { LEGAL_DISCLAIMERS } from '../config/constants.js';
import { CERTIFICATE_CRITERIA } from '../data/badgesData.js';
import { db } from '../db/academyDb.js';

export async function issueMasteryCertificate({
  learnerId,
  learnerHandle,
  learnerRealName = null, // With parent permission only
  speciesId = 'rabbits',
  division = 'junior',
  averageScore = 92
}) {
  const criteria = CERTIFICATE_CRITERIA[speciesId] || CERTIFICATE_CRITERIA.rabbits;
  const verificationCode = `WW-CERT-${speciesId.toUpperCase().slice(0, 3)}-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const certificate = {
    id: `cert_${Date.now()}`,
    verificationCode,
    learnerId,
    learnerDisplayName: learnerRealName || learnerHandle,
    speciesId,
    division,
    title: criteria.title,
    averageScore,
    issueDate,
    disclaimer: criteria.disclaimer,
    legalWarning: LEGAL_DISCLAIMERS.certificates,
    verifiedAuthority: 'WarrenWise Academic Curriculum Board'
  };

  try {
    if (db) {
      await db.certificates.add(certificate);
    }
  } catch (e) {
    console.warn('Certificate storage notice:', e.message);
  }

  return certificate;
}
