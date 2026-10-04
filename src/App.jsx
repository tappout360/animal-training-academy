// WarrenWise Youth Animal Training Academy - Master Standalone Application

import React, { useState, useEffect } from 'react';
import LegalDisclaimerBanner from './components/common/LegalDisclaimerBanner';
import AgeDivisionSelector from './components/common/AgeDivisionSelector';
import Navbar from './components/common/Navbar';
import SpeciesPackSelector from './components/learner/SpeciesPackSelector';
import ModuleBrowser from './components/learner/ModuleBrowser';
import LessonViewer from './components/learner/LessonViewer';
import QuizEngine from './components/learner/QuizEngine';
import SkillathonDrills from './components/learner/SkillathonDrills';
import ShowmanshipOralStudio from './components/learner/ShowmanshipOralStudio';
import EthicsScenarioSimulator from './components/learner/EthicsScenarioSimulator';
import MasteryMap from './components/learner/MasteryMap';
import MyAchievements from './components/certificates/MyAchievements';
import WarrenWiseTrainerModal from './components/ai/WarrenWiseTrainerModal';
import CoachDashboard from './components/coach/CoachDashboard';
import ContentGovernanceHub from './components/governance/ContentGovernanceHub';
import AdminControlCenter from './components/admin/AdminControlCenter';
import HerdTrailQuest from './components/game/HerdTrailQuest';
import YouthSessionGuard from './components/common/YouthSessionGuard';
import ParentControlCenter from './components/parent/ParentControlCenter';
import RoleAuthGateModal from './components/common/RoleAuthGateModal';
import BarnRecordBook from './components/recordbook/BarnRecordBook';
import SubscriptionPlansModal from './components/billing/SubscriptionPlansModal';

import { getSpeciesPackById } from './data/speciesPacks';
import { canCoachAccessLearner } from './services/YouthSafetyService';
import { 
  SEED_LEARNERS, SEED_PROGRESS, SEED_ASSIGNMENTS, 
  SEED_OBSERVATIONS 
} from './db/seedData';
import { INITIAL_GOVERNANCE_ITEMS } from './services/GovernanceService';
import { INITIAL_FEATURE_FLAGS, LEGAL_DISCLAIMERS } from './config/constants';

