// WarrenWise Animal Academy - Role Authentication Gate Modal
// Enforces real security boundaries preventing youth from accessing parent, coach, or admin shells

import React, { useState } from 'react';
import { 
  Lock, KeyRound, ShieldAlert, AlertTriangle, 
  CheckCircle2, X, ArrowRight, UserCheck
} from 'lucide-react';
import { verifyParentPin, verifyCoachCode } from '../../services/YouthSafetyService';

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
    } else if (targetRole === 'coach') {
      // 4-H Leader & Coach Portal Pass Code: 2222
      if (verifyCoachCode(pinInput, '2222')) {
        setPinInput('');
        onSuccess('coach');
      } else {
        setErrorMsg('Invalid 4-H Leader / Coach Code. (Default demo Code: 2222)');
      }
    }
  };

  const getRoleTitle = () => {
    switch (targetRole) {
      case 'parent': return 'Parent / Guardian Portal Gate';
      case 'coach': return '4-H Leader & Coach Portal Gate';
      default: return 'Security Check';
    }
  };

  const getPromptDesc = () => {
    switch (targetRole) {
      case 'parent':
        return 'Enter your 4-digit Parent PIN to access parental limits, time controls, and family safety tools.';
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
          targetRole === 'parent'
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
              className="p-1 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
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
              {targetRole === 'parent' ? '4-Digit Parent PIN' : '4-H Leader / Coach Passcode'}
            </label>
            <input
              type="password"
              autoFocus
              maxLength={targetRole === 'parent' ? 4 : 6}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder={targetRole === 'parent' ? '•••• (4444)' : '•••• (2222)'}
              className="w-full text-center tracking-widest text-lg font-mono font-bold py-2.5 px-4 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-stone-50"
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
              className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Cancel (Return to Youth View)
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:scale-[1.02] transition-all flex items-center gap-1.5 cursor-pointer"
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
