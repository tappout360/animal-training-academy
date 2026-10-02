// WarrenWise Animal Academy - Herd Trail Quest
// Visual Pioneer Wagon Trail Viewport: Horse-drawn covered wagon, pet carrier, animal reaction & show condition HUD

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Heart, Trophy, Coins, Compass, Sun, Moon,
  Volume2, Eye, ShieldCheck, ChevronRight, MessageSquare
} from 'lucide-react';

export default function VisualWagonTrailViewport({
  questState,
  trailPack,
  onCareAction,
  onOpenOutfitter,
  onEnterShowRing,
  onAskMentor
}) {
  const [isPetting, setIsPetting] = useState(false);
  const [petMessage, setPetMessage] = useState(null);
  const [careFeedback, setCareFeedback] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);

  const companion = trailPack?.companion || {
    name: 'Barnaby the Holland Lop',
    species: 'Rabbit',
    avatarEmoji: '🐰'
  };

  const showQuality = questState.showQuality || {
    coatCondition: 85,
    vigorHydration: 90,
    temperament: 80,
    poseTraining: 75
  };

  // Calculate weighted show quality score
  const overallShowScore = Math.round(
    showQuality.coatCondition * 0.25 +
    showQuality.vigorHydration * 0.25 +
    showQuality.temperament * 0.25 +
    showQuality.poseTraining * 0.25
  );

  const handlePetCompanion = () => {
    setIsPetting(true);
    const messages = [
      `${companion.name} softly nudges your hand with happy contentment! 💖`,
      `${companion.name} wiggles their nose and relaxes their posture. ✨`,
      `${companion.name} closes their eyes, trusting your gentle care. 🌿`,
      `${companion.name} perks their ears forward in show-ready alertness! 🏆`
    ];
    setPetMessage(messages[Math.floor(Math.random() * messages.length)]);
    setTimeout(() => {
      setIsPetting(false);
      setPetMessage(null);
    }, 3500);
  };

  const handleAction = (type) => {
    if (onCareAction) {
      const result = onCareAction(type);
      setCareFeedback(result?.message || 'Care applied!');
      setTimeout(() => setCareFeedback(null), 3000);
    }
  };

  const isAtDestination = (questState.currentMile || 0) >= 85;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 text-white mb-6">
      {/* Visual Canvas / Scenery Stage */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden select-none">
        {/* Background Image: The Pioneer Wagon Trail Caravan */}
        <img 
          src="/game/trail_wagon_journey.jpg" 
          alt="Pioneer Overland Wagon Trail"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isNightMode ? 'brightness-75 contrast-125 hue-rotate-15' : 'brightness-100'
          }`}
          onError={(e) => {
            // Fallback gradient if asset loading is delayed
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Ambient Overland Trail Lighting Overlay */}
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          isNightMode 
            ? 'bg-indigo-950/40 mix-blend-multiply' 
            : 'bg-gradient-to-t from-stone-950/80 via-transparent to-amber-900/10'
        }`} />

        {/* Top HUD: Trail Points, Mile Counter, Time Lighting */}
        <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between pointer-events-auto">
          {/* Points & Currency Badge */}
          <div className="flex items-center gap-2 bg-stone-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 shadow-lg">
            <span className="text-amber-400 font-bold text-base flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-300 animate-pulse" />
              {(questState.trailPoints || 0).toLocaleString()}
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-amber-200/80 uppercase">
              Trail Points
            </span>
            <button
              onClick={onOpenOutfitter}
              className="ml-1 text-xs bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-2 py-0.5 rounded-full transition-colors shadow"
              title="Open Pioneer Outfitter Store"
            >
              Trading Post
            </button>
          </div>

          {/* Destination Milestone Counter & Weather */}
          <div className="flex items-center gap-2">
            <div className="bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700 text-xs font-medium text-stone-200 flex items-center gap-2 shadow-lg">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mile {questState.currentMile || 0} / 100</span>
              <span className="text-stone-400">·</span>
              <span className="text-emerald-300 font-semibold">Overland to Fair</span>
            </div>

            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-amber-300 transition-colors shadow"
              title={isNightMode ? "Switch to Sunny Day" : "Switch to Campfire Twilight"}
            >
              {isNightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-300" />}
            </button>
          </div>
        </div>

        {/* Dynamic Speech / Pet Message Bubble */}
        {petMessage && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white/95 text-stone-900 font-medium text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-2xl border border-rose-200 flex items-center gap-2 animate-bounce z-20">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>{petMessage}</span>
          </div>
        )}

        {/* Care Action Toast Notification */}
        {careFeedback && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-pulse z-20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{careFeedback}</span>
          </div>
        )}

        {/* Foreground Companion Interactive Avatar & Sprite Box */}
        <div 
          onClick={handlePetCompanion}
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-end gap-3 cursor-pointer group select-none z-10"
        >
          <div className="relative">
            {/* Illustrated Companion Pet Frame */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-900/90 border-2 border-amber-400/80 p-1 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/game/holland_lop_pet.jpg" 
                alt={companion.name} 
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Tap to Pet Badge */}
            <span className="absolute -bottom-2 inset-x-0 mx-auto w-max bg-amber-500 text-stone-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider group-hover:bg-amber-400">
              Tap to Pet
            </span>
          </div>

          <div className="bg-stone-900/90 backdrop-blur-md px-3 py-2 rounded-xl border border-stone-700/80 shadow-lg text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-amber-200">{companion.name}</span>
              <span className="text-[10px] bg-stone-800 text-stone-300 px-1.5 py-0.5 rounded font-mono">
                {companion.breed || companion.species}
              </span>
            </div>
            <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
              <span>Traveling in Wagon Pet Carrier</span>
              <span className="text-emerald-400 font-medium">· Ready for Ring</span>
            </div>
          </div>
        </div>

        {/* WarrenWise AI Mentor Floating Callout */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
          {isAtDestination ? (
            <button
              onClick={onEnterShowRing}
              className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-2xl border border-purple-300 flex items-center gap-2 animate-pulse hover:scale-105 transition-transform"
            >
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span>Enter Championship Show Ring!</span>
              <ChevronRight className="w-4 h-4 text-purple-200" />
            </button>
          ) : (
            <button
              onClick={onAskMentor}
              className="flex items-center gap-2 bg-stone-900/90 hover:bg-stone-800 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-500/50 text-left shadow-lg group transition-all"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-400">
                <img 
                  src="/game/warrenwise_guide.jpg" 
                  alt="WarrenWise Mentor" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                  <span>WarrenWise Scout</span>
                </div>
                <div className="text-[10px] text-stone-300">Showmanship Tips & Hints</div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Show Quality & Judging Readiness Dashboard Bar */}
      <div className="bg-stone-950 p-4 border-t border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Animal Show Quality (Judge's Evaluation Readiness)
            </h4>
            <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full font-mono font-semibold">
              Projected: {overallShowScore}/100 Pts
            </span>
          </div>
          <span className="text-[11px] text-stone-400">
            Care for your animal at rest stops to maximize your judging score at the Grand Fair!
          </span>
        </div>

        {/* 4 Pillars of Show Quality Gauges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* 1. Coat / Fur Sheen */}
          <div className="bg-stone-900/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🪮</span> Coat & Fur Sheen
              </span>
              <span className="font-bold text-amber-300">{showQuality.coatCondition}%</span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${showQuality.coatCondition}%` }}
              />
            </div>
          </div>

          {/* 2. Vigor & Hydration */}
          <div className="bg-stone-900/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🚰</span> Vigor & Hydration
              </span>
              <span className="font-bold text-cyan-300">{showQuality.vigorHydration}%</span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${showQuality.vigorHydration}%` }}
              />
            </div>
          </div>

          {/* 3. Temperament & Calmness */}
          <div className="bg-stone-900/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🌿</span> Calm Temperament
              </span>
              <span className="font-bold text-emerald-300">{showQuality.temperament}%</span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${showQuality.temperament}%` }}
              />
            </div>
          </div>

          {/* 4. Table Stance / Pose */}
          <div className="bg-stone-900/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🪞</span> Show Stance Pose
              </span>
              <span className="font-bold text-purple-300">{showQuality.poseTraining}%</span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-indigo-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${showQuality.poseTraining}%` }}
              />
            </div>
          </div>
        </div>

        {/* Interactive Quick Care Hotbar */}
        <div className="mt-3 pt-3 border-t border-stone-850 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wide mr-1">
              Trail Care:
            </span>
            <button
              onClick={() => handleAction('brush')}
              className="bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-400/50 text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Brush away trail dust (+Coat Condition)"
            >
              <span>🪮</span> Brush Coat
            </button>
            <button
              onClick={() => handleAction('water')}
              className="bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-cyan-400/50 text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Offer pure chilled spring water (+Hydration)"
            >
              <span>🚰</span> Spring Water
            </button>
            <button
              onClick={() => handleAction('comfort')}
              className="bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-emerald-400/50 text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Gentle calming handling & herbs (+Temperament)"
            >
              <span>🌿</span> Soothe & Calm
            </button>
            <button
              onClick={() => handleAction('pose')}
              className="bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-purple-400/50 text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              title="Practice table show stance (+Pose Training)"
            >
              <span>🪞</span> Practice Pose
            </button>
          </div>

          <div className="text-[11px] text-amber-300/80 font-medium">
            Answer trail quizzes accurately to earn more points for trading post gear!
          </div>
        </div>
      </div>
    </div>
  );
}
