// WarrenWise Youth Animal Training Academy - Signature Game Mode
// HERD TRAIL QUEST: Oregon Trail-Style Learning Journey & Fortnite-Style Cosmetic Collection
// Multi-Species (12 Overworld Trails), Upgraded Equipment & Pet Rewards, Safe Care Boundaries

import React, { useState, useEffect } from 'react';
import { 
  Compass, Map, Sparkles, Home, Award, Heart, 
  MapPin, Shield, RotateCcw, AlertTriangle, ChevronRight, Bot,
  Gift, Flame, Eye, Volume2, CheckCircle2, Lock, Coins, Trophy, ShoppingBag
} from 'lucide-react';
import PartyConditionCard from './PartyConditionCard';
import TrailMapView from './TrailMapView';
import OverworldMapView from './OverworldMapView';
import ChallengeModal from './ChallengeModal';
import CosmeticsLocker from './CosmeticsLocker';
import HabitatShowcase from './HabitatShowcase';
import CoachSignalModal from './CoachSignalModal';
import VisualWagonTrailViewport from './VisualWagonTrailViewport';
import TrailOutfitterStore from './TrailOutfitterStore';
import ChampionshipShowRing from './ChampionshipShowRing';
import TrailHazardModal from './TrailHazardModal';
import { TRAIL_PACKS, getTrailPackById, getAvailableTrailPacks } from '../../data/game/trailPacks';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

