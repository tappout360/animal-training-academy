// WarrenWise Animal Academy - Living Trail Map Component
// Faithfully matches Mockup 1 right pane (media_1791095312847.png)
// Displays Oregon Trail adventure banner, current miles, real-time weather, scenic wagon trail, milestone nodes, and quick nav pills.

import React from 'react';
import { 
  Compass, Map, Sun, CloudRain, Wind, Mountain, 
  Home, Target, Users, Sparkles, ChevronRight, Award, Trophy, Lock 
} from 'lucide-react';
import { soundEffects } from '../../../utils/audioEffects';

export default function LivingTrailMap({
  questState,
  trailPack,
  dailyStatus,
  onSelectNode,
  onOpenMorningCheck,
  onOpenShowRing,
  onOpenFamilyBoard,
  onOpenOutfitter
}) {
  const currentMile = questState.currentMile || 0;
  const completedNodeIds = questState.completedNodeIds || [];
  const nodes = trailPack?.nodes || [];

  // Weather indicator based on miles / region
  let weather = { label: 'Sunny 72°F', icon: <Sun className="w-4 h-4 text-amber-500 fill-amber-400" /> };
  if (currentMile >= 75) {
    weather = { label: 'Chilly Gusts 48°F', icon: <Wind className="w-4 h-4 text-sky-500" /> };
  } else if (currentMile >= 45) {
    weather = { label: 'Passing Showers 64°F', icon: <CloudRain className="w-4 h-4 text-blue-500" /> };
  }

  const seasonArc = dailyStatus?.seasonArc || { name: 'Conditioning Weeks', icon: '🌾' };

  // Calculate wagon progress percentage (0 - 100)
  const wagonProgress = Math.min(100, Math.max(5, currentMile));

  return (
    <div className="bg-gradient-to-b from-sky-900 via-slate-900 to-emerald-950 rounded-3xl p-5 sm:p-7 text-white shadow-xl border border-slate-700/80 space-y-6 overflow-hidden relative">
      
      {/* Background Mountain silhouettes & atmospheric glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Banner: Oregon Trail Title, Mile, Weather & Season */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <h3 className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight">
              Oregon Trail Adventures
            </h3>
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {trailPack?.name || 'Overland Expedition'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300 font-medium mt-1">
            <span>{seasonArc.icon} {seasonArc.name}</span>
            <span>•</span>
            <span>Trail Points: <strong className="text-amber-400">{questState.trailPoints || 0}</strong></span>
          </div>
        </div>

        {/* Mile Counter & Weather Pill */}
        <div className="flex items-center gap-2.5">
          {/* Weather Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold">
            {weather.icon}
            <span>{weather.label}</span>
          </div>

          {/* Current Mile Display */}
          <div className="px-4 py-1.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md flex items-center gap-1.5">
            <Mountain className="w-4 h-4 text-slate-900" />
            <span>{currentMile} Miles</span>
          </div>
        </div>

      </div>

      {/* Trail Map Interactive Panorama */}
      <div className="relative z-10 bg-slate-950/60 rounded-3xl p-6 border border-white/10 backdrop-blur-xs min-h-[300px] flex flex-col justify-between">
        
        {/* Sky / Distance Gauge */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span>Homestead Start (0 mi)</span>
          <span className="text-amber-300">Overland Pass (50 mi)</span>
          <span>Grand Fair Arena (100 mi)</span>
        </div>

        {/* Winding Trail Track (SVG path with progress highlight) */}
        <div className="relative my-8 py-4">
          
          {/* Base Trail Line */}
          <div className="h-3 w-full bg-slate-800 rounded-full border border-slate-700 relative overflow-hidden">
            {/* Trail progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-500 rounded-full transition-all duration-700"
              style={{ width: `${wagonProgress}%` }}
            />
          </div>

          {/* Traveling Covered Wagon Marker */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700 flex flex-col items-center pointer-events-none"
            style={{ left: `${wagonProgress}%` }}
          >
            <div className="text-3xl drop-shadow-lg animate-bounce-gentle">
              🚜
            </div>
            <span className="bg-slate-900/90 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-400/40 mt-1 whitespace-nowrap">
              You are here
            </span>
          </div>

          {/* Trail Waypoint Nodes along the track */}
          <div className="relative flex justify-between items-center mt-6">
            {nodes.slice(0, 5).map((node, idx) => {
              const isDone = completedNodeIds.includes(node.id);
              const isCurrent = !isDone && (idx === 0 || completedNodeIds.includes(nodes[idx - 1]?.id));
              const isLocked = !isDone && !isCurrent;

              return (
                <button
                  key={node.id}
                  onClick={() => {
                    if (!isLocked) {
                      soundEffects.playTap();
                      onSelectNode(node);
                    }
                  }}
                  disabled={isLocked}
                  className={`group flex flex-col items-center text-center transition-all ${
                    isLocked ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-lg font-black transition shadow-md border ${
                    isDone 
                      ? 'bg-emerald-600 text-white border-emerald-400' 
                      : isCurrent
                        ? 'bg-amber-500 text-slate-950 border-amber-300 ring-4 ring-amber-400/30 animate-pulse'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {isDone ? '✓' : isLocked ? <Lock className="w-4 h-4 text-slate-500" /> : idx + 1}
                  </div>

                  <span className={`text-[11px] font-bold mt-2 max-w-[80px] sm:max-w-[100px] truncate ${
                    isDone ? 'text-emerald-400' : isCurrent ? 'text-amber-300 font-black' : 'text-slate-500'
                  }`}>
                    {node.title.replace('Rest Stop: ', '').replace('Challenge: ', '')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {node.mile} mi
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Trail Status Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Next station: {nodes.find(n => !completedNodeIds.includes(n.id))?.title || 'Championship Arena'}</span>
          </div>

          <button
            onClick={() => {
              const nextNode = nodes.find(n => !completedNodeIds.includes(n.id)) || nodes[0];
              onSelectNode(nextNode);
            }}
            className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black transition flex items-center gap-1.5 shadow-md"
          >
            <span>Enter Next Trail Challenge</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Bottom Nav Action Pills (Camp, Train, Explore, Friends) */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        
        {/* Camp */}
        <button
          onClick={onOpenMorningCheck}
          className="p-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl transition flex items-center justify-center gap-2 text-xs font-bold text-slate-200 hover:text-white"
        >
          <Home className="w-4 h-4 text-amber-400" />
          <span>Camp &amp; Barn Check</span>
        </button>

        {/* Train / Show Ring */}
        <button
          onClick={onOpenShowRing}
          className="p-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl transition flex items-center justify-center gap-2 text-xs font-bold text-slate-200 hover:text-white"
        >
          <Trophy className="w-4 h-4 text-purple-400" />
          <span>Showmanship Practice</span>
        </button>

        {/* Explore / Trading Post */}
        <button
          onClick={onOpenOutfitter}
          className="p-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl transition flex items-center justify-center gap-2 text-xs font-bold text-slate-200 hover:text-white"
        >
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Trading Post</span>
        </button>

        {/* Friends / Family Barn Board */}
        <button
          onClick={onOpenFamilyBoard}
          className="p-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl transition flex items-center justify-center gap-2 text-xs font-bold text-slate-200 hover:text-white"
        >
          <Users className="w-4 h-4 text-sky-400" />
          <span>Family Barn Board</span>
        </button>

      </div>

    </div>
  );
}
