import Dexie from 'dexie';

class AcademyDatabase extends Dexie {
  constructor() {
    super('WarrenWiseAcademyDB');
    this.version(1).stores({
      learners: 'id, handle, ageDivision, parentEmail, coachId, createdAt',
      progress: 'id, learnerId, speciesId, moduleId, status, score, completedAt',
      quizAttempts: 'id, learnerId, speciesId, moduleId, score, passed, timestamp',
      badges: 'id, learnerId, badgeKey, speciesId, awardedAt',
      certificates: 'id, verificationCode, learnerId, learnerName, speciesId, issueDate',
      assignments: 'id, coachId, learnerId, speciesId, moduleId, dueDate, completed',
      observations: 'id, coachId, learnerId, speciesId, topic, score, date',
      governanceItems: 'id, speciesId, moduleId, title, status, version, safetyReviewed, updatedAt',
      aiAuditLogs: 'id, learnerId, query, topic, flaggedMedical, safetyBlocked, timestamp',
      feedbackNotes: 'id, coachId, learnerId, message, timestamp'
    });
  }
}

export const db = typeof window !== 'undefined' ? new AcademyDatabase() : null;
