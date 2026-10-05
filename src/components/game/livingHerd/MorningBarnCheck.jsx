// WarrenWise Animal Academy - Morning Barn Check Component
// Faithfully matches Mockup 1 left pane (media_1791095312847.png)
// Displays large companion avatar, mood, condition meter, bond level, supplies, and today's care challenge.

import React, { useState } from 'react';
import { 
  Sparkles, Heart, Droplets, Wheat, ShieldCheck, Sun, 
  ChevronRight, CheckCircle2, AlertTriangle, Flame, Award, Volume2, HelpCircle 
} from 'lucide-react';
import { soundEffects } from '../../../utils/audioEffects';

export default function MorningBarnCheck({
  dailyStatus,
  questState,
  trailPack,
  onResolveNeed,
  onOpenTrailRun,
  onOpenAiTrainer
}) {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [resolutionResult, setResolutionResult] = useState(null);

  const {
    todayNeed,
    currentMood,
    isWarmReentry,
    isCompletedToday,
    welcomeMessage,
    memoryTraits,
    cosmeticTokens,
    masteryStars
  } = dailyStatus;

  const conditionScore = questState.conditionScore || 85;
  const bondLevel = questState.herdBond?.level || 1;
  const bondXp = (questState.herdBond?.xp || 0) % 100;
  const supplies = questState.supplies || { water: 50, feed: 60, bedding: 40 };

  const handlePetCompanion = () => {
    soundEffects.playTap();
  };

  const handleStartChallenge = () => {
    soundEffects.playTap();
    setIsAnswering(true);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return;
    const result = onResolveNeed(todayNeed.id, selectedOptionId);
    setResolutionResult(result);
    if (result.isCorrect) {
      soundEffects.playSuccessChime();
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
              Daily Living Herd
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            What you learn today changes your herd’s story and condition tomorrow.
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

      {/* Main Grid: Left Companion Portrait & Meters, Right Today's Care Need */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Big Companion Avatar & Meters (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-5 text-center">
          
          {/* Companion Stage */}
          <div 
            onClick={handlePetCompanion}
            className="relative bg-gradient-to-b from-sky-100/70 via-emerald-50/50 to-amber-50 rounded-2xl p-6 border border-slate-100 overflow-hidden cursor-pointer group transition hover:shadow-inner"
            title="Click to gently pet your companion!"
          >
            {/* Weather / Sun ray accent */}
            <div className="absolute top-2 right-2 text-amber-400 opacity-60">
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>

            {/* Companion Visual Icon / Avatar */}
            <div className="w-32 h-32 mx-auto rounded-3xl bg-white shadow-md border-2 border-emerald-400/40 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300 relative">
              <span>{trailPack?.icon || '🐇'}</span>
              
              {/* Bandana / Outfit Flair badge */}
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-xs border border-white">
                🧣 Scout
              </div>
            </div>

            <div className="mt-3">
              <h3 className="text-base font-black text-slate-800">
                {trailPack?.name || 'Prairie Companion'}
              </h3>
              <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 bg-white/90">
                <span>{currentMood.emoji}</span>
                <span className="text-slate-700">{currentMood.label}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-2 italic px-2">
              "{currentMood.desc}"
            </p>
          </div>

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

          {/* Supplies Quick Bar */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="p-2 bg-sky-50 rounded-xl border border-sky-200">
              <Droplets className="w-4 h-4 text-sky-600 mx-auto" />
              <div className="text-[10px] text-slate-500 font-bold mt-1">Water</div>
              <div className="text-xs font-black text-sky-800">{supplies.water}%</div>
            </div>
            <div className="p-2 bg-amber-50 rounded-xl border border-amber-200">
              <Wheat className="w-4 h-4 text-amber-600 mx-auto" />
              <div className="text-[10px] text-slate-500 font-bold mt-1">Timothy</div>
              <div className="text-xs font-black text-amber-800">{supplies.feed}%</div>
            </div>
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto" />
              <div className="text-[10px] text-slate-500 font-bold mt-1">Bedding</div>
              <div className="text-xs font-black text-emerald-800">{supplies.bedding}%</div>
            </div>
          </div>

        </div>

        {/* Right Column: Today's Daily Barn Need Challenge Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-5">
          
          <div className="flex items-center justify-between">
            <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
              Today’s Barn Need
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Category: {todayNeed.category}
            </span>
          </div>

          {/* Need Title & Banner */}
          <div className="p-4 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-sky-500/10 rounded-2xl border border-amber-200">
            <h4 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>🌾</span>
              <span>{todayNeed.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-2 leading-relaxed">
              {todayNeed.prompt}
            </p>
          </div>

          {/* Dual Reward Incentive Tag */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-emerald-700">Rewards on safe resolution:</span>
            <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-mono">+{todayNeed.rewards.condition}% Condition</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-mono">+{todayNeed.rewards.bondXp} Bond XP</span>
            <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-mono">+{todayNeed.rewards.tokens} Cosmetic Tokens</span>
          </div>

          {/* Resolution Area */}
          {!isCompletedToday && !resolutionResult ? (
            <div className="space-y-4">
              {!isAnswering ? (
                <div className="text-center py-4 space-y-3">
                  <p className="text-xs text-slate-500">
                    Your companion relies on your knowledge to stay comfortable and show-ready.
                  </p>
                  <button
                    onClick={handleStartChallenge}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-2xl text-sm font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>I’ll Keep Them Safe! 🐾</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3 animate-fadeIn">
                  <div className="text-xs font-bold text-slate-700">Select the safest care action:</div>
                  <div className="space-y-2.5">
                    {todayNeed.options.map((opt, idx) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-start gap-3 ${
                          selectedOptionId === opt.id
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                          selectedOptionId === opt.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt.text}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedOptionId}
                      className={`flex-1 py-3 rounded-2xl text-xs sm:text-sm font-black shadow-xs transition flex items-center justify-center gap-2 ${
                        selectedOptionId
                          ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Stewardship Choice</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Completed Today / Just Resolved View */
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-emerald-800 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Today’s Barn Check Complete!</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {resolutionResult ? resolutionResult.feedback : "You have already completed today's Morning Barn Check. Your herd is well-fed, hydrated, and ready for adventure!"}
              </p>
              
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center justify-between">
                <span>Tomorrow’s Preview:</span>
                <span className="font-bold text-amber-700">Timberline Ridge Weather Check</span>
              </div>

              <button
                onClick={onOpenTrailRun}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-black transition flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Hit the Overland Trail Caravan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* 4-H Non-Prescriptive Safety Guarantee */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Academy Safety Rule: Challenges teach daily observation, clean hydration, and low-stress handling. Never administer human medicines or unauthorized treatments.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
