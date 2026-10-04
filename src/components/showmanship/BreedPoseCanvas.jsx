// WarrenWise Youth Animal Training Academy - ARBA Breed Pose Simulator
// Interactive canvas teaching paw placement, rear hock alignment, and body rise across all 5 ARBA body types

import React, { useState } from 'react';
import { 
  Award, Sparkles, CheckCircle2, AlertCircle, RefreshCw, 
  ChevronRight, Compass, ShieldCheck 
} from 'lucide-react';

export const ARBA_BODY_TYPES = {
  compact: {
    id: 'compact',
    name: 'Compact Body Type',
    representativeBreeds: ['Holland Lop', 'Netherland Dwarf', 'Mini Rex', 'Mini Lop', 'Dutch'],
    idealFrontPaw: 50, // 0 = stretched out, 50 = tucked under eye, 100 = cramped under neck
    idealRearHock: 50, // 50 = parallel under hips
    idealArchRise: 80, // high round rise from nape to rump
    description: 'Short, tight, close-coupled body with shoulders blending smoothly into a well-rounded hindquarter of equal or greater width.',
    showmanshipTip: 'Do not stretch a compact rabbit! Keep the front paws centered directly below the eyes and tuck the hind feet parallel with the flank.'
  },
  commercial: {
    id: 'commercial',
    name: 'Commercial Body Type',
    representativeBreeds: ['New Zealand', 'Californian', 'French Lop', 'Rex', 'Silver Fox'],
    idealFrontPaw: 45,
    idealRearHock: 50,
    idealArchRise: 65,
    description: 'Substantial depth of body, broad shoulders, massive loin, and full, rounded hindquarters demonstrating prime meat production characteristics.',
    showmanshipTip: 'Pose firmly with front feet resting under the shoulders. Allow the animal to display full loin depth without over-tucking.'
  },
  semi_arch: {
    id: 'semi_arch',
    name: 'Semi-Arch (Mandolin) Type',
    representativeBreeds: ['Flemish Giant', 'English Lop', 'Beveren', 'American'],
    idealFrontPaw: 35,
    idealRearHock: 45,
    idealArchRise: 55,
    description: 'Body rises smoothly behind the shoulders into a high mandolin arch over the loin, tapering down gently to a broad rump.',
    showmanshipTip: 'Never push down on the shoulders or over-tuck. Allow the rabbit to sit naturally to exhibit its graceful mandolin rise.'
  },
  full_arch: {
    id: 'full_arch',
    name: 'Full-Arch Body Type',
    representativeBreeds: ['Checkered Giant', 'Belgian Hare', 'Tan', 'Britannia Petite'],
    idealFrontPaw: 20,
    idealRearHock: 40,
    idealArchRise: 90,
    description: 'Alert, athletic carriage showing daylight underneath the belly. Continuous graceful arch starting from the nape of the neck through to the tail.',
    showmanshipTip: 'Full-arch breeds are run or allowed to move freely on the show table to display alertness and belly clearance.'
  },
  cylindrical: {
    id: 'cylindrical',
    name: 'Cylindrical Body Type',
    representativeBreeds: ['Himalayan'],
    idealFrontPaw: 15,
    idealRearHock: 30,
    idealArchRise: 15,
    description: 'Long, slender, tube-like cylindrical body with uniform diameter from neck to tail, lying flat and relaxed against the show table.',
    showmanshipTip: 'Stretch the Himalayan gently along the table with front paws straight forward and rear feet stretched back, perfectly parallel.'
  }
};

