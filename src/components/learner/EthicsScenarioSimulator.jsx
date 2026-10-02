// WarrenWise Youth Animal Training Academy - Ethics & Welfare Dilemma Simulator

import React, { useState } from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react';
import { ETHICS_SCENARIOS } from '../../data/ethicsScenarios';

export default function EthicsScenarioSimulator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [characterScores, setCharacterScores] = useState({});

  const scenario = ETHICS_SCENARIOS[activeIdx];

  const handleSelectChoice = (choice) => {
    if (hasEvaluated) return;
    setSelectedChoice(choice);
    setHasEvaluated(true);
    setCharacterScores(prev => ({ ...prev, [scenario.id]: choice.characterScore }));
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setHasEvaluated(false);
    if (activeIdx < ETHICS_SCENARIOS.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      setActiveIdx(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-yellow-900 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
          <HeartHandshake className="w-4 h-4 text-amber-400" />
          <span>Ethics, Character & Animal Welfare</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          Barn & Show Ring Dilemma Simulator
        </h1>
        <p className="text-amber-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Put the 4-H Pledge into action: Head, Heart, Hands, and Health. Make high-stakes ethical judgments regarding heat stress, fair play, and meat withdrawal times.
        </p>
      </div>

      {/* Main Scenario Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              {scenario.species}
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              {scenario.title}
            </h2>
          </div>
          <div className="text-xs font-bold text-slate-500">
            Dilemma {activeIdx + 1} of {ETHICS_SCENARIOS.length}
          </div>
        </div>

        {/* Story context */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl text-sm text-slate-800 leading-relaxed font-medium">
          {scenario.context}
        </div>

        {/* Choices */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            What will you do?
          </div>
          {scenario.choices.map((choice) => {
            const isSelected = selectedChoice?.id === choice.id;
            let cardClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 bg-white';

            if (hasEvaluated) {
              if (choice.characterScore > 0) {
                cardClass = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isSelected) {
                cardClass = 'border-rose-300 bg-rose-50 text-rose-950';
              } else {
                cardClass = 'border-slate-200 bg-white opacity-40 text-slate-400';
              }
            }

            return (
              <button
                key={choice.id}
                onClick={() => handleSelectChoice(choice)}
                disabled={hasEvaluated}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 shadow-2xs ${cardClass}`}
              >
                <span>{choice.text}</span>
                {hasEvaluated && choice.characterScore > 0 && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                )}
                {hasEvaluated && isSelected && choice.characterScore <= 0 && (
                  <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Outcome and Character Analysis */}
        {hasEvaluated && (
          <div className={`p-5 rounded-xl border space-y-2 animate-fadeIn ${
            selectedChoice.characterScore > 0
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">
                Verdict: {selectedChoice.verdict}
              </span>
              <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                selectedChoice.characterScore > 0 ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
              }`}>
                {selectedChoice.characterScore > 0 ? `+${selectedChoice.characterScore} Integrity XP` : `${selectedChoice.characterScore} Character Penalty`}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              {selectedChoice.outcome}
            </p>
          </div>
        )}

        {/* Next Scenario Button */}
        {hasEvaluated && (
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              className="bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all"
            >
              <span>{activeIdx < ETHICS_SCENARIOS.length - 1 ? 'Next Scenario' : 'Review More Dilemmas'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
