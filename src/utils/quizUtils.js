// WarrenWise Animal Academy - Quiz & Challenge Option Randomization Utility
// Ensures answer choices are mixed up across all quizzes, challenges, and show rings
// Eliminates static option positions (preventing "Option A is always correct" pattern).

/**
 * Modern Fisher-Yates shuffle that creates a shallow copy and randomly shuffles elements.
 * @param {Array} array 
 * @returns {Array} Shuffled copy of array
 */
export function shuffleArray(array) {
  if (!Array.isArray(array)) return [];
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Shuffles an array of string options and updates the correctIndex accordingly.
 * Used in QuizEngine, LessonViewer quick checks, and SkillathonDrills.
 * 
 * @param {string[]} options - Array of string options
 * @param {number} correctIndex - Original index of the correct answer
 * @returns {{ shuffledOptions: string[], newCorrectIndex: number, originalIndices: number[] }}
 */
export function shuffleStringOptions(options = [], correctIndex = 0) {
  if (!Array.isArray(options) || options.length === 0) {
    return { shuffledOptions: [], newCorrectIndex: 0, originalIndices: [] };
  }

  // Create indexed pairs: [{ text, originalIndex, isCorrect }]
  const indexed = options.map((text, originalIndex) => ({
    text,
    originalIndex,
    isCorrect: originalIndex === correctIndex
  }));

  // Shuffle the array of pairs
  const shuffled = shuffleArray(indexed);

  const shuffledOptions = shuffled.map(item => item.text);
  const newCorrectIndex = shuffled.findIndex(item => item.isCorrect);
  const originalIndices = shuffled.map(item => item.originalIndex);

  return {
    shuffledOptions,
    newCorrectIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
    originalIndices
  };
}

/**
 * Shuffles an array of option objects (e.g. { id, text, isCorrect, effect, ... }).
 * Used in ChallengeModal, MorningBarnCheck, ChampionshipShowRing, and JudgeDefenseRing.
 * 
 * @param {Array<Object>} options - Array of option objects
 * @returns {Array<Object>} Shuffled copy with newly assigned display letters (if needed)
 */
export function shuffleObjectOptions(options = []) {
  if (!Array.isArray(options) || options.length === 0) return [];
  return shuffleArray(options);
}

/**
 * Deterministic pseudo-random shuffle using a seed string or number.
 * Useful for tests or session-consistent ordering.
 */
export function deterministicShuffle(array, seed = 'warrenwise') {
  if (!Array.isArray(array)) return [];
  const copy = [...array];
  let seedNum = 0;
  for (let i = 0; i < seed.length; i++) {
    seedNum = (seedNum << 5) - seedNum + seed.charCodeAt(i);
    seedNum |= 0;
  }

  const seededRandom = () => {
    seedNum = (seedNum * 9301 + 49297) % 233280;
    return seedNum / 233280;
  };

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
