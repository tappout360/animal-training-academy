// WarrenWise Youth Animal Training Academy - Feedback Widget
// Lightweight, COPPA-safe in-app continuous improvement mechanism for youth, parents, and leaders.

import React, { useState } from 'react';
import { MessageSquarePlus, Star, ThumbsUp, Lightbulb, CheckCircle2, X, Send } from 'lucide-react';
import { FeedbackService } from '../../services/FeedbackService';

export default function FeedbackWidget({
  userRole = 'youth',
  currentDivision = 'junior',
  context = 'general'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState('helpful'); // 'helpful' | 'neutral' | 'needs_work'
  const [comment, setComment] = useState('');
  const [selectedRole, setSelectedRole] = useState(userRole);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    FeedbackService.submitFeedback({
      rating,
      comment,
      role: selectedRole,
      context,
      division: currentDivision
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setComment('');
    }, 2000);
  };

  if (!isOpen) {
    return (
      <aside aria-label="Feedback" className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full shadow-lg border border-slate-700/80 text-xs font-bold transition-all hover:scale-105 cursor-pointer backdrop-blur-sm"
          title="Share feedback or suggest an animal species"
        >
          <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">Feedback</span>
        </button>
      </aside>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-4 text-slate-900 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              🍀
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900">Share Feedback &amp; Ideas</h4>
              <p className="text-[11px] text-slate-500">Help improve WarrenWise for 4-H &amp; youth projects</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <h5 className="font-black text-slate-900">Thank You for Your Feedback!</h5>
            <p className="text-xs text-slate-500">Your suggestion has been recorded for our curriculum team.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Rating Buttons */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                How helpful was this lesson or trail today?
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'helpful', label: 'Very Helpful', icon: <Star className="w-4 h-4 text-amber-500 fill-amber-400" /> },
                  { id: 'neutral', label: 'It was Okay', icon: <ThumbsUp className="w-4 h-4 text-blue-500" /> },
                  { id: 'needs_work', label: 'Needs Work', icon: <Lightbulb className="w-4 h-4 text-purple-500" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRating(item.id)}
                    className={`py-2 px-2 rounded-xl font-bold flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                      rating === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.icon}
                    <span className="text-[11px]">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Role selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                I am sharing as a:
              </label>
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                {['youth', 'parent', 'coach'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSelectedRole(r)}
                    className={`flex-1 py-1 rounded-lg capitalize transition cursor-pointer ${
                      selectedRole === r ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {r === 'coach' ? 'Club Leader' : r}
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Suggestions / Questions / Species Requests:
              </label>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What animal species or showmanship step would you like to see next?"
                className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">
                Child-safe: Please do not include full names, phone numbers, or email addresses.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-md transition flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
