// WarrenWise Youth Animal Training Academy - Certificate Service
// Generates verifiable certificates across 5 categories with mandatory legal disclaimers and audit codes

import { LEGAL_DISCLAIMERS } from '../config/constants.js';
import { CERTIFICATE_TYPES } from '../data/badgesCatalog.js';
import { db } from '../db/academyDb.js';

export const SPECIES_CERTIFICATE_TITLES = {
  rabbits: 'Rabbit Project Academic Mastery Certificate',
  cavies: 'Cavy Project Academic Mastery Certificate',
  poultry: 'Poultry Project Academic Mastery Certificate',
  goats: 'Goat Project Academic Mastery Certificate',
  sheep: 'Sheep Project Academic Mastery Certificate',
  swine: 'Swine Project Academic Mastery Certificate',
  beef_cattle: 'Beef Cattle Academic Mastery Certificate',
  dairy_cattle: 'Dairy Cattle Academic Mastery Certificate',
  dogs: 'Canine Project Academic Mastery Certificate',
  horses: 'Equine Horsemanship Academic Mastery Certificate',
  vet_science: 'Veterinary Science Academic Scholar Certificate'
};

export async function issueVerifiableCertificate({
  certificateType = 'species_completion',
  learnerId = 'learner_guest',
  learnerHandle = 'BarnExplorer',
  learnerRealName = null, // Used with verified parental consent
  speciesId = 'rabbits',
  speciesName = 'Rabbits',
  division = 'junior',
  averageScore = 92,
  milestoneCount = 9,
  customCitation = null
}) {
  const typeConfig = CERTIFICATE_TYPES[certificateType.toUpperCase()] || CERTIFICATE_TYPES.SPECIES_COMPLETION;
  
  let certificateTitle = typeConfig.title;
  let certificateCitation = customCitation;

  if (certificateType === 'species_completion' || certificateType === 'SPECIES_COMPLETION') {
    certificateTitle = SPECIES_CERTIFICATE_TITLES[speciesId] || `${speciesName} Academic Mastery Certificate`;
    if (!certificateCitation) {
      certificateCitation = `has satisfactorily completed all 9 core educational training modules in the ${certificateTitle} with an overall examination average score of ${averageScore}%.`;
    }
  } else if (certificateType === 'milestone' || certificateType === 'MILESTONE') {
    certificateTitle = `Curriculum Milestone Honor: ${milestoneCount} Modules Completed`;
    certificateCitation = `has reached the significant educational milestone of successfully completing ${milestoneCount} modules across the WarrenWise Animal Academy curriculum.`;
  } else if (certificateType === 'showmanship' || certificateType === 'SHOWMANSHIP') {
    certificateTitle = `Showmanship & Practical Ringcraft Distinction`;
    certificateCitation = `has demonstrated outstanding mastery of breed-specific presentation, ring mechanics, physical examination sequences, and oral judge defense.`;
  } else if (certificateType === 'ethics' || certificateType === 'ETHICS') {
    certificateTitle = `Character & Animal Welfare Honors Certificate`;
    certificateCitation = `has exemplified the 4-H pledge of Head, Heart, Hands, and Health by upholding the highest standards of bioethics, honest showing, and animal welfare stewardship.`;
  } else if (certificateType === 'multi_species' || certificateType === 'MULTI_SPECIES') {
    certificateTitle = `Multi-Species Academy Scholar Certificate`;
    certificateCitation = `has demonstrated versatile agricultural scholarship by achieving module proficiencies across three or more distinct livestock and companion species tracks.`;
  }

  const prefix = speciesId ? speciesId.toUpperCase().slice(0, 3) : 'ACA';
  const verificationCode = `WW-${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const certificate = {
    id: `cert_${Date.now()}`,
    certificateType,
    verificationCode,
    learnerId,
    learnerDisplayName: learnerRealName || learnerHandle,
    speciesId,
    division,
    title: certificateTitle,
    citation: certificateCitation,
    averageScore,
    issueDate,
    disclaimer: 'Educational Mastery Certificate issued by WarrenWise Youth Animal Training Academy. This document verifies completion of app-based learning modules. It is NOT an official certification, nor an endorsement by National 4-H, USDA NIFA, ARBA, ACBA, ADGA, AKC, or state Extension agencies.',
    legalWarning: LEGAL_DISCLAIMERS.certificates,
    verifiedAuthority: 'WarrenWise Academic Curriculum Board'
  };

  try {
    if (db && db.certificates) {
      await db.certificates.add(certificate);
    }
  } catch (e) {
    console.warn('Certificate storage notice:', e.message);
  }

  return certificate;
}

// Backward-compatible alias
export const issueMasteryCertificate = (params) => issueVerifiableCertificate({
  ...params,
  certificateType: 'species_completion'
});
