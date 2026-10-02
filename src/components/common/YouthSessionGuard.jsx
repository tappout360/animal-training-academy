// WarrenWise Youth Animal Training Academy - Youth Session Guard
// Real-time parent-defined limit enforcement: Time Limits, Curfews, App Freezes, and Break Reminders
// Empathetic, supportive, with instant Parent PIN unlock/extension tools

import React, { useState, useEffect } from 'react';
import { 
  Clock, ShieldAlert, Heart, PauseCircle, KeyRound, 
  Sparkles, CheckCircle2, X, RefreshCw, Sun, Moon, Eye
} from 'lucide-react';
import { ParentalControlsService } from '../../services/ParentalControlsService';

export default function YouthSessionGuard({
  learner,
  activeDivision = 'junior',
  children,
  onParentSwitch
}) {
  const [limits, setLimits] = useState(() => 
    ParentalControlsService.getLimitsForLearner(learner.id, activeDivision)
  );
  const [dailyMinutes, setDailyMinutes] = useState(() => 
    ParentalControlsService.getDailyUsageMinutes(learner.id)
  );

  // Parent PIN modal state for instant unlock/extensions
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinAction, setPinAction] = useState('extend_30'); // 'extend_15' | 'extend_30' | 'unlimited' | 'unfreeze'
  const [pinError, setPinError] = useState('');

  // Break reminder state
  const [showBreakReminder, setShowBreakReminder] = useState(false);
  const [breakTimerSeconds, setBreakTimerSeconds] = useState(20);

  // Sync limits on learner change & listen for live cross-tab updates
  useEffect(() => {
    const load = () => {
      const updated = ParentalControlsService.getLimitsForLearner(learner.id, activeDivision);
      setLimits(updated);
      setDailyMinutes(ParentalControlsService.getDailyUsageMinutes(learner.id));
    };

    load();

    const handleUpdate = (e) => {
      if (e.detail?.learnerId === learner.id) {
        setLimits(e.detail.limits);
      }
    };

    window.addEventListener('ww_parental_controls_updated', handleUpdate);
    return () => window.removeEventListener('ww_parental_controls_updated', handleUpdate);
  }, [learner.id, activeDivision]);

  // Usage minutes ticker (every 60 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // Don't increment if app is frozen or limit exceeded
      if (!limits.isAppFrozen) {
        const nextMin = ParentalControlsService.incrementDailyUsage(learner.id, 1);
        setDailyMinutes(nextMin);

        // Check break reminder
        if (limits.breakReminders === '20min' && nextMin > 0 && nextMin % 20 === 0) {
          setShowBreakReminder(true);
          setBreakTimerSeconds(20);
        } else if (limits.breakReminders === '45min' && nextMin > 0 && nextMin % 45 === 0) {
          setShowBreakReminder(true);
          setBreakTimerSeconds(20);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [learner.id, limits]);

  // Break countdown ticker
  useEffect(() => {
    if (!showBreakReminder) return;
    if (breakTimerSeconds <= 0) return;

    const timer = setInterval(() => {
      setBreakTimerSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showBreakReminder, breakTimerSeconds]);

  // Schedule and Time Evaluation
  const scheduleCheck = ParentalControlsService.isWithinSchedule(limits);
  const hasTimeLimit = limits.dailyTimeLimitMinutes !== null;
  const timeLimitExceeded = hasTimeLimit && dailyMinutes >= limits.dailyTimeLimitMinutes;
  const remainingMinutes = hasTimeLimit ? Math.max(0, limits.dailyTimeLimitMinutes - dailyMinutes) : null;
  const showFiveMinuteWarning = hasTimeLimit && remainingMinutes > 0 && remainingMinutes <= 5;

  // Handle Parent Unlock PIN submission
  const handleVerifyUnlock = (e) => {
    e.preventDefault();
    setPinError('');

    if (pinAction === 'unfreeze') {
      const res = ParentalControlsService.setAppFreeze({
        learnerId: learner.id,
        parentPin: enteredPin,
        freeze: false
      });
      if (res.success) {
        setLimits(res.limits);
        setIsPinModalOpen(false);
        setEnteredPin('');
      } else {
        setPinError(res.error);
      }
    } else {
      let ext = 30;
      if (pinAction === 'extend_15') ext = 15;
      if (pinAction === 'unlimited') ext = null;

      const res = ParentalControlsService.quickExtend({
        learnerId: learner.id,
        parentPin: enteredPin,
        extensionMinutes: ext
      });
      if (res.success) {
        setLimits(res.limits);
        setIsPinModalOpen(false);
        setEnteredPin('');
      } else {
        setPinError(res.error);
      }
    }
  };

  // 1. Instant App Freeze Overlay
  if (limits.isAppFrozen) {
    return (
      <div className="min-h-[500px] flex items-center justify-center p-6 bg-slate-100 rounded-3xl border border-slate-200">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center space-y-5 border border-slate-200 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
            <PauseCircle className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
              Parent App Pause
            </span>
            <h2 className="text-xl font-black text-slate-900">App Paused by Parent</h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {limits.freezeMessage || 'Your parent has temporarily paused the app. Check in with them or finish your chores!'}
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setPinAction('unfreeze');
                setIsPinModalOpen(true);
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Parent PIN Unlock</span>
            </button>
          </div>
        </div>
        {renderPinModal()}
      </div>
    );
  }

  // 2. Schedule Curfew Overlay
  if (!scheduleCheck.allowed) {
    return (
      <div className="min-h-[500px] flex items-center justify-center p-6 bg-slate-100 rounded-3xl border border-slate-200">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center space-y-5 border border-slate-200 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-3xl mx-auto shadow-inner">
            <Moon className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
              Scheduled Rest Hours
            </span>
            <h2 className="text-xl font-black text-slate-900">Learning Hours Finished</h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {scheduleCheck.reason}
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-[11px] text-slate-500">
            Animals rest when the sun sets! Have a good night and see you tomorrow.
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setPinAction('extend_30');
                setIsPinModalOpen(true);
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Parent PIN Override (+30m)</span>
            </button>
          </div>
        </div>
        {renderPinModal()}
      </div>
    );
  }

  // 3. Daily Screen Time Exceeded Overlay
  if (timeLimitExceeded) {
    return (
      <div className="min-h-[500px] flex items-center justify-center p-6 bg-slate-100 rounded-3xl border border-slate-200">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center space-y-5 border border-slate-200 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mx-auto shadow-inner">
            <Sun className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
              Daily Goal Completed
            </span>
            <h2 className="text-xl font-black text-slate-900">Time for Barn Chores!</h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              You’ve used your {limits.dailyTimeLimitMinutes} minutes of screen learning today. 
              Great job practicing! Time to check on real animals, play outside, or read.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setPinAction('extend_30');
                setIsPinModalOpen(true);
              }}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Parent PIN: Grant More Time</span>
            </button>
          </div>
        </div>
        {renderPinModal()}
      </div>
    );
  }

  function renderPinModal() {
    if (!isPinModalOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
        <form onSubmit={handleVerifyUnlock} className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">Parent PIN Authorization</h3>
            </div>
            <button 
              type="button" 
              onClick={() => { setIsPinModalOpen(false); setEnteredPin(''); }}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Enter your 4-digit Parent PIN to authorize this change:
          </p>

          <input
            type="password"
            maxLength={6}
            value={enteredPin}
            onChange={(e) => setEnteredPin(e.target.value)}
            placeholder="Default: 4444"
            autoFocus
            className="w-full text-center tracking-widest text-lg font-black py-2.5 rounded-xl border border-slate-300 focus:outline-emerald-600"
          />

          {pinError && (
            <div className="text-[11px] font-bold text-rose-600 text-center">
              {pinError}
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => { setIsPinModalOpen(false); setEnteredPin(''); }}
              className="flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Authorize
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      
      {/* Subtle 5-Minute Warning Banner */}
      {showFiveMinuteWarning && (
        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>5 minutes remaining of today’s parent learning time. Wrap up your current trail node!</span>
          </div>
          <button
            onClick={() => {
              setPinAction('extend_15');
              setIsPinModalOpen(true);
            }}
            className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-amber-200 hover:bg-amber-300 rounded-lg text-amber-950 transition shrink-0"
          >
            Extend (+15m)
          </button>
        </div>
      )}

      {/* Break Reminder Modal */}
      {showBreakReminder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto text-2xl">
              <Eye className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">20-Second Eye &amp; Stretch Break</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Parent wellness reminder: Look at something 20 feet away for 20 seconds, roll your shoulders, and stretch!
              </p>
            </div>
            <div className="text-2xl font-black text-teal-700 py-1">
              {breakTimerSeconds > 0 ? `${breakTimerSeconds}s` : 'Done! ✨'}
            </div>
            <button
              onClick={() => setShowBreakReminder(false)}
              disabled={breakTimerSeconds > 0}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition"
            >
              {breakTimerSeconds > 0 ? 'Resting Eyes...' : 'Resume Learning'}
            </button>
          </div>
        </div>
      )}

      {/* Main Content Children */}
      {children}

      {/* Render PIN Modal */}
      {renderPinModal()}

    </div>
  );
}
