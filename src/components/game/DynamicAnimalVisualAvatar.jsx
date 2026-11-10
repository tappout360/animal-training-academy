// WarrenWise Animal Academy - Dynamic Visual Need Animal Avatar
// High-Quality SVG Layered Character (Barnaby the Holland Lop)
// Seamlessly morphs between 8 visual states:
// 1. Hungry (lean belly, licking empty crock)
// 2. Thirsty (dry droopy, near dry bottle)
// 3. Messy (loose shedding fur tufts, unkempt coat)
// 4. Dirty (mud dust smudges, soiled bedding)
// 5. Sad (mournful eyes, droopy ears, lonely posture)
// 6. Happy & Content (bright smiling eyes, soft chewing, perked lop)
// 7. Clean & Fluffy (velvet glow, sparkles, immaculate coat)
// 8. Grand Champion Show-Ready (ARBA compact pose, purple rosette, confident stance)

import React from 'react';
import { Sparkles, Heart, Trophy, Droplets, AlertCircle } from 'lucide-react';
import { ANIMAL_VISUAL_STATES } from '../../services/AnimalVisualStateEngine';

export default function DynamicAnimalVisualAvatar({
  stateKey = 'happy',
  petName = 'Barnaby',
  speciesEmoji = '🐰',
  onPetClick,
  className = ''
}) {
  const config = ANIMAL_VISUAL_STATES[stateKey] || ANIMAL_VISUAL_STATES.happy;

  return (
    <div 
      onClick={onPetClick}
      className={`relative w-full h-full flex flex-col items-center justify-center select-none cursor-pointer group ${className}`}
      title={`${petName} is currently ${config.label} (${config.summary})`}
    >
      {/* Speech Bubble / Thought Cloud */}
      <div className="absolute -top-3 z-20 px-3 py-1.5 rounded-2xl bg-white/95 text-stone-900 border-2 border-stone-800 shadow-lg text-[11px] font-black max-w-[280px] text-center animate-bounce">
        <span className="mr-1">{speciesEmoji}</span>
        <span>{config.speechBubble}</span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-stone-800 rotate-45" />
      </div>

      {/* SVG Layered Holland Lop Character */}
      <svg
        viewBox="0 0 320 260"
        className="w-full h-full max-h-72 drop-shadow-2xl transition-all duration-500 ease-in-out"
      >
        <defs>
          {/* Fur Gradient - Rich Tortoiseshell Holland Lop */}
          <linearGradient id="hollandFur" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stateKey === 'clean' || stateKey === 'showReady' ? '#E59247' : (stateKey === 'thirsty' || stateKey === 'messy' ? '#B87232' : '#D27D2D')} />
            <stop offset="60%" stopColor={stateKey === 'clean' || stateKey === 'showReady' ? '#C06B22' : '#994C12'} />
            <stop offset="100%" stopColor="#5A2E12" />
          </linearGradient>

          {/* Underbelly Cream Gradient */}
          <linearGradient id="creamBelly" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2DC" />
            <stop offset="100%" stopColor="#E6CBA8" />
          </linearGradient>

          {/* Ear Shading */}
          <linearGradient id="earInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5B8B5" />
            <stop offset="100%" stopColor="#D98A87" />
          </linearGradient>

          {/* Glow / Sparkle Filter for Clean & ShowReady */}
          <filter id="championGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="160" cy="235" rx="95" ry="16" fill="rgba(0,0,0,0.25)" />

        {/* ======================================================== */}
        {/* LAYER 1: ACCESSORIES BEHIND ANIMAL (BOWLS, SHAVINGS)     */}
        {/* ======================================================== */}
        {stateKey === 'hungry' && (
          <g transform="translate(60, 205)">
            {/* Empty Ceramic Feed Crock */}
            <ellipse cx="25" cy="18" rx="22" ry="9" fill="#9E9E9E" />
            <ellipse cx="25" cy="15" rx="20" ry="7" fill="#E0E0E0" />
            <ellipse cx="25" cy="15" rx="16" ry="5" fill="#BDBDBD" />
            <text x="14" y="18" fontSize="8" fill="#757575" fontWeight="bold">EMPTY</text>
          </g>
        )}

        {stateKey === 'thirsty' && (
          <g transform="translate(50, 140)">
            {/* Empty Water Bottle & Dry Sipper Spout */}
            <rect x="15" y="10" width="16" height="55" rx="5" fill="#B0BEC5" stroke="#78909C" strokeWidth="2" opacity="0.8" />
            <line x1="23" y1="65" x2="23" y2="78" stroke="#90A4AE" strokeWidth="4" strokeLinecap="round" />
            <circle cx="23" cy="78" r="2.5" fill="#CFD8DC" />
            <text x="7" y="40" fontSize="7" fill="#E53935" fontWeight="black">DRY!</text>
          </g>
        )}

        {stateKey === 'dirty' && (
          <g transform="translate(130, 220)">
            {/* Soiled Bedding Spots on floor */}
            <ellipse cx="30" cy="8" rx="16" ry="6" fill="#6D4C41" opacity="0.75" />
            <ellipse cx="75" cy="10" rx="14" ry="5" fill="#5D4037" opacity="0.8" />
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 2: HINDQUARTERS, BODY & BELLY (MORPHS WITH FULLNESS)*/}
        {/* ======================================================== */}
        {/* Fluffy Cotton Tail */}
        <ellipse cx="245" cy="175" rx="17" ry="15" fill="#FFF2DC" stroke="#C06B22" strokeWidth="1.5" />

        {/* Main Body - Compact ARBA Mandolin Arc */}
        <path
          d={
            stateKey === 'hungry'
              ? 'M 110,130 Q 155,90 220,120 Q 250,155 240,195 Q 210,225 150,220 Q 105,215 100,170 Z'
              : (stateKey === 'showReady'
                ? 'M 105,120 Q 150,75 225,105 Q 260,145 245,195 Q 215,230 145,225 Q 95,215 95,160 Z'
                : 'M 110,125 Q 155,80 225,115 Q 255,150 245,195 Q 215,230 145,225 Q 98,215 98,165 Z')
          }
          fill="url(#hollandFur)"
          stroke="#421F0A"
          strokeWidth="2.5"
        />

        {/* Plump Underbelly Patch (Leaner if hungry, Plump if happy/showReady) */}
        <path
          d={
            stateKey === 'hungry'
              ? 'M 130,175 Q 170,165 210,185 Q 185,212 145,210 Z'
              : 'M 125,165 Q 170,150 220,175 Q 200,220 140,218 Z'
          }
          fill="url(#creamBelly)"
          opacity="0.9"
        />

        {/* Heavy Rounded Hindquarter Thigh (Compact breed standard) */}
        <ellipse
          cx="205"
          cy="185"
          rx={stateKey === 'hungry' ? '30' : '36'}
          ry={stateKey === 'hungry' ? '28' : '34'}
          fill="url(#hollandFur)"
          stroke="#421F0A"
          strokeWidth="1.5"
        />

        {/* Back Foot resting flat on ground */}
        <ellipse cx="205" cy="225" rx="28" ry="10" fill="url(#hollandFur)" stroke="#421F0A" strokeWidth="2" />
        <line x1="222" y1="221" x2="222" y2="230" stroke="#421F0A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="214" y1="221" x2="214" y2="231" stroke="#421F0A" strokeWidth="1.5" strokeLinecap="round" />

        {/* Front Paw Supporting Chest */}
        <ellipse cx="125" cy="225" rx="16" ry="9" fill="url(#creamBelly)" stroke="#421F0A" strokeWidth="2" />
        <line x1="120" y1="222" x2="120" y2="229" stroke="#421F0A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="126" y1="222" x2="126" y2="229" stroke="#421F0A" strokeWidth="1.5" strokeLinecap="round" />

        {/* ======================================================== */}
        {/* LAYER 3: DIRT SMUDGES / LOOSE FUR SHEDDING TUFTS         */}
        {/* ======================================================== */}
        {stateKey === 'dirty' && (
          <g>
            {/* Mud / Dirt Spots on hindquarters & paw */}
            <circle cx="215" cy="180" r="5" fill="#4E342E" opacity="0.85" />
            <circle cx="228" cy="190" r="4" fill="#3E2723" opacity="0.9" />
            <circle cx="120" cy="222" r="3.5" fill="#4E342E" opacity="0.85" />
            <circle cx="180" cy="205" r="4" fill="#5D4037" opacity="0.8" />
          </g>
        )}

        {stateKey === 'messy' && (
          <g stroke="#E59247" strokeWidth="2" strokeLinecap="round">
            {/* Loose shedding fur spikes along spine and flanks */}
            <line x1="175" y1="90" x2="185" y2="78" />
            <line x1="195" y1="100" x2="210" y2="88" />
            <line x1="225" y1="125" x2="242" y2="115" />
            <line x1="140" y1="140" x2="155" y2="135" />
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 4: HEAD, CHEEKS & HOLLAND LOP CROWN                */}
        {/* ======================================================== */}
        {/* Broad Rounded Head (ARBA standard) */}
        <circle cx="115" cy="135" r="38" fill="url(#hollandFur)" stroke="#421F0A" strokeWidth="2.5" />

        {/* Cream Muzzle & Full Cheeks */}
        <ellipse cx="98" cy="148" rx="20" ry="16" fill="url(#creamBelly)" stroke="#421F0A" strokeWidth="1.5" />
        <ellipse cx="120" cy="148" rx="18" ry="16" fill="url(#creamBelly)" stroke="#421F0A" strokeWidth="1.5" />

        {/* Holland Lop Horseshoe Crown (Raised cartilage ridge between ears) */}
        <path
          d="M 95,102 Q 120,92 145,104"
          fill="none"
          stroke="#421F0A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 98,102 Q 120,94 142,104"
          fill="none"
          stroke="#D27D2D"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* ======================================================== */}
        {/* LAYER 5: FLOPPY LOP EARS (DROOP/PERK ACCORDING TO STATE) */}
        {/* ======================================================== */}
        {/* Left Lop Ear (Drops down alongside cheek) */}
        <path
          d={
            stateKey === 'sad' || stateKey === 'thirsty'
              ? 'M 100,105 Q 68,145 72,195 Q 85,202 96,180 Q 108,135 106,108 Z' // Extra droopy
              : (stateKey === 'showReady'
                ? 'M 100,103 Q 75,135 78,180 Q 90,188 100,168 Q 110,130 106,106 Z' // Perfect vertical drop
                : 'M 100,104 Q 72,138 75,185 Q 88,192 98,172 Q 109,132 106,107 Z')
          }
          fill="url(#hollandFur)"
          stroke="#421F0A"
          strokeWidth="2"
        />
        <path
          d="M 96,115 Q 78,145 80,175 Q 88,180 94,168 Z"
          fill="url(#earInner)"
          opacity="0.85"
        />

        {/* Right Lop Ear (Angled slightly behind head in 3/4 view) */}
        <path
          d="M 135,105 Q 160,135 158,175 Q 148,182 140,168 Q 130,132 132,108 Z"
          fill="url(#hollandFur)"
          stroke="#421F0A"
          strokeWidth="2"
        />
        <path
          d="M 137,115 Q 152,140 150,165 Q 145,170 142,160 Z"
          fill="url(#earInner)"
          opacity="0.85"
        />

        {/* ======================================================== */}
        {/* LAYER 6: EYES & FACIAL EXPRESSIONS (EXPRESSIVE MORPH)     */}
        {/* ======================================================== */}
        {stateKey === 'hungry' && (
          <g>
            {/* Hungry wide, searching eye */}
            <ellipse cx="106" cy="128" rx="8" ry="9" fill="#1A120B" />
            <circle cx="104" cy="125" r="3.2" fill="#FFFFFF" />
            <circle cx="108" cy="131" r="1.5" fill="#FFFFFF" />
            {/* Soft worried brow */}
            <path d="M 98,118 Q 106,121 114,117" stroke="#421F0A" strokeWidth="1.8" fill="none" />
          </g>
        )}

        {stateKey === 'thirsty' && (
          <g>
            {/* Tired, half-closed drooping eye */}
            <ellipse cx="106" cy="130" rx="7.5" ry="5.5" fill="#2E1C0C" />
            <circle cx="104" cy="128" r="2" fill="#FFFFFF" />
            <path d="M 98,124 Q 106,128 114,126" stroke="#421F0A" strokeWidth="2" fill="none" />
          </g>
        )}

        {stateKey === 'sad' && (
          <g>
            {/* Big mournful puppy-dog bunny eye with tear reflection */}
            <ellipse cx="106" cy="129" rx="8.5" ry="9.5" fill="#1C140E" />
            <circle cx="103" cy="126" r="3.8" fill="#FFFFFF" />
            <circle cx="109" cy="132" r="2.2" fill="#E1F5FE" />
            {/* Sad downward brow */}
            <path d="M 97,121 Q 105,116 115,121" stroke="#421F0A" strokeWidth="2" fill="none" />
          </g>
        )}

        {(stateKey === 'happy' || stateKey === 'clean') && (
          <g>
            {/* Bright, content, alert eye with double light-gleam */}
            <ellipse cx="106" cy="128" rx="8" ry="8.5" fill="#1C140E" />
            <circle cx="103" cy="125" r="3" fill="#FFFFFF" />
            <circle cx="108" cy="130" r="1.5" fill="#FFFFFF" />
            <path d="M 98,117 Q 106,115 114,118" stroke="#421F0A" strokeWidth="1.8" fill="none" />
          </g>
        )}

        {stateKey === 'showReady' && (
          <g>
            {/* Confident champion eye with radiant glint */}
            <ellipse cx="106" cy="127" rx="8.5" ry="9" fill="#140D07" />
            <circle cx="103" cy="124" r="3.5" fill="#FFFFFF" />
            <circle cx="109" cy="129" r="1.8" fill="#FFF9C4" />
            {/* Steady confident pose brow */}
            <path d="M 98,116 Q 106,114 115,117" stroke="#421F0A" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* Nose (Soft Pink Y-Shaped Hare Cleft) */}
        <polygon points="98,142 104,142 101,146" fill="#F48FB1" stroke="#C2185B" strokeWidth="0.8" />
        <path d="M 101,146 L 101,151" stroke="#C2185B" strokeWidth="1.2" />

        {/* Mouth (Licking lips if hungry, smile if happy) */}
        {stateKey === 'hungry' ? (
          <g>
            {/* Pink tongue licking upper lip */}
            <path d="M 96,152 Q 101,154 106,152" stroke="#5D4037" strokeWidth="1.2" fill="none" />
            <path d="M 98,150 Q 102,146 106,150 Q 104,156 98,150" fill="#F06292" />
          </g>
        ) : (
          <path
            d={
              stateKey === 'sad'
                ? 'M 96,154 Q 101,151 106,154' // Soft frown
                : 'M 96,151 Q 101,155 106,151' // Warm smile
            }
            stroke="#5D4037"
            strokeWidth="1.4"
            fill="none"
          />
        )}

        {/* Whiskers */}
        <g stroke="#9E9E9E" strokeWidth="1" opacity="0.75">
          <line x1="93" y1="148" x2="68" y2="142" />
          <line x1="93" y1="151" x2="66" y2="152" />
          <line x1="93" y1="154" x2="70" y2="162" />
          <line x1="112" y1="150" x2="135" y2="147" />
          <line x1="112" y1="153" x2="137" y2="156" />
        </g>

        {/* ======================================================== */}
        {/* LAYER 7: FOREGROUND ACCESSORIES (ROSETTES, SPARKLES)      */}
        {/* ======================================================== */}
        {stateKey === 'showReady' && (
          <g transform="translate(195, 115)" filter="url(#championGlow)">
            {/* ARBA Grand Champion Purple Rosette Ribbon pinned on carrier */}
            <circle cx="20" cy="20" r="14" fill="#6A1B9A" stroke="#FFD54F" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="9" fill="#9C27B0" />
            <text x="14" y="24" fontSize="11" fill="#FFD54F" fontWeight="black">★</text>
            {/* Ribbon Streamers */}
            <polygon points="14,32 10,55 16,50 20,55 18,33" fill="#6A1B9A" />
            <polygon points="22,33 24,55 28,50 34,55 26,32" fill="#7B1FA2" />
          </g>
        )}

        {(stateKey === 'clean' || stateKey === 'showReady') && (
          <g fill="#FFD700" stroke="#FFF" strokeWidth="0.5">
            {/* Twinkling sparkles radiating from coat */}
            <path d="M 140,85 L 142,75 L 144,85 L 154,87 L 144,89 L 142,99 L 140,89 L 130,87 Z" />
            <path d="M 230,105 L 231,98 L 233,105 L 240,106 L 233,108 L 231,115 L 230,108 L 223,106 Z" />
            <path d="M 90,80 L 91,74 L 92,80 L 98,81 L 92,82 L 91,88 L 90,82 L 84,81 Z" />
          </g>
        )}
      </svg>

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
