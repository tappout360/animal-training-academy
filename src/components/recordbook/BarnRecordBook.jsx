// WarrenWise Youth Animal Training Academy - Digital Barn Record Book & Weigh-In Kit
// Offline-first project tracking with dynamic ADG (Average Daily Gain) math and printable County Fair PDF report

import React, { useState, useEffect } from 'react';
import { 
  ClipboardList, Plus, Trash2, Printer, Scale, 
  TrendingUp, Calendar, DollarSign, Award, CheckCircle2,
  AlertCircle, ShieldCheck, Download
} from 'lucide-react';

const STORAGE_KEY = 'ww_barn_record_book_data_';

const DEFAULT_ANIMAL_PROJECT = {
  id: 'proj_01',
  animalName: 'Barnaby’s Pride',
  tattooOrTag: 'WW-104',
  species: 'rabbits',
  breed: 'Californian',
  birthDate: '2026-06-15',
  purchaseDate: '2026-07-20',
  purchaseWeightLbs: 2.2,
  targetFairDate: '2026-10-15',
  targetMinWeightLbs: 8.5,
  targetMaxWeightLbs: 10.5,
  weighIns: [
    { id: 'w_1', date: '2026-07-20', weightLbs: 2.2, feedCost: 15.00, notes: 'Initial pen placement' },
    { id: 'w_2', date: '2026-08-03', weightLbs: 3.8, feedCost: 12.50, notes: 'Transition to 18% grower pellet' },
    { id: 'w_3', date: '2026-08-17', weightLbs: 5.4, feedCost: 14.00, notes: 'Excellent loin fill, solid manure' },
    { id: 'w_4', date: '2026-08-31', weightLbs: 7.1, feedCost: 13.00, notes: 'Steady growth, good appetite' },
    { id: 'w_5', date: '2026-09-14', weightLbs: 8.6, feedCost: 16.00, notes: 'Approaching market prime' }
  ]
};

