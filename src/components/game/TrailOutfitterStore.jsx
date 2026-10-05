// WarrenWise Animal Academy - Herd Trail Quest
// Pioneer Outfitter & Trading Post: Spend earned Trail Points on authentic care gear, wagon repairs & camp betterments

import React, { useState } from 'react';
import { 
  Coins, Sparkles, Check, Shield, ShoppingBag, ArrowLeft,
  Award, Info, ChevronRight, CheckCircle2, AlertCircle, Wrench,
  Home, RefreshCw, AlertTriangle
} from 'lucide-react';
import { TRAIL_OUTFITTER_CATALOG } from '../../services/TrailQuestEngine';

export default function TrailOutfitterStore({
  questState,
  onBuyItem,
  onClose,
  initialCategory = 'all'
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [purchaseNotice, setPurchaseNotice] = useState(null);
  const [errorNotice, setErrorNotice] = useState(null);

  const trailPoints = questState.trailPoints || 0;
  const purchasedIds = questState.purchasedItemIds || [];

  const wagon = questState.wagonStatus || {
    durability: 85,
    canvasCover: 80,
    carrierCushion: 75,
    activeAilment: null
  };

  const camp = questState.campStatus || {
    comfortLevel: 80,
    hydrationPurity: 85,
    forageFreshness: 80
  };

  const activeAilment = wagon.activeAilment;
  const cureItem = activeAilment ? TRAIL_OUTFITTER_CATALOG.find(i => i.id === activeAilment.cureItemId) : null;

  const filteredItems = TRAIL_OUTFITTER_CATALOG.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleBuy = (item) => {
    try {
      setErrorNotice(null);
      if (onBuyItem) {
        onBuyItem(item.id);
        const actionType = item.category === 'wagon_repair' 
          ? 'Wagon Repaired' 
          : (item.category === 'camp_betterment' ? 'Camp Upgraded' : 'Equipped Item');
        setPurchaseNotice(`${actionType}: ${item.name}! Points spent successfully.`);
        setTimeout(() => setPurchaseNotice(null), 3500);
      }
    } catch (err) {
      setErrorNotice(err.message || 'Could not purchase item.');
      setTimeout(() => setErrorNotice(null), 3500);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden text-stone-900">
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
              Spend your earned Trail Points to repair road-wear on your wagon, cure caravan ailments, upgrade camp shelter, and acquire championship care equipment.
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

      {/* Wagon & Camp Maintenance Station HUD */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 border-b border-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-200">
              Wagon & Camp Maintenance Station
            </h3>
          </div>
          <span className="text-[11px] text-stone-400">
            Road friction degrades equipment over miles. Spend points here to keep your caravan roadworthy!
          </span>
        </div>

        {/* 4 Health Gauges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Wagon Durability */}
          <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🛠️</span> Wagon Durability
              </span>
              <span className={`font-bold ${wagon.durability >= 70 ? 'text-emerald-400' : (wagon.durability >= 40 ? 'text-amber-400' : 'text-rose-400')}`}>
                {wagon.durability}%
              </span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${wagon.durability >= 70 ? 'bg-emerald-500' : (wagon.durability >= 40 ? 'bg-amber-500' : 'bg-rose-500')}`}
                style={{ width: `${wagon.durability}%` }}
              />
            </div>
          </div>

          {/* Canvas Cover */}
          <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>⛺</span> Canvas Shelter
              </span>
              <span className={`font-bold ${wagon.canvasCover >= 70 ? 'text-emerald-400' : (wagon.canvasCover >= 40 ? 'text-amber-400' : 'text-rose-400')}`}>
                {wagon.canvasCover}%
              </span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${wagon.canvasCover >= 70 ? 'bg-emerald-500' : (wagon.canvasCover >= 40 ? 'bg-amber-500' : 'bg-rose-500')}`}
                style={{ width: `${wagon.canvasCover}%` }}
              />
            </div>
          </div>

          {/* Camp Comfort */}
          <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🏕️</span> Camp Comfort
              </span>
              <span className={`font-bold ${camp.comfortLevel >= 70 ? 'text-emerald-400' : (camp.comfortLevel >= 40 ? 'text-amber-400' : 'text-rose-400')}`}>
                {camp.comfortLevel}%
              </span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${camp.comfortLevel >= 70 ? 'bg-emerald-500' : (camp.comfortLevel >= 40 ? 'bg-amber-500' : 'bg-rose-500')}`}
                style={{ width: `${camp.comfortLevel}%` }}
              />
            </div>
          </div>

          {/* Carrier Cushioning */}
          <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800">
            <div className="flex justify-between items-center text-[11px] mb-1">
              <span className="text-stone-300 font-medium flex items-center gap-1">
                <span>🔩</span> Crate Cushioning
              </span>
              <span className={`font-bold ${wagon.carrierCushion >= 70 ? 'text-emerald-400' : (wagon.carrierCushion >= 40 ? 'text-amber-400' : 'text-rose-400')}`}>
                {wagon.carrierCushion}%
              </span>
            </div>
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${wagon.carrierCushion >= 70 ? 'bg-emerald-500' : (wagon.carrierCushion >= 40 ? 'bg-amber-500' : 'bg-rose-500')}`}
                style={{ width: `${wagon.carrierCushion}%` }}
              />
            </div>
          </div>
        </div>

        {/* Active Wagon Ailment Cure Banner */}
        {activeAilment && (
          <div className="mt-3.5 bg-rose-950/80 border border-rose-600/70 p-3.5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3 animate-pulse">
            <div className="flex items-start gap-2.5">
              <span className="text-2xl p-1 bg-rose-900/60 rounded-xl">{activeAilment.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full">
                    Active Ailment Alert
                  </span>
                  <h4 className="text-sm font-black text-rose-200">{activeAilment.name}</h4>
                </div>
                <p className="text-xs text-rose-100/90 mt-0.5">{activeAilment.description}</p>
                <div className="text-[11px] text-rose-300 font-semibold mt-1">
                  Penalty: {activeAilment.penaltyText}
                </div>
              </div>
            </div>

            {cureItem && (
              <button
                onClick={() => handleBuy(cureItem)}
                disabled={trailPoints < cureItem.cost}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shrink-0 transition shadow-lg ${
                  trailPoints >= cureItem.cost
                    ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-rose-600/30'
                    : 'bg-stone-800 text-stone-400 cursor-not-allowed border border-stone-700'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>
                  {trailPoints >= cureItem.cost
                    ? `Cure Now with ${cureItem.name} (${cureItem.cost} Pts)`
                    : `Need ${cureItem.cost - trailPoints} More Pts to Cure`}
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Filter Tabs & Navigation Subheader */}
      <div className="p-4 sm:p-6 border-b border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            All Items ({TRAIL_OUTFITTER_CATALOG.length})
          </button>
          <button
            onClick={() => setSelectedCategory('wagon_repair')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'wagon_repair'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🛠️ Wagon Repairs &amp; Cures
          </button>
          <button
            onClick={() => setSelectedCategory('camp_betterment')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'camp_betterment'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🏕️ Camp Betterment &amp; Supplies
          </button>
          <button
            onClick={() => setSelectedCategory('gear')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'gear'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🪮 Trail Care Gear
          </button>
          <button
            onClick={() => setSelectedCategory('care')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'care'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            🌾 Feed &amp; Herbs
          </button>
          <button
            onClick={() => setSelectedCategory('ability')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedCategory === 'ability'
                ? 'bg-amber-600 text-white shadow-xs'
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
          const isRepeatable = item.category === 'wagon_repair' || item.category === 'camp_betterment';
          const isOwned = !isRepeatable && purchasedIds.includes(item.id);
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
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                          {item.category.replace('_', ' ')}
                        </span>
                        {isRepeatable && (
                          <span className="text-[9px] uppercase font-bold tracking-wider text-teal-700 bg-teal-100 px-1 py-0.5 rounded flex items-center gap-0.5">
                            <RefreshCw className="w-2.5 h-2.5" /> Maintenance
                          </span>
                        )}
                      </div>
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

                {/* Repair & Betterment Benefits */}
                <div className="bg-stone-50 rounded-xl p-2.5 mb-3 border border-stone-200/60">
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Effects &amp; Benefits:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.effect.fullRestore && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        🛠️ Full 100% Wagon Overhaul
                      </span>
                    )}
                    {item.effect.fullCampRestock && (
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md">
                        🏕️ Full 100% Supplies Restock
                      </span>
                    )}
                    {item.effect.wagonDurability && (
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                        +{item.effect.wagonDurability}% Wagon Durability
                      </span>
                    )}
                    {item.effect.canvasCover && (
                      <span className="text-[11px] font-semibold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                        +{item.effect.canvasCover}% Canvas Shelter
                      </span>
                    )}
                    {item.effect.carrierCushion && (
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md">
                        +{item.effect.carrierCushion}% Crate Cushion
                      </span>
                    )}
                    {item.effect.campComfort && !item.effect.fullCampRestock && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        +{item.effect.campComfort}% Camp Comfort
                      </span>
                    )}
                    {item.effect.feedSupply && (
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                        +{item.effect.feedSupply} lbs Feed
                      </span>
                    )}
                    {item.effect.waterSupply && (
                      <span className="text-[11px] font-semibold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-md">
                        +{item.effect.waterSupply} gal Water
                      </span>
                    )}
                    {item.effect.beddingSupply && (
                      <span className="text-[11px] font-semibold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-md">
                        +{item.effect.beddingSupply} bales Bedding
                      </span>
                    )}
                    {item.clearsAilment && (
                      <span className="text-[11px] font-semibold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-md">
                        ✨ Cures {item.clearsAilment.replace('_', ' ')}
                      </span>
                    )}
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
                    {item.effect.bondXp && (
                      <span className="text-[11px] font-semibold text-pink-800 bg-pink-100 px-2 py-0.5 rounded-md">
                        +{item.effect.bondXp} Herd Bond XP
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
                        ? (item.category === 'wagon_repair' 
                            ? 'bg-amber-700 hover:bg-amber-600 text-white shadow-amber-700/20 hover:scale-[1.02]' 
                            : (item.category === 'camp_betterment'
                                ? 'bg-teal-700 hover:bg-teal-600 text-white shadow-teal-700/20 hover:scale-[1.02]'
                                : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/20 hover:scale-[1.02]'))
                        : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    <Coins className="w-3.5 h-3.5" />
                    <span>
                      {canAfford 
                        ? (isRepeatable 
                            ? (item.category === 'wagon_repair' ? `Repair Wagon (${item.cost} Pts)` : `Better Camp (${item.cost} Pts)`)
                            : `Purchase for ${item.cost} Points`)
                        : `Need ${item.cost - trailPoints} More Points`}
                    </span>
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
