// WarrenWise Animal Academy - Morning Barn Check Component
// Faithfully matches Mockup 1 left pane (media_1791095312847.png)
// Supports Day-1 to Day-7 Habit Loop Script (Living Herd Quest) for Rabbit Region
// Companion: Barnaby (Holland Lop)
// Care rules: No medication/dosing actions; welfare-first choices only.

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Heart, Droplets, Wheat, ShieldCheck, Sun, 
  ChevronRight, CheckCircle2, AlertTriangle, Flame, Award, Volume2, HelpCircle,
  Trophy, RotateCcw, ArrowRight, Shield, Check, Star
} from 'lucide-react';
import { soundEffects } from '../../../utils/audioEffects';
import { RABBIT_TRAIL_DAYS, getRabbitDayScript } from '../../../data/game/rabbitTrailScript';

export default function MorningBarnCheck({
  dailyStatus = {},
  questState = {},
  trailPack,
  onResolveNeed,
  onResolveRabbitDay,
  onOpenTrailRun,
  onOpenAiTrainer
}) {
  const [activeDayNumber, setActiveDayNumber] = useState(dailyStatus.currentDayNumber || 1);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [sequenceOrder, setSequenceOrder] = useState([]);
  const [stationAnswers, setStationAnswers] = useState({});
  const [activeStationIdx, setActiveStationIdx] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [resolutionResult, setResolutionResult] = useState(null);

  const {
    todayNeed,
    currentMood = { label: 'Joyful & Eager', emoji: '😊', desc: 'Companion is alert and curious.' },
    isWarmReentry = false,
    welcomeMessage = '',
    cosmeticTokens = 25,
    masteryStars = 8,
    completedDayNumbers = [],
    herdMemory = { consistency: 80, ethics: 85, heatSafety: 90, handling: 75, biosecurity: 80 }
  } = dailyStatus;

  // Retrieve active script for the selected day
  const currentDayScript = getRabbitDayScript(activeDayNumber);

  useEffect(() => {
    // Reset inputs when switching active day
    setSelectedOptionId(null);
    setSequenceOrder([]);
    setStationAnswers({});
    setActiveStationIdx(0);
    setIsAnswering(false);
    setResolutionResult(null);
  }, [activeDayNumber]);

  const conditionScore = questState.conditionScore || 85;
  const bondLevel = questState.herdBond?.level || 1;
  const bondXp = (questState.herdBond?.xp || 0) % 100;
  const supplies = questState.supplies || { water: 50, feed: 60, bedding: 40 };

  const isCurrentDayDone = completedDayNumbers.includes(activeDayNumber);

  const handlePetCompanion = () => {
    soundEffects.playTap();
  };

  const handleStartChallenge = () => {
    soundEffects.playTap();
    setIsAnswering(true);
  };

  // Day 4: Handling sequence ordering
  const handleToggleSequenceStep = (stepNumber) => {
    soundEffects.playTap();
    if (sequenceOrder.includes(stepNumber)) {
      setSequenceOrder(sequenceOrder.filter(s => s !== stepNumber));
    } else {
      setSequenceOrder([...sequenceOrder, stepNumber]);
    }
  };

  // Day 7: Station answers
  const handleSelectStationAnswer = (stationId, optionText) => {
    soundEffects.playTap();
    setStationAnswers(prev => ({ ...prev, [stationId]: optionText }));
  };

  const handleSubmit = () => {
    let result = null;

    if (onResolveRabbitDay) {
      result = onResolveRabbitDay({
        dayNumber: activeDayNumber,
        selectedOptionId,
        sequenceOrder,
        stationAnswers
      });
    } else if (onResolveNeed && todayNeed) {
      result = onResolveNeed(todayNeed.id, selectedOptionId);
    }

    setResolutionResult(result);

    if (result?.isCorrect) {
      if (activeDayNumber === 7) {
        soundEffects.playLevelUpFanfare();
      } else {
        soundEffects.playSuccessChime();
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/50 rounded-3xl p-5 sm:p-7 border border-amber-200/80 shadow-md space-y-6">
      
      {/* Top Banner / Warm Re-Entry Message */}
      {isWarmReentry && (
        <div className="p-3.5 bg-amber-100/80 border border-amber-300 rounded-2xl flex items-center gap-3 text-amber-950 text-xs sm:text-sm font-semibold animate-fadeIn">
          <span className="text-xl">🏡</span>
          <div className="flex-1">
            <span className="font-bold block text-amber-900">Warm Welcome Back!</span>
            <span>{welcomeMessage}</span>
          </div>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌅</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Morning Barn Check</h2>
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300">
              Living Herd Quest
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Day-1 to Day-7 Habit Loop: What you learn today changes your herd’s story and condition tomorrow.
          </p>
        </div>

        {/* Dual Reward Spine Wallet */}
        <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
            <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{cosmeticTokens} Tokens</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-xs font-bold text-indigo-600">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>{masteryStars} Stars</span>
          </div>
        </div>
      </div>

      {/* Day-1 to Day-7 Habit Loop Stepper */}
      <div className="p-3 bg-white/90 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs font-black text-slate-700">
          <span className="flex items-center gap-1.5">
            <span>📅</span>
            <span>Rabbit Trail Habit Loop (Week 1):</span>
          </span>
          <span className="text-amber-800 font-bold">
            Day {activeDayNumber} of 7 • {currentDayScript.seasonChapter}
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {RABBIT_TRAIL_DAYS.map((d) => {
            const isSelected = d.dayNumber === activeDayNumber;
            const isCompleted = completedDayNumbers.includes(d.dayNumber);

            return (
              <button
                key={d.dayNumber}
                onClick={() => {
                  soundEffects.playTap();
                  setActiveDayNumber(d.dayNumber);
                }}
                className={`py-2 px-1 sm:px-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 border ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 ring-2 ring-amber-300 font-black shadow-xs'
                    : isCompleted
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 font-bold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-mono">D{d.dayNumber}</span>
                  {isCompleted && <span className="text-[10px] text-emerald-700">✓</span>}
                  {d.dayNumber === 7 && <span className="text-[10px]">🏆</span>}
                </div>
                <span className="text-[9px] sm:text-[10px] truncate max-w-[42px] sm:max-w-[70px]">
                  {d.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Left Companion Stage & Herd Memory, Right Active Day Challenge Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Big Companion Avatar & Meters (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-5 text-center">
          
          {/* Companion Stage */}
          <div 
            onClick={handlePetCompanion}
            className="relative bg-gradient-to-b from-sky-100/70 via-emerald-50/50 to-amber-50 rounded-2xl p-6 border border-slate-100 overflow-hidden cursor-pointer group transition hover:shadow-inner"
            title="Click to gently pet Barnaby!"
          >
            <div className="absolute top-2 right-2 text-amber-400 opacity-60">
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>

            {/* Companion Visual Icon / Avatar */}
            <div className="w-32 h-32 mx-auto rounded-3xl bg-white shadow-md border-2 border-emerald-400/40 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300 relative">
              <span>🐇</span>
              
              {/* Bandana / Outfit Flair badge */}
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-xs border border-white">
                🧣 Scout
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-black text-slate-900">
                Barnaby
              </h3>
              <p className="text-xs font-bold text-slate-500">
                Holland Lop Companion
              </p>
              <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 bg-white/90">
                <span>{currentMood.emoji}</span>
                <span className="text-slate-700">{currentMood.label}</span>
              </div>
            </div>

            {/* Daily Barn Check Story Narrative */}
            <div className="mt-3 p-2.5 bg-white/80 rounded-xl border border-amber-200/60 text-xs text-slate-700 italic font-medium leading-relaxed">
              "{currentDayScript.barnCheckStory}"
            </div>
          </div>

          {/* Condition & Bond Meters */}
          <div className="space-y-3">
            {/* Condition Meter */}
            <div className="space-y-1.5 text-left bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-700 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Herd Condition Score</span>
                </span>
                <span className="text-emerald-700 font-black">{conditionScore}%</span>
              </div>
              <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-700 shadow-inner"
                  style={{ width: `${Math.min(100, Math.max(10, conditionScore))}%` }}
                />
              </div>
            </div>

            {/* Herd Bond Level */}
            <div className="space-y-1.5 text-left bg-indigo-50/60 p-3.5 rounded-2xl border border-indigo-100">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-indigo-900 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Companion Bond Level {bondLevel}</span>
                </span>
                <span className="text-indigo-700 font-mono text-[11px]">{bondXp} / 100 XP</span>
              </div>
              <div className="h-2.5 w-full bg-indigo-200/60 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                  style={{ width: `${bondXp}%` }}
                />
              </div>
            </div>
          </div>

          {/* Herd Memory Stewardship Traits */}
          <div className="space-y-2 text-left bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100">
            <div className="text-[11px] font-black uppercase tracking-wider text-purple-900 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-purple-600" />
              <span>Herd Stewardship Memory</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white p-2 rounded-xl border border-purple-100">
                <span className="text-slate-500 block text-[10px]">Consistency</span>
                <span className="font-black text-emerald-700">{herdMemory.consistency || 80}%</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-100">
                <span className="text-slate-500 block text-[10px]">Heat Safety</span>
                <span className="font-black text-amber-700">{herdMemory.heatSafety || 90}%</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-100">
                <span className="text-slate-500 block text-[10px]">Handling</span>
                <span className="font-black text-indigo-700">{herdMemory.handling || 75}%</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-100">
                <span className="text-slate-500 block text-[10px]">Ethics</span>
                <span className="font-black text-purple-700">{herdMemory.ethics || 85}%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Active Day Challenge Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-5">
          
          {/* Card Top Pill */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
              Day {currentDayScript.dayNumber}: {currentDayScript.title}
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              Need: {currentDayScript.herdNeed}
            </span>
          </div>

          {/* Prompt Banner */}
          <div className="p-4 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-sky-500/10 rounded-2xl border border-amber-200">
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-800">
              {currentDayScript.subtitle}
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1 leading-snug">
              {currentDayScript.prompt}
            </h4>
          </div>

          {/* Reward Projection Pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-emerald-700">On Correct Welfare Stewardship:</span>
            <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-mono">
              +{currentDayScript.correctOutcome.conditionDelta}% Condition
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-mono">
              +{currentDayScript.correctOutcome.bondDelta} Bond XP
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md font-mono">
              {currentDayScript.correctOutcome.rewards.mastery}
            </span>
          </div>

          {/* Challenge Body */}
          {!resolutionResult ? (
            <div className="space-y-4">
              {!isAnswering ? (
                <div className="text-center py-4 space-y-3">
                  <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                    {activeDayNumber === 7
                      ? 'Show-Ring Saturday Finale: 3 stations testing Water & Shade, Breed ID, and Table Handling sequence!'
                      : 'Take a quick 2-minute stewardship check to keep Barnaby comfortable, safe, and show-ready.'}
                  </p>
                  <button
                    onClick={handleStartChallenge}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-2xl text-sm font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{activeDayNumber === 7 ? 'Enter Show-Ring Saturday Mini Sim 🏆' : 'I’ll Keep Them Safe! 🐾'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  
                  {/* Case 1: Standard Multi-Choice (Days 1, 2, 3, 5, 6) */}
                  {currentDayScript.options && (
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold text-slate-700">Choose the best response:</div>
                      {currentDayScript.options.map((opt, idx) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            soundEffects.playTap();
                            setSelectedOptionId(opt.id);
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-start gap-3 cursor-pointer ${
                            selectedOptionId === opt.id
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                            selectedOptionId === opt.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1 leading-relaxed">{opt.text}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Case 2: Showmanship Sequence Ordering (Day 4) */}
                  {currentDayScript.challengeType === 'showmanship_sequence' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>Tap steps in the proper handling order (1 to 4):</span>
                        <button
                          onClick={() => setSequenceOrder([])}
                          className="text-[11px] text-slate-400 hover:text-slate-600 flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset Order</span>
                        </button>
                      </div>

                      {/* Chosen sequence pills */}
                      <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 min-h-[46px] flex flex-wrap items-center gap-2">
                        {sequenceOrder.length === 0 ? (
                          <span className="text-xs text-slate-400 italic">No steps selected yet. Tap below in order.</span>
                        ) : (
                          sequenceOrder.map((stepNum, idx) => {
                            const stepObj = currentDayScript.sequenceSteps.find(s => s.step === stepNum);
                            return (
                              <span key={stepNum} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">
                                <span>{idx + 1}. {stepObj?.text}</span>
                              </span>
                            );
                          })
                        )}
                      </div>

                      {/* Available steps buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentDayScript.sequenceSteps.map((stepObj) => {
                          const isPicked = sequenceOrder.includes(stepObj.step);
                          return (
                            <button
                              key={stepObj.step}
                              onClick={() => handleToggleSequenceStep(stepObj.step)}
                              disabled={isPicked}
                              className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                                isPicked 
                                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                                  : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 cursor-pointer shadow-2xs'
                              }`}
                            >
                              {stepObj.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Case 3: Mini Fair Day Sim (Day 7) */}
                  {currentDayScript.challengeType === 'mini_fair_sim' && (
                    <div className="space-y-4">
                      {/* Station tabs */}
                      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                        {currentDayScript.stations.map((st, idx) => (
                          <button
                            key={st.id}
                            onClick={() => setActiveStationIdx(idx)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                              activeStationIdx === idx 
                                ? 'bg-purple-700 text-white' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            <span>Station {idx + 1}</span>
                            {stationAnswers[st.id] && <span className="ml-1 text-emerald-400">✓</span>}
                          </button>
                        ))}
                      </div>

                      {/* Active station content */}
                      {(() => {
                        const st = currentDayScript.stations[activeStationIdx];
                        return (
                          <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="text-xs font-black text-purple-900 uppercase">
                              {st.stationName} ({st.category})
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-slate-800">
                              {st.prompt}
                            </p>
                            <div className="space-y-2">
                              {st.options.map((opt, oIdx) => (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectStationAnswer(st.id, opt.text)}
                                  className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer ${
                                    stationAnswers[st.id] === opt.text
                                      ? 'bg-purple-50 border-purple-500 text-purple-950 ring-2 ring-purple-500/20'
                                      : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                                  }`}
                                >
                                  {opt.text}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={
                        (currentDayScript.options && !selectedOptionId) ||
                        (currentDayScript.challengeType === 'showmanship_sequence' && sequenceOrder.length < 4) ||
                        (currentDayScript.challengeType === 'mini_fair_sim' && Object.keys(stationAnswers).length < 3)
                      }
                      className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black shadow-xs transition flex items-center justify-center gap-2 ${
                        (currentDayScript.options && selectedOptionId) ||
                        (currentDayScript.challengeType === 'showmanship_sequence' && sequenceOrder.length === 4) ||
                        (currentDayScript.challengeType === 'mini_fair_sim' && Object.keys(stationAnswers).length === 3)
                          ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Day {activeDayNumber} Stewardship Decision</span>
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            /* Result & Herd Reaction State */
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300 rounded-3xl space-y-4 animate-fadeIn">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-900 font-black text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{resolutionResult.isCorrect ? `Day ${activeDayNumber} Mastered!` : 'Learning Moment Recorded'}</span>
                </div>
                {resolutionResult.practiceRibbon && (
                  <span className={`text-xs font-black px-3 py-1 rounded-full border ${resolutionResult.practiceRibbon.color}`}>
                    {resolutionResult.practiceRibbon.ribbon}
                  </span>
                )}
              </div>

              {/* Herd Reaction Box */}
              <div className="p-4 bg-white/90 rounded-2xl border border-emerald-200 space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <span>🐾</span>
                  <span>Companion Immediate Reaction:</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed italic">
                  "{resolutionResult.herdReaction}"
                </p>
              </div>

              {/* Feedback text */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {resolutionResult.feedback}
              </p>

              {/* Dual Rewards Payout */}
              <div className="p-3 bg-emerald-100/60 rounded-xl border border-emerald-200 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-emerald-950">
                <div className="flex items-center gap-2">
                  <span>✨ Earned Rewards:</span>
                  <span className="bg-white px-2 py-0.5 rounded-md font-mono text-emerald-800">
                    +{resolutionResult.earnedStars} Star
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-md font-mono text-amber-800">
                    +{resolutionResult.earnedTokens} Tokens
                  </span>
                </div>
                <span className="text-indigo-800">
                  {currentDayScript.correctOutcome.rewards.cosmeticSeed}
                </span>
              </div>

              {/* Tomorrow Tease */}
              <div className="p-3 bg-slate-900 text-white rounded-xl text-xs font-medium flex items-center justify-between gap-2">
                <span className="text-amber-400 font-bold">Tomorrow Tease:</span>
                <span className="truncate">{resolutionResult.tomorrowTease}</span>
              </div>

              {/* Next Navigation Action */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                {activeDayNumber < 7 ? (
                  <button
                    onClick={() => {
                      soundEffects.playTap();
                      setActiveDayNumber(activeDayNumber + 1);
                    }}
                    className="w-full sm:flex-1 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Proceed to Day {activeDayNumber + 1} ({getRabbitDayScript(activeDayNumber + 1).title})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenTrailRun}
                    className="w-full sm:flex-1 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Week 1 Complete! View Family Barn Board &amp; Overworld 🏆</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onOpenTrailRun}
                  className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <span>Explore Trail</span>
                </button>
              </div>

            </div>
          )}

          {/* 4-H Non-Prescriptive Welfare Guarantee */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Academy Care Rules: Strictly welfare-first choices. No medication/dosing actions or treatments appear in challenges.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
