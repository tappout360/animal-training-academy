// WarrenWise Animal Academy - Unified Passcode & PIN Setup Manager
// Allows Parents/Guardians and 4-H Coaches to set up and manage all PINs, Co-Guardian PINs,
// 4-H Coach Passcodes, Club Roster Join Codes, Recovery Questions, and per-Youth Profile PINs.

import React, { useState, useEffect } from 'react';
import {
  KeyRound, ShieldCheck, Lock, Users, Copy, CheckCircle2,
  AlertTriangle, RefreshCw, Eye, EyeOff, History
} from 'lucide-react';
import {
  getSecurityCredentials,
  setupOrUpdateParentPin,
  setupOrUpdateCoachPasscode,
  setLearnerProfilePin,
  resetSecurityCredentialsToDefaults,
  RECOVERY_QUESTIONS
} from '../../services/YouthSafetyService';

export default function PasscodeAndPinSetupCard({
  roleContext = 'parent', // 'parent' | 'coach'
  learners = []
}) {
  const [creds, setCreds] = useState(() => getSecurityCredentials());
  const [showSecrets, setShowSecrets] = useState(false);
  const [statusBanner, setStatusBanner] = useState(null); // { type: 'success' | 'error', text: string }

  // Parent Form State
  const [parentCurrentPin, setParentCurrentPin] = useState('');
  const [parentNewPin, setParentNewPin] = useState(creds.parentPin || '4444');
  const [parentSecondaryPin, setParentSecondaryPin] = useState(creds.parentSecondaryPin || '');
  const [parentQuestion, setParentQuestion] = useState(creds.parentRecoveryQuestion || RECOVERY_QUESTIONS[0]);
  const [parentAnswer, setParentAnswer] = useState('');

  // Coach Form State
  const [coachCurrentCode, setCoachCurrentCode] = useState('');
  const [coachNewCode, setCoachNewCode] = useState(creds.coachCode || '2222');
  const [clubJoinCode, setClubJoinCode] = useState(creds.coachClubJoinCode || '4H-CLOVER-2026');
  const [coachQuestion, setCoachQuestion] = useState(creds.coachRecoveryQuestion || RECOVERY_QUESTIONS[1]);
  const [coachAnswer, setCoachAnswer] = useState('');

  // Youth Profile PIN State
  const [authPinForLearner, setAuthPinForLearner] = useState('');
  const [learnerPinDrafts, setLearnerPinDrafts] = useState({});
  const [copiedClubCode, setCopiedClubCode] = useState(false);

  const syncFromStorage = () => {
    const latest = getSecurityCredentials();
    setCreds(latest);
    setParentNewPin(latest.parentPin || '4444');
    setParentSecondaryPin(latest.parentSecondaryPin || '');
    setParentQuestion(latest.parentRecoveryQuestion || RECOVERY_QUESTIONS[0]);
    setCoachNewCode(latest.coachCode || '2222');
    setClubJoinCode(latest.coachClubJoinCode || '4H-CLOVER-2026');
    setCoachQuestion(latest.coachRecoveryQuestion || RECOVERY_QUESTIONS[1]);
  };

  useEffect(() => {
    syncFromStorage();
    const handler = () => syncFromStorage();
    if (typeof window !== 'undefined') {
      window.addEventListener('ww_security_credentials_updated', handler);
      return () => window.removeEventListener('ww_security_credentials_updated', handler);
    }
  }, []);

  const showToast = (type, text) => {
    setStatusBanner({ type, text });
    setTimeout(() => setStatusBanner(null), 5000);
  };

  const handleSaveParentCredentials = (e) => {
    e.preventDefault();
    const res = setupOrUpdateParentPin({
      currentPin: parentCurrentPin || (creds.parentPinConfigured ? '' : '4444'),
      newPin: parentNewPin,
      secondaryPin: parentSecondaryPin,
      recoveryQuestion: parentQuestion,
      recoveryAnswer: parentAnswer || undefined
    });

    if (!res.success) {
      showToast('error', res.error);
      return;
    }

    setCreds(res.credentials);
    setParentCurrentPin('');
    setParentAnswer('');
    showToast('success', res.message);
  };

  const handleSaveCoachCredentials = (e) => {
    e.preventDefault();
    const res = setupOrUpdateCoachPasscode({
      currentCode: coachCurrentCode || (creds.coachCodeConfigured ? '' : '2222'),
      newCode: coachNewCode,
      clubJoinCode,
      recoveryQuestion: coachQuestion,
      recoveryAnswer: coachAnswer || undefined
    });

    if (!res.success) {
      showToast('error', res.error);
      return;
    }

    setCreds(res.credentials);
    setCoachCurrentCode('');
    setCoachAnswer('');
    showToast('success', res.message);
  };

  const handleSaveLearnerPin = (learner, enabled) => {
    const draftPin = learnerPinDrafts[learner.id] ?? creds.learnerPins?.[learner.id]?.pin ?? '';
    const effectiveAuthPin =
      authPinForLearner ||
      (roleContext === 'parent' ? creds.parentPin : creds.coachCode);

    const res = setLearnerProfilePin({
      authorizingPin: effectiveAuthPin,
      learnerId: learner.id,
      learnerHandle: learner.name || learner.handle,
      pin: draftPin,
      enabled
    });

    if (!res.success) {
      showToast('error', res.error);
      return;
    }

    setCreds(res.credentials);
    showToast('success', res.message);
  };

  const handleCopyClubCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(creds.coachClubJoinCode || '4H-CLOVER-2026');
    }
    setCopiedClubCode(true);
    setTimeout(() => setCopiedClubCode(false), 2500);
  };

  const handleResetDefaults = () => {
    const updated = resetSecurityCredentialsToDefaults();
    setCreds(updated);
    syncFromStorage();
    showToast('success', 'All passcodes and PINs reset to starter defaults (Parent: 4444, Coach: 2222).');
  };

  const defaultLearnerList = learners.length > 0 ? learners : [
    { id: 'learner_1', handle: 'CloverMaya88', name: 'Maya (Cloverbud)', division: 'cloverbud' },
    { id: 'learner_2', handle: 'BarnSammy24', name: 'Sammy (Junior)', division: 'junior' },
    { id: 'learner_3', handle: 'ShowJordan99', name: 'Jordan (Senior)', division: 'senior' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Overview Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-7 shadow-md border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <KeyRound className="w-3.5 h-3.5" />
            <span>Passcode &amp; PIN Command Center</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Parent, Co-Guardian, 4-H Coach &amp; Youth PIN Setup
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            Configure and update your 4–6 digit Parent PIN, optional Co-Guardian PIN, 4-H Leader Portal Passcode, Club Roster Join Code, and individual Youth Profile lock PINs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowSecrets(!showSecrets)}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-1.5 transition cursor-pointer"
          >
            {showSecrets ? <EyeOff className="w-4 h-4 text-amber-300" /> : <Eye className="w-4 h-4 text-amber-300" />}
            <span>{showSecrets ? 'Hide Codes' : 'Reveal Active Codes'}</span>
          </button>

          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-700/40 flex items-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Starter Defaults</span>
          </button>
        </div>
      </div>

      {/* Status Toast */}
      {statusBanner && (
        <div className={`p-4 rounded-2xl border text-xs font-bold flex items-center gap-2.5 ${
          statusBanner.type === 'success'
            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
            : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          {statusBanner.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{statusBanner.text}</span>
        </div>
      )}

      {/* Main 2-Column Grid: Parent PIN Setup + Coach Passcode Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* CARD 1: PARENT & CO-GUARDIAN PIN SETUP */}
        <form
          onSubmit={handleSaveParentCredentials}
          className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Parent &amp; Co-Guardian PINs</h3>
                  <p className="text-xs text-slate-500">Protects screen-time boundaries, schedules, and spending locks.</p>
                </div>
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                creds.parentPinConfigured
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                {creds.parentPinConfigured ? '✓ Custom PIN Active' : 'Starter Default (4444)'}
              </span>
            </div>

            {/* Active Status Summary */}
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Active Primary PIN</div>
                <div className="font-mono font-black text-sm text-slate-900 mt-0.5">
                  {showSecrets ? creds.parentPin : '•'.repeat(String(creds.parentPin || '4444').length)}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Co-Guardian 2nd PIN</div>
                <div className="font-mono font-black text-sm text-slate-900 mt-0.5">
                  {creds.parentSecondaryPin
                    ? (showSecrets ? creds.parentSecondaryPin : '•'.repeat(String(creds.parentSecondaryPin).length))
                    : 'Not Set (Optional)'}
                </div>
              </div>
            </div>

            {creds.parentPinConfigured && (
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Current Parent PIN (Required to Save Changes)
                </label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  maxLength={6}
                  value={parentCurrentPin}
                  onChange={(e) => setParentCurrentPin(e.target.value)}
                  placeholder="Enter current 4–6 digit PIN"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  New Primary Parent PIN (4–6 Digits) *
                </label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  required
                  maxLength={6}
                  value={parentNewPin}
                  onChange={(e) => setParentNewPin(e.target.value)}
                  placeholder="e.g. 4829"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Co-Guardian / Spouse PIN (Optional)
                </label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  maxLength={6}
                  value={parentSecondaryPin}
                  onChange={(e) => setParentSecondaryPin(e.target.value)}
                  placeholder="Optional 4–6 digits"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Parent PIN Recovery Question
              </label>
              <select
                value={parentQuestion}
                onChange={(e) => setParentQuestion(e.target.value)}
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800"
              >
                {RECOVERY_QUESTIONS.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Recovery Answer {showSecrets ? `(Current: "${creds.parentRecoveryAnswer}")` : ''}
              </label>
              <input
                type="text"
                value={parentAnswer}
                onChange={(e) => setParentAnswer(e.target.value)}
                placeholder="Enter recovery answer (or leave blank to keep current)"
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-black uppercase tracking-wider shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Save Parent &amp; Co-Guardian PINs</span>
          </button>
        </form>

        {/* CARD 2: 4-H LEADER / COACH PASSCODE & CLUB JOIN CODE SETUP */}
        <form
          onSubmit={handleSaveCoachCredentials}
          className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-black">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">4-H Coach Passcode &amp; Club Code</h3>
                  <p className="text-xs text-slate-500">Unlocks Leader Portal, Barn Checklists, and Club Roster linking.</p>
                </div>
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                creds.coachCodeConfigured
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-blue-50 text-blue-800 border-blue-200'
              }`}>
                {creds.coachCodeConfigured ? '✓ Custom Code Active' : 'Starter Default (2222)'}
              </span>
            </div>

            {/* Active Status Summary */}
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Coach Portal Passcode</div>
                <div className="font-mono font-black text-sm text-slate-900 mt-0.5">
                  {showSecrets ? creds.coachCode : '•'.repeat(String(creds.coachCode || '2222').length)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Club Roster Join Code</div>
                  <div className="font-mono font-black text-sm text-blue-700 mt-0.5">
                    {creds.coachClubJoinCode || '4H-CLOVER-2026'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyClubCode}
                  title="Copy Club Join Code"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 text-slate-700 transition cursor-pointer"
                >
                  {copiedClubCode ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {creds.coachCodeConfigured && (
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Current Coach Passcode (Required to Save Changes)
                </label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  maxLength={12}
                  value={coachCurrentCode}
                  onChange={(e) => setCoachCurrentCode(e.target.value)}
                  placeholder="Enter current Coach Passcode"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  New Coach Passcode (4–12 Chars) *
                </label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  required
                  maxLength={12}
                  value={coachNewCode}
                  onChange={(e) => setCoachNewCode(e.target.value)}
                  placeholder="e.g. 2222 or LEADER-26"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Club Roster Join Code
                </label>
                <input
                  type="text"
                  maxLength={16}
                  value={clubJoinCode}
                  onChange={(e) => setClubJoinCode(e.target.value.toUpperCase())}
                  placeholder="e.g. 4H-CLOVER-2026"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50 uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Coach Passcode Recovery Question
              </label>
              <select
                value={coachQuestion}
                onChange={(e) => setCoachQuestion(e.target.value)}
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800"
              >
                {RECOVERY_QUESTIONS.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Recovery Answer {showSecrets ? `(Current: "${creds.coachRecoveryAnswer}")` : ''}
              </label>
              <input
                type="text"
                value={coachAnswer}
                onChange={(e) => setCoachAnswer(e.target.value)}
                placeholder="Enter recovery answer (or leave blank to keep current)"
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 bg-slate-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Save 4-H Coach Passcode &amp; Club Code</span>
          </button>
        </form>
      </div>

      {/* CARD 3: INDIVIDUAL YOUTH LEARNER PROFILE PIN LOCKS */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">Youth Learner Profile PINs (Sibling &amp; Shared Tablet Guard)</h3>
              <p className="text-xs text-slate-500">
                Optional 4-digit PINs per youth member so siblings or club members sharing a device cannot accidentally alter each other&apos;s Pet Barn or Trail Quest progress.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-[11px] font-bold text-slate-500">Authorizing PIN/Code:</label>
            <input
              type="password"
              maxLength={12}
              value={authPinForLearner}
              onChange={(e) => setAuthPinForLearner(e.target.value)}
              placeholder={roleContext === 'parent' ? 'Auto or Parent PIN' : 'Auto or Coach Code'}
              className="text-xs font-mono font-bold py-1.5 px-3 rounded-xl border border-slate-300 bg-slate-50 w-36"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {defaultLearnerList.map((learner) => {
            const existingConfig = creds.learnerPins?.[learner.id];
            const isPinActive = Boolean(existingConfig?.enabled && existingConfig?.pin);
            const draftValue = learnerPinDrafts[learner.id] ?? existingConfig?.pin ?? '';

            return (
              <div
                key={learner.id}
                className={`p-4 rounded-2xl border transition space-y-3 ${
                  isPinActive
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-slate-900">{learner.name || learner.handle}</div>
                    <div className="text-[11px] text-slate-500 capitalize">{learner.ageDivision || learner.division} Division</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isPinActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isPinActive ? `PIN Locked (${showSecrets ? existingConfig.pin : '••••'})` : 'Unlocked'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type={showSecrets ? 'text' : 'password'}
                    maxLength={4}
                    value={draftValue}
                    onChange={(e) =>
                      setLearnerPinDrafts({
                        ...learnerPinDrafts,
                        [learner.id]: e.target.value
                      })
                    }
                    placeholder="4-digit PIN (e.g. 1234)"
                    className="flex-1 text-xs font-mono font-bold py-2 px-3 rounded-xl border border-slate-300 bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => handleSaveLearnerPin(learner, true)}
                    className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer"
                  >
                    Set PIN
                  </button>
                  {isPinActive && (
                    <button
                      type="button"
                      onClick={() => handleSaveLearnerPin(learner, false)}
                      className="px-2.5 py-2 rounded-xl text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 transition cursor-pointer"
                    >
                      Off
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CARD 4: CREDENTIAL SECURITY AUDIT LOG */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-slate-500" />
            <h4 className="text-sm font-black text-slate-900">Passcode &amp; PIN Security Audit Log</h4>
          </div>
          <span className="text-[11px] font-bold text-slate-400">
            {(creds.auditHistory || []).length} Events
          </span>
        </div>

        <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
          {(creds.auditHistory || []).slice(0, 8).map((item) => (
            <div key={item.id} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-bold uppercase">
                  {item.action}
                </span>
                <span className="text-slate-700 font-medium">{item.detail}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {new Date(item.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
