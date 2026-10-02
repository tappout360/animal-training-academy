// WarrenWise Youth Animal Training Academy - Species Pack Selector

import React from 'react';
import { ALL_SPECIES_PACKS } from '../../data/speciesPacks';
import { Rabbit, Sparkles, Egg, Shield, CheckCircle2 } from 'lucide-react';

export default function SpeciesPackSelector({ selectedSpeciesId, onSelectSpecies }) {
  const getSpeciesIcon = (iconName) => {
    switch (iconName) {
      case 'Rabbit': return <Rabbit className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Egg': return <Egg className="w-5 h-5 text-blue-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-indigo-500" />;
      default: return <Rabbit className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 mb-3">
        <div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Species Training Packs
          </h2>
          <p className="text-xs text-slate-500">
            Select an animal project track with standardized 9-module curriculum
          </p>
        </div>
        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Phase 1: Depth & Accuracy First
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ALL_SPECIES_PACKS.map((pack) => {
          const isSelected = selectedSpeciesId === pack.id;
          return (
            <button
              key={pack.id}
              onClick={() => onSelectSpecies(pack.id)}
              className={`flex flex-col text-left p-3.5 rounded-xl border transition-all relative ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/60 shadow-sm ring-2 ring-emerald-500/20'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  {getSpeciesIcon(pack.icon)}
                </div>
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
                {pack.isPhase2Preview && (
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                    Phase 2 Preview
                  </span>
                )}
              </div>

              <div className="font-bold text-sm text-slate-900 mb-0.5">
                {pack.species}
              </div>
              <div className="text-xs text-slate-500 font-medium line-clamp-2 mb-2">
                {pack.description}
              </div>

              <div className="mt-auto pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>{pack.modules.length} Modules</span>
                <span className="text-emerald-700 font-semibold">v{pack.version}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