export default function BarnRecordBook({ learnerId = 'current_learner', learnerHandle = 'Showman' }) {
  const [project, setProject] = useState(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(`${STORAGE_KEY}${learnerId}`);
        if (saved) return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Storage read notice:', e.message);
    }
    return DEFAULT_ANIMAL_PROJECT;
  });

  const [activeTab, setActiveTab] = useState('weigh_ins'); // 'weigh_ins' | 'printable_sheet'
  const [newEntryDate, setNewEntryDate] = useState(new Date().toISOString().slice(0, 10));
  const [newEntryWeight, setNewEntryWeight] = useState('');
  const [newEntryCost, setNewEntryCost] = useState('');
  const [newEntryNotes, setNewEntryNotes] = useState('');

  // Persist locally
  useEffect(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(`${STORAGE_KEY}${learnerId}`, JSON.stringify(project));
      }
    } catch (e) {
      console.warn('Storage write notice:', e.message);
    }
  }, [project, learnerId]);

  // Math: Calculate ADG between weigh-in records
  const sortedWeighIns = [...project.weighIns].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const entriesWithMath = sortedWeighIns.map((entry, idx) => {
    if (idx === 0) {
      return {
        ...entry,
        gainLbs: 0,
        days: 0,
        adg: 0
      };
    }
    const prev = sortedWeighIns[idx - 1];
    const msDiff = new Date(entry.date) - new Date(prev.date);
    const days = Math.max(1, Math.round(msDiff / (1000 * 60 * 60 * 24)));
    const gainLbs = Math.round((entry.weightLbs - prev.weightLbs) * 100) / 100;
    const adg = Math.round((gainLbs / days) * 100) / 100;
    return {
      ...entry,
      gainLbs,
      days,
      adg
    };
  });

  const latestEntry = entriesWithMath[entriesWithMath.length - 1] || { weightLbs: project.purchaseWeightLbs };
  const firstEntry = entriesWithMath[0] || { weightLbs: project.purchaseWeightLbs };
  const totalGainLbs = Math.max(0, Math.round((latestEntry.weightLbs - firstEntry.weightLbs) * 100) / 100);
  const totalExpenses = entriesWithMath.reduce((sum, e) => sum + (Number(e.feedCost) || 0), 0);
  
  const totalDays = entriesWithMath.length > 1 
    ? Math.max(1, Math.round((new Date(latestEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24)))
    : 1;
  const overallADG = totalDays > 0 ? (totalGainLbs / totalDays).toFixed(2) : '0.00';

  const handleAddWeighIn = (e) => {
    e.preventDefault();
    if (!newEntryWeight || isNaN(Number(newEntryWeight))) return;

    const newRecord = {
      id: `w_${Date.now()}`,
      date: newEntryDate,
      weightLbs: Number(newEntryWeight),
      feedCost: Number(newEntryCost) || 0,
      notes: newEntryNotes.trim() || 'Weekly check'
    };

    setProject(prev => ({
      ...prev,
      weighIns: [...prev.weighIns, newRecord]
    }));

    setNewEntryWeight('');
    setNewEntryCost('');
    setNewEntryNotes('');
  };

  const handleDeleteWeighIn = (id) => {
    setProject(prev => ({
      ...prev,
      weighIns: prev.weighIns.filter(w => w.id !== id)
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header (Hidden on print) */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-sm print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
              <ClipboardList className="w-4 h-4 text-emerald-400" />
              <span>County Fair & 4-H Animal Science</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">
              Digital Barn Record Book & Weigh-In Kit
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Track project animal weights, calculate Average Daily Gain (ADG), log feed expenses, and export clean county fair inspection records.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'weigh_ins' ? 'printable_sheet' : 'weigh_ins')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800/80 hover:bg-emerald-700 text-white border border-emerald-600/60 shadow-2xs transition-all"
            >
              <span>{activeTab === 'weigh_ins' ? 'Preview Official Fair Sheet' : 'Back to Weight Logger'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official PDF</span>
            </button>
          </div>
        </div>

        {/* Live Project Stat Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-emerald-800/80">
          <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/60">
            <div className="text-[10px] uppercase font-bold text-emerald-300">Current Scale Weight</div>
            <div className="text-lg sm:text-xl font-black text-white">{latestEntry.weightLbs} lbs</div>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/60">
            <div className="text-[10px] uppercase font-bold text-emerald-300">Average Daily Gain (ADG)</div>
            <div className="text-lg sm:text-xl font-black text-amber-300">+{overallADG} lbs/day</div>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/60">
            <div className="text-[10px] uppercase font-bold text-emerald-300">Total Weight Gained</div>
            <div className="text-lg sm:text-xl font-black text-white">+{totalGainLbs} lbs</div>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800/60">
            <div className="text-[10px] uppercase font-bold text-emerald-300">Total Feed Investment</div>
            <div className="text-lg sm:text-xl font-black text-emerald-200">${totalExpenses.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* VIEW 1: WEIGH-IN LOGGER & FORM (Hidden when printing official sheet) */}
      {activeTab === 'weigh_ins' && (
        <div className="space-y-6 print:hidden">
          {/* Animal Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Exhibition Project Animal
              </div>
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>{project.animalName}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md font-mono bg-purple-100 text-purple-800 border border-purple-200">
                  Tattoo #{project.tattooOrTag}
                </span>
              </h2>
              <div className="text-xs text-slate-600">
                Breed: <strong>{project.breed}</strong> | Species: <strong>{project.species}</strong> | Target Fair Window: <strong>{project.targetMinWeightLbs} - {project.targetMaxWeightLbs} lbs</strong>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">Fair Weigh-In Target Date:</div>
              <div className="text-sm font-bold text-slate-800 font-mono">{project.targetFairDate}</div>
            </div>
          </div>

          {/* Quick Add Weigh-in Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Plus className="w-4 h-4 text-emerald-600" />
              <span>Log New Scale Weigh-In & Feed Cost</span>
            </div>

            <form onSubmit={handleAddWeighIn} className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Date</label>
                <input
                  type="date"
                  value={newEntryDate}
                  onChange={(e) => setNewEntryDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Scale Weight (lbs)</label>
                <input
                  type="number"
                  step="0.05"
                  placeholder="e.g. 9.2"
                  value={newEntryWeight}
                  onChange={(e) => setNewEntryWeight(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Feed Expense ($)</label>
                <input
                  type="number"
                  step="0.50"
                  placeholder="e.g. 14.50"
                  value={newEntryCost}
                  onChange={(e) => setNewEntryCost(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Observations / Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Added timothy hay"
                  value={newEntryNotes}
                  onChange={(e) => setNewEntryNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>

          {/* Weigh-In History Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Weekly Scale Entries & Rate of Gain ({entriesWithMath.length})
              </h3>
              <div className="text-xs text-slate-400 font-mono">
                ADG = Weight Gained / Days Elapsed
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Scale Weight</th>
                    <th className="p-3">Gain ($\Delta$ lbs)</th>
                    <th className="p-3">Days</th>
                    <th className="p-3">ADG (Rate)</th>
                    <th className="p-3">Feed Cost</th>
                    <th className="p-3">Notes</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {entriesWithMath.map((entry, idx) => (
                    <tr key={entry.id} className="hover:bg-slate-50/60">
                      <td className="p-3 font-mono font-medium text-slate-800">{entry.date}</td>
                      <td className="p-3 font-bold text-slate-900">{entry.weightLbs} lbs</td>
                      <td className="p-3 font-medium text-emerald-700">
                        {idx === 0 ? '—' : `+${entry.gainLbs} lbs`}
                      </td>
                      <td className="p-3 text-slate-600">{idx === 0 ? '—' : `${entry.days} d`}</td>
                      <td className="p-3 font-bold text-amber-700">
                        {idx === 0 ? 'Baseline' : `+${entry.adg} lbs/d`}
                      </td>
                      <td className="p-3 font-mono text-slate-700">${Number(entry.feedCost || 0).toFixed(2)}</td>
                      <td className="p-3 text-slate-600 max-w-xs truncate">{entry.notes}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDeleteWeighIn(entry.id)}
                          className="text-slate-400 hover:text-rose-600 transition-all p-1"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: PRINTABLE COUNTY FAIR INSPECTION RECORD SHEET */}
      {(activeTab === 'printable_sheet' || true) && (
        <div className={`bg-white border border-slate-300 rounded-xl p-8 max-w-4xl mx-auto space-y-6 shadow-sm ${
          activeTab === 'weigh_ins' ? 'hidden print:block' : 'block'
        }`}>
          {/* Formal 4-H / Fair Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                Official Livestock & Pet Exhibition Check-In Record
              </div>
              <h1 className="text-2xl font-black text-slate-900 uppercase">
                County Fair Project Record & Weigh-In Affidavit
              </h1>
              <div className="text-xs text-slate-600">
                WarrenWise Animal Training Academy Verification Standard | Independent Youth Record
              </div>
            </div>

            <div className="w-16 h-16 border-2 border-slate-900 rounded-xl flex flex-col items-center justify-center text-center p-1">
              <div className="text-[9px] uppercase font-bold">Fair</div>
              <div className="text-xs font-black">2026</div>
              <div className="text-[8px] uppercase text-slate-600">Verified</div>
            </div>
          </div>

          {/* Identification Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border-b border-slate-200 pb-4">
            <div>
              <div className="font-bold text-slate-500 uppercase text-[10px]">Exhibitor Handle</div>
              <div className="font-bold text-slate-900">{learnerHandle} (ID: {learnerId})</div>
            </div>
            <div>
              <div className="font-bold text-slate-500 uppercase text-[10px]">Animal Name & ID</div>
              <div className="font-bold text-slate-900">{project.animalName} (#{project.tattooOrTag})</div>
            </div>
            <div>
              <div className="font-bold text-slate-500 uppercase text-[10px]">Species & Breed</div>
              <div className="font-bold text-slate-900">{project.species.toUpperCase()} - {project.breed}</div>
            </div>
            <div>
              <div className="font-bold text-slate-500 uppercase text-[10px]">Birth Date</div>
              <div className="font-bold text-slate-900">{project.birthDate}</div>
            </div>
          </div>

          {/* Performance Summary Banner */}
          <div className="bg-slate-50 border border-slate-300 rounded-lg p-3 grid grid-cols-3 gap-3 text-center text-xs">
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Starting Weight</div>
              <div className="text-base font-black text-slate-900">{firstEntry.weightLbs} lbs</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Final Logged Weight</div>
              <div className="text-base font-black text-slate-900">{latestEntry.weightLbs} lbs</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase">Project Overall ADG</div>
              <div className="text-base font-black text-slate-900">+{overallADG} lbs / day</div>
            </div>
          </div>

          {/* Weight Growth Table */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Weigh-In Log & Health Observations
            </div>
            <table className="w-full text-left text-xs border border-slate-300">
              <thead className="bg-slate-100 border-b border-slate-300 text-slate-700 font-bold">
                <tr>
                  <th className="p-2 border-r border-slate-300">Date</th>
                  <th className="p-2 border-r border-slate-300">Weight (lbs)</th>
                  <th className="p-2 border-r border-slate-300">Gain (lbs)</th>
                  <th className="p-2 border-r border-slate-300">ADG (Rate)</th>
                  <th className="p-2 border-r border-slate-300">Feed Cost ($)</th>
                  <th className="p-2">Husbandry Observations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {entriesWithMath.map((e, i) => (
                  <tr key={e.id}>
                    <td className="p-2 font-mono border-r border-slate-200">{e.date}</td>
                    <td className="p-2 font-bold border-r border-slate-200">{e.weightLbs} lbs</td>
                    <td className="p-2 border-r border-slate-200">{i === 0 ? '—' : `+${e.gainLbs}`}</td>
                    <td className="p-2 border-r border-slate-200">{i === 0 ? 'Baseline' : `+${e.adg}`}</td>
                    <td className="p-2 font-mono border-r border-slate-200">${Number(e.feedCost || 0).toFixed(2)}</td>
                    <td className="p-2">{e.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Official Signatures Affidavit Box */}
          <div className="pt-6 border-t-2 border-slate-800 space-y-4">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
              Exhibitor, Parent & Club Leader Certifications
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed italic">
              "We hereby certify that the animal described herein has been cared for in accordance with youth animal welfare principles, fed wholesome quality rations, and that all weigh-in dates and health observations represent truthful records."
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 text-xs">
              <div className="border-t border-slate-800 pt-1">
                <div className="font-bold text-slate-900">Exhibitor Signature</div>
                <div className="text-[10px] text-slate-500">Date: ____________________</div>
              </div>
              <div className="border-t border-slate-800 pt-1">
                <div className="font-bold text-slate-900">Parent / Guardian Signature</div>
                <div className="text-[10px] text-slate-500">Date: ____________________</div>
              </div>
              <div className="border-t border-slate-800 pt-1">
                <div className="font-bold text-slate-900">4-H Leader / FFA Advisor</div>
                <div className="text-[10px] text-slate-500">Date: ____________________</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
