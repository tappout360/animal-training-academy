// WarrenWise Animal Academy - Interactive Livestock & Companion Pet Store & Adoption Studio
// Features:
// 1. Full Selection: 12 Species, Specific Breeds, Authentic Coat Genetics & Colors, and Perks
// 2. Balanced Economy: Shows current Trail Points/Coins, base cost + color rarity modifiers
// 3. Trail Prerequisites: Informs youth which trail unlock is required for each species
// 4. "Earn More Coins on Trails" quick-launch: Rerun any unlocked trail to bank points with bonus questions!

import React, { useState } from 'react';
import { 
  Store, Award, Sparkles, Coins, CheckCircle2, Lock, Unlock, 
  ArrowRight, ShieldCheck, Heart, Info, RefreshCw, Compass
} from 'lucide-react';
import { soundEffects } from '../../utils/audioEffects';
import { PET_STORE_BREEDS, calculatePetPrice } from '../../data/game/petStoreCatalog';

export default function InteractivePetStoreModal({
  isOpen,
  onClose,
  currentCoins = 450,
  completedTrails = [1],
  purchasedPets = ['pet_barnaby_rabbit'],
  onAdoptPet,
  onRerunTrail
}) {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState('rabbits');
  const [selectedBreedId, setSelectedBreedId] = useState('rabbit_holland_lop');
  const [selectedColorId, setSelectedColorId] = useState('tortoise');
  const [adoptionSuccessMsg, setAdoptionSuccessMsg] = useState('');
  const [customPetName, setCustomPetName] = useState('');

  if (!isOpen) return null;

  const currentSpecies = PET_STORE_BREEDS.find(s => s.speciesId === selectedSpeciesId) || PET_STORE_BREEDS[0];
  const currentBreed = currentSpecies.breeds.find(b => b.id === selectedBreedId) || currentSpecies.breeds[0];
  const currentColor = currentBreed.colors.find(c => c.id === selectedColorId) || currentBreed.colors[0];

  const totalCost = calculatePetPrice(selectedSpeciesId, currentBreed.id, currentColor.id);
  const highestTrail = Math.max(1, ...completedTrails);
  const isTrailUnlocked = highestTrail >= currentSpecies.requiredTrail;
  const canAfford = currentCoins >= totalCost;

  // Check if this specific breed & color combination is already owned
  const petUniqueKey = `pet_${currentBreed.id}_${currentColor.id}`;
  const isAlreadyAdopted = purchasedPets.includes(petUniqueKey);

  const handleSelectSpecies = (speciesId) => {
    soundEffects.playTap();
    setSelectedSpeciesId(speciesId);
    const spec = PET_STORE_BREEDS.find(s => s.speciesId === speciesId);
    if (spec && spec.breeds[0]) {
      setSelectedBreedId(spec.breeds[0].id);
      if (spec.breeds[0].colors[0]) {
        setSelectedColorId(spec.breeds[0].colors[0].id);
      }
    }
    setAdoptionSuccessMsg('');
  };

  const handleSelectBreed = (breedId) => {
    soundEffects.playTap();
    setSelectedBreedId(breedId);
    const breed = currentSpecies.breeds.find(b => b.id === breedId);
    if (breed && breed.colors[0]) {
      setSelectedColorId(breed.colors[0].id);
    }
  };

  const handleSelectColor = (colorId) => {
    soundEffects.playTap();
    setSelectedColorId(colorId);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    if (!canAfford || !isTrailUnlocked || isAlreadyAdopted) return;

    soundEffects.playSuccessChime();

    const adoptedRecord = {
      uniqueId: petUniqueKey,
      speciesId: currentSpecies.speciesId,
      speciesName: currentSpecies.speciesName,
      emoji: currentSpecies.emoji,
      breedId: currentBreed.id,
      breedName: currentBreed.name,
      colorId: currentColor.id,
      colorName: currentColor.name,
      colorHex: currentColor.hex,
      customName: customPetName.trim() || `${currentBreed.name} Champion`,
      cost: totalCost,
      bodyType: currentBreed.bodyType,
      specialPerk: currentBreed.specialPerk,
      adoptedAt: new Date().toISOString()
    };

    onAdoptPet(adoptedRecord);
    setAdoptionSuccessMsg(`🎉 Adopted ${adoptedRecord.customName}! Placed in your Permanent Pet Barn stalls.`);
    setCustomPetName('');
    setTimeout(() => {
      setAdoptionSuccessMsg('');
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full border-2 border-amber-400/80 shadow-2xl overflow-hidden text-stone-900 max-h-[92vh] flex flex-col">
        
        {/* Header Bar: Pet Store Brand + Current Coin Balance */}
        <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-stone-900 p-5 sm:p-6 text-white shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-[11px] font-black uppercase tracking-wider mb-1.5 border border-amber-300/30">
              <Store className="w-3.5 h-3.5" />
              <span>Pioneer Livestock &amp; Companion Adoption Center</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Official 4-H Breed, Color &amp; Genetics Store
            </h2>
            <p className="text-xs text-amber-100/90 mt-0.5 max-w-xl">
              Select your authentic ARBA/AKC breed, choose coat genetics, and take your champion onto the trails!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Trail Coin Balance Card */}
            <div className="bg-stone-950/80 border-2 border-amber-400/80 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-lg">
              <Coins className="w-5 h-5 text-amber-400 animate-bounce" />
              <div>
                <div className="text-[9px] uppercase font-bold text-amber-300">Your Trail Coins</div>
                <div className="text-lg font-black font-mono text-amber-300">{currentCoins} <span className="text-xs text-amber-200">PTS</span></div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Store Body Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">

          {/* SECTION 1: 12-SPECIES HORIZONTAL SELECTOR PILLS */}
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-stone-500 mb-2 flex items-center justify-between">
              <span>1. Choose Animal Species (12 Official 4-H Projects)</span>
              <span className="text-[11px] font-bold text-amber-700">Trail Requirements Shown</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {PET_STORE_BREEDS.map((s) => {
                const isSelected = s.speciesId === selectedSpeciesId;
                const isUnlocked = highestTrail >= s.requiredTrail;

                return (
                  <button
                    key={s.speciesId}
                    type="button"
                    onClick={() => handleSelectSpecies(s.speciesId)}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 flex items-center gap-2 border cursor-pointer ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-105'
                        : isUnlocked
                          ? 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                          : 'bg-stone-100 text-stone-400 border-stone-200 opacity-70'
                    }`}
                  >
                    <span className="text-base">{s.emoji}</span>
                    <span>{s.speciesName}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : isUnlocked
                          ? 'bg-emerald-100 text-emerald-800 font-bold'
                          : 'bg-stone-200 text-stone-600'
                    }`}>
                      {isUnlocked ? `Trail ${s.requiredTrail}+` : `🔒 Req. Trail ${s.requiredTrail}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: BREED SELECTION + COLOR GENETICS + LIVE PREVIEW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* LEFT (7 Cols): Breed Choices & Coat Colors */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Breed Picker */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1.5">
                  Available Breeds ({currentSpecies.breeds.length})
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSpecies.breeds.map((b) => {
                    const isSelected = b.id === currentBreed.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => handleSelectBreed(b.id)}
                        className={`p-3 rounded-2xl text-left border transition cursor-pointer ${
                          isSelected
                            ? 'bg-amber-50 border-amber-600 ring-2 ring-amber-500/20 shadow-xs'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        <div className="font-black text-xs text-stone-900">{b.name}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          {b.bodyType} • {b.idealWeight}
                        </div>
                        <div className="text-[10px] text-emerald-700 font-semibold mt-1">
                          ✨ {b.specialPerk}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coat Color & Genetic Variety Picker */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1.5 flex items-center justify-between">
                  <span>Select Coat Color Variety</span>
                  <span className="text-[11px] font-bold text-amber-700">{currentColor.rarity} Tier</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentBreed.colors.map((c) => {
                    const isSelected = c.id === currentColor.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleSelectColor(c.id)}
                        className={`p-2.5 rounded-2xl border transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400'
                            : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-5 h-5 rounded-full border border-black/20 shadow-xs shrink-0" 
                            style={{ backgroundColor: c.hex }} 
                          />
                          <div className="text-left">
                            <div className="text-xs font-bold leading-tight">{c.name}</div>
                            <div className={`text-[10px] ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                              {c.rarity}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[11px] font-mono font-black ${
                          isSelected ? 'text-amber-300' : 'text-stone-700'
                        }`}>
                          {c.priceModifier > 0 ? `+${c.priceModifier} pts` : 'Standard'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Pet Name Input */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                  Name Your Champion (Optional)
                </label>
                <input
                  type="text"
                  maxLength={24}
                  value={customPetName}
                  onChange={(e) => setCustomPetName(e.target.value)}
                  placeholder={`e.g. ${currentBreed.name} Star`}
                  className="w-full text-xs font-bold py-2.5 px-3.5 rounded-xl border border-stone-300 bg-stone-50 focus:outline-amber-600"
                />
              </div>

            </div>

            {/* RIGHT (5 Cols): Live Animal Showcase & Purchase Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white rounded-3xl p-5 border border-stone-800 flex flex-col justify-between space-y-4 shadow-xl">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{currentSpecies.emoji}</span>
                    <div>
                      <h3 className="text-sm font-black text-white">{currentBreed.name}</h3>
                      <div className="text-[11px] text-amber-300 font-medium">{currentColor.name}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950">
                    {currentColor.rarity}
                  </span>
                </div>

                {/* Visual Animal Avatar & Swatch Box */}
                <div 
                  className="h-36 rounded-2xl border-2 border-white/15 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-inner"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentColor.hex}33 0%, rgba(20,20,24,0.95) 100%)` 
                  }}
                >
                  <div className="text-5xl animate-bounce mb-1">{currentSpecies.emoji}</div>
                  <div className="text-xs font-black text-white">
                    {customPetName || currentBreed.name}
                  </div>
                  <div className="text-[10px] text-stone-300 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block border border-white/50" style={{ backgroundColor: currentColor.hex }} />
                    <span>{currentColor.name} ({currentBreed.bodyType})</span>
                  </div>
                </div>

                {/* Traits & Standard of Perfection Specs */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 space-y-2 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Breed Registry:</span>
                    <span className="font-bold text-white">{currentSpecies.arbaRegistry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Ideal Show Weight:</span>
                    <span className="font-bold text-white">{currentBreed.idealWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Special Trail Perk:</span>
                    <span className="font-bold text-emerald-300 text-right">{currentBreed.specialPerk}</span>
                  </div>
                </div>
              </div>

              {/* Price & Purchase Action */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">Adoption Investment:</span>
                  <div className="flex items-center gap-1.5 text-xl font-black font-mono text-amber-300">
                    <Coins className="w-5 h-5 text-amber-400" />
                    <span>{totalCost}</span>
                    <span className="text-xs text-amber-200">PTS</span>
                  </div>
                </div>

                {/* Success Banner */}
                {adoptionSuccessMsg && (
                  <div className="p-3 bg-emerald-950/90 border border-emerald-400 text-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{adoptionSuccessMsg}</span>
                  </div>
                )}

                {/* Adopt Button */}
                {isAlreadyAdopted ? (
                  <div className="w-full py-3 bg-stone-800 text-stone-400 text-center rounded-2xl text-xs font-bold border border-stone-700">
                    ✓ You already own this breed &amp; color variety!
                  </div>
                ) : !isTrailUnlocked ? (
                  <div className="w-full p-3 bg-amber-950/80 border border-amber-500/50 rounded-2xl text-xs text-amber-200 text-center space-y-2">
                    <div className="font-bold flex items-center justify-center gap-1.5">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>Requires Reaching Trail #{currentSpecies.requiredTrail}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onRerunTrail(Math.min(10, currentSpecies.requiredTrail - 1));
                        onClose();
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-[11px] transition cursor-pointer"
                    >
                      Play Trails to Unlock →
                    </button>
                  </div>
                ) : canAfford ? (
                  <button
                    type="button"
                    onClick={handlePurchase}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Adopt {currentBreed.name} ({totalCost} pts)</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="text-[11px] text-rose-300 font-bold text-center">
                      Need {totalCost - currentCoins} more coins to adopt this variety!
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onRerunTrail(highestTrail);
                        onClose();
                      }}
                      className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Rerun Trail #{highestTrail} to Bank Coins (+Bonus Trivia)</span>
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* SECTION 3: TRAIL REPLAY & COIN BALANCING EXPLANATION */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="font-black text-stone-900">Need more coins for your next project pet?</span>
                <p className="text-stone-500">
                  Rerun earlier trails anytime! Correctly answering standard questions yields 75–110 pts, while nailing <strong>Bonus Speed Trivia</strong> adds up to +75 extra coins!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onRerunTrail(highestTrail);
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-black bg-stone-900 hover:bg-stone-800 text-white shrink-0 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Replay Trail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
