// WarrenWise Youth Animal Training Academy - Parent Subscription Management Tab
// Integrated into Parent Control Center for managing family seats, plans, and receipts

import React, { useState } from 'react';
import { 
  ShieldCheck, CreditCard, Users, CheckCircle2, AlertTriangle, 
  ArrowUpRight, RefreshCw, KeyRound, Receipt, Clock, Sparkles,
  Calendar, Check, X, ShieldAlert
} from 'lucide-react';
import { SUBSCRIPTION_TIERS, EDUCATIONAL_ADDONS } from '../../config/subscriptionPlans';
import { EntitlementService } from '../../services/EntitlementService';
import SubscriptionPlansModal from '../billing/SubscriptionPlansModal';

export default function ParentSubscriptionTab({
  parentEmail = 'parent.miller@example.com',
  learners = []
}) {
  const [entitlements, setEntitlements] = useState(() => 
    EntitlementService.getEntitlements(parentEmail)
  );
  const [billingAudit, setBillingAudit] = useState(() => 
    EntitlementService.getBillingAudit(parentEmail)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState('plans');

  // Cancel flow state
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelPin, setCancelPin] = useState('');
  const [cancelReason, setCancelReason] = useState('Season ended');
  const [cancelError, setCancelError] = useState('');
  const [cancelSuccessMsg, setCancelSuccessMsg] = useState('');

  const currentTier = SUBSCRIPTION_TIERS[entitlements.tier] || SUBSCRIPTION_TIERS.free;

  const handleRefresh = () => {
    setEntitlements(EntitlementService.getEntitlements(parentEmail));
    setBillingAudit(EntitlementService.getBillingAudit(parentEmail));
  };

  const handleOpenPlans = () => {
    setModalInitialTab('plans');
    setIsModalOpen(true);
  };

  const handleOpenAddons = () => {
    setModalInitialTab('addons');
    setIsModalOpen(true);
  };

  const handleConfirmCancel = (e) => {
    e.preventDefault();
    setCancelError('');

    const res = EntitlementService.cancelSubscription({
      parentEmail,
      parentPin: cancelPin,
      reason: cancelReason
    });

    if (res.success) {
      setEntitlements(res.entitlements);
      setIsCancelModalOpen(false);
      setCancelSuccessMsg('Auto-renewal paused. Your access remains active until the end of the billing period.');
      setTimeout(() => setCancelSuccessMsg(''), 6000);
    } else {
      setCancelError(res.error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Plan Status Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Active Family Membership</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black flex items-center gap-2">
            <span>{currentTier.name}</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              {entitlements.status === 'scholarship' ? 'Scholarship Grant' : 'Active'}
            </span>
          </h2>
          <p className="text-xs text-emerald-100 max-w-xl">
            {currentTier.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleOpenPlans}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition"
          >
            <span>Change or Upgrade Plan</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleOpenAddons}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800/80 hover:bg-emerald-700 text-white border border-emerald-600/60 shadow-xs transition"
          >
            <span>Browse Add-Ons</span>
          </button>
        </div>
      </div>

      {cancelSuccessMsg && (
        <div className="p-4 bg-amber-50 border border-amber-300 text-amber-900 rounded-2xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{cancelSuccessMsg}</span>
        </div>
      )}

      {/* Grid: Seat Utilization & Add-On Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Seat Allocation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Youth Learner Seat Allocation
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {learners.length} of {currentTier.maxChildren} Seats Active
            </span>
          </div>

          <p className="text-xs text-slate-600">
            {currentTier.id === 'family'
              ? 'Your Family Barn Pass covers up to 5 linked youth profiles under one monthly/annual fee.'
              : currentTier.id === 'club'
              ? 'Your 4-H Club charter covers up to 30 active enrolled youth members.'
              : 'Your plan covers 1 youth learner. Upgrade to Family Barn Pass to unlock all siblings.'}
          </p>

          <div className="space-y-2 pt-1">
            {learners.map((child) => (
              <div key={child.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{child.handle} ({child.realName})</div>
                  <div className="text-[11px] text-slate-500">
                    Division: <span className="capitalize">{child.ageDivision}</span> | Club: {child.clubName}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-100/70 px-2.5 py-1 rounded-lg border border-emerald-300 text-[11px]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Full Pro Access</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Unlocked Tools & Add-Ons */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Family Educational Tool Entitlements
              </h3>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Verified Active
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Record Book Kit */}
            <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">County Fair Record Book &amp; Weigh-In Kit</div>
                <div className="text-[11px] text-slate-500">ADG calculator, feed ledger, and printable PDF check-in form</div>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                EntitlementService.isRecordBookUnlocked(parentEmail)
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {EntitlementService.isRecordBookUnlocked(parentEmail) ? 'Unlocked' : 'Available Add-On'}
              </span>
            </div>

            {/* AI WarrenWise Coach */}
            <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">WarrenWise AI Show Coach</div>
                <div className="text-[11px] text-slate-500">24/7 oral question defense coach &amp; showmanship feedback</div>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                EntitlementService.isAiTutorUnlocked(parentEmail)
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {EntitlementService.isAiTutorUnlocked(parentEmail) ? 'Unlocked' : 'Locked'}
              </span>
            </div>

            {/* Verifiable Certificates */}
            <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">Official Downloadable Certificates</div>
                <div className="text-[11px] text-slate-500">Species Academic Mastery &amp; Showmanship Distinction honors</div>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                EntitlementService.isCertificateUnlocked(parentEmail)
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {EntitlementService.isCertificateUnlocked(parentEmail) ? 'Unlocked' : 'Locked'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Information & Manage Renewal */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-slate-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Billing History &amp; Renewal Status
            </h3>
          </div>
          <div className="text-xs text-slate-500">
            Current Cycle: <strong className="capitalize">{entitlements.billingCycle}</strong>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="text-slate-500">
              Next scheduled renewal: <strong className="text-slate-800">{new Date(entitlements.renewAt).toLocaleDateString()}</strong>
            </div>
            <div className="text-slate-500">
              Parent billing email: <strong className="font-mono text-slate-800">{parentEmail}</strong>
            </div>
            {entitlements.cancelAtPeriodEnd && (
              <div className="text-amber-700 font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Auto-renewal canceled. Access ends on {new Date(entitlements.renewAt).toLocaleDateString()}.</span>
              </div>
            )}
          </div>

          {!entitlements.cancelAtPeriodEnd && entitlements.tier !== 'free' && (
            <button
              onClick={() => setIsCancelModalOpen(true)}
              className="text-xs text-rose-600 hover:text-rose-800 font-bold transition p-1"
            >
              Cancel Auto-Renew
            </button>
          )}
        </div>

        {/* Audit Receipts Table */}
        {billingAudit.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Recent Receipts &amp; Transactions
            </div>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              {billingAudit.map((rcpt) => (
                <div key={rcpt.id} className="p-3 bg-white flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-slate-800">{rcpt.planName || rcpt.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">Invoice #{rcpt.id} • {new Date(rcpt.timestamp).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-700">${rcpt.amountPaid}</div>
                    <div className="text-[10px] text-slate-400 capitalize">{rcpt.billingCycle || 'One-time'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Subscription Plans Modal */}
      <SubscriptionPlansModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        parentEmail={parentEmail}
        initialTab={modalInitialTab}
        onSuccess={handleRefresh}
      />

      {/* Cancel Confirmation Modal */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Cancel Auto-Renewal</span>
            </div>

            <h3 className="text-lg font-black text-slate-900">
              Are you sure you want to cancel?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your family will keep full access to all Pro features until the end of your prepaid period on <strong>{new Date(entitlements.renewAt).toLocaleDateString()}</strong>. After that, your account will revert to the Free "Clover" tier.
            </p>

            <form onSubmit={handleConfirmCancel} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Reason for canceling (Optional)</label>
                <select
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                >
                  <option value="Season ended">Fair season is over for this year</option>
                  <option value="Graduated 4-H">Youth graduated from 4-H / youth showing</option>
                  <option value="Financial">Budget adjustment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enter 4-Digit Parent PIN to Confirm
                </label>
                <input
                  type="password"
                  maxLength={4}
                  placeholder="••••"
                  value={cancelPin}
                  onChange={(e) => setCancelPin(e.target.value)}
                  className="w-full text-center text-lg tracking-widest p-2 border border-slate-300 rounded-xl font-mono"
                  required
                />
                {cancelError && (
                  <p className="text-rose-600 text-xs mt-1 font-bold">{cancelError}</p>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCancelModalOpen(false)}
                  className="flex-1 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
                >
                  Keep My Plan
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition shadow-xs"
                >
                  Confirm Cancellation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
