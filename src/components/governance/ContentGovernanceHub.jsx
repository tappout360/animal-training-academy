// WarrenWise Youth Animal Training Academy - Content Governance & Animal Safety Hub

import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, Clock, CheckCircle2, 
  RotateCcw, History, FileText, Check, X, ShieldAlert,
  CheckSquare, Archive
} from 'lucide-react';
import { CONTENT_STATUSES, KNOWLEDGE_TIERS } from '../../config/constants';
import { 
  isContentStale, transitionContentStatus, rollbackContentVersion 
} from '../../services/GovernanceService';
import ContentMatrixAuditModal from './ContentMatrixAuditModal';

export default function ContentGovernanceHub({
  governanceItems = [],
  onUpdateItem
}) {
  const [items, setItems] = useState(governanceItems);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedItem, setSelectedItem] = useState(items[0] || null);
  const [safetySignoffChecked, setSafetySignoffChecked] = useState(false);
  const [reviewerName, setReviewerName] = useState('Dr. Jason Miller, DVM');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);

  const filteredItems = items.filter(it => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'stale') return isContentStale(it.lastVerifiedDate);
    return it.status === filterStatus;
  });

  const handleApprove = (item) => {
    setErrorMessage('');
    const result = transitionContentStatus({
      item,
      newStatus: CONTENT_STATUSES.APPROVED,
      reviewerName,
      isSafetyApproved: safetySignoffChecked
    });

    if (!result.success) {
      setErrorMessage(result.error);
      return;
    }

    const updated = items.map(i => i.id === item.id ? result.item : i);
    setItems(updated);
    setSelectedItem(result.item);
    if (onUpdateItem) onUpdateItem(result.item);
  };

  const handleRollback = (item, version) => {
    const rolled = rollbackContentVersion(item, version);
    const updated = items.map(i => i.id === item.id ? rolled : i);
    setItems(updated);
    setSelectedItem(rolled);
    if (onUpdateItem) onUpdateItem(rolled);
  };

  const handleArchive = (item) => {
    setErrorMessage('');
    const result = transitionContentStatus({
      item,
      newStatus: CONTENT_STATUSES.ARCHIVED,
      reviewerName
    });

    if (!result.success) {
      setErrorMessage(result.error);
      return;
    }

    const updated = items.map(i => i.id === item.id ? result.item : i);
    setItems(updated);
    setSelectedItem(result.item);
    if (onUpdateItem) onUpdateItem(result.item);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 to-indigo-950 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>Educational Accuracy & Husbandry Governance</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          Knowledge Update Pipeline & Animal Safety Gates
        </h1>
        <p className="text-purple-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Governed knowledge review workflow: Draft ➔ In Review ➔ Approved ➔ Archived. Welfare and health topics require mandatory veterinary safety signoff before release.
        </p>

        {/* Filter Bar & Matrix Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-purple-800/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {['all', 'in_review', 'approved', 'stale', 'draft'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                  filterStatus === st
                    ? 'bg-white text-purple-950 shadow-sm'
                    : 'bg-purple-800/50 text-purple-200 hover:bg-purple-800'
                }`}
              >
                {st === 'in_review' ? 'In Review' : st === 'stale' ? 'Stale (>12 mo)' : st}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMatrixModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 shadow-sm transition-all shrink-0"
          >
            <CheckSquare className="w-4 h-4 text-emerald-800" />
            <span>Audit 11-Species Content Matrix</span>
          </button>
        </div>
      </div>

      {/* Main Grid: List + Detail Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Queue items list */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Review Queue ({filteredItems.length})
          </div>

          <div className="space-y-2">
            {filteredItems.map((item) => {
              const stale = isContentStale(item.lastVerifiedDate);
              const isSelected = selectedItem?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedItem(item);
                    setErrorMessage('');
                    setSafetySignoffChecked(item.safetyReviewed);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-purple-600 bg-purple-50/70 shadow-sm ring-2 ring-purple-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      {item.speciesId} • v{item.version}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full uppercase ${
                      item.status === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                      item.status === 'in_review' ? 'bg-amber-100 text-amber-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                    {item.title}
                  </div>

                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 text-[11px]">
                    {item.safetyReviewed ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Safety Signed
                      </span>
                    ) : (
                      <span className="text-rose-600 font-semibold flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" /> Safety Review Pending
                      </span>
                    )}

                    {stale && (
                      <span className="text-amber-700 font-bold ml-auto flex items-center gap-0.5">
                        <Clock className="w-3 h-3" /> Stale
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Inspection and Action Panel */}
        <div className="lg:col-span-2">
          {selectedItem ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    {selectedItem.tier}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                    {selectedItem.title}
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-slate-700">v{selectedItem.version}</div>
                  <div className="text-[11px] text-slate-500">Last Verified: {selectedItem.lastVerifiedDate}</div>
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 text-xs sm:text-sm font-semibold flex items-start gap-2.5 animate-fadeIn">
                  <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Action Blocked:</strong> {errorMessage}
                  </div>
                </div>
              )}

              {/* Metadata details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Target Species Pack</span>
                  <span className="font-bold text-slate-800 capitalize">{selectedItem.speciesId}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Current Lifecycle State</span>
                  <span className="font-bold text-slate-800 uppercase">{selectedItem.status}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Safety Reviewer</span>
                  <span className="font-bold text-slate-800">{selectedItem.safetyReviewerName || 'None Assigned'}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Stale Audit (Over 12 Months)</span>
                  <span className={`font-bold ${isContentStale(selectedItem.lastVerifiedDate) ? 'text-amber-700' : 'text-emerald-700'}`}>
                    {isContentStale(selectedItem.lastVerifiedDate) ? 'FLAGGED AS STALE' : 'Fresh & Current'}
                  </span>
                </div>
              </div>

              {/* Reviewer notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Reviewer Audit Notes:
                </label>
                <p className="text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200">
                  {selectedItem.notes}
                </p>
              </div>

              {/* Mandatory Animal Safety Review Gate */}
              <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-900">
                  <ShieldCheck className="w-4 h-4 text-purple-700" />
                  <span>Mandatory Animal Safety & Welfare Gate</span>
                </div>
                <p className="text-xs text-purple-950">
                  Per the Academy Accuracy Policy, modules addressing health observation, biosecurity, handling, or nutrition require explicit animal safety verification confirming zero unauthorized medication dosages or invasive procedures.
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="safetyGateCheck"
                    checked={safetySignoffChecked}
                    onChange={(e) => setSafetySignoffChecked(e.target.checked)}
                    className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500"
                  />
                  <label htmlFor="safetyGateCheck" className="text-xs font-bold text-purple-950 cursor-pointer">
                    I certify this content complies with veterinary observation rules and contains zero drug dosage prescriptions.
                  </label>
                </div>
              </div>

              {/* Actions: Approve / Archive / Rollback */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRollback(selectedItem, '2.3.0')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-2xs transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rollback to v2.3.0</span>
                  </button>
                  {selectedItem.status !== CONTENT_STATUSES.ARCHIVED && (
                    <button
                      onClick={() => handleArchive(selectedItem)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 shadow-2xs transition-all"
                    >
                      <Archive className="w-3.5 h-3.5" />
                      <span>Archive Version</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApprove(selectedItem)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-xs transition-all"
                  >
                    <Check className="w-4 h-4" />
                    <span>Publish & Approve Content</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
              Select an item from the review queue to inspect
            </div>
          )}
        </div>
      </div>

      {/* Content Matrix Audit Modal */}
      <ContentMatrixAuditModal 
        isOpen={isMatrixModalOpen} 
        onClose={() => setIsMatrixModalOpen(false)} 
      />
    </div>
  );
}
