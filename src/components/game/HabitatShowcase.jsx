// WarrenWise Animal Academy - Herd Trail Quest
// Habitat Showcase: Privacy-Safe Campsite & Stall Pride Board

import React from 'react';
import { 
  Home, Award, Sparkles, Heart, Flame, 
  Droplets, Sun, Moon, ShieldCheck 
} from 'lucide-react';
import { ALL_COSMETICS } from '../../data/game/cosmeticsCatalog';

export default function HabitatShowcase({
  trailPack,
  questState
}) {
  const equipped = questState.equippedCosmetics || {};
  const decor = ALL_COSMETICS.find(c => c.id === equipped.habitat_decor) || ALL_COSMETICS.find(c => c.id === 'decor_pine_bench');
  const bond = questState.herdBond || { level: 1, lore: [] };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
            <Home className="w-3.5 h-3.5 text-emerald-600" />
            <span>Trail Habitat Pride Board</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {trailPack.companion.name}’s Campsite Haven
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            A peaceful rest habitat where your companion rests between trail challenges and displays practice accolades.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            Privacy-Safe • Parent &amp; Club Share Ready
          </span>
        </div>
      </div>

      {/* Main Campsite Scene Canvas */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-sky-200 via-emerald-100 to-green-200 p-8 sm:p-12 border-4 border-emerald-800 shadow-inner min-h-[350px] flex flex-col justify-between">
        
        {/* Sky Background Elements */}
        <div className="flex items-center justify-between text-emerald-800/60 font-semibold text-xs">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-500" />
            <span>Clear Trail Skies</span>
          </div>
          <div className="bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full text-slate-700 text-xs font-bold">
            Bond Level {bond.level} Sanctuary
          </div>
        </div>

        {/* Center Companion Haven & Decor Display */}
        <div className="my-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          
          {/* Companion Resting Avatar */}
          <div className="relative">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/80 backdrop-blur-md border-4 border-emerald-600 shadow-xl flex items-center justify-center text-6xl sm:text-7xl">
              {trailPack.companion.avatarEmoji || '🐾'}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-2 rounded-2xl shadow-md">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
          </div>

          {/* Habitat Decor Card */}
          <div className="bg-white/85 backdrop-blur-md p-5 rounded-2xl border border-emerald-300 shadow-sm max-w-sm space-y-2">
            <div className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
              Installed Habitat Decor
            </div>
            <h4 className="text-base font-bold text-slate-900">{decor?.name || 'Cedar Rest Bench'}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {decor?.description || 'A cozy spot for your companion to relax and drink fresh cool water.'}
            </p>
          </div>
        </div>

        {/* Bottom Ground: Practice Ribbons & Lore Strip */}
        <div className="pt-4 border-t border-emerald-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Practice Ribbons:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl" title="State Practice Blue Ribbon">🏅</span>
              <span className="text-2xl" title="County Showmanship Rosette">🎗️</span>
              <span className="text-2xl" title="First Aid Prep Clover">🍀</span>
            </div>
          </div>

          <div className="text-xs text-emerald-950/80 font-medium italic">
            "{bond.unlockedLore?.[bond.unlockedLore.length - 1] || 'Your companion enjoys the fresh trail air and trusts your gentle care.'}"
          </div>
        </div>

      </div>

    </div>
  );
}
