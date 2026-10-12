// WarrenWise Animal Academy - Live Hands-On Trail Action Game
// Real Player Trail Movement & Overland Wagon Driving:
// 1. 3-Lane Real-Time Driving Controls (Steer Left/Right via Arrow Keys, A/D, or Touch Buttons)
// 2. Pace Throttle: Careful Walk (1x), Steady Trot (2x), Fast Gallop (3x)
// 3. Collectibles: Timothy Hay 🌾 (+Feed), Spring Water 💧 (+Water), Trail Stars ⭐ (+Points), Hearts 💖 (+Bond)
// 4. Trail Hazards: Boulders 🪨, Fallen Timber 🪵, Mud Ruts 🌊 (Steer to dodge!)
// 5. Live Miles Advancement: Drives up to Mile 100!
// 6. End-of-Trail Milestone: When reaching Mile 100, fair gates open and you enter the Championship Judging Show!

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Compass, Trophy, Award, Sparkles, Heart, Droplets, 
  Wheat, Star, ArrowLeft, ArrowRight, Pause, Play, 
  RotateCcw, ShieldCheck, Flame, FastForward, CheckCircle2,
  ChevronRight, Volume2, ShieldAlert, Mountain
} from 'lucide-react';
import { soundEffects } from '../../utils/audioEffects';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

