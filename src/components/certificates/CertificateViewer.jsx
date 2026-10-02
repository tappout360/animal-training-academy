// WarrenWise Youth Animal Training Academy - Official Certificate Viewer

import React from 'react';
import { Award, Printer, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import { LEGAL_DISCLAIMERS } from '../../config/constants';

export default function CertificateViewer({
  certificate,
  onClose
}) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden animate-fadeIn">
        {/* Modal Action Bar */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Academic Completion Certificate</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-8 sm:p-12 bg-emerald-50/20 text-center relative border-8 border-double border-emerald-800 m-4 rounded-xl space-y-6">
          {/* Subtle Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-9xl font-black text-emerald-950">🍀</span>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <div className="text-xs font-black tracking-widest text-emerald-800 uppercase">
              WarrenWise Youth Animal Training Academy
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 tracking-tight">
              Certificate of Academic Mastery
            </h1>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              4-H Small Animal & Livestock Educational Curriculum
            </div>
          </div>

          <div className="w-24 h-0.5 bg-amber-500 mx-auto" />

          {/* Recipient */}
          <div className="space-y-2">
            <div className="text-xs text-slate-500 italic">This certifies that</div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-900 underline decoration-emerald-300 decoration-2 underline-offset-4">
              {certificate.learnerDisplayName}
            </div>
            <div className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto pt-1 leading-relaxed">
              {certificate.citation ? (
                <span>{certificate.citation}</span>
              ) : (
                <span>
                  has satisfactorily completed all 9 core educational training modules in the{' '}
                  <strong className="text-slate-900 block mt-0.5">{certificate.title}</strong>{' '}
                  with an overall examination average score of <strong className="text-emerald-800">{certificate.averageScore}%</strong>.
                </span>
              )}
              {certificate.division && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Division: {certificate.division}</span>
                </div>
              )}
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-6 grid grid-cols-2 gap-8 items-end border-t border-slate-200 text-xs">
            <div className="text-left space-y-1">
              <div className="font-mono text-[11px] text-slate-400">
                Verification Code: <strong className="text-slate-700">{certificate.verificationCode}</strong>
              </div>
              <div className="text-slate-500">
                Date Issued: <strong>{certificate.issueDate}</strong>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="font-serif italic font-bold text-sm text-slate-800">
                WarrenWise Academic Curriculum Board
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                Independent Youth Educational Platform
              </div>
            </div>
          </div>

          {/* Mandatory Legal Non-Endorsement Notice */}
          <div className="pt-4 border-t border-slate-200/80 text-[10px] text-slate-400 text-center leading-tight">
            <strong>Mandatory Legal Notice:</strong> {certificate.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
}
