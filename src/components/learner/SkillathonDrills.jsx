// WarrenWise Youth Animal Training Academy - Skillathon ID Drills

import React, { useState } from 'react';
import { Target, CheckCircle2, XCircle, Lightbulb, RefreshCw, Award, ArrowRight } from 'lucide-react';
import { SKILLATHON_DRILLS } from '../../data/skillathonData';

export default function SkillathonDrills({ selectedSpeciesId = 'rabbits' }) {
  const speciesKey = selectedSpeciesId === 'cavies' ? 'cavies' : 'rabbits';
  const drillData = SKILLATHON_DRILLS[speciesKey] || SKILLATHON_DRILLS.rabbits;

  const [activeStationIdx, setActiveStationIdx] = useState(0);
  const [currentDrillIdx, setCurrentDrillIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [scoreMap, setScoreMap] = useState({});

  const currentStation = drillData.stations[activeStationIdx];
  const currentDrill = currentStation.drills[currentDrillIdx];
  const drillKey = `${activeStationIdx}_${currentDrillIdx}`;
  const isAnswered = scoreMap[drillKey] !== undefined;

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    const isCorrect = idx === currentDrill.correctIndex;
    setScoreMap(prev => ({ ...prev, [drillKey]: isCorrect }));
  };

  const handleNextDrill = () => {
    setSelectedOpt(null);
    setShowHint(false);
    if (currentDrillIdx < currentStation.drills.length - 1) {
      setCurrentDrillIdx(currentDrillIdx + 1);
    } else {
      // Station finished
      if (activeStationIdx < drillData.stations.length - 1) {
        setActiveStationIdx(activeStationIdx + 1);
        setCurrentDrillIdx(0);
      }
    }
  };

  const handleRestart = () => {
    setScoreMap({});
    setCurrentDrillIdx(0);
    setActiveStationIdx(0);
    setSelectedOpt(null);
    setShowHint(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
          <Target className="w-4 h-4 text-indigo-400" />
          <span>Interactive 4-H Skillathon Stations</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          {drillData.speciesName} Skillathon Practice Lab
        </h1>
        <p className="text-indigo-100 text-xs sm:text-sm mt-1 max-w-xl">
          Simulate competitive county and state 4-H Skillathon stations: Breed Identification, Body Anatomy, Tack & Equipment, and Nutrition.
        </p>
      </div>

      {/* Station Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {drillData.stations.map((station, sIdx) => {
          const isActive = sIdx === activeStationIdx;
          return (
            <button
              key={station.id}
              onClick={() => {
                setActiveStationIdx(sIdx);
                setCurrentDrillIdx(0);
                setSelectedOpt(null);
                setShowHint(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Station {sIdx + 1}: {station.title.split(' ')[0]}
            </button>
          );
        })}
      </div>

      {/* Main Station Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {currentStation.title}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentStation.description}
            </p>
          </div>
          <div className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            Drill {currentDrillIdx + 1} of {currentStation.drills.length}
          </div>
        </div>

        {/* Drill Prompt */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
          {currentDrill.prompt}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentDrill.options.map((opt, oIdx) => {
            const isSelected = selectedOpt === oIdx;
            let btnClass = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 bg-white';

            if (isAnswered) {
              if (oIdx === currentDrill.correctIndex) {
                btnClass = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-bold';
              } else if (isSelected) {
                btnClass = 'border-rose-300 bg-rose-50 text-rose-950';
              } else {
                btnClass = 'border-slate-200 bg-white opacity-40 text-slate-400';
              }
            }

            return (
              <button
                key={oIdx}
                onClick={() => handleSelectOption(oIdx)}
                disabled={isAnswered}
                className={`p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between shadow-2xs ${btnClass}`}
              >
                <span>{opt}</span>
                {isAnswered && oIdx === currentDrill.correctIndex && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                )}
                {isAnswered && isSelected && oIdx !== currentDrill.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint drawer */}
        {!isAnswered && currentDrill.hint && (
          <div className="pt-2">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Show Coach Hint</span>
              </button>
            ) : (
              <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg text-xs flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span><strong>Hint:</strong> {currentDrill.hint}</span>
              </div>
            )}
          </div>
        )}

        {/* Feedback on answer */}
        {isAnswered && (
          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-950 text-xs sm:text-sm space-y-1 animate-fadeIn">
            <div className="font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Skillathon Evaluation:</span>
            </div>
            <p className="text-slate-700">{currentDrill.feedback}</p>
          </div>
        )}

        {/* Action Button */}
        {isAnswered && (
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={handleNextDrill}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all"
            >
              <span>{currentDrillIdx < currentStation.drills.length - 1 ? 'Next Drill' : 'Next Station'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
