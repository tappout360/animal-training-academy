// WarrenWise Youth Animal Training Academy - Showmanship Routine & Oral Studio Data

export const SHOWMANSHIP_ROUTINES = {
  rabbits: {
    speciesName: 'Rabbit',
    totalSteps: 12,
    attireGuide: 'Clean white long-sleeve collared shirt or white show jacket, dark slacks or clean jeans without holes, closed-toe leather boots, hair secured neatly back, no dangling jewelry.',
    steps: [
      {
        step: 1,
        title: 'Carrying & Transferring',
        action: 'Support rabbit against ribcage under arm with head tucked behind elbow; opposite hand firmly supporting hindquarters.',
        verbalScript: '"Judge, I am carrying my rabbit in a secure football tuck, ensuring the hindquarters are fully supported to prevent any spinal kicking or injury."',
        scoringFocus: 'Control, calm movement, spinal protection, confidence.'
      },
      {
        step: 2,
        title: 'Posing the Rabbit',
        action: 'Pose rabbit to match its breed standard (Compact: front toes aligned under eye centers, hind feet parallel under hips; Full Arch: allow natural alert standing).',
        verbalScript: '"I am posing my rabbit according to its breed standard, aligning the front feet with the eyes and tucking the hind legs square under the hips."',
        scoringFocus: 'Proper breed type posture, smooth quiet hands, alertness.'
      },
      {
        step: 3,
        title: 'Checking Ears & Tattoo',
        action: 'Open both ears wide toward the judge. Inspect inside for mites, sores, and read tattoo in left ear.',
        verbalScript: '"I am checking both ears for ear canker, mites, or tears. In the left ear, my rabbit’s legible tattoo is [Read Ear Tattoo], and the right ear is clean for ARBA registration."',
        scoringFocus: 'Clear view presented to judge, tattoo legibility, mite-free ear canals.'
      },
      {
        step: 4,
        title: 'Checking Eyes & Nose',
        action: 'Inspect both eyes closely, then check nostrils and front paws for nasal discharge.',
        verbalScript: '"I am inspecting the eyes for blindness, wall eye, or conjunctivitis. I am checking the nostrils and inner front paws for white nasal discharge or snuffles."',
        scoringFocus: 'Both eyes examined, clean dry nostrils, checking paw pads.'
      },
      {
        step: 5,
        title: 'Checking Teeth & Malocclusion',
        action: 'Gently pull lips back to reveal incisors and verify upper teeth overlap lower teeth.',
        verbalScript: '"I am examining the incisors to ensure proper occlusion. The upper front teeth overlap the lower incisors, with no wolf teeth, peg tooth defects, or malocclusion."',
        scoringFocus: 'Gentle handling, clear dental view, correct overlap confirmation.'
      },
      {
        step: 6,
        title: 'Checking Front Legs & Toes',
        action: 'Extend each front leg toward judge. Count 5 toenails on each foot (4 toes + 1 dewclaw). Check bone straightness.',
        verbalScript: '"I am checking front legs for straight bone structure and counting five toenails on each foot including the dewclaw, verifying matching color with no missing nails."',
        scoringFocus: 'Accurate count, straightness check, toenail color match.'
      },
      {
        step: 7,
        title: 'Checking Hind Legs & Hocks',
        action: 'Extend rear legs straight back. Count 4 toenails per rear foot. Inspect heel pads for sore hocks.',
        verbalScript: '"I am checking the hind legs for straightness, counting four toenails on each foot, and examining the hocks for any inflammation, missing fur, or sore hocks."',
        scoringFocus: 'Rear leg straightness, pad examination, 4 toes counted.'
      },
      {
        step: 8,
        title: 'Checking Sex & Vent Area',
        action: 'Turn rabbit securely onto rump; press gently above and below vent opening to expose sexual organ.',
        verbalScript: '"I am examining the vent area to confirm my rabbit is a [Senior Buck / Junior Doe] and verifying zero signs of vent disease or spirochetosis."',
        scoringFocus: 'Gentle flip, correct organ exposure, clean skin.'
      },
      {
        step: 9,
        title: 'Checking Abdomen & Belly',
        action: 'Run fingertips smoothly down the belly and chest, feeling for swelling or abnormalities.',
        verbalScript: '"I am palpating the abdomen to check for internal abscesses, umbilical hernia, or mastitis on the mammary lines."',
        scoringFocus: 'Smooth palpation from ribs to groin.'
      },
      {
        step: 10,
        title: 'Checking Tail & Spine',
        action: 'Run hand along spine to tail; gently flip tail up and side-to-side.',
        verbalScript: '"I am running my hand down the spine to verify straightness and flexibility, and checking the tail for wry tail, screw tail, or missing vertebrae."',
        scoringFocus: 'Spine line check, tail carriage straightness.'
      },
      {
        step: 11,
        title: 'Checking Fur Condition & Density',
        action: 'Stroke coat backward from rump to neck, observe return (rollback/flyback/rex), then smooth flat.',
        verbalScript: '"I am stroking the fur backward to demonstrate my breed’s [Rollback / Flyback / Rex] coat, checking for prime condition, density, and cleanliness."',
        scoringFocus: 'Coat return, clean undercoat, proper breed fur characteristics.'
      },
      {
        step: 12,
        title: 'Final Pose & Courtesy',
        action: 'Return rabbit into flawless posed position. Step back one half-pace, maintain eye contact, and await questions.',
        verbalScript: '"My rabbit is returned to its final pose, and I am ready for any questions from the judge. Thank you, Judge."',
        scoringFocus: 'Immaculate final presentation, poise, attentive eye contact.'
      }
    ],
    oralQuestions: [
      {
        id: 'oq_rb_1',
        division: 'junior',
        question: 'What is the gestation period of a domestic rabbit?',
        idealAnswer: 'Judge, the gestation period of a domestic rabbit is 28 to 32 days, with an average of 31 days.',
        keyPoints: ['28 to 32 days', 'Average 31 days']
      },
      {
        id: 'oq_rb_2',
        division: 'junior',
        question: 'Name three disqualifications (DQs) that would eliminate a rabbit from competition.',
        idealAnswer: 'Judge, three general disqualifications are: 1) Malocclusion or buck teeth, 2) Ear canker or active mites, and 3) White nasal discharge indicative of snuffles.',
        keyPoints: ['Malocclusion', 'Ear canker / mites', 'Snuffles / nasal discharge', 'Missing toenail', 'Wry tail']
      },
      {
        id: 'oq_rb_3',
        division: 'intermediate',
        question: 'Explain the difference between a 4-Class breed and a 6-Class breed.',
        idealAnswer: 'Judge, 4-Class breeds have a mature weight under 9 pounds and compete in Junior Buck, Junior Doe, Senior Buck, and Senior Doe. 6-Class breeds mature at 9 pounds or more and include an Intermediate class (6 to 8 months of age) for both bucks and does because of their longer growth cycle.',
        keyPoints: ['Weight cutoff (9 lbs)', 'Intermediate age class (6-8 months)', 'Commercial vs smaller breeds']
      },
      {
        id: 'oq_rb_4',
        division: 'senior',
        question: 'How do you differentiate between simple malocclusion and butt teeth, and what are the genetic implications for your breeding herd?',
        idealAnswer: 'Judge, simple malocclusion occurs when the lower incisors extend outward over the top incisors. Butt teeth or peg-to-peg occlusion occurs when the incisors meet edge-to-edge with no overlap. Both are standard disqualifications inherited as polygenic recessive traits. Animals displaying or producing malocclusion should be culled from breeding herds to protect dental genetics.',
        keyPoints: ['Edge-to-edge vs lower teeth overlapping upper', 'Standard disqualification', 'Recessive inheritance', 'Cull from breeding program']
      }
    ]
  },
  cavies: {
    speciesName: 'Cavy',
    totalSteps: 10,
    attireGuide: 'Clean white long-sleeve collared shirt, clean slacks or dark jeans, closed-toe boots, carpet show mat or show board, hair tied back neatly.',
    steps: [
      {
        step: 1,
        title: 'Setting Show Board & Posing',
        action: 'Place clean carpet show board on table. Set cavy in proper breed pose facing judge.',
        verbalScript: '"Judge, I am placing my cavy on my show board and establishing a square, poised stance for its breed type."',
        scoringFocus: 'Board cleanliness, calm two-hand transfer, correct breed pose.'
      },
      {
        step: 2,
        title: 'Checking Ears & Ear Tag',
        action: 'Inspect both ears. Verify metal ear tag in left ear.',
        verbalScript: '"I am checking both ears for tears or parasites, and verifying my cavy’s official ear tag number [Read Tag Number] in the left ear."',
        scoringFocus: 'Ear tag legibility, ear cleanliness, gentle touch.'
      },
      {
        step: 3,
        title: 'Checking Eyes & Nose',
        action: 'Inspect eyes for discharge, cataracts, or pea eye. Check nose for dryness.',
        verbalScript: '"I am inspecting the eyes for pea eye, corneal cloudiness, or discharge, and ensuring the nose is clean and dry."',
        scoringFocus: 'Clear eyes, dry nostrils, checking paw condition.'
      },
      {
        step: 4,
        title: 'Checking Mouth & Teeth',
        action: 'Gently pull back lips to show top and bottom incisors.',
        verbalScript: '"I am inspecting the incisors to ensure correct dental alignment and checking for broken teeth or malocclusion."',
        scoringFocus: 'Gentle lip retraction without pinching whiskers.'
      },
      {
        step: 5,
        title: 'Checking Front Feet & Toes',
        action: 'Extend front feet. Count 4 toes per foot.',
        verbalScript: '"I am counting four straight toes and toenails on each front foot, checking for missing or extra toes."',
        scoringFocus: '4 toes counted, pad straightness.'
      },
      {
        step: 6,
        title: 'Checking Hind Feet & Pads',
        action: 'Extend back feet. Count 3 toes per foot. Inspect heel pads for bumblefoot.',
        verbalScript: '"I am counting three toes on each rear foot and checking the foot pads for any redness or bumblefoot pododermatitis."',
        scoringFocus: '3 toes counted (14 total), pad cleanliness.'
      },
      {
        step: 7,
        title: 'Checking Belly & Sex',
        action: 'Turn cavy gently to view perineal area and feel abdomen.',
        verbalScript: '"I am checking the sex of my cavy [Boar / Sow], ensuring the perineal area is clean and free of impaction, and palpating the abdomen."',
        scoringFocus: 'Comfortable holding angle, impaction check, gentle palpation.'
      },
      {
        step: 8,
        title: 'Checking Coat & Crest / Rosettes',
        action: 'Evaluate coat texture, sweep (longhairs), or rosette placement (Abyssinian) according to breed standard.',
        verbalScript: '"I am examining the coat for proper texture, density, and breed characteristics like rosette clarity and ridge sharpness."',
        scoringFocus: 'Demonstrating breed-specific points.'
      },
      {
        step: 9,
        title: 'Final Reset & Courtesy',
        action: 'Reset cavy in alert pose, step back, and maintain eye contact with judge.',
        verbalScript: '"My cavy is reset in its final show pose. I am ready for any questions from the judge. Thank you."',
        scoringFocus: 'Poise, readiness, professional courtesies.'
      }
    ],
    oralQuestions: [
      {
        id: 'oq_cv_1',
        division: 'junior',
        question: 'Why do cavies need Vitamin C in their diet every single day?',
        idealAnswer: 'Judge, cavies cannot manufacture their own Vitamin C because they lack the L-gulonolactone oxidase enzyme. Without 10 to 30 mg of daily Vitamin C, cavies will develop Scurvy.',
        keyPoints: ['Cannot synthesize Vitamin C', 'Lacks enzyme', '10 to 30 mg daily', 'Prevents scurvy']
      },
      {
        id: 'oq_cv_2',
        division: 'junior',
        question: 'How many total toes does a normal cavy have?',
        idealAnswer: 'Judge, a normal cavy has 14 total toes: four toes on each front foot and three toes on each back foot.',
        keyPoints: ['14 total toes', '4 front', '3 back']
      },
      {
        id: 'oq_cv_3',
        division: 'intermediate',
        question: 'What is bumblefoot in cavies and how do you prevent it in your barn?',
        idealAnswer: 'Judge, bumblefoot or pododermatitis is a bacterial infection of the foot pad caused by wire flooring, wet dirty bedding, or rough surfaces. I prevent it by keeping my cavies on solid-bottom cages with thick clean aspen or paper bedding and inspecting their foot pads weekly.',
        keyPoints: ['Bacterial infection / pododermatitis', 'Caused by wire floors or damp bedding', 'Solid flooring & weekly checks']
      }
    ]
  }
};
