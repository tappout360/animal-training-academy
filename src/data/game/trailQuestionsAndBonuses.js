// WarrenWise Animal Academy - Trail Question & Bonus Trivia Bank
// High-yield livestock questions with BONUS speed & technical multipliers
// Provides endless replayability so youth can replay trails to accumulate coins/points for their next pet!

export const TRAIL_QUESTIONS_AND_BONUSES = [
  {
    id: 'q_rabbits_hindquarters',
    speciesId: 'rabbits',
    tier: 1,
    question: 'When picking up and table-posing a rabbit, what part of the body must ALWAYS be supported at all times?',
    options: [
      'The hindquarters and rump',
      'The scruff of the neck alone',
      'The front forelegs only',
      'The ears'
    ],
    correctIndex: 0,
    explanation: 'Supporting the heavy hindquarters prevents the powerful rabbit kicking reflex that can fracture its delicate lumbar spine.',
    points: 80,
    bonusQuestion: {
      prompt: 'BONUS SPEED ROUND: What ARBA body type describes a rabbit with an arch beginning behind the shoulders and peaking over the hips (like the American or Beverly)?',
      options: ['Semi-Arch (Mandolin)', 'Compact', 'Full-Arch', 'Commercial'],
      correctIndex: 0,
      bonusPoints: 50
    }
  },
  {
    id: 'q_cavies_vitamin_c',
    speciesId: 'cavies',
    tier: 1,
    question: 'Why can guinea pigs (cavies) NEVER be fed ordinary rabbit pellets as their primary diet?',
    options: [
      'Cavies lack the enzyme L-gulonolactone oxidase and cannot synthesize Vitamin C',
      'Rabbit feed contains too much moisture for cavies',
      'Cavies are carnivores and require fish meal',
      'Rabbit feed causes cavy ears to flop over'
    ],
    correctIndex: 0,
    explanation: 'Cavies require daily Vitamin C in their diet; rabbit food lacks stabilized Vitamin C, resulting in fatal scurvy.',
    points: 85,
    bonusQuestion: {
      prompt: 'BONUS: How many recognised breeds does the American Cavy Breeders Association (ACBA) currently sanction?',
      options: ['13 Recognized Breeds', '8 Breeds', '22 Breeds', '5 Breeds'],
      correctIndex: 0,
      bonusPoints: 60
    }
  },
  {
    id: 'q_sheep_copper',
    speciesId: 'sheep',
    tier: 2,
    question: 'What mineral is vital for cattle and goats, but causes FATAL toxicity when fed in cattle-formulated mineral blocks to sheep?',
    options: [
      'Copper (Cu)',
      'Calcium (Ca)',
      'Sodium Chloride (Salt)',
      'Phosphorus (P)'
    ],
    correctIndex: 0,
    explanation: 'Sheep liver cells rapidly accumulate copper and cannot excrete excess, leading to fatal hemolytic crisis and jaundice.',
    points: 95,
    bonusQuestion: {
      prompt: 'BONUS: In sheep showmanship, on which side of the lamb should the exhibitor always stay relative to the judge?',
      options: [
        'Keep the lamb between yourself and the judge (never block the judge’s view)',
        'Always stand directly behind the lamb tail',
        'Hold the front knees from the floor',
        'Lead only from the right side'
      ],
      correctIndex: 0,
      bonusPoints: 65
    }
  },
  {
    id: 'q_horses_quarter_system',
    speciesId: 'horses',
    tier: 3,
    question: 'In Equine Showmanship, how is the horse divided during the "Quarter System" presentation as the judge moves around the animal?',
    options: [
      'Divided into 4 quadrants by imaginary lines through the spine and across the withers',
      'Divided into 4 quadrants based on hoof colors',
      'Split into 4 sections by head, neck, ribs, and tail',
      'Divided by the 4 reins of a double bridle'
    ],
    correctIndex: 0,
    explanation: 'The Quarter System divides the horse lengthwise down the spine and horizontally at the withers, determining where the exhibitor stands for clear judge sightlines.',
    points: 110,
    bonusQuestion: {
      prompt: 'BONUS TRIVIA: What digestive disorder in horses is the #1 medical emergency, often triggered by moldy hay or sudden diet changes?',
      options: ['Colic (Equine abdominal pain / gut stasis)', 'Strangles', 'Thrush', 'Cushing’s Disease'],
      correctIndex: 0,
      bonusPoints: 75
    }
  },
  {
    id: 'q_poultry_grit',
    speciesId: 'poultry',
    tier: 2,
    question: 'Why do chickens and turkeys require insoluble granite grit in their diet?',
    options: [
      'To grind whole grains inside the muscular gizzard (ventriculus)',
      'To make their feathers waterproof',
      'To color egg yolks bright gold',
      'To prevent beak overgrowth'
    ],
    correctIndex: 0,
    explanation: 'Chickens lack teeth; the muscular gizzard contracts hard granite stones against swallowed grain to pulverize feed into digestible mash.',
    points: 90,
    bonusQuestion: {
      prompt: 'BONUS: How many toes does a Silkie or Dorking chicken have on each foot compared to ordinary 4-toed breeds?',
      options: ['5 Toes (Polydactyly)', '3 Toes', '6 Toes', '4 Toes'],
      correctIndex: 0,
      bonusPoints: 55
    }
  },
  {
    id: 'q_swine_temperature',
    speciesId: 'swine',
    tier: 3,
    question: 'Why are market pigs at extreme risk of heat stress when trail temperatures exceed 80°F?',
    options: [
      'Pigs have almost zero functional sweat glands and small lung-to-body ratios',
      'Pigs drink only hot water',
      'Pigs have thick wool that traps heat',
      'Pigs cannot pant'
    ],
    correctIndex: 0,
    explanation: 'Swine cannot dissipate heat through sweating; they rely on wallowing, cool mist, and shade to prevent lethal hyperthermia.',
    points: 100,
    bonusQuestion: {
      prompt: 'BONUS: In swine showmanship, how far should an exhibitor typically keep their hog moving in front of the judge?',
      options: ['10 to 15 feet away at a controlled, natural walking drive', 'Touching the judge’s boots', '30 yards away across the arena', 'Standing completely motionless against the fence'],
      correctIndex: 0,
      bonusPoints: 70
    }
  }
];
