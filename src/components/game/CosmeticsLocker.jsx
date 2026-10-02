// WarrenWise Animal Academy - Herd Trail Quest
// Fortnite-Style Cosmetics Locker: 100% Earned Through Learning, Non-Pay-To-Win

import React, { useState } from 'react';
import { 
  Shirt, Sparkles, Wand2, Smile, Wind, Home, 
  Lock, CheckCircle2, Shield, Eye, Award
} from 'lucide-react';
import { ALL_COSMETICS, COSMETIC_TYPES, COSMETIC_RARITIES } from '../../data/game/cosmeticsCatalog';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

const TYPE_ICON_MAP = {
  traveler_skin: Shirt,
  companion_skin: Sparkles,
  trail_gear: Wand2,
  emote: Smile,
  arrival_effect: Wind,
  habitat_decor: Home
};

export default function CosmeticsLocker({
  questState,
  onEquipCosmetic
}) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const unlockedSet = new Set(questState.unlockedCosmeticIds || []);
  const equipped = questState.equippedCosmetics || {};

  const filteredItems = ALL_COSMETICS.filter(item => {
    if (selectedType === 'all') return true;
    return item.type === selectedType;
  });

  const handleEquip = (item) => {
    if (!unlockedSet.has(item.id)) return;
    onEquipCosmetic(item.type, item.id);
    setSelectedItem(item);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-50 text-purple-800 text-[11px] font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Learning Reward Locker</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Trail Cosmetics Locker</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Equip custom outfits, companion styles, emotes, and campsite decor earned along the trail.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <div className="text-xs font-bold text-slate-500">Inventory Status</div>
          <div className="text-sm font-black text-purple-700">
            {unlockedSet.size} of {ALL_COSMETICS.length} Items Unlocked
          </div>
        </div>
      </div>

      {/* Equipped Showcase Strip */}
      <div className="p-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20">
            ✨
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-purple-300 font-bold">Currently Equipped Look</div>
            <div className="text-sm font-black text-white">
              {ALL_COSMETICS.find(c => c.id === equipped.traveler_skin)?.name || 'Trail Blazer'} • {ALL_COSMETICS.find(c => c.id === equipped.companion_skin)?.name || 'Natural Coat'}
            </div>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-purple-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
          100% Visual • Non-Pay-To-Win
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {COSMETIC_TYPES.map(t => (
          <button
            key={t.id}
            onClick={() => setSelectedType(t.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              selectedType === t.id
                ? 'bg-purple-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => {
          const isUnlocked = unlockedSet.has(item.id);
          const isEquipped = equipped[item.type] === item.id;
          const rarity = COSMETIC_RARITIES[item.rarity] || COSMETIC_RARITIES.COMMON;
          const IconComp = TYPE_ICON_MAP[item.type] || Sparkles;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isEquipped
                  ? 'bg-purple-50/70 border-purple-500 shadow-sm ring-2 ring-purple-500/20'
                  : isUnlocked
                    ? 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-xs'
                    : 'bg-slate-50 border-slate-200/60 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isUnlocked ? `bg-gradient-to-br ${rarity.color} text-white` : 'bg-slate-200 text-slate-400'
                  }`}>
                    {isUnlocked ? <IconComp className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${rarity.bg}`}>
                    {rarity.label}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  {item.name}
                  {isEquipped && <CheckCircle2 className="w-4 h-4 text-purple-600" />}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium truncate max-w-[150px]">
                  {item.unlockCriteria}
                </span>

                {isUnlocked ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEquip(item);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      isEquipped
                        ? 'bg-purple-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isEquipped ? 'Equipped' : 'Equip'}
                  </button>
                ) : (
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
