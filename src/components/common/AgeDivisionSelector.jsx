// WarrenWise Youth Animal Training Academy - Age Division Selector

import React from 'react';
import { AGE_DIVISIONS } from '../../config/constants';
import { Sparkles, Compass, Award, BookOpen } from 'lucide-react';

export default function AgeDivisionSelector({ selectedDivision, onSelectDivision }) {
  const getIcon = (id) => {
    switch (id) {
      case 'cloverbud': return <Sparkles className="w-4 h-4 text-emerald-500" />;
      case 'junior': return <Compass className="w-4 h-4 text-teal-600" />;
      case 'intermediate': return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'senior': return <Award className="w-4 h-4 text-purple-600" />;
      default: return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Age-Responsive Learning Track
        </label>
        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Adapts vocabulary & quizzes
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.values(AGE_DIVISIONS).map((div) => {
          const isSelected = selectedDivision === div.id;
          return (
            <button
              key={div.id}
              onClick={() => onSelectDivision(div.id)}
              className={`flex items-start gap-2 p-2.5 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="mt-0.5">{getIcon(div.id)}</div>
              <div>
                <div className={`text-xs font-bold ${isSelected ? 'text-emerald-900' : 'text-slate-800'}`}>
                  {div.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {div.ageRange}
                </div>
                {div.lowStakes && (
                  <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100/60 px-1.5 py-0.2 rounded">
                    Low-Stakes
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
