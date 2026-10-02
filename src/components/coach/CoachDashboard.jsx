// WarrenWise Youth Animal Training Academy - Coach & Parent Hub

import React, { useState } from 'react';
import { 
  Users, CheckSquare, Award, Plus, FileText, 
  Sparkles, CheckCircle2, Clock, ShieldCheck, Printer, ArrowRight 
} from 'lucide-react';
import { generateRosterHeatmap } from '../../services/MasteryEngine';
import { generateCoachProgressSummary } from '../../services/WarrenWiseTrainerAI';
import PracticalBarnChecklist from './PracticalBarnChecklist';

export default function CoachDashboard({
  learners = [],
  progressList = [],
  assignments = [],
  observations = [],
  onAddAssignment,
  onSaveObservation
}) {
  const [activeSubTab, setActiveSubTab] = useState('roster'); // 'roster' | 'assignments' | 'checklist' | 'export'
  const [selectedLearnerId, setSelectedLearnerId] = useState(learners[0]?.id || null);

  // New assignment modal / form state
  const [showNewAssignment, setShowNewAssignment] = useState(false);
  const [assignTitle, setAssignTitle] = useState('');
  const [assignSpecies, setAssignSpecies] = useState('rabbits');
  const [assignModule, setAssignModule] = useState('showmanship');
  const [assignDueDate, setAssignDueDate] = useState('2026-10-15');

  // Build progress map
  const progressMap = {};
  progressList.forEach(p => {
    if (!progressMap[p.learnerId]) progressMap[p.learnerId] = [];
    progressMap[p.learnerId].push(p);
  });

  const heatmap = generateRosterHeatmap(learners, progressMap);

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!assignTitle.trim()) return;

    onAddAssignment({
      id: `asg_${Date.now()}`,
      coachId: 'coach_linda',
      learnerId: selectedLearnerId || learners[0]?.id,
      speciesId: assignSpecies,
      moduleId: assignModule,
      title: assignTitle,
      dueDate: assignDueDate,
      completed: false
    });

    setAssignTitle('');
    setShowNewAssignment(false);
  };

  const currentLearner = learners.find(l => l.id === selectedLearnerId) || learners[0];
  const learnerProgress = progressMap[currentLearner?.id] || [];
  const aiSummary = generateCoachProgressSummary({
    learnerHandle: currentLearner?.handle || 'Learner',
    ageDivision: currentLearner?.ageDivision || 'junior',
    completedModules: learnerProgress.filter(p => p.status === 'completed'),
    weakTopics: ['Nutrition & FCR Math'],
    averageScore: 92
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">
          <Users className="w-4 h-4 text-blue-400" />
          <span>4-H Club Leader & Parent Guidance Center</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          Club Roster, Assignments & Mastery Heatmap
        </h1>
        <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Supervise youth project milestones, monitor knowledge gaps across species packs, assign homework drills, and score in-person barn showmanship practices.
        </p>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-blue-800/80 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveSubTab('roster')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'roster'
                ? 'bg-white text-blue-950 shadow-sm'
                : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
            }`}
          >
            Roster & Strength Matrix
          </button>
          <button
            onClick={() => setActiveSubTab('assignments')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'assignments'
                ? 'bg-white text-blue-950 shadow-sm'
                : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
            }`}
          >
            Module Assignments ({assignments.length})
          </button>
          <button
            onClick={() => setActiveSubTab('checklist')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'checklist'
                ? 'bg-white text-blue-950 shadow-sm'
                : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
            }`}
          >
            Barn Observation Rubric
          </button>
          <button
            onClick={() => setActiveSubTab('export')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeSubTab === 'export'
                ? 'bg-white text-blue-950 shadow-sm'
                : 'bg-blue-800/60 text-blue-200 hover:bg-blue-800'
            }`}
          >
            Exportable Progress Record Book
          </button>
        </div>
      </div>

      {/* Subtab 1: Roster & Heatmap */}
      {activeSubTab === 'roster' && (
        <div className="space-y-6">
          {/* AI Copilot Digest for Coach */}
          <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                  WarrenWise Coach Assist Copilot
                </div>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5">
                  Automated Progress Briefing for {currentLearner?.handle}
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {aiSummary.coachNote}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveSubTab('checklist')}
              className="bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap"
            >
              Start Barn Routine Check
            </button>
          </div>

          {/* Roster Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  Enrolled Youth Learners ({learners.length})
                </h3>
                <p className="text-xs text-slate-500">
                  COPPA-compliant roster with parent linkage and cross-species mastery stats
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5 pl-5">Learner Handle</th>
                    <th className="p-3.5">Division</th>
                    <th className="p-3.5">Parent Consent</th>
                    <th className="p-3.5">Rabbit Pack</th>
                    <th className="p-3.5">Cavy Pack</th>
                    <th className="p-3.5 pr-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {heatmap.map((row) => (
                    <tr
                      key={row.learnerId}
                      className={`hover:bg-slate-50/80 transition-all ${
                        selectedLearnerId === row.learnerId ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <td className="p-3.5 pl-5 font-bold text-slate-900 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                          {row.handle.charAt(0)}
                        </div>
                        <div>
                          <div>{row.handle}</div>
                          <div className="text-[10px] text-slate-400 font-normal">Evergreen 4-H Club</div>
                        </div>
                      </td>
                      <td className="p-3.5 font-semibold capitalize text-slate-800">
                        {row.division}
                      </td>
                      <td className="p-3.5">
                        {row.parentConsent ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <ShieldCheck className="w-3 h-3" />
                            Verified
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            Pending PIN
                          </span>
                        )}
                      </td>
                      <td className="p-3.5">
                        <div className="font-bold text-slate-800">
                          {row.rabbits.completed} / 9 Modules ({row.rabbits.averageScore}%)
                        </div>
                        {row.rabbits.weakTopics.length > 0 && (
                          <div className="text-[10px] text-rose-600 font-medium">
                            Focus: {row.rabbits.weakTopics[0]}
                          </div>
                        )}
                      </td>
                      <td className="p-3.5">
                        <div className="font-bold text-slate-800">
                          {row.cavies.completed} / 9 Modules ({row.cavies.averageScore}%)
                        </div>
                      </td>
                      <td className="p-3.5 pr-5 text-right">
                        <button
                          onClick={() => setSelectedLearnerId(row.learnerId)}
                          className="text-xs font-bold text-blue-700 hover:text-blue-900 underline"
                        >
                          Select Learner
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

      {/* Subtab 2: Assignments */}
      {activeSubTab === 'assignments' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">
                Club Training Assignments & Due Dates
              </h3>
              <p className="text-xs text-slate-500">
                Assign specific modules, skillathon stations, or showmanship drills to youth
              </p>
            </div>
            <button
              onClick={() => setShowNewAssignment(!showNewAssignment)}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>New Assignment</span>
            </button>
          </div>

          {/* New Assignment Form */}
          {showNewAssignment && (
            <form onSubmit={handleCreateAssignment} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Assignment Title</label>
                  <input
                    type="text"
                    required
                    value={assignTitle}
                    onChange={(e) => setAssignTitle(e.target.value)}
                    placeholder="e.g. Master Biosecurity 30-Day Quarantine Rules"
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Due Date</label>
                  <input
                    type="date"
                    required
                    value={assignDueDate}
                    onChange={(e) => setAssignDueDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs font-medium"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowNewAssignment(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-2xs"
                >
                  Publish Assignment
                </button>
              </div>
            </form>
          )}

          {/* Assignment List */}
          <div className="space-y-3">
            {assignments.map((asg) => (
              <div
                key={asg.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{asg.title}</span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.2 rounded uppercase">
                      {asg.speciesId}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Due: {asg.dueDate}
                    </span>
                    <span>Assigned to: <strong>{currentLearner?.handle}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {asg.completed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: Barn Observation Rubric */}
      {activeSubTab === 'checklist' && (
        <PracticalBarnChecklist
          learners={learners}
          selectedLearnerId={selectedLearnerId}
          onSaveObservation={onSaveObservation}
        />
      )}

      {/* Subtab 4: Exportable Record Book Summary */}
      {activeSubTab === 'export' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-black text-lg text-slate-900">
                Official 4-H Record Book Progress Summary
              </h3>
              <p className="text-xs text-slate-500">
                Print or export to PDF for inclusion in county project record books
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Record Book Page</span>
            </button>
          </div>

          {/* Printable Report Box */}
          <div className="border-2 border-slate-300 rounded-xl p-6 sm:p-8 bg-slate-50/50 space-y-5 print:border-none print:p-0">
            <div className="border-b-2 border-slate-400 pb-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-emerald-800">
                  WarrenWise Youth Animal Training Academy
                </div>
                <h2 className="text-xl font-black text-slate-900">
                  Project Learning & Competency Portfolio
                </h2>
              </div>
              <div className="text-right text-xs text-slate-600">
                <div>Date Generated: <strong>{new Date().toLocaleDateString()}</strong></div>
                <div>Club: <strong>Evergreen 4-H Club</strong></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3.5 rounded-lg border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Learner Name</span>
                <span className="font-bold text-slate-900">{currentLearner?.realName || currentLearner?.handle}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Age Division</span>
                <span className="font-bold text-slate-900 capitalize">{currentLearner?.ageDivision}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Rabbit Accuracy</span>
                <span className="font-bold text-emerald-700">93% Average</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase text-[10px] font-bold block">Lead Coach</span>
                <span className="font-bold text-slate-900">Leader Linda</span>
              </div>
            </div>

            {/* Observations History */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Practical Barn In-Person Observations:
              </h4>
              {observations.map((obs) => (
                <div key={obs.id} className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{obs.topic}</span>
                    <span className="text-purple-700">{obs.score}% Performance</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">Observed on: {obs.date}</div>
                  <p className="text-slate-700 italic pt-1 border-t border-slate-100">
                    "{obs.coachFeedback}"
                  </p>
                </div>
              ))}
            </div>

            {/* Legal Notice */}
            <div className="pt-4 border-t border-slate-300 text-[10px] text-slate-500">
              <strong>Notice:</strong> This progress summary reflects educational mastery completed on the WarrenWise Academy platform. It is designed to assist 4-H club leaders, parents, and youth in documenting animal husbandry learning. Not an official state/federal extension certificate.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
