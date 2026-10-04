// WarrenWise Youth Animal Training Academy - Subscription & Pricing Modal
// Parent-authorized checkout gate, plan comparison, and educational add-on selector

import React, { useState } from 'react';
import { 
  ShieldCheck, Check, Sparkles, X, Heart, Award, 
  HelpCircle, Lock, KeyRound, AlertCircle, CheckCircle2,
  Calendar, FileText, ChevronRight, Tag, Users, Compass
} from 'lucide-react';
import { 
  SUBSCRIPTION_TIERS, EDUCATIONAL_ADDONS, ANTI_PAY_TO_WIN_POLICY 
} from '../../config/subscriptionPlans';
import { EntitlementService } from '../../services/EntitlementService';

export default function SubscriptionPlansModal({
  isOpen,
  onClose,
  parentEmail = 'parent.miller@example.com',
  initialTab = 'plans', // 'plans' | 'addons'
  onSuccess
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' | 'monthly'
  const [selectedTierKey, setSelectedTierKey] = useState('family');
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Parent PIN confirmation step state
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [parentPin, setParentPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [successReceipt, setSuccessReceipt] = useState(null);

  if (!isOpen) return null;

  const currentEntitlements = EntitlementService.getEntitlements(parentEmail);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const promo = EntitlementService.validatePromoCode(promoCodeInput);
    if (promo) {
      setAppliedPromo(promo);
    } else {
      setPinError('Invalid or expired discount code.');
    }
  };

  const handleStartPlanUpgrade = (tierKey) => {
    setSelectedTierKey(tierKey);
    setSelectedAddon(null);
    setIsAuthorizing(true);
    setPinError('');
    setParentPin('');
  };

  const handleStartAddonPurchase = (addon) => {
    setSelectedAddon(addon);
    setIsAuthorizing(true);
    setPinError('');
    setParentPin('');
  };

  const handleConfirmAuthorization = (e) => {
    e.preventDefault();
    setPinError('');

    if (selectedAddon) {
      // Addon purchase
      const res = EntitlementService.purchaseAddon({
        parentEmail,
        addonId: selectedAddon.id,
        parentPin
      });
      if (res.success) {
        setSuccessReceipt(res.receipt);
        setIsAuthorizing(false);
        if (onSuccess) onSuccess();
      } else {
        setPinError(res.error);
      }
    } else {
      // Plan upgrade
      const res = EntitlementService.upgradePlan({
        parentEmail,
        newTier: selectedTierKey,
        billingCycle,
        parentPin,
        promoCode: appliedPromo?.code
      });
      if (res.success) {
        setSuccessReceipt(res.receipt);
        setIsAuthorizing(false);
        if (onSuccess) onSuccess();
      } else {
        setPinError(res.error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Parent-Safe 4-H Education Platform</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            WarrenWise Academy Plans &amp; Tools
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mt-1">
            Affordable, transparent memberships built for 4-H families and clubs. Zero pay-to-win mechanics, zero surprise child charges.
          </p>

          {/* Sub-Tabs: Plans vs Add-Ons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-emerald-800/80">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveTab('plans'); setIsAuthorizing(false); setSuccessReceipt(null); }}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'plans'
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800'
                }`}
              >
                Subscription Passes
              </button>
              <button
                onClick={() => { setActiveTab('addons'); setIsAuthorizing(false); setSuccessReceipt(null); }}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'addons'
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800'
                }`}
              >
                Educational Add-Ons &amp; Tools
              </button>
            </div>

            {/* Monthly / Annual Toggle */}
            {activeTab === 'plans' && (
              <div className="flex items-center bg-emerald-950/80 p-1 rounded-xl border border-emerald-700/60 text-xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${
                    billingCycle === 'monthly' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-300'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
                    billingCycle === 'annual' ? 'bg-amber-400 text-emerald-950 shadow-xs' : 'text-emerald-300'
                  }`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] bg-emerald-950 text-amber-300 px-1 py-0.2 rounded font-black">
                    Save 20%
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* SUCCESS RECEIPT VIEW */}
          {successReceipt && (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900">
                  Upgrade Authorized &amp; Active!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Receipt #{successReceipt.id} recorded. All linked youth now have immediate local and offline access.
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-emerald-200 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Product:</span>
                  <span>{successReceipt.planName || successReceipt.title}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Amount Paid:</span>
                  <span className="font-bold text-emerald-700">${successReceipt.amountPaid}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Authorized Parent:</span>
                  <span className="font-mono text-slate-800">{successReceipt.parentEmail}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Timestamp:</span>
                  <span>{new Date(successReceipt.timestamp).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-sm"
              >
                Return to Academy
              </button>
            </div>
          )}

          {/* PARENT PIN AUTHORIZATION VIEW */}
          {isAuthorizing && !successReceipt && (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-4 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-purple-900 text-xs font-bold uppercase tracking-wider">
                <KeyRound className="w-4 h-4 text-purple-600" />
                <span>Parent / Guardian Authorization Required</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Under WarrenWise Youth Safety rules, <strong>youth cannot complete purchases alone</strong>. A parent or guardian must enter their 4-digit Parent PIN to authorize this change.
              </p>

              <form onSubmit={handleConfirmAuthorization} className="space-y-4">
                <div className="bg-white p-3.5 rounded-xl border border-purple-200 space-y-1 text-xs">
                  <div className="font-bold text-slate-800">
                    {selectedAddon ? selectedAddon.title : SUBSCRIPTION_TIERS[selectedTierKey].name}
                  </div>
                  <div className="text-purple-700 font-bold">
                    {selectedAddon 
                      ? `$${selectedAddon.price} (One-Time Tool)`
                      : billingCycle === 'annual'
                      ? `$${SUBSCRIPTION_TIERS[selectedTierKey].priceAnnual} / year (Billed annually)`
                      : `$${SUBSCRIPTION_TIERS[selectedTierKey].priceMonthly} / month`
                    }
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Receipt sent to: <span className="font-mono">{parentEmail}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enter 4-Digit Parent PIN (Default demo PIN: 4444)
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    value={parentPin}
                    onChange={(e) => setParentPin(e.target.value)}
                    className="w-full text-center text-xl tracking-widest px-4 py-2.5 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 font-mono bg-white"
                    required
                    autoFocus
                  />
                  {pinError && (
                    <p className="text-rose-600 text-xs mt-1.5 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{pinError}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAuthorizing(false)}
                    className="flex-1 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition"
                  >
                    Back to Plans
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl text-xs font-bold bg-purple-700 hover:bg-purple-800 text-white shadow-sm transition"
                  >
                    Authorize &amp; Activate
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 1: SUBSCRIPTION PLANS COMPARISON TABLE */}
          {activeTab === 'plans' && !isAuthorizing && !successReceipt && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. FREE CLOVER TIER */}
                <div className="border border-slate-200 rounded-2xl p-5 flex flex-col justify-between bg-slate-50/50 hover:border-slate-300 transition">
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {SUBSCRIPTION_TIERS.free.badgeText}
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      {SUBSCRIPTION_TIERS.free.name}
                    </h3>
                    <div className="text-2xl font-black text-slate-900">
                      $0 <span className="text-xs font-normal text-slate-500">/ forever</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {SUBSCRIPTION_TIERS.free.description}
                    </p>

                    <div className="border-t border-slate-200 pt-3 space-y-1.5 text-xs">
                      {SUBSCRIPTION_TIERS.free.whatYouthGet.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700">
                          <Check className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      disabled={currentEntitlements.tier === 'free'}
                      onClick={() => handleStartPlanUpgrade('free')}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold border transition ${
                        currentEntitlements.tier === 'free'
                          ? 'bg-slate-200 text-slate-500 border-slate-200 cursor-default'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {currentEntitlements.tier === 'free' ? 'Current Active Tier' : 'Downgrade to Free'}
                    </button>
                  </div>
                </div>

                {/* 2. PRO SHOWMAN */}
                <div className="border border-indigo-200 rounded-2xl p-5 flex flex-col justify-between bg-indigo-50/30 hover:border-indigo-300 transition relative">
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">
                      {SUBSCRIPTION_TIERS.pro.badgeText}
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      {SUBSCRIPTION_TIERS.pro.name}
                    </h3>
                    <div className="text-2xl font-black text-indigo-950">
                      {billingCycle === 'annual' ? '$59' : '$7.99'}
                      <span className="text-xs font-normal text-slate-500">
                        {billingCycle === 'annual' ? ' / yr ($4.92/mo)' : ' / month'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {SUBSCRIPTION_TIERS.pro.description}
                    </p>

                    <div className="border-t border-indigo-200/80 pt-3 space-y-1.5 text-xs">
                      {SUBSCRIPTION_TIERS.pro.whatYouthGet.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-800">
                          <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      disabled={currentEntitlements.tier === 'pro'}
                      onClick={() => handleStartPlanUpgrade('pro')}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
                        currentEntitlements.tier === 'pro'
                          ? 'bg-indigo-100 text-indigo-700 border border-indigo-200 cursor-default'
                          : 'bg-indigo-700 hover:bg-indigo-800 text-white'
                      }`}
                    >
                      {currentEntitlements.tier === 'pro' ? 'Current Active Tier' : 'Select Pro Showman'}
                    </button>
                  </div>
                </div>

                {/* 3. FAMILY BARN PASS (POPULAR) */}
                <div className="border-2 border-emerald-500 rounded-2xl p-5 flex flex-col justify-between bg-emerald-50/40 relative shadow-md">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs">
                    Most Popular for 4-H
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                      {SUBSCRIPTION_TIERS.family.badgeText}
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      {SUBSCRIPTION_TIERS.family.name}
                    </h3>
                    <div className="text-2xl font-black text-emerald-950">
                      {billingCycle === 'annual' ? '$99' : '$12.99'}
                      <span className="text-xs font-normal text-slate-500">
                        {billingCycle === 'annual' ? ' / yr ($8.25/mo)' : ' / month'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {SUBSCRIPTION_TIERS.family.description}
                    </p>

                    <div className="border-t border-emerald-200 pt-3 space-y-1.5 text-xs">
                      {SUBSCRIPTION_TIERS.family.whatParentsGet.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-emerald-950 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      disabled={currentEntitlements.tier === 'family'}
                      onClick={() => handleStartPlanUpgrade('family')}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition shadow-xs ${
                        currentEntitlements.tier === 'family'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-default'
                          : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      }`}
                    >
                      {currentEntitlements.tier === 'family' ? 'Current Active Tier' : 'Upgrade to Family Pass'}
                    </button>
                  </div>
                </div>
              </div>

              {/* B2B Club Charter Banner */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>4-H Club &amp; FFA Chapter Charters</span>
                  </div>
                  <h4 className="text-base font-bold">
                    Need licensing for your entire 4-H club or county project group?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Get up to 30 enrolled youth seats, master leader dashboards, and skillathon meeting generators for $199/year.
                  </p>
                </div>

                <button
                  onClick={() => handleStartPlanUpgrade('club')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition"
                >
                  View Club Charter ($199/yr)
                </button>
              </div>

              {/* Anti-Pay-To-Win Notice */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{ANTI_PAY_TO_WIN_POLICY.TITLE}</span>
                </div>
                <p>{ANTI_PAY_TO_WIN_POLICY.SUMMARY}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px]">
                  {ANTI_PAY_TO_WIN_POLICY.POINTS.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-slate-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EDUCATIONAL ADD-ONS */}
          {activeTab === 'addons' && !isAuthorizing && !successReceipt && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 font-medium">
                One-time educational tools and physical keepsakes. Never required for core curriculum progression.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EDUCATIONAL_ADDONS.map((addon) => {
                  const isUnlocked = currentEntitlements.purchasedAddons.includes(addon.id) ||
                    (addon.includedInTiers && addon.includedInTiers.includes(currentEntitlements.tier));

                  return (
                    <div key={addon.id} className="border border-slate-200 rounded-2xl p-5 bg-white space-y-3 flex flex-col justify-between hover:border-slate-300 transition">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{addon.emoji}</span>
                          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                            ${addon.price}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900">
                          {addon.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {addon.description}
                        </p>

                        <div className="border-t border-slate-100 pt-2 space-y-1 text-xs">
                          {addon.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-slate-700 text-[11px]">
                              <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          disabled={isUnlocked}
                          onClick={() => handleStartAddonPurchase(addon)}
                          className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                            isUnlocked
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200 cursor-default'
                              : 'bg-purple-700 hover:bg-purple-800 text-white shadow-xs'
                          }`}
                        >
                          {isUnlocked ? '✓ Unlocked for Family' : `Purchase Add-On ($${addon.price})`}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
