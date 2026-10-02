// WarrenWise Animal Academy - Herd Trail Quest
// Overworld Map: 12-Region Interactive World Map with Quick Travel & Companion Badges

import React, { useState } from 'react';
import { 
  Compass, Map, Sparkles, Heart, Award, CheckCircle2, 
  ChevronRight, Footprints, Shield, Flag, Globe
} from 'lucide-react';
import { TRAIL_PACKS } from '../../data/game/trailPacks';

export default function OverworldMapView({
  questState,
  onSelectTrailPack
}) {
  const [filterType, setFilterType] = useState('all'); // 'all' | 'livestock' | 'pet'

  const activePackId = questState.activeTrailPackId;
  const completedSet = new Set(questState.completedNodeIds || []);

  const filteredPacks = TRAIL_PACKS.filter(pack => {
    if (filterType === 'all') return true;
    return pack.type === filterType;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Overworld Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Academy Overworld Map • 12 Adventure Trails</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Choose Your Knowledge Trail</h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            Explore 12 distinct regional biomes spanning 4-H livestock project tracks and companion pets. 
            Advance miles, protect animal welfare, and unlock upgraded trail equipment and pets.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              filterType === 'all'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Trails ({TRAIL_PACKS.length})
          </button>
          <button
            onClick={() => setFilterType('livestock')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              filterType === 'livestock'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Livestock (10)
          </button>
          <button
            onClick={() => setFilterType('pet')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              filterType === 'pet'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Companion Pets (2)
          </button>
        </div>
      </div>

      {/* Overworld Regions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPacks.map((pack, idx) => {
          const isActive = pack.id === activePackId;
          const nodeCount = pack.nodes?.length || 0;
          const packCompletedCount = (pack.nodes || []).filter(n => completedSet.has(n.id)).length;
          const progressPercent = nodeCount > 0 ? Math.round((packCompletedCount / nodeCount) * 100) : 0;

          return (
            <div
              key={pack.id}
              className={`rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-50/60 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-xs'
              }`}
            >
              <div>
                {/* Region Tag & Companion Avatar */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-xs">
                      {pack.companion.avatarEmoji || '🐾'}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Trail {idx + 1} • {pack.type === 'pet' ? 'Companion Pet' : 'Livestock Project'}
                      </div>
                      <div className="text-sm font-black text-slate-900 leading-snug">
                        {pack.name}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-700 text-white shadow-2xs">
                      Active
                    </span>
                  )}
                </div>

                {/* Subtitle & Scenery Lore */}
                <p className="text-xs text-slate-600 font-medium line-clamp-2 mb-2">
                  {pack.subtitle}
                </p>
                <div className="text-[11px] text-slate-400 italic line-clamp-1 mb-4">
                  Scenic route: {pack.scenery}
                </div>

                {/* Companion Badge Strip */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
                    <span className="font-bold text-slate-700">{pack.companion.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {pack.companion.breed}
                  </span>
                </div>
              </div>

              {/* Progress & Travel Button */}
              <div>
                {isActive && (
                  <div className="mb-3 space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                      <span>Trail Progress</span>
                      <span className="text-emerald-700 font-bold">{questState.currentMile} / 100 mi ({progressPercent}%)</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (questState.currentMile / 100) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <button
                  onClick={() => onSelectTrailPack(pack.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs hover:bg-emerald-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{isActive ? 'Continue Current Journey' : 'Embark on This Trail'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