export default function App() {
  // Global App States
  const [activeRole, setActiveRole] = useState('youth'); // 'youth' | 'parent' | 'coach' | 'admin'
  const [activeDivision, setActiveDivision] = useState('junior'); // 'cloverbud' | 'junior' | 'intermediate' | 'senior'
  const [selectedSpeciesId, setSelectedSpeciesId] = useState('rabbits');
  const [activeTab, setActiveTab] = useState('modules'); 
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Lesson & Quiz Drill-Down States
  const [activeLessonModule, setActiveLessonModule] = useState(null);
  const [activeQuizModule, setActiveQuizModule] = useState(null);

  // Persisted Database State
  const [learners, setLearners] = useState(SEED_LEARNERS);
  const [progressList, setProgressList] = useState(SEED_PROGRESS);
  const [assignments, setAssignments] = useState(SEED_ASSIGNMENTS);
  const [observations, setObservations] = useState(SEED_OBSERVATIONS);
  const [governanceItems, setGovernanceItems] = useState(INITIAL_GOVERNANCE_ITEMS);
  const [featureFlags, setFeatureFlags] = useState(INITIAL_FEATURE_FLAGS);
  const [aiAuditLogs, setAiAuditLogs] = useState([]);

  // Active learner is index 0 (Sammy Miller - CloverChampion42)
  const currentLearner = learners[0];

  // Permission Gate State
  const [gateTargetRole, setGateTargetRole] = useState(null);

  // Authenticated Role Switcher
  const handleSelectRole = (newRole) => {
    if (newRole === activeRole) return;

    // Switching to youth is always permitted (safe default)
    if (newRole === 'youth') {
      setActiveRole('youth');
      setActiveLessonModule(null);
      setActiveQuizModule(null);
      setActiveTab('modules');
      return;
    }

    // Switching into parent, coach, or admin requires PIN / credentials verification
    setGateTargetRole(newRole);
  };

  const handleGateSuccess = (authenticatedRole) => {
    setActiveRole(authenticatedRole);
    setGateTargetRole(null);
    setActiveLessonModule(null);
    setActiveQuizModule(null);
    if (authenticatedRole === 'parent') setActiveTab('parent_controls');
    else if (authenticatedRole === 'coach') setActiveTab('roster');
    else if (authenticatedRole === 'admin') setActiveTab('governance');
  };

  const currentPack = getSpeciesPackById(selectedSpeciesId);

  // Quiz completion handler
  const handleCompleteQuiz = ({ speciesId, moduleId, score, passed }) => {
    const existingIdx = progressList.findIndex(
      p => p.learnerId === currentLearner.id && p.speciesId === speciesId && p.moduleId === moduleId
    );

    const record = {
      id: `prg_${Date.now()}`,
      learnerId: currentLearner.id,
      speciesId,
      moduleId,
      status: 'completed',
      score,
      completedAt: new Date().toISOString()
    };

    if (existingIdx >= 0) {
      const updated = [...progressList];
      updated[existingIdx] = record;
      setProgressList(updated);
    } else {
      setProgressList(prev => [...prev, record]);
    }
  };

  const handleAddAssignment = (newAsg) => {
    setAssignments(prev => [newAsg, ...prev]);
  };

  const handleSaveObservation = (newObs) => {
    setObservations(prev => [newObs, ...prev]);
  };

  const handleUpdateGovernance = (updatedItem) => {
    setGovernanceItems(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-200">
      {/* Mandatory Accuracy & Legal Disclaimer Header */}
      <LegalDisclaimerBanner />

      {/* Main Navigation Header */}
      <Navbar
        activeRole={activeRole}
        onSelectRole={handleSelectRole}
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setActiveLessonModule(null);
          setActiveQuizModule(null);
        }}
        isOfflineMode={isOfflineMode}
        onToggleOffline={() => setIsOfflineMode(!isOfflineMode)}
        onOpenAiTrainer={() => setIsAiModalOpen(true)}
        onOpenPlans={() => setIsSubscriptionModalOpen(true)}
        learner={currentLearner}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Youth Learner Experience */}
        {activeRole === 'youth' && (
          <YouthSessionGuard learner={currentLearner} activeDivision={activeDivision}>
            <div className="space-y-6">
              {/* Age Division Selector Toolbar */}
              <AgeDivisionSelector
                selectedDivision={activeDivision}
                onSelectDivision={setActiveDivision}
              />

              {/* Drill-down: Active Quiz View */}
              {activeQuizModule ? (
                <QuizEngine
                  module={activeQuizModule}
                  pack={currentPack}
                  division={activeDivision}
                  onCompleteQuiz={handleCompleteQuiz}
                  onBack={() => setActiveQuizModule(null)}
                  onOpenAiCoach={() => setIsAiModalOpen(true)}
                />
              ) : activeLessonModule ? (
                /* Drill-down: Active Lesson View */
                <LessonViewer
                  module={activeLessonModule}
                  pack={currentPack}
                  division={activeDivision}
                  onBack={() => setActiveLessonModule(null)}
                  onStartQuiz={() => {
                    setActiveQuizModule(activeLessonModule);
                    setActiveLessonModule(null);
                  }}
                  onAskAi={() => setIsAiModalOpen(true)}
                />
              ) : (
                /* Normal Tab Views */
                <>
                  {activeTab === 'herd_trail' && (
                    <HerdTrailQuest
                      learner={currentLearner}
                      activeDivision={activeDivision}
                      userRole={activeRole}
                      onOpenAiTrainer={() => setIsAiModalOpen(true)}
                      onCompleteQuiz={handleCompleteQuiz}
                    />
                  )}

                  {activeTab === 'modules' && (
                    <div className="space-y-6">
                      <SpeciesPackSelector
                        selectedSpeciesId={selectedSpeciesId}
                        onSelectSpecies={setSelectedSpeciesId}
                      />

                      <ModuleBrowser
                        pack={currentPack}
                        division={activeDivision}
                        progressList={progressList}
                        onOpenLesson={(mod) => setActiveLessonModule(mod)}
                        onOpenQuiz={(mod) => setActiveQuizModule(mod)}
                      />
                    </div>
                  )}

                  {activeTab === 'skillathon' && (
                    <SkillathonDrills selectedSpeciesId={selectedSpeciesId} />
                  )}

                  {activeTab === 'showmanship' && (
                    <ShowmanshipOralStudio
                      selectedSpeciesId={selectedSpeciesId}
                      division={activeDivision}
                    />
                  )}

                  {activeTab === 'record_book' && (
                    <BarnRecordBook
                      learnerId={currentLearner.id}
                      learnerHandle={currentLearner.handle}
                    />
                  )}

                  {activeTab === 'ethics' && (
                    <EthicsScenarioSimulator />
                  )}

                  {activeTab === 'mastery' && (
                    <MasteryMap
                      progressList={progressList}
                      speciesId={selectedSpeciesId}
                      onSelectModule={(modId) => {
                        const mod = currentPack.modules.find(m => m.id === modId);
                        if (mod) setActiveLessonModule(mod);
                      }}
                    />
                  )}

                  {activeTab === 'achievements' && (
                    <MyAchievements learner={currentLearner} />
                  )}
                </>
              )}
            </div>
          </YouthSessionGuard>
        )}

        {/* Parent Guardian Center Experience (Scoped strictly to linked youth) */}
        {activeRole === 'parent' && (
          <ParentControlCenter
            learners={learners.filter(l => l.parentEmail === 'parent.miller@example.com')}
            activeLearnerId={currentLearner.id}
            onSelectLearner={(id) => {
              const found = learners.find(l => l.id === id);
              if (found) setCurrentLearner(found);
            }}
          />
        )}

        {/* Coach / Leader Hub Experience (Scoped strictly to consented assigned learners) */}
        {activeRole === 'coach' && (
          <CoachDashboard
            learners={learners.filter(l => canCoachAccessLearner(l, 'coach_linda'))}
            progressList={progressList}
            assignments={assignments}
            observations={observations}
            onAddAssignment={handleAddAssignment}
            onSaveObservation={handleSaveObservation}
          />
        )}

        {/* Administrator Command Center Experience */}
        {activeRole === 'admin' && (
          <div className="space-y-6">
            {activeTab === 'governance' ? (
              <ContentGovernanceHub
                governanceItems={governanceItems}
                onUpdateItem={handleUpdateGovernance}
              />
            ) : (
              <AdminControlCenter
                featureFlags={featureFlags}
                onToggleFlag={(k, v) => setFeatureFlags(prev => ({ ...prev, [k]: v }))}
                aiAuditLogs={aiAuditLogs}
              />
            )}
          </div>
        )}
      </main>

      {/* AI Trainer Modal */}
      <WarrenWiseTrainerModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        currentDivision={activeDivision}
        selectedSpeciesId={selectedSpeciesId}
        contextModule={activeLessonModule || activeQuizModule}
      />

      {/* Role Authentication & Permission Guard Gate */}
      <RoleAuthGateModal
        targetRole={gateTargetRole}
        isOpen={!!gateTargetRole}
        onSuccess={handleGateSuccess}
        onClose={() => setGateTargetRole(null)}
      />

      {/* Subscription & Pricing Modal */}
      <SubscriptionPlansModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        parentEmail="parent.miller@example.com"
      />

      {/* Persistent Legal & Accuracy Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-base">🍀</span>
            <span className="font-bold text-slate-800">WarrenWise Youth Animal Training Academy v1.0</span>
            <span>•</span>
            <span>Educational Youth Platform</span>
          </div>
          <div className="text-center md:text-right max-w-xl text-[11px] text-slate-400">
            {LEGAL_DISCLAIMERS.general}
          </div>
        </div>
      </footer>
    </div>
  );
}
