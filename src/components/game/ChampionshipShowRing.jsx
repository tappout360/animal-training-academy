// WarrenWise Animal Academy - Herd Trail Quest
// Championship Show Ring: The Grand Climax at the end of the Pioneer Trail
// Real 4-H & ARBA Showmanship Evaluation, Physical Inspection & Award Ceremony

import React, { useState } from 'react';
import { 
  Trophy, Award, CheckCircle2, XCircle, Sparkles, ChevronRight, 
  ArrowLeft, RotateCcw, ShieldCheck, Heart, User, Check, Star
} from 'lucide-react';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';

// Sample oral exam questions by species
const SHOW_ORAL_QUESTIONS = {
  rabbits: [
    {
      question: 'Judge: "Exhibitor, what is the ideal body type classification of your Holland Lop, and what is its maximum senior show weight?"',
      options: [
        { text: 'Compact body type; maximum senior show weight is 4 pounds.', isCorrect: true, feedback: 'Spot on! Holland Lops are 4-class compact rabbits capped at 4 lbs.' },
        { text: 'Commercial body type; maximum show weight is 9 pounds.', isCorrect: false, feedback: 'Incorrect. Commercial rabbits include New Zealands and Californians, not Holland Lops.' },
        { text: 'Semi-arch body type; no maximum weight.', isCorrect: false, feedback: 'Incorrect. Semi-arch applies to Flemish Giants and Beverens.' }
      ]
    },
    {
      question: 'Judge: "Please show me where you check for ear mites and what symptoms you would look for."',
      options: [
        { text: 'Gently open both ears wide toward the light; check deep in the ear canal for brown crusty discharge or scratching.', isCorrect: true, feedback: 'Correct examination! Early detection prevents Psoroptes cuniculi infestations.' },
        { text: 'Only check the outside fur of the ear.', isCorrect: false, feedback: 'Ear mites live inside the inner ear canal.' },
        { text: 'Rub water inside the ear canal to clean it.', isCorrect: false, feedback: 'Never pour liquids into rabbit ears.' }
      ]
    },
    {
      question: 'Judge: "What are the four H’s of 4-H, and how did you apply them during your overland trail journey?"',
      options: [
        { text: 'Head (knowledge & problem solving), Heart (compassionate animal welfare), Hands (daily grooming & stall work), Health (biosecurity and nutrition).', isCorrect: true, feedback: 'Outstanding answer! True 4-H character in and out of the ring.' },
        { text: 'Horses, Hay, Halters, and Harvest.', isCorrect: false, feedback: 'Those are farm items, not the 4-H pledge values.' },
        { text: 'Hustle, Hard work, Honor, and Help.', isCorrect: false, feedback: 'Noble traits, but not the official four H’s.' }
      ]
    }
  ],
  generic: [
    {
      question: 'Judge: "Exhibitor, how did you maintain your companion’s hydration during the dry overland trail travel?"',
      options: [
        { text: 'Provided fresh, cool spring water at every rest halt and high-fiber forage to sustain hydration and digestion.', isCorrect: true, feedback: 'Excellent husbandry! Proper hydration keeps vital organs healthy.' },
        { text: 'Gave only sugary treats and skipped water stops.', isCorrect: false, feedback: 'Incorrect. Sugary treats without water cause severe distress.' }
      ]
    },
    {
      question: 'Judge: "Why is daily brushing and coat care critical prior to stepping onto the show table?"',
      options: [
        { text: 'It removes trail dust and dead fur, stimulates natural skin oils, and allows tactile inspection of body condition.', isCorrect: true, feedback: 'Well stated! Coat health directly reflects internal nutrition.' },
        { text: 'It is only for decoration and has no health value.', isCorrect: false, feedback: 'Grooming is essential for hygiene and health monitoring.' }
      ]
    },
    {
      question: 'Judge: "Demonstrate good sportsmanship if you do not receive the top ribbon today."',
      options: [
        { text: 'Congratulate fellow exhibitors warmly, thank the judge and ring stewards, and review feedback for future growth.', isCorrect: true, feedback: 'The hallmark of a true champion exhibitor!' },
        { text: 'Complain to the judge about the scores.', isCorrect: false, feedback: 'Unsportsmanlike conduct is disqualified.' }
      ]
    }
  ]
};

