// WarrenWise Animal Academy - Herd Trail Quest
// Multi-Mode Educational Challenge Modal with Strict Care Boundaries & AI Hints

import React, { useState } from 'react';
import { 
  X, CheckCircle2, AlertCircle, Bot, Sparkles, 
  HelpCircle, ChevronRight, Award, Compass, Heart, Shield
} from 'lucide-react';
import FairDaySimFinale from './FairDaySimFinale';

export default function ChallengeModal({
  node,
  trailPack,
  questState,
  onComplete,
  onClose,
  onOpenAiTrainer
}) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showAiHint, setShowAiHint] = useState(false);
  const [userSequence, setUserSequence] = useState([]);
  const [echoSubmitted, setEchoSubmitted] = useState(false);

  if (!node) return null;

  // If node is the Fair Day Sim Finale, route to specialized component
  if (node.type === 'fair_sim_finale') {
    return (
      <FairDaySimFinale
        node={node}
        trailPack={trailPack}
        onComplete={(results) => {
          onComplete({
            nodeId: node.id,
            mile: node.mile,
            isCorrect: true,
            conditionDelta: +20,
            suppliesDelta: { grooming: +15, firstAidKnowledge: +20 },
            bondXpDelta: 50
          });
        }}
        onClose={onClose}
      />
    );
  }

  const handleSelectOption = (idx) => {
    if (hasSubmitted) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null && !node.sequenceItems && !node.expectedAnswer) return;
    setHasSubmitted(true);
  };

  const handleFinish = () => {
    const selectedOption = node.options ? node.options[selectedOptionIndex] : null;
    const isCorrect = selectedOption ? !!selectedOption.isCorrect : true;

    onComplete({
      nodeId: node.id,
      mile: node.mile,
      isCorrect,
      conditionDelta: selectedOption?.effect?.condition || (isCorrect ? 10 : -5),
      suppliesDelta: selectedOption?.effect?.supplies || {},
      bondXpDelta: selectedOption?.effect?.bond || (isCorrect ? 25 : 10)
    });
  };

  const selectedOpt = node.options ? node.options[selectedOptionIndex] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden space-y-6 p-6 sm:p-8 animate-fadeIn">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{trailPack.companion.avatarEmoji || '🐾'}</span>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                Mile {node.mile} • {node.type.replace('_', ' ')}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{node.title}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Scenario */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {node.narrative}
        </div>

        {/* Mystery Clues (if applicable) */}
        {node.clues && (
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
            <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Trail Investigation Clues:</span>
            </div>
            <ul className="space-y-1 text-xs text-amber-800">
              {node.clues.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenge Prompt */}
        <div className="text-sm font-bold text-slate-900">
          {node.prompt}
        </div>

        {/* Showmanship Sequence Challenge */}
        {node.sequenceItems && (
          <div className="space-y-2">
            <div className="text-xs text-slate-500 italic mb-1">
              Official standardized procedure order:
            </div>
            <div className="space-y-2">
              {node.sequenceItems.map((item) => (
                <div 
                  key={item.step} 
                  className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-950 flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-black shrink-0">
                    {item.step}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Oral Prompt Challenge */}
        {node.expectedAnswer && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
              <div className="text-xs font-bold text-blue-900">Official Expected Judge Response:</div>
              <p className="text-xs text-blue-800 font-medium italic">"{node.expectedAnswer}"</p>
            </div>
            {node.rubric && (
              <div className="text-xs text-slate-500 space-y-1">
                <span className="font-bold text-slate-700">Judge Evaluation Rubric:</span>
                <ul className="list-disc pl-5 space-y-0.5">
                  {node.rubric.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Multiple Choice Options (Standard, Care Choice, Supply, Ethics) */}
        {node.options && (
          <div className="space-y-2.5">
            {node.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              return (
                <button
                  key={idx}
                  disabled={hasSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-start gap-3 ${
                    isSelected
                      ? hasSubmitted
                        ? opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20'
                          : 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20'
                        : 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Answer Feedback Strip (After Submission) */}
        {hasSubmitted && selectedOpt && (
          <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1 ${
            selectedOpt.isCorrect 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <div className="font-bold flex items-center gap-1.5">
              {selectedOpt.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Excellent Stewardship!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Stewardship Coaching Tip:</span>
                </>
              )}
            </div>
            <p>{selectedOpt.feedback || selectedOpt.effect?.feedback || 'Your animal stewardship decision has been recorded on the trail.'}</p>
          </div>
        )}

        {/* AI Hint Drawer */}
        {showAiHint && (
          <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-purple-800">
              <Bot className="w-4 h-4 text-purple-600" />
              <span>WarrenWise AI Trail Coach Hint</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Always prioritize your companion animal’s natural physiological needs: fresh hydration, digestible fiber, stress reduction, and safe certified gear!
            </p>
          </div>
        )}

        {/* Modal Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={() => setShowAiHint(!showAiHint)}
            className="flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200 transition"
          >
            <Bot className="w-4 h-4" />
            <span>{showAiHint ? 'Hide AI Hint' : 'Need AI Hint?'}</span>
          </button>

          {!hasSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedOptionIndex === null && !node.sequenceItems && !node.expectedAnswer}
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-xs transition"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center justify-center gap-1.5"
            >
              <span>Continue Down the Trail</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
