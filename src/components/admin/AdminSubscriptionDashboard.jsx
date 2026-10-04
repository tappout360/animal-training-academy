// WarrenWise Youth Animal Training Academy - Admin Subscription & Revenue Dashboard
// Owner metrics, club seat allocation, promo codes, and emergency support overrides

import React, { useState } from 'react';
import { 
  BarChart3, DollarSign, Users, Award, ShieldCheck, 
  Tag, RefreshCw, KeyRound, AlertTriangle, CheckCircle2,
  TrendingUp, ShieldAlert, Check, Search
} from 'lucide-react';
import { SUBSCRIPTION_TIERS, EDUCATIONAL_ADDONS } from '../../config/subscriptionPlans';
import { EntitlementService, PROMO_CODES } from '../../services/EntitlementService';

export default function AdminSubscriptionDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [overrideEmail, setOverrideEmail] = useState('parent.scholarship@example.com');
  const [overrideTier, setOverrideTier] = useState('family');
  const [overrideReason, setOverrideReason] = useState('County Fair Hardship Grant');
  const [adminKey, setAdminKey] = useState('');
  const [overrideSuccessMsg, setOverrideSuccessMsg] = useState('');
  const [overrideError, setOverrideError] = useState('');

  // Sample aggregate metrics for platform owner
  const metrics = {
    totalARR: '$118,650',
    totalMRR: '$9,880',
    activeSubscribers: 1350,
    tierBreakdown: {
      free: 3200,
      pro: 800,
      family: 500,
      club: 50
    },
    clubSeatsUtilized: '1,140 / 1,500 Seats (76%)',
    scholarshipGrants: 28,
    churnRate: '2.1% (Annual standard)'
  };

  const sampleAccounts = [
    { email: 'parent.miller@example.com', plan: 'family', cycle: 'annual', status: 'active', children: 2, renewal: '2027-10-01' },
    { email: 'parent.chen@example.com', plan: 'pro', cycle: 'monthly', status: 'active', children: 1, renewal: '2026-11-01' },
    { email: 'evergreen4h.leader@countyext.org', plan: 'club', cycle: 'annual', status: 'active', children: 24, renewal: '2027-08-15' },
    { email: 'parent.vance@example.com', plan: 'free', cycle: 'none', status: 'active', children: 1, renewal: '—' },
    { email: 'cloverdale.chapter@ffa.org', plan: 'club', cycle: 'annual', status: 'active', children: 28, renewal: '2027-09-01' }
  ];

  const handleApplyOverride = (e) => {
    e.preventDefault();
    setOverrideError('');
    setOverrideSuccessMsg('');

    const res = EntitlementService.adminOverrideEntitlement({
      parentEmail: overrideEmail.trim(),
      tier: overrideTier,
      reason: overrideReason,
      adminKey
    });

    if (res.success) {
      setOverrideSuccessMsg(`Successfully granted ${overrideTier.toUpperCase()} tier to ${overrideEmail}.`);
      setAdminKey('');
      setTimeout(() => setOverrideSuccessMsg(''), 5000);
    } else {
      setOverrideError(res.error);
    }
  };

  const filteredAccounts = sampleAccounts.filter(a => 
    a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Metrics Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
          <TrendingUp className="w-4 h-4 text-indigo-400" />
          <span>Platform Revenue &amp; Subscription Health</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">
          Institutional Licensing &amp; Membership Operations
        </h2>
        <p className="text-xs sm:text-sm text-indigo-200 mt-1 max-w-2xl">
          Overview of active memberships, 4-H club charter seats, educational add-on conversions, and scholarship overrides.
        </p>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-indigo-800/80">
          <div className="bg-indigo-900/40 p-3 rounded-xl border border-indigo-700/50">
            <div className="text-[10px] uppercase font-bold text-indigo-300">Projected ARR</div>
            <div className="text-xl font-black text-amber-300">{metrics.totalARR}</div>
            <div className="text-[10px] text-indigo-300">{metrics.totalMRR} MRR</div>
          </div>
          <div className="bg-indigo-900/40 p-3 rounded-xl border border-indigo-700/50">
            <div className="text-[10px] uppercase font-bold text-indigo-300">Paid Subscribers</div>
            <div className="text-xl font-black text-white">{metrics.activeSubscribers}</div>
            <div className="text-[10px] text-emerald-300">500 Family / 800 Pro / 50 Club</div>
          </div>
          <div className="bg-indigo-900/40 p-3 rounded-xl border border-indigo-700/50">
            <div className="text-[10px] uppercase font-bold text-indigo-300">Club Seats Utilized</div>
            <div className="text-xl font-black text-cyan-300">{metrics.clubSeatsUtilized}</div>
            <div className="text-[10px] text-indigo-300">50 active 4-H / FFA charters</div>
          </div>
          <div className="bg-indigo-900/40 p-3 rounded-xl border border-indigo-700/50">
            <div className="text-[10px] uppercase font-bold text-indigo-300">Annual Churn</div>
            <div className="text-xl font-black text-emerald-300">{metrics.churnRate}</div>
            <div className="text-[10px] text-indigo-300">28 Scholarship Grants</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Accounts List & Support Override Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Subscription Accounts Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-2xs p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Active Subscriber Registry
              </h3>
              <p className="text-xs text-slate-500">Live entitlement state across families and 4-H club charters</p>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search email or plan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Subscriber Email</th>
                  <th className="p-3">Plan Tier</th>
                  <th className="p-3">Cycle</th>
                  <th className="p-3">Seats</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Renewal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredAccounts.map((acc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="p-3 font-mono font-medium text-slate-800 truncate max-w-xs">{acc.email}</td>
                    <td className="p-3 font-bold uppercase text-purple-700">{acc.plan}</td>
                    <td className="p-3 text-slate-600 capitalize">{acc.cycle}</td>
                    <td className="p-3 text-slate-700">{acc.children} seats</td>
                    <td className="p-3">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {acc.status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-slate-500">{acc.renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Col: Admin Support Override & Promo Codes */}
        <div className="space-y-6">
          {/* Grant Support Override Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Support Grant / Override Tool</span>
            </div>

            <p className="text-xs text-slate-600">
              Grant immediate plan access for scholarship recipients, county fair sponsors, or hardship requests.
            </p>

            <form onSubmit={handleApplyOverride} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Parent / Club Email</label>
                <input
                  type="email"
                  value={overrideEmail}
                  onChange={(e) => setOverrideEmail(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Tier to Grant</label>
                <select
                  value={overrideTier}
                  onChange={(e) => setOverrideTier(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                >
                  <option value="pro">Youth Pro Showman</option>
                  <option value="family">Family Barn Pass (5 Seats)</option>
                  <option value="club">4-H Club / FFA Charter (30 Seats)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Grant Reason / Notes</label>
                <input
                  type="text"
                  value={overrideReason}
                  onChange={(e) => setOverrideReason(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Master Security Key (Demo: 9999)
                </label>
                <input
                  type="password"
                  placeholder="••••"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl font-mono text-center tracking-widest"
                  required
                />
              </div>

              {overrideError && (
                <p className="text-rose-600 text-xs font-bold">{overrideError}</p>
              )}
              {overrideSuccessMsg && (
                <p className="text-emerald-700 text-xs font-bold">{overrideSuccessMsg}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 transition shadow-xs"
              >
                Apply Support Override
              </button>
            </form>
          </div>

          {/* Active Promo Codes Registry */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Tag className="w-4 h-4 text-emerald-600" />
              <span>Active Promotion &amp; Fair Codes</span>
            </div>

            <div className="space-y-2 text-xs">
              {Object.values(PROMO_CODES).map((p) => (
                <div key={p.code} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-purple-800">{p.code}</span>
                    <div className="text-[11px] text-slate-500">{p.description}</div>
                  </div>
                  <span className="text-xs font-black text-emerald-700">
                    -{p.discountPercent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
