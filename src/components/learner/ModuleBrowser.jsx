// WarrenWise Youth Animal Training Academy - Module Browser

import React from 'react';
import { 
  CheckCircle2, Clock, ShieldAlert, Award, 
  ChevronRight, BookOpen, Sparkles, HelpCircle 
} from 'lucide-react';
import { STANDARD_MODULE_TOPICS } from '../../config/constants';

export default function ModuleBrowser({
  pack,
  division,
  progressList,
  onOpenLesson,
  onOpenQuiz
}) {
  const getModuleStatus = (moduleId) => {
    const item = progressList.find(p => p.speciesId === pack.id && p.moduleId === moduleId);
    if (!item) return { status: 'not_started', score: null };
    return { status: item.status, score: item.score };
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 sm:p-6 rounded-2xl shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <h1 className="text-lg sm:text-xl font-black">{pack.name}</h1>
          </div>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-2xl">
            {pack.description}
          </p>
        </div>
        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
          <div className="text-xs text-emerald-200">
            Last Verified: <span className="font-semibold text-white">{pack.lastVerifiedDate}</span>
          </div>
          <div className="text-[11px] bg-emerald-700/60 border border-emerald-400/40 text-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
            <span className="font-bold">{pack.reviewPolicy || 'Reviewed under Academy Accuracy Policy'}</span>
            <span className="text-emerald-300">·</span>
            <span>{pack.reviewerRole || 'Internal Curriculum Specialist'}</span>
          </div>
        </div>
      </div>

      {/* Grid of 9 modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pack.modules.map((module) => {
          const statusInfo = getModuleStatus(module.id);
          const isCompleted = statusInfo.status === 'completed';
          const topicMeta = STANDARD_MODULE_TOPICS.find(t => t.id === module.topicId) || {};

          return (
            <div
              key={module.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              {/* Module Header Bar */}
              <div className="p-4 pb-3 border-b border-slate-100 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center border border-slate-200">
                    {module.order}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {module.estimatedMinutes} min
                      </span>
                      {module.requiresSafetyReview && (
                        <span className="flex items-center gap-0.5 text-rose-600 font-semibold" title="Health/Welfare safety review required">
                          <ShieldAlert className="w-3 h-3" />
                          Safety Governed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {isCompleted ? (
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{statusInfo.score}%</span>
                  </div>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    To Do
                  </span>
                )}
              </div>

              {/* Objectives */}
              <div className="p-4 flex-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Learning Objectives:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {module.objectives.slice(0, 3).map((obj, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span className="line-clamp-2">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenLesson(module)}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-800 font-semibold px-3 py-2 rounded-xl text-xs border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Study Lesson</span>
                </button>
                <button
                  onClick={() => onOpenQuiz(module)}
                  className={`flex-1 font-bold px-3 py-2 rounded-xl text-xs shadow-2xs flex items-center justify-center gap-1.5 transition-all ${
                    isCompleted
                      ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{isCompleted ? 'Retake Quiz' : 'Take Quiz'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
