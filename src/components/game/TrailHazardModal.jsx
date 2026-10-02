// WarrenWise Animal Academy - Herd Trail Quest
// Trail Hazard & Calamity Modal (Frontier Wilderness Consequences for Mistakes)
// Dramatic Visual Storytelling, Real Stat Penalties & 4-H Husbandry Learning

import React from 'react';
import { 
  AlertTriangle, CloudRain, Wind, Flame, Droplets, 
  ShieldAlert, BookOpen, Bot, ArrowRight, X, HeartCrack
} from 'lucide-react';

export default function TrailHazardModal({
  hazard,
  onAcknowledge,
  onAskWarrenWise
}) {
  if (!hazard) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-stone-900 border-2 border-rose-600/80 rounded-3xl max-w-xl w-full text-white shadow-2xl overflow-hidden relative">
        
        {/* Top Calamity Artwork Header */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden select-none">
          <img 
            src={hazard.image || '/game/trail_storm_hazard.jpg'} 
            alt={hazard.name}
            className="w-full h-full object-cover brightness-90 contrast-115"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

          {/* Danger Beacon Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-rose-950/90 border border-rose-500/80 text-rose-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg animate-pulse">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Trail Calamity · {hazard.severity}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 -mt-6 relative">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-rose-300 leading-tight">
              {hazard.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed font-serif">
              "{hazard.narrative}"
            </p>
          </div>

          {/* Direct Stat Penalties Incurred */}
          <div className="bg-stone-950/80 rounded-2xl p-4 border border-rose-900/60 space-y-2">
            <div className="text-[11px] font-black text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <HeartCrack className="w-4 h-4" /> Animal Show Quality & Caravan Penalties:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {hazard.penalties.coatCondition && (
                <div className="bg-rose-950/50 border border-rose-800/60 p-2 rounded-xl text-rose-200 font-bold">
                  🪮 Coat Sheen: <span className="text-rose-400">{hazard.penalties.coatCondition}%</span>
                </div>
              )}
              {hazard.penalties.vigorHydration && (
                <div className="bg-rose-950/50 border border-rose-800/60 p-2 rounded-xl text-rose-200 font-bold">
                  🚰 Hydration: <span className="text-rose-400">{hazard.penalties.vigorHydration}%</span>
                </div>
              )}
              {hazard.penalties.temperament && (
                <div className="bg-rose-950/50 border border-rose-800/60 p-2 rounded-xl text-rose-200 font-bold">
                  🌿 Nerves / Fear: <span className="text-rose-400">{hazard.penalties.temperament}%</span>
                </div>
              )}
              {hazard.penalties.poseTraining && (
                <div className="bg-rose-950/50 border border-rose-800/60 p-2 rounded-xl text-rose-200 font-bold">
                  🪞 Stance Pose: <span className="text-rose-400">{hazard.penalties.poseTraining}%</span>
                </div>
              )}
              {hazard.penalties.supplies?.feed && (
                <div className="bg-amber-950/50 border border-amber-800/60 p-2 rounded-xl text-amber-200 font-bold">
                  🌾 Feed Lost: <span className="text-amber-400">{hazard.penalties.supplies.feed}</span>
                </div>
              )}
              {hazard.penalties.supplies?.water && (
                <div className="bg-cyan-950/50 border border-cyan-800/60 p-2 rounded-xl text-cyan-200 font-bold">
                  💧 Water Spilled: <span className="text-cyan-400">{hazard.penalties.supplies.water}</span>
                </div>
              )}
            </div>
            <div className="text-[11px] text-stone-400 italic">
              Notice: You can restore these metrics at camp using the Outfitter brush, spring water, and calming herbs.
            </div>
          </div>

          {/* Educational 4-H Husbandry Lesson */}
          <div className="bg-stone-850 p-4 rounded-2xl border border-stone-700/70 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-300 uppercase tracking-wide text-[10px]">
              <BookOpen className="w-3.5 h-3.5" /> 4-H Animal Science Principle:
            </div>
            <p className="text-stone-200 leading-relaxed">
              {hazard.educationalLesson}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={onAcknowledge}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Tend to Animal & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onAskWarrenWise && (
              <button
                onClick={() => {
                  onAcknowledge();
                  onAskWarrenWise(hazard.educationalLesson);
                }}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Bot className="w-4 h-4 text-emerald-400" />
                <span>Ask WarrenWise AI</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
