// WarrenWise Animal Academy - Herd Trail Quest
// Oregon Trail-Style Panoramic Journey Map with Interactive Trail Nodes and Coach Beacons

import React from 'react';
import { 
  CheckCircle2, Lock, Sparkles, MapPin, Trophy, 
  HelpCircle, Heart, Eye, ListOrdered, Package, 
  HeartHandshake, Megaphone, Flag, Compass, ChevronRight
} from 'lucide-react';

const NODE_ICON_MAP = {
  trail_quiz: Eye,
  catch_classify: Eye,
  care_choices: Heart,
  showmanship_sequence: ListOrdered,
  mystery_stall: HelpCircle,
  supply_decision: Package,
  ethics_crossroads: HeartHandshake,
  oral_prompt: Megaphone,
  bond_trial: Sparkles,
  fair_sim_finale: Trophy
};

export default function TrailMapView({
  trailPack,
  questState,
  onSelectNode
}) {
  const completedSet = new Set(questState.completedNodeIds || []);
  const nodes = trailPack.nodes || [];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>{trailPack.type === 'pet' ? 'Companion Pet Adventure' : 'Livestock Project Trail'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">{trailPack.name}</h2>
          <p className="text-xs text-slate-500 mt-0.5">{trailPack.subtitle}</p>
        </div>

        <div className="text-left sm:text-right">
          <div className="text-xs font-bold text-slate-700">Trail Completion</div>
          <div className="text-sm font-black text-emerald-700 mt-0.5">
            {completedSet.size} of {nodes.length} Challenges Solved
          </div>
        </div>
      </div>

      {/* Regions Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {trailPack.regions.map((reg, idx) => {
          const isCurrentRegion = questState.currentMile >= reg.milesStart && questState.currentMile <= reg.milesEnd;
          const isPassedRegion = questState.currentMile > reg.milesEnd;
          return (
            <div
              key={reg.id}
              className={`p-3 rounded-2xl border text-center transition ${
                isCurrentRegion 
                  ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/10' 
                  : isPassedRegion
                    ? 'bg-slate-50 border-slate-200 opacity-80'
                    : 'bg-slate-50/50 border-slate-200/50 opacity-50'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Region {idx + 1}
              </div>
              <div className="text-xs font-black text-slate-800 truncate mt-0.5">{reg.name}</div>
              <div className="text-[10px] font-semibold text-emerald-700 mt-1">
                {reg.milesStart} - {reg.milesEnd} mi
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Trail Node Path */}
      <div className="relative pt-6 pb-2">
        
        {/* Connecting Trail Line */}
        <div className="absolute top-1/2 left-8 right-8 h-2 bg-slate-200 -translate-y-1/2 rounded-full hidden md:block" />

        {/* Nodes Grid / Path */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {nodes.map((node, index) => {
            const isCompleted = completedSet.has(node.id);
            // Current node is the first uncompleted node, or completed nodes can be replayed
            const isNextToPlay = !isCompleted && (index === 0 || completedSet.has(nodes[index - 1].id));
            const isLocked = !isCompleted && !isNextToPlay;
            const IconComp = NODE_ICON_MAP[node.type] || Flag;
            const hasCoachSignal = (questState.coachSignals || []).some(s => s.targetNodeId === node.id);

            return (
              <div
                key={node.id}
                onClick={() => {
                  if (!isLocked) onSelectNode(node);
                }}
                className={`relative rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-white border-emerald-200 shadow-xs hover:shadow-md cursor-pointer hover:border-emerald-400'
                    : isNextToPlay
                      ? 'bg-gradient-to-br from-white to-emerald-50/40 border-emerald-500 shadow-md ring-4 ring-emerald-500/10 cursor-pointer animate-pulse-once'
                      : 'bg-slate-50 border-slate-200/60 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Coach Beacon Flag */}
                {hasCoachSignal && (
                  <div className="absolute -top-3 -right-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 z-20 animate-bounce">
                    <MapPin className="w-3 h-3 text-purple-200" />
                    <span>Coach Note</span>
                  </div>
                )}

                <div>
                  {/* Top Node Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Mile {node.mile}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Solved
                      </span>
                    ) : isNextToPlay ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full animate-pulse">
                        <Sparkles className="w-3 h-3 text-amber-600" /> Current
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-0.5">
                        <Lock className="w-3 h-3" /> Locked
                      </span>
                    )}
                  </div>

                  {/* Node Avatar Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-xs ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : isNextToPlay
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-200 text-slate-400'
                  }`}>
                    {isNextToPlay ? (
                      <span className="text-xl">{trailPack.companion.avatarEmoji || '🐾'}</span>
                    ) : (
                      <IconComp className="w-6 h-6" />
                    )}
                  </div>

                  {/* Node Title & Type */}
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{node.title}</h4>
                  <div className="text-[11px] font-semibold text-emerald-700 capitalize mt-1">
                    {node.type.replace('_', ' ')}
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    disabled={isLocked}
                    className={`w-full py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${
                      isCompleted
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        : isNextToPlay
                          ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-2xs'
                          : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <span>{isCompleted ? 'Review' : isNextToPlay ? 'Begin Node' : 'Locked'}</span>
                    {!isLocked && <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
