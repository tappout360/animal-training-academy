// WarrenWise Animal Academy - Live Hands-On Barn Check
// Converts Morning Barn Check into a true live-action simulator with real player controls:
// 1. Feed: Portion out golden timothy hay flakes and measured pellets.
// 2. Water: Hold spring valve to fill fresh mountain water to optimal line.
// 3. Brush: Gentle stroke grooming across coat with sparkles and purr audio.
// 4. Clean Up After: Scoop soiled bedding and spread clean pine shavings (protects hocks).
// 5. Fill with Love: Tap and hold to pet, soothing heart meter with purrs and tooth chattering.
// 6. Show Ring Impact: Displays how each care action directly elevates Show Score & placement!

import React, { useState, useRef, useEffect } from 'react';
import { 
  Droplets, Wheat, Sparkles, Heart, CheckCircle2, AlertTriangle, 
  RotateCcw, Award, Star, Trophy, ArrowRight, ShieldCheck, 
  Volume2, Flame, Shovel, ThumbsUp, Smile
} from 'lucide-react';
import { soundEffects } from '../../../utils/audioEffects';
import { TrailQuestEngine } from '../../../services/TrailQuestEngine';

export default function LiveHandsOnBarnCheck({
  dailyStatus = {},
  questState = {},
  trailPack,
  onCareCompleted,
  onOpenTrailRun
}) {
  // Active care station: 'feed' | 'water' | 'brush' | 'clean_up' | 'fill_with_love' | 'summary'
  const [activeStation, setActiveStation] = useState('feed');

  // --- 1. Feed Station State ---
  const [hayPortionPct, setHayPortionPct] = useState(0);
  const [pelletPortionPct, setPelletPortionPct] = useState(0);
  const [feedFinished, setFeedFinished] = useState(false);

  // --- 2. Water Station State ---
  const [waterFillPct, setWaterFillPct] = useState(25);
  const [isFillingWater, setIsFillingWater] = useState(false);
  const [waterFinished, setWaterFinished] = useState(false);
  const [waterFeedback, setWaterFeedback] = useState(null);
  const waterIntervalRef = useRef(null);

  // --- 3. Brushing & Grooming State ---
  const [brushStrokes, setBrushStrokes] = useState(0);
  const [isBrushing, setIsBrushing] = useState(false);
  const [coatLusterPct, setCoatLusterPct] = useState(35);
  const [brushSparkles, setBrushSparkles] = useState([]);
  const [handlingAlert, setHandlingAlert] = useState(null);
  const lastBrushPos = useRef({ x: 0, y: 0, time: 0 });
  const rushedCount = useRef(0);
  const gentleCount = useRef(0);

  // --- 4. Clean Up After State ---
  const [soiledSpotsCleared, setSoiledSpotsCleared] = useState(0);
  const [freshBeddingSpread, setFreshBeddingSpread] = useState(0);
  const [cleanUpFinished, setCleanUpFinished] = useState(false);

  // --- 5. Fill with Love State ---
  const [loveMeterPct, setLoveMeterPct] = useState(20);
  const [isLoving, setIsLoving] = useState(false);
  const [loveHearts, setLoveHearts] = useState([]);
  const [loveFinished, setLoveFinished] = useState(false);
  const loveIntervalRef = useRef(null);

  // --- Completed Actions Record ---
  const [completedActions, setCompletedActions] = useState({
    feed: false,
    water: false,
    brush: false,
    clean_up: false,
    fill_with_love: false
  });

  const [sessionScore, setSessionScore] = useState(0);
  const [handlingStyle, setHandlingStyle] = useState('gentle_master');

  const companionName = questState.companionName || 'Barnaby';
  const companionBreed = questState.companionBreed || 'Holland Lop';

  // ==========================================
  // STATION 1: FEED CONTROLS
  // ==========================================
  const handleAddHay = () => {
    soundEffects.playRustle();
    setHayPortionPct(prev => {
      const next = Math.min(100, prev + 25);
      if (next >= 75 && pelletPortionPct >= 50 && !feedFinished) {
        completeAction('feed');
      }
      return next;
    });
  };

  const handleAddPellets = () => {
    soundEffects.playTap();
    setPelletPortionPct(prev => {
      const next = Math.min(100, prev + 25);
      if (hayPortionPct >= 75 && next >= 50 && !feedFinished) {
        completeAction('feed');
      }
      return next;
    });
  };

  // ==========================================
  // STATION 2: WATER VALVE CONTROLS
  // ==========================================
  const startWaterFill = () => {
    if (waterFinished) return;
    setIsFillingWater(true);
    soundEffects.playWater();

    waterIntervalRef.current = setInterval(() => {
      setWaterFillPct(prev => {
        if (prev >= 100) {
          clearInterval(waterIntervalRef.current);
          return 100;
        }
        return prev + 2.5;
      });
    }, 60);
  };

  const stopWaterFill = () => {
    if (waterFinished) return;
    setIsFillingWater(false);
    if (waterIntervalRef.current) clearInterval(waterIntervalRef.current);

    if (waterFillPct >= 75 && waterFillPct <= 95) {
      setWaterFeedback({
        type: 'perfect',
        text: 'Perfect 4-H Reservoir Fill! Clean fresh mountain water locked in optimal zone 💧'
      });
      completeAction('water');
      setWaterFinished(true);
      soundEffects.playSuccess();
    } else if (waterFillPct > 95) {
      setWaterFeedback({
        type: 'overflow',
        text: 'Bottle overflowed! Emptied slightly to prevent dripping onto bedding.'
      });
      setWaterFillPct(85);
      completeAction('water');
      setWaterFinished(true);
      rushedCount.current += 1;
    } else {
      setWaterFeedback({
        type: 'underfill',
        text: 'Underfilled! Hold the valve longer until it enters the green zone (75% - 95%).'
      });
    }
  };

  // ==========================================
  // STATION 3: BRUSHING & GROOMING STROKES
  // ==========================================
  const handleBrushMove = (e) => {
    if (!isBrushing || coatLusterPct >= 100) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0]?.clientY) || 0;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const now = Date.now();

    const dx = x - lastBrushPos.current.x;
    const dy = y - lastBrushPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const dt = now - lastBrushPos.current.time;

    if (dt > 40 && dist > 15) {
      const speed = dist / dt;

      if (speed > 1.8) {
        rushedCount.current += 1;
        setHandlingAlert('Too fast! Rapid brushing pulls undercoat. Slow down to a calm, gentle rhythm.');
        soundEffects.playAlert();
      } else {
        gentleCount.current += 1;
        setHandlingAlert(null);
        setBrushStrokes(prev => prev + 1);
        setCoatLusterPct(prev => {
          const next = Math.min(100, prev + 3);
          if (next >= 85 && !completedActions.brush) {
            completeAction('brush');
          }
          return next;
        });

        // Spawn visual sparkle
        const newSparkle = { id: Math.random(), x, y };
        setBrushSparkles(prev => [...prev.slice(-6), newSparkle]);

        if (brushStrokes % 5 === 0) {
          soundEffects.playGroom();
        }
      }

      lastBrushPos.current = { x, y, time: now };
    }
  };

  // ==========================================
  // STATION 4: CLEAN UP AFTER CONTROLS
  // ==========================================
  const handleScoopSoiled = () => {
    soundEffects.playRustle();
    setSoiledSpotsCleared(prev => {
      const next = Math.min(3, prev + 1);
      if (next === 3 && freshBeddingSpread >= 3 && !cleanUpFinished) {
        completeAction('clean_up');
        setCleanUpFinished(true);
        soundEffects.playSuccess();
      }
      return next;
    });
  };

  const handleSpreadBedding = () => {
    soundEffects.playRustle();
    setFreshBeddingSpread(prev => {
      const next = Math.min(3, prev + 1);
      if (soiledSpotsCleared >= 3 && next === 3 && !cleanUpFinished) {
        completeAction('clean_up');
        setCleanUpFinished(true);
        soundEffects.playSuccess();
      }
      return next;
    });
  };

  // ==========================================
  // STATION 5: FILL WITH LOVE CONTROLS
  // ==========================================
  const startFillingLove = (e) => {
    if (loveFinished) return;
    setIsLoving(true);
    soundEffects.playPurr();

    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? rect.width / 2 + (Math.random() * 60 - 30) : 100;
    const y = rect ? rect.height / 2 + (Math.random() * 40 - 20) : 100;

    loveIntervalRef.current = setInterval(() => {
      setLoveMeterPct(prev => {
        const next = Math.min(100, prev + 4);
        if (next >= 100) {
          clearInterval(loveIntervalRef.current);
          completeAction('fill_with_love');
          setLoveFinished(true);
          soundEffects.playSuccess();
        }
        return next;
      });

      // Spawn floating hearts
      setLoveHearts(prev => [
        ...prev.slice(-8), 
        { id: Math.random(), x: x + (Math.random() * 40 - 20), y: y - Math.random() * 30 }
      ]);
    }, 70);
  };

  const stopFillingLove = () => {
    setIsLoving(false);
    if (loveIntervalRef.current) clearInterval(loveIntervalRef.current);
  };

  useEffect(() => {
    return () => {
      if (waterIntervalRef.current) clearInterval(waterIntervalRef.current);
      if (loveIntervalRef.current) clearInterval(loveIntervalRef.current);
    };
  }, []);

  // Helper to mark an action done and notify engine
  const completeAction = (actionKey) => {
    setCompletedActions(prev => ({ ...prev, [actionKey]: true }));
    if (actionKey === 'feed') setFeedFinished(true);
    if (actionKey === 'water') setWaterFinished(true);
    if (actionKey === 'clean_up') setCleanUpFinished(true);
    if (actionKey === 'fill_with_love') setLoveFinished(true);

    try {
      TrailQuestEngine.recordPetCareAction(questState, actionKey);
    } catch (e) {
      console.warn('TrailQuestEngine record error:', e.message);
    }
  };

  const completedCount = Object.values(completedActions).filter(Boolean).length;
  const isAllCareComplete = completedCount >= 5;

  const handleFinishAllCare = () => {
    soundEffects.playVictory();

    const style = rushedCount.current > gentleCount.current / 2
      ? 'hurried_handler'
      : gentleCount.current > 15
        ? 'gentle_master'
        : 'thorough_steward';

    setHandlingStyle(style);
    setSessionScore(100);
    setActiveStation('summary');

    if (onCareCompleted) {
      onCareCompleted({
        score: 100,
        handlingStyle: style,
        completedActions,
        totalCareDone: completedCount,
        showAdvantageBonus: 15
      });
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100 flex flex-col">
      
      {/* Top Banner: Show Ring Advantage Guarantee */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-500/30 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
            Pet Care Show Advantage:
          </span>
          <span className="text-xs font-bold text-slate-200">
            Every care action directly improves your score & placement in the Championship Ring!
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full font-black">
            +{completedCount * 3} Pts Show Bonus (Max +15)
          </span>
        </div>
      </div>

      {/* Station Navigation Header */}
      <div className="bg-slate-950/80 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="font-black text-white text-sm flex items-center gap-1.5">
            5 Essential Pet Care Actions
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
              {completedCount} / 5 Completed
            </span>
          </h4>
          <p className="text-[11px] text-slate-400">
            Care for <strong>{companionName}</strong> ({companionBreed}) with real hands-on gestures
          </p>
        </div>

        {/* 5 Action Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-2xl border border-slate-800 text-xs overflow-x-auto">
          {[
            { id: 'feed', label: '1. Feed', icon: <Wheat className="w-3.5 h-3.5" />, done: completedActions.feed },
            { id: 'water', label: '2. Water', icon: <Droplets className="w-3.5 h-3.5" />, done: completedActions.water },
            { id: 'brush', label: '3. Brush', icon: <Sparkles className="w-3.5 h-3.5" />, done: completedActions.brush },
            { id: 'clean_up', label: '4. Clean Up', icon: <Shovel className="w-3.5 h-3.5" />, done: completedActions.clean_up },
            { id: 'fill_with_love', label: '5. Fill Love', icon: <Heart className="w-3.5 h-3.5" />, done: completedActions.fill_with_love }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playTap();
                setActiveStation(tab.id);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shrink-0 ${
                activeStation === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : tab.done
                    ? 'text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab.done ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Work Area */}
      <div className="p-4 sm:p-6 min-h-[440px] flex flex-col justify-between relative bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950">
        
        {/* ========================================================= */}
        {/* 1. FEED STATION */}
        {/* ========================================================= */}
        {activeStation === 'feed' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-xl mx-auto text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-extrabold bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
                Pet Care Action #1: Feed
              </span>
              <h3 className="text-lg font-black text-white">Fill Feed Crock with High-Fiber Rations</h3>
              <p className="text-xs text-slate-400">
                Portion unlimited 1st-cutting timothy hay (for gut motility) and measured pellets. Adds <strong>+Vigor & Alert Eye Expression</strong> in the show ring!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto my-3">
              {/* Hay Flake */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-3xl flex flex-col items-center gap-3">
                <span className="text-4xl">🌾</span>
                <div className="text-center">
                  <h5 className="font-bold text-sm text-white">Timothy Hay Flake</h5>
                  <p className="text-[11px] text-slate-400">Target: At least 75% full</p>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${hayPortionPct}%` }} />
                </div>
                <button
                  onClick={handleAddHay}
                  disabled={hayPortionPct >= 100}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition"
                >
                  + Add Hay Flake ({hayPortionPct}%)
                </button>
              </div>

              {/* Pellets Scoop */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-3xl flex flex-col items-center gap-3">
                <span className="text-4xl">🥣</span>
                <div className="text-center">
                  <h5 className="font-bold text-sm text-white">Pellets Measure</h5>
                  <p className="text-[11px] text-slate-400">Target: At least 50% full</p>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${pelletPortionPct}%` }} />
                </div>
                <button
                  onClick={handleAddPellets}
                  disabled={pelletPortionPct >= 100}
                  className="w-full py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs transition"
                >
                  + Add Pellet Measure ({pelletPortionPct}%)
                </button>
              </div>
            </div>

            {completedActions.feed && (
              <div className="flex flex-col items-center gap-2 pt-2">
                <div className="px-4 py-2 bg-emerald-950/60 border border-emerald-500 rounded-2xl text-xs font-bold text-emerald-200">
                  ✓ Fed with Care! Show Ring Benefit: +Vigor & Bright Composure!
                </div>
                <button
                  onClick={() => {
                    soundEffects.playTap();
                    setActiveStation('water');
                  }}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Next: Water Station</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. WATER STATION */}
        {/* ========================================================= */}
        {activeStation === 'water' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-xl mx-auto text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-sky-400 font-extrabold bg-sky-950/60 border border-sky-800/60 px-3 py-1 rounded-full">
                Pet Care Action #2: Water
              </span>
              <h3 className="text-lg font-black text-white">Fill Fresh Mountain Water to Green Line</h3>
              <p className="text-xs text-slate-400">
                Press and hold to fill. Proper hydration maintains bright eyes and skin elasticity for the judge's pinch check!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center my-2">
              <div className="relative w-28 h-56 bg-slate-950 rounded-3xl border-4 border-slate-700/80 overflow-hidden shadow-inner flex flex-col justify-end p-2">
                <div 
                  className="absolute left-0 right-0 border-y-2 border-emerald-400 bg-emerald-500/20 pointer-events-none flex items-center justify-end px-2"
                  style={{ bottom: '75%', height: '20%' }}
                >
                  <span className="text-[9px] font-black text-emerald-300 uppercase">Optimal</span>
                </div>
                <div 
                  className="w-full bg-gradient-to-t from-sky-600 via-sky-400 to-cyan-300 rounded-2xl transition-all duration-75 relative"
                  style={{ height: `${waterFillPct}%` }}
                />
                <div className="absolute top-2 left-0 right-0 text-center font-black text-xs text-slate-300">
                  {Math.round(waterFillPct)}% Full
                </div>
              </div>

              {waterFeedback && (
                <div className="mt-3 px-4 py-1.5 rounded-2xl text-xs font-bold bg-slate-950 border border-slate-700 text-slate-200">
                  {waterFeedback.text}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onMouseDown={startWaterFill}
                onMouseUp={stopWaterFill}
                onTouchStart={startWaterFill}
                onTouchEnd={stopWaterFill}
                disabled={waterFinished}
                className={`w-full max-w-xs py-3.5 rounded-2xl font-black text-xs tracking-wide uppercase transition shadow-lg flex items-center justify-center gap-2 select-none active:scale-95 ${
                  waterFinished
                    ? 'bg-emerald-600 text-white cursor-default'
                    : isFillingWater
                      ? 'bg-sky-500 text-slate-950 scale-95 shadow-sky-500/50'
                      : 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white hover:brightness-110'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span>{waterFinished ? '✓ Reservoir Filled & Locked' : isFillingWater ? 'Pumping Water... (Hold!)' : 'Press & Hold to Pump Water'}</span>
              </button>

              {completedActions.water && (
                <button
                  onClick={() => {
                    soundEffects.playTap();
                    setActiveStation('brush');
                  }}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Next: Brush Coat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. BRUSH STATION */}
        {/* ========================================================= */}
        {activeStation === 'brush' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="max-w-xl mx-auto text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-purple-400 font-extrabold bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-full">
                Pet Care Action #3: Brush
              </span>
              <h3 className="text-lg font-black text-white">Gentle Soft-Bristle Grooming</h3>
              <p className="text-xs text-slate-400">
                Drag the brush across Barnaby's fur. Gentle grooming removes dead undercoat and creates <strong>Championship Coat Luster</strong> for top judge marks!
              </p>
            </div>

            {handlingAlert && (
              <div className="max-w-md mx-auto px-4 py-1.5 rounded-2xl bg-amber-950/80 border border-amber-500 text-amber-200 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{handlingAlert}</span>
              </div>
            )}

            <div 
              onMouseDown={() => setIsBrushing(true)}
              onMouseUp={() => setIsBrushing(false)}
              onMouseMove={handleBrushMove}
              onTouchStart={() => setIsBrushing(true)}
              onTouchEnd={() => setIsBrushing(false)}
              onTouchMove={handleBrushMove}
              className="relative max-w-md mx-auto h-56 bg-slate-950 rounded-3xl border-2 border-dashed border-purple-500/40 p-4 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden shadow-2xl select-none"
            >
              <div className="text-7xl filter drop-shadow-[0_10px_15px_rgba(168,85,247,0.3)]">
                🐇
              </div>

              {brushSparkles.map(sp => (
                <span key={sp.id} className="absolute pointer-events-none text-amber-300 text-lg animate-ping" style={{ left: sp.x, top: sp.y }}>
                  ✨
                </span>
              ))}

              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Strokes: {brushStrokes}</span>
                <span className="text-purple-400">Coat Luster: {coatLusterPct}%</span>
              </div>
            </div>

            <div className="max-w-md mx-auto space-y-1">
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-amber-400 h-full transition-all duration-300" style={{ width: `${coatLusterPct}%` }} />
              </div>
            </div>

            {completedActions.brush && (
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className="px-4 py-2 bg-emerald-950/60 border border-emerald-500 rounded-2xl text-xs font-bold text-emerald-200">
                  ✓ Gleaming Sheen Achieved! Show Benefit: +Coat Texture & Clean Rollback!
                </div>
                <button
                  onClick={() => {
                    soundEffects.playTap();
                    setActiveStation('clean_up');
                  }}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Next: Clean Up After</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. CLEAN UP AFTER STATION */}
        {/* ========================================================= */}
        {activeStation === 'clean_up' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-xl mx-auto text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-extrabold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                Pet Care Action #4: Clean Up After
              </span>
              <h3 className="text-lg font-black text-white">Muck Stall & Spread Fresh Pine Shavings</h3>
              <p className="text-xs text-slate-400">
                A clean stall prevents ammonia fumes, dirty hocks, and urine staining. Guarantees <strong>Spotless Hocks & Clean Underside</strong> on the judging table!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto my-3">
              {/* Scoop Soiled Bedding */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-3xl flex flex-col items-center gap-3">
                <span className="text-4xl">🧹</span>
                <div className="text-center">
                  <h5 className="font-bold text-sm text-white">Scoop Soiled Bedding</h5>
                  <p className="text-[11px] text-slate-400">{soiledSpotsCleared} / 3 Corners Mucked</p>
                </div>
                <button
                  onClick={handleScoopSoiled}
                  disabled={soiledSpotsCleared >= 3}
                  className="w-full py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition"
                >
                  {soiledSpotsCleared >= 3 ? '✓ All Corners Spotless' : '+ Scoop Soiled Corner'}
                </button>
              </div>

              {/* Spread Fresh Shavings */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-3xl flex flex-col items-center gap-3">
                <span className="text-4xl">🪵</span>
                <div className="text-center">
                  <h5 className="font-bold text-sm text-white">Spread Dry Pine Shavings</h5>
                  <p className="text-[11px] text-slate-400">{freshBeddingSpread} / 3 Layers Spread</p>
                </div>
                <button
                  onClick={handleSpreadBedding}
                  disabled={freshBeddingSpread >= 3}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition"
                >
                  {freshBeddingSpread >= 3 ? '✓ Fresh Deep Bedding' : '+ Scatter Fresh Pine'}
                </button>
              </div>
            </div>

            {completedActions.clean_up && (
              <div className="flex flex-col items-center gap-2 pt-2">
                <div className="px-4 py-2 bg-emerald-950/60 border border-emerald-500 rounded-2xl text-xs font-bold text-emerald-200">
                  ✓ Pristine Hygiene! Show Benefit: Zero Staining Faults & Healthy Hocks!
                </div>
                <button
                  onClick={() => {
                    soundEffects.playTap();
                    setActiveStation('fill_with_love');
                  }}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <span>Next: Fill with Love</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. FILL WITH LOVE STATION */}
        {/* ========================================================= */}
        {activeStation === 'fill_with_love' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="max-w-xl mx-auto text-center space-y-1">
              <span className="text-xs uppercase tracking-wider text-rose-400 font-extrabold bg-rose-950/60 border border-rose-800/60 px-3 py-1 rounded-full">
                Pet Care Action #5: Fill with Love
              </span>
              <h3 className="text-lg font-black text-white">Pet, Soothe & Build Deep Trust</h3>
              <p className="text-xs text-slate-400">
                Press and hold to gently pet Barnaby. Daily affection produces calm table composure and eliminates fear during judge handling!
              </p>
            </div>

            {/* Heart Meter Visual */}
            <div 
              onMouseDown={startFillingLove}
              onMouseUp={stopFillingLove}
              onTouchStart={startFillingLove}
              onTouchEnd={stopFillingLove}
              className="relative max-w-md mx-auto h-56 bg-gradient-to-b from-rose-950/40 to-slate-950 rounded-3xl border-2 border-dashed border-rose-500/50 p-4 flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden shadow-2xl active:scale-95 transition"
            >
              <div className="text-7xl filter drop-shadow-[0_10px_20px_rgba(244,63,94,0.4)] animate-pulse">
                ❤️
              </div>

              {loveHearts.map(h => (
                <span key={h.id} className="absolute pointer-events-none text-rose-400 text-2xl animate-ping" style={{ left: h.x, top: h.y }}>
                  💕
                </span>
              ))}

              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>{isLoving ? 'Purring with joy! 🐾' : 'Press & Hold to Pet'}</span>
                <span className="text-rose-400 font-black">{Math.round(loveMeterPct)}% Love</span>
              </div>
            </div>

            <div className="max-w-md mx-auto space-y-1">
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-amber-400 h-full transition-all duration-300" style={{ width: `${loveMeterPct}%` }} />
              </div>
            </div>

            {completedActions.fill_with_love && (
              <div className="flex flex-col items-center gap-2 pt-2">
                <div className="px-4 py-2 bg-emerald-950/60 border border-emerald-500 rounded-2xl text-xs font-bold text-emerald-200">
                  ✓ Heart Filled with Love! Show Benefit: Calm Table Manners & High Judge Appeal!
                </div>
                <button
                  onClick={handleFinishAllCare}
                  className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-slate-950 font-black rounded-2xl text-sm flex items-center gap-2 shadow-xl shadow-amber-500/30 transition"
                >
                  <Trophy className="w-5 h-5" />
                  <span>Review Show Ring Advantage & Complete!</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* SUMMARY: SHOW ADVANTAGE & DUAL REWARDS */}
        {/* ========================================================= */}
        {activeStation === 'summary' && (
          <div className="space-y-6 animate-fadeIn py-2">
            <div className="max-w-md mx-auto text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center text-3xl mx-auto shadow-xl">
                🏆
              </div>
              <h3 className="text-xl font-black text-white">All 5 Pet Care Actions Complete!</h3>
              <p className="text-xs text-slate-300">
                You took full responsibility for Barnaby's feeding, water, grooming, clean quarters, and daily love. Here is your direct advantage at the fair:
              </p>
            </div>

            {/* Direct Show Score Impact Card */}
            <div className="max-w-md mx-auto bg-slate-950/90 border border-amber-500/40 rounded-3xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Cumulative Show Score Boost:
                </span>
                <span className="text-sm font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-0.5 rounded-full">
                  +15 Pts Stewardship Bonus
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>🌾 Feed (Timothy & Pellets):</span>
                  <span className="font-bold text-amber-300">+Vigor & Gut Motility</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>💧 Water (Mountain Spring):</span>
                  <span className="font-bold text-sky-300">+Hydration & Bright Eyes</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>✨ Brush (Soft Grooming):</span>
                  <span className="font-bold text-purple-300">+Championship Coat Luster</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>🧹 Clean Up (Dry Pine Bedding):</span>
                  <span className="font-bold text-emerald-300">+Spotless Hocks (No Stains)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>❤️ Fill with Love (Daily Trust):</span>
                  <span className="font-bold text-rose-300">+Calm Table Poise</span>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-[11px] text-amber-200 font-medium text-center">
                ⭐ <strong>Judge's Note:</strong> Exhibitors with consistent pet care records receive top placement consideration and Grand Champion Rosette eligibility!
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => {
                  soundEffects.playFanfare();
                  if (onOpenTrailRun) onOpenTrailRun();
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-black rounded-2xl text-sm flex items-center gap-2 shadow-xl shadow-emerald-500/20 transition"
              >
                <span>Drive the Overland Trail with Your Champion!</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
