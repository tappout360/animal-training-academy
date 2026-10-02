// WarrenWise Youth Animal Training Academy - My Achievements, Badges & Certificates Hub
// Integrates 4-H Badge Showcase, Streaks, and 5-Type Verifiable Certificate Studio

import React, { useState } from 'react';
import { 
  Award, Flame, Sparkles, CheckCircle2, ShieldCheck, 
  ChevronRight, FileText, Printer, PlusCircle, Star, HeartHandshake
} from 'lucide-react';
import BadgeShowcase from './BadgeShowcase';
import CertificateViewer from './CertificateViewer';
import { issueVerifiableCertificate } from '../../services/CertificateService';
import { CERTIFICATE_TYPES } from '../../data/badgesCatalog';
import { SEED_CERTIFICATE } from '../../db/seedData';

export default function MyAchievements({
  learner = { handle: 'BarnChampion', xp: 480, streakDays: 7, division: 'junior' },
  earnedBadgeKeys = ['mastery_rabbits', 'skill_showmanship_virtuoso', 'skill_ethics_champion', 'streak_7_days', 'milestone_junior_scholar'],
  currentSpeciesId = 'rabbits',
  completedModules = [],
  userRole = 'learner'
}) {
  const [activeTab, setActiveTab] = useState('badges'); // 'badges' or 'certificates'
  const [selectedCert, setSelectedCert] = useState(null);
  const [issuedCertificates, setIssuedCertificates] = useState([
    SEED_CERTIFICATE,
    {
      id: 'cert_showmanship_demo',
      verificationCode: 'WW-SHO-2026-X892',
      learnerDisplayName: learner.realName || learner.handle,
      division: learner.division,
      title: 'Showmanship & Practical Ringcraft Distinction',
      citation: 'has demonstrated outstanding mastery of breed-specific presentation, ring mechanics, physical examination sequences, and oral judge defense.',
      averageScore: 96,
      issueDate: 'October 1, 2026',
      disclaimer: 'Educational Mastery Certificate issued by WarrenWise Youth Animal Training Academy. Not an official certification from ARBA, ADGA, or National 4-H.',
      verifiedAuthority: 'WarrenWise Academic Curriculum Board'
    }
  ]);

  const handleGenerateCertificate = async (typeKey) => {
    const newCert = await issueVerifiableCertificate({
      certificateType: typeKey,
      learnerId: learner.id || 'learner_current',
      learnerHandle: learner.handle,
      learnerRealName: learner.realName,
      speciesId: currentSpeciesId,
      division: learner.division || 'junior',
      averageScore: 94,
      milestoneCount: 15
    });

    setIssuedCertificates(prev => [newCert, ...prev]);
    setSelectedCert(newCert);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Tab Bar */}
      <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('badges')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'badges'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Badges &amp; Habit Streaks</span>
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
              activeTab === 'certificates'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Verifiable Certificates ({issuedCertificates.length})</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 pr-3 text-xs font-bold text-slate-500">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span>{learner.streakDays || 7}-Day Barn Streak</span>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'badges' ? (
        <BadgeShowcase
          earnedBadgeKeys={earnedBadgeKeys}
          currentSpeciesId={currentSpeciesId}
          completedModules={completedModules}
          userRole={userRole}
          onManualGrant={async ({ badgeKey, reason }) => {
            console.log('Granted badge:', badgeKey, reason);
          }}
        />
      ) : (
        <div className="space-y-6">
          {/* Certificate Generation Hub */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>5 Official Academic Certificate Categories</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Academic Certificate Studio
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                App-issued educational certificates verifying module completion, practical showmanship oral defense, and 4-H ethics. Includes tamper-resistant verification codes and prominent non-affiliation legal disclaimers.
              </p>
            </div>

            {/* Quick Generator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {Object.entries(CERTIFICATE_TYPES).map(([key, certMeta]) => (
                <div
                  key={key}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">{certMeta.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{certMeta.description}</p>
                  </div>

                  <button
                    onClick={() => handleGenerateCertificate(certMeta.id)}
                    className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-2xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Issue Certificate</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Issued Certificates List */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">My Issued Certificates</h3>
                <p className="text-xs text-slate-500">Ready for digital sharing or printing into your physical 4-H Project Record Binder</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                {issuedCertificates.length} Verified
              </span>
            </div>

            <div className="space-y-3">
              {issuedCertificates.map(cert => (
                <div
                  key={cert.id}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{cert.title}</h4>
                      <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2 mt-1">
                        <span>Code: <strong className="font-mono text-slate-700">{cert.verificationCode}</strong></span>
                        <span>•</span>
                        <span>Issued: {cert.issueDate}</span>
                        {cert.averageScore && (
                          <>
                            <span>•</span>
                            <span>Score: <strong className="text-emerald-700">{cert.averageScore}%</strong></span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs whitespace-nowrap self-start sm:self-center"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>View &amp; Print</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Print & Preview Modal */}
      {selectedCert && (
        <CertificateViewer
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

    </div>
  );
}
