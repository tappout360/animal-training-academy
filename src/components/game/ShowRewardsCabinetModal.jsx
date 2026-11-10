// WarrenWise Animal Academy - Show Rewards & Trophies Cabinet
// Displays earned ribbons, certificates, and official Honorary Show Animals won with high grades!
// Note: Account holders name their store-adopted animals freely, while Show Ring Award Animals
// carry prestigious official names pre-bestowed by the ARBA/4-H Judges Panel.

import React from 'react';
import { Award, Trophy, Star, Sparkles, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { soundEffects } from '../../utils/audioEffects';

export default function ShowRewardsCabinetModal({
  isOpen,
  onClose,
  awardedAnimals = [],
  earnedRibbons = [],
  onSelectAwardAnimal,
  onPlayShowRing
}) {
  if (!isOpen) return null;

  // Provide starter demonstration award if youth hasn't competed yet
  const displayAwards = awardedAnimals.length > 0 ? awardedAnimals : [
    {
      id: 'demo_champion_sterling',
      officialName: 'Grand Champion Sovereign Sterling',
      placement: '1st Place · Best in Show Grand Champion',
      ribbon: 'Grand Champion Purple Rosette',
      score: 98,
      species: 'Rabbit',
      breed: 'Holland Lop (Tortoise Senior Buck)',
      colorHex: '#D27D2D',
      isOfficialShowAward: true,
      earnedAt: 'County Fair Finals',
      certificateId: 'WW-SHOW-CERT-2026-CHAMP',
      judgeName: 'Judge Margaret Miller',
      specialPerk: 'Honorary Champion: 100% immune to ring jitters and provides +20 Herd Readiness boost'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full border-2 border-purple-500/80 shadow-2xl overflow-hidden text-stone-900 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-stone-900 p-5 sm:p-6 text-white shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-[11px] font-black uppercase tracking-wider mb-1.5 border border-purple-300/30">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Official 4-H &amp; ARBA Trophy Cabinet</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>Show Rewards &amp; Honorary Animals</span>
              <span className="text-xs bg-amber-400 text-stone-950 font-black px-2.5 py-0.5 rounded-full">
                {displayAwards.length} Won
              </span>
            </h2>
            <p className="text-xs text-purple-200/90 mt-0.5 max-w-xl">
              Honorary champion animals won by scoring high grades (85+ points) in the Fair Championship Show Ring.
            </p>
          </div>

          <button
            onClick={onClose}
            className="self-start sm:self-center p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Naming Protocol Callout */}
        <div className="bg-amber-50 border-b border-amber-200 p-3.5 px-6 text-xs text-amber-950 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Official Naming Protocol:</strong> Account holders can choose and customize any pet's name in the Pet Store. 
            However, animals won through <strong>high grades in the Championship Show Ring</strong> arrive with their official honorary title 
            <strong>pre-bestowed by the ARBA/4-H Judges Panel</strong> as an unchangeable mark of excellence in the official digital barn record book!
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* SECTION 1: AWARDED SHOW ANIMALS */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span>Awarded Champion Animals ({displayAwards.length})</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayAwards.map((animal) => (
                <div 
                  key={animal.id}
                  className="bg-stone-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-4 transition-all shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 text-amber-300 flex items-center justify-center text-2xl shadow-md shrink-0">
                        🏆
                      </div>
                      <div>
                        <div className="inline-block bg-purple-100 text-purple-900 text-[10px] font-black px-2 py-0.5 rounded-full mb-0.5">
                          🎖️ Pre-Named Show Reward
                        </div>
                        <h4 className="text-sm font-black text-stone-900 leading-tight">
                          {animal.officialName}
                        </h4>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          {animal.breed} • {animal.species}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-black font-mono bg-amber-100 text-amber-900 px-2 py-1 rounded-xl">
                      {animal.score}/100
                    </span>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 text-[11px] space-y-1">
                    <div className="flex justify-between text-stone-600">
                      <span>Placement:</span>
                      <strong className="text-purple-900">{animal.placement}</strong>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Awarded By:</span>
                      <strong className="text-stone-800">{animal.judgeName || 'Judge Margaret Miller'}</strong>
                    </div>
                    <div className="pt-1 border-t border-stone-100 text-emerald-700 font-bold">
                      ✨ {animal.specialPerk}
                    </div>
                  </div>

                  {onSelectAwardAnimal && (
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playSuccessChime();
                        onSelectAwardAnimal(animal);
                        onClose();
                      }}
                      className="w-full py-2.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-black text-xs transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Bring {animal.officialName} to Barn / Wagon</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: OFFICIAL RIBBONS & ROSETTES EARNED */}
          {earnedRibbons.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span>Earned Championship Ribbons ({earnedRibbons.length})</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {earnedRibbons.map((rib, idx) => (
                  <div key={rib.id || idx} className="bg-stone-50 border border-stone-200 rounded-2xl p-3.5 text-center space-y-1.5">
                    <span className="text-3xl inline-block">{rib.ribbonIcon || '🎗️'}</span>
                    <div className="font-black text-xs text-stone-900">{rib.ribbonTitle}</div>
                    <div className="text-[10px] text-purple-700 font-bold">{rib.placement}</div>
                    <div className="text-[10px] text-stone-500 font-mono">Score: {rib.totalScore}/100</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: CALL TO ACTION */}
          <div className="bg-gradient-to-r from-stone-900 to-indigo-950 text-white p-5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-black text-white">Want to Win More Honorary Show Animals?</h4>
              <p className="text-xs text-stone-300">
                Drive your wagon to Mile 100 on any trail, care for your animals daily, and ace the 4-H Oral Defense!
              </p>
            </div>

            {onPlayShowRing && (
              <button
                type="button"
                onClick={() => {
                  onPlayShowRing();
                  onClose();
                }}
                className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs shrink-0 transition flex items-center gap-1.5 shadow-lg cursor-pointer"
              >
                <span>Enter Championship Ring</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