export default function BreedPoseCanvas() {
  const [selectedTypeKey, setSelectedTypeKey] = useState('compact');
  const [frontPawPos, setFrontPawPos] = useState(50);
  const [rearHockPos, setRearHockPos] = useState(50);
  const [archRisePos, setArchRisePos] = useState(70);
  const [poseScore, setPoseScore] = useState(null);

  const currentType = ARBA_BODY_TYPES[selectedTypeKey];

  const handleEvaluatePose = () => {
    const frontDiff = Math.abs(frontPawPos - currentType.idealFrontPaw);
    const rearDiff = Math.abs(rearHockPos - currentType.idealRearHock);
    const archDiff = Math.abs(archRisePos - currentType.idealArchRise);

    const totalDiff = frontDiff + rearDiff + archDiff;
    const accuracy = Math.max(10, Math.min(100, Math.round(100 - (totalDiff * 0.7))));

    let feedback = '';
    if (accuracy >= 90) {
      feedback = 'Grand Champion Form! Front paws squarely positioned, rear hocks aligned parallel, and body arch matches the ARBA Standard of Perfection.';
    } else if (accuracy >= 75) {
      feedback = 'Solid Blue Ribbon presentation. Fine-tune your paw tuck or flank alignment for maximum table poise.';
    } else {
      feedback = 'Needs adjustment: Re-read the breed tip below. Check whether this breed should be tucked (Compact), firm (Commercial), or stretched (Cylindrical/Arch).';
    }

    setPoseScore({ accuracy, feedback });
  };

  const handleResetToIdeal = () => {
    setFrontPawPos(currentType.idealFrontPaw);
    setRearHockPos(currentType.idealRearHock);
    setArchRisePos(currentType.idealArchRise);
    setPoseScore(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>ARBA Standard of Perfection Table Studio</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Interactive Breed Pose Simulator
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
              Showmanship judges evaluate your ability to set up paws, hocks, and body arch accurately for your breed's body type.
            </p>
          </div>

          {poseScore && (
            <div className="bg-indigo-900/60 border border-indigo-700/60 rounded-xl px-4 py-2.5 text-right">
              <div className="text-[10px] uppercase font-bold text-indigo-300">Judge Pose Score</div>
              <div className="text-xl font-black text-amber-300">{poseScore.accuracy}% Match</div>
            </div>
          )}
        </div>

        {/* 5 Body Type Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5">
          {Object.entries(ARBA_BODY_TYPES).map(([key, data]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedTypeKey(key);
                setPoseScore(null);
                setFrontPawPos(50);
                setRearHockPos(50);
                setArchRisePos(50);
              }}
              className={`p-2.5 rounded-xl text-left transition-all ${
                selectedTypeKey === key
                  ? 'bg-amber-400 text-purple-950 font-black shadow-sm ring-2 ring-white'
                  : 'bg-indigo-900/40 text-indigo-200 hover:bg-indigo-800'
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider opacity-80">Type</div>
              <div className="text-xs font-bold truncate">{data.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Breed Details & Showmanship Tip */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold text-slate-900">
              {currentType.name}
            </h3>
            <span className="text-xs text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
              Breeds: {currentType.representativeBreeds.join(', ')}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {currentType.description}
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-950 flex items-start gap-2 mt-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>ARBA Judge Stance Rule: </strong>
              {currentType.showmanshipTip}
            </div>
          </div>
        </div>

        {/* Visual Pose Canvas */}
        <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[260px] border border-slate-800 shadow-inner">
          <div className="absolute top-3 left-3 text-[10px] font-mono text-indigo-400 uppercase tracking-widest bg-slate-950/80 px-2 py-1 rounded border border-indigo-900">
            Show Carpet View (Side Profile)
          </div>

          {/* SVG Diagram Representing Pose Silhouette */}
          <div className="w-full max-w-md h-40 relative flex items-center justify-center">
            {/* Show Carpet Baseline */}
            <div className="absolute bottom-6 w-full h-1 bg-emerald-600/70 rounded-full" />
            <div className="absolute bottom-3 text-[10px] text-emerald-400 font-mono">Show Table Carpet</div>

            {/* Dynamic Silhouette Shape */}
            <svg viewBox="0 0 300 120" className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              {/* Spine Arch curve based on archRisePos */}
              <path
                d={`M 60,${85 - (frontPawPos * 0.15)} Q 120,${60 - (archRisePos * 0.45)} 210,${80 - (rearHockPos * 0.1)}`}
                fill="none"
                stroke="#FCD34D"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Head & Muzzle */}
              <circle cx="55" cy={`${80 - (frontPawPos * 0.1)}`} r="18" fill="#FBBF24" />
              {/* Ears */}
              <ellipse cx="60" cy={`${50 - (frontPawPos * 0.1)}`} rx="6" ry="16" fill="#F59E0B" />

              {/* Front Paws on Table */}
              <rect 
                x={`${40 + (frontPawPos * 0.4)}`} 
                y="85" 
                width="14" 
                height="10" 
                rx="4" 
                fill="#F3F4F6" 
              />

              {/* Rear Hock on Table */}
              <rect 
                x={`${180 + (rearHockPos * 0.3)}`} 
                y="85" 
                width="24" 
                height="10" 
                rx="4" 
                fill="#E5E7EB" 
              />
            </svg>
          </div>

          <div className="text-center text-xs text-indigo-300 font-medium">
            Front Paw Position: <span className="font-bold text-amber-300">{frontPawPos}%</span> | Rear Hock Tuck: <span className="font-bold text-amber-300">{rearHockPos}%</span> | Arch Rise: <span className="font-bold text-amber-300">{archRisePos}%</span>
          </div>
        </div>

        {/* Interactive Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Front Paw Tuck */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-800">
              <span>Front Paw Placement</span>
              <span className="text-purple-700">{frontPawPos}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={frontPawPos}
              onChange={(e) => setFrontPawPos(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Forward (Stretched)</span>
              <span>Under Eyes (Tucked)</span>
            </div>
          </div>

          {/* Rear Hock Tuck */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-800">
              <span>Rear Hock Alignment</span>
              <span className="text-purple-700">{rearHockPos}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={rearHockPos}
              onChange={(e) => setRearHockPos(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Splayed Out</span>
              <span>Parallel under Hips</span>
            </div>
          </div>

          {/* Body Arch & Rise */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-800">
              <span>Body Rise & Arch</span>
              <span className="text-purple-700">{archRisePos}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={archRisePos}
              onChange={(e) => setArchRisePos(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Flat Cylinder</span>
              <span>High Compact Ball</span>
            </div>
          </div>
        </div>

        {/* Judge Feedback Alert */}
        {poseScore && (
          <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
            poseScore.accuracy >= 85
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}>
            <div className="font-bold flex items-center gap-1.5">
              {poseScore.accuracy >= 85 ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-600" />
              )}
              <span>Judge's Evaluation: {poseScore.accuracy}% Standard Match</span>
            </div>
            <p className="leading-relaxed text-xs">
              {poseScore.feedback}
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleResetToIdeal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Show Ideal ARBA Stance</span>
          </button>

          <button
            onClick={handleEvaluatePose}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-sm transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Submit Pose to Judge</span>
          </button>
        </div>
      </div>
    </div>
  );
}
