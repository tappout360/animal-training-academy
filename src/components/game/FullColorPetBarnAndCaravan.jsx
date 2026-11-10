// WarrenWise Animal Academy - Full-Color Interactive Pet Barn, 10-Trail Selector & Multi-Cage Caravan Studio
// Features LIVE DRAG-AND-DROP & RUB/SWIPE HANDS-ON INTERACTIONS:
// - Drag Food (Hay, Pellets, Vitamin C Pepper, Grit, Browse) directly to your pet!
// - Drag Water Bottle over to pour & fill hydration!
// - Drag & Rub the Show Brush back-and-forth across the pet to scrub away trail dust!
// - Drag the Scoop Shovel over soiled droppings to clean the stall & spread fresh shavings!
// - Hold & Stroke your hand across the pet to Fill With Love!
// - Drag the Spare Hickory Wheel onto the broken wagon axle & drag the Vet Stethoscope to check gut sounds!

import React, { useState, useRef } from 'react';
import {
  Sparkles, Heart, ShieldCheck, Lock, Unlock, Wrench,
  Award, CheckCircle2, Flame, Droplets, Compass, Plus,
  Stethoscope, Truck, Home, Volume2, ArrowRight, RefreshCw, Hand, BookOpen
} from 'lucide-react';
import { soundEffects } from '../../utils/audioEffects';
import { SPECIES_KNOWLEDGE_CARDS } from '../../data/speciesKnowledgeCards';

export const TEN_TRAIL_PROGRESSION = [
  {
    trailNumber: 1,
    name: 'Trail 1: Clover Meadows Homestead',
    miles: 100,
    stations: 10,
    unlockedCages: 1,
    biomeColor: 'from-emerald-600 to-green-700',
    badge: '🌱 Foundations',
    focus: 'Basic Daily Care (Feed, Water, Brush, Clean, Love) & Safe Handling',
    signatureHazard: 'Dusty Alkali Flats & Loose Sipper Ball-Spout'
  },
  {
    trailNumber: 2,
    name: 'Trail 2: Timberline Ridge & Pine Pass',
    miles: 140,
    stations: 12,
    unlockedCages: 1,
    biomeColor: 'from-teal-700 to-emerald-800',
    badge: '🌲 Sharp Eyes',
    focus: 'Dropping Detective, Heat/Frost Safety & Predator Feed Vaults',
    signatureHazard: '🐻 Midnight Black Bear Feed Raid & Thrown Iron Tire'
  },
  {
    trailNumber: 3,
    name: 'Trail 3: Red Rock Canyon & Cavy Gulch',
    miles: 180,
    stations: 14,
    unlockedCages: 2,
    biomeColor: 'from-amber-600 to-orange-700',
    badge: '📦📦 2 Cages Unlocked!',
    focus: 'Multi-Pet Care: Rabbit + Cavy (Daily Vitamin C & Solid Floor Rules)',
    signatureHazard: '90°F Canyon Heatwave & Vitamin C Deficiency Risk'
  },
  {
    trailNumber: 4,
    name: 'Trail 4: Whispering Willows & Poultry Hollow',
    miles: 220,
    stations: 15,
    unlockedCages: 2,
    biomeColor: 'from-cyan-700 to-blue-800',
    badge: '🐓 Poultry Unlocked',
    focus: '8-Point Showmanship Exam, Wing-Mite Check & Insoluble Grit',
    signatureHazard: '🐺 Night Coyote Pack Prowl & Flooded Ferry'
  },
  {
    trailNumber: 5,
    name: 'Trail 5: High Divide Goat & Small Stock Pass',
    miles: 260,
    stations: 17,
    unlockedCages: 3,
    biomeColor: 'from-purple-700 to-indigo-800',
    badge: '📦📦📦 3 Cages Unlocked!',
    focus: 'Hoof Pick Frog Care, Elevated Browse & 15s Judge Oral Defense',
    signatureHazard: 'Granite Boulder Axle Snap & Toxic Water Hemlock'
  },
  {
    trailNumber: 6,
    name: 'Trail 6: Heartland Prairie & Ethics Crossroads',
    miles: 300,
    stations: 18,
    unlockedCages: 3,
    biomeColor: 'from-yellow-600 to-amber-700',
    badge: '🐑 Sheep Unlocked',
    focus: 'Zero-Copper Sheep Rule, Wool Carding & Ring Integrity Ethics',
    signatureHazard: 'Prairie Gale Torn Canvas & Copper Mineral Mix-Up'
  },
  {
    trailNumber: 7,
    name: 'Trail 7: Blue Ridge Multi-Species Expedition',
    miles: 350,
    stations: 20,
    unlockedCages: 4,
    biomeColor: 'from-blue-700 to-indigo-900',
    badge: '📦📦📦📦 4 Cages Unlocked!',
    focus: 'Swine Cool Mist (No Sweat Glands!), ADG Math & 4-Animal Judging',
    signatureHazard: 'Muddy Bridge Washout & Swine Heat Stress'
  },
  {
    trailNumber: 8,
    name: 'Trail 8: Silver Spur Ranch & Leadership Trail',
    miles: 400,
    stations: 22,
    unlockedCages: 4,
    biomeColor: 'from-rose-700 to-amber-800',
    badge: '🐴 Equine Unlocked',
    focus: 'Quarter System Showmanship, Colic Prevention & Mentoring Youth',
    signatureHazard: 'Thunder Stampede Scare & Grain Overload Alert'
  },
  {
    trailNumber: 9,
    name: 'Trail 9: Governor’s State Fair Qualifier',
    miles: 450,
    stations: 24,
    unlockedCages: 5,
    biomeColor: 'from-indigo-800 to-purple-950',
    badge: '🚛 5 Cages Unlocked!',
    focus: '3-Generation ARBA Pedigree Audit, CVI Health Papers & Quarantine',
    signatureHazard: 'State Line Biosecurity Gate & Multi-Pet Heat Triage'
  },
  {
    trailNumber: 10,
    name: 'Trail 10: National Grand Championship Odyssey',
    miles: 500,
    stations: 26,
    unlockedCages: 6,
    biomeColor: 'from-amber-500 via-purple-800 to-slate-900',
    badge: '🏆 All 6 Cages Unlocked!',
    focus: 'Full 6-Species Show String & Supreme Round-Robin Finale',
    signatureHazard: 'All Frontier Calamities + National Judge Panel'
  }
];

export const PERSISTENT_BARN_PETS = SPECIES_KNOWLEDGE_CARDS.map(card => ({
  id: card.petId,
  rank: card.rank,
  name: card.petName,
  species: card.speciesName,
  breed: card.breed,
  emoji: card.emoji,
  difficultyRank: card.difficultyRank,
  difficultyBadge: card.difficultyBadge,
  projectType: card.projectType,
  spaceNeeds: card.spaceNeeds,
  dailyCare: card.dailyCare,
  costLevel: card.costLevel,
  keyStrengths: card.keyStrengths,
  keyChallenges: card.keyChallenges,
  coreLearningTopics: card.coreLearningTopics,
  showFocus: card.showFocus,
  showmanshipDetails: card.showmanshipDetails,
  specialNotes: card.specialNotes,
  stallTheme: card.stallTheme,
  accentBadge: card.accentBadge,
  ribbonsWon: card.ribbonsWon,
  foodEmoji: card.foodEmoji,
  foodLabel: card.foodLabel,
  specialEmoji: card.specialEmoji,
  specialCareName: card.specialCareName,
  specialCareTool: card.specialCareTool,
  specialCareWhy: `${card.dailyCare} (${card.specialNotes})`,
  cautionRule: card.keyChallenges
}));

