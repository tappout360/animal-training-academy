// WarrenWise Youth Animal Training Academy - Mastery Engine
// Computes skill mastery matrices, radar dimensions, weak-area detection, and remediation

import { STANDARD_MODULE_TOPICS } from '../config/constants.js';

export function calculateLearnerMastery(progressRecords = [], speciesId = 'rabbits') {
  const speciesProgress = progressRecords.filter(p => p.speciesId === speciesId);

  const topicMastery = STANDARD_MODULE_TOPICS.map(topic => {
    const record = speciesProgress.find(p => p.moduleId === topic.id);
    const score = record ? (record.score || 0) : 0;
    const completed = record ? (record.status === 'completed') : false;

    let level = 'Not Started';
    if (completed) {
      if (score >= 90) level = 'Mastered';
      else if (score >= 80) level = 'Proficient';
      else level = 'Review Needed';
    } else if (score > 0) {
      level = 'In Progress';
    }

    return {
      topicId: topic.id,
      title: topic.title,
      score,
      completed,
      level,
      color: topic.color
    };
  });

  const completedCount = topicMastery.filter(t => t.completed).length;
  const overallPercentage = Math.round((completedCount / STANDARD_MODULE_TOPICS.length) * 100);
  
  const scoresOnly = topicMastery.filter(t => t.completed).map(t => t.score);
  const averageQuizScore = scoresOnly.length > 0 
    ? Math.round(scoresOnly.reduce((a, b) => a + b, 0) / scoresOnly.length)
    : 0;

  // Weak area detection
  const weakTopics = topicMastery
    .filter(t => t.completed && t.score < 85)
    .map(t => t.title);

  // Recommendations
  const recommendedNext = topicMastery.find(t => !t.completed) || topicMastery.find(t => t.score < 85);

  return {
    speciesId,
    topicMastery,
    completedCount,
    totalModules: STANDARD_MODULE_TOPICS.length,
    overallPercentage,
    averageQuizScore,
    weakTopics,
    recommendedNext: recommendedNext ? recommendedNext.title : 'All Core Modules Mastered!',
    isEligibleForCertificate: completedCount >= 9 && averageQuizScore >= 80
  };
}

// Roster Aggregate Heatmap for Coaches
export function generateRosterHeatmap(learners = [], progressMap = {}) {
  return learners.map(learner => {
    const learnerProgress = progressMap[learner.id] || [];
    const rabbitMastery = calculateLearnerMastery(learnerProgress, 'rabbits');
    const cavyMastery = calculateLearnerMastery(learnerProgress, 'cavies');

    return {
      learnerId: learner.id,
      handle: learner.handle,
      division: learner.ageDivision,
      parentConsent: learner.parentConsentGranted,
      rabbits: {
        completed: rabbitMastery.completedCount,
        averageScore: rabbitMastery.averageQuizScore,
        weakTopics: rabbitMastery.weakTopics
      },
      cavies: {
        completed: cavyMastery.completedCount,
        averageScore: cavyMastery.averageQuizScore,
        weakTopics: cavyMastery.weakTopics
      }
    };
  });
}
