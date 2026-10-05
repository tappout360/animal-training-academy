// WarrenWise Animal Academy - Family Barn Board
// Safe Private Social Feed for Linked Family & Consented 4-H Club Coach
// COPPA-Compliant: No public stranger chat, no Minor PII, positive encouragement only.

import React, { useState } from 'react';
import { 
  Users, Heart, Sparkles, Send, ShieldCheck, 
  MessageSquare, Camera, Trophy, Star, Smile, Lock 
} from 'lucide-react';
import { LivingHerdEngine } from '../../../services/LivingHerdEngine';
import { soundEffects } from '../../../utils/audioEffects';

export default function FamilyBarnBoard({
  learner = { id: 'learner_current', handle: 'CloverChampion42' },
  userRole = 'youth',
  trailPack
}) {
  const [posts, setPosts] = useState(() => LivingHerdEngine.getFamilyBarnPosts(learner.id));
  const [newPostText, setNewPostText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🐇');

  const handleSendPost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    soundEffects.playTap();

    let authorName = learner.handle || 'Youth Exhibitor';
    let badge = 'Daily Win';

    if (userRole === 'parent') {
      authorName = 'Parent / Guardian';
      badge = 'Parent Cheer';
    } else if (userRole === 'coach') {
      authorName = 'Club Coach';
      badge = 'Coach Beacon';
    }

    const updated = LivingHerdEngine.addFamilyBarnPost(learner.id, {
      authorName,
      role: userRole,
      text: newPostText.trim(),
      photoEmoji: selectedEmoji,
      badge
    });

    setPosts(updated);
    setNewPostText('');
  };

  const handleCheer = (postId) => {
    soundEffects.playTap();
    const updated = LivingHerdEngine.cheerPost(learner.id, postId);
    setPosts(updated);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-6">
      
      {/* Top Header & COPPA Safety Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👥</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Family &amp; Barn Board
            </h3>
            <span className="bg-sky-100 text-sky-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-sky-300">
              Private Circle Only
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Share today's animal pose, celebrate milestones, and receive parent &amp; coach encouragement.
          </p>
        </div>

        {/* Safety Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>COPPA Safe • Zero Stranger Chat</span>
        </div>
      </div>

      {/* Post Creation Box */}
      <form onSubmit={handleSendPost} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Post an Update to Your Family &amp; Coach Board:</span>
          <div className="flex items-center gap-1">
            {['🐇', '⭐', '🏆', '🌾', '💖'].map(emoji => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedEmoji(emoji)}
                className={`w-7 h-7 rounded-lg text-base flex items-center justify-center transition ${
                  selectedEmoji === emoji ? 'bg-amber-200 scale-110 shadow-xs' : 'hover:bg-slate-200'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            placeholder={
              userRole === 'parent'
                ? 'Leave an encouraging note for your child’s barn routine...'
                : userRole === 'coach'
                  ? 'Drop a helpful showmanship reminder or congratulatory beacon...'
                  : 'Share today’s show stance score, hydration check, or proud moment...'
            }
            className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 resize-none h-20"
            maxLength={250}
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-slate-400">
            {250 - newPostText.length} characters left
          </span>

          <button
            type="submit"
            disabled={!newPostText.trim()}
            className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 shadow-xs ${
              newPostText.trim()
                ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Share with Family</span>
          </button>
        </div>
      </form>

      {/* Feed Stream */}
      <div className="space-y-4">
        {posts.map((post) => {
          const isCoach = post.role === 'coach';
          const isParent = post.role === 'parent';

          return (
            <div 
              key={post.id}
              className={`p-4 rounded-2xl border transition ${
                isCoach 
                  ? 'bg-purple-50/60 border-purple-200' 
                  : isParent 
                    ? 'bg-amber-50/60 border-amber-200' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-xl shrink-0">
                    {post.photoEmoji || '🐾'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-slate-900">
                        {post.authorName}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isCoach 
                          ? 'bg-purple-200 text-purple-900' 
                          : isParent 
                            ? 'bg-amber-200 text-amber-900' 
                            : 'bg-emerald-100 text-emerald-900'
                      }`}>
                        {post.badge || 'Exhibitor'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{post.time}</span>
                  </div>
                </div>

                {/* Cheer Reaction Button */}
                <button
                  onClick={() => handleCheer(post.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-rose-600 transition shadow-2xs group"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform" />
                  <span>{post.cheers || 1}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-3 leading-relaxed">
                {post.text}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
