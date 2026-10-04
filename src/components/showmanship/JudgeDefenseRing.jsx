// WarrenWise Youth Animal Training Academy - ARBA & 4-H Timed Oral Judge Defense Studio
// Replicates official ring pressure with 15-second countdowns, technical vocabulary drills, and judge scorecards

import React, { useState, useEffect } from 'react';
import { 
  Award, Clock, Mic, CheckCircle2, XCircle, RotateCcw, 
  HelpCircle, Volume2, ShieldCheck, Sparkles, ChevronRight,
  Flame, Trophy
} from 'lucide-react';

export const ORAL_DEFENSE_QUESTIONS = [
  {
    id: 'od_01',
    category: 'ARBA Standard of Perfection',
    judgePrompt: '"Showman, identify your breed’s primary body type, its fur classification, and state whether it is exhibited as a 4-class or 6-class breed."',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Compact body type, Rollback fur, and it is exhibited as a 4-class breed (Senior & Junior Bucks and Does).',
        isCorrect: true,
        judgeFeedback: 'Excellent! Clear, concise, and accurate ARBA classification.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'Commercial body type with long wool, and it has 6 age classes including intermediate.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Holland Lops and Mini Rex are compact 4-class breeds, not commercial wool breeds.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'It is a friendly pet rabbit with soft hair and can be shown in any category.',
        isCorrect: false,
        judgeFeedback: 'Too informal. An ARBA judge requires precise body type and fur terminology.',
        points: 0
      }
    ]
  },
  {
    id: 'od_02',
    category: 'Anatomy & Health Observation',
    judgePrompt: '"Showman, show me the incisors and explain what tooth condition would cause this animal to be disqualified from the show table."',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Yellow tooth staining from eating grass or carrots.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Yellow stains are considered a minor fault/condition issue, not a disqualification.',
        points: 0
      },
      {
        id: 'opt_b',
        text: 'Malocclusion or mandibular prognathism, where lower incisors lap outside the upper teeth or meet edge-to-edge.',
        isCorrect: true,
        judgeFeedback: 'Spot on! Malocclusion is an immediate disqualification under ARBA General Disqualifications.',
        points: 25
      },
      {
        id: 'opt_c',
        text: 'Having baby peg teeth behind the primary front incisors.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Normal rabbits possess peg teeth directly behind their upper incisors.',
        points: 0
      }
    ]
  },
  {
    id: 'od_03',
    category: 'Disqualifications vs Faults',
    judgePrompt: '"Showman, your rabbit has a single white toenail on its front foot, but the other claws are dark slate. What is my official ruling?"',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Disqualification under ARBA General Disqualifications for unmatched toenails on a colored variety.',
        isCorrect: true,
        judgeFeedback: 'Perfect call. White toenails on colored varieties are an irrecoverable disqualification in the ring.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'A minor 2-point fault in grooming, but it can still win Best of Breed.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. A white claw on a colored breed is a hard DQ, not a grooming fault.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'No deduction if the rabbit has a clean tattoo in the ear.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Tattoo status does not excuse toenail pigmentation violations.',
        points: 0
      }
    ]
  },
  {
    id: 'od_04',
    category: 'Husbandry & Digestion Science',
    judgePrompt: '"Showman, why is long-stem grass hay essential in your animal’s daily feeding program?"',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'It provides necessary indigestible fiber to drive cecal motility, prevent GI stasis, and grind continuously growing open-rooted teeth.',
        isCorrect: true,
        judgeFeedback: 'Masterful husbandry defense! High fiber prevents gut stasis and naturally wears down open-rooted teeth.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'It makes their fur change color to look shinier before the judge.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Hay is about gastrointestinal motility, not artificial coat tinting.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'It replaces the need for clean drinking water in the hutches.',
        isCorrect: false,
        judgeFeedback: 'Dangerously incorrect. Fresh water is required 24/7 alongside high-fiber forage.',
        points: 0
      }
    ]
  }
];

