// WarrenWise Animal Academy - Herd Trail Quest
// Pioneer Outfitter & Trading Post: Spend earned Trail Points on authentic care gear & showmanship abilities

import React, { useState } from 'react';
import { 
  Coins, Sparkles, Check, Shield, ShoppingBag, ArrowLeft,
  Award, Info, ChevronRight, CheckCircle2, AlertCircle
} from 'lucide-react';
import { TRAIL_OUTFITTER_CATALOG } from '../../services/TrailQuestEngine';

export default function TrailOutfitterStore({
  questState,
  onBuyItem,
  onClose
}) {
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'gear' | 'care' | 'ability'
  const [purchaseNotice, setPurchaseNotice] = useState(null);
  const [errorNotice, setErrorNotice] = useState(null);

  const trailPoints = questState.trailPoints || 0;
  const purchasedIds = questState.purchasedItemIds || [];

  const filteredItems = TRAIL_OUTFITTER_CATALOG.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleBuy = (item) => {
    try {
      setErrorNotice(null);
      if (onBuyItem) {
        onBuyItem(item.id);
        setPurchaseNotice(`Purchased ${item.name}! Applied show condition boost.`);
        setTimeout(() => setPurchaseNotice(null), 3500);
      }
    } catch (err) {
      setErrorNotice(err.message || 'Could not purchase item.');
      setTimeout(() => setErrorNotice(null), 3500);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden text-stone-900">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-stone-900 to-amber-900 text-white p-5 sm:p-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🏕️</span>
              <h2 className="text-xl sm:text-2xl font-black text-amber-200 tracking-tight">
                Pioneer Trail Trading Post & Outfitter
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Equip your wagon caravan with essential care equipment, soothing herbs, and showmanship abilities to present your animal in Grand Champion form.
            </p>
          </div>

          {/* Points Wallet Display */}
          <div className="flex items-center gap-3 bg-stone-950/80 border border-amber-400/40 rounded-2xl px-4 py-2.5 shadow-lg w-max">
            <Coins className="w-6 h-6 text-amber-300 animate-bounce" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-amber-300/80">
                Your Trail Points Wallet
              </div>
              <div className="text-xl font-black text-amber-400">
                {trailPoints.toLocaleString()} <span className="text-xs font-normal text-amber-200">Points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notices */}
        {purchaseNotice && (
          <div className="mt-3 bg-emerald-500/90 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>{purchaseNotice}</span>
          </div>
        )}

        {errorNotice && (
          <div className="mt-3 bg-rose-500/90 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-white" />
            <span>{errorNotice}</span>
          </div>
        )}
      </div>

      {/* Filter Tabs & Subheader */}
      <div className="p-4 sm:p-6 border-b border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            All Items ({TRAIL_OUTFITTER_CATALOG.length})
          </button>
          <button
            onClick={() => setSelectedCategory('gear')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'gear'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🪮 Trail Care Gear
          </button>
          <button
            onClick={() => setSelectedCategory('care')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'care'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🌾 Feed & Herbal Care
          </button>
          <button
            onClick={() => setSelectedCategory('ability')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'ability'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            ⭐ Showmanship Abilities
          </button>
        </div>

        <button
          onClick={onClose}
          className="text-xs font-bold text-stone-600 hover:text-stone-900 bg-white border border-stone-300 px-3 py-1.5 rounded-lg transition-colors"
        >
          Return to Trail Map
        </button>
      </div>

      {/* Items Catalog Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => {
          const isOwned = purchasedIds.includes(item.id);
          const canAfford = trailPoints >= item.cost;

          return (
            <div 
              key={item.id}
              className={`rounded-2xl border p-4 flex flex-col justify-between transition-all ${
                isOwned 
                  ? 'bg-emerald-50/50 border-emerald-300' 
                  : 'bg-white border-stone-200 hover:border-amber-400 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-2 bg-stone-100 rounded-xl">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-sm text-stone-900">{item.name}</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {isOwned ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3" /> In Wagon
                    </span>
                  ) : (
                    <div className="text-right">
                      <span className="font-black text-sm text-amber-600 flex items-center gap-1">
                        <Coins className="w-3.5 h-3.5" /> {item.cost}
                      </span>
                      <span className="text-[10px] text-stone-400">Pts</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Stat Boost Highlights */}
                <div className="bg-stone-50 rounded-xl p-2.5 mb-3 border border-stone-200/60">
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Show Quality Benefits:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.effect.coatCondition && (
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                        +{item.effect.coatCondition}% Coat Gloss
                      </span>
                    )}
                    {item.effect.vigorHydration && (
                      <span className="text-[11px] font-semibold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-md">
                        +{item.effect.vigorHydration}% Hydration
                      </span>
                    )}
                    {item.effect.temperament && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        +{item.effect.temperament}% Calm Nerves
                      </span>
                    )}
                    {item.effect.poseTraining && (
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md">
                        +{item.effect.poseTraining}% Pose Stance
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-stone-500 italic mb-4">
                  "{item.lore}"
                </p>
              </div>

              {/* Purchase Button */}
              <div>
                {isOwned ? (
                  <button
                    disabled
                    className="w-full py-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs cursor-default flex items-center justify-center gap-1.5 border border-emerald-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Equipped in Caravan</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleBuy(item)}
                    disabled={!canAfford}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      canAfford
                        ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/20 hover:scale-[1.02]'
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    <Coins className="w-3.5 h-3.5" />
                    <span>{canAfford ? `Purchase for ${item.cost} Points` : `Need ${item.cost - trailPoints} More Points`}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