export default function ChampionshipShowRing({
  questState,
  trailPack,
  onSaveAward,
  onReturnToTrail
}) {
  const [step, setStep] = useState(1); // 1: Presentation Stance, 2: Physical Inspection, 3: Oral Exam, 4: Award Ceremony
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);
  const [oralAnswers, setOralAnswers] = useState([]);
  const [awardResult, setAwardResult] = useState(null);

  const companion = trailPack?.companion || {
    name: 'Barnaby the Holland Lop',
    species: 'Rabbit',
    avatarEmoji: '🐰'
  };

  const showQuality = questState.showQuality || {
    coatCondition: 85,
    vigorHydration: 90,
    temperament: 80,
    poseTraining: 75
  };

  const questions = SHOW_ORAL_QUESTIONS[trailPack?.speciesId] || SHOW_ORAL_QUESTIONS.generic;

  const handleSelectAnswer = (idx) => {
    setSelectedAnswerIdx(idx);
  };

  const handleNextQuestion = () => {
    const isCorrect = questions[currentQuestionIdx].options[selectedAnswerIdx]?.isCorrect || false;
    const nextAnswers = [...oralAnswers, { questionIdx: currentQuestionIdx, isCorrect }];
    setOralAnswers(nextAnswers);
    setSelectedAnswerIdx(null);

    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Calculate final score
      const correctCount = nextAnswers.filter(a => a.isCorrect).length;
      const oralScore = Math.round((correctCount / questions.length) * 100);
      const result = TrailQuestEngine.evaluateShowRing(questState, {
        oralExamScore: oralScore
      });

      setAwardResult(result.awardRecord);
      if (onSaveAward) {
        onSaveAward(result.awardRecord);
      }
      setStep(4); // Move to Award Ceremony
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-stone-900">
      {/* Top Grand Show Pavilion Visual Banner */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
        <img 
          src="/game/grand_show_pavilion.jpg" 
          alt="Grand Country Fair and Championship Show Pavilion"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-1 rounded-full">
              Final Trail Destination · Grand Arena
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              The Grand Animal Championship Show
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Judge Miller is reviewing your companion on the official exhibition table.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-700">
            <span className="text-2xl">🏆</span>
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">Judging Ring</div>
              <div className="text-xs font-bold text-amber-300">Ring #1 · Table Inspection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Content */}
      <div className="p-6 sm:p-8">
        {/* STEP 1: Presentation & Greeting */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 rounded-full mx-auto border-4 border-amber-400 overflow-hidden shadow-xl">
              <img 
                src="/game/holland_lop_pet.jpg" 
                alt={companion.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div>
              <h3 className="text-xl font-black text-stone-900">
                Presenting {companion.name} on the Show Table
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                You have safely guided your companion across the long overland pioneer trail!
                Judge Miller smiles kindly as you approach the green felt judging table.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-stone-500">
                Judge Miller's Ring Introduction:
              </div>
              <p className="text-sm text-stone-700 italic">
                "Welcome to the Grand Showmanship Ring! An exhibitor's true skill is judged not just by how their animal looks today, but by the dedicated care given all through the journey. Let’s examine your animal's physical condition, then we will conduct the oral examination."
              </p>
            </div>

            <button
              onClick={() => setStep(2)}
              className="bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-600/30 transition-all hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <span>Begin Physical Inspection</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Physical Inspection Breakdown */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                Phase 1 of 2: Physical Inspection
              </span>
              <h3 className="text-xl font-black text-stone-900 mt-2">
                Judge's Table Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Judge Miller checks ears, eyes, coat texture, body condition, and table stance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-amber-900 mb-1">
                  <span>🪮 Coat Sheen & Cleanliness</span>
                  <span>{showQuality.coatCondition}/100</span>
                </div>
                <div className="w-full bg-amber-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${showQuality.coatCondition}%` }} />
                </div>
                <p className="text-[11px] text-amber-700 mt-2">
                  {showQuality.coatCondition >= 80 ? '✨ Pristine sheen, free of road dust!' : 'Needs thorough brushing after trail dust.'}
                </p>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-cyan-900 mb-1">
                  <span>🚰 Vigor & Hydration</span>
                  <span>{showQuality.vigorHydration}/100</span>
                </div>
                <div className="w-full bg-cyan-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${showQuality.vigorHydration}%` }} />
                </div>
                <p className="text-[11px] text-cyan-700 mt-2">
                  {showQuality.vigorHydration >= 80 ? '💧 Bright clear eyes and alert muscle tone!' : 'Slight trail fatigue noted.'}
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-emerald-900 mb-1">
                  <span>🌿 Temperament & Trust</span>
                  <span>{showQuality.temperament}/100</span>
                </div>
                <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${showQuality.temperament}%` }} />
                </div>
                <p className="text-[11px] text-emerald-700 mt-2">
                  {showQuality.temperament >= 80 ? '💖 Calm, steady breathing on the table.' : 'A little skittish under the lights.'}
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-purple-900 mb-1">
                  <span>🪞 Show Table Stance</span>
                  <span>{showQuality.poseTraining}/100</span>
                </div>
                <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: `${showQuality.poseTraining}%` }} />
                </div>
                <p className="text-[11px] text-purple-700 mt-2">
                  {showQuality.poseTraining >= 80 ? '🏆 Holds 4-point square stance squarely!' : 'Needs steadying by the exhibitor.'}
                </p>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setStep(3)}
                className="bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <span>Proceed to Oral Examination</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Oral Showmanship Examination */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-between items-center text-xs text-stone-500">
              <span className="font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                Phase 2 of 2: Oral Examination
              </span>
              <span className="font-mono">
                Question {currentQuestionIdx + 1} of {questions.length}
              </span>
            </div>

            <div className="bg-stone-900 text-white p-5 rounded-2xl border border-stone-800 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                <User className="w-4 h-4" /> Judge Miller asks:
              </div>
              <p className="text-base sm:text-lg font-semibold text-stone-100 leading-snug">
                {questions[currentQuestionIdx].question}
              </p>
            </div>

            <div className="space-y-3">
              {questions[currentQuestionIdx].options.map((opt, idx) => {
                const isSelected = selectedAnswerIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-purple-50 border-purple-600 text-purple-950 ring-2 ring-purple-600/30'
                        : 'bg-white border-stone-200 hover:border-purple-300 text-stone-800'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0 ${
                      isSelected ? 'bg-purple-600 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-right pt-2">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswerIdx === null}
                className={`font-black text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 ml-auto ${
                  selectedAnswerIdx !== null
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg cursor-pointer'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <span>{currentQuestionIdx + 1 === questions.length ? 'Finalize Judge Scoring' : 'Submit Answer'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Official Award Ceremony & Certificate */}
        {step === 4 && awardResult && (
          <div className="max-w-2xl mx-auto space-y-6 text-center animate-fade-in">
            {/* Ribbon & Title */}
            <div className="space-y-2">
              <span className="text-6xl animate-bounce inline-block">
                {awardResult.ribbonIcon}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-purple-950">
                {awardResult.ribbon}
              </h3>
              <p className="text-sm font-bold text-purple-700 tracking-wide uppercase">
                {awardResult.ribbonTitle}
              </p>
            </div>

            {/* Official Scorecard Plaque */}
            <div className="bg-stone-50 border-2 border-stone-300 rounded-2xl p-6 text-left shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                    Official 4-H & Academy Judging Scorecard
                  </div>
                  <div className="text-base font-black text-stone-900">
                    Exhibitor: Clover Champion · Companion: {companion.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-purple-800">
                    {awardResult.totalScore} / 100
                  </div>
                  <div className="text-[10px] text-stone-500 font-bold uppercase">Final Mark</div>
                </div>
              </div>

              {/* Subscores */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div className="bg-white p-3 rounded-xl border border-stone-200">
                  <div className="text-stone-500 font-medium">Physical & Trail Condition (50%)</div>
                  <div className="text-base font-black text-stone-900 mt-1">
                    {awardResult.physicalScore} / 100 Pts
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200">
                  <div className="text-stone-500 font-medium">Oral Exam & Ring Knowledge (50%)</div>
                  <div className="text-base font-black text-stone-900 mt-1">
                    {awardResult.knowledgeScore} / 100 Pts
                  </div>
                </div>
              </div>

              {/* Judge's Remarks */}
              <div className="bg-purple-50/70 p-3.5 rounded-xl border border-purple-200 text-xs text-purple-900">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  Judge Miller's Official Commendation:
                </div>
                <p className="italic leading-relaxed">
                  "{awardResult.judgeFeedback}"
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onReturnToTrail}
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                Continue Trail Exploration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
