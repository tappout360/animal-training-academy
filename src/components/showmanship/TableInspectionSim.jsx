// WarrenWise Youth Animal Training Academy - ARBA 8-Point Physical Inspection Simulator
// Interactive step-by-step examination tool mirroring official judging table standards

import React, { useState } from 'react';
import { 
  Award, CheckCircle2, AlertTriangle, XCircle, RotateCcw, 
  HelpCircle, Eye, ChevronRight, ChevronLeft, ShieldCheck,
  Sparkles, FileText, Check, ArrowRight
} from 'lucide-react';

export const ARBA_INSPECTION_CHECKPOINTS = [
  {
    id: 'ears',
    stepNumber: 1,
    title: 'Ears & Tattoo Verification',
    anatomicalRegion: 'Head & Cranium',
    idealCondition: 'Ears carried upright or correctly lopped according to breed standard. Ear canals clean and pink. Legible tattoo firmly inked in the left ear; right ear clean for registration.',
    examinationAction: 'Gently open both ears wide toward the judge. Inspect base and interior folds.',
    hotspots: [
      { id: 'left_tattoo', name: 'Left Ear (Tattoo)', normalText: 'Tattoo #WW42 clearly legible, dark pigment, healed cleanly.' },
      { id: 'right_ear', name: 'Right Ear (Registration)', normalText: 'Right ear clean with no stray ink or disqualifying marks.' },
      { id: 'ear_canal', name: 'Ear Canal (Mites)', normalText: 'Smooth skin, zero crusty brown exudate, no ear canker.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Clean Exhibition Specimen',
        findingDescription: 'Both ears are clean, well-furred on outside, left ear tattoo #WW42 is clear.',
        classification: 'CLEAR',
        judgeRuling: 'PASS - Perfect presentation',
        pointsAwarded: 10
      },
      {
        scenarioTitle: 'Brown Flaking Crust at Base',
        findingDescription: 'Crusty brown mites (Psoroptes cuniculi) visible deep inside left ear canal.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Ear Canker. Must immediately leave the table for health and biosecurity.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"Judge, I am inspecting both ears for ear canker, mites, or tears. In the left ear, my rabbit has a clean legible tattoo, and the right ear is clean for ARBA registration."'
  },
  {
    id: 'eyes',
    stepNumber: 2,
    title: 'Eyes & Vision Check',
    anatomicalRegion: 'Face',
    idealCondition: 'Both eyes bright, bold, alert, and matching in color according to breed standard. Free from cataracts, spots, or discharge.',
    examinationAction: 'Inspect each eye from the front and side without blocking the judge’s line of sight.',
    hotspots: [
      { id: 'left_eye', name: 'Left Eye Iris & Pupil', normalText: 'Clear dark brown iris, pupil responsive, zero opacity.' },
      { id: 'right_eye', name: 'Right Eye Iris & Pupil', normalText: 'Matching dark brown iris, zero white specks or corneal cloudiness.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Mismatched Iris Color',
        findingDescription: 'Left eye is deep blue-gray; right eye has a half-brown sector (wall eye / marbled eye on a self breed).',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Wall eye / unmatching eyes on breed requiring uniform eye color.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am examining both eyes for blindness, cataracts, corneal spots, or wall eyes, confirming matching color and bright alertness."'
  },
  {
    id: 'nose',
    stepNumber: 3,
    title: 'Nostrils & Upper Respiratory Check',
    anatomicalRegion: 'Muzzle',
    idealCondition: 'Nostrils dry, clean, rhythmic quiet breathing with zero audible wheezing or mucus.',
    examinationAction: 'Tilt head slightly upward; inspect nasal openings and check inner front legs for wet mats.',
    hotspots: [
      { id: 'nostrils', name: 'Nasal Openings', normalText: 'Dry, pink mucosal tissue, clear airflow with no discharge.' },
      { id: 'front_paw_mats', name: 'Inner Forepaw Fur', normalText: 'Clean dry fur with zero dried snot tracks from nose wiping.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'White Foamy Nasal Mucus',
        findingDescription: 'Thick white mucus around nostrils and matted wet yellow fur on inside of front forearms.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Snuffles / infectious nasal discharge (Pasteurella multocida).',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am inspecting the nostrils and inner front paws for white nasal discharge or snuffles, verifying clean dry breathing."'
  },
  {
    id: 'teeth',
    stepNumber: 4,
    title: 'Teeth, Bite & Occlusion',
    anatomicalRegion: 'Oral Cavity',
    idealCondition: 'Upper incisors lap cleanly over lower incisors with small peg teeth seated immediately behind.',
    examinationAction: 'Gently invert or peel back upper and lower lips with thumb and index finger.',
    hotspots: [
      { id: 'incisor_overlap', name: 'Incisor Alignment', normalText: 'Upper teeth cleanly overlap lower incisors (normal scissor bite).' },
      { id: 'peg_teeth', name: 'Peg Teeth (Auxiliary)', normalText: 'Two small peg teeth present directly behind upper incisors.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Underbite / Lower Teeth Overlap',
        findingDescription: 'Lower incisors protrude outward and close cleanly over the outside of the upper incisors.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Malocclusion (Mandibular Prognathism). Hereditary structural defect.',
        pointsAwarded: 10
      },
      {
        scenarioTitle: 'Edge-to-Edge Meeting',
        findingDescription: 'Upper and lower incisors meet directly edge-to-edge without overlapping.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Simple buck teeth / butting bite.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am examining the incisors to confirm normal occlusion. The upper teeth overlap the lower incisors with no malocclusion, wolf teeth, or broken peg teeth."'
  },
  {
    id: 'front_feet',
    stepNumber: 5,
    title: 'Front Legs, Bone & Toenails',
    anatomicalRegion: 'Forequarters',
    idealCondition: 'Straight strong bone structure; exactly 5 toenails on each front foot (4 toes + 1 dewclaw); all claws intact and pigment matching breed standard.',
    examinationAction: 'Extend each front foot toward judge; gently press paw pad to fan claws.',
    hotspots: [
      { id: 'left_front_pad', name: 'Left Forepaw (5 Claws)', normalText: 'Five dark pigmented claws present including dewclaw.' },
      { id: 'right_front_pad', name: 'Right Forepaw (5 Claws)', normalText: 'Five dark pigmented claws present including dewclaw.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'One White Toenail on Colored Breed',
        findingDescription: 'Four dark slate toenails and one completely white claw on the right front paw of a Black Havana.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Unmatched / white toenail on colored variety.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am checking front legs for straight bone structure and counting five toenails on each foot including the dewclaws, verifying matching color."'
  },
  {
    id: 'belly_sex',
    stepNumber: 6,
    title: 'Belly, Vent & Sex Confirmation',
    anatomicalRegion: 'Underbody & Pelvis',
    idealCondition: 'Abdomen firm and smooth with no umbilical hernias or abscesses. Vent area clean, pink, with zero scabs or discharge. Sex matches show entry.',
    examinationAction: 'Gently invert animal into secure lap cradle. Palpate belly and gently depress vent area.',
    hotspots: [
      { id: 'abdomen_wall', name: 'Abdominal Wall', normalText: 'Smooth, firm flesh; no rupture, tumor, or hernia.' },
      { id: 'vent_organ', name: 'Vent Organ', normalText: 'Clean pink mucous membrane, clearly confirmed Buck/Doe, no spirochetosis scabs.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Wrong Sex in Class',
        findingDescription: 'Animal entered as a Junior Buck; examination of vent reveals clean, well-developed Doe orifice.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Wrong sex in class (eliminated from buck class, transfer eligible if fair rules permit).',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am palpating the abdomen for hernias or abscesses, and examining the vent area to confirm my rabbit is a Buck/Doe with zero vent disease."'
  },
  {
    id: 'hind_legs',
    stepNumber: 7,
    title: 'Hind Legs, Bone & Hocks',
    anatomicalRegion: 'Hindquarters',
    idealCondition: 'Straight hind legs moving parallel; exactly 4 toenails on each hind foot; hock pads thickly furred with zero bare or bleeding ulcerations.',
    examinationAction: 'Extend hind legs straight back. Examine bottom heel pads for sore hocks.',
    hotspots: [
      { id: 'left_hock_pad', name: 'Left Hock Fur', normalText: 'Thick protective fur mat covering heel bone, clean skin.' },
      { id: 'right_hock_pad', name: 'Right Hock Fur', normalText: 'Thick protective fur mat covering heel bone, clean skin.' },
      { id: 'hind_claws', name: 'Hind Toenails (4 Per Foot)', normalText: 'Eight total rear toenails present, dark pigment matching.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Bleeding Ulcerated Hock Pad',
        findingDescription: 'Fur completely worn away on both heel pads; open bleeding ulcerations penetrating deep dermal layer.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Severe bleeding sore hocks (unfit for show / animal welfare).',
        pointsAwarded: 10
      },
      {
        scenarioTitle: 'Minor Bare Callus (Clean Skin)',
        findingDescription: 'Small dime-sized hairless spot with tough, healed, clean gray callus; zero inflammation or blood.',
        classification: 'FAULT',
        judgeRuling: 'FAULT - Minor hairless callus; penalize condition slightly, but remains eligible for placement.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am checking the hind legs for straightness, counting four toenails per foot, and examining the hocks for sore hocks or missing fur."'
  },
  {
    id: 'tail_coat',
    stepNumber: 8,
    title: 'Tail & Overall Fur Condition',
    anatomicalRegion: 'Rump & Pelage',
    idealCondition: 'Tail carried straight and centered with flexible vertebrae; fur dense, clean, and displaying proper breed texture (Flyback, Rollback, Standing, or Wool).',
    examinationAction: 'Straighten tail upward to verify bones; stroke fur firmly from tail to head to observe return snap.',
    hotspots: [
      { id: 'tail_bone', name: 'Tail Vertebrae', normalText: 'Straight vertebrae, fully mobile, carried erect and centered.' },
      { id: 'coat_texture', name: 'Fur Density & Rollback', normalText: 'Prime coat, dense underfur, glossy guard hairs, snaps back smoothly.' }
    ],
    sampleCases: [
      {
        scenarioTitle: 'Permanently Crooked Tail (Wry Tail)',
        findingDescription: 'Tail is held permanently twisted to the left side and cannot be straightened without pain.',
        classification: 'DISQUALIFICATION',
        judgeRuling: 'DISQUALIFICATION - Wry tail / permanently deflected vertebrae.',
        pointsAwarded: 10
      },
      {
        scenarioTitle: 'Heavy Loose Molt on Flanks',
        findingDescription: 'Dead, loose orange guard hairs pulling away in tufts along the flank; fresh dark coat emerging below.',
        classification: 'FAULT',
        judgeRuling: 'FAULT - Molt / out of prime condition. Heavy fur penalty, but not disqualified.',
        pointsAwarded: 10
      }
    ],
    verbalScript: '"I am checking the tail for wry or dead tail, and examining the fur for prime density, clean rollback, and body condition."'
  }
];

export default function TableInspectionSim({ onCompleteRoutine }) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [inspectedHotspots, setInspectedHotspots] = useState({});
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [userSelectedDiagnosis, setUserSelectedDiagnosis] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null);
  const [earnedScore, setEarnedScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const currentStep = ARBA_INSPECTION_CHECKPOINTS[currentStepIdx];
  const totalSteps = ARBA_INSPECTION_CHECKPOINTS.length;

  const handleInspectHotspot = (hotspotId) => {
    setInspectedHotspots(prev => ({
      ...prev,
      [hotspotId]: true
    }));
  };

  const handleEvaluateCase = (classification) => {
    setUserSelectedDiagnosis(classification);
    const activeCase = currentStep.sampleCases[activeCaseIdx] || currentStep.sampleCases[0];
    const isCorrect = classification === activeCase.classification;

    if (isCorrect) {
      setFeedbackState({
        isCorrect: true,
        message: `Spot on! ${activeCase.judgeRuling}`,
        points: activeCase.pointsAwarded
      });
      setEarnedScore(s => s + activeCase.pointsAwarded);
      if (!completedSteps.includes(currentStep.id)) {
        setCompletedSteps(prev => [...prev, currentStep.id]);
      }
    } else {
      setFeedbackState({
        isCorrect: false,
        message: `Incorrect call. The ARBA Standard rules this as a ${activeCase.classification}. ${activeCase.judgeRuling}`,
        points: 0
      });
    }
  };

  const handleNextStep = () => {
    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx(i => i + 1);
      setUserSelectedDiagnosis(null);
      setFeedbackState(null);
      setActiveCaseIdx(0);
    } else {
      if (onCompleteRoutine) onCompleteRoutine(earnedScore);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(i => i - 1);
      setUserSelectedDiagnosis(null);
      setFeedbackState(null);
      setActiveCaseIdx(0);
    }
  };

  const activeCase = currentStep.sampleCases[activeCaseIdx] || currentStep.sampleCases[0];
  const allCurrentHotspotsInspected = currentStep.hotspots.every(h => inspectedHotspots[h.id]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Simulator Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-purple-400" />
              <span>ARBA Standard of Perfection Table Simulator</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              8-Point Physical Examination
            </h2>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
              Execute each physical checkpoint in precise judging order. Identify clear specimens, faults, and disqualifications.
            </p>
          </div>

          <div className="bg-purple-950/70 border border-purple-700/60 rounded-xl px-4 py-2.5 text-right">
            <div className="text-[10px] uppercase font-bold text-purple-300">Showmanship Score</div>
            <div className="text-xl font-black text-amber-300">{earnedScore} / 80 Pts</div>
          </div>
        </div>

        {/* Step Progress Pills */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mt-5">
          {ARBA_INSPECTION_CHECKPOINTS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => {
                setCurrentStepIdx(idx);
                setUserSelectedDiagnosis(null);
                setFeedbackState(null);
              }}
              className={`p-2 rounded-lg text-center transition-all ${
                currentStepIdx === idx
                  ? 'bg-amber-400 text-purple-950 font-black shadow-sm ring-2 ring-white'
                  : completedSteps.includes(step.id)
                  ? 'bg-emerald-600/80 text-white font-bold'
                  : 'bg-purple-950/40 text-purple-300 hover:bg-purple-800'
              }`}
            >
              <div className="text-[10px] leading-none mb-1">Step {step.stepNumber}</div>
              <div className="text-xs truncate font-medium">{step.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Inspection Stage */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* Step Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
              Step {currentStep.stepNumber} of {totalSteps}: {currentStep.anatomicalRegion}
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {currentStep.title}
            </h3>
          </div>

          <div className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ARBA Rule 4.2 Standard</span>
          </div>
        </div>

        {/* Two-Column Stage: Left = Interactive Hotspots / Anatomy, Right = Case Diagnostic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Anatomical Examination & Hotspots */}
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Hands-On Physical Action
              </div>
              <p className="text-sm font-medium text-slate-800">
                {currentStep.examinationAction}
              </p>
              <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900">Ideal Breed Standard: </span>
                {currentStep.idealCondition}
              </div>
            </div>

            {/* Interactive Checkpoint Hotspots */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Interactive Examination Points</span>
                <span className="text-purple-600 font-normal text-xs">
                  Click to palpate & verify
                </span>
              </div>

              <div className="space-y-2">
                {currentStep.hotspots.map((hs) => {
                  const isChecked = !!inspectedHotspots[hs.id];
                  return (
                    <button
                      key={hs.id}
                      onClick={() => handleInspectHotspot(hs.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                        isChecked 
                          ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                          : 'bg-white border-slate-200 hover:border-purple-300 text-slate-800 shadow-2xs'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <Eye className={`w-3.5 h-3.5 ${isChecked ? 'text-emerald-600' : 'text-purple-600'}`} />
                          <span>{hs.name}</span>
                        </div>
                        <div className="text-xs text-slate-600">
                          {isChecked ? hs.normalText : 'Tap to examine this anatomical structure'}
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300 text-transparent'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Oral Script for Judge */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>What to Say to the Judge</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-950 italic font-serif">
                {currentStep.verbalScript}
              </p>
            </div>
          </div>

          {/* Right: Judge Case Diagnostic Ring */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Live Table Scenario Challenge
                </div>
                <div className="text-xs text-slate-400 font-mono">Case #0{activeCaseIdx + 1}</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-white">
                  {activeCase.scenarioTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-700/50">
                  {activeCase.findingDescription}
                </p>
              </div>

              {/* Diagnostic Classification Buttons */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-300">
                  How does the ARBA Standard classify this condition?
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleEvaluateCase('CLEAR')}
                    disabled={!!feedbackState}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      userSelectedDiagnosis === 'CLEAR'
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    Clear / Normal
                  </button>

                  <button
                    onClick={() => handleEvaluateCase('FAULT')}
                    disabled={!!feedbackState}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      userSelectedDiagnosis === 'FAULT'
                        ? 'bg-amber-600 text-white border-amber-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    Fault (Deduct)
                  </button>

                  <button
                    onClick={() => handleEvaluateCase('DISQUALIFICATION')}
                    disabled={!!feedbackState}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      userSelectedDiagnosis === 'DISQUALIFICATION'
                        ? 'bg-rose-600 text-white border-rose-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    Disqualification (DQ)
                  </button>
                </div>
              </div>

              {/* Feedback Alert */}
              {feedbackState && (
                <div className={`p-3.5 rounded-xl text-xs space-y-1.5 border ${
                  feedbackState.isCorrect
                    ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/90 border-rose-500 text-rose-200'
                }`}>
                  <div className="font-bold flex items-center gap-1.5">
                    {feedbackState.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    )}
                    <span>{feedbackState.isCorrect ? 'Correct Diagnosis (+10 Pts)' : 'Diagnostic Fault'}</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-95">
                    {feedbackState.message}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIdx === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Checkpoint</span>
              </button>

              <button
                onClick={handleNextStep}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-sm transition-all"
              >
                <span>{currentStepIdx === totalSteps - 1 ? 'Finish Examination' : 'Next Checkpoint'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
