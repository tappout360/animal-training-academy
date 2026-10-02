// WarrenWise Animal Academy - Herd Trail Quest
// Multi-Mode Educational Challenge Modal with Strict Care Boundaries & AI Hints

import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, AlertCircle, Bot, Sparkles, 
  HelpCircle, ChevronRight, Award, Compass, Heart, Shield,
  RotateCcw, CheckSquare, Square, Volume2, Mic
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
  
  // Mystery Stall: Progressive Clues
  const [revealedClueCount, setRevealedClueCount] = useState(1);

  // Oral Prompt / Echo Answer state
  const [oralText, setOralText] = useState('');
  const [checkedRubricIndices, setCheckedRubricIndices] = useState([]);
  const [oralDelivered, setOralDelivered] = useState(false);

  // Showmanship Sequence interactive ordering
  const [orderedStepIds, setOrderedStepIds] = useState([]);

  useEffect(() => {
    if (node?.sequenceItems) {
      // Scramble or initialize
      setOrderedStepIds([]);
    }
  }, [node]);

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

  const handleAddSequenceStep = (item) => {
    if (hasSubmitted) return;
    if (!orderedStepIds.includes(item.step)) {
      setOrderedStepIds([...orderedStepIds, item.step]);
    }
  };

  const handleResetSequence = () => {
    if (hasSubmitted) return;
    setOrderedStepIds([]);
  };

  const handleToggleRubric = (idx) => {
    if (checkedRubricIndices.includes(idx)) {
      setCheckedRubricIndices(checkedRubricIndices.filter(i => i !== idx));
    } else {
      setCheckedRubricIndices([...checkedRubricIndices, idx]);
    }
  };

  const handleSubmitAnswer = () => {
    if (node.options && selectedOptionIndex === null) return;
    if (node.sequenceItems && orderedStepIds.length < node.sequenceItems.length) return;
    if (node.expectedAnswer && !oralDelivered) {
      setOralDelivered(true);
      return;
    }
    setHasSubmitted(true);
  };

  const handleFinish = () => {
    let isCorrect = true;
    let conditionDelta = 10;
    let suppliesDelta = {};
    let bondXpDelta = 25;

    if (node.options && selectedOptionIndex !== null) {
      const selectedOption = node.options[selectedOptionIndex];
      isCorrect = !!selectedOption.isCorrect;
      conditionDelta = selectedOption.effect?.condition ?? (isCorrect ? 10 : -5);
      suppliesDelta = selectedOption.effect?.supplies ?? {};
      bondXpDelta = selectedOption.effect?.bond ?? (isCorrect ? 25 : 10);
    } else if (node.sequenceItems) {
      // Check if ordered in natural 1, 2, 3...
      const expected = node.sequenceItems.map(item => item.step);
      isCorrect = orderedStepIds.every((val, idx) => val === expected[idx]);
      conditionDelta = isCorrect ? 15 : -5;
      bondXpDelta = isCorrect ? 35 : 15;
    } else if (node.expectedAnswer) {
      isCorrect = checkedRubricIndices.length >= (node.rubric?.length || 1);
      conditionDelta = 15;
      bondXpDelta = 40;
    }

    onComplete({
      nodeId: node.id,
      mile: node.mile,
      isCorrect,
      conditionDelta,
      suppliesDelta,
      bondXpDelta
    });
  };

  const selectedOpt = node.options && selectedOptionIndex !== null ? node.options[selectedOptionIndex] : null;

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
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Trail Investigation Clues ({revealedClueCount} of {node.clues.length}):</span>
              </div>
              {revealedClueCount < node.clues.length && (
                <button
                  onClick={() => setRevealedClueCount(prev => Math.min(node.clues.length, prev + 1))}
                  className="text-[10px] font-bold text-amber-800 bg-amber-200/60 hover:bg-amber-200 px-2 py-0.5 rounded-lg transition"
                >
                  Reveal Next Clue
                </button>
              )}
            </div>
            <ul className="space-y-1.5 text-xs text-amber-900">
              {node.clues.slice(0, revealedClueCount).map((c, i) => (
                <li key={i} className="flex items-start gap-1.5 animate-fadeIn">
                  <span className="font-bold text-amber-700">•</span>
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

        {/* Showmanship Sequence Interactive Ordering */}
        {node.sequenceItems && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Click items in the correct order to place them in sequence:</span>
              {orderedStepIds.length > 0 && !hasSubmitted && (
                <button
                  onClick={handleResetSequence}
                  className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Order
                </button>
              )}
            </div>

            {/* Placed Sequence Slots */}
            <div className="space-y-2 p-3 bg-slate-50 border border-slate-200 rounded-2xl min-h-[100px]">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Your Procedure Order ({orderedStepIds.length} of {node.sequenceItems.length} steps placed):
              </div>
              {orderedStepIds.map((stepNum, idx) => {
                const item = node.sequenceItems.find(i => i.step === stepNum);
                return (
                  <div 
                    key={idx}
                    className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-semibold text-emerald-950 flex items-center gap-2.5 animate-fadeIn"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item?.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Available Steps Tray */}
            {!hasSubmitted && orderedStepIds.length < node.sequenceItems.length && (
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Select Next Step:
                </div>
                {node.sequenceItems
                  .filter(item => !orderedStepIds.includes(item.step))
                  .map(item => (
                    <button
                      key={item.step}
                      onClick={() => handleAddSequenceStep(item)}
                      className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs text-slate-700 font-medium transition flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                        +
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Oral Prompt / Echo Answer Interactive Defense */}
        {node.expectedAnswer && (
          <div className="space-y-3">
            {!oralDelivered ? (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-600 block">
                  Speak or type your oral defense response to the judge:
                </label>
                <textarea
                  value={oralText}
                  onChange={(e) => setOralText(e.target.value)}
                  placeholder="e.g. Judge, rabbits have 4 toenails on each rear foot..."
                  rows={3}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-emerald-600"
                />
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-500 text-[10px] uppercase tracking-wider">Your Spoken Answer:</div>
                  <p className="italic font-medium">"{oralText || '(Spoken directly to the judge)'}"</p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                  <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-blue-600" />
                    <span>Official Standard Judge Response:</span>
                  </div>
                  <p className="text-xs text-blue-800 font-medium italic">"{node.expectedAnswer}"</p>
                </div>

                {node.rubric && (
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-slate-800">
                      Judge Self-Evaluation Rubric (Check all that apply):
                    </div>
                    <div className="space-y-1.5">
                      {node.rubric.map((r, i) => {
                        const isChecked = checkedRubricIndices.includes(i);
                        return (
                          <button
                            key={i}
                            onClick={() => handleToggleRubric(i)}
                            className="w-full text-left flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-xs text-slate-700 font-medium transition"
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                            <span className={isChecked ? 'font-bold text-emerald-900' : ''}>{r}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
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
              Always prioritize your companion animal’s natural physiological needs: fresh hydration, digestible fiber, calm stress reduction, and safe certified gear!
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
            node.expectedAnswer && !oralDelivered ? (
              <button
                onClick={handleSubmitAnswer}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs shadow-xs transition"
              >
                Deliver Oral Defense
              </button>
            ) : (
              <button
                onClick={handleSubmitAnswer}
                disabled={
                  (node.options && selectedOptionIndex === null) ||
                  (node.sequenceItems && orderedStepIds.length < node.sequenceItems.length)
                }
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-xs transition"
              >
                Submit Answer
              </button>
            )
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
