// WarrenWise Youth Animal Training Academy - Interactive Lesson Viewer

import React, { useState } from 'react';
import { 
  ArrowLeft, Volume2, VolumeX, Sparkles, CheckCircle, 
  HelpCircle, AlertCircle, Award, BookOpen, Bot 
} from 'lucide-react';
import { AGE_DIVISIONS } from '../../config/constants';

export default function LessonViewer({
  module,
  pack,
  division,
  onBack,
  onStartQuiz,
  onAskAi
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedQuickCheck, setSelectedQuickCheck] = useState(null);
  const [quickCheckAnswered, setQuickCheckAnswered] = useState(false);

  const divMeta = AGE_DIVISIONS[division] || AGE_DIVISIONS.junior;
  const content = module.ageContent[division] || module.ageContent.junior;
  const quickCheck = content.quickCheck;

  const handleToggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    // In browser, trigger window.speechSynthesis if available
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (!isPlayingAudio) {
        const textToRead = content.readAloud || content.headline;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = division === 'cloverbud' ? 0.85 : 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
      } else {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleSelectQuickCheck = (index) => {
    if (quickCheckAnswered) return;
    setSelectedQuickCheck(index);
    setQuickCheckAnswered(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Modules</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAskAi(module)}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 transition-all"
          >
            <Bot className="w-4 h-4 text-emerald-600" />
            <span>Ask WarrenWise AI</span>
          </button>
          <button
            onClick={onStartQuiz}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-xl shadow-xs transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Take Module Quiz</span>
          </button>
        </div>
      </div>

      {/* Main Lesson Sheet */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
            <span>{pack.species} Project</span>
            <span>•</span>
            <span>Module {module.order}: {module.title}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            {content.headline || module.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs font-medium text-slate-500">
              Track: <strong className="text-slate-800">{divMeta.name}</strong> ({divMeta.ageRange})
            </span>
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                isPlayingAudio
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-emerald-700" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? 'Stop Reading' : 'Listen with Read-Aloud'}</span>
            </button>
          </div>
        </div>

        {/* Read aloud intro box (especially popular in Cloverbud & Junior) */}
        {content.readAloud && (
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 text-emerald-900 text-sm font-medium flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="italic">
              "{content.readAloud}"
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-6">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {sec.title}
              </h2>
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-slate-100">
                {sec.body}
              </div>
            </div>
          ))}
        </div>

        {/* In-Lesson Quick Check */}
        {quickCheck && (
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>In-Lesson Comprehension Check</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
              {quickCheck.question}
            </h3>

            <div className="space-y-2 mb-4">
              {quickCheck.options.map((opt, oIdx) => {
                let btnStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800';
                if (quickCheckAnswered) {
                  if (oIdx === quickCheck.correctIndex) {
                    btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                  } else if (selectedQuickCheck === oIdx) {
                    btnStyle = 'bg-rose-100 border-rose-300 text-rose-950';
                  } else {
                    btnStyle = 'bg-white/50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectQuickCheck(oIdx)}
                    disabled={quickCheckAnswered}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {quickCheckAnswered && oIdx === quickCheck.correctIndex && (
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {quickCheckAnswered && (
              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-2 shadow-2xs animate-fadeIn">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>WarrenWise Coach:</strong> {quickCheck.feedback}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
