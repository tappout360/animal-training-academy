// WarrenWise Youth Animal Training Academy - Root / Admin Command Center

import React, { useState } from 'react';
import { 
  ShieldCheck, Bot, ToggleLeft, ToggleRight, 
  BarChart3, AlertTriangle, Users, Database, RefreshCw, CheckCircle2,
  CreditCard
} from 'lucide-react';
import { INITIAL_FEATURE_FLAGS } from '../../config/constants';
import AdminSubscriptionDashboard from './AdminSubscriptionDashboard';

export default function AdminControlCenter({
  featureFlags = INITIAL_FEATURE_FLAGS,
  onToggleFlag,
  aiAuditLogs = []
}) {
  const [flags, setFlags] = useState(featureFlags);
  const [activeTab, setActiveTab] = useState('flags'); // 'flags' | 'safety_logs' | 'analytics'

  const handleToggle = (flagKey) => {
    const updated = { ...flags, [flagKey]: !flags[flagKey] };
    setFlags(updated);
    if (onToggleFlag) onToggleFlag(flagKey, updated[flagKey]);
  };

  // Mock safety logs if empty
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

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-purple-950 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>Root / Administrator Command Center</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          System Control, AI Safety Logs & Analytics
        </h1>
        <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-2xl">
          Supervise global feature flags, inspect real-time AI veterinary refusal safety logs, and analyze learning completion bottlenecks.
        </p>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('flags')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'flags' ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            System Feature Flags
          </button>
          <button
            onClick={() => setActiveTab('safety_logs')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'safety_logs' ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            AI Safety & Vet Intercept Logs
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'analytics' ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Learner Drop-Off & Drop Rates
          </button>
          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'subscriptions' ? 'bg-white text-slate-900 shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Subscriptions &amp; Revenue
          </button>
        </div>
      </div>

      {/* Tab 1: Feature Flags */}
      {activeTab === 'flags' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-base text-slate-900">Dynamic System Feature Flags</h3>
            <p className="text-xs text-slate-500">Enable or disable subsystems in real-time without redeploying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(flags).map(([key, val]) => (
              <div
                key={key}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3"
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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

      {/* Tab 2: Safety Logs */}
      {activeTab === 'safety_logs' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">AI Safety Audit & Veterinary Intercept Logs</h3>
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
                className={`p-4 rounded-xl border text-xs space-y-2 ${
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

      {/* Tab 3: Learning Analytics */}
      {activeTab === 'analytics' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-base text-slate-900">Learning Analytics & Drop-off Diagnostics</h3>
            <p className="text-xs text-slate-500">Track module completion rates, hardest quiz questions, and study duration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Avg. Module Completion Time</span>
              <div className="text-2xl font-black text-slate-900 mt-1">18.4 min</div>
              <span className="text-xs text-emerald-600 font-semibold">Optimal for Junior attention spans</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Overall Curriculum Pass Rate</span>
              <div className="text-2xl font-black text-emerald-700 mt-1">88.2%</div>
              <span className="text-xs text-slate-500">Across 9 standard modules</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Hardest Module (Highest Drop-off)</span>
              <div className="text-xl font-black text-amber-700 mt-1">Nutrition & FCR Math</div>
              <span className="text-xs text-amber-700 font-semibold">Remediation tips generated</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Subscriptions & Institutional Licensing */}
      {activeTab === 'subscriptions' && (
        <AdminSubscriptionDashboard />
      )}
    </div>
  );
}
