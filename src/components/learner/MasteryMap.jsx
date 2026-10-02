// WarrenWise Youth Animal Training Academy - Mastery Map & Remediation Plan

import React from 'react';
import { 
  BarChart3, CheckCircle2, AlertCircle, Award, 
  Target, Sparkles, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { calculateLearnerMastery } from '../../services/MasteryEngine';

export default function MasteryMap({
  progressList,
  speciesId = 'rabbits',
  onSelectModule
}) {
  const mastery = calculateLearnerMastery(progressList, speciesId);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Summary Card */}
      <div className="bg-gradient-to-r from-cyan-900 to-teal-900 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4 text-cyan-400" />
          <span>Competency & Skill Matrix</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          Skill-Level Mastery Heatmap
        </h1>
        <p className="text-cyan-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Visual radar across the 9 core project competencies. Track module accuracy, pinpoint weak areas, and follow targeted remediation study plans.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-cyan-800/80">
          <div>
            <div className="text-[11px] text-cyan-200 uppercase font-semibold">Modules Completed</div>
            <div className="text-lg font-black text-white">{mastery.completedCount} / {mastery.totalModules}</div>
          </div>
          <div>
            <div className="text-[11px] text-cyan-200 uppercase font-semibold">Overall Progress</div>
            <div className="text-lg font-black text-emerald-300">{mastery.overallPercentage}%</div>
          </div>
          <div>
            <div className="text-[11px] text-cyan-200 uppercase font-semibold">Average Quiz Score</div>
            <div className="text-lg font-black text-amber-300">{mastery.averageQuizScore}%</div>
          </div>
          <div>
            <div className="text-[11px] text-cyan-200 uppercase font-semibold">Certificate Status</div>
            <div className={`text-xs font-bold mt-1 ${mastery.isEligibleForCertificate ? 'text-emerald-300' : 'text-cyan-200'}`}>
              {mastery.isEligibleForCertificate ? 'Eligible to Claim!' : 'In Progress'}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Study Focus Box */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 mt-0.5">
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
              WarrenWise Coach Recommendation
            </div>
            <h3 className="font-bold text-sm text-slate-900 mt-0.5">
              Next Priority Focus: {mastery.recommendedNext}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {mastery.weakTopics.length > 0
                ? `Remediation needed in: ${mastery.weakTopics.join(', ')} to boost exam readiness.`
                : 'Great performance! Continue drills to keep barn knowledge fresh before fair.'}
            </p>
          </div>
        </div>
      </div>

      {/* Competency Bars List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          The 9 Standard Competency Dimensions
        </h2>

        <div className="space-y-3">
          {mastery.topicMastery.map((item) => {
            const pct = item.score || 0;
            return (
              <div key={item.topicId} className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="font-bold text-slate-800 flex items-center gap-2">
                    <span>{item.title}</span>
                    <span className={`px-2 py-0.2 rounded-full text-[10px] font-bold ${
                      item.level === 'Mastered' ? 'bg-emerald-100 text-emerald-800' :
                      item.level === 'Proficient' ? 'bg-blue-100 text-blue-800' :
                      item.level === 'Review Needed' ? 'bg-amber-100 text-amber-800' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-slate-700">
                    {item.completed ? `${item.score}%` : 'Not Completed'}
                  </span>
                </div>

                {/* Progress meter */}
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      pct >= 90 ? 'bg-emerald-500' :
                      pct >= 80 ? 'bg-blue-500' :
                      pct >= 70 ? 'bg-amber-500' :
                      'bg-slate-400'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