export default function LiveTrailActionGame({
  questState,
  trailPack,
  onUpdateQuestState,
  onEnterShowRing,
  onOpenCareModal,
  onBackToMap
}) {
  // Current position and lane: 0 = Left, 1 = Center, 2 = Right
  const [wagonLane, setWagonLane] = useState(1);
  const [pace, setPace] = useState('trot'); // 'walk' | 'trot' | 'gallop'
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Real-time trail miles (sync with questState, caps at 100)
  const [currentMile, setCurrentMile] = useState(questState?.currentMile || 0);
  const [trailPoints, setTrailPoints] = useState(questState?.trailPoints || 0);
  const [wagonHealth, setWagonHealth] = useState(questState?.wagonStatus?.durability || 85);
  const [feedSupply, setFeedSupply] = useState(questState?.supplies?.feed || 60);
  const [waterSupply, setWaterSupply] = useState(questState?.supplies?.water || 50);

  // Active spawning items & obstacles
  // Each item: { id, lane: 0|1|2, yPct: 0 to 100, type: 'hay'|'water'|'star'|'heart'|'rock'|'log'|'mud' }
  const [trailEntities, setTrailEntities] = useState([]);
  const [floatingParticles, setFloatingParticles] = useState([]);
  const [screenShake, setScreenShake] = useState(false);
  const [trailReachedEnd, setTrailReachedEnd] = useState(currentMile >= 100);

  const companion = trailPack?.companion || {
    name: 'Barnaby',
    species: 'Rabbit',
    avatarEmoji: '🐰'
  };

  const laneXClasses = [
    'left-[18%]',   // Lane 0: Left
    'left-[50%]',   // Lane 1: Center
    'left-[82%]'    // Lane 2: Right
  ];

  // Pace speed configuration
  const paceConfig = {
    walk: { label: 'Careful Walk', speed: 1.0, mileRate: 0.15, burnRate: 0.05, desc: 'Gentle on animal & wagon' },
    trot: { label: 'Steady Trot', speed: 1.8, mileRate: 0.35, burnRate: 0.10, desc: 'Balanced overland pace' },
    gallop: { label: 'Fast Gallop', speed: 2.8, mileRate: 0.70, burnRate: 0.22, desc: 'High speed miles, burns extra forage!' }
  };

  // --- Real Player Steering Controls ---
  const steerLeft = useCallback(() => {
    setWagonLane(prev => {
      if (prev > 0) {
        soundEffects.playRustle();
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const steerRight = useCallback(() => {
    setWagonLane(prev => {
      if (prev < 2) {
        soundEffects.playRustle();
        return prev + 1;
      }
      return prev;
    });
  }, []);

  // Keyboard controls listener: Left/Right Arrow or A/D
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPlaying || trailReachedEnd) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        steerLeft();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        steerRight();
      } else if (e.key === '1') {
        setPace('walk');
      } else if (e.key === '2') {
        setPace('trot');
      } else if (e.key === '3') {
        setPace('gallop');
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(p => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, steerLeft, steerRight, trailReachedEnd]);

  // Main game loop (runs at ~30-40 ticks per second)
  useEffect(() => {
    if (!isPlaying || trailReachedEnd) return;

    const gameInterval = setInterval(() => {
      const config = paceConfig[pace];

      // 1. Advance miles
      setCurrentMile(prevMile => {
        const nextMile = Math.min(100, +(prevMile + config.mileRate).toFixed(1));
        if (nextMile >= 100) {
          setTrailReachedEnd(true);
          soundEffects.playLevelUpFanfare();
        }
        return nextMile;
      });

      // 2. Supply consumption
      setFeedSupply(f => Math.max(10, +(f - config.burnRate * 0.4).toFixed(1)));
      setWaterSupply(w => Math.max(10, +(w - config.burnRate * 0.4).toFixed(1)));

      // 3. Move existing entities forward (increase yPct from 0 toward 100)
      setTrailEntities(prevEntities => {
        const updated = [];

        for (const ent of prevEntities) {
          const newY = ent.yPct + config.speed * 2.2;

          // Check collision with player wagon (when entity reaches bottom zone: yPct between 74% and 92%)
          if (newY >= 74 && newY <= 92 && ent.lane === wagonLane && !ent.collected) {
            ent.collected = true;
            handleCollision(ent);
          } else if (newY <= 105) {
            updated.push({ ...ent, yPct: newY });
          }
        }

        // 4. Randomly spawn new entities at top (yPct = 0)
        if (Math.random() < 0.28) {
          const randomLane = Math.floor(Math.random() * 3);
          const types = [
            'hay', 'water', 'star', 'heart',
            'rock', 'log', 'mud'
          ];
          // Bias toward goodies vs hazards
          const weights = [0.22, 0.22, 0.18, 0.12, 0.12, 0.08, 0.06];
          let rand = Math.random();
          let chosenType = 'hay';
          for (let i = 0; i < types.length; i++) {
            if (rand < weights[i]) {
              chosenType = types[i];
              break;
            }
            rand -= weights[i];
          }

          updated.push({
            id: Math.random(),
            lane: randomLane,
            yPct: 0,
            type: chosenType,
            collected: false
          });
        }

        return updated;
      });

    }, 80);

    return () => clearInterval(gameInterval);
  }, [isPlaying, pace, wagonLane, trailReachedEnd]);

  // Handle player touching an item or hitting a hazard
  const handleCollision = (entity) => {
    switch (entity.type) {
      case 'hay':
        soundEffects.playRustle();
        setFeedSupply(f => Math.min(100, Math.round(f + 8)));
        spawnParticle('🌾 +8 Feed', '#10b981');
        break;

      case 'water':
        soundEffects.playWater();
        setWaterSupply(w => Math.min(100, Math.round(w + 8)));
        spawnParticle('💧 +8 Water', '#06b6d4');
        break;

      case 'star':
        soundEffects.playSuccessChime();
        setTrailPoints(p => p + 15);
        spawnParticle('⭐ +15 Pts!', '#f59e0b');
        break;

      case 'heart':
        soundEffects.playPurr();
        spawnParticle('💖 +Bond XP!', '#ec4899');
        break;

      case 'rock':
        soundEffects.playAlert();
        setWagonHealth(h => Math.max(20, h - 8));
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 400);
        spawnParticle('💥 Rock Strike! -8 Durability', '#ef4444');
        break;

      case 'log':
        soundEffects.playAlert();
        setWagonHealth(h => Math.max(20, h - 5));
        setScreenShake(true);
        setTimeout(() => setScreenShake(false), 400);
        spawnParticle('🪵 Log Jar! -5 Durability', '#f97316');
        break;

      case 'mud':
        soundEffects.playRustle();
        setPace('walk');
        spawnParticle('🌊 Mud Drag! Slowed to Walk', '#a855f7');
        break;

      default:
        break;
    }
  };

  const spawnParticle = (text, color) => {
    const id = Math.random();
    setFloatingParticles(prev => [...prev.slice(-4), { id, text, color }]);
    setTimeout(() => {
      setFloatingParticles(prev => prev.filter(p => p.id !== id));
    }, 1500);
  };

  // Sync state back to persistence when unmounting or completing
  const syncState = useCallback(() => {
    const updated = {
      ...questState,
      currentMile: Math.round(currentMile),
      trailPoints,
      wagonStatus: {
        ...(questState.wagonStatus || {}),
        durability: wagonHealth
      },
      supplies: {
        ...(questState.supplies || {}),
        feed: Math.round(feedSupply),
        water: Math.round(waterSupply)
      },
      trailCompleted: currentMile >= 100 || questState.trailCompleted
    };

    if (onUpdateQuestState) {
      onUpdateQuestState(updated);
    }
    TrailQuestEngine.saveState(questState.learnerId || 'current_learner', updated);
  }, [currentMile, trailPoints, wagonHealth, feedSupply, waterSupply, questState, onUpdateQuestState]);

  useEffect(() => {
    syncState();
  }, [currentMile, syncState]);

  return (
    <div className={`space-y-4 max-w-5xl mx-auto select-none ${screenShake ? 'animate-bounce' : ''}`}>
      
      {/* Top HUD: Mile Progress & Vital Gauges */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 text-white shadow-xl flex flex-wrap items-center justify-between gap-4">
        
        {/* Mile Progress */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
            🚜
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-extrabold">
                Live Overland Trail Driving
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                Real Movement Active
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>Mile {currentMile.toFixed(1)}</span>
              <span className="text-xs text-slate-400 font-medium">/ 100 Miles to Fair</span>
            </div>
          </div>
        </div>

        {/* Live Gauges Bar */}
        <div className="flex items-center gap-4 text-xs font-bold">
          {/* Wagon Durability */}
          <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl">
            <div className="text-[10px] text-slate-400">Wagon Health</div>
            <div className={`text-sm font-black ${wagonHealth > 50 ? 'text-emerald-400' : 'text-rose-400'}`}>
              🛠️ {wagonHealth}%
            </div>
          </div>

          {/* Water Flask */}
          <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl">
            <div className="text-[10px] text-slate-400">Water Flask</div>
            <div className="text-sm font-black text-sky-400">
              💧 {Math.round(waterSupply)}%
            </div>
          </div>

          {/* Feed Hay */}
          <div className="bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-xl">
            <div className="text-[10px] text-slate-400">Hay Supply</div>
            <div className="text-sm font-black text-amber-400">
              🌾 {Math.round(feedSupply)}%
            </div>
          </div>

          {/* Trail Points */}
          <div className="bg-slate-950/80 border border-amber-500/30 px-3 py-1.5 rounded-xl text-amber-300">
            <div className="text-[10px] text-amber-400">Trail Points</div>
            <div className="text-sm font-black text-amber-400">
              ⭐ {trailPoints}
            </div>
          </div>
        </div>

        {/* Back / Camp Actions */}
        <div className="flex items-center gap-2">
          {onOpenCareModal && (
            <button
              onClick={() => {
                soundEffects.playTap();
                setIsPlaying(false);
                onOpenCareModal('brush');
              }}
              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>🌿 Pet Care Camp</span>
            </button>
          )}

          <button
            onClick={() => {
              syncState();
              if (onBackToMap) onBackToMap();
            }}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            <span>Overview Map</span>
          </button>
        </div>
      </div>

      {/* Main Action Game Canvas (3-Lane Highway Viewport) */}
      <div className="relative h-[440px] sm:h-[480px] bg-gradient-to-b from-sky-700 via-amber-800/40 to-stone-900 rounded-3xl border-4 border-amber-900/60 overflow-hidden shadow-2xl">
        
        {/* Parallax Horizon & Mountains */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-sky-900 via-indigo-950 to-transparent pointer-events-none">
          {/* Mountain Silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between opacity-30 text-slate-400 text-6xl">
            <span>⛰️</span>
            <span>🏔️</span>
            <span>⛰️</span>
            <span>🏔️</span>
          </div>
        </div>

        {/* Floating Particles notifications */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 pointer-events-none">
          {floatingParticles.map(p => (
            <div 
              key={p.id}
              className="px-3 py-1 rounded-full text-xs font-black shadow-lg animate-bounce"
              style={{ backgroundColor: p.color, color: '#fff' }}
            >
              {p.text}
            </div>
          ))}
        </div>

        {/* 3-Lane Road Track (Perspective Ground) */}
        <div className="absolute inset-x-8 sm:inset-x-20 bottom-0 top-20 bg-gradient-to-b from-stone-800 to-amber-950/90 border-x-4 border-amber-600/50 rounded-t-3xl overflow-hidden">
          
          {/* Road Lane Dividers (Dashed vertical lines) */}
          <div className="absolute inset-y-0 left-1/3 w-1 border-r-2 border-dashed border-amber-300/30" />
          <div className="absolute inset-y-0 left-2/3 w-1 border-r-2 border-dashed border-amber-300/30" />

          {/* Road Dirt Texture Stripes moving downwards */}
          <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          {/* Trail Entities (Collectibles & Hazards) */}
          {trailEntities.map(ent => {
            const lanePosClass = laneXClasses[ent.lane];
            const entityVisuals = {
              hay: { icon: '🌾', label: '+Feed', bg: 'bg-emerald-500/20 border-emerald-400 text-emerald-200' },
              water: { icon: '💧', label: '+Water', bg: 'bg-sky-500/20 border-sky-400 text-sky-200' },
              star: { icon: '⭐', label: '+15 Pts', bg: 'bg-amber-500/20 border-amber-400 text-amber-200' },
              heart: { icon: '💖', label: '+Love', bg: 'bg-rose-500/20 border-rose-400 text-rose-200' },
              rock: { icon: '🪨', label: 'DODGE!', bg: 'bg-rose-950 border-rose-600 text-rose-300' },
              log: { icon: '🪵', label: 'LOG!', bg: 'bg-amber-950 border-amber-600 text-amber-300' },
              mud: { icon: '🌊', label: 'MUD!', bg: 'bg-purple-950 border-purple-600 text-purple-300' }
            };

            const visual = entityVisuals[ent.type] || entityVisuals.hay;

            return (
              <div
                key={ent.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 flex flex-col items-center z-20 ${lanePosClass}`}
                style={{ top: `${ent.yPct}%` }}
              >
                <span className="text-3xl sm:text-4xl filter drop-shadow-md animate-pulse">
                  {visual.icon}
                </span>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full border shadow-sm ${visual.bg}`}>
                  {visual.label}
                </span>
              </div>
            );
          })}

          {/* Player Covered Wagon & Companion (Bottom of Canvas) */}
          <div 
            className={`absolute bottom-6 -translate-x-1/2 transition-all duration-150 flex flex-col items-center z-30 select-none ${laneXClasses[wagonLane]}`}
          >
            {/* Companion in carrier peek */}
            <div className="relative -mb-2 bg-amber-400/90 border border-amber-300 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black shadow flex items-center gap-1">
              <span>{companion.avatarEmoji}</span>
              <span>{companion.name}</span>
            </div>

            {/* Covered Wagon Icon & Team */}
            <div className="text-5xl sm:text-6xl filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]">
              🚜
            </div>

            {/* Wagon Shadow */}
            <div className="w-16 h-3 bg-black/50 rounded-full blur-xs -mt-1" />
          </div>

        </div>

        {/* Milestone Finish Gate (Visible when reaching Mile 100) */}
        {trailReachedEnd && (
          <div className="absolute inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fadeIn space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-amber-400 text-white flex items-center justify-center text-4xl shadow-2xl animate-bounce">
              🏆
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-black bg-amber-950/80 border border-amber-500/50 px-3 py-1 rounded-full">
                100-Mile Trail Expedition Completed!
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Grand Championship Fair Arena Gates Open!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                You have driven the entire 100-mile trail! Your companion {companion.name} is ready for official ARBA inspection and placing.
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-amber-500/40 rounded-2xl max-w-sm w-full text-xs text-left space-y-1.5">
              <div className="flex justify-between text-slate-300">
                <span>Total Trail Points Earned:</span>
                <strong className="text-amber-400">{trailPoints} Pts</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Final Wagon Durability:</span>
                <strong className="text-emerald-400">{wagonHealth}%</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Showmanship Entry Status:</span>
                <strong className="text-purple-400">Grand Champion Eligible ✨</strong>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  soundEffects.playVictoryFanfare();
                  syncState();
                  if (onEnterShowRing) onEnterShowRing();
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:brightness-110 text-white font-black text-sm rounded-2xl shadow-xl shadow-purple-900/50 flex items-center justify-center gap-2 transition hover:scale-105 cursor-pointer"
              >
                <Trophy className="w-5 h-5 text-amber-300" />
                <span>Enter Championship Judging Show Ring!</span>
              </button>

              <button
                onClick={() => {
                  syncState();
                  if (onBackToMap) onBackToMap();
                }}
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-2xl transition cursor-pointer"
              >
                <span>Return to Caravan Camp</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Real Hands-On Steering & Pace Controls (Bottom Gamepad) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left / Right Steering Buttons (Mobile & Keyboard friendly) */}
        <div className="flex items-center gap-2">
          <button
            onClick={steerLeft}
            disabled={wagonLane === 0 || trailReachedEnd}
            className="w-16 h-14 sm:w-20 sm:h-16 bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700 hover:border-amber-400 active:scale-95 disabled:opacity-40 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-1 shadow-lg transition cursor-pointer"
            title="Steer Left (A or Left Arrow)"
          >
            <ArrowLeft className="w-6 h-6 text-amber-400" />
            <span className="text-xs text-slate-400">Left</span>
          </button>

          <button
            onClick={steerRight}
            disabled={wagonLane === 2 || trailReachedEnd}
            className="w-16 h-14 sm:w-20 sm:h-16 bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700 hover:border-amber-400 active:scale-95 disabled:opacity-40 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-1 shadow-lg transition cursor-pointer"
            title="Steer Right (D or Right Arrow)"
          >
            <span className="text-xs text-slate-400">Right</span>
            <ArrowRight className="w-6 h-6 text-amber-400" />
          </button>
        </div>

        {/* Pace Selector (Walk, Trot, Gallop) */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          {[
            { id: 'walk', label: '1. Walk (Safe)', icon: '🚶' },
            { id: 'trot', label: '2. Trot (Standard)', icon: '🐎' },
            { id: 'gallop', label: '3. Gallop (Speed!)', icon: '⚡' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => {
                soundEffects.playTap();
                setPace(p.id);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                pace === p.id
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>{p.icon}</span>
              <span className="hidden sm:inline">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Pause / Play Brake */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playTap();
              setIsPlaying(p => !p);
            }}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer border border-slate-700"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            <span>{isPlaying ? 'Brake Wagon' : 'Resume Drive'}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
