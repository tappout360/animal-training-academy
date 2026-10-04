// WarrenWise Youth Animal Training Academy - ARBA Showmanship Suite Data
// Standard of Perfection 8-Point Physical Inspection, 5 Body Types, and 15s Oral Defense Questions

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
    verbalScript: '"Judge, I am examining both eyes for blindness, cataracts, corneal spots, or wall eyes, confirming matching color and bright alertness."'
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

export const ARBA_BODY_TYPES = {
  compact: {
    id: 'compact',
    name: 'Compact Body Type',
    representativeBreeds: ['Holland Lop', 'Netherland Dwarf', 'Mini Rex', 'Mini Lop', 'Dutch'],
    idealFrontPaw: 50,
    idealRearHock: 50,
    idealArchRise: 80,
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

export const ORAL_DEFENSE_QUESTIONS = [
  {
    id: 'od_01',
    category: 'ARBA Standard of Perfection',
    judgePrompt: '"Showman, identify your breed’s primary body type, its fur classification, and state whether it is exhibited as a 4-class or 6-class breed."',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Compact body type, Rollback fur, and it is exhibited as a 4-class breed (Senior & Junior Bucks and Does).',
        isCorrect: true,
        judgeFeedback: 'Excellent! Clear, concise, and accurate ARBA classification.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'Commercial body type with long wool, and it has 6 age classes including intermediate.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Holland Lops and Mini Rex are compact 4-class breeds, not commercial wool breeds.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'It is a friendly pet rabbit with soft hair and can be shown in any category.',
        isCorrect: false,
        judgeFeedback: 'Too informal. An ARBA judge requires precise body type and fur terminology.',
        points: 0
      }
    ]
  },
  {
    id: 'od_02',
    category: 'Anatomy & Health Observation',
    judgePrompt: '"Showman, show me the incisors and explain what tooth condition would cause this animal to be disqualified from the show table."',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Yellow tooth staining from eating grass or carrots.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Yellow stains are considered a minor fault/condition issue, not a disqualification.',
        points: 0
      },
      {
        id: 'opt_b',
        text: 'Malocclusion or mandibular prognathism, where lower incisors lap outside the upper teeth or meet edge-to-edge.',
        isCorrect: true,
        judgeFeedback: 'Spot on! Malocclusion is an immediate disqualification under ARBA General Disqualifications.',
        points: 25
      },
      {
        id: 'opt_c',
        text: 'Having baby peg teeth behind the primary front incisors.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Normal rabbits possess peg teeth directly behind their upper incisors.',
        points: 0
      }
    ]
  },
  {
    id: 'od_03',
    category: 'Disqualifications vs Faults',
    judgePrompt: '"Showman, your rabbit has a single white toenail on its front foot, but the other claws are dark slate. What is my official ruling?"',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'Disqualification under ARBA General Disqualifications for unmatched toenails on a colored variety.',
        isCorrect: true,
        judgeFeedback: 'Perfect call. White toenails on colored varieties are an irrecoverable disqualification in the ring.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'A minor 2-point fault in grooming, but it can still win Best of Breed.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. A white claw on a colored breed is a hard DQ, not a grooming fault.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'No deduction if the rabbit has a clean tattoo in the ear.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Tattoo status does not excuse toenail pigmentation violations.',
        points: 0
      }
    ]
  },
  {
    id: 'od_04',
    category: 'Husbandry & Digestion Science',
    judgePrompt: '"Showman, why is long-stem grass hay essential in your animal’s daily feeding program?"',
    timeLimitSeconds: 15,
    options: [
      {
        id: 'opt_a',
        text: 'It provides necessary indigestible fiber to drive cecal motility, prevent GI stasis, and grind continuously growing open-rooted teeth.',
        isCorrect: true,
        judgeFeedback: 'Masterful husbandry defense! High fiber prevents gut stasis and naturally wears down open-rooted teeth.',
        points: 25
      },
      {
        id: 'opt_b',
        text: 'It makes their fur change color to look shinier before the judge.',
        isCorrect: false,
        judgeFeedback: 'Incorrect. Hay is about gastrointestinal motility, not artificial coat tinting.',
        points: 0
      },
      {
        id: 'opt_c',
        text: 'It replaces the need for clean drinking water in the hutches.',
        isCorrect: false,
        judgeFeedback: 'Dangerously incorrect. Fresh water is required 24/7 alongside high-fiber forage.',
        points: 0
      }
    ]
  }
];
