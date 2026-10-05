// WarrenWise Animal Academy - Day-1 to Day-7 Rabbit Trail Script
// Living Herd Quest: Prototype-Ready Habit Loop for Rabbit Region
// Companion: Barnaby (Holland Lop)
// Care rules: No medication/dosing actions; welfare-first choices only.

export const HERD_MEMORY_TEMPLATE = {
  consistency: 80,
  ethics: 85,
  heatSafety: 90,
  handling: 75,
  biosecurity: 80
};

export const RABBIT_TRAIL_DAYS = [
  {
    dayNumber: 1,
    title: 'Arrival at the Warren',
    subtitle: 'Settling in / comfort check',
    seasonChapter: 'Project Start',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Settling in / comfort check',
    barnCheckStory: 'Barnaby is in a new stall. He seems alert but unsure.',
    challengeType: 'care_choices',
    prompt: 'What is the best first thing to check when settling a rabbit into a new space?',
    options: [
      {
        id: 'opt_1_a',
        text: 'Fresh water, safe housing, and quiet observation time',
        isCorrect: true,
        feedback: 'Excellent! Clean hydration, secure wire/penning, and low noise help your companion acclimate without stress.'
      },
      {
        id: 'opt_1_b',
        text: 'Give a big treat right away and invite friends over',
        isCorrect: false,
        feedback: 'Rushing in crowds and heavy treats causes digestive stress and heightened travel anxiety.'
      },
      {
        id: 'opt_1_c',
        text: 'Move him outside into full midday sun to explore',
        isCorrect: false,
        feedback: 'Never expose a new rabbit to direct midday sun and unfamiliar open predators.'
      }
    ],
    correctOutcome: {
      conditionDelta: 15,
      bondDelta: 20,
      herdReaction: 'Barnaby drinks, then soft-loafs near the front of the stall.',
      memoryTrait: 'consistency',
      traitDelta: 8,
      rewards: {
        mastery: 'Housing Basics +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Soft Straw Mat (common)',
        titleProgress: 'New Warren Scout'
      },
      tomorrowTease: 'Tomorrow may be warmer… shade planning matters.'
    }
  },
  {
    dayNumber: 2,
    title: 'Heat Safety Morning',
    subtitle: 'Temperature awareness',
    seasonChapter: 'Project Start',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Temperature awareness',
    barnCheckStory: 'Forecast feels hot. Barnaby is stretched out and breathing faster than yesterday.',
    challengeType: 'care_choices',
    prompt: 'What is the most welfare-conscious action in rising heat?',
    options: [
      {
        id: 'opt_2_a',
        text: 'Move to deep shade, improve airflow, offer a wrapped frozen bottle nearby',
        isCorrect: true,
        feedback: 'Spot on! Deep shade, cross ventilation, and safe frozen bottles allow voluntary heat dissipation.'
      },
      {
        id: 'opt_2_b',
        text: 'Dunk the rabbit in ice water',
        isCorrect: false,
        feedback: 'Extremely dangerous! Dunking in cold water induces hypothermic shock and severe respiratory distress.'
      },
      {
        id: 'opt_2_c',
        text: 'Ignore it because rabbits love heat',
        isCorrect: false,
        feedback: 'Fatal misconception! Rabbits cannot sweat or pant efficiently; heat stress can be fatal above 85°F.'
      }
    ],
    correctOutcome: {
      conditionDelta: 20,
      bondDelta: 25,
      herdReaction: 'Breathing eases; Barnaby rests in shade with relaxed ears.',
      memoryTrait: 'heatSafety',
      traitDelta: 12,
      rewards: {
        mastery: 'Heat Safety +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Cool Blue Bandana (uncommon progress)',
        titleProgress: 'Climate Steward'
      },
      tomorrowTease: 'A visitor day is coming — biosecurity matters.'
    }
  },
  {
    dayNumber: 3,
    title: 'Biosecurity Gate',
    subtitle: 'Protect the home herd',
    seasonChapter: 'Project Start',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Protect the home herd',
    barnCheckStory: 'You’re returning from a training meetup. Barnaby needs re-entry planning.',
    challengeType: 'trail_quiz',
    prompt: 'Why is quarantine/isolation important after rabbits have been around other animals?',
    options: [
      {
        id: 'opt_3_a',
        text: 'To watch for signs of illness before rejoining the home herd',
        isCorrect: true,
        feedback: 'Crucial husbandry! A 14-30 day isolation window stops subclinical diseases before spreading to your rabbitry.'
      },
      {
        id: 'opt_3_b',
        text: 'Because rabbits need total darkness after travel',
        isCorrect: false,
        feedback: 'Incorrect. Rabbits need natural day/night cycles, not pitch black confinement.'
      },
      {
        id: 'opt_3_c',
        text: 'To make them gain weight faster',
        isCorrect: false,
        feedback: 'Quarantine is a health shield, not a weight-gain gimmick.'
      }
    ],
    correctOutcome: {
      conditionDelta: 10,
      bondDelta: 15,
      herdReaction: 'Barnaby settles into a clean separate area; trust rises.',
      memoryTrait: 'biosecurity',
      traitDelta: 10,
      rewards: {
        mastery: 'Biosecurity +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Clean Gate Sign habitat item',
        titleProgress: 'Biosecurity Guardian'
      },
      tomorrowTease: 'Showmanship practice begins tomorrow.'
    }
  },
  {
    dayNumber: 4,
    title: 'Table Time Basics',
    subtitle: 'Calm handling confidence',
    seasonChapter: 'Conditioning Weeks',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Calm handling confidence',
    barnCheckStory: 'Barnaby is healthy and ready for gentle handling practice.',
    challengeType: 'showmanship_sequence',
    prompt: 'Put the first handling steps in a good order.',
    sequenceSteps: [
      { step: 1, text: 'Approach calmly' },
      { step: 2, text: 'Support hindquarters' },
      { step: 3, text: 'Secure comfortable hold' },
      { step: 4, text: 'Check orientation on table' }
    ],
    correctOutcome: {
      conditionDelta: 10,
      bondDelta: 20,
      herdReaction: 'Barnaby stays steadier on the table, blinking calmly.',
      memoryTrait: 'handling',
      traitDelta: 10,
      rewards: {
        mastery: 'Showmanship Foundations +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Practice Lead Loop (common)',
        titleProgress: 'Gentle Handler'
      },
      tomorrowTease: 'Breed smarts unlock tomorrow’s trail chest.'
    }
  },
  {
    dayNumber: 5,
    title: 'Breed ID Crossing',
    subtitle: 'Mental enrichment / learning day',
    seasonChapter: 'Conditioning Weeks',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Mental enrichment / learning day',
    barnCheckStory: 'Barnaby is bright-eyed and active.',
    challengeType: 'catch_classify',
    prompt: 'Compact body type, under 4 lbs, lopped ears carried close to cheeks.',
    options: [
      {
        id: 'opt_5_a',
        text: 'Holland Lop',
        isCorrect: true,
        feedback: 'Correct! The Holland Lop has a compact, muscular body, flat muzzle, and distinct crowned lopped ears.'
      },
      {
        id: 'opt_5_b',
        text: 'Flemish Giant',
        isCorrect: false,
        feedback: 'Incorrect. Flemish Giants are semi-arch giants weighing 14+ lbs with upright ears.'
      },
      {
        id: 'opt_5_c',
        text: 'Netherland Dwarf',
        isCorrect: false,
        feedback: 'Incorrect. Netherland Dwarfs are compact with short, upright erect ears, never lopped.'
      }
    ],
    correctOutcome: {
      conditionDelta: 10,
      bondDelta: 15,
      herdReaction: 'Companion “poses” as if showing profile, front paws square.',
      memoryTrait: 'handling',
      traitDelta: 6,
      rewards: {
        mastery: 'Breed ID +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Ear Bow Charm (rare chest chance)',
        titleProgress: 'Breed Scholar'
      },
      tomorrowTease: 'Ethics crossroads ahead — choose carefully.'
    }
  },
  {
    dayNumber: 6,
    title: 'Ethics Crossroads',
    subtitle: 'Character / stewardship',
    seasonChapter: 'Conditioning Weeks',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Character / stewardship',
    barnCheckStory: 'Another youth looks stressed before practice and asks you to help “fix” their rabbit’s appearance quickly.',
    challengeType: 'ethics_scenario',
    prompt: 'What is the best response?',
    options: [
      {
        id: 'opt_6_a',
        text: 'Refuse unsafe shortcuts; offer to help with legal grooming/practice only',
        isCorrect: true,
        feedback: 'Outstanding integrity! 4-H showmanship values sportsmanship, honest presentation, and peer encouragement.'
      },
      {
        id: 'opt_6_b',
        text: 'Help hide a problem so they can still win',
        isCorrect: false,
        feedback: 'Dishonest and prohibited! Fraudulent alteration violates the exhibitor code and harms animal welfare.'
      },
      {
        id: 'opt_6_c',
        text: 'Ignore them completely and walk away without support',
        isCorrect: false,
        feedback: 'Poor sportsmanship. Mentoring peers with kindness and legal guidance elevates everyone.'
      }
    ],
    correctOutcome: {
      conditionDelta: 10,
      bondDelta: 30,
      herdReaction: 'Special trust glow; mentor dialogue unlock.',
      memoryTrait: 'ethics',
      traitDelta: 15,
      rewards: {
        mastery: 'Ethics & Character +1',
        masteryStars: 1,
        cosmeticToken: 5,
        cosmeticSeed: 'Lore Card: Fairness Keeps the Hobby Strong',
        titleProgress: 'Steward of the Ring'
      },
      tomorrowTease: 'Weekend Show-Ring Saturday event unlocks.'
    }
  },
  {
    dayNumber: 7,
    title: 'Show-Ring Saturday Mini Finale',
    subtitle: 'Confidence + review',
    seasonChapter: 'Fair Week Sim',
    companionName: 'Barnaby',
    companionBreed: 'Holland Lop',
    herdNeed: 'Confidence + review',
    barnCheckStory: 'Barnaby is ready for a short Fair Day Sim practice.',
    challengeType: 'mini_fair_sim',
    prompt: 'Complete 3 showmanship stations: Water & Shade Check, Breed Classification, and Handling Sequence.',
    stations: [
      {
        id: 'st_1',
        stationName: 'Station 1: Water & Shade Check',
        category: 'Care Choice',
        prompt: 'Trail temperature hits 82°F outside the ring. What do you check first?',
        options: [
          { text: 'Verify clean water sipper is flowing and move crate out of sun glare', isCorrect: true },
          { text: 'Spritz face with cold perfume spray', isCorrect: false },
          { text: 'Skip water until after judging', isCorrect: false }
        ]
      },
      {
        id: 'st_2',
        stationName: 'Station 2: Breed Classification Check',
        category: 'Breed Classify',
        prompt: 'The table judge asks: “What body type is Barnaby the Holland Lop evaluated under?”',
        options: [
          { text: 'Compact Body Type', isCorrect: true },
          { text: 'Full Arch Body Type', isCorrect: false },
          { text: 'Commercial Body Type', isCorrect: false }
        ]
      },
      {
        id: 'st_3',
        stationName: 'Station 3: Handling Sequence',
        category: 'Handling Sequence',
        prompt: 'Demonstrate proper sequence when placing the rabbit on the judge’s rug:',
        options: [
          { text: 'Support hindquarters -> place front feet squarely -> rest hand gently on loin', isCorrect: true },
          { text: 'Drop quickly onto rug and tap paws with a pencil', isCorrect: false },
          { text: 'Hold suspended by scruff until judge taps table', isCorrect: false }
        ]
      }
    ],
    scoringTiers: {
      3: { ribbon: 'Practice Blue Ribbon', title: 'Grand Practice Champion', color: 'text-blue-700 bg-blue-100 border-blue-300' },
      2: { ribbon: 'Practice Red Ribbon', title: 'Reserve Practice Champion', color: 'text-rose-700 bg-rose-100 border-rose-300' },
      1: { ribbon: 'Practice White Ribbon', title: 'Honorable Practice Effort', color: 'text-slate-700 bg-slate-100 border-slate-300' }
    },
    correctOutcome: {
      conditionDelta: 20,
      bondDelta: 35,
      herdReaction: 'Championship hop animation; campsite banner unlock.',
      memoryTrait: 'handling',
      traitDelta: 15,
      rewards: {
        mastery: 'Mastery Review boost across Day 1–6 skills',
        masteryStars: 3,
        cosmeticToken: 15,
        cosmeticSeed: 'Warren Trail Scarf (rare progress)',
        certificateProgress: 'Rabbit Week Completion',
        familyPost: 'Week 1 Trail Complete'
      },
      tomorrowTease: 'Week 2: Nutrition & Body Condition Trail.'
    }
  }
];

export function getRabbitDayScript(dayNumber = 1) {
  const normalized = Math.max(1, Math.min(7, dayNumber));
  return RABBIT_TRAIL_DAYS.find(d => d.dayNumber === normalized) || RABBIT_TRAIL_DAYS[0];
}
