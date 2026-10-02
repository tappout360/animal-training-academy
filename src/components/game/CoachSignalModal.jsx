// WarrenWise Animal Academy - Herd Trail Quest
// Coach Signal Path Modal: Allows coaches & parents to place guidance beacons on trail nodes

import React, { useState } from 'react';
import { 
  MapPin, Send, MessageSquare, X, Shield, 
  CheckCircle2, Sparkles, AlertCircle 
} from 'lucide-react';

export default function CoachSignalModal({
  isOpen,
  onClose,
  nodes = [],
  coachSignals = [],
  onAddSignal,
  coachName = 'Coach Sarah'
}) {
  const [selectedNodeId, setSelectedNodeId] = useState(nodes[0]?.id || '');
  const [noteText, setNoteText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    onAddSignal({
      coachName,
      note: noteText.trim(),
      targetNodeId: selectedNodeId
    });

    setSuccessMsg('Coach Guidance Beacon successfully placed on trail!');
    setNoteText('');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden space-y-6 p-6 sm:p-8 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <MapPin className="w-6 h-6 text-purple-200" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded-full inline-block">
                Coach &amp; Parent Tool
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Coach Signal Path Beacons
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Drop an encouraging tip or focus assignment directly onto your learner’s trail map. Beacons will shine above the designated trail node.
        </p>

        {/* Existing Beacons */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Active Guidance Beacons ({coachSignals.length})
          </div>
          <div className="max-h-36 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
            {coachSignals.map((sig) => (
              <div key={sig.id} className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-purple-900">
                  <span>{sig.coachName}</span>
                  <span className="text-[10px] text-purple-600">{sig.date}</span>
                </div>
                <p className="text-purple-800">{sig.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form to Drop New Beacon */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Target Trail Node:
            </label>
            <select
              value={selectedNodeId}
              onChange={(e) => setSelectedNodeId(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-purple-500 outline-none"
            >
              {nodes.map(n => (
                <option key={n.id} value={n.id}>
                  Mile {n.mile}: {n.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Supportive Coach Note / Assignment:
            </label>
            <textarea
              rows={3}
              required
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="e.g. Focus on checking the left ear tattoo and checking hydration carefully before your next trail stretch!"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs shadow-xs transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Plant Beacon</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
