// WarrenWise Animal Academy - Role Authentication & Passcode/PIN Setup Gate Modal
// Enforces real security boundaries preventing youth from accessing parent, coach, or admin shells,
// while allowing Parents and 4-H Coaches to set up, customize, and recover their PINs & Passcodes.

import React, { useState, useEffect } from 'react';
import { 
  Lock, KeyRound, ShieldAlert, AlertTriangle, 
  CheckCircle2, X, ArrowRight, Settings, LifeBuoy, ShieldCheck
} from 'lucide-react';
import { 
  verifyParentPin, 
  verifyCoachCode, 
  getSecurityCredentials,
  setupOrUpdateParentPin,
  setupOrUpdateCoachPasscode,
  recoverPinOrPasscode,
  RECOVERY_QUESTIONS
} from '../../services/YouthSafetyService';

export default function RoleAuthGateModal({
  targetRole,
  isOpen,
  onSuccess,
  onClose
}) {
  const [mode, setMode] = useState('unlock'); // 'unlock' | 'setup' | 'recover'
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Setup / Change State
  const [creds, setCreds] = useState(() => getSecurityCredentials());
  const [currentSecret, setCurrentSecret] = useState('');
  const [newSecret, setNewSecret] = useState('');
  const [secondarySecret, setSecondarySecret] = useState('');
  const [recoveryQuestion, setRecoveryQuestion] = useState(RECOVERY_QUESTIONS[0]);
  const [recoveryAnswer, setRecoveryAnswer] = useState('');

  // Recovery State
  const [recoverAnswerInput, setRecoverAnswerInput] = useState('');
  const [recoverNewSecret, setRecoverNewSecret] = useState('');

  useEffect(() => {
    if (isOpen) {
      const latest = getSecurityCredentials();
      setCreds(latest);
      setMode('unlock');
      setPinInput('');
      setErrorMsg('');
      setSuccessMsg('');
      setCurrentSecret('');
      setNewSecret('');
      setSecondarySecret(
        targetRole === 'parent'
          ? latest.parentSecondaryPin || ''
          : latest.coachClubJoinCode || '4H-CLOVER-2026'
      );
      setRecoveryQuestion(
        targetRole === 'parent'
          ? latest.parentRecoveryQuestion || RECOVERY_QUESTIONS[0]
          : latest.coachRecoveryQuestion || RECOVERY_QUESTIONS[1]
      );
      setRecoveryAnswer('');
      setRecoverAnswerInput('');
      setRecoverNewSecret('');
    }
  }, [isOpen, targetRole]);

  if (!isOpen) return null;

  const isParent = targetRole === 'parent';
  const isCustomConfigured = isParent ? creds.parentPinConfigured : creds.coachCodeConfigured;

  const handleUnlockSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (isParent) {
      if (verifyParentPin(pinInput)) {
        setPinInput('');
        onSuccess('parent');
      } else {
        setErrorMsg(
          isCustomConfigured
            ? 'Incorrect Parent or Co-Guardian PIN. Use "Forgot / Recover" if needed.'
            : 'Incorrect Parent PIN. (Default starter PIN: 4444 — or click "Set Up Custom PIN" above)'
        );
      }
    } else if (targetRole === 'coach') {
      if (verifyCoachCode(pinInput)) {
        setPinInput('');
        onSuccess('coach');
      } else {
        setErrorMsg(
          isCustomConfigured
            ? 'Invalid 4-H Leader Passcode or Club Join Code.'
            : 'Invalid 4-H Leader / Coach Code. (Default starter Code: 2222 — or click "Set Up Passcode" above)'
        );
      }
    }
  };

  const handleSetupSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (isParent) {
      const res = setupOrUpdateParentPin({
        currentPin: currentSecret || (creds.parentPinConfigured ? '' : '4444'),
        newPin: newSecret,
        secondaryPin: secondarySecret,
        recoveryQuestion,
        recoveryAnswer: recoveryAnswer || undefined
      });

      if (!res.success) {
        setErrorMsg(res.error);
        return;
      }
      setCreds(res.credentials);
      setSuccessMsg(res.message);
      setPinInput(newSecret);
      setTimeout(() => {
        onSuccess('parent');
      }, 900);
    } else {
      const res = setupOrUpdateCoachPasscode({
        currentCode: currentSecret || (creds.coachCodeConfigured ? '' : '2222'),
        newCode: newSecret,
        clubJoinCode: secondarySecret,
        recoveryQuestion,
        recoveryAnswer: recoveryAnswer || undefined
      });

      if (!res.success) {
        setErrorMsg(res.error);
        return;
      }
      setCreds(res.credentials);
      setSuccessMsg(res.message);
      setPinInput(newSecret);
      setTimeout(() => {
        onSuccess('coach');
      }, 900);
    }
  };

  const handleRecoverSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const res = recoverPinOrPasscode({
      role: isParent ? 'parent' : 'coach',
      recoveryAnswer: recoverAnswerInput,
      newSecret: recoverNewSecret
    });

    if (!res.success) {
      setErrorMsg(res.error);
      return;
    }

    setCreds(res.credentials);
    setSuccessMsg('Credentials recovered & updated! Unlocking portal...');
    setTimeout(() => {
      onSuccess(isParent ? 'parent' : 'coach');
    }, 900);
  };

  const getRoleTitle = () => {
    switch (targetRole) {
      case 'parent': return 'Parent / Guardian Portal Gate';
      case 'coach': return '4-H Leader & Coach Portal Gate';
      default: return 'Security Check';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        
        {/* Header */}
        <div className={`p-6 text-white ${
          isParent
            ? 'bg-gradient-to-r from-amber-700 to-stone-900'
            : 'bg-gradient-to-r from-blue-700 to-slate-900'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                Permission &amp; Passcode Guard
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-lg font-black mt-2 text-white">
            {getRoleTitle()}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            {isParent
              ? 'Protect family safety controls with your custom 4–6 digit Parent & Co-Guardian PIN.'
              : 'Secure your 4-H Club roster, barn rubrics, and Club Join Codes.'}
          </p>

          {/* Mode Switcher Pills */}
          <div className="grid grid-cols-3 gap-1.5 mt-4 pt-3 border-t border-white/15">
            <button
              type="button"
              onClick={() => { setMode('unlock'); setErrorMsg(''); setSuccessMsg(''); }}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition cursor-pointer ${
                mode === 'unlock'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'bg-white/10 text-white/85 hover:bg-white/20'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Unlock Portal</span>
            </button>
            <button
              type="button"
              onClick={() => { setMode('setup'); setErrorMsg(''); setSuccessMsg(''); }}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition cursor-pointer ${
                mode === 'setup'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'bg-white/10 text-white/85 hover:bg-white/20'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{isCustomConfigured ? 'Change PIN/Code' : 'Set Up PIN/Code'}</span>
            </button>
            <button
              type="button"
              onClick={() => { setMode('recover'); setErrorMsg(''); setSuccessMsg(''); }}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition cursor-pointer ${
                mode === 'recover'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'bg-white/10 text-white/85 hover:bg-white/20'
              }`}
            >
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Forgot / Recover</span>
            </button>
          </div>
        </div>

        {/* MODE 1: UNLOCK PORTAL */}
        {mode === 'unlock' && (
          <form onSubmit={handleUnlockSubmit} className="p-6 space-y-4">
            <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-2xl p-3">
              <div className="text-xs text-stone-600">
                {isCustomConfigured ? (
                  <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    Custom {isParent ? 'Parent PIN' : 'Coach Passcode'} is active
                  </span>
                ) : (
                  <span>
                    Starter default active ({isParent ? 'PIN: 4444' : 'Code: 2222'}). Click <strong>Set Up PIN/Code</strong> to personalize.
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {isParent ? 'Enter 4–6 Digit Parent or Co-Guardian PIN' : 'Enter 4-H Leader Passcode or Club Code'}
              </label>
              <input
                type="password"
                autoFocus
                maxLength={isParent ? 6 : 16}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder={isParent ? (isCustomConfigured ? '••••' : '•••• (Default: 4444)') : (isCustomConfigured ? '••••' : '•••• (Default: 2222)')}
                className="w-full text-center tracking-widest text-lg font-mono font-bold py-2.5 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-stone-50"
              />
            </div>

            {errorMsg && (
              <div className="text-xs text-rose-600 font-semibold bg-rose-50 border border-rose-200 p-2.5 rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-2 pt-2">
              <button
                type="button"
                onClick={() => { setMode('setup'); setErrorMsg(''); }}
                className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
              >
                {isCustomConfigured ? 'Change PIN / Passcode →' : 'First-Time PIN / Passcode Setup →'}
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:scale-[1.02] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Unlock Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}

        {/* MODE 2: SET UP OR CHANGE PIN / PASSCODE */}
        {mode === 'setup' && (
          <form onSubmit={handleSetupSubmit} className="p-6 space-y-3.5">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900">
              <strong>{isParent ? 'Parent & Co-Guardian PIN Setup:' : '4-H Leader & Club Passcode Setup:'}</strong>{' '}
              {isParent
                ? 'Choose a 4 to 6 digit numeric PIN for yourself, an optional secondary PIN for a spouse/co-guardian, and a recovery answer.'
                : 'Choose a 4 to 12 character Coach Portal Passcode, customize your Club Roster Join Code for learners, and set a recovery answer.'}
            </div>

            {isCustomConfigured && (
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Current {isParent ? 'Parent PIN' : 'Coach Passcode'}
                </label>
                <input
                  type="password"
                  maxLength={12}
                  value={currentSecret}
                  onChange={(e) => setCurrentSecret(e.target.value)}
                  placeholder="Enter current PIN / Passcode to authorize change"
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-stone-300 bg-stone-50"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  New {isParent ? 'Parent PIN (4–6 Digits)' : 'Coach Passcode (4–12 Chars)'} *
                </label>
                <input
                  type="password"
                  required
                  maxLength={isParent ? 6 : 12}
                  value={newSecret}
                  onChange={(e) => setNewSecret(e.target.value)}
                  placeholder={isParent ? 'e.g. 5820' : 'e.g. BARN-2026'}
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-stone-300 bg-stone-50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                  {isParent ? 'Co-Guardian PIN (Optional)' : 'Club Roster Join Code'}
                </label>
                <input
                  type="text"
                  maxLength={isParent ? 6 : 16}
                  value={secondarySecret}
                  onChange={(e) => setSecondarySecret(e.target.value)}
                  placeholder={isParent ? 'Optional 2nd Parent PIN' : 'e.g. 4H-CLOVER-2026'}
                  className="w-full text-sm font-mono font-bold py-2 px-3 rounded-xl border border-stone-300 bg-stone-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                Security Recovery Question
              </label>
              <select
                value={recoveryQuestion}
                onChange={(e) => setRecoveryQuestion(e.target.value)}
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-stone-300 bg-stone-50 text-stone-800"
              >
                {RECOVERY_QUESTIONS.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                Recovery Answer (Used if you forget your {isParent ? 'PIN' : 'Passcode'})
              </label>
              <input
                type="text"
                value={recoveryAnswer}
                onChange={(e) => setRecoveryAnswer(e.target.value)}
                placeholder={isParent ? 'e.g. Clover (leave blank to keep existing)' : 'e.g. Valley County 4-H'}
                className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-stone-300 bg-stone-50"
              />
            </div>

            {errorMsg && (
              <div className="text-xs text-rose-600 font-semibold bg-rose-50 border border-rose-200 p-2.5 rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('unlock')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save &amp; Unlock Portal</span>
              </button>
            </div>
          </form>
        )}

        {/* MODE 3: FORGOT / RECOVER PIN OR PASSCODE */}
        {mode === 'recover' && (
          <form onSubmit={handleRecoverSubmit} className="p-6 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-xs text-blue-900">
              <strong>Security Recovery Check:</strong> Answer your saved recovery question below to reset your {isParent ? 'Parent PIN' : 'Coach Passcode'}.
            </div>

            <div>
              <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                Configured Recovery Question:
              </div>
              <div className="text-xs font-bold text-stone-900 bg-stone-100 p-2.5 rounded-xl border border-stone-200">
                {isParent ? creds.parentRecoveryQuestion : creds.coachRecoveryQuestion}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                Your Recovery Answer
              </label>
              <input
                type="text"
                required
                value={recoverAnswerInput}
                onChange={(e) => setRecoverAnswerInput(e.target.value)}
                placeholder={isParent ? 'Enter recovery answer (Default demo: clover)' : 'Enter recovery answer (Default demo: valley)'}
                className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl border border-stone-300 bg-stone-50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                Set New {isParent ? '4–6 Digit Parent PIN' : '4–12 Char Coach Passcode'}
              </label>
              <input
                type="password"
                required
                maxLength={isParent ? 6 : 12}
                value={recoverNewSecret}
                onChange={(e) => setRecoverNewSecret(e.target.value)}
                placeholder={isParent ? 'Enter new 4–6 digit PIN' : 'Enter new Coach Passcode'}
                className="w-full text-sm font-mono font-bold py-2.5 px-3 rounded-xl border border-stone-300 bg-stone-50"
              />
            </div>

            {errorMsg && (
              <div className="text-xs text-rose-600 font-semibold bg-rose-50 border border-rose-200 p-2.5 rounded-xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMode('unlock')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Verify &amp; Reset {isParent ? 'PIN' : 'Passcode'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
