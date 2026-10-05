// WarrenWise Animal Academy - Animal Care Animation & Milestone Rest Camp Component
// Displays rich animated care scenes: Brushing (sparkles), Watering (ripples), Soothing (hearts), Table Stance (square alignment)
// Displays visiting trail animals (livestock & pets) and grants interactive condition boosts.

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Heart, Droplets, Trophy, Check, X, 
  RotateCcw, Compass, ArrowRight, ShieldCheck, Flame
} from 'lucide-react';
import { soundEffects } from '../../utils/audioEffects';

export default function AnimalCareAnimationModal({
  isOpen,
  onClose,
  companion = { name: 'Barnaby', species: 'Rabbit', avatarEmoji: '🐰', breed: 'Holland Lop' },
  activeAction = 'brush', // 'brush' | 'water' | 'comfort' | 'pose' | 'rest_camp'
  onApplyCare,
  conditionScores = { coatCondition: 85, vigorHydration: 90, temperament: 80, poseTraining: 75 }
}) {
  const [currentAction, setCurrentAction] = useState(activeAction);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationText, setAnimationText] = useState('');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setCurrentAction(activeAction);
    triggerCareAnimation(activeAction);
  }, [activeAction, isOpen]);

  const triggerCareAnimation = (action) => {
    setIsAnimating(true);
    let text = '';
    let particleIcon = '✨';

    if (action === 'feed') {
      soundEffects.playRustle();
      text = `Offering crisp golden timothy hay and measured pellets to ${companion.name}... Vibrant gut motility and energy restored!`;
      particleIcon = '🌾';
    } else if (action === 'brush') {
      soundEffects.playSuccessChime();
      text = `Gently smoothing ${companion.name}’s coat with the camelhair brush... Golden sheen glowing!`;
      particleIcon = '✨';
    } else if (action === 'water') {
      soundEffects.playWater();
      text = `Pouring chilled mountain spring water into the ceramic dish... Crisp hydration restored!`;
      particleIcon = '💧';
    } else if (action === 'clean_up') {
      soundEffects.playRustle();
      text = `Mucking out soiled corners and scattering clean, aromatic dry pine bedding... Spotless hocks protected!`;
      particleIcon = '🪵';
    } else if (action === 'comfort' || action === 'fill_with_love') {
      soundEffects.playPurr();
      text = `Gently stroking ${companion.name} with loving reassurance... Purring, tooth chattering & deep trust!`;
      particleIcon = '💖';
    } else if (action === 'pose') {
      soundEffects.playVictoryFanfare();
      text = `Setting front paws squarely and supporting loin... Official breed stance achieved!`;
      particleIcon = '🐾';
    } else {
      soundEffects.playChestPop();
      text = `Arrived at scenic Trailside Rest Camp! Your herd gathers around the warm campfire.`;
      particleIcon = '⛺';
    }

    setAnimationText(text);

    // Generate lively floating particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      size: 14 + Math.random() * 18,
      delay: Math.random() * 0.5,
      icon: particleIcon
    }));
    setParticles(newParticles);

    if (onApplyCare && action !== 'rest_camp') {
      onApplyCare(action);
    }

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2800);

    return () => clearTimeout(timer);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden text-stone-900 relative">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-800 via-stone-900 to-emerald-900 p-4 sm:p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-200">
                Trailside Animal Care &amp; Rest Camp
              </h3>
              <p className="text-[11px] text-stone-300">
                Gentle, welfare-first showmanship care for {companion.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Animated Visual Stage */}
        <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-sky-100 via-amber-50 to-emerald-100 overflow-hidden flex items-center justify-center select-none border-b border-stone-200">
          
          {/* Scenic Backdrop Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          
          {/* Campfire or Sun Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Animated Particles */}
          {particles.map(p => (
            <span
              key={p.id}
              className="absolute pointer-events-none animate-float text-xl transition-all"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                animationDelay: `${p.delay}s`,
                fontSize: `${p.size}px`
              }}
            >
              {p.icon}
            </span>
          ))}

          {/* Main Companion Visual Sprite Box */}
          <div className="relative z-10 text-center space-y-3">
            <div className="relative inline-block group">
              {/* Green Stance Guideline Box if Posing */}
              {currentAction === 'pose' && (
                <div className="absolute -inset-2 rounded-3xl border-2 border-dashed border-emerald-500 animate-pulse bg-emerald-500/10" />
              )}

              {/* Water Splash Ripples if Watering */}
              {currentAction === 'water' && (
                <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/60 animate-ping" />
              )}

              {/* Companion Avatar Card */}
              <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-3xl border-4 shadow-2xl overflow-hidden mx-auto transition-transform duration-500 ${
                isAnimating ? 'scale-105' : 'scale-100'
              } ${
                currentAction === 'brush' ? 'border-amber-400 ring-4 ring-amber-400/30' :
                currentAction === 'water' ? 'border-cyan-400 ring-4 ring-cyan-400/30' :
                currentAction === 'comfort' ? 'border-rose-400 ring-4 ring-rose-400/30' :
                'border-emerald-500 ring-4 ring-emerald-500/30'
              }`}>
                <img 
                  src="/game/holland_lop_pet.jpg" 
                  alt={companion.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Action Tool Overlay Badge */}
              <span className="absolute -top-3 -right-3 bg-stone-900 text-white p-2 rounded-2xl shadow-xl text-xl border-2 border-white animate-bounce">
                {currentAction === 'brush' ? '🪮' :
                 currentAction === 'water' ? '🚰' :
                 currentAction === 'comfort' ? '🌿' :
                 currentAction === 'pose' ? '🪞' : '⛺'}
              </span>
            </div>

            {/* Companion Name & Breed */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-stone-300 shadow-sm text-xs font-black text-stone-900">
                <span>{companion.avatarEmoji || '🐾'}</span>
                <span>{companion.name}</span>
                <span className="text-[10px] text-stone-500 font-mono">({companion.breed || 'Rabbit'})</span>
              </div>
            </div>
          </div>

          {/* Passing Trail Animals (Showing More Animals along the Way!) */}
          <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-xs text-stone-600 pointer-events-none opacity-80">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full border border-stone-300 shadow-xs">
              <span>🐑</span>
              <span className="text-[10px] font-bold">Hampshire Lamb</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full border border-stone-300 shadow-xs">
              <span>🐐</span>
              <span className="text-[10px] font-bold">Nigerian Dwarf</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full border border-stone-300 shadow-xs">
              <span>🐔</span>
              <span className="text-[10px] font-bold">Silkie Bantam</span>
            </div>
          </div>
        </div>

        {/* Animation Description Dialogue */}
        <div className="p-4 sm:p-5 space-y-4">
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 flex items-start gap-3">
            <span className="text-2xl mt-0.5">💖</span>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                Care &amp; Stewardship Feedback:
              </div>
              <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-0.5 leading-snug">
                "{animationText}"
              </p>
            </div>
          </div>

          {/* Interactive Care Hotbar: 5 Pet Care Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <button
              onClick={() => { setCurrentAction('feed'); triggerCareAnimation('feed'); }}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 cursor-pointer ${
                currentAction === 'feed'
                  ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold ring-2 ring-amber-400/20'
                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-lg">🌾</span>
              <div>
                <div className="text-xs font-black">Feed</div>
                <div className="text-[10px] text-amber-700">+Vigor</div>
              </div>
            </button>

            <button
              onClick={() => { setCurrentAction('water'); triggerCareAnimation('water'); }}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 cursor-pointer ${
                currentAction === 'water'
                  ? 'bg-cyan-100 border-cyan-400 text-cyan-950 font-bold ring-2 ring-cyan-400/20'
                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-lg">🚰</span>
              <div>
                <div className="text-xs font-black">Water</div>
                <div className="text-[10px] text-cyan-700">+Hydration</div>
              </div>
            </button>

            <button
              onClick={() => { setCurrentAction('brush'); triggerCareAnimation('brush'); }}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 cursor-pointer ${
                currentAction === 'brush'
                  ? 'bg-purple-100 border-purple-400 text-purple-950 font-bold ring-2 ring-purple-400/20'
                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-lg">🪮</span>
              <div>
                <div className="text-xs font-black">Brush</div>
                <div className="text-[10px] text-purple-700">+Coat Luster</div>
              </div>
            </button>

            <button
              onClick={() => { setCurrentAction('clean_up'); triggerCareAnimation('clean_up'); }}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 cursor-pointer ${
                currentAction === 'clean_up'
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-400/20'
                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-lg">🧹</span>
              <div>
                <div className="text-xs font-black">Clean Up</div>
                <div className="text-[10px] text-emerald-700">+Clean Hocks</div>
              </div>
            </button>

            <button
              onClick={() => { setCurrentAction('comfort'); triggerCareAnimation('comfort'); }}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 cursor-pointer ${
                currentAction === 'comfort' || currentAction === 'fill_with_love'
                  ? 'bg-rose-100 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-400/20'
                  : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-lg">💖</span>
              <div>
                <div className="text-xs font-black">Fill Love</div>
                <div className="text-[10px] text-rose-700">+Calm Poise</div>
              </div>
            </button>
          </div>

          {/* Show Ring Advantage Banner */}
          <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-xl flex items-center justify-between text-xs text-amber-950 font-semibold">
            <span className="flex items-center gap-1.5">
              <span>🏆</span>
              <span><strong>Show Ring Advantage:</strong> Daily feeding, watering, grooming, cleaning &amp; love add up to higher judge scores &amp; placement!</span>
            </span>
          </div>

          {/* Done / Continue Button */}
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 mx-auto"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Resume Trail Expedition</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
