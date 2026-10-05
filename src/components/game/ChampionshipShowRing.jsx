// WarrenWise Animal Academy - Herd Trail Quest
// Championship Show Ring: The Grand Climax at the end of the Pioneer Trail
// Real 4-H & ARBA Showmanship Evaluation, Primary Source Questions, Judge Placement & Museum-Grade Certificate

import React, { useState } from 'react';
import { 
  Trophy, Award, CheckCircle2, XCircle, Sparkles, ChevronRight, 
  ArrowLeft, RotateCcw, ShieldCheck, Heart, User, Check, Star,
  Printer, Share2, Compass, BookOpen, AlertCircle
} from 'lucide-react';
import { TrailQuestEngine } from '../../services/TrailQuestEngine';
import { HIGHER_ORDER_ARBA_QUESTIONS } from '../../data/arbaAccuracyLedger';
import { soundEffects } from '../../utils/audioEffects';

export default function ChampionshipShowRing({
  questState,
  trailPack,
  onSaveAward,
  onReturnToTrail,
  onCompleteTrail
}) {
  const [step, setStep] = useState(1); // 1: Presentation Stance, 2: Table Inspection, 3: Oral Defense, 4: Award Ceremony & Certificate
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);
  const [oralAnswers, setOralAnswers] = useState([]);
  const [awardResult, setAwardResult] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [sharedNotice, setSharedNotice] = useState(null);

  const companion = trailPack?.companion || {
    name: 'Barnaby',
    species: 'Rabbit',
    avatarEmoji: '🐰',
    breed: 'Holland Lop'
  };

  const showQuality = questState.showQuality || {
    coatCondition: 85,
    vigorHydration: 90,
    temperament: 80,
    poseTraining: 75
  };

  // Higher-order questions with verified primary source citations
  const questions = HIGHER_ORDER_ARBA_QUESTIONS.slice(0, 4);

  const handleSelectAnswer = (idx) => {
    setSelectedAnswerIdx(idx);
    soundEffects.playTap();
  };

  const handleNextQuestion = () => {
    const isCorrect = questions[currentQuestionIdx].options[selectedAnswerIdx]?.isCorrect || false;
    const nextAnswers = [...oralAnswers, { questionIdx: currentQuestionIdx, isCorrect }];
    setOralAnswers(nextAnswers);
    setSelectedAnswerIdx(null);

    if (isCorrect) {
      soundEffects.playSuccessChime();
    } else {
      soundEffects.playTap();
    }

    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Calculate final score & evaluate placement
      const correctCount = nextAnswers.filter(a => a.isCorrect).length;
      const oralScore = Math.round((correctCount / questions.length) * 100);
      const result = TrailQuestEngine.evaluateShowRing(questState, {
        oralExamScore: oralScore
      });

      soundEffects.playVictoryFanfare();
      setAwardResult(result.awardRecord);
      if (onSaveAward) {
        onSaveAward(result.awardRecord);
      }
      if (onCompleteTrail) {
        onCompleteTrail(result.updatedState);
      }
      setStep(4); // Move to Award Ceremony
    }
  };

  const handlePrintCertificate = () => {
    soundEffects.playTap();
    window.print();
  };

  const handleShareToFamily = () => {
    soundEffects.playSuccessChime();
    setSharedNotice(`Official Certificate & ${awardResult.placement} shared to Family Barn Board!`);
    setTimeout(() => setSharedNotice(null), 3500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-stone-900">
      
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
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-1 rounded-full">
                Final Trail Destination · Grand Arena
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 border border-purple-500/40 px-2.5 py-1 rounded-full">
                Ring #1 Table Inspection
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The Grand Animal Championship Show
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Judge Margaret Miller is evaluating {companion.name} against the official ARBA Standard of Perfection.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-stone-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-stone-700 shadow-xl">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Showmanship Class</div>
              <div className="text-xs font-black text-amber-300">Junior Division · 48 Entries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Content */}
      <div className="p-6 sm:p-8">
        
        {/* STEP 1: Presentation Stance & Greeting */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-28 h-28 rounded-3xl mx-auto border-4 border-amber-400 overflow-hidden shadow-2xl">
                <img 
                  src="/game/holland_lop_pet.jpg" 
                  alt={companion.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="absolute -bottom-2 -right-2 text-2xl bg-stone-900 p-1.5 rounded-xl border-2 border-white shadow">
                {companion.avatarEmoji || '🐰'}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-stone-900">
                Presenting {companion.name} on the Exhibition Table
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                You have safely guided your pioneer caravan 100 miles across the overland trail!
                Judge Margaret Miller steps up to the green felt judging table with her critique clipboard.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Judge Miller’s Official Ring Address:</span>
              </div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                "Welcome to the Championship Ring, Exhibitor! In our show ring, an exhibitor’s true score reflects both the physical welfare and condition of the animal arriving from the trail, and your mastery of the official Standard of Perfection. We will first examine your companion’s physical condition, then test your standard interpretation in the oral defense."
              </p>
            </div>

            <button
              onClick={() => { soundEffects.playTap(); setStep(2); }}
              className="bg-purple-700 hover:bg-purple-600 text-white font-black text-sm px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-purple-700/30 transition-all hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <span>Begin Physical Table Inspection</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Physical Inspection Breakdown */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                Phase 1 of 2: Table Inspection (50% of Total Score)
              </span>
              <h3 className="text-2xl font-black text-stone-900 mt-2">
                Official ARBA Physical Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Judge Miller evaluates coat luster, hydration vigor, calm temperament, and square show stance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-amber-900 mb-1">
                  <span>🪮 Coat Luster &amp; Cleanliness</span>
                  <span className="font-black">{showQuality.coatCondition}/100 Pts</span>
                </div>
                <div className="w-full bg-amber-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full transition-all duration-700" style={{ width: `${showQuality.coatCondition}%` }} />
                </div>
                <p className="text-[11px] text-amber-800 mt-2 font-medium">
                  {showQuality.coatCondition >= 80 ? '✨ Pristine rollback sheen, free of trail road dust!' : 'Slight dustiness noted; grooming brush recommended.'}
                </p>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-cyan-900 mb-1">
                  <span>🚰 Vigor &amp; Hydration</span>
                  <span className="font-black">{showQuality.vigorHydration}/100 Pts</span>
                </div>
                <div className="w-full bg-cyan-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full transition-all duration-700" style={{ width: `${showQuality.vigorHydration}%` }} />
                </div>
                <p className="text-[11px] text-cyan-800 mt-2 font-medium">
                  {showQuality.vigorHydration >= 80 ? '💧 Bright clear eyes and alert muscle elasticity!' : 'Slight trail dehydration signs detected.'}
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-emerald-900 mb-1">
                  <span>🌿 Temperament &amp; Composure</span>
                  <span className="font-black">{showQuality.temperament}/100 Pts</span>
                </div>
                <div className="w-full bg-emerald-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-700" style={{ width: `${showQuality.temperament}%` }} />
                </div>
                <p className="text-[11px] text-emerald-800 mt-2 font-medium">
                  {showQuality.temperament >= 80 ? '💖 Calm, steady breathing and deep trust with exhibitor.' : 'Slight restlessness on the judging table.'}
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-bold text-purple-900 mb-1">
                  <span>🪞 Breed Standard Stance</span>
                  <span className="font-black">{showQuality.poseTraining}/100 Pts</span>
                </div>
                <div className="w-full bg-purple-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full transition-all duration-700" style={{ width: `${showQuality.poseTraining}%` }} />
                </div>
                <p className="text-[11px] text-purple-800 mt-2 font-medium">
                  {showQuality.poseTraining >= 80 ? '🏆 Poses firmly with front feet aligned under eyes!' : 'Needs gentle repositioning of front feet.'}
                </p>
              </div>

              {/* Spotless Cleanliness from Clean Up After */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:col-span-2">
                <div className="flex justify-between items-center text-xs font-bold text-emerald-950 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🧹</span>
                    <span>Clean Quarters &amp; Spotless Hocks</span>
                  </span>
                  <span className="font-black">{showQuality.cleanliness || 95}/100 Pts</span>
                </div>
                <div className="w-full bg-emerald-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-700" style={{ width: `${showQuality.cleanliness || 95}%` }} />
                </div>
                <p className="text-[11px] text-emerald-800 mt-2 font-medium">
                  ✨ Regular stall cleaning &amp; dry pine shavings prevent urine staining and sore hocks. Zero disqualifying color stains!
                </p>
              </div>
            </div>

            {/* Pet Care Stewardship Advantage Card */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-400/50 rounded-2xl p-3.5 text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wide">
                <span>🏆</span>
                <span>Pet Care Advantage Active: Daily Care Elevated Your Score!</span>
              </div>
              <p className="text-[11px] text-amber-800">
                Feeding (vigor), watering (hydration), brushing (sheen), cleaning up (spotless hocks), and daily love (calm poise) combine for up to a <strong>+15 Points Stewardship Boost</strong>!
              </p>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => { soundEffects.playTap(); setStep(3); }}
                className="bg-purple-700 hover:bg-purple-600 text-white font-black text-sm px-7 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <span>Enter Oral Standard Defense</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Oral Defense Examination (Higher-Order Scenario Challenges) */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
              <span className="font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                Phase 2 of 2: Oral Standard Defense (50% of Score)
              </span>
              <span className="font-mono font-bold text-stone-700">
                Question {currentQuestionIdx + 1} of {questions.length}
              </span>
            </div>

            {/* Scenario & Primary Source Banner */}
            <div className="bg-stone-900 text-white p-5 sm:p-6 rounded-3xl border border-stone-800 shadow-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                  <User className="w-4 h-4" /> 
                  <span>Judge Miller presents scenario:</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  <span>{questions[currentQuestionIdx].sourceCitation}</span>
                </span>
              </div>

              <div className="text-xs text-amber-200/90 italic bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                {questions[currentQuestionIdx].scenarioPrompt}
              </div>

              <p className="text-base sm:text-lg font-bold text-stone-100 leading-snug">
                {questions[currentQuestionIdx].question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestionIdx].options.map((opt, idx) => {
                const isSelected = selectedAnswerIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-purple-50 border-purple-600 text-purple-950 ring-2 ring-purple-600/30 shadow-md'
                        : 'bg-white border-stone-200 hover:border-purple-300 text-stone-800'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5 shrink-0 ${
                      isSelected ? 'bg-purple-600 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-right pt-2">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswerIdx === null}
                className={`font-black text-sm px-7 py-3.5 rounded-2xl transition-all flex items-center gap-2 ml-auto ${
                  selectedAnswerIdx !== null
                    ? 'bg-purple-700 hover:bg-purple-600 text-white shadow-xl cursor-pointer hover:scale-105'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <span>{currentQuestionIdx + 1 === questions.length ? 'Finalize Judge Placing' : 'Confirm & Next Defense Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Official Award Ceremony, Placement & Museum-Grade Certificate */}
        {step === 4 && awardResult && (
          <div className="max-w-3xl mx-auto space-y-6 text-center animate-fade-in">
            
            {/* Judge's Official Placing Banner */}
            <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-purple-900 text-white p-6 rounded-3xl border-2 border-amber-400/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <span className="text-6xl inline-block animate-bounce drop-shadow-lg">
                  {awardResult.ribbonIcon}
                </span>
                
                <div className="inline-block bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  Official Judge's Placing
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-amber-200 tracking-tight">
                  {awardResult.placement}
                </h3>
                
                <p className="text-sm font-semibold text-purple-200">
                  {awardResult.competitorField} · {awardResult.ribbonTitle}
                </p>

                <div className="text-xs text-amber-300 font-mono mt-2">
                  Total Championship Mark: <span className="text-base font-black text-white">{awardResult.totalScore} / 100 Pts</span>
                </div>

                {/* Pet Care Stewardship Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold">
                  <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    🌾 Feed (Vigor)
                  </span>
                  <span className="bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    💧 Water (Hydration)
                  </span>
                  <span className="bg-purple-400/20 text-purple-200 border border-purple-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    ✨ Brush (Coat Luster)
                  </span>
                  <span className="bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    🧹 Clean Up (Spotless Hocks)
                  </span>
                  <span className="bg-rose-400/20 text-rose-200 border border-rose-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    ❤️ Love (Calm Poise)
                  </span>
                </div>
              </div>
            </div>

            {/* Notification if shared */}
            {sharedNotice && (
              <div className="bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg animate-fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>{sharedNotice}</span>
              </div>
            )}

            {/* Official Museum-Grade Certificate (Framed View) */}
            <div className="bg-[#FAF7F0] border-8 border-amber-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-stone-900 overflow-hidden text-left font-serif print:border-none print:shadow-none print:p-0">
              
              {/* Inner Double Gold Border */}
              <div className="border-2 border-amber-600/70 p-5 sm:p-8 rounded-2xl relative">
                
                {/* Vintage Corner Scroll Accents */}
                <span className="absolute top-2 left-2 text-amber-700/60 text-lg">✦</span>
                <span className="absolute top-2 right-2 text-amber-700/60 text-lg">✦</span>
                <span className="absolute bottom-2 left-2 text-amber-700/60 text-lg">✦</span>
                <span className="absolute bottom-2 right-2 text-amber-700/60 text-lg">✦</span>

                {/* Certificate Header */}
                <div className="text-center space-y-1 mb-6 border-b border-amber-600/30 pb-4">
                  <div className="text-[11px] uppercase font-sans font-black tracking-widest text-amber-800">
                    WarrenWise Animal Academy · National 4-H &amp; ARBA Standards Division
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-amber-950 tracking-tight uppercase">
                    Certificate of Showmanship Excellence
                  </h1>
                  <div className="text-xs font-sans font-bold text-amber-700 uppercase tracking-widest">
                    &amp; Grand Championship Show Ring Placement
                  </div>
                </div>

                {/* Recipient Body */}
                <div className="text-center space-y-3 my-6">
                  <p className="text-xs italic text-stone-600 font-sans uppercase tracking-wider">
                    This official certificate is proudly conferred upon
                  </p>
                  <div className="text-2xl sm:text-3xl font-black text-stone-950 font-serif border-b-2 border-stone-400/60 pb-1 inline-block min-w-[280px]">
                    Clover Champion
                  </div>
                  <p className="text-xs text-stone-700 font-sans max-w-lg mx-auto leading-relaxed">
                    for demonstrating exemplary physical husbandry, overland trail endurance, and master interpretation of the breed standard while exhibiting
                  </p>
                  <div className="text-lg sm:text-xl font-black text-purple-900 font-sans">
                    "{companion.name}" — {companion.breed} ({companion.species})
                  </div>
                </div>

                {/* Placement Badge & Scores */}
                <div className="my-6 bg-amber-50/80 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{awardResult.ribbonIcon}</span>
                    <div>
                      <div className="text-[10px] uppercase font-black tracking-wider text-amber-800">
                        Official Show Placing
                      </div>
                      <div className="text-base font-black text-purple-950">
                        {awardResult.placement}
                      </div>
                      <div className="text-xs text-stone-600">
                        {awardResult.ribbon}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-center">
                    <div className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">
                      <div className="text-[10px] text-stone-500 font-bold uppercase">Table Inspection</div>
                      <div className="text-sm font-black text-stone-900">{awardResult.physicalScore} / 100</div>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">
                      <div className="text-[10px] text-stone-500 font-bold uppercase">Oral Defense</div>
                      <div className="text-sm font-black text-stone-900">{awardResult.knowledgeScore} / 100</div>
                    </div>
                    <div className="bg-purple-900 text-white px-3 py-1.5 rounded-xl">
                      <div className="text-[10px] text-amber-300 font-bold uppercase">Final Mark</div>
                      <div className="text-sm font-black">{awardResult.totalScore}%</div>
                    </div>
                  </div>
                </div>

                {/* Judge Commendation */}
                <div className="my-4 text-xs italic text-stone-700 font-sans bg-white/70 p-3 rounded-xl border border-stone-200 leading-relaxed">
                  <span className="font-bold font-serif not-italic text-stone-900">Judge Commendation: </span>
                  "{awardResult.judgeFeedback}"
                </div>

                {/* Signatures & Seal */}
                <div className="mt-8 pt-4 border-t border-amber-600/30 grid grid-cols-1 sm:grid-cols-3 items-end gap-4 font-sans text-center sm:text-left">
                  
                  {/* Left: Judge Signature */}
                  <div>
                    <div className="text-sm font-serif italic text-stone-900 border-b border-stone-400 pb-1">
                      Judge Margaret Miller
                    </div>
                    <div className="text-[10px] text-stone-500 font-bold uppercase mt-1">
                      Licensed ARBA &amp; 4-H Master Evaluator
                    </div>
                  </div>

                  {/* Center: Official 24k Gold Seal */}
                  <div className="text-center order-first sm:order-none">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 mx-auto flex items-center justify-center text-white shadow-xl border-2 border-white ring-2 ring-amber-500/40">
                      <Award className="w-8 h-8 text-amber-950" />
                    </div>
                    <div className="text-[9px] uppercase font-black tracking-widest text-amber-900 mt-1">
                      Official Gold Seal
                    </div>
                  </div>

                  {/* Right: Superintendent Signature */}
                  <div className="sm:text-right">
                    <div className="text-sm font-serif italic text-stone-900 border-b border-stone-400 pb-1">
                      Dr. Warren Wise, DVM
                    </div>
                    <div className="text-[10px] text-stone-500 font-bold uppercase mt-1">
                      Chief Academy Superintendent
                    </div>
                  </div>
                </div>

                {/* Primary Source Verification Barcode / ID */}
                <div className="mt-6 pt-3 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-2 text-[10px] text-stone-500 font-mono font-bold">
                  <span>Certificate ID: {awardResult.certificateId}</span>
                  <span className="text-emerald-700">✓ Primary Source Verifiable: Current ARBA Standard of Perfection</span>
                  <span>Issued: {awardResult.date}</span>
                </div>

              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-sans">
              <button
                onClick={handlePrintCertificate}
                className="bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print Official Certificate</span>
              </button>

              <button
                onClick={handleShareToFamily}
                className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition flex items-center gap-2"
              >
                <Share2 className="w-4 h-4 text-indigo-300" />
                <span>Post to Family Barn Board</span>
              </button>

              <button
                onClick={onReturnToTrail}
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md transition flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>Complete Trail &amp; Return</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
