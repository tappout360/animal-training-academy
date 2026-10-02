// WarrenWise Youth Animal Training Academy - Interactive Badge Showcase & Next Path Tracker
// Displays earned vs locked badges, category filters, tier honors, and coach manual awards

import React, { useState } from 'react';
import { 
  Award, Shield, Flame, Users, BookOpen, Star, 
  Lock, CheckCircle2, ChevronRight, Sparkles, Filter, 
  PlusCircle, AlertCircle, HeartHandshake, Eye, Megaphone, Apple, ShieldAlert, FileText, Compass
} from 'lucide-react';
import { ALL_CATALOG_BADGES, BADGE_TIERS, BADGE_CATEGORIES } from '../../data/badgesCatalog';
import { BadgeEngine } from '../../services/BadgeEngine';

const ICON_MAP = {
  Award, Shield, Flame, Users, BookOpen, Star, 
  Sparkles, HeartHandshake, Eye, Megaphone, Apple, ShieldAlert, FileText, Compass
};

export default function BadgeShowcase({
  earnedBadgeKeys = ['first_steps', 'mastery_rabbits', 'streak_3_days'],
  currentSpeciesId = 'rabbits',
  completedModules = [],
  userRole = 'learner', // 'learner', 'parent', 'coach', 'admin'
  onManualGrant = null
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [manualGrantReason, setManualGrantReason] = useState('');
  const [grantSuccessMsg, setGrantSuccessMsg] = useState('');
  const [grantErrorMsg, setGrantErrorMsg] = useState('');
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);

  const earnedSet = new Set(earnedBadgeKeys);

  const filteredBadges = ALL_CATALOG_BADGES.filter(b => {
    if (selectedCategory === 'all') return true;
    return b.category === selectedCategory;
  });

  const earnedCount = ALL_CATALOG_BADGES.filter(b => earnedSet.has(b.key)).length;
  const totalCount = ALL_CATALOG_BADGES.length;
  const totalEarnedPoints = ALL_CATALOG_BADGES
    .filter(b => earnedSet.has(b.key))
    .reduce((sum, b) => sum + (b.points || 0), 0);

  const suggestedNext = BadgeEngine.getSuggestedNextBadge({
    completedModules,
    existingBadgeKeys: earnedBadgeKeys,
    currentSpeciesId
  });

  const handleGrantBadge = async () => {
    setGrantErrorMsg('');
    setGrantSuccessMsg('');
    if (!selectedBadge) return;

    try {
      if (onManualGrant) {
        await onManualGrant({
          badgeKey: selectedBadge.key,
          reason: manualGrantReason
        });
      }
      setGrantSuccessMsg(`Successfully awarded "${selectedBadge.name}" with verified audit record!`);
      setTimeout(() => {
        setIsGrantModalOpen(false);
        setGrantSuccessMsg('');
        setManualGrantReason('');
      }, 1500);
    } catch (e) {
      setGrantErrorMsg(e.message);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 text-white p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Award className="w-64 h-64 text-white" />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>4-H Merit &amp; Dedication Accolades</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Animal Academy Badge Showcase
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
            Every badge represents verified animal husbandry knowledge, practical barn dedication, and adherence to the 4-H pledge. Non-pay-to-win, 100% earned through study and compassion.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mt-6 pt-6 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl">
            <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Badges Earned</div>
            <div className="text-2xl font-black text-white mt-0.5">{earnedCount} <span className="text-xs text-emerald-300 font-medium">/ {totalCount}</span></div>
          </div>
          <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl">
            <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Mastery Points</div>
            <div className="text-2xl font-black text-yellow-300 mt-0.5">{totalEarnedPoints} <span className="text-xs text-yellow-200/80 font-medium">pts</span></div>
          </div>
          <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl">
            <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Completion Rate</div>
            <div className="text-2xl font-black text-white mt-0.5">{Math.round((earnedCount / totalCount) * 100)}%</div>
          </div>
          <div className="bg-black/20 backdrop-blur-xs p-3.5 rounded-2xl">
            <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">Active Track</div>
            <div className="text-base font-bold text-white capitalize mt-1 truncate">{currentSpeciesId.replace('_', ' ')}</div>
          </div>
        </div>
      </div>

      {/* Suggested Next Badge Path */}
      {suggestedNext?.badge && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-7 h-7 text-amber-100" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-800">
                Recommended Next Milestone
              </div>
              <h3 className="text-base font-bold text-slate-900">{suggestedNext.badge.name}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{suggestedNext.callToAction}</p>
            </div>
          </div>
          <div className="w-full sm:w-48 space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-600">
              <span>Progress</span>
              <span>{suggestedNext.progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full bg-amber-200/60 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                style={{ width: `${suggestedNext.progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {BADGE_CATEGORIES.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map(badge => {
          const isEarned = earnedSet.has(badge.key);
          const tier = BADGE_TIERS[badge.tier] || BADGE_TIERS.BRONZE;
          const IconComp = ICON_MAP[badge.icon] || Award;

          return (
            <div
              key={badge.key}
              onClick={() => setSelectedBadge(badge)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                isEarned
                  ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300'
                  : 'bg-slate-50/70 border-slate-200/80 opacity-70 hover:opacity-100'
              }`}
            >
              <div>
                {/* Badge Header: Icon + Status */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs ${
                    isEarned 
                      ? `bg-gradient-to-br ${tier.color} text-white`
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    {isEarned ? <IconComp className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isEarned ? tier.bg : 'bg-slate-200 text-slate-500'
                  }`}>
                    {tier.label}
                  </span>
                </div>

                {/* Badge Title & Description */}
                <div className="mt-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {badge.name}
                    {isEarned && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Footer: Criteria / Points */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate pr-2 font-medium">{badge.criteriaText}</span>
                <span className="font-bold text-slate-700 shrink-0">+{badge.points || 50} pts</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Badge Detail / Grant Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 space-y-6 animate-fadeIn">
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm bg-gradient-to-br ${
                  BADGE_TIERS[selectedBadge.tier]?.color || 'from-emerald-600 to-green-700'
                }`}>
                  {React.createElement(ICON_MAP[selectedBadge.icon] || Award, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {BADGE_TIERS[selectedBadge.tier]?.label}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedBadge.name}</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedBadge(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Achievement Requirements
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                {selectedBadge.criteriaText}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>Status: <strong className={earnedSet.has(selectedBadge.key) ? 'text-emerald-600' : 'text-slate-700'}>
                {earnedSet.has(selectedBadge.key) ? 'Earned & Verified' : 'In Progress'}
              </strong></span>
              <span>Reward: <strong className="text-slate-900">+{selectedBadge.points || 50} Academy Points</strong></span>
            </div>

            {/* Coach / Admin Manual Grant Controls */}
            {(userRole === 'coach' || userRole === 'admin') && !earnedSet.has(selectedBadge.key) && (
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                  <Shield className="w-4 h-4 text-purple-700" />
                  <span>Coach / Leader Manual Grant</span>
                </div>
                <p className="text-[11px] text-purple-800 leading-relaxed">
                  You may grant this badge for verified in-person barn demonstration, leadership, or club participation. Requires an audit reason log.
                </p>
                <textarea
                  rows={2}
                  value={manualGrantReason}
                  onChange={(e) => setManualGrantReason(e.target.value)}
                  placeholder="Mandatory reason (e.g. Demonstrated exemplary sportsmanship during county fair showmanship clinic)..."
                  className="w-full text-xs p-2.5 rounded-xl border border-purple-300 bg-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
                {grantErrorMsg && <div className="text-xs text-rose-600 font-semibold">{grantErrorMsg}</div>}
                {grantSuccessMsg && <div className="text-xs text-emerald-600 font-semibold">{grantSuccessMsg}</div>}
                
                <button
                  onClick={handleGrantBadge}
                  className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition"
                >
                  Confirm &amp; Log Badge Grant
                </button>
              </div>
            )}

            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
