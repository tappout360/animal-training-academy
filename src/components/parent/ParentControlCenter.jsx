// WarrenWise Youth Animal Training Academy - Parent Control Center
// Plain-language, mobile-friendly parental controls where limits are 100% parent-defined.
// Zero hard-locks; every limit supports "No Limit". Includes PIN re-auth & audit logging.

import React, { useState, useEffect } from 'react';
import { 
  Users, Clock, Calendar, Shield, Sparkles, AlertTriangle, 
  CheckCircle2, KeyRound, Lock, Unlock, Moon, Sun, Heart, 
  PauseCircle, PlayCircle, Eye, Bot, LogOut, History, Save, ChevronRight
} from 'lucide-react';
import { 
  ParentalControlsService, 
  TIME_LIMIT_OPTIONS, 
  BREAK_REMINDER_OPTIONS, 
  AI_HINT_OPTIONS, 
  SHOWCASE_OPTIONS 
} from '../../services/ParentalControlsService';
import { ALL_SPECIES_PACKS } from '../../data/speciesPacks';

export default function ParentControlCenter({
  learners = [],
  activeLearnerId,
  onSelectLearner
}) {
  // If no learners passed, provide realistic defaults
  const childList = learners.length > 0 ? learners : [
    { id: 'learner_current', handle: 'CloverChampion42', division: 'junior', name: 'Leo (Age 10)' },
    { id: 'learner_maya', handle: 'BunnyWhisperer', division: 'cloverbud', name: 'Maya (Age 7)' },
    { id: 'learner_sam', handle: 'AgriLeader', division: 'senior', name: 'Sam (Age 16)' }
  ];

  const [selectedChildId, setSelectedChildId] = useState(activeLearnerId || childList[0].id);
  const selectedChild = childList.find(c => c.id === selectedChildId) || childList[0];

  // Active limits state for the selected child
  const [limits, setLimits] = useState(() => 
    ParentalControlsService.getLimitsForLearner(selectedChild.id, selectedChild.division)
  );

  // Active view tab in parent center: 'controls' | 'presets' | 'emergency' | 'audit'
  const [activeTab, setActiveTab] = useState('controls');

  // PIN Re-Auth Modal
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [pendingSavePayload, setPendingSavePayload] = useState(null);

  // Status feedback
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [auditLogs, setAuditLogs] = useState(() => 
    ParentalControlsService.getAuditLogs(selectedChild.id)
  );

  // Reload limits & audit when child switches
  useEffect(() => {
    const loaded = ParentalControlsService.getLimitsForLearner(selectedChild.id, selectedChild.division);
    setLimits(loaded);
    setAuditLogs(ParentalControlsService.getAuditLogs(selectedChild.id));
    setSaveSuccessMsg('');
  }, [selectedChild.id]);

  // Request PIN authorization before saving
  const handleRequestSave = (customLimits = limits, reason = 'Parent updated learning controls') => {
    setPendingSavePayload({ customLimits, reason });
    setIsPinModalOpen(true);
    setPinError('');
  };

  // Commit changes after PIN verification
  const handleCommitSave = (e) => {
    e.preventDefault();
    if (!pendingSavePayload) return;

    const res = ParentalControlsService.saveLimits({
      learnerId: selectedChild.id,
      learnerHandle: selectedChild.handle,
      parentPin: enteredPin,
      newLimits: pendingSavePayload.customLimits,
      reason: pendingSavePayload.reason
    });

    if (res.success) {
      setLimits(res.limits);
      setIsPinModalOpen(false);
      setEnteredPin('');
      setPendingSavePayload(null);
      setSaveSuccessMsg('✓ Parental controls saved and applied in real time!');
      setAuditLogs(ParentalControlsService.getAuditLogs(selectedChild.id));
      setTimeout(() => setSaveSuccessMsg(''), 4000);
    } else {
      setPinError(res.error);
    }
  };

  // Quick Preset Handlers
  const handleApplyPreset = (presetName) => {
    let presetLimits;
    let reason = '';

    if (presetName === 'unrestricted') {
      presetLimits = {
        ...limits,
        dailyTimeLimitMinutes: null, // No limit
        schedule: { type: 'always', startHour: 5, endHour: 23, allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        aiHintLevel: 'full',
        breakReminders: 'off',
        isAppFrozen: false
      };
      reason = 'Applied "Unrestricted (No Limits)" preset';
    } else if (presetName === 'balanced_weekday') {
      presetLimits = {
        ...limits,
        dailyTimeLimitMinutes: 45,
        schedule: { type: 'custom', startHour: 7, endHour: 20, allowedDays: ['mon', 'tue', 'wed', 'thu', 'fri'] },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        aiHintLevel: 'full',
        breakReminders: '20min',
        isAppFrozen: false
      };
      reason = 'Applied "Balanced School Night" preset (45m, 8 PM curfew)';
    } else if (presetName === 'weekend_explorer') {
      presetLimits = {
        ...limits,
        dailyTimeLimitMinutes: 120,
        schedule: { type: 'custom', startHour: 7, endHour: 21, allowedDays: ['sat', 'sun'] },
        allowedSpecies: 'ALL',
        allowedModes: 'ALL',
        aiHintLevel: 'full',
        breakReminders: '45min',
        isAppFrozen: false
      };
      reason = 'Applied "Weekend Trail Explorer" preset (2 hours, 9 PM curfew)';
    }

    if (presetLimits) {
      handleRequestSave(presetLimits, reason);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Family Guardian Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Parent-Defined Learning Boundaries
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            You decide the boundaries for each child. Limits are never hard-locked by the app beyond legal safety minimums. 
            Adjust screen time, bedtime curfews, allowed animal packs, or remove limits anytime.
          </p>
        </div>

        {/* Selected Child Pill & Role Notice */}
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-right shrink-0">
          <div className="text-[10px] uppercase font-bold text-slate-400">Configuring Profile:</div>
          <div className="text-sm font-black text-slate-800">{selectedChild.name || selectedChild.handle}</div>
          <div className="text-[11px] font-semibold text-emerald-700 capitalize mt-0.5">
            {selectedChild.division} Division
          </div>
        </div>
      </div>

      {/* Child Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {childList.map((c) => {
          const isSelected = c.id === selectedChild.id;
          return (
            <button
              key={c.id}
              onClick={() => {
                setSelectedChildId(c.id);
                if (onSelectLearner) onSelectLearner(c.id);
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition shrink-0 ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>{c.name || c.handle}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full capitalize ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {c.division}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs">
        <button
          onClick={() => setActiveTab('controls')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'controls'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Daily Limits &amp; Schedules</span>
        </button>

        <button
          onClick={() => setActiveTab('presets')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'presets'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Presets</span>
        </button>

        <button
          onClick={() => setActiveTab('emergency')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'emergency'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <PauseCircle className="w-3.5 h-3.5" />
          <span>Pause &amp; Force-Logout</span>
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            activeTab === 'audit'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Audit Log ({auditLogs.length})</span>
        </button>
      </div>

      {/* Success Notification Banner */}
      {saveSuccessMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 1: DAILY LIMITS & SCHEDULES                       */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'controls' && (
        <div className="space-y-6">
          
          {/* Card 1: Daily Time Limit */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Daily Screen-Time Limit</h3>
                  <p className="text-xs text-slate-500">Max minutes allowed per day across lessons, drills, and Herd Trail Quest.</p>
                </div>
              </div>
              <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Current: {limits.dailyTimeLimitMinutes === null ? 'No Limit' : `${limits.dailyTimeLimitMinutes} min`}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
              {TIME_LIMIT_OPTIONS.map((opt) => {
                const isSelected = limits.dailyTimeLimitMinutes === opt.value;
                return (
                  <button
                    key={String(opt.value)}
                    type="button"
                    onClick={() => setLimits({ ...limits, dailyTimeLimitMinutes: opt.value })}
                    className={`py-3 px-2 rounded-2xl text-xs font-bold border transition text-center ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Allowed Days & Bedtime Curfew Schedule */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Allowed Schedule &amp; Curfew</h3>
                  <p className="text-xs text-slate-500">Set daytime hours when app can be used, or allow access anytime.</p>
                </div>
              </div>

              {/* Always Allowed Toggle */}
              <button
                type="button"
                onClick={() => setLimits({
                  ...limits,
                  schedule: {
                    ...limits.schedule,
                    type: limits.schedule?.type === 'always' ? 'custom' : 'always'
                  }
                })}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  limits.schedule?.type === 'always'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {limits.schedule?.type === 'always' ? '✓ Always Allowed (No Curfew)' : 'Enable Curfew Schedule'}
              </button>
            </div>

            {limits.schedule?.type !== 'always' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Morning Start Hour:</label>
                    <select
                      value={limits.schedule?.startHour ?? 7}
                      onChange={(e) => setLimits({
                        ...limits,
                        schedule: { ...limits.schedule, startHour: parseInt(e.target.value, 10) }
                      })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    >
                      {[5, 6, 7, 8, 9, 10].map(h => (
                        <option key={h} value={h}>{h}:00 AM</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Evening Bedtime Hour:</label>
                    <select
                      value={limits.schedule?.endHour ?? 20}
                      onChange={(e) => setLimits({
                        ...limits,
                        schedule: { ...limits.schedule, endHour: parseInt(e.target.value, 10) }
                      })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold bg-white"
                    >
                      {[17, 18, 19, 20, 21, 22, 23].map(h => (
                        <option key={h} value={h}>{h > 12 ? h - 12 : h}:00 PM</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2">Allowed Days of the Week:</label>
                  <div className="flex flex-wrap gap-2">
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => {
                      const isIncluded = (limits.schedule?.allowedDays || []).includes(day);
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => {
                            const current = limits.schedule?.allowedDays || [];
                            const next = isIncluded ? current.filter(d => d !== day) : [...current, day];
                            setLimits({ ...limits, schedule: { ...limits.schedule, allowedDays: next } });
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition ${
                            isIncluded ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-300 text-slate-500'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 3: Allowed Species Tracks & Pet Packs */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-rose-500" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Allowed Species &amp; Pet Packs</h3>
                  <p className="text-xs text-slate-500">Allow all 12 project tracks or select specific tracks for this child.</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLimits({
                  ...limits,
                  allowedSpecies: limits.allowedSpecies === 'ALL' ? ['rabbits', 'cavies', 'poultry'] : 'ALL'
                })}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  limits.allowedSpecies === 'ALL'
                    ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {limits.allowedSpecies === 'ALL' ? '✓ All 12 Allowed' : 'Customize Tracks'}
              </button>
            </div>

            {limits.allowedSpecies !== 'ALL' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 p-4 bg-slate-50 border border-slate-200 rounded-2xl animate-fadeIn">
                {ALL_SPECIES_PACKS.map(pack => {
                  const isChecked = Array.isArray(limits.allowedSpecies) && limits.allowedSpecies.includes(pack.id);
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => {
                        const arr = Array.isArray(limits.allowedSpecies) ? limits.allowedSpecies : [];
                        const next = isChecked ? arr.filter(id => id !== pack.id) : [...arr, pack.id];
                        setLimits({ ...limits, allowedSpecies: next });
                      }}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition ${
                        isChecked
                          ? 'bg-rose-50 border-rose-400 text-rose-950'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      <span>{pack.name}</span>
                      <span>{isChecked ? '✓' : '+'}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Card 4: AI Coaching & Break Reminders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* WarrenWise AI Hint Level */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-600" />
                <h4 className="text-sm font-bold text-slate-900">WarrenWise AI Hint Level</h4>
              </div>
              <p className="text-xs text-slate-500">Control AI assistance during quiz drills and trail encounters.</p>

              <div className="space-y-2">
                {AI_HINT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLimits({ ...limits, aiHintLevel: opt.value })}
                    className={`w-full p-2.5 text-left rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                      limits.aiHintLevel === opt.value
                        ? 'bg-purple-50 border-purple-500 text-purple-950'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {limits.aiHintLevel === opt.value && <CheckCircle2 className="w-4 h-4 text-purple-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Eye & Stretch Break Reminders */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-teal-600" />
                <h4 className="text-sm font-bold text-slate-900">Eye &amp; Stretch Break Reminders</h4>
              </div>
              <p className="text-xs text-slate-500">Encourages 20-second posture and 20-20-20 eye rest intervals.</p>

              <div className="space-y-2">
                {BREAK_REMINDER_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLimits({ ...limits, breakReminders: opt.value })}
                    className={`w-full p-2.5 text-left rounded-xl border text-xs font-bold transition flex items-center justify-between ${
                      limits.breakReminders === opt.value
                        ? 'bg-teal-50 border-teal-500 text-teal-950'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {limits.breakReminders === opt.value && <CheckCircle2 className="w-4 h-4 text-teal-600" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Save Floating Bar */}
          <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-slate-300 shadow-lg flex items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              Changes apply instantly to <span className="font-black text-slate-900">{selectedChild.name}</span>. Requires Parent PIN.
            </div>
            <button
              onClick={() => handleRequestSave(limits, 'Parent saved custom controls')}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-xs transition shadow-sm flex items-center gap-2 shrink-0"
            >
              <Save className="w-4 h-4" />
              <span>Save &amp; Apply Limits</span>
            </button>
          </div>

        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 2: QUICK ONE-TAP PRESETS                         */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'presets' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">One-Tap Quick Presets</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Quickly switch between common household schedules. You can always fine-tune individual settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Preset 1: Unrestricted Learning */}
            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mb-2">
                  Maximum Flexibility
                </span>
                <h4 className="text-base font-black text-emerald-950">Unrestricted Learning (No Limits)</h4>
                <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                  Removes daily time limits and curfew schedules. All 12 species packs and game modes are open with full AI coaching.
                </p>
              </div>
              <button
                onClick={() => handleApplyPreset('unrestricted')}
                className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-2xs"
              >
                Apply "No Limits" Preset
              </button>
            </div>

            {/* Preset 2: Balanced School Night */}
            <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-2">
                  Homework &amp; Routine
                </span>
                <h4 className="text-base font-black text-amber-950">Balanced School Night</h4>
                <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
                  45 minutes daily time limit, 8:00 PM evening bedtime curfew, weekdays only, and 20-minute eye break reminders.
                </p>
              </div>
              <button
                onClick={() => handleApplyPreset('balanced_weekday')}
                className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition shadow-2xs"
              >
                Apply School Night Preset
              </button>
            </div>

            {/* Preset 3: Weekend Trail Explorer */}
            <div className="p-6 rounded-2xl border border-indigo-200 bg-indigo-50/50 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full inline-block mb-2">
                  Weekend Adventure
                </span>
                <h4 className="text-base font-black text-indigo-950">Weekend Trail Explorer</h4>
                <p className="text-xs text-indigo-800/80 mt-1 leading-relaxed">
                  120 minutes daily time limit, 9:00 PM curfew, open access to all trail packs and games on Saturdays and Sundays.
                </p>
              </div>
              <button
                onClick={() => handleApplyPreset('weekend_explorer')}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-2xs"
              >
                Apply Weekend Preset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 3: EMERGENCY PAUSE & TOOLS                       */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'emergency' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Instant Pause &amp; Emergency Tools</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tools to immediately freeze the app for dinner or chores, or terminate the active session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Tool 1: Instant App Freeze */}
            <div className="p-6 rounded-2xl border border-amber-300 bg-amber-50/40 space-y-4">
              <div className="flex items-center gap-2.5">
                <PauseCircle className="w-5 h-5 text-amber-700" />
                <h4 className="text-sm font-bold text-amber-950">Instant App Freeze</h4>
              </div>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                Immediately covers the child's screen with a friendly pause message. Can be unfrozen anytime with your PIN.
              </p>

              <div>
                <label className="text-[11px] font-bold text-amber-900 block mb-1">Custom Message to Child:</label>
                <input
                  type="text"
                  value={limits.freezeMessage || ''}
                  onChange={(e) => setLimits({ ...limits, freezeMessage: e.target.value })}
                  placeholder="e.g. Dinner is ready! Come to the kitchen."
                  className="w-full p-2.5 rounded-xl border border-amber-200 text-xs bg-white"
                />
              </div>

              <button
                onClick={() => {
                  const nextFreeze = !limits.isAppFrozen;
                  handleRequestSave(
                    { ...limits, isAppFrozen: nextFreeze },
                    nextFreeze ? 'Parent froze the app' : 'Parent unfroze the app'
                  );
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  limits.isAppFrozen
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                    : 'bg-amber-700 hover:bg-amber-800 text-white'
                }`}
              >
                {limits.isAppFrozen ? <PlayCircle className="w-4 h-4" /> : <PauseCircle className="w-4 h-4" />}
                <span>{limits.isAppFrozen ? 'Unfreeze App Now' : 'Freeze App Right Now'}</span>
              </button>
            </div>

            {/* Tool 2: Remote Force-Logout */}
            <div className="p-6 rounded-2xl border border-rose-300 bg-rose-50/40 space-y-4">
              <div className="flex items-center gap-2.5">
                <LogOut className="w-5 h-5 text-rose-700" />
                <h4 className="text-sm font-bold text-rose-950">Remote Force-Logout</h4>
              </div>
              <p className="text-xs text-rose-900/80 leading-relaxed">
                Terminates the active session token across all tablets or phones logged into this child’s profile.
              </p>

              <button
                onClick={() => {
                  handleRequestSave(
                    { ...limits, forceLogoutNonce: (limits.forceLogoutNonce || 1) + 1 },
                    'Parent initiated remote force-logout'
                  );
                }}
                className="w-full py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Force Logout Child's Device</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* TAB 4: AUDIT TRAIL LOG                               */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'audit' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Parental Control Audit History</h3>
              <p className="text-xs text-slate-500">Immutable record of all control changes made for {selectedChild.name}.</p>
            </div>
            <span className="text-xs font-bold text-slate-400">{auditLogs.length} Records</span>
          </div>

          <div className="divide-y divide-slate-100">
            {auditLogs.map((entry) => (
              <div key={entry.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div className="font-bold text-slate-800 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] uppercase font-mono">
                      {entry.action}
                    </span>
                    <span>{entry.description}</span>
                  </div>
                  {entry.summary && (
                    <div className="text-[11px] text-slate-400 mt-0.5 font-mono">{entry.summary}</div>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 whitespace-nowrap">
                  {new Date(entry.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PIN Verification Modal */}
      {isPinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <form onSubmit={handleCommitSave} className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">Confirm Parent PIN</h3>
              </div>
              <button 
                type="button" 
                onClick={() => { setIsPinModalOpen(false); setEnteredPin(''); }}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your 4-digit Parent PIN to authorize updating learning boundaries for {selectedChild.name}:
            </p>

            <input
              type="password"
              maxLength={6}
              value={enteredPin}
              onChange={(e) => setEnteredPin(e.target.value)}
              placeholder="Default: 4444"
              autoFocus
              className="w-full text-center tracking-widest text-xl font-black py-3 rounded-xl border border-slate-300 focus:outline-amber-600"
            />

            {pinError && (
              <div className="text-xs font-bold text-rose-600 text-center">
                {pinError}
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => { setIsPinModalOpen(false); setEnteredPin(''); }}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition shadow-sm"
              >
                Confirm &amp; Apply
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
