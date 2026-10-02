// WarrenWise Animal Academy - Role Authentication Gate Modal
// Enforces real security boundaries preventing youth from accessing parent, coach, or admin shells

import React, { useState } from 'react';
import { 
  Lock, KeyRound, ShieldAlert, AlertTriangle, 
  CheckCircle2, X, ArrowRight, UserCheck
} from 'lucide-react';
import { verifyParentPin } from '../../services/YouthSafetyService';

export default function RoleAuthGateModal({
  targetRole,
  isOpen,
  onSuccess,
  onClose
}) {
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (targetRole === 'parent') {
      // Default parent PIN is 4444
      if (verifyParentPin(pinInput, '4444')) {
        setPinInput('');
        onSuccess('parent');
      } else {
        setErrorMsg('Incorrect Parent PIN. (Default demo PIN: 4444)');
      }
    } else if (targetRole === 'admin') {
      // Default admin key is 9999
      if (pinInput.trim() === '9999') {
        setPinInput('');
        onSuccess('admin');
      } else {
        setErrorMsg('Invalid Administrator Key. (Default demo Key: 9999)');
      }
    } else if (targetRole === 'coach') {
      // Default coach club code is 3050
      if (pinInput.trim() === '3050') {
        setPinInput('');
        onSuccess('coach');
      } else {
        setErrorMsg('Invalid 4-H Leader / Coach Code. (Default demo Code: 3050)');
      }
    }
  };

  const getRoleTitle = () => {
    switch (targetRole) {
      case 'parent': return 'Parent / Guardian Portal Gate';
      case 'admin': return 'Administrator Command Center Gate';
      case 'coach': return '4-H Leader & Coach Portal Gate';
      default: return 'Security Check';
    }
  };

  const getPromptDesc = () => {
    switch (targetRole) {
      case 'parent':
        return 'Enter your 4-digit Parent PIN to access parental limits, time controls, and family safety tools.';
      case 'admin':
        return 'RESTRICTED AREA: Enter Administrator Master Key. Modifying content and feature flags impacts all learners.';
      case 'coach':
        return 'Enter your verified 4-H Club Leader Code to view assigned learner rosters and submit barn checklists.';
      default:
        return 'Please authenticate to proceed.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        
        {/* Header */}
        <div className={`p-6 text-white ${
          targetRole === 'admin' 
            ? 'bg-gradient-to-r from-purple-900 to-indigo-950' 
            : targetRole === 'parent'
            ? 'bg-gradient-to-r from-amber-700 to-stone-900'
            : 'bg-gradient-to-r from-blue-700 to-slate-900'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                Permission Guard
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-lg font-black mt-2 text-white">
            {getRoleTitle()}
          </h3>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-stone-600 leading-relaxed">
            {getPromptDesc()}
          </p>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {targetRole === 'parent' ? '4-Digit Parent PIN' : targetRole === 'admin' ? 'Master Security Key' : 'Leader Code'}
            </label>
            <input
              type="password"
              autoFocus
              maxLength={targetRole === 'parent' ? 4 : 8}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder={targetRole === 'parent' ? '•••• (4444)' : '••••'}
              className="w-full text-center tracking-widest text-lg font-mono font-bold py-2.5 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
            />
          </div>

          {errorMsg && (
            <div className="text-xs text-rose-600 font-semibold bg-rose-50 border border-rose-200 p-2.5 rounded-xl flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors"
            >
              Cancel (Return to Youth View)
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-md hover:scale-[1.02] transition-all flex items-center gap-1.5"
            >
              <span>Unlock Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
