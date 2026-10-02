// WarrenWise Youth Animal Training Academy - WarrenWise Trainer AI Modal

import React, { useState } from 'react';
import { 
  Bot, X, Send, Sparkles, AlertTriangle, ShieldCheck, 
  HelpCircle, ExternalLink, RefreshCw, BookOpen 
} from 'lucide-react';
import { askWarrenWiseTrainer } from '../../services/WarrenWiseTrainerAI';
import { AGE_DIVISIONS, LEGAL_DISCLAIMERS } from '../../config/constants';

export default function WarrenWiseTrainerModal({
  isOpen,
  onClose,
  currentDivision = 'junior',
  selectedSpeciesId = 'rabbits',
  contextModule = null
}) {
  if (!isOpen) return null;

  const [division, setDivision] = useState(currentDivision);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'm_welcome',
      sender: 'ai',
      category: 'WELCOME',
      sourceTier: 'Tier 1: Approved Curriculum & Extension Standards',
      headline: `Hello 4-H Exhibitor! I'm WarrenWise Trainer.`,
      text: `I am your AI study coach adapted specifically for youth animal projects. I explain complex concepts simply, quiz your knowledge from approved standards, and help you prepare for showmanship and skillathon contests.`,
      actionSteps: [
        'Ask questions about rabbit or cavy care, breeds, and showmanship.',
        'Get age-adapted study guidance from approved curriculum standards.',
        'Safety rule: I never provide veterinary prescriptions or medication dosages.'
      ]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const QUICK_PROMPT_CHIPS = [
    { label: 'Showmanship routine steps', query: 'Can you walk me through the 12-step showmanship routine?' },
    { label: 'Why cavies need Vitamin C', query: 'Why do guinea pigs need daily Vitamin C?' },
    { label: 'Difference in body types', query: 'What is the difference between compact and commercial body types?' },
    { label: 'Veterinary Safety Test', query: 'What dosage of penicillin should I give my sick rabbit for snuffles?' }
  ];

  const handleSend = async (queryText = inputQuery) => {
    const text = (queryText || '').trim();
    if (!text || isLoading) return;

    // Add user message
    const userMsg = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text
    };
    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await askWarrenWiseTrainer({
        query: text,
        division,
        speciesId: selectedSpeciesId,
        contextModuleId: contextModule?.id
      });

      const aiMsg = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        isSafetyBlocked: response.isSafetyBlocked,
        category: response.category,
        sourceTier: response.sourceTier,
        title: response.title,
        headline: response.headline,
        text: response.ageAdaptedAdvice,
        actionSteps: response.actionSteps,
        studyTips: response.studyTips,
        disclaimer: response.disclaimer
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error('WarrenWise query error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl h-[90vh] max-h-[700px] flex flex-col overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base">WarrenWise Trainer AI</h3>
                <span className="text-[10px] font-bold bg-emerald-700/80 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Approved Knowledge Only
                </span>
              </div>
              <p className="text-[11px] text-emerald-100">
                Youth Learning Coach • Age-Adapted Explanations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tone and Division Selector inside Coach */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 font-semibold">
            <span>Tone Track:</span>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-2 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {Object.values(AGE_DIVISIONS).map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div className="text-[11px] text-slate-500 hidden sm:flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict Veterinary Refusal Boundaries Active</span>
          </div>
        </div>

        {/* Chat Message Scrollable Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {/* User Message */}
              {msg.sender === 'user' ? (
                <div className="bg-emerald-700 text-white rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] text-xs sm:text-sm font-medium shadow-xs">
                  {msg.text}
                </div>
              ) : (
                /* AI Message */
                <div className={`rounded-2xl rounded-tl-xs p-4 max-w-[92%] border space-y-2.5 shadow-xs text-xs sm:text-sm ${
                  msg.isSafetyBlocked
                    ? 'bg-rose-50/90 border-rose-300 text-rose-950'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  {/* Knowledge Tier Citation */}
                  <div className="flex items-center justify-between gap-2 border-b pb-2 text-[10px] font-bold">
                    <span className={msg.isSafetyBlocked ? 'text-rose-700 uppercase tracking-wider' : 'text-emerald-700 uppercase tracking-wider'}>
                      {msg.sourceTier || 'Tier 1: Approved Curriculum'}
                    </span>
                    {msg.isSafetyBlocked && (
                      <span className="bg-rose-200 text-rose-900 px-2 py-0.5 rounded-full font-black flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        VET BOUNDARY INTERCEPT
                      </span>
                    )}
                  </div>

                  {/* Headline */}
                  {msg.headline && (
                    <div className="font-bold text-sm text-slate-900">
                      {msg.headline}
                    </div>
                  )}

                  {/* Body Advice */}
                  <div className="leading-relaxed whitespace-pre-line">
                    {msg.text}
                  </div>

                  {/* Action Steps */}
                  {msg.actionSteps && msg.actionSteps.length > 0 && (
                    <div className="space-y-1 pt-1">
                      {msg.actionSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Disclaimer notice */}
                  {msg.disclaimer && (
                    <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">
                      ⚠️ {msg.disclaimer}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
              <span>WarrenWise Coach is consulting approved curriculum standards...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2.5 bg-slate-100/70 border-t border-slate-200 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-1 flex-shrink-0">
            Suggested:
          </span>
          {QUICK_PROMPT_CHIPS.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip.query)}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 hover:text-emerald-800 text-[11px] font-medium text-slate-700 border border-slate-200 transition-all flex-shrink-0 shadow-2xs"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ask a question in ${AGE_DIVISIONS[division]?.name || 'Junior'} division...`}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuery.trim() || isLoading}
            className={`p-2.5 rounded-xl font-bold transition-all shadow-xs ${
              inputQuery.trim() && !isLoading
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
