// WarrenWise Youth Animal Training Academy - Showmanship Oral Studio

import React, { useState, useEffect } from 'react';
import { 
  Award, Play, Pause, RotateCcw, Volume2, Sparkles, 
  CheckCircle2, ChevronRight, ChevronLeft, Mic, HelpCircle 
} from 'lucide-react';
import { SHOWMANSHIP_ROUTINES } from '../../data/showmanshipData';
import TableInspectionSim from '../showmanship/TableInspectionSim';
import BreedPoseCanvas from '../showmanship/BreedPoseCanvas';
import JudgeDefenseRing from '../showmanship/JudgeDefenseRing';

export default function ShowmanshipOralStudio({ selectedSpeciesId = 'rabbits', division = 'junior' }) {
  const speciesKey = selectedSpeciesId === 'cavies' ? 'cavies' : 'rabbits';
  const routineData = SHOWMANSHIP_ROUTINES[speciesKey] || SHOWMANSHIP_ROUTINES.rabbits;

  const [activeTab, setActiveTab] = useState('routine'); // 'routine' | 'judge_simulator'
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  
  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const currentStep = routineData.steps[currentStepIdx];
  const questions = routineData.oralQuestions || [];
  const currentQuestion = questions[currentQuestionIdx];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-900 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
          <Award className="w-4 h-4 text-purple-400" />
          <span>ARBA & 4-H Showmanship Excellence</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          {routineData.speciesName} Showmanship Oral Studio
        </h1>
        <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Master the complete step-by-step examination routine, practice polished judge oral responses, and train under timed ring pressure.
        </p>

        {/* Studio Sub-tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-purple-800/80">
          <button
            onClick={() => setActiveTab('routine')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'routine'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'bg-purple-800/60 text-purple-200 hover:bg-purple-800'
            }`}
          >
            1. Table Routine ({routineData.totalSteps} Steps)
          </button>
          <button
            onClick={() => setActiveTab('inspection_sim')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'inspection_sim'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'bg-purple-800/60 text-purple-200 hover:bg-purple-800'
            }`}
          >
            2. 8-Point Physical Exam (ARBA Sim)
          </button>
          <button
            onClick={() => setActiveTab('pose_sim')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pose_sim'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'bg-purple-800/60 text-purple-200 hover:bg-purple-800'
            }`}
          >
            3. Breed Pose Simulator (5 Body Types)
          </button>
          <button
            onClick={() => setActiveTab('judge_defense')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'judge_defense'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'bg-purple-800/60 text-purple-200 hover:bg-purple-800'
            }`}
          >
            4. 15s Timed Judge Defense
          </button>
        </div>
      </div>

      {/* Routine Mode */}
      {activeTab === 'routine' && (
        <div className="space-y-4">
          {/* Attire alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Official Ring Attire Reminder:</strong> {routineData.attireGuide}
            </div>
          </div>

          {/* Routine Stepper Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-black text-sm flex items-center justify-center">
                  {currentStep.step}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Step {currentStep.step} of {routineData.steps.length}
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900">
                    {currentStep.title}
                  </h2>
                </div>
              </div>

              {/* Step indicator bar */}
              <div className="hidden sm:flex items-center gap-1">
                {routineData.steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStepIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentStepIdx
                        ? 'bg-purple-600 w-5'
                        : i < currentStepIdx
                        ? 'bg-purple-300'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action and Physical Movement */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Physical Action & Handling:
              </div>
              <div className="text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 p-4 rounded-xl leading-relaxed">
                {currentStep.action}
              </div>
            </div>

            {/* Verbal Script to say to the judge */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5" />
                <span>Verbal Presentation Script (What to tell the judge):</span>
              </div>
              <div className="text-sm text-purple-950 font-medium bg-purple-50/70 border border-purple-200 p-4 rounded-xl leading-relaxed italic">
                {currentStep.verbalScript}
              </div>
            </div>

            {/* Scoring Focus */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span><strong>What the Judge is Watching For:</strong> {currentStep.scoringFocus}</span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => setCurrentStepIdx(Math.max(0, currentStepIdx - 1))}
                disabled={currentStepIdx === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                  currentStepIdx === 0
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <button
                onClick={() => setCurrentStepIdx(Math.min(routineData.steps.length - 1, currentStepIdx + 1))}
                disabled={currentStepIdx === routineData.steps.length - 1}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  currentStepIdx === routineData.steps.length - 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Judge Oral Simulator Mode */}
      {activeTab === 'judge_simulator' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Timer and Prompt Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                Oral Interview Training
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                Simulated Judge Question {currentQuestionIdx + 1} of {questions.length}
              </h2>
            </div>

            {/* Practice Stopwatch */}
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-800">
                ⏱️ {formatTimer(timerSeconds)}
              </span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs"
                title={isTimerRunning ? 'Pause' : 'Start'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(0);
                }}
                className="p-1 rounded bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question from Judge */}
          <div className="bg-purple-50/80 border border-purple-200 p-5 rounded-xl space-y-2">
            <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5 uppercase tracking-wider">
              <span>👨‍⚖️ The Judge Asks You:</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-purple-950">
              "{currentQuestion.question}"
            </div>
          </div>

          {/* Tips for answering */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <strong>How to Answer:</strong> Stand tall, maintain eye contact, begin your response with "Judge, ...", state your facts clearly, and thank the judge when finished.
          </div>

          {/* Model Answer Drawer */}
          <div>
            {!showModelAnswer ? (
              <button
                onClick={() => setShowModelAnswer(true)}
                className="w-full py-3 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs sm:text-sm transition-all"
              >
                Show Model Ideal Answer & Key Scoring Points
              </button>
            ) : (
              <div className="bg-emerald-50 border border-emerald-300 p-5 rounded-xl space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Model Ideal Answer
                  </span>
                  <button
                    onClick={() => setShowModelAnswer(false)}
                    className="text-[11px] font-semibold text-emerald-700 underline"
                  >
                    Hide
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950 italic">
                  "{currentQuestion.idealAnswer}"
                </p>
                <div className="pt-2 border-t border-emerald-200/80">
                  <div className="text-[11px] font-bold text-emerald-800 uppercase mb-1">
                    Key Points Judge Evaluates:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentQuestion.keyPoints.map((kp, kIdx) => (
                      <span key={kIdx} className="bg-white text-emerald-900 px-2 py-0.5 rounded text-[11px] font-medium border border-emerald-200">
                        ✓ {kp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Question Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setShowModelAnswer(false);
                setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1));
              }}
              disabled={currentQuestionIdx === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                currentQuestionIdx === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            <button
              onClick={() => {
                setShowModelAnswer(false);
                setCurrentQuestionIdx(Math.min(questions.length - 1, currentQuestionIdx + 1));
              }}
              disabled={currentQuestionIdx === questions.length - 1}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                currentQuestionIdx === questions.length - 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              <span>Next Judge Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. ARBA 8-Point Physical Inspection Simulator */}
      {activeTab === 'inspection_sim' && (
        <TableInspectionSim />
      )}

      {/* 3. Interactive Breed Pose Simulator */}
      {activeTab === 'pose_sim' && (
        <BreedPoseCanvas />
      )}

      {/* 4. Timed 15s Judge Defense Ring */}
      {activeTab === 'judge_defense' && (
        <JudgeDefenseRing />
      )}
    </div>
  );
}
