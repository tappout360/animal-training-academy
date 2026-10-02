// WarrenWise Animal Academy - Herd Trail Quest
// Fair Day Simulation Finale: Multi-Station Practice Event with Simulation Practice Ribbons

import React, { useState } from 'react';
import { 
  Trophy, Award, CheckCircle2, AlertCircle, X, 
  Sparkles, Star, ChevronRight, ShieldCheck, Heart 
} from 'lucide-react';

export default function FairDaySimFinale({
  node,
  trailPack,
  onComplete,
  onClose
}) {
  const [currentStationIdx, setCurrentStationIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const stations = node.stations || [
    { name: 'Station 1: Health Inspection', question: 'What is the earliest reliable indicator of illness in small stock or companion pets?', correctOption: 'Drop in body weight, dull eyes, or reduced water intake' },
    { name: 'Station 2: Showmanship Stance', question: 'How should an exhibitor maintain their position relative to the judge in the ring?', correctOption: 'Always keep an unobstructed view between the judge and animal, never standing between them' },
    { name: 'Station 3: 4-H Character Pledge', question: 'What does good sportsmanship demand after the class ribbons are awarded?', correctOption: 'Congratulate the winner with a smile, praise your companion, and thank the judge' }
  ];

  const currentStation = stations[currentStationIdx];

  const handleSelectAnswer = (ans) => {
    setUserAnswers(prev => ({ ...prev, [currentStationIdx]: ans }));
  };

  const handleNextStation = () => {
    if (currentStationIdx < stations.length - 1) {
      setCurrentStationIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // Determine practice ribbon color
  const correctCount = Object.keys(userAnswers).length; // Simulated practice passes
  const ribbonTier = correctCount >= 3 ? 'Blue Ribbon (Grand Practice Champion)' : 'Red Ribbon (Practice Reserve Champion)';
  const ribbonColor = correctCount >= 3 ? 'from-blue-600 to-indigo-700' : 'from-rose-500 to-red-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden space-y-6 p-6 sm:p-8 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block">
                Grand Arena Finale • Simulation Event
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {trailPack.name} Fair Day Sim
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isCompleted ? (
          /* Multi-Station Quiz Carousel */
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>{currentStation.name}</span>
              <span>Station {currentStationIdx + 1} of {stations.length}</span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-semibold text-slate-900 leading-relaxed">
              {currentStation.question}
            </div>

            {/* Answer Options */}
            <div className="space-y-2.5">
              <button
                onClick={() => handleSelectAnswer(currentStation.correctOption)}
                className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-center gap-3 ${
                  userAnswers[currentStationIdx] === currentStation.correctOption
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <span>{currentStation.correctOption}</span>
              </button>

              <button
                onClick={() => handleSelectAnswer('incorrect_mock')}
                className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition flex items-center gap-3 ${
                  userAnswers[currentStationIdx] === 'incorrect_mock'
                    ? 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold shrink-0">
                  ✕
                </span>
                <span>Ignore the symptoms and hope for the best</span>
              </button>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                disabled={!userAnswers[currentStationIdx]}
                onClick={handleNextStation}
                className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center gap-1.5"
              >
                <span>{currentStationIdx === stations.length - 1 ? 'Calculate Simulation Placings' : 'Next Station'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Grand Finale Award Ceremony */
          <div className="text-center space-y-6 py-4">
            <div className={`w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br ${ribbonColor} text-white flex items-center justify-center text-5xl shadow-xl animate-bounce-once`}>
              🏅
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Practice Simulation Complete!
              </span>
              <h3 className="text-2xl font-black text-slate-900 pt-2">{ribbonTier}</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Congratulations! You and your companion {trailPack.companion.name} successfully completed the Fair Day Simulation stations.
              </p>
            </div>

            {/* Mandatory Non-Official Simulation Ribbon Disclaimer */}
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-[11px] text-amber-900 text-center max-w-md mx-auto">
              <strong>Simulation Practice Notice:</strong> This award ribbon is an in-app educational simulation badge designed for skill development and record books. It does not constitute an official county, state, ARBA, or 4-H fair award.
            </div>

            <div className="pt-2">
              <button
                onClick={() => onComplete({ success: true, ribbon: ribbonTier })}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md transition"
              >
                Claim Trail Rewards &amp; Add Ribbon to Campsite
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
