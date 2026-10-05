// WarrenWise Animal Academy - Herd Story Log & Memory Traits
// Visualizes stewardship history: consistency, carefulness, ethics, show-readiness
// "What you learn today changes your herd's story tomorrow."

import React from 'react';
import { 
  BookOpen, Sparkles, Heart, Shield, CheckCircle2, 
  Award, Clock, Compass, TrendingUp, History 
} from 'lucide-react';

export default function HerdStoryLog({
  dailyStatus,
  questState,
  trailPack
}) {
  const memoryTraits = dailyStatus?.memoryTraits || {
    consistency: 75,
    carefulness: 80,
    ethics: 85,
    showReadiness: 70
  };

  const storyLog = dailyStatus?.state?.herdStoryLog || [
    {
      id: 'init_1',
      date: 'Today',
      title: 'Journey Begun at Clover Homestead',
      choiceDescription: 'Provided clean timothy grass and shaded carrier.',
      outcomeText: 'Your companion settled in with calm, curious eyes and energetic spirit.',
      traitsBoosted: ['consistency', 'carefulness']
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📖</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Herd Story Log &amp; Memory
            </h3>
            <span className="bg-purple-100 text-purple-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-purple-300">
              Stewardship Traits
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Your daily decisions shape your companion’s trust, confidence, and show readiness.
          </p>
        </div>

        <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <History className="w-4 h-4 text-purple-600" />
          <span>{storyLog.length} Story Milestones Recorded</span>
        </div>
      </div>

      {/* Stewardship Memory Traits Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        {/* Consistency */}
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-emerald-950 flex items-center gap-1.5">
              <span>🌾</span>
              <span>Consistency</span>
            </span>
            <span className="text-emerald-700 font-black">{memoryTraits.consistency}%</span>
          </div>
          <div className="h-2 w-full bg-emerald-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-600 rounded-full transition-all duration-500" style={{ width: `${memoryTraits.consistency}%` }} />
          </div>
          <p className="text-[10px] text-emerald-800 font-medium leading-tight">
            Daily feeding &amp; water chore reliability
          </p>
        </div>

        {/* Carefulness */}
        <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-sky-950 flex items-center gap-1.5">
              <span>💧</span>
              <span>Carefulness</span>
            </span>
            <span className="text-sky-700 font-black">{memoryTraits.carefulness}%</span>
          </div>
          <div className="h-2 w-full bg-sky-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-sky-600 rounded-full transition-all duration-500" style={{ width: `${memoryTraits.carefulness}%` }} />
          </div>
          <p className="text-[10px] text-sky-800 font-medium leading-tight">
            Low-stress handling &amp; temperature safety
          </p>
        </div>

        {/* Ethics */}
        <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-indigo-950 flex items-center gap-1.5">
              <span>🛡️</span>
              <span>Ethics</span>
            </span>
            <span className="text-indigo-700 font-black">{memoryTraits.ethics}%</span>
          </div>
          <div className="h-2 w-full bg-indigo-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: `${memoryTraits.ethics}%` }} />
          </div>
          <p className="text-[10px] text-indigo-800 font-medium leading-tight">
            4-H Sportsmanship &amp; truthful recordkeeping
          </p>
        </div>

        {/* Show Readiness */}
        <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-purple-950 flex items-center gap-1.5">
              <span>⭐</span>
              <span>Show Readiness</span>
            </span>
            <span className="text-purple-700 font-black">{memoryTraits.showReadiness}%</span>
          </div>
          <div className="h-2 w-full bg-purple-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-purple-600 rounded-full transition-all duration-500" style={{ width: `${memoryTraits.showReadiness}%` }} />
          </div>
          <p className="text-[10px] text-purple-800 font-medium leading-tight">
            Table stance composure &amp; grooming sheen
          </p>
        </div>

      </div>

      {/* Chronicle Timeline */}
      <div className="space-y-3">
        <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
          Chronicle of Stewardship Choices
        </h4>

        <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
          {storyLog.map((story) => (
            <div key={story.id} className="relative flex items-start gap-4 pl-1">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shrink-0 ring-4 ring-white shadow-xs z-10">
                ✓
              </div>
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900">{story.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">{story.date}</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  {story.choiceDescription}
                </p>
                <p className="text-xs text-purple-900 font-semibold italic bg-purple-50/80 p-2.5 rounded-xl border border-purple-100">
                  "{story.outcomeText}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
