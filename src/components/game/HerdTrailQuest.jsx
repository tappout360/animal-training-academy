// WarrenWise Youth Animal Training Academy - Signature Game Mode
// HERD TRAIL QUEST: Oregon Trail-Style Learning Journey & Fortnite-Style Cosmetic Collection

import React, { useState, useEffect } from 'react';
import { 
  Compass, Map, Sparkles, Home, Award, Heart, 
  MapPin, Shield, RotateCcw, AlertTriangle, ChevronRight, Bot
} from 'lucide-react';
import PartyConditionCard from './PartyConditionCard';
import TrailMapView from './TrailMapView';
import ChallengeModal from './ChallengeModal';
import CosmeticsLocker from './CosmeticsLocker';
import HabitatShowcase from './HabitatShowcase';
import CoachSignalModal from './CoachSignalModal';
import { TRAIL_PACKS, getTrailPackById, getAvailableTrailPacks } from '../../data/game/trailPacks';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

export default function HerdTrailQuest({
  learner = { id: 'learner_current', handle: 'CloverChampion42', division: 'junior' },
  activeDivision = 'junior',
  userRole = 'youth',
  onOpenAiTrainer
}) {
  const [questState, setQuestState] = useState(() => TrailQuestEngine.loadState(learner.id));
  const [activeTab, setActiveTab] = useState('trail'); // 'trail' | 'locker' | 'habitat' | 'packs'
  const [activeNode, setActiveNode] = useState(null);
  const [isCoachSignalModalOpen, setIsCoachSignalModalOpen] = useState(false);
  const [packFilter, setPackFilter] = useState('all'); // 'all' | 'livestock' | 'pet'
  const [celebrationCosmetic, setCelebrationCosmetic] = useState(null);

  // Sync state whenever learner changes
  useEffect(() => {
    const loaded = TrailQuestEngine.loadState(learner.id);
    setQuestState(loaded);
  }, [learner.id]);

  const currentTrailPack = getTrailPackById(questState.activeTrailPackId);

  // Challenge Completion Handler
  const handleCompleteNode = ({
    nodeId,
    mile,
    isCorrect,
    conditionDelta,
    suppliesDelta,
    bondXpDelta
  }) => {
    const { updatedState, newlyUnlockedCosmetics } = TrailQuestEngine.completeNode({
      state: questState,
      nodeId,
      mile,
      isCorrect,
      conditionDelta,
      suppliesDelta,
      bondXpDelta,
      division: activeDivision
    });

    setQuestState(updatedState);
    TrailQuestEngine.saveState(learner.id, updatedState);
    setActiveNode(null);

    if (newlyUnlockedCosmetics.length > 0) {
      setCelebrationCosmetic(newlyUnlockedCosmetics[0]);
    }
  };

  const handleEquipCosmetic = (type, cosmeticId) => {
    const updated = TrailQuestEngine.equipCosmetic(questState, type, cosmeticId);
    setQuestState(updated);
    TrailQuestEngine.saveState(learner.id, updated);
  };

  const handleAddCoachSignal = (signalData) => {
    const updated = TrailQuestEngine.addCoachSignal(questState, signalData);
    setQuestState(updated);
    TrailQuestEngine.saveState(learner.id, updated);
  };

  const handleSelectTrailPack = (packId) => {
    const updated = {
      ...questState,
      activeTrailPackId: packId,
      currentMile: 0,
      completedNodeIds: []
    };
    setQuestState(updated);
    TrailQuestEngine.saveState(learner.id, updated);
    setActiveTab('trail');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Game Mode Navigation Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-3xl border border-slate-200 shadow-2xs">
        
        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('trail')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'trail'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Trail Map &amp; Journey</span>
          </button>

          <button
            onClick={() => setActiveTab('locker')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'locker'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Cosmetics Locker</span>
          </button>

          <button
            onClick={() => setActiveTab('habitat')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'habitat'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Campsite Habitat</span>
          </button>

          <button
            onClick={() => setActiveTab('packs')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'packs'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Switch Trail Pack</span>
          </button>
        </div>

        {/* Coach Tool Launcher & AI Guide */}
        <div className="flex items-center gap-2">
          {(userRole === 'coach' || userRole === 'parent' || userRole === 'admin') && (
            <button
              onClick={() => setIsCoachSignalModalOpen(true)}
              className="flex items-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 px-3.5 py-1.5 rounded-xl text-xs font-bold transition border border-purple-300"
            >
              <MapPin className="w-3.5 h-3.5 text-purple-700" />
              <span>Plant Coach Beacon</span>
            </button>
          )}

          <button
            onClick={onOpenAiTrainer}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs"
          >
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Trail Guide</span>
          </button>
        </div>
      </div>

      {/* Main Tab Views */}
      {activeTab === 'trail' && (
        <div className="space-y-6">
          {/* Party Condition & Supplies HUD */}
          <PartyConditionCard
            questState={questState}
            trailPack={currentTrailPack}
            onOpenCosmetics={() => setActiveTab('locker')}
            onOpenHabitat={() => setActiveTab('habitat')}
          />

          {/* Panoramic Trail Map */}
          <TrailMapView
            trailPack={currentTrailPack}
            questState={questState}
            onSelectNode={(node) => setActiveNode(node)}
          />
        </div>
      )}

      {activeTab === 'locker' && (
        <CosmeticsLocker
          questState={questState}
          onEquipCosmetic={handleEquipCosmetic}
        />
      )}

      {activeTab === 'habitat' && (
        <HabitatShowcase
          trailPack={currentTrailPack}
          questState={questState}
        />
      )}

      {activeTab === 'packs' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1">
                Multi-Species Trail Selector
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Choose Your Next Animal Adventure Trail
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Journey with 4-H livestock project animals or beloved companion pets.
              </p>
            </div>

            {/* Livestock vs Pet Filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {['all', 'livestock', 'pet'].map(f => (
                <button
                  key={f}
                  onClick={() => setPackFilter(f)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition ${
                    packFilter === f ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {f === 'all' ? 'All Trails' : f === 'livestock' ? 'Livestock Projects' : 'Companion Pets'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getAvailableTrailPacks(packFilter).map(pack => {
              const isSelected = pack.id === questState.activeTrailPackId;
              return (
                <div
                  key={pack.id}
                  onClick={() => handleSelectTrailPack(pack.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl shadow-xs">
                        {pack.companion.avatarEmoji}
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        pack.type === 'pet' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {pack.type === 'pet' ? 'Pet Trail' : 'Livestock'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{pack.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pack.subtitle}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Companion: <strong>{pack.companion.name}</strong></span>
                    <button
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                        isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? 'Active Trail' : 'Start Journey'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Challenge Modal */}
      {activeNode && (
        <ChallengeModal
          node={activeNode}
          trailPack={currentTrailPack}
          questState={questState}
          onComplete={handleCompleteNode}
          onClose={() => setActiveNode(null)}
          onOpenAiTrainer={onOpenAiTrainer}
        />
      )}

      {/* Coach Signal Modal */}
      <CoachSignalModal
        isOpen={isCoachSignalModalOpen}
        onClose={() => setIsCoachSignalModalOpen(false)}
        nodes={currentTrailPack.nodes}
        coachSignals={questState.coachSignals}
        onAddSignal={handleAddCoachSignal}
      />

      {/* Cosmetic Unlock Celebration Banner */}
      {celebrationCosmetic && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border-2 border-emerald-400 max-w-sm animate-bounce-once space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Cosmetic Unlocked!</span>
            </div>
            <button
              onClick={() => setCelebrationCosmetic(null)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <h4 className="font-bold text-base text-white">{celebrationCosmetic.name}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{celebrationCosmetic.description}</p>
          <button
            onClick={() => {
              setActiveTab('locker');
              setCelebrationCosmetic(null);
            }}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition mt-2"
          >
            Open Locker &amp; Equip
          </button>
        </div>
      )}

    </div>
  );
}
