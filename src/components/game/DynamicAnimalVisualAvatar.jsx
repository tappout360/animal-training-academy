// WarrenWise Animal Academy - Dynamic Visual Need Animal Avatar
// High-Quality Photorealistic & Cute Character States (Barnaby the Holland Lop)
// Seamlessly morphs between 8 visual need states based on dominant physiological need:
// 1. Hungry (thin posture, licking lips next to empty food bowl)
// 2. Thirsty (dry-looking fur, low energy posture near dry water dispenser)
// 3. Messy (dull, tangled fur with loose shedding tufts)
// 4. Dirty (small dirt spots on paws, nose, and body)
// 5. Sad (droopy ears, big mournful eyes, low lonely posture)
// 6. Happy & Content (bright eyes, gentle smile, relaxed and well-cared-for)
// 7. Clean & Fluffy (freshly brushed, glowing clean coat with sparkles)
// 8. Grand Champion Show-Ready (perfect condition, confident, wearing purple rosette ribbon)
//
// Features Layered Overlays for real-time Drag-and-Drop care reactions, particles,
// and multi-species SVG fallback for other 4-H species projects.

import React, { useState } from 'react';
import { ANIMAL_VISUAL_STATES } from '../../services/AnimalVisualStateEngine';

export default function DynamicAnimalVisualAvatar({
  stateKey = 'happy',
  petName = 'Barnaby',
  speciesId = 'rabbits',
  speciesEmoji = '🐰',
  recentActionTool = null,
  onPetClick,
  className = ''
}) {
  const config = ANIMAL_VISUAL_STATES[stateKey] || ANIMAL_VISUAL_STATES.happy;
  const [imageLoadError, setImageLoadError] = useState(false);

  // Normalize species ID from various formats (e.g. 'pet_buster_swine', 'dairy_cattle', 'cats')
  const normalizeSpecies = (raw) => {
    if (!raw) return 'rabbits';
    const s = String(raw).toLowerCase();
    if (s.includes('cavy') || s.includes('guinea') || s.includes('pippin')) return 'cavies';
    if (s.includes('cat') || s.includes('misty')) return 'cats';
    if (s.includes('dog') || s.includes('scout')) return 'dogs';
    if (s.includes('poultry') || s.includes('chicken') || s.includes('goldie') || s.includes('duck') || s.includes('turkey')) return 'poultry';
    if (s.includes('goat') || s.includes('willow')) return 'goats';
    if (s.includes('sheep') || s.includes('clover') || s.includes('lamb')) return 'sheep';
    if (s.includes('swine') || s.includes('pig') || s.includes('buster') || s.includes('hog')) return 'swine';
    if (s.includes('dairy') || s.includes('daisy') || s.includes('heifer') || s.includes('holstein') || s.includes('guernsey') || s.includes('jersey') || s.includes('swiss')) return 'dairy';
    if (s.includes('beef') || s.includes('titan') || s.includes('steer') || s.includes('angus') || s.includes('hereford') || s.includes('charolais') || s.includes('highland')) return 'beef';
    if (s.includes('horse') || s.includes('starlight') || s.includes('equine') || s.includes('pony')) return 'horses';
    if (s.includes('alpaca') || s.includes('llama') || s.includes('andes')) return 'alpacas';
    if (s.includes('vet') || s.includes('clinical') || s.includes('anatomy')) return 'vet';
    return 'rabbits';
  };

  const species = normalizeSpecies(speciesId);
  const isBarnabyRabbit = species === 'rabbits';
  const imageSrc = `/animals/barnaby/${stateKey}.png`;

  // Species-adaptive palette & silhouettes for SVG fallback
  const getSpeciesTheme = () => {
    const isGroomed = stateKey === 'clean' || stateKey === 'showReady';
    const isWorn = stateKey === 'thirsty' || stateKey === 'messy' || stateKey === 'dirty';

    switch (species) {
      case 'cavies':
        return {
          primaryFur: isGroomed ? '#C27035' : (isWorn ? '#995220' : '#AD5D26'),
          secondaryFur: '#FFFFFF',
          bellyFur: '#FCE7D2',
          earColor: '#EAA69D',
          eyeColor: '#1A110B',
          isEarFloppy: true
        };
      case 'cats':
        return {
          primaryFur: isGroomed ? '#9AA3A8' : (isWorn ? '#6E767A' : '#7D868B'),
          secondaryFur: '#2B3033',
          bellyFur: '#F4F5F7',
          earColor: '#F7BCBA',
          eyeColor: '#43A047',
          isEarFloppy: false
        };
      case 'dogs':
        return {
          primaryFur: isGroomed ? '#2D2D30' : (isWorn ? '#19191C' : '#212124'),
          secondaryFur: '#FFFFFF',
          bellyFur: '#F8F9FA',
          earColor: '#D38A88',
          eyeColor: '#3E2723',
          isEarFloppy: true
        };
      case 'poultry':
        return {
          primaryFur: isGroomed ? '#F5B041' : (isWorn ? '#B7791F' : '#D68910'),
          secondaryFur: '#E65100',
          bellyFur: '#FEF9E7',
          earColor: '#D32F2F',
          eyeColor: '#E65100',
          isEarFloppy: false
        };
      case 'goats':
        return {
          primaryFur: isGroomed ? '#B87333' : (isWorn ? '#7A4317' : '#8D4F1E'),
          secondaryFur: '#1A1817',
          bellyFur: '#F5EBE1',
          earColor: '#F3B4A6',
          eyeColor: '#5D4037',
          isEarFloppy: true
        };
      case 'sheep':
        return {
          primaryFur: isGroomed ? '#FFFFFF' : (isWorn ? '#DDD6CE' : '#EFEBE9'),
          secondaryFur: '#1E1E24',
          bellyFur: '#F5F5F5',
          earColor: '#2C2B30',
          eyeColor: '#3E2723',
          isEarFloppy: true
        };
      case 'swine':
        return {
          primaryFur: isGroomed ? '#F8BBD0' : (isWorn ? '#D89AA8' : '#F48FB1'),
          secondaryFur: '#C2185B',
          bellyFur: '#FCE4EC',
          earColor: '#F06292',
          eyeColor: '#212121',
          isEarFloppy: true
        };
      case 'dairy':
        return {
          primaryFur: isGroomed ? '#263238' : (isWorn ? '#1A2124' : '#1E1E22'),
          secondaryFur: '#FFFFFF',
          bellyFur: '#FFFFFF',
          earColor: '#F8BBD0',
          eyeColor: '#1A1A1A',
          isEarFloppy: true
        };
      case 'beef':
        return {
          primaryFur: isGroomed ? '#212121' : (isWorn ? '#141414' : '#1A1A1A'),
          secondaryFur: '#7A2E20',
          bellyFur: '#424242',
          earColor: '#616161',
          eyeColor: '#212121',
          isEarFloppy: true
        };
      case 'horses':
        return {
          primaryFur: isGroomed ? '#A8522E' : (isWorn ? '#6E2C12' : '#7D3316'),
          secondaryFur: '#1C1B1F',
          bellyFur: '#D28B65',
          earColor: '#E2977F',
          eyeColor: '#2C1B14',
          isEarFloppy: false
        };
      case 'vet':
        return {
          primaryFur: isGroomed ? '#546E7A' : '#37474F',
          secondaryFur: '#0288D1',
          bellyFur: '#ECEFF1',
          earColor: '#80DEEA',
          eyeColor: '#01579B',
          isEarFloppy: true
        };
      case 'alpacas':
        return {
          primaryFur: isGroomed ? '#D7CCC8' : '#BCAAA4',
          secondaryFur: '#8D6E63',
          bellyFur: '#EFEBE9',
          earColor: '#FFCCBC',
          eyeColor: '#3E2723',
          isEarFloppy: false
        };
      case 'rabbits':
      default:
        return {
          primaryFur: isGroomed ? '#E59247' : (isWorn ? '#B87232' : '#D27D2D'),
          secondaryFur: '#421F0A',
          bellyFur: '#FFF2DC',
          earColor: '#F5B8B5',
          eyeColor: '#1A120B',
          isEarFloppy: true
        };
    }
  };

  const theme = getSpeciesTheme();

  // Instant reactive animations triggered by tool drop
  const getToolReactionBadge = () => {
    if (!recentActionTool) return null;
    switch (recentActionTool) {
      case 'feed':
        return { label: 'Crunch Crunch! Full Belly! 🌾', color: 'bg-amber-500 text-white animate-bounce' };
      case 'water':
        return { label: 'Slurp Slurp! Hydrated & Refreshed! 💧', color: 'bg-cyan-500 text-white animate-bounce' };
      case 'brush':
        return { label: 'Scrubbed Clean & Glowing! ✨', color: 'bg-emerald-500 text-white animate-pulse' };
      case 'clean':
        return { label: 'Fresh Kiln-Dried Bedding! 🪵', color: 'bg-teal-500 text-white animate-bounce' };
      case 'love':
        return { label: 'Tooth Purring with Affection! 💖', color: 'bg-rose-500 text-white animate-pulse' };
      case 'special':
        return { label: 'Project Milestone Care! 🌟', color: 'bg-purple-600 text-white animate-bounce' };
      default:
        return null;
    }
  };

  const reactionBadge = getToolReactionBadge();

  return (
    <div 
      onClick={onPetClick}
      className={`relative w-full h-full flex flex-col items-center justify-center select-none cursor-pointer group ${className}`}
      title={`${petName} (${speciesEmoji}) is currently ${config.label}: ${config.summary}`}
    >
      {/* Dynamic Feedback Reaction Banner or Speech Bubble */}
      {reactionBadge ? (
        <div className={`absolute -top-4 z-30 px-4 py-1.5 rounded-full border-2 border-white shadow-2xl text-xs font-black ${reactionBadge.color}`}>
          {reactionBadge.label}
        </div>
      ) : (
        <div className="absolute -top-3 z-20 px-3.5 py-1.5 rounded-2xl bg-white/95 text-stone-900 border-2 border-stone-800 shadow-lg text-[11px] font-black max-w-[290px] text-center animate-bounce">
          <span className="mr-1">{speciesEmoji}</span>
          <span>{config.speechBubble}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-stone-800 rotate-45" />
        </div>
      )}

      {/* RENDER MODE A: High-Quality Illustrated Character States (Barnaby Holland Lop) */}
      {isBarnabyRabbit && !imageLoadError ? (
        <div className="relative w-full h-full max-h-72 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={`${petName} is currently ${config.label}`}
            onError={() => setImageLoadError(true)}
            className={`w-auto h-full max-h-64 object-contain rounded-3xl drop-shadow-2xl transition-all duration-500 ease-in-out select-none pointer-events-none ${
              stateKey === 'hungry' ? 'brightness-95 saturate-90 scale-[0.98]' :
              stateKey === 'thirsty' ? 'brightness-90 sepia-[0.10] scale-[0.97]' :
              stateKey === 'messy' ? 'contrast-95' :
              stateKey === 'dirty' ? 'brightness-90' :
              stateKey === 'sad' ? 'brightness-90 saturate-85 scale-[0.96] translate-y-1' :
              stateKey === 'clean' ? 'brightness-105 saturate-110 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]' :
              stateKey === 'showReady' ? 'brightness-110 saturate-115 scale-[1.03] drop-shadow-[0_0_20px_rgba(147,51,234,0.6)]' :
              ''
            } ${recentActionTool ? 'scale-105' : ''}`}
          />

          {/* Layered Reactive Particles on Tool Drop */}
          {recentActionTool === 'feed' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-ping text-3xl">
              🌾
            </div>
          )}
          {recentActionTool === 'water' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-bounce text-3xl">
              💧
            </div>
          )}
          {recentActionTool === 'brush' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-pulse text-4xl">
              ✨
            </div>
          )}
          {recentActionTool === 'clean' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-bounce text-3xl">
              🪵
            </div>
          )}
          {recentActionTool === 'love' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-pulse text-4xl">
              💖
            </div>
          )}

          {/* Show-Ready Rosette Ribbon Indicator */}
          {stateKey === 'showReady' && (
            <div className="absolute top-2 right-4 bg-purple-700 text-amber-300 border-2 border-amber-300 px-2.5 py-1 rounded-full text-[10px] font-black shadow-xl flex items-center gap-1 animate-pulse">
              <span>🏆</span>
              <span>Grand Champion Rosette</span>
            </div>
          )}
        </div>
      ) : (
        /* RENDER MODE B: Multi-Species Layered SVG Character */
        <svg
          viewBox="0 0 320 260"
          className={`w-full h-full max-h-72 drop-shadow-2xl transition-all duration-500 ease-in-out ${
            recentActionTool ? 'scale-105 filter drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]' : ''
          }`}
        >
          <defs>
            <linearGradient id="animalFurGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme.primaryFur} />
              <stop offset="60%" stopColor={theme.primaryFur} stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2A170A" />
            </linearGradient>

            <linearGradient id="animalBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme.bellyFur} />
              <stop offset="100%" stopColor="#DFCEB7" />
            </linearGradient>

            <linearGradient id="animalEarInner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme.earColor} />
              <stop offset="100%" stopColor="#C97B78" />
            </linearGradient>

            <filter id="sheenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Ground Shadow */}
          <ellipse cx="160" cy="235" rx="95" ry="16" fill="rgba(0,0,0,0.25)" />

          {/* LAYER 1: ACCESSORIES BEHIND ANIMAL */}
          {stateKey === 'hungry' && (
            <g transform="translate(60, 205)">
              <ellipse cx="25" cy="18" rx="22" ry="9" fill="#9E9E9E" />
              <ellipse cx="25" cy="15" rx="20" ry="7" fill="#E0E0E0" />
              <ellipse cx="25" cy="15" rx="16" ry="5" fill="#BDBDBD" />
              <text x="14" y="18" fontSize="8" fill="#757575" fontWeight="bold">EMPTY</text>
            </g>
          )}

          {stateKey === 'thirsty' && (
            <g transform="translate(50, 140)">
              <rect x="15" y="10" width="16" height="55" rx="5" fill="#B0BEC5" stroke="#78909C" strokeWidth="2" opacity="0.8" />
              <line x1="23" y1="65" x2="23" y2="78" stroke="#90A4AE" strokeWidth="4" strokeLinecap="round" />
              <circle cx="23" cy="78" r="2.5" fill="#CFD8DC" />
              <text x="7" y="40" fontSize="7" fill="#E53935" fontWeight="black">DRY!</text>
            </g>
          )}

          {stateKey === 'dirty' && (
            <g transform="translate(130, 220)">
              <ellipse cx="30" cy="8" rx="16" ry="6" fill="#6D4C41" opacity="0.75" />
              <ellipse cx="75" cy="10" rx="14" ry="5" fill="#5D4037" opacity="0.8" />
            </g>
          )}

          {/* LAYER 2: HINDQUARTERS, BODY & BELLY */}
          {species === 'swine' ? (
            <path d="M 242,175 Q 262,165 256,180 Q 248,188 260,188" fill="none" stroke="#F48FB1" strokeWidth="3.5" strokeLinecap="round" />
          ) : species === 'horses' ? (
            <path d="M 245,170 Q 275,190 268,230 Q 255,235 248,205 Z" fill="#1C1B1F" />
          ) : species === 'cats' || species === 'dogs' ? (
            <path d="M 242,175 Q 275,160 268,135 Q 260,135 255,165 Z" fill="url(#animalFurGrad)" stroke="#381D0B" strokeWidth="1.5" />
          ) : species === 'poultry' ? (
            <path d="M 235,160 Q 270,140 265,180 Q 240,195 235,180 Z" fill="url(#animalFurGrad)" stroke="#B7791F" strokeWidth="1.5" />
          ) : species === 'cavies' ? null : (
            <ellipse cx="245" cy="175" rx="17" ry="15" fill={theme.bellyFur} stroke="#421F0A" strokeWidth="1.5" />
          )}

          {/* Main Body */}
          <path
            d={
              stateKey === 'hungry'
                ? 'M 110,130 Q 155,90 220,120 Q 250,155 240,195 Q 210,225 150,220 Q 105,215 100,170 Z'
                : (stateKey === 'showReady'
                  ? 'M 105,120 Q 150,75 225,105 Q 260,145 245,195 Q 215,230 145,225 Q 95,215 95,160 Z'
                  : 'M 110,125 Q 155,80 225,115 Q 255,150 245,195 Q 215,230 145,225 Q 98,215 98,165 Z')
            }
            fill="url(#animalFurGrad)"
            stroke="#381D0B"
            strokeWidth="2.5"
          />

          {/* Sheep Fluffy Wool */}
          {species === 'sheep' && (
            <g fill="#FFFFFF" opacity="0.95">
              <circle cx="150" cy="100" r="16" />
              <circle cx="175" cy="95" r="18" />
              <circle cx="205" cy="105" r="19" />
              <circle cx="230" cy="125" r="18" />
              <circle cx="240" cy="155" r="18" />
              <circle cx="235" cy="185" r="17" />
              <circle cx="180" cy="120" r="22" />
            </g>
          )}

          {/* Dairy Cattle Piebald Patches */}
          {species === 'dairy' && (
            <g fill="#FFFFFF" opacity="0.9">
              <ellipse cx="145" cy="140" rx="20" ry="15" />
              <ellipse cx="205" cy="150" rx="22" ry="18" />
              <circle cx="230" cy="180" r="12" />
            </g>
          )}

          {/* Plump Underbelly Patch */}
          <path
            d={
              stateKey === 'hungry'
                ? 'M 130,175 Q 170,165 210,185 Q 185,212 145,210 Z'
                : 'M 125,165 Q 170,150 220,175 Q 200,220 140,218 Z'
            }
            fill="url(#animalBellyGrad)"
            opacity="0.9"
          />

          {/* Hindquarter Thigh */}
          <ellipse
            cx="205"
            cy="185"
            rx={stateKey === 'hungry' ? '30' : '36'}
            ry={stateKey === 'hungry' ? '28' : '34'}
            fill="url(#animalFurGrad)"
            stroke="#381D0B"
            strokeWidth="1.5"
          />

          {/* Feet */}
          <ellipse cx="205" cy="225" rx="28" ry="10" fill="url(#animalFurGrad)" stroke="#381D0B" strokeWidth="2" />
          <ellipse cx="125" cy="225" rx="16" ry="9" fill="url(#animalBellyGrad)" stroke="#381D0B" strokeWidth="2" />

          {/* Head & Cheeks */}
          <circle cx="115" cy="135" r="38" fill="url(#animalFurGrad)" stroke="#381D0B" strokeWidth="2.5" />
          <ellipse cx="98" cy="148" rx="20" ry="16" fill="url(#animalBellyGrad)" stroke="#381D0B" strokeWidth="1.5" />
          <ellipse cx="120" cy="148" rx="18" ry="16" fill="url(#animalBellyGrad)" stroke="#381D0B" strokeWidth="1.5" />

          {/* Species Features: Horse mane, Goat horns, Poultry comb */}
          {species === 'horses' && (
            <g>
              <path d="M 125,92 Q 148,118 152,148" stroke="#1C1B1F" strokeWidth="10" strokeLinecap="round" fill="none" />
              <polygon points="112,122 114,126 118,127 115,130 116,134 112,132 108,134 109,130 106,127 110,126" fill="#FFFFFF" />
            </g>
          )}

          {species === 'goats' && (
            <g>
              <path d="M 102,100 Q 88,75 80,68" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 130,100 Q 144,75 152,68" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" fill="none" />
              <polygon points="98,158 104,158 101,172" fill="#EFEBE9" stroke="#8D6E63" strokeWidth="1" />
            </g>
          )}

          {species === 'poultry' && (
            <g>
              <path d="M 104,96 Q 112,78 120,94 Q 128,76 136,96" fill="#D32F2F" stroke="#B71C1C" strokeWidth="1.2" />
              <path d="M 98,152 Q 102,166 98,172 Q 94,166 96,152" fill="#D32F2F" />
            </g>
          )}

          {/* Crown Ridge */}
          <path d="M 95,102 Q 120,92 145,104" fill="none" stroke="#381D0B" strokeWidth="6" strokeLinecap="round" />
          <path d="M 98,102 Q 120,94 142,104" fill="none" stroke={theme.primaryFur} strokeWidth="4" strokeLinecap="round" />

          {/* Ears */}
          {theme.isEarFloppy ? (
            <>
              <path
                d={
                  stateKey === 'sad' || stateKey === 'thirsty'
                    ? 'M 100,105 Q 68,145 72,195 Q 85,202 96,180 Q 108,135 106,108 Z'
                    : 'M 100,104 Q 72,138 75,185 Q 88,192 98,172 Q 109,132 106,107 Z'
                }
                fill="url(#animalFurGrad)"
                stroke="#381D0B"
                strokeWidth="2"
              />
              <path d="M 96,115 Q 78,145 80,175 Q 88,180 94,168 Z" fill="url(#animalEarInner)" opacity="0.85" />
              <path
                d="M 135,105 Q 160,135 158,175 Q 148,182 140,168 Q 130,132 132,108 Z"
                fill="url(#animalFurGrad)"
                stroke="#381D0B"
                strokeWidth="2"
              />
              <path d="M 137,115 Q 152,140 150,165 Q 145,170 142,160 Z" fill="url(#animalEarInner)" opacity="0.85" />
            </>
          ) : (
            <>
              <polygon points="95,105 80,58 112,98" fill="url(#animalFurGrad)" stroke="#381D0B" strokeWidth="2" />
              <polygon points="93,100 83,67 106,96" fill="url(#animalEarInner)" opacity="0.85" />
              <polygon points="125,98 145,58 142,105" fill="url(#animalFurGrad)" stroke="#381D0B" strokeWidth="2" />
              <polygon points="128,96 142,67 138,100" fill="url(#animalEarInner)" opacity="0.85" />
            </>
          )}

          {/* Eyes */}
          <ellipse cx="106" cy="128" rx="8" ry="8.5" fill={theme.eyeColor} />
          <circle cx="103" cy="125" r="3" fill="#FFFFFF" />

          {/* Nose / Snout */}
          {species === 'poultry' ? (
            <polygon points="88,145 103,139 103,149" fill="#FF9800" stroke="#E65100" strokeWidth="1" />
          ) : species === 'swine' ? (
            <g>
              <ellipse cx="98" cy="148" rx="14" ry="10" fill="#F48FB1" stroke="#C2185B" strokeWidth="1.2" />
              <ellipse cx="94" cy="148" rx="2" ry="3" fill="#880E4F" />
              <ellipse cx="102" cy="148" rx="2" ry="3" fill="#880E4F" />
            </g>
          ) : (
            <polygon points="98,142 104,142 101,146" fill="#F48FB1" stroke="#C2185B" strokeWidth="0.8" />
          )}

          {/* Mouth */}
          <path
            d={stateKey === 'sad' ? 'M 96,154 Q 101,151 106,154' : 'M 96,151 Q 101,155 106,151'}
            stroke="#5D4037"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Show-Ready Rosette */}
          {stateKey === 'showReady' && (
            <g transform="translate(195, 115)" filter="url(#sheenGlow)">
              <circle cx="20" cy="20" r="14" fill="#6A1B9A" stroke="#FFD54F" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="9" fill="#9C27B0" />
              <text x="14" y="24" fontSize="11" fill="#FFD54F" fontWeight="black">★</text>
              <polygon points="14,32 10,55 16,50 20,55 18,33" fill="#6A1B9A" />
              <polygon points="22,33 24,55 28,50 34,55 26,32" fill="#7B1FA2" />
            </g>
          )}

          {/* Clean / Show Sparkles */}
          {(stateKey === 'clean' || stateKey === 'showReady' || recentActionTool === 'brush') && (
            <g fill="#FFD700" stroke="#FFF" strokeWidth="0.5">
              <path d="M 140,85 L 142,75 L 144,85 L 154,87 L 144,89 L 142,99 L 140,89 L 130,87 Z" />
              <path d="M 230,105 L 231,98 L 233,105 L 240,106 L 233,108 L 231,115 L 230,108 L 223,106 Z" />
            </g>
          )}
        </svg>
      )}

      {/* Dominant Need Status Ribbon */}
      <div className="mt-2 flex items-center gap-2">
        <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${config.badgeColor}`}>
          State: {config.label}
        </span>
        <span className="text-[11px] font-mono text-stone-300 font-bold">
          [{config.dominantNeedText}]
        </span>
      </div>
    </div>
  );
}