export default function JudgeDefenseRing({ onCompleteSession }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [evaluationFeedback, setEvaluationFeedback] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const currentQ = ORAL_DEFENSE_QUESTIONS[currentQuestionIdx];

  // Countdown timer
  useEffect(() => {
    let timer = null;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (isTimerRunning && timeLeft === 0) {
      setIsTimerRunning(false);
      // Time expired penalty
      setEvaluationFeedback({
        isCorrect: false,
        feedback: 'Time Expired! In the showmanship ring, hesitation or silence costs ring poise points. Speak with confidence.'
      });
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const handleStartQuestion = () => {
    setTimeLeft(currentQ.timeLimitSeconds);
    setSelectedOptionId(null);
    setEvaluationFeedback(null);
    setIsTimerRunning(true);
  };

  const handleSelectOption = (opt) => {
    if (!isTimerRunning && !selectedOptionId) {
      // Auto-start timer on first interaction if stopped
    }
    setIsTimerRunning(false);
    setSelectedOptionId(opt.id);

    if (opt.isCorrect) {
      const timeBonus = Math.floor(timeLeft / 3);
      const earned = opt.points + timeBonus;
      setTotalScore(s => s + earned);
      setEvaluationFeedback({
        isCorrect: true,
        feedback: `${opt.judgeFeedback} (+${earned} Pts including ${timeBonus}s speed bonus)`
      });
    } else {
      setEvaluationFeedback({
        isCorrect: false,
        feedback: opt.judgeFeedback
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < ORAL_DEFENSE_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(i => i + 1);
      setTimeLeft(15);
      setSelectedOptionId(null);
      setEvaluationFeedback(null);
      setIsTimerRunning(false);
    } else {
      setSessionCompleted(true);
      if (onCompleteSession) onCompleteSession(totalScore);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setTimeLeft(15);
    setIsTimerRunning(false);
    setSelectedOptionId(null);
    setEvaluationFeedback(null);
    setTotalScore(0);
    setSessionCompleted(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Mic className="w-4 h-4 text-purple-400" />
              <span>ARBA Oral Examination Arena</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              15-Second Timed Judge Defense Ring
            </h2>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
              Train for sudden oral questions from official show judges. Deliver prompt, high-precision technical answers under ring pressure.
            </p>
          </div>

          <div className="bg-purple-950/70 border border-purple-700/60 rounded-xl px-4 py-2.5 text-right">
            <div className="text-[10px] uppercase font-bold text-purple-300">Total Defense Score</div>
            <div className="text-xl font-black text-amber-300">{totalScore} Pts</div>
          </div>
        </div>

        {/* Progress & Countdown Bar */}
        <div className="flex items-center justify-between gap-4 mt-5 pt-3 border-t border-purple-800/80">
          <div className="text-xs font-bold text-purple-200">
            Question {currentQuestionIdx + 1} of {ORAL_DEFENSE_QUESTIONS.length}
          </div>

          {/* Ring Timer Display */}
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${timeLeft <= 5 ? 'text-rose-400 animate-pulse' : 'text-amber-300'}`} />
            <span className={`text-base font-black font-mono ${
              timeLeft <= 5 ? 'text-rose-400' : 'text-amber-300'
            }`}>
              {timeLeft}s
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {!sessionCompleted ? (
          <>
            {/* Judge Question Prompt Box */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/30">
                  {currentQ.category}
                </span>
                {!isTimerRunning && !selectedOptionId && (
                  <button
                    onClick={handleStartQuestion}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-400 text-purple-950 hover:bg-amber-300 transition-all shadow-xs"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Start 15s Timer</span>
                  </button>
                )}
              </div>

              <div className="text-sm sm:text-base font-serif italic text-purple-100 leading-relaxed pl-2 border-l-2 border-amber-400">
                {currentQ.judgePrompt}
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Your Showman Oral Defense:
              </div>

              <div className="space-y-2">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      disabled={!!selectedOptionId || timeLeft === 0}
                      className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        isSelected && opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-400'
                          : isSelected && !opt.isCorrect
                          ? 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400'
                          : 'bg-white border-slate-200 hover:border-purple-300 text-slate-800 shadow-2xs'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected && opt.isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSelected && !opt.isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {opt.id.slice(-1).toUpperCase()}
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Judge Evaluation Feedback Alert */}
            {evaluationFeedback && (
              <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
                evaluationFeedback.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}>
                <div className="font-bold flex items-center gap-1.5">
                  {evaluationFeedback.isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600" />
                  )}
                  <span>Judge's Oral Feedback</span>
                </div>
                <p className="leading-relaxed text-xs">
                  {evaluationFeedback.feedback}
                </p>
              </div>
            )}

            {/* Next / Proceed Button */}
            {(selectedOptionId || timeLeft === 0) && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-sm transition-all"
                >
                  <span>{currentQuestionIdx === ORAL_DEFENSE_QUESTIONS.length - 1 ? 'View Final Scorecard' : 'Next Oral Question'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Session Completed Summary */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900">
                Oral Defense Routine Completed!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                You defended your breed standard under live 15-second ARBA ring pressure.
              </p>
            </div>

            <div className="inline-block bg-purple-50 border border-purple-200 rounded-2xl px-8 py-4">
              <div className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                Final Showmanship Score
              </div>
              <div className="text-3xl font-black text-purple-900 mt-1">
                {totalScore} Pts
              </div>
              <div className="text-xs text-purple-600 font-medium mt-1">
                {totalScore >= 80 ? 'Grand Champion Rosette Candidate' : 'Solid Blue Ribbon Effort'}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 mx-auto transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Practice Another Defense Round</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
