// WarrenWise Youth Animal Training Academy - Quiz Engine & Remediation

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, CheckCircle2, XCircle, Award, 
  Sparkles, RefreshCw, Bot, ChevronRight, HelpCircle 
} from 'lucide-react';
import { AGE_DIVISIONS } from '../../config/constants';
import { explainMissedQuestion } from '../../services/WarrenWiseTrainerAI';

export default function QuizEngine({
  module,
  pack,
  division,
  onCompleteQuiz,
  onBack,
  onOpenAiCoach
}) {
  const divMeta = AGE_DIVISIONS[division] || AGE_DIVISIONS.junior;
  const questions = module.quizQuestions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [remediations, setRemediations] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = submittedAnswers[currentIndex] !== undefined;

  const handleSelectOption = (optIdx) => {
    if (hasAnsweredCurrent) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleSubmitCurrentAnswer = () => {
    const selected = selectedAnswers[currentIndex];
    if (selected === undefined) return;

    const isCorrect = selected === currentQ.correctIndex;
    setSubmittedAnswers(prev => ({ ...prev, [currentIndex]: isCorrect }));

    if (!isCorrect) {
      const breakdown = explainMissedQuestion({
        question: currentQ.question,
        selectedOption: currentQ.options[selected],
        correctOption: currentQ.options[currentQ.correctIndex],
        explanation: currentQ.explanation,
        division
      });
      setRemediations(prev => ({ ...prev, [currentIndex]: breakdown }));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate final score
      const correctCount = Object.values(submittedAnswers).filter(Boolean).length;
      const total = questions.length;
      const scorePercent = Math.round((correctCount / total) * 100);
      setIsFinished(true);

      if (scorePercent >= divMeta.passThresholdPercent) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {}
      }

      onCompleteQuiz({
        speciesId: pack.id,
        moduleId: module.id,
        score: scorePercent,
        passed: scorePercent >= divMeta.passThresholdPercent
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setRemediations({});
    setIsFinished(false);
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center max-w-md mx-auto space-y-4">
        <Award className="w-12 h-12 text-slate-400 mx-auto" />
        <h3 className="font-bold text-slate-800">Quiz Bank in Preparation</h3>
        <p className="text-xs text-slate-500">
          This preview module is currently in Content Governance review.
        </p>
        <button onClick={onBack} className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-700">
          Back to Modules
        </button>
      </div>
    );
  }

  // Completion summary view
  if (isFinished) {
    const correctCount = Object.values(submittedAnswers).filter(Boolean).length;
    const total = questions.length;
    const scorePercent = Math.round((correctCount / total) * 100);
    const passed = scorePercent >= divMeta.passThresholdPercent;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl shadow-sm ${
          passed ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-400' : 'bg-amber-100 text-amber-700 border-2 border-amber-300'
        }`}>
          {passed ? '🏆' : '🌱'}
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Module {module.order} Quiz Completed
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            {passed ? 'Mastery Demonstrated!' : 'Good Effort! Keep Growing!'}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            You scored <strong className="text-slate-900">{scorePercent}%</strong> ({correctCount} of {total} correct) on the {divMeta.name} track.
          </p>
        </div>

        {/* Remediation review list */}
        {Object.keys(remediations).length > 0 && (
          <div className="text-left bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>WarrenWise Coach Remediation Breakdown</span>
            </div>
            {Object.entries(remediations).map(([qIdx, rem]) => (
              <div key={qIdx} className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                <div className="font-bold text-slate-800">
                  Question: {questions[qIdx].question}
                </div>
                <div className="text-rose-700 font-medium">
                  {rem.whyIncorrect}
                </div>
                <div className="text-emerald-800 font-semibold">
                  {rem.whyCorrect}
                </div>
                <p className="text-slate-600 mt-1">
                  💡 {rem.coreReasoning}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-all shadow-2xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <span>Return to Module Browser</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top progress bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Quiz</span>
        </button>

        <div className="text-xs font-semibold text-slate-600">
          Question <span className="font-bold text-slate-900">{currentIndex + 1}</span> of {questions.length}
        </div>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-emerald-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + (hasAnsweredCurrent ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
            {pack.species} • Module {module.order}
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {currentQ.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = selectedAnswers[currentIndex] === optIdx;
            let optStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 bg-white';

            if (hasAnsweredCurrent) {
              if (optIdx === currentQ.correctIndex) {
                optStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isSelected) {
                optStyle = 'border-rose-300 bg-rose-50 text-rose-950';
              } else {
                optStyle = 'border-slate-200 bg-white opacity-50 text-slate-400';
              }
            } else if (isSelected) {
              optStyle = 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={hasAnsweredCurrent}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optStyle}`}
              >
                <span>{opt}</span>
                {hasAnsweredCurrent && optIdx === currentQ.correctIndex && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                )}
                {hasAnsweredCurrent && isSelected && optIdx !== currentQ.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom action / explanation */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          {!hasAnsweredCurrent ? (
            <button
              onClick={handleSubmitCurrentAnswer}
              disabled={selectedAnswers[currentIndex] === undefined}
              className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
                selectedAnswers[currentIndex] !== undefined
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <>
              {/* Feedback box */}
              <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                submittedAnswers[currentIndex]
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}>
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  {submittedAnswers[currentIndex] ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Let’s Learn From This!</span>
                    </>
                  )}
                </div>
                <p className="text-slate-700">
                  {currentQ.explanation}
                </p>
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'View Quiz Summary'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
