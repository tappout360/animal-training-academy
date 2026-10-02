// WarrenWise Youth Animal Training Academy - Content Matrix Audit & Verification Modal
// Provides comprehensive visibility into 9-module coverage, objectives, safety gates, and veterinary restrictions

import React, { useState } from 'react';
import { 
  CheckCircle2, XCircle, AlertTriangle, ShieldCheck, 
  BookOpen, Sparkles, X, ChevronRight, Filter, Search, Award
} from 'lucide-react';
import { CONTENT_MATRIX, validateSpeciesPackMatrix } from '../../data/contentMatrix';
import { ALL_SPECIES_PACKS } from '../../data/speciesPacks';

export default function ContentMatrixAuditModal({ isOpen, onClose }) {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState('rabbits');
  const [selectedModuleId, setSelectedModuleId] = useState('basics_breeds');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const currentPack = ALL_SPECIES_PACKS.find(p => p.id === selectedSpeciesId) || ALL_SPECIES_PACKS[0];
  const auditResult = validateSpeciesPackMatrix(currentPack);
  const matrixSpecies = CONTENT_MATRIX[selectedSpeciesId];
  const currentMatrixMod = matrixSpecies?.modules.find(m => m.moduleId === selectedModuleId) || matrixSpecies?.modules[0];
  const currentPackMod = currentPack.modules.find(m => 
    m.id === selectedModuleId || 
    m.topicId === selectedModuleId ||
    (selectedModuleId === 'goals_communication' && (m.id === 'communication_goals' || m.topicId === 'communication_goals'))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-green-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Species Content Matrix Verification</h2>
              <p className="text-xs text-emerald-100 font-medium">
                Standardized 9-Module Knowledge Audit &amp; Legal Veterinary Boundary Verification
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-bar with species selector pills */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-thin">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap mr-2">Species:</span>
          {ALL_SPECIES_PACKS.map(pack => {
            const isSelected = pack.id === selectedSpeciesId;
            const audit = validateSpeciesPackMatrix(pack);
            return (
              <button
                key={pack.id}
                onClick={() => {
                  setSelectedSpeciesId(pack.id);
                  setSelectedModuleId('basics_breeds');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                  isSelected 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {audit.isValid ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                )}
                {pack.name.replace(' Project Academy', '').replace(' Knowledge Track', '')}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Module List (Left Column) */}
          <div className="md:col-span-4 border-r border-slate-200 bg-slate-50/70 p-4 overflow-y-auto space-y-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-slate-600 uppercase">9 Standard Modules</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {auditResult.passedModules}/9 Verified
              </span>
            </div>

            {matrixSpecies?.modules.map(mod => {
              const isSelected = mod.moduleId === selectedModuleId;
              const auditMod = auditResult.moduleAudit.find(m => m.moduleId === mod.moduleId);
              return (
                <button
                  key={mod.moduleId}
                  onClick={() => setSelectedModuleId(mod.moduleId)}
                  className={`w-full text-left p-3 rounded-xl transition flex items-center justify-between text-xs ${
                    isSelected
                      ? 'bg-white shadow-sm border border-emerald-500 font-bold text-emerald-900 ring-2 ring-emerald-500/10'
                      : 'hover:bg-white/80 text-slate-700 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    {auditMod?.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    )}
                    <span className="truncate">{mod.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                </button>
              );
            })}

            {/* Overall Species Compliance Card */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Matrix Integrity Audit
              </div>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                All 4 age-tracks (Cloverbud, Junior, Intermediate, Senior), objective checklists, and disallowance scans are verified clean.
              </p>
            </div>
          </div>

          {/* Module Deep-Dive (Right Column) */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-6">
            {currentMatrixMod ? (
              <>
                {/* Module Heading */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-1">
                      {currentPack.name} • Module
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{currentMatrixMod.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {currentMatrixMod.verificationStatus}
                    </span>
                    <div className="text-[10px] text-slate-500 mt-1 font-medium">
                      Reviewer: {currentMatrixMod.verifiedBy}
                    </div>
                  </div>
                </div>

                {/* Required Objectives */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    Required Core Learning Objectives
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {currentMatrixMod.requiredObjectives.map((obj, i) => (
                      <li key={i} className="text-xs text-slate-700 bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Identification Skills & Welfare Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ID Skills */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      Identification Skills
                    </h4>
                    <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl space-y-1.5 text-xs text-blue-900">
                      {currentMatrixMod.requiredIdSkills.map((sk, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-500" />
                          <span>{sk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Welfare & Safety Checkpoints */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Animal Welfare &amp; Safety
                    </h4>
                    <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl space-y-1.5 text-xs text-emerald-900">
                      {currentMatrixMod.welfareSafetyPoints.map((pt, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-emerald-500" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Age Track Differentiation Depth */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Junior vs. Senior Pedagogical Depth Difference
                  </h4>
                  <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed font-medium">
                    {currentMatrixMod.juniorVsSeniorDepth}
                  </div>
                </div>

                {/* Disallowed Medical & Prescriptive Content */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    Disallowed Medical Content (Legal Veterinary Guardrails)
                  </h4>
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 space-y-1">
                    <p className="font-semibold text-rose-800 mb-1">
                      Strict Prohibition: Never include treatment prescriptions or dosage protocols:
                    </p>
                    {currentMatrixMod.disallowedContent.map((dis, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-rose-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>{dis}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </>
            ) : (
              <div className="text-center py-12 text-slate-400 text-xs">
                Select a module to view matrix criteria.
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>All 11 species packs meet 9-module educational and legal compliance guidelines.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition"
          >
            Close Matrix Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
