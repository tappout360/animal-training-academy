// WarrenWise Animal Academy - Separate Root Administrator Command Dashboard
// Restricted strictly to Jmounts (Username: Jmounts, Password: JakylieRabbitry4388)

import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, User, KeyRound, Eye, EyeOff, AlertTriangle, 
  LogOut, ArrowLeft, Bot, ToggleLeft, ToggleRight, BarChart3, 
  Users, CheckCircle2, ShieldAlert, Sparkles, CreditCard, RefreshCw,
  MessageSquarePlus, MessageSquare, ThumbsUp, ThumbsDown, Filter, Trash2, Heart
} from 'lucide-react';
import { AdminAuthService, ADMIN_CREDENTIALS } from '../../services/AdminAuthService';
import ContentGovernanceHub from '../governance/ContentGovernanceHub';
import AdminSubscriptionDashboard from './AdminSubscriptionDashboard';
import { FeedbackService } from '../../services/FeedbackService';
import { INITIAL_FEATURE_FLAGS } from '../../config/constants';

export default function AdminPortal({
  governanceItems = [],
  onUpdateGovernance,
  featureFlags = INITIAL_FEATURE_FLAGS,
  onToggleFlag,
  aiAuditLogs = [],
  onReturnToYouth
}) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(AdminAuthService.isAuthenticated());
  const [currentAdmin, setCurrentAdmin] = useState(AdminAuthService.getCurrentAdmin());

  // Login Form State
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard Sub-navigation Tab
  const [activeTab, setActiveTab] = useState('governance'); // 'governance' | 'flags' | 'safety_logs' | 'analytics' | 'subscriptions' | 'security' | 'feedback'
  const [flags, setFlags] = useState(featureFlags);

  // User & Club Feedback State
  const [feedbackList, setFeedbackList] = useState(() => FeedbackService.getAllFeedback());
  const [feedbackFilter, setFeedbackFilter] = useState('all'); // 'all' | 'youth' | 'parent' | 'coach'
  const feedbackSummary = FeedbackService.getFeedbackSummary();

  const handleRefreshFeedback = () => {
    setFeedbackList(FeedbackService.getAllFeedback());
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    const res = AdminAuthService.login(usernameInput, passwordInput);
    if (res.success) {
      setIsAuthenticated(true);
      setCurrentAdmin(res.user);
      setUsernameInput('');
      setPasswordInput('');
    } else {
      setLoginError(res.error || 'Invalid administrator username or password.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    AdminAuthService.logout();
    setIsAuthenticated(false);
    setCurrentAdmin(null);
    setLoginError('');
  };

  // Toggle Feature Flag
  const handleToggle = (flagKey) => {
    const updated = { ...flags, [flagKey]: !flags[flagKey] };
    setFlags(updated);
    if (onToggleFlag) onToggleFlag(flagKey, updated[flagKey]);
  };

  // Default AI safety audit logs if none provided
  const displayLogs = aiAuditLogs.length > 0 ? aiAuditLogs : [
    {
      id: 'log_01',
      learnerId: 'lrn_01',
      query: 'What dosage of penicillin for rabbit snuffles?',
      topic: 'veterinary_intercept',
      flaggedMedical: true,
      safetyBlocked: true,
      timestamp: '2026-10-01T14:22:10Z'
    },
    {
      id: 'log_02',
      learnerId: 'lrn_02',
      query: 'Can you walk me through the 12-step showmanship routine?',
      topic: 'showmanship',
      flaggedMedical: false,
      safetyBlocked: false,
      timestamp: '2026-10-01T15:10:45Z'
    },
    {
      id: 'log_03',
      learnerId: 'lrn_03',
      query: 'How to treat cavy mites with ivermectin dose?',
      topic: 'veterinary_intercept',
      flaggedMedical: true,
      safetyBlocked: true,
      timestamp: '2026-10-01T16:05:00Z'
    }
  ];

  // ==========================================
  // 1. UN-AUTHENTICATED STATE: DEDICATED LOGIN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-slate-950 border border-purple-900/40 rounded-3xl max-w-md w-full shadow-2xl p-6 sm:p-8 text-slate-100 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-3 mb-6 relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-800 border border-purple-400/40 flex items-center justify-center mx-auto shadow-xl shadow-purple-900/30">
              <ShieldCheck className="w-8 h-8 text-purple-200" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-full">
                Restricted Root Access
              </span>
              <h2 className="text-xl font-black text-white mt-2">
                Administrator Command Dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your authorized root credentials to unlock system governance and administration.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4 relative">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Admin Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  autoFocus
                  required
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter administrator username"
                  className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Master Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator password"
                  className="w-full bg-slate-900 border border-slate-800 text-white text-sm rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2 animate-shake">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black rounded-xl text-sm shadow-lg shadow-purple-950/60 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Authenticate &amp; Enter Dashboard</span>
            </button>
          </form>

          {/* Back to youth button */}
          <div className="mt-6 pt-4 border-t border-slate-900 text-center">
            <button
              type="button"
              onClick={onReturnToYouth}
              className="text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Academy (Youth View)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. AUTHENTICATED STATE: COMMAND DASHBOARD
  // ==========================================
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Root Administrator Master Header */}
      <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white p-6 rounded-3xl border border-purple-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 relative">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-300 bg-purple-900/60 border border-purple-500/40 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Root Administrator Command Center
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Logged in as: {currentAdmin?.displayName || 'Jmounts'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              System Control, Governance &amp; Institutional Authority
            </h1>
            <p className="text-purple-200/80 text-xs sm:text-sm max-w-2xl">
              Full authority over ARBA primary source content verification, dynamic feature flags, AI veterinary interception audit, and institutional billing.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onReturnToYouth}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Academy View</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Lock &amp; Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dashboard Sub-navigation Tabs */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-purple-900/50 overflow-x-auto scrollbar-none text-xs font-bold">
          {[
            { id: 'governance', label: 'Knowledge Governance (ARBA)', icon: <ShieldAlert className="w-4 h-4" /> },
            { id: 'feedback', label: 'User & Club Feedback', icon: <MessageSquarePlus className="w-4 h-4" /> },
            { id: 'flags', label: 'System Feature Flags', icon: <ToggleRight className="w-4 h-4" /> },
            { id: 'safety_logs', label: 'AI Safety & Vet Logs', icon: <Bot className="w-4 h-4" /> },
            { id: 'analytics', label: 'Learning Analytics', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'subscriptions', label: 'Subscriptions & Revenue', icon: <CreditCard className="w-4 h-4" /> },
            { id: 'security', label: 'Admin Security (Jmounts)', icon: <Lock className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-950/80 font-black'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-purple-900/40 hover:text-white border border-slate-800/80'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: KNOWLEDGE GOVERNANCE & ANIMAL SAFETY */}
      {/* ========================================================= */}
      {activeTab === 'governance' && (
        <ContentGovernanceHub
          governanceItems={governanceItems}
          onUpdateItem={onUpdateGovernance}
        />
      )}

      {/* ========================================================= */}
      {/* TAB 2: SYSTEM FEATURE FLAGS */}
      {/* ========================================================= */}
      {activeTab === 'flags' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900">Dynamic System Feature Flags</h3>
              <p className="text-xs text-slate-500">Enable or disable subsystems in real-time without redeploying</p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Live Configuration Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(flags).map(([key, val]) => (
              <div
                key={key}
                className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-800">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    {key}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggle(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    val
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-slate-200 text-slate-600 border border-slate-300'
                  }`}
                >
                  {val ? <ToggleRight className="w-5 h-5 text-emerald-600" /> : <ToggleLeft className="w-5 h-5 text-slate-400" />}
                  <span>{val ? 'Enabled' : 'Disabled'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: AI SAFETY & VETERINARY LOGS */}
      {/* ========================================================= */}
      {activeTab === 'safety_logs' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">AI Safety Audit &amp; Veterinary Intercept Logs</h3>
              <p className="text-xs text-slate-500">Live monitoring of user queries intercepted by medical refusal rules</p>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
              Zero Veterinary Advice Policy
            </span>
          </div>

          <div className="space-y-3">
            {displayLogs.map((log) => (
              <div
                key={log.id}
                className={`p-4 rounded-2xl border text-xs space-y-2 ${
                  log.safetyBlocked
                    ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-slate-400">{log.id}</span>
                    <span className="font-bold text-slate-700">Learner: {log.learnerId}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    log.safetyBlocked ? 'bg-rose-200 text-rose-900' : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {log.safetyBlocked ? 'SAFETY INTERCEPTED' : 'APPROVED TUTORING'}
                  </span>
                </div>

                <div className="font-semibold text-xs sm:text-sm">
                  "{log.query}"
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                  <span>Topic: <strong className="text-slate-700">{log.topic}</strong></span>
                  <span>{new Date(log.timestamp).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: LEARNING ANALYTICS */}
      {/* ========================================================= */}
      {activeTab === 'analytics' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-base text-slate-900">Learning Analytics &amp; Drop-off Diagnostics</h3>
            <p className="text-xs text-slate-500">Track module completion rates, hardest quiz questions, and study duration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Avg. Module Completion Time</span>
              <div className="text-2xl font-black text-slate-900 mt-1">18.4 min</div>
              <span className="text-xs text-emerald-600 font-semibold">Optimal for Junior attention spans</span>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Overall Curriculum Pass Rate</span>
              <div className="text-2xl font-black text-emerald-700 mt-1">88.2%</div>
              <span className="text-xs text-slate-500">Across 9 standard modules</span>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Hardest Module (Highest Drop-off)</span>
              <div className="text-xl font-black text-amber-700 mt-1">Nutrition &amp; FCR Math</div>
              <span className="text-xs text-amber-700 font-semibold">Remediation tips generated</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: SUBSCRIPTIONS & REVENUE */}
      {/* ========================================================= */}
      {activeTab === 'subscriptions' && (
        <AdminSubscriptionDashboard />
      )}

      {/* ========================================================= */}
      {/* TAB: USER & 4-H CLUB FEEDBACK (COPPA SAFE) */}
      {/* ========================================================= */}
      {activeTab === 'feedback' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  Continuous Improvement Loop
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  COPPA PII-Sanitized
                </span>
              </div>
              <h3 className="font-black text-lg text-slate-900 mt-1">User &amp; 4-H Club Leader Feedback</h3>
              <p className="text-xs text-slate-500">Live responses collected from youth, parents, and volunteer project leaders.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRefreshFeedback}
                className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Feed</span>
              </button>
            </div>
          </div>

          {/* Metric Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-purple-50/60 border border-purple-200/80 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">Total Submissions</span>
              <div className="text-2xl font-black text-purple-950 mt-1">{feedbackSummary.total}</div>
              <span className="text-[11px] text-purple-600 font-medium">From all cohorts</span>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200/80 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Satisfaction Rate</span>
              <div className="text-2xl font-black text-emerald-950 mt-1">{feedbackSummary.satisfactionPercent}%</div>
              <span className="text-[11px] text-emerald-700 font-medium">Helpful / Positive</span>
            </div>

            <div className="bg-blue-50/60 border border-blue-200/80 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Helpful Count</span>
              <div className="text-2xl font-black text-blue-950 mt-1">{feedbackSummary.helpfulCount}</div>
              <span className="text-[11px] text-blue-600 font-medium">5-Star &amp; Positive</span>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/80 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Feature Requests</span>
              <div className="text-2xl font-black text-amber-950 mt-1">{feedbackSummary.needsWorkCount}</div>
              <span className="text-[11px] text-amber-700 font-medium">Needs work or expansion</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {[
              { id: 'all', label: 'All Roles' },
              { id: 'youth', label: 'Youth Learners' },
              { id: 'parent', label: 'Parents / Guardians' },
              { id: 'coach', label: '4-H Leaders & Coaches' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFeedbackFilter(f.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  feedbackFilter === f.id
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Feedback List */}
          <div className="space-y-3">
            {feedbackList
              .filter(item => feedbackFilter === 'all' || item.role === feedbackFilter)
              .map(item => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        item.rating === 'helpful'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : item.rating === 'neutral'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}>
                        {item.rating === 'helpful' ? '👍 Helpful' : item.rating === 'neutral' ? '😐 Neutral' : '💡 Needs Work'}
                      </span>
                      <span className="text-xs font-bold text-slate-700 capitalize">
                        {item.role === 'coach' ? '4-H Leader / Coach' : item.role === 'parent' ? 'Parent / Guardian' : 'Youth Member'}
                      </span>
                      <span className="text-[10px] text-slate-400 capitalize">
                        ({item.division || 'Junior'})
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono">
                      {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    "{item.comment}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-200/60">
                    <span className="font-mono">Context: {item.context || 'general'}</span>
                    <span className="text-purple-600 font-semibold">Verified Safe for Youth Portal</span>
                  </div>
                </div>
              ))}

            {feedbackList.filter(item => feedbackFilter === 'all' || item.role === feedbackFilter).length === 0 && (
              <div className="text-center py-8 text-xs text-slate-400">
                No feedback entries match this filter.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 6: ROOT SECURITY & ADMIN PROFILE */}
      {/* ========================================================= */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-base text-slate-900">Root Security &amp; Administrator Account</h3>
            <p className="text-xs text-slate-500">Authorized personnel credentials and session governance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Credentials Card */}
            <div className="bg-slate-950 text-white rounded-2xl p-5 border border-purple-900/40 space-y-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-700 flex items-center justify-center text-xl font-black text-white">
                  JM
                </div>
                <div>
                  <h4 className="font-black text-base text-white">{ADMIN_CREDENTIALS.displayName}</h4>
                  <p className="text-xs text-purple-300 font-medium">{ADMIN_CREDENTIALS.title}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Username:</span>
                  <span className="font-mono font-bold text-purple-200">{ADMIN_CREDENTIALS.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Security Clearance:</span>
                  <span className="font-bold text-emerald-400">{ADMIN_CREDENTIALS.securityLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Authorized Domain:</span>
                  <span className="text-slate-300">{ADMIN_CREDENTIALS.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Session Type:</span>
                  <span className="font-mono text-xs text-amber-300">Encrypted Local Session</span>
                </div>
              </div>
            </div>

            {/* Security Audit & Policies */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-900">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>Security Governance Policies</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                <li>Root access requires explicit credentials verification on each session.</li>
                <li>Youth and parent sessions cannot escalate privileges to Administrator.</li>
                <li>4-H Leader &amp; Coach Portal Gate is isolated with independent passcode testing.</li>
                <li>All governance decisions and overrides are stamped with administrator audit trails.</li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Terminate Active Session &amp; Lock
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
