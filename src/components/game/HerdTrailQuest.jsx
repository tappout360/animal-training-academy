// WarrenWise Youth Animal Training Academy - Signature Game Mode
// HERD TRAIL QUEST: Oregon Trail-Style Learning Journey & Fortnite-Style Cosmetic Collection
// Living Herd System: Morning Barn Check, Living Trail Map, Double Reward Victory, Family Barn Board, Herd Story Log

import React, { useState, useEffect } from 'react';
import { 
  Compass, Map, Sparkles, Home, Award, Heart, 
  MapPin, Shield, RotateCcw, AlertTriangle, ChevronRight, Bot,
  Gift, Flame, Eye, Volume2, CheckCircle2, Lock, Coins, Trophy, ShoppingBag,
  Users, BookOpen, Sun
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
import MorningBarnCheck from './livingHerd/MorningBarnCheck';
import LivingTrailMap from './livingHerd/LivingTrailMap';
import DoubleRewardVictory from './livingHerd/DoubleRewardVictory';
import FamilyBarnBoard from './livingHerd/FamilyBarnBoard';
import HerdStoryLog from './livingHerd/HerdStoryLog';

import { TRAIL_PACKS, getTrailPackById, getAvailableTrailPacks } from '../../data/game/trailPacks';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';
import { LivingHerdEngine } from '../../services/LivingHerdEngine';
import { soundEffects } from '../../utils/audioEffects';

export default function HerdTrailQuest({
  learner = { id: 'learner_current', handle: 'CloverChampion42', division: 'junior' },
  activeDivision = 'junior',
  userRole = 'youth',
  onOpenAiTrainer,
  onCompleteQuiz
}) {
  const [questState, setQuestState] = useState(() => TrailQuestEngine.loadState(learner.id));
  const [dailyStatus, setDailyStatus] = useState(() => LivingHerdEngine.getDailyStatus(learner.id, questState));
  
  // Game starts on Morning Barn Check (Living Herd First!)
  const [activeTab, setActiveTab] = useState('morning'); // 'morning' | 'trail' | 'outfitter' | 'showring' | 'family' | 'story' | 'overworld' | 'locker' | 'habitat'
  const [activeNode, setActiveNode] = useState(null);
  const [activeHazard, setActiveHazard] = useState(null);
  const [isCoachSignalModalOpen, setIsCoachSignalModalOpen] = useState(false);
  const [celebrationCosmetic, setCelebrationCosmetic] = useState(null);
  const [streakModalData, setStreakModalData] = useState(null);
  const [victoryModalData, setVictoryModalData] = useState(null);

  // Accessibility Toggles
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Sync state whenever learner changes
  useEffect(() => {
    const loaded = TrailQuestEngine.loadState(learner.id);
    setQuestState(loaded);
    setDailyStatus(LivingHerdEngine.getDailyStatus(learner.id, loaded));
  }, [learner.id]);

  const currentTrailPack = getTrailPackById(questState.activeTrailPackId);

  // Resolve Morning Barn Check Daily Need
  const handleResolveMorningNeed = (needId, optionId) => {
    const result = LivingHerdEngine.resolveDailyNeed({
      learnerId: learner.id,
      questState,
      needId,
      optionId
    });

    setQuestState(result.updatedQuestState);
    TrailQuestEngine.saveState(learner.id, result.updatedQuestState);
    setDailyStatus(LivingHerdEngine.getDailyStatus(learner.id, result.updatedQuestState));

    if (result.isCorrect) {
      setVictoryModalData({
        earnedPoints: 50,
        earnedBondXp: result.earnedBondXp,
        earnedStars: result.earnedStars,
        earnedTokens: result.earnedTokens,
        isLevelUp: false,
        newBondLevel: result.updatedQuestState.herdBond?.level || 1,
        badgeEarned: 'Morning Barn Steward',
        cosmeticUnlock: 'Sunburst Bandana & Hay Feeder',
        tomorrowTeaser: result.tomorrowTease
      });
    }

    return result;
  };

  // Challenge Completion Handler
  const handleCompleteNode = ({
    nodeId,
    mile,
    isCorrect,
    conditionDelta,
    suppliesDelta,
    bondXpDelta
  }) => {
    const prevBondLevel = questState.herdBond?.level || 1;

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
    } else if (isCorrect) {
      // Trigger Mockup 2 High-Energy Double Reward Celebration!
      const newBondLevel = updatedState.herdBond?.level || 1;
      setVictoryModalData({
        earnedPoints,
        earnedBondXp: 25,
        earnedStars: 1,
        earnedTokens: 5,
        isLevelUp: newBondLevel > prevBondLevel,
        newBondLevel,
        badgeEarned: 'Quiz Champion',
        cosmeticUnlock: newlyUnlockedCosmetics[0]?.name || 'Trail Scarf & Habitat Decoration',
        tomorrowTeaser: 'Tomorrow: High Divide Weather & Oral Defense Practice!'
      });
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

    if (newlyUnlockedCosmetics.length > 0 && !isCorrect) {
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
    soundEffects.playChestPop();
    const result = TrailQuestEngine.claimDailyStreak(questState);
    setQuestState(result.updatedState);
    TrailQuestEngine.saveState(learner.id, result.updatedState);
    setStreakModalData(result);
  };

  const streakCount = questState.dailyStreak?.count || 1;

  return (
    <div className={`max-w-7xl mx-auto space-y-6 ${highContrast ? 'contrast-125' : ''} ${reducedMotion ? 'motion-reduce' : ''}`}>
      
      {/* Top Accessibility & Streak Magnet Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 bg-slate-900 text-white rounded-2xl text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-amber-400">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>Day {streakCount} Daily Trail Streak</span>
          </div>

          <button
            onClick={handleClaimDailyStreak}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] transition shadow-xs cursor-pointer"
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

      {/* Game Navigation Ribbon (Living Herd Navigation) */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-3xl border border-slate-200 shadow-2xs">
        
        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          
          {/* 1. Morning Barn Check (Living Herd Default) */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('morning'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 transition ${
              activeTab === 'morning'
                ? 'bg-amber-500 text-slate-950 shadow-xs ring-2 ring-amber-400/40'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🌅</span>
            <span>Morning Barn Check</span>
          </button>

          {/* 2. Living Trail Map */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('trail'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'trail'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Trail Caravan</span>
          </button>

          {/* 3. Trading Post */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('outfitter'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'outfitter'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Trading Post</span>
            <span className="bg-amber-100 text-amber-900 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold">
              {(questState.trailPoints || 0)} Pts
            </span>
          </button>

          {/* 4. Grand Show Ring */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('showring'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'showring'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Grand Show Ring</span>
          </button>

          {/* 5. Family Barn Board */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('family'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'family'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Family Board</span>
          </button>

          {/* 6. Herd Story Log */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('story'); }}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'story'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Story Log</span>
          </button>

          {/* 7. Overworld */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('overworld'); }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'overworld'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>12 Regions</span>
          </button>

          {/* 8. Gear Locker */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('locker'); }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'locker'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Locker</span>
          </button>

          {/* 9. Campsite */}
          <button
            onClick={() => { soundEffects.playTap(); setActiveTab('habitat'); }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === 'habitat'
                ? 'bg-stone-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Campsite</span>
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
              <span>Plant Beacon</span>
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

      {/* Screen 1: Morning Barn Check (Mockup 1 Left Pane) */}
      {activeTab === 'morning' && (
        <div className="space-y-6">
          <MorningBarnCheck
            dailyStatus={dailyStatus}
            questState={questState}
            trailPack={currentTrailPack}
            onResolveNeed={handleResolveMorningNeed}
            onOpenTrailRun={() => setActiveTab('trail')}
            onOpenAiTrainer={onOpenAiTrainer}
          />
        </div>
      )}

      {/* Screen 2: Living Trail Map & Visual Caravan (Mockup 1 Right Pane) */}
      {activeTab === 'trail' && (
        <div className="space-y-6">
          {/* Oregon Trail Adventure Overworld Viewport */}
          <LivingTrailMap
            questState={questState}
            trailPack={currentTrailPack}
            dailyStatus={dailyStatus}
            onSelectNode={(node) => setActiveNode(node)}
            onOpenMorningCheck={() => setActiveTab('morning')}
            onOpenShowRing={() => setActiveTab('showring')}
            onOpenFamilyBoard={() => setActiveTab('family')}
            onOpenOutfitter={() => setActiveTab('outfitter')}
          />

          {/* Animated Wagon Trail Visual Viewport */}
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

          {/* Detailed Topographic Trail Map */}
          <TrailMapView
            trailPack={currentTrailPack}
            questState={questState}
            onSelectNode={(node) => setActiveNode(node)}
          />
        </div>
      )}

      {/* Screen 3: Trading Post */}
      {activeTab === 'outfitter' && (
        <TrailOutfitterStore
          questState={questState}
          onBuyItem={handleBuyItem}
          onClose={() => setActiveTab('trail')}
        />
      )}

      {/* Screen 4: Championship Show Ring */}
      {activeTab === 'showring' && (
        <ChampionshipShowRing
          questState={questState}
          trailPack={currentTrailPack}
          onSaveAward={handleSaveAward}
          onReturnToTrail={() => setActiveTab('trail')}
        />
      )}

      {/* Screen 5: Family Barn Board */}
      {activeTab === 'family' && (
        <FamilyBarnBoard
          learner={learner}
          userRole={userRole}
          trailPack={currentTrailPack}
        />
      )}

      {/* Screen 6: Herd Story Log */}
      {activeTab === 'story' && (
        <HerdStoryLog
          dailyStatus={dailyStatus}
          questState={questState}
          trailPack={currentTrailPack}
        />
      )}

      {/* Screen 7: 12-Region Overworld */}
      {activeTab === 'overworld' && (
        <OverworldMapView
          questState={questState}
          onSelectTrailPack={handleSelectTrailPack}
        />
      )}

      {/* Screen 8: Gear & Cosmetics Locker */}
      {activeTab === 'locker' && (
        <CosmeticsLocker
          questState={questState}
          onEquipCosmetic={handleEquipCosmetic}
        />
      )}

      {/* Screen 9: Campsite Habitat */}
      {activeTab === 'habitat' && (
        <HabitatShowcase
          trailPack={currentTrailPack}
          questState={questState}
        />
      )}

      {/* Challenge Arena Modal */}
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

      {/* Double Reward Victory Celebration Modal (Mockup 2) */}
      {victoryModalData && (
        <DoubleRewardVictory
          resultData={victoryModalData}
          trailPack={currentTrailPack}
          questState={questState}
          onKeepGoing={() => {
            soundEffects.playTap();
            setVictoryModalData(null);
            setActiveTab('trail');
            // Select next unlocked node
            const nodes = currentTrailPack?.nodes || [];
            const nextNode = nodes.find(n => !questState.completedNodeIds.includes(n.id));
            if (nextNode) {
              setActiveNode(nextNode);
            }
          }}
          onSaveAndRest={() => {
            soundEffects.playTap();
            setVictoryModalData(null);
            setActiveTab('morning');
          }}
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
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
            >
              Continue Trail Adventure
            </button>
          </div>
        </div>
      )}

      {/* Celebration Modal for Unlocked Cosmetic */}
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
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
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
