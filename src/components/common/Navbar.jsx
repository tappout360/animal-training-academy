// WarrenWise Youth Animal Training Academy - Main Navigation Bar

import React from 'react';
import { 
  Sparkles, Bot, Flame, Wifi, WifiOff, Award, 
  BookOpen, Target, CheckSquare, ShieldCheck, Users, BarChart3, HelpCircle,
  Compass, Map
} from 'lucide-react';
import RoleSwitcher from './RoleSwitcher';

export default function Navbar({
  activeRole,
  onSelectRole,
  activeTab,
  onSelectTab,
  isOfflineMode,
  onToggleOffline,
  onOpenAiTrainer,
  learner
}) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      {/* Top tier brand and role bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center text-white font-black shadow-md border-2 border-emerald-400">
            <span className="text-xl">🍀</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg font-black tracking-tight text-forest-900">
                WarrenWise
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-300">
                Animal Academy
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              4-H & Youth Livestock Project Learning Platform
            </div>
          </div>
        </div>

        {/* Right side stats and toggles */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Barn Offline Mode Toggle */}
          <button
            onClick={onToggleOffline}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              isOfflineMode
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Toggle Barn Offline Mode for poor cell reception"
          >
            {isOfflineMode ? <WifiOff className="w-3.5 h-3.5 text-amber-600" /> : <Wifi className="w-3.5 h-3.5 text-emerald-600" />}
            <span className="hidden md:inline">{isOfflineMode ? 'Barn Offline Ready' : 'Online Sync'}</span>
          </button>

          {/* Learner Streak & XP (Youth View) */}
          {activeRole === 'youth' && (
            <div className="flex items-center gap-2 bg-amber-50/80 border border-amber-200/80 px-2.5 py-1 rounded-lg">
              <div className="flex items-center gap-1 text-amber-800 font-bold text-xs" title="Daily Learning Streak">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>{learner.streakDays}d Streak</span>
              </div>
              <div className="w-px h-3 bg-amber-200" />
              <div className="text-xs font-semibold text-amber-900">
                {learner.xp} <span className="text-[10px] text-amber-700">XP</span>
              </div>
            </div>
          )}

          {/* AI Study Coach Quick Launcher */}
          <button
            onClick={onOpenAiTrainer}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-all animate-pulse"
          >
            <Bot className="w-4 h-4" />
            <span>WarrenWise AI</span>
          </button>

          {/* Role Switcher */}
          <RoleSwitcher activeRole={activeRole} onSelectRole={onSelectRole} />
        </div>
      </div>

      {/* Second tier navigation tabs */}
      <div className="bg-slate-50/80 border-t border-slate-200/70 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-1.5 scrollbar-none text-xs font-semibold">
          {activeRole === 'youth' && (
            <>
              {/* Herd Trail Quest Signature Game Tab */}
              <button
                onClick={() => onSelectTab('herd_trail')}
                className={`px-3.5 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap shadow-xs ${
                  activeTab === 'herd_trail' 
                    ? 'bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-black ring-2 ring-emerald-400/40' 
                    : 'text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200/80 border border-emerald-300 font-bold'
                }`}
              >
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Herd Trail Quest</span>
                <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 ml-0.5">
                  Play Mode
                </span>
              </button>

              <button
                onClick={() => onSelectTab('modules')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'modules' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>Learning Modules (9)</span>
              </button>
              <button
                onClick={() => onSelectTab('skillathon')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'skillathon' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                <span>Skillathon ID Drills</span>
              </button>
              <button
                onClick={() => onSelectTab('showmanship')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'showmanship' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-purple-600" />
                <span>Showmanship Oral Studio</span>
              </button>
              <button
                onClick={() => onSelectTab('ethics')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'ethics' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Ethics & Welfare Dilemmas</span>
              </button>
              <button
                onClick={() => onSelectTab('mastery')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'mastery' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Mastery Heatmap</span>
              </button>
              <button
                onClick={() => onSelectTab('achievements')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'achievements' ? 'bg-white text-emerald-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-yellow-600" />
                <span>Badges & Certificates</span>
              </button>
            </>
          )}

          {activeRole === 'parent' && (
            <>
              <button
                onClick={() => onSelectTab('parent_controls')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'parent_controls' ? 'bg-white text-amber-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Parental Controls &amp; Limits</span>
              </button>
              <button
                onClick={() => onSelectTab('roster')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'roster' ? 'bg-white text-amber-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>My Children Progress</span>
              </button>
              <button
                onClick={() => onSelectTab('assignments')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'assignments' ? 'bg-white text-amber-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5 text-teal-600" />
                <span>Family Chores &amp; Learning</span>
              </button>
            </>
          )}

          {activeRole === 'coach' && (
            <>
              <button
                onClick={() => onSelectTab('roster')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'roster' ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Club Roster &amp; Heatmaps</span>
              </button>
              <button
                onClick={() => onSelectTab('assignments')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'assignments' ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5 text-teal-600" />
                <span>Training Assignments</span>
              </button>
              <button
                onClick={() => onSelectTab('observation')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'observation' ? 'bg-white text-blue-800 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-purple-600" />
                <span>Practical Barn Observation Rubric</span>
              </button>
            </>
          )}

          {activeRole === 'admin' && (
            <>
              <button
                onClick={() => onSelectTab('governance')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'governance' ? 'bg-white text-purple-900 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Knowledge Governance & Animal Safety Queue</span>
              </button>
              <button
                onClick={() => onSelectTab('analytics')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'analytics' ? 'bg-white text-purple-900 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Learning Analytics & Drop-off</span>
              </button>
              <button
                onClick={() => onSelectTab('safety_logs')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'safety_logs' ? 'bg-white text-purple-900 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-rose-600" />
                <span>AI Veterinary & Safety Intercept Logs</span>
              </button>
              <button
                onClick={() => onSelectTab('flags')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  activeTab === 'flags' ? 'bg-white text-purple-900 shadow-xs border border-slate-200 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-cyan-600" />
                <span>System Feature Flags</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
