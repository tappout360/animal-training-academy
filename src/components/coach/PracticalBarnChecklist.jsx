// WarrenWise Youth Animal Training Academy - Practical Barn Observation Checklist
// Live scoring rubric tool for 4-H club leaders, coaches, and parents during barn sessions

import React, { useState } from 'react';
import { Award, CheckCircle2, Save, Sparkles, User, Calendar, ClipboardCheck } from 'lucide-react';

export const SHOWMANSHIP_OBSERVATION_CRITERIA = [
  { id: 'carryingFootballTuck', title: 'Carrying & Transfer (Football Hold)', maxScore: 5, desc: 'Head tucked under arm, hindquarters firmly supported, quiet calm walking.' },
  { id: 'tablePose', title: 'Posing According to Breed Standard', maxScore: 5, desc: 'Proper placement of front and rear feet, alert head carriage, minimal fidgeting.' },
  { id: 'teethCheck', title: 'Incisor Teeth Occlusion Examination', maxScore: 5, desc: 'Gently parts lips without pinching whiskers; verifies upper teeth overlap lower.' },
  { id: 'earTattooCheck', title: 'Ear Inspection & Tattoo Reading', maxScore: 5, desc: 'Inspects both ear canals for canker; reads left ear tattoo audibly to leader.' },
  { id: 'feetHocksCheck', title: 'Toenails & Hock Pads Inspection', maxScore: 5, desc: 'Counts 5 front toes (including dewclaw) and 4 rear toes; examines heel pads for sore hocks.' },
  { id: 'oralResponse', title: 'Judge Oral Question Response & Courtesies', maxScore: 5, desc: 'Poised demeanor, eye contact, begins with "Judge...", smiles and thanks the leader.' }
];

export default function PracticalBarnChecklist({
  learners = [],
  selectedLearnerId = null,
  onSaveObservation
}) {
  const [learnerId, setLearnerId] = useState(selectedLearnerId || (learners[0]?.id || ''));
  const [topic, setTopic] = useState('Barn Showmanship Table Routine Practice');
  const [scores, setScores] = useState({
    carryingFootballTuck: 5,
    tablePose: 4,
    teethCheck: 5,
    earTattooCheck: 5,
    feetHocksCheck: 4,
    oralResponse: 5
  });
  const [coachFeedback, setCoachFeedback] = useState('Great composure during the table pose! Keep practicing your toenail count so you don’t rush past the front dewclaw.');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPossible = SHOWMANSHIP_OBSERVATION_CRITERIA.length * 5;
  const scorePercent = Math.round((totalScore / maxPossible) * 100);

  const handleScoreChange = (critId, value) => {
    setScores(prev => ({ ...prev, [critId]: Number(value) }));
    setSavedSuccess(false);
  };

  const handleSave = () => {
    onSaveObservation({
      id: `obs_${Date.now()}`,
      coachId: 'coach_linda',
      learnerId,
      speciesId: 'rabbits',
      topic,
      date: new Date().toISOString().split('T')[0],
      score: scorePercent,
      criteriaScores: scores,
      coachFeedback
    });
    setSavedSuccess(true);
  };

  const currentLearner = learners.find(l => l.id === learnerId);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
            <ClipboardCheck className="w-4 h-4" />
            <span>Practical In-Person Observation Rubric</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
            Live Barn Handling & Showmanship Evaluation
          </h2>
        </div>

        {/* Learner Picker */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">Learner:</label>
          <select
            value={learnerId}
            onChange={(e) => setLearnerId(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800"
          >
            {learners.map(l => (
              <option key={l.id} value={l.id}>{l.handle} ({l.realName || l.ageDivision})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Observation Rubric Table */}
      <div className="space-y-4">
        {SHOWMANSHIP_OBSERVATION_CRITERIA.map((crit) => (
          <div key={crit.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5 max-w-xl">
              <div className="font-bold text-xs sm:text-sm text-slate-900">
                {crit.title}
              </div>
              <p className="text-xs text-slate-500">
                {crit.desc}
              </p>
            </div>

            {/* Score Selector (1 to 5) */}
            <div className="flex items-center gap-1.5 self-end sm:self-center">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleScoreChange(crit.id, val)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all border ${
                    scores[crit.id] === val
                      ? 'bg-purple-600 text-white border-purple-700 shadow-xs ring-2 ring-purple-400/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Score Summary Box */}
      <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-purple-900 uppercase">
            Total Rubric Performance Score:
          </span>
          <div className="text-xs text-purple-800 mt-0.5">
            {totalScore} out of {maxPossible} maximum points
          </div>
        </div>
        <div className="text-2xl font-black text-purple-900">
          {scorePercent}%
        </div>
      </div>

      {/* Coach Feedback Note */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Coach Observations & Encouragement Notes:
        </label>
        <textarea
          rows={3}
          value={coachFeedback}
          onChange={(e) => {
            setCoachFeedback(e.target.value);
            setSavedSuccess(false);
          }}
          placeholder="Enter specific praise and areas for home barn practice..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        {savedSuccess ? (
          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Observation Checklist Saved to Learner Roster!</span>
          </span>
        ) : (
          <span className="text-xs text-slate-400">Not saved yet</span>
        )}

        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Barn Evaluation</span>
        </button>
      </div>
    </div>
  );
}
