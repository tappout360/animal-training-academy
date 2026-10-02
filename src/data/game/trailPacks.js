// WarrenWise Animal Academy - Herd Trail Quest
// Multi-Species Trail Packs (Supporting Both Livestock Projects & Companion Pets)

export const TRAIL_PACKS = [
  // ==========================================
  // LIVESTOCK PROJECT TRAILS
  // ==========================================
  {
    id: 'rabbits_trail',
    speciesId: 'rabbits',
    type: 'livestock',
    name: 'Clover Meadows Rabbit Trail',
    subtitle: 'From Hutch Homestead to State Convention Showcase',
    companion: {
      name: 'Barnaby the Holland Lop',
      species: 'Rabbit',
      breed: 'Holland Lop',
      icon: 'Rabbit',
      avatarEmoji: '🐰',
      lore: 'A friendly lop with an inquisitive nose and boundless binky energy, ready to learn table showmanship.'
    },
    scenery: 'rolling green clover hills, whitewashed barns, and sunny judging tents',
    regions: [
      { id: 'reg_home', name: 'Hutch Homestead', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Timberline Training Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Fair Practice Grounds', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'State Convention Grand Arena', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'rb_node_1',
        title: 'Morning Hutch Check',
        region: 'reg_home',
        mile: 5,
        type: 'supply_decision',
        narrative: 'Dawn breaks over Hutch Homestead. Your rabbit rests on the clean wire floor. How will you stock your daypack?',
        prompt: 'Select your essential morning supply priority for your rabbit traveling today:',
        options: [
          { text: 'Fresh Timothy hay and clean, cool water in ball-point bottles', isCorrect: true, effect: { supplies: { feed: +15, water: +20 }, condition: +10, bond: +15, feedback: 'Perfect! Constant fiber and hydration protect against deadly GI stasis.' } },
          { text: 'A large bowl of sugary dried fruits and corn kernels', isCorrect: false, effect: { supplies: { feed: +5 }, condition: -10, bond: +5, feedback: 'Careful! Rabbits need fibrous Timothy hay; excessive sugary fruits cause dysbiosis.' } },
          { text: 'Leave without packing extra water to travel lighter', isCorrect: false, effect: { supplies: { water: -10 }, condition: -15, bond: -5, feedback: 'Hydration is life-critical on the trail! Never skip fresh water.' } }
        ]
      },
      {
        id: 'rb_node_2',
        title: 'Breed Identification Station',
        region: 'reg_home',
        mile: 12,
        type: 'catch_classify',
        narrative: 'You meet an ARBA breed inspector on the homestead path with a lineup of show rabbits.',
        prompt: 'Identify the breed: "A small compact rabbit under 3.5 lbs with ears strictly lopped flat against the head and heavy bone."',
        options: [
          { text: 'Holland Lop', isCorrect: true, feedback: 'Correct! Holland Lops are compact 4-class lopped rabbits under 4 lbs.' },
          { text: 'Flemish Giant', isCorrect: false, feedback: 'Flemish Giants are semi-arch giant commercial rabbits weighing 14+ lbs.' },
          { text: 'Netherland Dwarf', isCorrect: false, feedback: 'Netherland Dwarfs have small, upright erect ears, not lopped ears.' }
        ]
      },
      {
        id: 'rb_node_3',
        title: 'Warm Afternoon Shade Check',
        region: 'reg_home',
        mile: 22,
        type: 'care_choices',
        narrative: 'The midday sun rises over 82°F. You notice Barnaby breathing rapidly and stretching out along the wooden carrier.',
        prompt: 'What is the most welfare-conscious action to keep your rabbit comfortable in the heat?',
        options: [
          { text: 'Move the carrier into deep tree shade, turn on a battery fan, and place a frozen water bottle wrapped in a towel next to him', isCorrect: true, effect: { condition: +20, bond: +25, feedback: 'Outstanding husbandry! Rabbits cannot sweat; cool airflow and frozen bottles prevent heat prostration.' } },
          { text: 'Give a syringe of cold human medicine', isCorrect: false, effect: { condition: -20, bond: -10, feedback: 'NEVER administer unprescribed human medicine. Simple shade, cool airflow, and frozen bottles are safe.' } },
          { text: 'Ignore the rapid breathing; rabbits naturally like hot temperatures', isCorrect: false, effect: { condition: -25, bond: -15, feedback: 'Rabbits are prone to fatal heat stress over 85°F. Immediate cooling is essential!' } }
        ]
      },
      {
        id: 'rb_node_4',
        title: 'Biosecurity Outpost',
        region: 'reg_camp',
        mile: 35,
        type: 'trail_quiz',
        narrative: 'You arrive at the Timberline Training Camp gate where a veterinary technician inspects incoming animals.',
        prompt: 'What is the minimum recommended quarantine isolation period for a rabbit returning from an exhibition before rejoining the home rabbitry?',
        options: [
          { text: '30 days in a separate air space with dedicated boots and crocks', isCorrect: true, feedback: 'Correct! 30 days covers the incubation period of contagious pathogens like RHDV2 and Pasteurella.' },
          { text: '2 hours in the car', isCorrect: false, feedback: 'Two hours is not quarantine; pathogens incubate over weeks.' },
          { text: 'Quarantine is unnecessary if the rabbit looks fluffy', isCorrect: false, feedback: 'Subclinical carriers can shed viruses without obvious early signs.' }
        ]
      },
      {
        id: 'rb_node_5',
        title: 'Table Showmanship Routine',
        region: 'reg_camp',
        mile: 48,
        type: 'showmanship_sequence',
        narrative: 'At the training camp pavilion, the 4-H superintendent asks you to demonstrate the official 12-step ARBA table check sequence.',
        prompt: 'Order the initial inspection steps: Place these physical check steps in proper sequential order:',
        sequenceItems: [
          { step: 1, label: 'Carry rabbit in tuck/football hold and place gently onto table carpet' },
          { step: 2, label: 'Pose rabbit squarely according to breed body type facing judge' },
          { step: 3, label: 'Open ears wide to check left ear tattoo and inspect for ear mites' },
          { step: 4, label: 'Check teeth for proper overlap (no malocclusion or wolf teeth)' }
        ]
      },
      {
        id: 'rb_node_6',
        title: 'Mystery Stall Investigation',
        region: 'reg_camp',
        mile: 54,
        type: 'mystery_stall',
        narrative: 'A neighboring camper left a supply box by the barn aisle. The label is smudged.',
        clues: [
          'Clue 1: It has a coarse green fibrous texture and smells like fresh-cut summer grass.',
          'Clue 2: It provides indigestible fiber that promotes healthy peristalsis in cecum fermentation.',
          'Clue 3: It should make up 80% to 90% of a rabbit’s daily volume diet.'
        ],
        prompt: 'What essential feed item is in this supply crate?',
        options: [
          { text: 'Timothy / Orchard Grass Hay', isCorrect: true, feedback: 'You deduced correctly! Long-stem grass hay is the cornerstone of rabbit digestive welfare.' },
          { text: 'Sunflower seed treats', isCorrect: false, feedback: 'Seeds are high in fat and can cause enteritis; not the primary forage.' },
          { text: 'Mineral salt lick', isCorrect: false, feedback: 'Salt licks are not required for rabbits fed commercial rations.' }
        ]
      },
      {
        id: 'rb_node_7',
        title: 'County Fair Practice Gate',
        region: 'reg_county',
        mile: 65,
        type: 'ethics_crossroads',
        narrative: 'You reach the County Fair Practice grounds. A stressed exhibitor offers you black hair dye to cover up a stray white spot on your black rabbit.',
        prompt: 'How do you respond according to the 4-H character pledge?',
        options: [
          { text: 'Politely decline. State that altering an animal’s coat with dyes is unethical tampering and violates fair rules.', isCorrect: true, effect: { bond: +30, feedback: 'Integrity Champion! Winning with honesty embodies Head, Heart, Hands, and Health.' } },
          { text: 'Use the dye quickly so no one sees', isCorrect: false, effect: { bond: -30, condition: -10, feedback: 'Tampering is fraudulent and results in disqualification.' } },
          { text: 'Tell them to dye their own rabbit instead', isCorrect: false, effect: { bond: -10, feedback: 'Leaders educate politely and model fair play.' } }
        ]
      },
      {
        id: 'rb_node_8',
        title: 'Judge Oral Question Drill',
        region: 'reg_county',
        mile: 78,
        type: 'oral_prompt',
        narrative: 'The practice judge steps up to your table and smiles: "Exhibitor, how many toenails does your rabbit have on its rear feet?"',
        prompt: 'Deliver your clear, professional showmanship response:',
        expectedAnswer: 'Judge, rabbits have 4 toenails on each hind foot, making 8 hind toenails in total.',
        rubric: ['Accurate number (4 each hind)', 'Clear respectful address ("Judge")', 'Confidence and posture']
      },
      {
        id: 'rb_node_9',
        title: 'Trail Bond Trial',
        region: 'reg_county',
        mile: 84,
        type: 'bond_trial',
        narrative: 'A sudden storm rumbles past the practice arena. Barnaby senses the thunder and looks to you for reassurance.',
        prompt: 'Choose the calming handling response to protect your companion’s welfare:',
        options: [
          { text: 'Place gentle hands over his eyes/shoulders, speak in soft calm tones, and shield the carrier from loud drafts', isCorrect: true, effect: { bond: +40, condition: +15, feedback: 'Your bond deepens! Gentle touch and calm demeanor comfort prey animals.' } },
          { text: 'Shake the carrier to make him brave', isCorrect: false, effect: { bond: -20, condition: -15, feedback: 'Shaking induces panic and fractures trust.' } }
        ]
      },
      {
        id: 'rb_node_10',
        title: 'State Convention Fair Day Sim Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'Welcome to the Grand State Convention Fair Day Simulation! Test all your skills across Grooming, Table Presentation, and Judge Defense.',
        stations: [
          { name: 'Station 1: Health Inspection Check', question: 'What is malocclusion and why is it a show disqualification?', correctOption: 'Top and bottom incisors fail to meet properly and cannot wear down naturally' },
          { name: 'Station 2: Breed Standard Quiz', question: 'In which ear is the exhibitor’s identification tattoo placed?', correctOption: 'The left ear only' },
          { name: 'Station 3: Sportsmanship Closing', question: 'What do you do immediately upon completion of your judging class?', correctOption: 'Thank the judge with a polite smile, praise your rabbit gently, and congratulate fellow exhibitors' }
        ]
      }
    ]
  },

  // ==========================================
  // PET SPECIES TRAILS
  // ==========================================
  {
    id: 'pet_dogs_trail',
    speciesId: 'pet_dogs',
    type: 'pet',
    name: 'Paws & Trails Canine Adventure',
    subtitle: 'From Living Room Den to Community Good Citizen Hero',
    companion: {
      name: 'Bella the Golden Companion',
      species: 'Dog',
      breed: 'Golden Retriever Mix',
      icon: 'Heart',
      avatarEmoji: '🐕',
      lore: 'An eager, tail-wagging four-legged friend ready for clicker training, trail manners, and Canine Good Citizen glory.'
    },
    scenery: 'autumn woodland parks, suburban neighborhood sidewalks, and community agility greens',
    regions: [
      { id: 'reg_home', name: 'Living Room Den', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Neighborhood Bark Park Trail', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Canine Good Citizen Outpost', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'Community Therapy & Rally Green', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'pd_node_1',
        title: 'Trail Day Pack & Safe Treats',
        region: 'reg_home',
        mile: 5,
        type: 'supply_decision',
        narrative: 'You and Bella are getting ready for your outdoor walk. What supplies go into your doggy adventure pack?',
        prompt: 'Select the safest, healthiest snack and hydration pack for Bella:',
        options: [
          { text: 'Collapsible silicone water bowl, fresh water, and high-value single-ingredient chicken training treats', isCorrect: true, effect: { supplies: { water: +20, feed: +15 }, condition: +10, bond: +15, feedback: 'Great preparation! Clean hydration and safe protein treats keep Bella motivated.' } },
          { text: 'A cluster of seedless grapes and milk chocolate drops', isCorrect: false, effect: { condition: -30, bond: -10, feedback: 'DANGER! Grapes cause acute kidney failure in dogs, and chocolate contains toxic theobromine!' } },
          { text: 'Only a leash, no water needed for dogs', isCorrect: false, effect: { condition: -15, feedback: 'Dogs lose moisture rapidly through panting; water is always required.' } }
        ]
      },
      {
        id: 'pd_node_2',
        title: 'Reading Canine Body Language',
        region: 'reg_home',
        mile: 15,
        type: 'catch_classify',
        narrative: 'Bella encounters a friendly stranger. You observe her posture closely.',
        prompt: 'Identify the body language: Bella turns her head away, licks her lips, and shows the white crescent of her eyes ("whale eye"). What does this mean?',
        options: [
          { text: 'She is feeling mild stress or uncertainty; give her space and do not force an interaction', isCorrect: true, feedback: 'Excellent reading! Whale eye and lip licking are displacement/stress signals.' }
        ]
      },
      {
        id: 'pd_node_3',
        title: 'Encounter with Hot Pavement',
        region: 'reg_home',
        mile: 24,
        type: 'care_choices',
        narrative: 'On a sunny afternoon walk, you approach black asphalt. How do you test if the pavement is safe for dog paws?',
        prompt: 'Select the 7-second safety test:',
        options: [
          { text: 'Place the back of your bare hand firmly against the asphalt for 7 seconds; if it is too hot for your hand, it will burn paw pads!', isCorrect: true, effect: { condition: +20, bond: +20, feedback: 'Paw Protection Master! If asphalt is too hot for your skin, it will blister canine pads.' } },
          { text: 'Run across it as fast as possible', isCorrect: false, effect: { condition: -20, feedback: 'Running on burning asphalt can cause severe paw burns and blisters.' } }
        ]
      },
      {
        id: 'pd_node_4',
        title: 'Core Vaccination Checkpoint',
        region: 'reg_camp',
        mile: 38,
        type: 'trail_quiz',
        narrative: 'The park ranger checks entry permits at the community bark trail entrance.',
        prompt: 'Which vaccine is required by law in almost all states to protect pets and humans from a fatal viral zoonosis?',
        options: [
          { text: 'Rabies Vaccine', isCorrect: true, feedback: 'Correct! Rabies vaccination is mandatory by law to safeguard public and animal health.' },
          { text: 'Baking soda bath', isCorrect: false, feedback: 'Baths do not provide immunization.' },
          { text: 'Flea collar only', isCorrect: false, feedback: 'Flea collars do not protect against rabies virus.' }
        ]
      },
      {
        id: 'pd_node_5',
        title: 'Positive Reinforcement Marker Timing',
        region: 'reg_camp',
        mile: 50,
        type: 'showmanship_sequence',
        narrative: 'You are teaching Bella a reliable "Sit-Stay" on a loose leash.',
        prompt: 'Put the 4 steps of clicker/marker training in order:',
        sequenceItems: [
          { step: 1, label: 'Cue or wait for the desirable behavior (Bella’s hips touch the grass)' },
          { step: 2, label: 'Mark the exact instant with a clear marker word ("YES!") or click' },
          { step: 3, label: 'Deliver a tasty reward treat within 1-2 seconds of the marker' },
          { step: 4, label: 'Release with enthusiastic verbal praise ("Free!")' }
        ]
      },
      {
        id: 'pd_node_6',
        title: 'Mystery Snack Caper',
        region: 'reg_camp',
        mile: 54,
        type: 'mystery_stall',
        narrative: 'Bella sniffs near a picnic bench. You spot a dropped ingredient.',
        clues: [
          'Clue 1: It is a common sugar alcohol artificial sweetener extracted from birch wood.',
          'Clue 2: It is frequently added to sugar-free chewing gum, candies, and some specialty peanut butters.',
          'Clue 3: In dogs, even microscopic amounts trigger rapid insulin surges leading to deadly hypoglycemia and liver failure.'
        ],
        prompt: 'What dangerous artificial ingredient did you just pull Bella away from?',
        options: [
          { text: 'Xylitol (Birch Bark Sweetener)', isCorrect: true, feedback: 'Life-saving deduction! Xylitol is extremely toxic to dogs even in minute amounts.' },
          { text: 'Table Salt', isCorrect: false, feedback: 'Salt is seasoning; xylitol is the sweetener causing hypoglycemia.' },
          { text: 'Olive oil', isCorrect: false, feedback: 'Olive oil is a cooking fat, not a birch-derived artificial sweetener.' }
        ]
      },
      {
        id: 'pd_node_7',
        title: 'Approaching Strange Dogs Safely',
        region: 'reg_county',
        mile: 68,
        type: 'ethics_crossroads',
        narrative: 'An unfamiliar dog with a yellow ribbon tied to its leash approaches down the narrow trail path.',
        prompt: 'What does a yellow ribbon indicate and what is the responsible action?',
        options: [
          { text: 'A yellow ribbon signals the dog needs space (nervous/recovering); gently step Bella aside to give plenty of clearance without greeting', isCorrect: true, effect: { bond: +30, feedback: 'Exemplary trail stewardship! The Yellow Dog Project signifies dogs needing distance.' } },
          { text: 'Run up and let Bella jump on the dog to say hello', isCorrect: false, effect: { condition: -20, bond: -15, feedback: 'Never rush an unfamiliar or sensitive dog!' } }
        ]
      },
      {
        id: 'pd_node_8',
        title: 'Canine Good Citizen Oral Practice',
        region: 'reg_county',
        mile: 79,
        type: 'oral_prompt',
        narrative: 'The evaluator asks you: "How many test exercises make up the official AKC Canine Good Citizen (CGC) assessment?"',
        prompt: 'State your knowledge response clearly:',
        expectedAnswer: 'Evaluator, the Canine Good Citizen test consists of 10 polite obedience exercises.',
        rubric: ['Accurate number (10 items)', 'Polite delivery', 'Understanding manners test']
      },
      {
        id: 'pd_node_9',
        title: 'Trail Bond Trial: Supervised Separation',
        region: 'reg_county',
        mile: 84,
        type: 'bond_trial',
        narrative: 'During a practice rally drill, you must step around a privacy screen for 3 minutes while a trusted leader holds Bella.',
        prompt: 'How have you prepared Bella so she stays calm without anxious whining or barking?',
        options: [
          { text: 'Through progressive positive conditioning, making brief separations rewarding and building emotional security', isCorrect: true, effect: { bond: +40, condition: +15, feedback: 'Superb bond! Bella trusts you will return, remaining calm and relaxed.' } },
          { text: 'By yelling at her to be quiet', isCorrect: false, effect: { bond: -30, feedback: 'Yelling increases anxiety and creates separation distress.' } }
        ]
      },
      {
        id: 'pd_node_10',
        title: 'Canine Good Citizen Practice Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Grand Community Pet Showcase! Demonstrate loose-leash walking, accepting a friendly stranger, and grooming manners.',
        stations: [
          { name: 'Station 1: Loose Leash Heeling', question: 'When your dog starts pulling forward on the lead, what is the best positive technique?', correctOption: 'Stop walking like a tree until the leash slackens, then reward with forward motion' },
          { name: 'Station 2: Safe Greeting Protocol', question: 'What should someone always do before petting an unfamiliar companion pet?', correctOption: 'Ask the handler politely for permission and let the dog choose to step forward' },
          { name: 'Station 3: Responsible Guardian Oath', question: 'What is the primary responsibility of a pet guardian for the lifetime of their companion?', correctOption: 'Provide nutritious food, clean water, positive enrichment, veterinary wellness, and lifelong compassionate care' }
        ]
      }
    ]
  },

  // ==========================================
  // ADDITIONAL TRAILS (POULTRY, GOATS, EQUINE, PET CATS)
  // ==========================================
  {
    id: 'horses_trail',
    speciesId: 'horses',
    type: 'livestock',
    name: 'High Ridge Horsemanship Trail',
    subtitle: 'From Paddock Pasture to State Arena Precision',
    companion: {
      name: 'Dakota the Quarter Horse',
      species: 'Horse',
      breed: 'American Quarter Horse',
      icon: 'Zap',
      avatarEmoji: '🐴',
      lore: 'A calm, sure-footed sorrel gelding with steady ground manners and an athletic gait.'
    },
    scenery: 'pine-scented mountain ridges, wooden post fences, and arena sand footing',
    regions: [
      { id: 'reg_home', name: 'Pasture Homestead', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Alpine Tack Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Valley Fairgrounds', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'State Equestrian Colosseum', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'hr_node_1',
        title: 'Morning Tack & Grooming Inspection',
        region: 'reg_home',
        mile: 10,
        type: 'supply_decision',
        narrative: 'Before packing Dakota onto the trail, you inspect grooming tools and safety gear.',
        prompt: 'Select your mandatory rider safety item before mounting or schooling Dakota:',
        options: [
          { text: 'An ASTM/SEI certified equestrian riding helmet properly buckled and heeled riding boots', isCorrect: true, effect: { supplies: { transport: +25 }, condition: +15, bond: +15, feedback: 'Safety First! Certified helmets protect lives against head trauma.' } },
          { text: 'A baseball cap and flip-flops', isCorrect: false, effect: { condition: -20, feedback: 'Dangerous! Never ride without certified headgear and heeled boots.' } }
        ]
      },
      {
        id: 'hr_node_2',
        title: 'Quarter System Mechanics',
        region: 'reg_camp',
        mile: 45,
        type: 'trail_quiz',
        narrative: 'You enter the schooling ring to practice Western Showmanship at Halter.',
        prompt: 'According to the Quarter System, if the judge steps into Quadrant I (the horse\'s right front), where should you stand?',
        options: [
          { text: 'Quadrant IV (the horse\'s left front), crossing over so the judge has an unobstructed sightline', isCorrect: true, feedback: 'Exact ring mechanics! The handler is never in the same quadrant as the judge.' },
          { text: 'Quadrant I right next to the judge', isCorrect: false, feedback: 'Never crowd the judge’s visual angle.' }
        ]
      },
      {
        id: 'hr_node_3',
        title: 'Colic Observation Challenge',
        region: 'reg_county',
        mile: 70,
        type: 'care_choices',
        narrative: 'At the evening stall check, Dakota is repeatedly looking back at his flank, pawing the bedding, and refuses to eat hay.',
        prompt: 'What are the correct educational care steps for suspected colic?',
        options: [
          { text: 'Immediately alert an adult and call a licensed veterinarian. Note vitals, check for gut sounds, and keep him walking gently if safe without forcing', isCorrect: true, effect: { condition: +25, bond: +30, feedback: 'Life-saving action! Colic is a medical emergency; rapid veterinary contact is critical.' } },
          { text: 'Administer random chemical pain pills without veterinary advice', isCorrect: false, effect: { condition: -30, feedback: 'NEVER give unprescribed medications. Immediate veterinary guidance is essential.' } }
        ]
      },
      {
        id: 'hr_node_4',
        title: 'High Ridge Fair Day Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The State Equestrian Colosseum awaits! Demonstrate precision pivots on the haunches, crisp square halts, and impeccable sportsmanship.',
        stations: [
          { name: 'Station 1: Pivot on Haunches', question: 'Which leg acts as the stationary pivot point during a right-hand pivot in showmanship?', correctOption: 'The right hind leg' },
          { name: 'Station 2: Equine Digestion', question: 'In what anatomical chamber does microbial fiber fermentation take place in horses?', correctOption: 'The cecum and large colon (hindgut)' },
          { name: 'Station 3: Sportsmanship Courtesy', question: 'What does a red ribbon in a horse\'s tail signify in a warm-up ring?', correctOption: 'The horse is known to kick; keep a wide safety buffer distance' }
        ]
      }
    ]
  },

  {
    id: 'pet_cats_trail',
    speciesId: 'pet_cats',
    type: 'pet',
    name: 'Whiskers & Prowl Feline Trail',
    subtitle: 'From Scratching Post Haven to Feline Wellness Champion',
    companion: {
      name: 'Oliver the Tabby Explorer',
      species: 'Cat',
      breed: 'Domestic Shorthair',
      icon: 'Heart',
      avatarEmoji: '🐱',
      lore: 'A curious, observant feline with sharp instincts, purring contentment, and a love for high vertical perches.'
    },
    scenery: 'sunlit windowsills, cozy carpeted cat towers, and botanical patio gardens',
    regions: [
      { id: 'reg_home', name: 'Sunbeam Haven', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Indoor Jungle Outpost', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Catio Courtyard', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'Feline Fellowship Gala', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'pc_node_1',
        title: 'Nutritional Truth: Obligate Carnivores',
        region: 'reg_home',
        mile: 15,
        type: 'trail_quiz',
        narrative: 'You are preparing Oliver’s dinner bowl.',
        prompt: 'Why can domestic cats NEVER be fed a plant-only vegetarian or vegan diet?',
        options: [
          { text: 'Cats are obligate carnivores who require preformed animal-source nutrients like taurine and arachidonic acid to prevent heart failure and blindness', isCorrect: true, feedback: 'Correct! Taurine deficiency causes fatal dilated cardiomyopathy and retinal degeneration.' },
          { text: 'Because cats don’t like the color green', isCorrect: false, feedback: 'It is a life-critical physiological requirement for amino sulfonic acids.' }
        ]
      },
      {
        id: 'pc_node_2',
        title: 'Lilies & Toxic Plants Challenge',
        region: 'reg_camp',
        mile: 40,
        type: 'care_choices',
        narrative: 'A visitor brings a floral bouquet containing True Lilies (Lilium species) into your living room.',
        prompt: 'What must you do immediately to protect Oliver?',
        options: [
          { text: 'Immediately remove all lilies from the house. Even minor pollen ingestion or drinking vase water triggers acute, fatal renal failure in felines!', isCorrect: true, effect: { condition: +30, bond: +25, feedback: 'Life-saving awareness! All true lilies and daylilies are deadly to cats.' } },
          { text: 'Put the flowers on a high counter where you hope the cat won’t jump', isCorrect: false, effect: { condition: -30, feedback: 'Cats can jump anywhere, and falling pollen on fur will be groomed off and ingested!' } }
        ]
      },
      {
        id: 'pc_node_3',
        title: 'Feline Wellness Gala Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Feline Fellowship Gala! Prove your mastery of cat behavior, Fear-Free towel wraps, and environmental enrichment.',
        stations: [
          { name: 'Station 1: Feline Stress Reduction', question: 'What veterinary handling technique gently cocoons a cat to safely protect paws and soothe fear?', correctOption: 'The "towel burrito" wrap' },
          { name: 'Station 2: Litter Box Rule', question: 'What is the golden veterinary rule for the number of litter boxes in a multi-cat household?', correctOption: 'One box per cat, plus one extra (N + 1)' }
        ]
      }
    ]
  }
];

export function getTrailPackById(packId) {
  return TRAIL_PACKS.find(p => p.id === packId || p.speciesId === packId) || TRAIL_PACKS[0];
}

export function getAvailableTrailPacks(filterType = 'all') {
  if (filterType === 'all') return TRAIL_PACKS;
  return TRAIL_PACKS.filter(p => p.type === filterType);
}