export const DRAGGABLE_CARE_TOOLS = [
  {
    id: 'feed',
    name: 'Drag Food to Pet',
    emoji: '🌾',
    color: 'from-amber-400 to-orange-500',
    instruction: 'Drag & drop onto pet (or rub over feeder) to nourish!',
    statLabel: '+20 Fullness & Vigor'
  },
  {
    id: 'water',
    name: 'Drag Water Bottle',
    emoji: '💧',
    color: 'from-cyan-400 to-blue-600',
    instruction: 'Drag & drop onto pet to fill water & check ball-spout!',
    statLabel: '+25 Hydration'
  },
  {
    id: 'brush',
    name: 'Drag & Rub Brush',
    emoji: '🪮',
    color: 'from-purple-400 to-indigo-600',
    instruction: 'Drag onto pet or rub back-and-forth across coat to remove dust!',
    statLabel: '+25 Coat Sheen'
  },
  {
    id: 'clean',
    name: 'Drag Scoop & Bedding',
    emoji: '🧹',
    color: 'from-emerald-400 to-green-600',
    instruction: 'Drag over soiled stall droppings to scoop & spread pine flakes!',
    statLabel: '+25 Pen Hygiene'
  },
  {
    id: 'love',
    name: 'Drag & Stroke Love',
    emoji: '💖',
    color: 'from-pink-400 to-rose-600',
    instruction: 'Drag onto pet or stroke gently across forehead to Fill With Love!',
    statLabel: '+25 Bond / -20 Stress'
  },
  {
    id: 'special',
    name: 'Drag Special Check Tool',
    emoji: '🩺',
    color: 'from-yellow-400 to-amber-600',
    instruction: 'Drag species tool (Vitamin C, Hoof Pick, Cool Mist, Penlight) to pet!',
    statLabel: '+30 Show Readiness'
  }
];

