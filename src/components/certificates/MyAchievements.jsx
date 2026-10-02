// WarrenWise Youth Animal Training Academy - My Achievements & Badges Gallery

import React, { useState } from 'react';
import { Award, Flame, Sparkles, CheckCircle2, ShieldCheck, ChevronRight, FileText } from 'lucide-react';
import { MASTER_BADGES, BADGE_TIERS } from '../../data/badgesData';
import CertificateViewer from './CertificateViewer';
import { SEED_CERTIFICATE } from '../../db/seedData';

export default function MyAchievements({
  learner,
  earnedBadgeKeys = ['first_steps', 'breed_expert_rabbits', 'biosecurity_guardian', 'streak_3_days']
}) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-700 via-amber-700 to-yellow-800 text-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 text-yellow-200 text-xs font-bold uppercase tracking-wider mb-1">
          <Award className="w-4 h-4 text-yellow-300" />
          <span>Learner Honors & Verification</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          My Badges, Streaks & Mastery Certificates
        </h1>
        <p className="text-yellow-100 text-xs sm:text-sm mt-1 max-w-2xl">
          Non-pay-to-win achievement recognition based purely on demonstrated knowledge, ethical judgment, and daily barn practice devotion.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-yellow-600/60">
          <div>
            <div className="text-[11px] text-yellow-200 font-semibold uppercase">Total XP Points</div>
            <div className="text-xl font-black text-white">{learner.xp} XP</div>
          </div>
          <div>
            <div className="text-[11px] text-yellow-200 font-semibold uppercase">Daily Streak</div>
            <div className="text-xl font-black text-orange-300 flex items-center gap-1">
              <Flame className="w-5 h-5 fill-orange-400 text-orange-400" />
              <span>{learner.streakDays} Days</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-yellow-200 font-semibold uppercase">Badges Earned</div>
            <div className="text-xl font-black text-white">{earnedBadgeKeys.length} / {MASTER_BADGES.length}</div>
          </div>
          <div>
            <div className="text-[11px] text-yellow-200 font-semibold uppercase">Certificates Issued</div>
            <div className="text-xl font-black text-emerald-300">1 Verified</div>
          </div>
        </div>
      </div>

      {/* Verified Certificates Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900">Academic Certificates of Mastery</h3>
            <p className="text-xs text-slate-500">Official app-issued completion certificates for your 4-H record book</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            1 Ready to Print
          </span>
        </div>

        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              🏆
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                {SEED_CERTIFICATE.title}
              </h4>
              <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                <span>Verification: <strong>{SEED_CERTIFICATE.verificationCode}</strong></span>
                <span>•</span>
                <span>Average: <strong className="text-emerald-700">{SEED_CERTIFICATE.averageScore}%</strong></span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedCert(SEED_CERTIFICATE)}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xs transition-all whitespace-nowrap self-start sm:self-center"
          >
            <FileText className="w-4 h-4" />
            <span>View & Print Certificate</span>
          </button>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="font-bold text-base text-slate-900">Academy Mastery Badges</h3>
          <p className="text-xs text-slate-500">Earned through quizzes, skillathon stations, and ethics dilemmas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MASTER_BADGES.map((badge) => {
            const isEarned = earnedBadgeKeys.includes(badge.key);
            const tierMeta = BADGE_TIERS[badge.tier] || BADGE_TIERS.BRONZE;

            return (
              <div
                key={badge.key}
                className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center relative ${
                  isEarned
                    ? 'bg-white border-slate-200 shadow-2xs'
                    : 'bg-slate-50 border-slate-200/60 opacity-50'
                }`}
              >
                {/* Badge Icon Emblem */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tierMeta.color} text-white flex items-center justify-center text-2xl shadow-sm mb-3 border-2 ${tierMeta.border}`}>
                  {isEarned ? '🍀' : '🔒'}
                </div>

                <div className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                  {badge.name}
                </div>
                <p className="text-xs text-slate-500 leading-tight mb-3">
                  {badge.description}
                </p>

                <div className="mt-auto pt-2 border-t border-slate-100 w-full flex items-center justify-between text-[10px]">
                  <span className="font-bold uppercase text-slate-400">
                    {tierMeta.label}
                  </span>
                  {isEarned ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Earned
                    </span>
                  ) : (
                    <span className="text-slate-400 font-medium">Locked</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <CertificateViewer
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
