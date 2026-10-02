// WarrenWise Animal Academy - Herd Trail Quest
// Party Condition HUD, Educational Supplies, and Herd Bond Tracker

import React from 'react';
import { 
  Heart, Droplets, Shield, Sparkles, Flame, Apple, 
  Package, Wrench, AlertTriangle, Compass, Award
} from 'lucide-react';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

export default function PartyConditionCard({
  questState,
  trailPack,
  onOpenCosmetics,
  onOpenHabitat
}) {
  const condition = TrailQuestEngine.getConditionLevel(questState.conditionScore);
  const companion = trailPack.companion;
  const bond = questState.herdBond;
  const bondPercent = (bond.xp % 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
      
      {/* Top Banner: Companion & Condition */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Companion Avatar & Lore */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl shadow-inner border border-white/20 shrink-0">
            {companion.avatarEmoji || '🐾'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-white">{companion.name}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {companion.breed}
              </span>
            </div>
            <p className="text-xs text-emerald-100/90 mt-0.5 max-w-md line-clamp-1">
              {companion.lore}
            </p>
          </div>
        </div>

        {/* Condition & Mile Badges */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Party Condition Status */}
          <div className="bg-black/25 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-white/10">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
              Party Condition
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span>{condition.emoji}</span>
              <span className="font-black text-sm text-white">{condition.label}</span>
              <span className="text-[11px] text-emerald-300 font-semibold">({questState.conditionScore}%)</span>
            </div>
          </div>

          {/* Miles Traveled */}
          <div className="bg-black/25 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-white/10">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
              Miles Traveled
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-yellow-300 font-black text-sm">
              <Compass className="w-4 h-4" />
              <span>{questState.currentMile} <span className="text-xs font-normal text-yellow-200/80">/ 100 mi</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Strip: Herd Bond Progress Bar */}
      <div className="px-6 py-2">
        <div className="flex items-center justify-between text-xs mb-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Herd Bond: Level {bond.level}</span>
            <span className="text-slate-400 font-normal">({bond.xp} Total XP)</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-700">{bondPercent}% to Level {bond.level + 1}</span>
        </div>
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500" 
            style={{ width: `${bondPercent}%` }}
          />
        </div>
      </div>

      {/* Bottom Grid: Educational Supplies Bar */}
      <div className="px-6 pb-5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
          <span>Party Trail Supplies</span>
          <span className="text-emerald-700 font-semibold lowercase">care-focused &amp; youth-safe</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {/* Feed */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Apple className="w-3.5 h-3.5 text-amber-600" />
              <span>Feed</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.feed} lbs</div>
          </div>

          {/* Water */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Droplets className="w-3.5 h-3.5 text-blue-500" />
              <span>Water</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.water} gal</div>
          </div>

          {/* Bedding */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Package className="w-3.5 h-3.5 text-amber-700" />
              <span>Bedding</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.bedding} bales</div>
          </div>

          {/* Enrichment */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>Enrichment</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.enrichment} items</div>
          </div>

          {/* Grooming Kit */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Wrench className="w-3.5 h-3.5 text-emerald-600" />
              <span>Groom Kit</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.grooming}%</div>
          </div>

          {/* First Aid Knowledge */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Shield className="w-3.5 h-3.5 text-rose-500" />
              <span>First-Aid Prep</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.firstAidKnowledge} pts</div>
          </div>

          {/* Transport Readiness */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-center col-span-2 sm:col-span-1">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 font-bold mb-0.5">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>Transport</span>
            </div>
            <div className="text-xs font-black text-slate-800">{questState.supplies.transportGear}%</div>
          </div>
        </div>
      </div>

    </div>
  );
}