export default function FullColorPetBarnAndCaravan({
  questState,
  onBoostCareMetric
}) {
  const [selectedTrailNum, setSelectedTrailNum] = useState(1);
  const [bonusUnlockedCages, setBonusUnlockedCages] = useState(1); // Start with 2 cages ready to play!
  const [loadedPetIds, setLoadedPetIds] = useState(['pet_barnaby_rabbit', 'pet_pippin_cavy']);
  const [activeCheckpointPetId, setActiveCheckpointPetId] = useState('pet_barnaby_rabbit');

  // Active tool selected for rub/drag interaction
  const [selectedToolId, setSelectedToolId] = useState('feed');
  const [draggedToolId, setDraggedToolId] = useState(null);
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState([]);
  const lastRubTimeRef = useRef(0);

  // Persistent per-pet care state in the barn & on trail
  const [petStats, setPetStats] = useState(() => {
    const initial = {};
    PERSISTENT_BARN_PETS.forEach(p => {
      initial[p.id] = {
        fullness: 65,
        hydration: 60,
        coat: 62,
        hygiene: 55,
        bond: 70,
        specialProgress: 50,
        stress: 18,
        dirtSpots: [
          { id: 1, x: 25, y: 65, cleaned: false },
          { id: 2, x: 55, y: 72, cleaned: false },
          { id: 3, x: 75, y: 62, cleaned: false }
        ],
        droppings: [
          { id: 1, x: 20, y: 82, cleaned: false },
          { id: 2, x: 48, y: 85, cleaned: false },
          { id: 3, x: 78, y: 80, cleaned: false }
        ]
      };
    });
    return initial;
  });

  // Interactive Mini-Games State (Before & After Visual Transformations: false = BEFORE/BROKEN, true = AFTER/FIXED)
  const [scenarioFixes, setScenarioFixes] = useState({
    wheel: false,    // Broken Wheel in Gulch -> Fixed Hickory Wheel & Rolling Wagon
    storm: false,    // Freezing Rain & Torn Roof -> Warm Dry Oilcloth Tent & Lantern
    bear: false,     // Bear-Smashed Tailgate -> Iron-Bound Tailgate & Bear-Proof Vault
    sickness: false  // Hunched GI Slowdown -> Vet-Cleared Bright-Eyed Champion
  });
  const [openKnowledgeCardId, setOpenKnowledgeCardId] = useState(null);
  const [liveToast, setLiveToast] = useState(null);

  const selectedTrail = TEN_TRAIL_PROGRESSION.find(t => t.trailNumber === selectedTrailNum) || TEN_TRAIL_PROGRESSION[0];
  const totalUnlockedCages = Math.min(6, selectedTrail.unlockedCages + bonusUnlockedCages);

  const activePet = PERSISTENT_BARN_PETS.find(p => p.id === activeCheckpointPetId) || PERSISTENT_BARN_PETS[0];
  const activePetStat = petStats[activePet.id] || petStats.pet_barnaby_rabbit;

  const triggerToast = (msg) => {
    setLiveToast(msg);
    setTimeout(() => setLiveToast(null), 3500);
  };

  const spawnParticle = (emoji, x = 50, y = 45) => {
    const id = `${Date.now()}_${Math.random()}`;
    setFloatingParticles(prev => [...prev.slice(-8), { id, emoji, x, y }]);
    setTimeout(() => {
      setFloatingParticles(prev => prev.filter(p => p.id !== id));
    }, 1100);
  };

  // Core handler when a tool is dropped or rubbed on the active pet
  const applyToolToPet = (petId, toolId, increment = 25) => {
    const pet = PERSISTENT_BARN_PETS.find(p => p.id === petId) || activePet;

    setPetStats(prev => {
      const cur = prev[pet.id];
      const next = { ...cur };

      if (toolId === 'feed') {
        soundEffects.playMunch();
        next.fullness = Math.min(100, cur.fullness + increment);
        next.stress = Math.max(0, cur.stress - 5);
        spawnParticle(pet.foodEmoji || '🌾', 45 + Math.random() * 20, 40);
        if (increment >= 20) {
          triggerToast(`🌾 Fed ${pet.name} ${pet.foodLabel}! Crunchy fiber boosts gut health! (+${increment}% Fullness)`);
        }
      } else if (toolId === 'water') {
        soundEffects.playWater();
        next.hydration = Math.min(100, cur.hydration + increment);
        next.stress = Math.max(0, cur.stress - 6);
        spawnParticle('💧', 55 + Math.random() * 15, 38);
        if (increment >= 20) {
          triggerToast(`💧 Poured cool spring water & checked ball-spout for ${pet.name}! (+${increment}% Hydration)`);
        }
      } else if (toolId === 'brush') {
        soundEffects.playGroom();
        next.coat = Math.min(100, cur.coat + increment);
        // Clean one dirt spot
        const uncleanedIdx = cur.dirtSpots.findIndex(d => !d.cleaned);
        if (uncleanedIdx !== -1) {
          next.dirtSpots = cur.dirtSpots.map((d, i) => i === uncleanedIdx ? { ...d, cleaned: true } : d);
        }
        spawnParticle('✨', 40 + Math.random() * 25, 35);
        if (increment >= 20) {
          triggerToast(`🪮 Brushed ${pet.name}’s coat! Trail dust scrubbed away for a mirror show sheen! (+${increment}% Coat)`);
        }
      } else if (toolId === 'clean') {
        soundEffects.playRustle();
        next.hygiene = Math.min(100, cur.hygiene + increment);
        const uncleanedDrop = cur.droppings.findIndex(d => !d.cleaned);
        if (uncleanedDrop !== -1) {
          next.droppings = cur.droppings.map((d, i) => i === uncleanedDrop ? { ...d, cleaned: true } : d);
        }
        spawnParticle('🪵', 50 + Math.random() * 20, 70);
        if (increment >= 20) {
          triggerToast(`🧹 Scooped soiled droppings & spread fresh kiln-dried shavings for ${pet.name}! (+${increment}% Hygiene)`);
        }
      } else if (toolId === 'love') {
        soundEffects.playPurr();
        next.bond = Math.min(100, cur.bond + increment);
        next.stress = Math.max(0, cur.stress - 12);
        spawnParticle('💖', 48 + Math.random() * 18, 30);
        if (increment >= 20) {
          triggerToast(`💖 Gentle forehead-to-shoulder strokes! ${pet.name} is tooth-purring with love! (+${increment}% Bond)`);
        }
      } else if (toolId === 'special') {
        soundEffects.playSuccessChime();
        next.specialProgress = Math.min(100, cur.specialProgress + increment);
        next.stress = Math.max(0, cur.stress - 8);
        spawnParticle(pet.specialEmoji || '🌟', 50, 35);
        if (increment >= 20) {
          triggerToast(`🌟 ${pet.name}: Completed ${pet.specialCareName}! (${pet.specialCareWhy})`);
        }
      }

      return { ...prev, [pet.id]: next };
    });

    if (onBoostCareMetric) {
      onBoostCareMetric(toolId === 'water' ? 'water' : toolId === 'brush' ? 'brush' : 'calm');
    }
  };

  // Rubbing / dragging pointer across the pet stage
  const handleStagePointerMove = (e) => {
    if (e.buttons !== 1) return; // Only when holding mouse / touch down
    const now = Date.now();
    if (now - lastRubTimeRef.current > 240) {
      lastRubTimeRef.current = now;
      applyToolToPet(activePet.id, selectedToolId, 8);
    }
  };

  // Toggle loading/unloading a pet into an unlocked Wagon Cage Slot
  const handleToggleLoadPet = (petId) => {
    soundEffects.playTap();
    if (loadedPetIds.includes(petId)) {
      if (loadedPetIds.length === 1) {
        triggerToast('You must keep at least 1 project animal loaded in your Trail Wagon!');
        return;
      }
      const updated = loadedPetIds.filter(id => id !== petId);
      setLoadedPetIds(updated);
      if (activeCheckpointPetId === petId) {
        setActiveCheckpointPetId(updated[0]);
      }
      triggerToast('Returned pet safely to their cozy Barn Stall.');
    } else {
      if (loadedPetIds.length >= totalUnlockedCages) {
        soundEffects.playAlert();
        triggerToast(`All ${totalUnlockedCages} Wagon Cage Slots are full! Click "+1 Unlock Extra Cage Slot" above to add space!`);
        return;
      }
      const updated = [...loadedPetIds, petId];
      setLoadedPetIds(updated);
      setActiveCheckpointPetId(petId);
      soundEffects.playSuccessChime();
      const petObj = PERSISTENT_BARN_PETS.find(p => p.id === petId);
      triggerToast(`Loaded ${petObj?.name} (${petObj?.species}) into Wagon Cage #${updated.length}!`);
    }
  };

  // Reset dirt & droppings to practice dragging again
  const handleResetMessForPractice = () => {
    soundEffects.playTap();
    setPetStats(prev => {
      const cur = prev[activePet.id];
      return {
        ...prev,
        [activePet.id]: {
          ...cur,
          fullness: 50,
          hydration: 50,
          coat: 50,
          hygiene: 45,
          specialProgress: 40,
          dirtSpots: [
            { id: 1, x: 25, y: 65, cleaned: false },
            { id: 2, x: 55, y: 72, cleaned: false },
            { id: 3, x: 75, y: 62, cleaned: false }
          ],
          droppings: [
            { id: 1, x: 20, y: 82, cleaned: false },
            { id: 2, x: 48, y: 85, cleaned: false },
            { id: 3, x: 78, y: 80, cleaned: false }
          ]
        }
      };
    });
    triggerToast(`Simulated a full day of trail travel for ${activePet.name}! Drag food, water, brush, and scoop onto the stage!`);
  };

  const compositeReadiness = Math.round(
    (activePetStat.fullness +
      activePetStat.hydration +
      activePetStat.coat +
      activePetStat.hygiene +
      activePetStat.bond +
      activePetStat.specialProgress) / 6
  );

  return (
    <div className="space-y-6">
      {/* Live Feedback Toast Banner */}
      {liveToast && (
        <div className="sticky top-3 z-40 bg-emerald-950/95 border-2 border-emerald-400 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
            <Sparkles className="w-5 h-5 text-amber-300 shrink-0 animate-spin" />
            <span>{liveToast}</span>
          </div>
          <button
            onClick={() => setLiveToast(null)}
            className="text-[11px] font-bold text-emerald-300 hover:text-white px-2 py-0.5 rounded bg-emerald-900"
          >
            OK
          </button>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SECTION 1: LIVE HANDS-ON DRAG-AND-DROP & RUB PET CARE WORKBENCH        */}
      {/* ===================================================================== */}
      <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-slate-950 text-white rounded-3xl p-5 sm:p-6 border-2 border-amber-400/60 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full mb-1">
              <Hand className="w-3.5 h-3.5" /> 100% Hands-On Drag-and-Drop &amp; Rub Pet Care Studio
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Drag Food, Water, Brush &amp; Scoop Directly Onto {activePet.name} ({activePet.species})!
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Grab any tool below and <strong>drag it onto {activePet.name}</strong>—or select a tool and <strong>hold &amp; rub back-and-forth</strong> across the stall to feed, hydrate, scrub dust spots, scoop droppings, and fill with love!
            </p>
          </div>

          {/* Switch Active Pet Pill Selector */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {PERSISTENT_BARN_PETS.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  soundEffects.playTap();
                  setActiveCheckpointPetId(p.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition cursor-pointer ${
                  activePet.id === p.id
                    ? 'bg-amber-400 text-stone-950 shadow-md scale-105'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600'
                }`}
              >
                <span className="text-base">{p.emoji}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Workbench Grid: Left = 6 Draggable Tools, Right = Interactive Drop & Rub Animal Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT: 6 Draggable Care Tools */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            <div className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center justify-between">
              <span>1. Grab &amp; Drag Any Tool Onto {activePet.name} 👉</span>
              <button
                type="button"
                onClick={handleResetMessForPractice}
                className="text-[11px] text-emerald-300 hover:text-white underline cursor-pointer flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> New Trail Day Mess
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {DRAGGABLE_CARE_TOOLS.map(tool => {
                const isSelected = selectedToolId === tool.id;
                const displayEmoji =
                  tool.id === 'feed'
                    ? activePet.foodEmoji
                    : tool.id === 'special'
                    ? activePet.specialEmoji
                    : tool.emoji;
                const displayName =
                  tool.id === 'feed'
                    ? `Drag ${activePet.foodLabel.split(' ')[0]} Food`
                    : tool.id === 'special'
                    ? activePet.specialCareTool
                    : tool.name;

                return (
                  <div
                    key={tool.id}
                    draggable
                    onDragStart={(e) => {
                      setDraggedToolId(tool.id);
                      setSelectedToolId(tool.id);
                      e.dataTransfer.setData('text/plain', tool.id);
                    }}
                    onDragEnd={() => {
                      setDraggedToolId(null);
                      setIsOverDropZone(false);
                    }}
                    onClick={() => {
                      setSelectedToolId(tool.id);
                      applyToolToPet(activePet.id, tool.id, 20);
                    }}
                    className={`p-3 rounded-2xl border-2 cursor-grab active:cursor-grabbing select-none transition-all flex flex-col justify-between ${
                      isSelected
                        ? `bg-gradient-to-br ${tool.color} border-white text-white shadow-lg scale-[1.02]`
                        : 'bg-stone-900/90 border-stone-700 hover:border-amber-400/60 text-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl drop-shadow">{displayEmoji}</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-black/30 text-amber-200">
                        Drag / Tap
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="font-black text-xs sm:text-sm leading-tight">{displayName}</div>
                      <div className="text-[10px] opacity-90 mt-0.5">{tool.statLabel}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-[11px] text-stone-300 leading-relaxed space-y-1.5">
              <div>
                <strong className="text-amber-300">Daily Care ({activePet.species}):</strong> {activePet.specialCareWhy}
              </div>
              <div className="pt-1 border-t border-white/10 text-purple-200">
                <strong className="text-purple-300">🏆 Showmanship Technique:</strong> {activePet.showmanshipDetails}
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Drop & Rub Animal Stall Stage */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                if (!isOverDropZone) setIsOverDropZone(true);
              }}
              onDragLeave={() => setIsOverDropZone(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsOverDropZone(false);
                const droppedId = e.dataTransfer.getData('text/plain') || draggedToolId || selectedToolId;
                if (droppedId) {
                  applyToolToPet(activePet.id, droppedId, 28);
                }
              }}
              onPointerDown={() => {
                applyToolToPet(activePet.id, selectedToolId, 15);
              }}
              onPointerMove={handleStagePointerMove}
              className={`relative flex-1 min-h-[300px] rounded-3xl bg-gradient-to-b ${activePet.stallTheme} border-4 transition-all overflow-hidden select-none cursor-pointer flex flex-col justify-between p-5 ${
                isOverDropZone
                  ? 'border-amber-300 ring-4 ring-amber-400/50 scale-[1.01]'
                  : 'border-white/30 shadow-inner'
              }`}
            >
              {/* Top Stage Status Bar */}
              <div className="flex items-center justify-between gap-2 z-10">
                <div className="bg-black/50 backdrop-blur-xs border border-white/20 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-2">
                  <span>🏡 {activePet.name}’s Interactive Stall</span>
                  <span className="text-amber-300">· Readiness: {compositeReadiness}%</span>
                </div>
                <div className="bg-amber-400 text-stone-950 px-3 py-1 rounded-full text-xs font-black shadow">
                  {isOverDropZone ? '🎯 Release to Apply Care!' : '👋 Drop Tool Here or Rub Across Pet!'}
                </div>
              </div>

              {/* Center Interactive Pet Avatar + Clickable Dirt Spots & Droppings */}
              <div className="relative my-auto py-4 flex flex-col items-center justify-center">
                {/* Floating Particles */}
                {floatingParticles.map(pt => (
                  <div
                    key={pt.id}
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                    className="absolute text-4xl pointer-events-none animate-bounce z-30 drop-shadow-lg"
                  >
                    {pt.emoji}
                  </div>
                ))}

                {/* Main Animal Character */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/20 backdrop-blur-xs border-4 border-white/50 flex items-center justify-center text-7xl sm:text-8xl shadow-2xl transition-transform hover:scale-110 active:scale-95">
                  {activePet.emoji}
                </div>

                <div className="mt-2 text-center">
                  <span className="bg-black/45 text-white text-xs font-black px-3.5 py-1 rounded-full border border-white/20">
                    {compositeReadiness >= 85
                      ? `🌟 ${activePet.name} is in Peak Championship Bloom!`
                      : `Drag ${activePet.foodEmoji} Food, 💧 Water, 🪮 Brush & 🧹 Scoop onto ${activePet.name}!`}
                  </span>
                </div>

                {/* Interactive Trail Dust Spots on Coat (Click or Brush to Scrub Off!) */}
                {activePetStat.dirtSpots.map(spot => !spot.cleaned && (
                  <button
                    key={`dirt_${spot.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      applyToolToPet(activePet.id, 'brush', 25);
                    }}
                    style={{ left: `${spot.x}%`, top: `${spot.y - 25}%` }}
                    className="absolute bg-amber-900/90 hover:bg-amber-700 border-2 border-amber-300 text-amber-100 text-[10px] font-black px-2 py-1 rounded-full shadow-lg animate-pulse cursor-pointer"
                    title="Click or drag Brush to scrub off trail dust!"
                  >
                    💨 Trail Dust (Brush Me!)
                  </button>
                ))}

                {/* Interactive Soiled Droppings on Stall Floor (Click or Drag Scoop to Clean!) */}
                {activePetStat.droppings.map(drop => !drop.cleaned && (
                  <button
                    key={`drop_${drop.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      applyToolToPet(activePet.id, 'clean', 25);
                    }}
                    style={{ left: `${drop.x}%`, top: `${drop.y}%` }}
                    className="absolute bg-stone-900/90 hover:bg-stone-700 border-2 border-emerald-300 text-emerald-200 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg cursor-pointer"
                    title="Click or drag Scoop to clean soiled bedding!"
                  >
                    🧹 Soiled Spot (Scoop Me!)
                  </button>
                ))}
              </div>

              {/* Bottom 6 Live Progress Meters */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-black/55 backdrop-blur-xs p-3 rounded-2xl border border-white/15 z-10 text-[10px] font-bold">
                <div>
                  <div className="flex justify-between text-amber-200">
                    <span>{activePet.foodEmoji} Feed</span>
                    <span>{activePetStat.fullness}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-amber-400 transition-all" style={{ width: `${activePetStat.fullness}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-cyan-200">
                    <span>💧 Water</span>
                    <span>{activePetStat.hydration}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-cyan-400 transition-all" style={{ width: `${activePetStat.hydration}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-purple-200">
                    <span>🪮 Coat</span>
                    <span>{activePetStat.coat}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-purple-400 transition-all" style={{ width: `${activePetStat.coat}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-emerald-200">
                    <span>🧹 Clean</span>
                    <span>{activePetStat.hygiene}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-emerald-400 transition-all" style={{ width: `${activePetStat.hygiene}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-pink-200">
                    <span>💖 Love</span>
                    <span>{activePetStat.bond}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-pink-400 transition-all" style={{ width: `${activePetStat.bond}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-yellow-200">
                    <span>{activePet.specialEmoji} Check</span>
                    <span>{activePetStat.specialProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-yellow-400 transition-all" style={{ width: `${activePetStat.specialProgress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SECTION 2: 10-TRAIL MASTER PROGRESSION & CAGE SLOT UNLOCK SELECTOR     */}
      {/* ===================================================================== */}
      <div className="bg-gradient-to-br from-slate-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-6 border border-emerald-500/30 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full mb-1.5">
              <Compass className="w-3.5 h-3.5" /> All 10 Progressive Trails (100 to 500 Miles)
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Select Your Trail &amp; Unlock Up to 6 Wagon Pet Cage Slots
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
              You keep all your pets across every Trail! As you advance from Trail 1 to Trail 10, the journey gets longer and you unlock more <strong>Wagon Cage Slots</strong> to bring multiple pets at once.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEffects.playChestPop();
              setBonusUnlockedCages(c => Math.min(5, c + 1));
              triggerToast('🔓 Unlocked an Extra Wagon Pet Cage Slot! Load another pet from your barn below!');
            }}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 font-black text-xs shadow-lg flex items-center gap-2 shrink-0 cursor-pointer transition-transform hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>+1 Unlock Extra Cage Slot</span>
          </button>
        </div>

        {/* 10 Trails Horizontal Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {TEN_TRAIL_PROGRESSION.map(t => {
            const isSelected = t.trailNumber === selectedTrailNum;
            return (
              <button
                key={t.trailNumber}
                type="button"
                onClick={() => {
                  soundEffects.playTap();
                  setSelectedTrailNum(t.trailNumber);
                }}
                className={`text-left p-3 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? `bg-gradient-to-br ${t.biomeColor} border-amber-300 shadow-lg scale-[1.02]`
                    : 'bg-stone-900/80 border-stone-700/80 hover:border-stone-500 text-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider mb-1">
                  <span className={isSelected ? 'text-amber-200' : 'text-stone-400'}>
                    Trail {t.trailNumber} · {t.miles} Mi
                  </span>
                  <span className="bg-black/40 px-1.5 py-0.5 rounded text-amber-300">
                    {t.unlockedCages} {t.unlockedCages === 1 ? 'Cage' : 'Cages'}
                  </span>
                </div>
                <div className="font-bold text-xs text-white line-clamp-1">
                  {t.name.replace(/^Trail \d+:\s*/, '')}
                </div>
                <div className="text-[10px] text-stone-200/80 mt-1">
                  {t.stations} Stations · {t.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Trail Details Banner */}
        <div className="bg-black/40 border border-white/15 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="font-black text-sm text-amber-300 flex items-center gap-2">
              <span>{selectedTrail.name}</span>
              <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-2 py-0.5 rounded-full text-[10px]">
                {selectedTrail.miles} Miles · {selectedTrail.stations} Interactive Stations
              </span>
            </div>
            <p className="text-stone-300">
              <strong>Learning Focus:</strong> {selectedTrail.focus}
            </p>
            <p className="text-rose-300">
              <strong>Signature Trail Calamity:</strong> {selectedTrail.signatureHazard}
            </p>
          </div>
          <div className="bg-stone-900/90 border border-amber-400/40 rounded-xl px-4 py-2.5 text-center shrink-0">
            <div className="text-[10px] uppercase font-bold text-amber-200">Active Wagon Capacity</div>
            <div className="text-lg font-black text-amber-400">
              {loadedPetIds.length} / {totalUnlockedCages} Pets Loaded
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SECTION 3: MULTI-CAGE WAGON CARAVAN SLOTS (1 TO 6 PET CAGES)           */}
      {/* ===================================================================== */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white rounded-3xl p-5 sm:p-6 border-2 border-amber-500/40 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🐎🛞</span>
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-200">
                Your Overland Wagon Pet Cages ({loadedPetIds.length} of {totalUnlockedCages} Slots Active)
              </h3>
              <p className="text-xs text-stone-300">
                Click any pet in your Full-Color Barn below to load or unload them into your unlocked Wagon Cages!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold bg-amber-500/20 border border-amber-400/50 text-amber-200 px-3 py-1 rounded-full">
            Multi-Species Show String Bonus: +{loadedPetIds.length * 15}% Judge Score
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6].map((slotNum, idx) => {
            const isSlotUnlocked = slotNum <= totalUnlockedCages;
            const petId = loadedPetIds[idx];
            const pet = petId ? PERSISTENT_BARN_PETS.find(p => p.id === petId) : null;
            const stats = pet ? petStats[pet.id] : null;

            return (
              <div
                key={slotNum}
                onClick={() => {
                  if (pet) {
                    soundEffects.playTap();
                    setActiveCheckpointPetId(pet.id);
                  }
                }}
                className={`rounded-2xl p-3.5 border-2 transition-all relative ${
                  !isSlotUnlocked
                    ? 'bg-stone-950/60 border-stone-800 text-stone-500 opacity-75'
                    : pet
                    ? `bg-gradient-to-b ${pet.stallTheme} border-amber-300 shadow-lg cursor-pointer hover:scale-[1.02]`
                    : 'bg-stone-900/90 border-dashed border-amber-400/50 text-amber-200/80'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider mb-1.5">
                  <span>Cage #{slotNum}</span>
                  {isSlotUnlocked ? (
                    <span className="flex items-center gap-0.5 text-emerald-200">
                      <Unlock className="w-3 h-3" /> Open
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 text-stone-500">
                      <Lock className="w-3 h-3" /> Trail {slotNum * 2 - 1}+
                    </span>
                  )}
                </div>

                {!isSlotUnlocked ? (
                  <div className="text-center py-4 space-y-1">
                    <div className="text-2xl opacity-40">🔒</div>
                    <div className="text-[11px] font-bold">Locked Cage Slot</div>
                    <div className="text-[10px] text-stone-400">Reach higher trail or click Unlock above</div>
                  </div>
                ) : pet ? (
                  <div className="text-center space-y-1.5">
                    <div className="text-4xl drop-shadow animate-bounce">{pet.emoji}</div>
                    <div className="font-black text-sm text-white">{pet.name}</div>
                    <div className="text-[10px] font-bold text-white/90 bg-black/30 rounded-full px-2 py-0.5">
                      {pet.species}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-white pt-1">
                      <span>🌾 {stats?.fullness}%</span>
                      <span>✨ {stats?.coat}%</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 space-y-1">
                    <div className="text-2xl">📦</div>
                    <div className="text-xs font-bold text-amber-200">Empty Cage Slot</div>
                    <div className="text-[10px] text-stone-300">Select a pet from your Barn below!</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SECTION 4: FULL-COLOR PERSISTENT PET BARN (CHOOSE YOUR TRAIL PETS!)    */}
      {/* ===================================================================== */}
      <div className="bg-gradient-to-b from-amber-50 via-orange-50/40 to-emerald-50 rounded-3xl p-5 sm:p-6 border-2 border-amber-300 shadow-lg space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-700 text-white flex items-center justify-center text-2xl shadow-md">
              🏡
            </div>
            <div>
              <div className="text-[11px] font-black uppercase tracking-wider text-red-700">
                Full-Color Persistent Champion Barn · All Pets Kept Forever
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Your Full-Color Pet Barn — Choose Which Pets to Load Into Your Wagon
              </h3>
            </div>
          </div>
          <div className="text-xs font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 px-3.5 py-2 rounded-xl">
            💡 Click &ldquo;Open in Drag-and-Drop Workbench&rdquo; on any pet to hand-feed, water, and brush them!
          </div>
        </div>

        {/* Grid of Full-Color Barn Stalls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSISTENT_BARN_PETS.map(pet => {
            const isLoaded = loadedPetIds.includes(pet.id);
            const stats = petStats[pet.id];

            return (
              <div
                key={pet.id}
                className={`rounded-3xl overflow-hidden border-2 transition-all shadow-md flex flex-col justify-between ${
                  isLoaded ? 'border-emerald-500 ring-2 ring-emerald-400/50' : 'border-stone-300'
                }`}
              >
                {/* Colorful Illustrated Stall Header */}
                <div className={`bg-gradient-to-br ${pet.stallTheme} p-4 text-white relative overflow-hidden`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center text-4xl shadow-inner">
                        {pet.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-lg font-black text-white">{pet.name}</h4>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${pet.accentBadge}`}>
                            {pet.species}
                          </span>
                          <span className="text-[10px] font-bold bg-black/35 text-amber-200 px-2 py-0.5 rounded-full border border-white/20">
                            {pet.difficultyBadge}
                          </span>
                        </div>
                        <p className="text-xs text-white/90 font-medium">{pet.breed} · {pet.projectType}</p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] font-bold text-amber-200">
                          <span>🏆 {pet.ribbonsWon} Fair Ribbons Kept</span>
                          <span>· Cost: {pet.costLevel}</span>
                        </div>
                      </div>
                    </div>

                    {isLoaded && (
                      <span className="bg-emerald-950/90 border border-emerald-300 text-emerald-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                        In Wagon
                      </span>
                    )}
                  </div>

                  {/* Live Pet Vital Meters */}
                  <div className="grid grid-cols-4 gap-1.5 mt-3 pt-2.5 border-t border-white/20 text-[10px] font-bold text-center">
                    <div className="bg-black/25 rounded-lg p-1">
                      <div className="text-white/70">Feed</div>
                      <div className="text-amber-200 text-xs">{stats.fullness}%</div>
                    </div>
                    <div className="bg-black/25 rounded-lg p-1">
                      <div className="text-white/70">Water</div>
                      <div className="text-cyan-200 text-xs">{stats.hydration}%</div>
                    </div>
                    <div className="bg-black/25 rounded-lg p-1">
                      <div className="text-white/70">Coat</div>
                      <div className="text-purple-200 text-xs">{stats.coat}%</div>
                    </div>
                    <div className="bg-black/25 rounded-lg p-1">
                      <div className="text-white/70">Bond</div>
                      <div className="text-pink-200 text-xs">{stats.bond}%</div>
                    </div>
                  </div>
                </div>

                {/* Stall Body */}
                <div className="bg-white p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5 text-xs">
                    <div className="font-bold text-slate-800 flex items-center justify-between gap-1.5">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Special Care: {pet.specialCareName}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setOpenKnowledgeCardId(openKnowledgeCardId === pet.id ? null : pet.id)}
                        className="text-[10px] font-black text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>{openKnowledgeCardId === pet.id ? 'Hide AI Card' : 'AI Knowledge Card'}</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {pet.specialCareWhy}
                    </p>

                    {/* Expandable Official AI Knowledge Card (Rank 1-12) */}
                    {openKnowledgeCardId === pet.id && (
                      <div className="mt-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px] text-slate-700 animate-fadeIn">
                        <div className="font-black text-slate-900 border-b border-slate-200 pb-1">
                          📋 Official AI Reference Card · {pet.difficultyRank}
                        </div>
                        <div><strong>Space Needs:</strong> {pet.spaceNeeds}</div>
                        <div><strong>Daily Care:</strong> {pet.dailyCare}</div>
                        <div><strong>Cost Level:</strong> {pet.costLevel}</div>
                        <div><strong>Key Strengths:</strong> {pet.keyStrengths}</div>
                        <div><strong>Key Challenges:</strong> {pet.keyChallenges}</div>
                        <div><strong>Core Topics:</strong> {pet.coreLearningTopics}</div>
                        <div><strong>Show Focus:</strong> {pet.showFocus}</div>
                        {pet.showmanshipDetails && (
                          <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
                            <strong>🏆 Showmanship Details:</strong> {pet.showmanshipDetails}
                          </div>
                        )}
                        <div className="text-emerald-800 font-semibold"><strong>Special Note:</strong> {pet.specialNotes}</div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playTap();
                        setActiveCheckpointPetId(pet.id);
                        triggerToast(`Opened ${pet.name} (${pet.species}) in the Drag-and-Drop Care Workbench above!`);
                      }}
                      className="w-full py-2 rounded-xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 font-black text-xs transition cursor-pointer"
                    >
                      ✋ Open {pet.name} in Drag-and-Drop Care Workbench
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleLoadPet(pet.id)}
                      className={`w-full py-2.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isLoaded
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-amber-300'
                      }`}
                    >
                      {isLoaded ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Loaded in Wagon Cage (Click to Return to Barn)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Bring {pet.name} on Trail (Load into Cage)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SECTION 5: LIVE BEFORE & AFTER VISUAL TRANSFORMATION STUDIO            */}
      {/* (Broken -> Fixed | Bad Rainstorm -> Dry Cozy Tent | Bear -> Vault | Sick -> Vet Cleared) */}
      {/* ===================================================================== */}
      <div className="bg-gradient-to-br from-stone-950 via-slate-900 to-stone-950 text-white rounded-3xl p-5 sm:p-6 border-2 border-amber-400/50 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Before &amp; After Trail Rescue Visuals
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Drag the Solution Tool to Transform Bad Trail Calamities Into Safe, Happy Camps!
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Watch the live visual scene transform from <strong>BEFORE (Broken / Storming / Bear Raid / Sick)</strong> to <strong>AFTER (Fixed / Dry Cozy Tent / Fortified / Healthy)</strong> when you drag or tap the fix!
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEffects.playTap();
              setScenarioFixes({ wheel: false, storm: false, bear: false, sickness: false });
              triggerToast('Reset all 4 Before & After visual scenes so you can test dragging the fixes again!');
            }}
            className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-xs font-bold text-stone-200 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset All to &ldquo;BEFORE&rdquo;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* SCENE 1: BROKEN WAGON WHEEL (BEFORE) -> FIXED HICKORY WHEEL & ROLLING WAGON (AFTER) */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              soundEffects.playLevelUpFanfare();
              setScenarioFixes(prev => ({ ...prev, wheel: true }));
              triggerToast('🛞 AFTER: Mounted the Spare Hickory Wheel & Iron Tire! Wagon is upright, cushioned, and rolling smoothly!');
            }}
            className={`rounded-3xl p-5 border-2 transition-all duration-500 relative overflow-hidden ${
              scenarioFixes.wheel
                ? 'bg-gradient-to-br from-emerald-900 via-teal-900 to-green-950 border-emerald-400 shadow-lg'
                : 'bg-gradient-to-br from-rose-950 via-stone-900 to-amber-950 border-rose-500/80 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                scenarioFixes.wheel ? 'bg-emerald-400 text-emerald-950' : 'bg-rose-500 text-white animate-pulse'
              }`}>
                {scenarioFixes.wheel ? '✅ AFTER: WAGON FIXED & ROLLING!' : '⚠️ BEFORE: SHATTERED WHEEL IN DEVIL’S RUT'}
              </span>
              <button
                type="button"
                onClick={() => setScenarioFixes(prev => ({ ...prev, wheel: !prev.wheel }))}
                className="text-[11px] font-bold underline text-amber-200 hover:text-white cursor-pointer"
              >
                {scenarioFixes.wheel ? 'View Broken (Before)' : 'Toggle After'}
              </button>
            </div>

            {/* Live Illustrated Scene Box */}
            <div className={`h-44 rounded-2xl border-2 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
              scenarioFixes.wheel
                ? 'bg-gradient-to-b from-sky-400/20 via-emerald-600/20 to-amber-700/30 border-emerald-300/50'
                : 'bg-gradient-to-b from-stone-950 via-rose-950/60 to-stone-900 border-rose-500/40'
            }`}>
              {!scenarioFixes.wheel ? (
                <>
                  <div className="text-xs font-bold text-rose-200 flex items-center justify-between">
                    <span>💥 CRACK! Tilted 30° in Granite Washout</span>
                    <span className="bg-rose-900/80 px-2 py-0.5 rounded text-[10px]">Immobilized</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl -rotate-12 transition-transform">🛒💥</div>
                    <div className="text-3xl animate-bounce">🛞💨</div>
                    <div className="text-4xl">{activePet.emoji}😰</div>
                  </div>
                  <div className="text-[11px] text-rose-200/90 text-center font-medium">
                    Spokes snapped &amp; iron tire thrown! {activePet.name} is jolted and stressed inside the tilted bed.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold text-emerald-200 flex items-center justify-between">
                    <span>☀️ Smooth Pioneer Highway · Level &amp; Cushioned</span>
                    <span className="bg-emerald-500 text-emerald-950 font-black px-2 py-0.5 rounded text-[10px]">100% Roadworthy</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl transition-transform">🐎🛞✨</div>
                    <div className="text-4xl animate-bounce">{activePet.emoji}💖</div>
                  </div>
                  <div className="text-[11px] text-emerald-100 text-center font-medium">
                    New Hickory Wheel &amp; Forged Iron Tire locked on greased spindle! {activePet.name} rides smoothly!
                  </div>
                </>
              )}
            </div>

            {/* Drag-to-Fix Bar */}
            <div className="mt-3 flex items-center justify-between bg-black/40 rounded-2xl p-3 border border-white/10">
              <div
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', 'fix_wheel')}
                onClick={() => {
                  soundEffects.playLevelUpFanfare();
                  setScenarioFixes(prev => ({ ...prev, wheel: true }));
                  triggerToast('🛞 Fixed! Jacked up axle & mounted Spare Hickory Wheel & Iron Tire!');
                }}
                className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-2 rounded-xl cursor-grab active:cursor-grabbing shadow transition"
              >
                <span className="text-xl">🛞🔧</span>
                <span>Drag or Tap Spare Tire &amp; Jack to Fix</span>
              </div>
              <span className="text-[11px] text-stone-300 font-bold">
                {scenarioFixes.wheel ? '✨ +45% Wagon Durability' : '👉 Drop onto scene above!'}
              </span>
            </div>
          </div>

          {/* SCENE 2: POURING RAINSTORM & TORN ROOF (BEFORE) -> COZY DRY TENT & LANTERN (AFTER) */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              soundEffects.playSuccessChime();
              setScenarioFixes(prev => ({ ...prev, storm: true }));
              triggerToast('⛺ AFTER: Pitched the Waterproof Oilcloth Tent Canopy & lit the Warm Camp Lantern! 100% dry and cozy!');
            }}
            className={`rounded-3xl p-5 border-2 transition-all duration-500 relative overflow-hidden ${
              scenarioFixes.storm
                ? 'bg-gradient-to-br from-amber-900 via-emerald-950 to-teal-950 border-amber-300 shadow-lg'
                : 'bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 border-cyan-500/80 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                scenarioFixes.storm ? 'bg-amber-300 text-stone-950' : 'bg-cyan-500 text-slate-950 animate-pulse'
              }`}>
                {scenarioFixes.storm ? '✅ AFTER: WARM DRY TENT & HEARTH LANTERN!' : '⛈️ BEFORE: FREEZING SQUALL & TORN CANVAS'}
              </span>
              <button
                type="button"
                onClick={() => setScenarioFixes(prev => ({ ...prev, storm: !prev.storm }))}
                className="text-[11px] font-bold underline text-amber-200 hover:text-white cursor-pointer"
              >
                {scenarioFixes.storm ? 'View Storm (Before)' : 'Toggle After'}
              </button>
            </div>

            {/* Live Illustrated Weather Scene Box */}
            <div className={`h-44 rounded-2xl border-2 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
              scenarioFixes.storm
                ? 'bg-gradient-to-b from-amber-500/25 via-orange-600/20 to-emerald-900/40 border-amber-300/60'
                : 'bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 border-cyan-400/40'
            }`}>
              {!scenarioFixes.storm ? (
                <>
                  <div className="text-xs font-bold text-cyan-200 flex items-center justify-between">
                    <span>⛈️⚡ Blinding Rain, Mud &amp; Cold Wind Drafts</span>
                    <span className="bg-cyan-900/90 px-2 py-0.5 rounded text-[10px]">Coat Soaked -20%</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-4xl animate-bounce">🌧️⚡💨</div>
                    <div className="text-5xl">⛺🕳️</div>
                    <div className="text-4xl">{activePet.emoji}🥶</div>
                  </div>
                  <div className="text-[11px] text-cyan-200/90 text-center font-medium">
                    Freezing rain pours through the ripped canvas seam! {activePet.name} is shivering on damp bedding.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold text-amber-200 flex items-center justify-between">
                    <span>⛺🏮 Waterproof Oilcloth Pavilion · 72°F Cozy &amp; Dry</span>
                    <span className="bg-amber-400 text-stone-950 font-black px-2 py-0.5 rounded text-[10px]">100% Dry &amp; Warm</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl">⛺🏮🔥</div>
                    <div className="text-4xl animate-bounce">{activePet.emoji}😌🌾</div>
                  </div>
                  <div className="text-[11px] text-amber-100 text-center font-medium">
                    Rain rolls harmlessly off the waxed tent canopy! {activePet.name} naps on deep, dry pine shavings by the warm lantern.
                  </div>
                </>
              )}
            </div>

            {/* Drag-to-Fix Bar */}
            <div className="mt-3 flex items-center justify-between bg-black/40 rounded-2xl p-3 border border-white/10">
              <div
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', 'fix_storm')}
                onClick={() => {
                  soundEffects.playSuccessChime();
                  setScenarioFixes(prev => ({ ...prev, storm: true }));
                  triggerToast('⛺ Fixed! Pitched the Waterproof Oilcloth Tent & spread fresh dry pine shavings!');
                }}
                className="flex items-center gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl cursor-grab active:cursor-grabbing shadow transition"
              >
                <span className="text-xl">⛺🏮</span>
                <span>Drag or Tap Dry Tent &amp; Lantern to Fix</span>
              </div>
              <span className="text-[11px] text-stone-300 font-bold">
                {scenarioFixes.storm ? '✨ +30% Canvas & Comfort' : '👉 Drop onto storm scene!'}
              </span>
            </div>
          </div>

          {/* SCENE 3: BEAR-SMASHED TAILGATE (BEFORE) -> FORTIFIED OAK TAILGATE & BEAR VAULT (AFTER) */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              soundEffects.playSuccessChime();
              setScenarioFixes(prev => ({ ...prev, bear: true }));
              triggerToast('🐻‍❄️ AFTER: Rebuilt Iron-Bound Oak Tailgate & locked all rations in the Bear-Proof Galvanized Vault!');
            }}
            className={`rounded-3xl p-5 border-2 transition-all duration-500 relative overflow-hidden ${
              scenarioFixes.bear
                ? 'bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 border-emerald-400 shadow-lg'
                : 'bg-gradient-to-br from-red-950 via-stone-900 to-purple-950 border-red-500/80 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                scenarioFixes.bear ? 'bg-emerald-400 text-emerald-950' : 'bg-red-500 text-white animate-pulse'
              }`}>
                {scenarioFixes.bear ? '✅ AFTER: BEAR-PROOF VAULT & IRON TAILGATE!' : '🐻 BEFORE: MIDNIGHT BLACK BEAR FEED RAID'}
              </span>
              <button
                type="button"
                onClick={() => setScenarioFixes(prev => ({ ...prev, bear: !prev.bear }))}
                className="text-[11px] font-bold underline text-amber-200 hover:text-white cursor-pointer"
              >
                {scenarioFixes.bear ? 'View Bear Raid (Before)' : 'Toggle After'}
              </button>
            </div>

            <div className={`h-44 rounded-2xl border-2 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
              scenarioFixes.bear
                ? 'bg-gradient-to-b from-emerald-500/20 via-teal-600/20 to-slate-900 border-emerald-300/50'
                : 'bg-gradient-to-b from-stone-950 via-red-950/60 to-stone-900 border-red-500/40'
            }`}>
              {!scenarioFixes.bear ? (
                <>
                  <div className="text-xs font-bold text-red-200 flex items-center justify-between">
                    <span>🐻🌙 Bear Smelled Unsealed Sweet Grain at 2 AM!</span>
                    <span className="bg-red-900/90 px-2 py-0.5 rounded text-[10px]">Feed -40 / Rattled</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl animate-bounce">🐻🐾</div>
                    <div className="text-4xl">🪵💥🌾</div>
                    <div className="text-4xl">{activePet.emoji}😱</div>
                  </div>
                  <div className="text-[11px] text-red-200/90 text-center font-medium">
                    Tailgate smashed off hinges &amp; feed sacks torn open! {activePet.name} is thumping in alarm inside the hutch.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold text-emerald-200 flex items-center justify-between">
                    <span>🔒🛡️ Airtight Steel Feed Vault &amp; 14-Gauge Mesh</span>
                    <span className="bg-emerald-400 text-emerald-950 font-black px-2 py-0.5 rounded text-[10px]">100% Predator-Safe</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl">🔒🛡️🏮</div>
                    <div className="text-4xl animate-bounce">{activePet.emoji}😴💖</div>
                  </div>
                  <div className="text-[11px] text-emerald-100 text-center font-medium">
                    Zero feed odors escape the galvanized vault! Iron-bound oak tailgate &amp; motion lantern keep camp peaceful.
                  </div>
                </>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between bg-black/40 rounded-2xl p-3 border border-white/10">
              <div
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', 'fix_bear')}
                onClick={() => {
                  soundEffects.playSuccessChime();
                  setScenarioFixes(prev => ({ ...prev, bear: true }));
                  triggerToast('🔒 Fixed! Installed Bear-Proof Galvanized Feed Vault & Iron-Bound Oak Tailgate!');
                }}
                className="flex items-center gap-2.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-xs px-3.5 py-2 rounded-xl cursor-grab active:cursor-grabbing shadow transition"
              >
                <span className="text-xl">🔒🪵</span>
                <span>Drag or Tap Bear Vault &amp; Oak Kit to Fix</span>
              </div>
              <span className="text-[11px] text-stone-300 font-bold">
                {scenarioFixes.bear ? '✨ +30 Feed & Predator Immunity' : '👉 Drop onto bear scene!'}
              </span>
            </div>
          </div>

          {/* SCENE 4: SICK / HUNCHED GI SLOWDOWN (BEFORE) -> VET-CLEARED CHAMPION IN BLOOM (AFTER) */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              soundEffects.playVetRecoveryChime();
              setScenarioFixes(prev => ({ ...prev, sickness: true }));
              triggerToast(`🩺 AFTER: Dr. Clara examined ${activePet.name} & provided Critical Care Herb Recovery Mash! 100% Vet-Cleared!`);
            }}
            className={`rounded-3xl p-5 border-2 transition-all duration-500 relative overflow-hidden ${
              scenarioFixes.sickness
                ? 'bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-950 border-emerald-400 shadow-lg'
                : 'bg-gradient-to-br from-amber-950 via-stone-900 to-rose-950 border-amber-500/80 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                scenarioFixes.sickness ? 'bg-emerald-400 text-emerald-950' : 'bg-amber-400 text-stone-950 animate-pulse'
              }`}>
                {scenarioFixes.sickness ? '✅ AFTER: 100% VET-CLEARED & THRIVING!' : '🌡️ BEFORE: HUNCHED POSTURE & OFF-FEED ALERT'}
              </span>
              <button
                type="button"
                onClick={() => setScenarioFixes(prev => ({ ...prev, sickness: !prev.sickness }))}
                className="text-[11px] font-bold underline text-amber-200 hover:text-white cursor-pointer"
              >
                {scenarioFixes.sickness ? 'View Sick Alert (Before)' : 'Toggle After'}
              </button>
            </div>

            <div className={`h-44 rounded-2xl border-2 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
              scenarioFixes.sickness
                ? 'bg-gradient-to-b from-emerald-400/20 via-teal-500/20 to-cyan-900/40 border-emerald-300/50'
                : 'bg-gradient-to-b from-stone-950 via-amber-950/60 to-stone-900 border-amber-500/40'
            }`}>
              {!scenarioFixes.sickness ? (
                <>
                  <div className="text-xs font-bold text-amber-200 flex items-center justify-between">
                    <span>🌡️⚠️ Hunched in Corner · Morning Pellets Untouched</span>
                    <span className="bg-amber-900/90 px-2 py-0.5 rounded text-[10px]">Vet Check Required</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-4xl">{activePet.emoji}🥀</div>
                    <div className="text-3xl">🥣❌</div>
                    <div className="text-4xl animate-pulse">🩺🔔</div>
                  </div>
                  <div className="text-[11px] text-amber-200/90 text-center font-medium">
                    Early signs of gut slowdown! Never guess at home meds—call the Licensed Mobile Trail Veterinarian!
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold text-emerald-200 flex items-center justify-between">
                    <span>🩺🌟 Stethoscope Exam &amp; Critical Care Herb Mash</span>
                    <span className="bg-emerald-400 text-emerald-950 font-black px-2 py-0.5 rounded text-[10px]">Cleared for Show Ring</span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-4">
                    <div className="text-5xl animate-bounce">{activePet.emoji}✨🏆</div>
                    <div className="text-4xl">🌿💧💖</div>
                  </div>
                  <div className="text-[11px] text-emerald-100 text-center font-medium">
                    Dr. Clara confirmed normal 102.1°F vitals &amp; restored gut motility with warm hydration and herb recovery mash!
                  </div>
                </>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between bg-black/40 rounded-2xl p-3 border border-white/10">
              <div
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', 'fix_vet')}
                onClick={() => {
                  soundEffects.playVetRecoveryChime();
                  setScenarioFixes(prev => ({ ...prev, sickness: true }));
                  triggerToast(`🩺 Fixed! Dr. Clara examined ${activePet.name} & administered Supportive Recovery Care!`);
                }}
                className="flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs px-3.5 py-2 rounded-xl cursor-grab active:cursor-grabbing shadow transition"
              >
                <span className="text-xl">🩺🌿</span>
                <span>Drag or Tap Mobile Vet Care Kit to Heal</span>
              </div>
              <span className="text-[11px] text-stone-300 font-bold">
                {scenarioFixes.sickness ? '✨ +35% Health & Vigor' : '👉 Drop onto pet scene!'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
