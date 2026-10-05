// WarrenWise Animal Academy - Double Reward Victory Celebration
// Faithfully matches Mockup 2 (media_1791095308966.png)
// Features jumping companion celebration, treasure chest burst, bond level up, badge earned, cosmetic unlock, double rewards pill, and tomorrow teaser.

import React, { useEffect } from 'react';
import { 
  Sparkles, Award, Star, Gift, CheckCircle2, 
  ChevronRight, Heart, Trophy, ArrowRight, ShieldCheck, Sun 
} from 'lucide-react';
import { soundEffects } from '../../../utils/audioEffects';

export default function DoubleRewardVictory({
  resultData = {},
  trailPack,
  questState,
  onKeepGoing,
  onSaveAndRest
}) {
  const {
    earnedPoints = 75,
    earnedBondXp = 25,
    earnedStars = 1,
    earnedTokens = 5,
    isLevelUp = false,
    newBondLevel = 2,
    badgeEarned = 'Quiz Champion',
    cosmeticUnlock = 'Trail Scarf & Habitat Decoration',
    tomorrowTeaser = 'Tomorrow: Morning Barn Check will test Weather & Humidity Alert!'
  } = resultData;

  useEffect(() => {
    // Play celebratory sound effects
    soundEffects.playChestPop();
    const timer = setTimeout(() => {
      soundEffects.playSuccessChime();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
      
      {/* Victory Card */}
      <div className="bg-gradient-to-b from-amber-50 via-white to-emerald-50 rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-amber-300 shadow-2xl text-center space-y-6 relative overflow-hidden">
        
        {/* Confetti & Golden Sparkles decorative background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-400/20 to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Banner */}
        <div className="space-y-1 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Amazing Answer!</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Trail Challenge Mastered!
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            Your herd thrives when you practice thoughtful stewardship.
          </p>
        </div>

        {/* Companion Celebration Stage (Jumping with Joy!) */}
        <div className="relative z-10 py-2">
          
          <div className="relative inline-block">
            {/* Pulsing Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full blur-xl opacity-40 animate-pulse" />
            
            {/* Companion Icon Jumping */}
            <div className="relative w-28 h-28 mx-auto rounded-3xl bg-white shadow-xl border-3 border-amber-400 flex items-center justify-center text-6xl transform animate-bounce-gentle">
              <span>{trailPack?.icon || '🐇'}</span>
              
              {/* Joy Emote */}
              <div className="absolute -top-3 -right-3 bg-rose-500 text-white rounded-full p-1.5 text-xs shadow-md">
                ❤️
              </div>
            </div>
          </div>

          {/* Bond Level Up Pill */}
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xs shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Bond Level Up! (Level {newBondLevel || 2})</span>
            </span>
          </div>

        </div>

        {/* Animated Treasure Chest Pop & Dual Rewards */}
        <div className="relative z-10 bg-white/90 rounded-2xl p-4 border border-amber-200/80 shadow-xs space-y-3">
          
          <div className="flex items-center justify-center gap-2 text-2xl">
            <span>🎁</span>
            <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Trail Care Chest Popped!
            </span>
          </div>

          {/* Reward Spine Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
            
            {/* Badge Earned Card */}
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-base shrink-0 shadow-xs">
                <Trophy className="w-5 h-5 text-amber-300" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-bold text-indigo-700 uppercase">Badge Earned!</div>
                <div className="text-xs font-black text-slate-800 truncate">{badgeEarned}</div>
              </div>
            </div>

            {/* Cosmetic Unlock Card */}
            <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center text-base shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-bold text-purple-700 uppercase">Cosmetic Unlock!</div>
                <div className="text-xs font-black text-slate-800 truncate">{cosmeticUnlock}</div>
              </div>
            </div>

          </div>

          {/* "Double Rewards!" Pill matching mockup 2 */}
          <div className="py-2 px-4 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2">
            <span>✨ Double Rewards:</span>
            <span className="bg-white/90 text-indigo-900 px-2 py-0.5 rounded-md font-mono text-xs">
              Mastery Star +{earnedStars}
            </span>
            <span>•</span>
            <span className="bg-white/90 text-amber-900 px-2 py-0.5 rounded-md font-mono text-xs">
              Cosmetic Token +{earnedTokens}
            </span>
          </div>

        </div>

        {/* Tomorrow Teaser Banner */}
        <div className="relative z-10 p-3 bg-slate-900 text-white rounded-xl text-xs font-medium text-center">
          <span className="text-amber-400 font-bold">Tomorrow's Tease: </span>
          <span>{tomorrowTeaser}</span>
        </div>

        {/* Action Buttons matching mockup 2 */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
          
          <button
            onClick={onKeepGoing}
            className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Keep Going! (Next Node)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onSaveAndRest}
            className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-2xl transition"
          >
            <span>Save &amp; Rest at Camp</span>
          </button>

        </div>

      </div>

    </div>
  );
}