export default function HerdTrailQuest({
  learner = { id: 'learner_current', handle: 'CloverChampion42', division: 'junior' },
  activeDivision = 'junior',
  userRole = 'youth',
  onOpenAiTrainer,
  onCompleteQuiz
}) {
  const [questState, setQuestState] = useState(() => TrailQuestEngine.loadState(learner.id));
  const [activeTab, setActiveTab] = useState('trail'); // 'trail' | 'overworld' | 'outfitter' | 'showring' | 'locker' | 'habitat'
  const [activeNode, setActiveNode] = useState(null);
  const [activeHazard, setActiveHazard] = useState(null);
  const [isCoachSignalModalOpen, setIsCoachSignalModalOpen] = useState(false);
  const [celebrationCosmetic, setCelebrationCosmetic] = useState(null);
  const [streakModalData, setStreakModalData] = useState(null);

  // Accessibility Toggles
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

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
    const { 
      updatedState, 
      newlyUnlockedCosmetics, 
      earnedPoints, 
      triggeredHazard, 
      difficultyTier 
    } = TrailQuestEngine.completeNode({
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

    // If answer was incorrect, trigger the dramatic frontier calamity!
    if (triggeredHazard) {
      setActiveHazard(triggeredHazard);
    }

    // Sync to Academy Mastery Engine & 4-H Badges
    if (onCompleteQuiz && isCorrect) {
      try {
        onCompleteQuiz({
          score: 100,
          passed: true,
          answers: [{ questionId: nodeId, isCorrect: true }]
        });
      } catch (err) {
        console.warn('Mastery sync callback notice:', err);
      }
    }

    if (newlyUnlockedCosmetics.length > 0) {
      setCelebrationCosmetic(newlyUnlockedCosmetics[0]);
    }
  };

  const handleCareAction = (type) => {
    const { updatedState, message } = TrailQuestEngine.performTrailCare(questState, type);
    setQuestState(updatedState);
    TrailQuestEngine.saveState(learner.id, updatedState);
    return { message };
  };

  const handleBuyItem = (itemId) => {
    const { updatedState } = TrailQuestEngine.buyOutfitterItem(questState, itemId);
    setQuestState(updatedState);
    TrailQuestEngine.saveState(learner.id, updatedState);
  };

  const handleSaveAward = (awardRecord) => {
    // Award record already saved in evaluateShowRing inside engine
    const refreshed = TrailQuestEngine.loadState(learner.id);
    setQuestState(refreshed);
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

  const handleClaimDailyStreak = () => {
    const result = TrailQuestEngine.claimDailyStreak(questState);
    setQuestState(result.updatedState);
    TrailQuestEngine.saveState(learner.id, result.updatedState);
    setStreakModalData(result);
  };

  const streakCount = questState.dailyStreak?.count || 1;

  return (
    <div className={`max-w-7xl mx-auto space-y-6 ${highContrast ? 'contrast-125' : ''} ${reducedMotion ? 'motion-reduce' : ''}`}>
      
      {/* Top Accessibility & Streak Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 bg-slate-900 text-white rounded-2xl text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-amber-400">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>Day {streakCount} Daily Trail Streak</span>
          </div>

          <button
            onClick={handleClaimDailyStreak}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] transition shadow-xs"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>Open Daily Care Chest</span>
          </button>
        </div>

        {/* Accessibility Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
              reducedMotion 
                ? 'bg-emerald-600 text-white border-emerald-400' 
                : 'bg-white/10 text-slate-300 border-white/15 hover:bg-white/20'
            }`}
          >
            {reducedMotion ? '✓ Reduced Motion' : 'Reduced Motion'}
          </button>

          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition border ${
              highContrast 
                ? 'bg-amber-500 text-slate-950 border-amber-300' 
                : 'bg-white/10 text-slate-300 border-white/15 hover:bg-white/20'
            }`}
          >
            {highContrast ? '✓ High Contrast' : 'High Contrast'}
          </button>
        </div>
      </div>

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
            <span>Trail Map &amp; Caravan</span>
          </button>

          <button
            onClick={() => setActiveTab('outfitter')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'outfitter'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Trading Post</span>
            <span className="bg-amber-100 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold">
              {(questState.trailPoints || 0)} Pts
            </span>
          </button>

          <button
            onClick={() => setActiveTab('showring')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'showring'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Grand Show Ring</span>
          </button>

          <button
            onClick={() => setActiveTab('overworld')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'overworld'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>12-Region Overworld</span>
          </button>

          <button
            onClick={() => setActiveTab('locker')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'locker'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Gear &amp; Pets</span>
          </button>

          <button
            onClick={() => setActiveTab('habitat')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'habitat'
                ? 'bg-stone-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Campsite Habitat</span>
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
          {/* Animated Pioneer Wagon Trail Visual Viewport */}
          <VisualWagonTrailViewport
            questState={questState}
            trailPack={currentTrailPack}
            onCareAction={handleCareAction}
            onOpenOutfitter={() => setActiveTab('outfitter')}
            onEnterShowRing={() => setActiveTab('showring')}
            onAskMentor={() => onOpenAiTrainer?.()}
          />

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

      {activeTab === 'outfitter' && (
        <TrailOutfitterStore
          questState={questState}
          onBuyItem={handleBuyItem}
          onClose={() => setActiveTab('trail')}
        />
      )}

      {activeTab === 'showring' && (
        <ChampionshipShowRing
          questState={questState}
          trailPack={currentTrailPack}
          onSaveAward={handleSaveAward}
          onReturnToTrail={() => setActiveTab('trail')}
        />
      )}

      {activeTab === 'overworld' && (
        <OverworldMapView
          questState={questState}
          onSelectTrailPack={handleSelectTrailPack}
        />
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

      {/* Interactive Challenge Modal */}
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
      {isCoachSignalModalOpen && (
        <CoachSignalModal
          trailPack={currentTrailPack}
          onAddSignal={handleAddCoachSignal}
          onClose={() => setIsCoachSignalModalOpen(false)}
        />
      )}

      {/* Daily Streak Reward Chest Modal */}
      {streakModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
              🎁
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">
                {streakModalData.alreadyClaimed ? 'Today’s Chest Opened' : 'Daily Trail Care Chest!'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {streakModalData.rewardSummary}
              </p>
            </div>
            <button
              onClick={() => setStreakModalData(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition shadow-xs"
            >
              Continue Trail Adventure
            </button>
          </div>
        </div>
      )}

      {/* Celebration Modal for Unlocked Cosmetic (Skin, Pet, or Upgraded Equipment) */}
      {celebrationCosmetic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-3xl mx-auto shadow-lg">
              {celebrationCosmetic.avatarEmoji || celebrationCosmetic.gearEmoji || '✨'}
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full inline-block mb-1">
                New Learning Reward Unlocked!
              </div>
              <h3 className="text-xl font-black text-slate-900">{celebrationCosmetic.name}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{celebrationCosmetic.description}</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600">
              Criteria: {celebrationCosmetic.unlockCriteria}
            </div>
            <button
              onClick={() => setCelebrationCosmetic(null)}
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition shadow-xs"
            >
              Awesome! Add to Locker
            </button>
          </div>
        </div>
      )}

      {/* Frontier Trail Calamity / Hazard Modal */}
      {activeHazard && (
        <TrailHazardModal
          hazard={activeHazard}
          onAcknowledge={() => setActiveHazard(null)}
          onAskWarrenWise={() => onOpenAiTrainer?.()}
        />
      )}

      {/* Permanent Independent Educational Disclaimer */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center text-xs text-slate-500 leading-relaxed font-medium">
        WarrenWise Animal Academy &amp; Herd Trail Quest are independent educational simulations. 
        Not affiliated with, endorsed by, or representing the National 4-H Council, USDA NIFA, ARBA, or YQCA. Practice awards are non-official mastery recognitions.
      </div>

    </div>
  );
}
