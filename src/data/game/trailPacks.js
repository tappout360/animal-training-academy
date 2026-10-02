// WarrenWise Animal Academy - Herd Trail Quest
// Master Multi-Species Trail Packs (12 Overworld Trails: 4-H Livestock Projects & Companion Pets)
// Strict Non-Medical, Youth-Safe Husbandry & Welfare Boundaries

export const TRAIL_PACKS = [
  // ==========================================
  // 1. RABBITS TRAIL (4-H Small Animal Project)
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
        prompt: 'Identify the breed: "A small compact rabbit under 4 lbs with ears lopped flat against the head and heavy bone."',
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
        narrative: 'The midday sun rises over 82°F. You notice Barnaby breathing rapidly and stretching out along the carrier.',
        prompt: 'What is the most welfare-conscious action to keep your rabbit comfortable in the heat?',
        options: [
          { text: 'Move the carrier into deep tree shade, turn on a battery fan, and place a frozen water bottle wrapped in a towel next to him', isCorrect: true, effect: { condition: +20, bond: +25, feedback: 'Outstanding husbandry! Rabbits cannot sweat; cool airflow and frozen bottles prevent heat stress.' } },
          { text: 'Submerge the rabbit into ice-cold water', isCorrect: false, effect: { condition: -25, bond: -20, feedback: 'Shock hazard! Never dunk rabbits into ice baths; cool gradually with shade, fans, and frozen bottles.' } },
          { text: 'Ignore the rapid breathing; rabbits naturally like hot weather', isCorrect: false, effect: { condition: -25, bond: -15, feedback: 'Rabbits are prone to fatal heat stress over 85°F. Immediate cooling is essential!' } }
        ]
      },
      {
        id: 'rb_node_4',
        title: 'Biosecurity Outpost',
        region: 'reg_camp',
        mile: 35,
        type: 'trail_quiz',
        narrative: 'You arrive at the Timberline Training Camp gate where a biosecurity technician inspects incoming animals.',
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
        narrative: 'At the training camp pavilion, the judge asks you to demonstrate the official ARBA table check sequence.',
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
        rubric: ['Accurate number (4 each hind)', 'Clear respectful address ("Judge")', 'Confidence and composure']
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
  // 2. CAVIES TRAIL (Guinea Pig Project)
  // ==========================================
  {
    id: 'cavies_trail',
    speciesId: 'cavies',
    type: 'livestock',
    name: 'Cavy Village Whistle Trail',
    subtitle: 'From Cozy Hutch Haven to Cavy Grand Pavilion',
    companion: {
      name: 'Peanut the American Cavy',
      species: 'Cavy',
      breed: 'American Cavy',
      icon: 'Heart',
      avatarEmoji: '🐹',
      lore: 'A cheerful smooth-coated cavy whose happy wheeks and popcorn hops brighten every trail rest stop.'
    },
    scenery: 'lush green clover patches, cedar rest benches, and cheerful exhibition tents',
    regions: [
      { id: 'reg_home', name: 'Wheek Hollow', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Cavy Care Outpost', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Showmanship Bench', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'Grand Cavy Pavilion', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'cv_node_1',
        title: 'Mandatory Vitamin C Check',
        region: 'reg_home',
        mile: 8,
        type: 'supply_decision',
        narrative: 'Cavies lack the enzyme L-gulonolactone oxidase and cannot synthesize Vitamin C.',
        prompt: 'Select the essential daily dietary source of Vitamin C for Peanut:',
        options: [
          { text: 'Fresh stabilized cavy pellets supplemented with fresh bell pepper slices and dark leafy greens', isCorrect: true, effect: { supplies: { feed: +20 }, condition: +15, bond: +15, feedback: 'Spot on! Cavies require 10-30 mg of daily Vitamin C to prevent scurvy.' } },
          { text: 'Rabbit pellets containing no added Vitamin C', isCorrect: false, effect: { condition: -20, feedback: 'Rabbit feed lacks adequate stabilized Vitamin C and can lead to cavy scurvy!' } }
        ]
      },
      {
        id: 'cv_node_2',
        title: 'Two-Handed Safe Handling',
        region: 'reg_camp',
        mile: 32,
        type: 'showmanship_sequence',
        narrative: 'Practice proper two-handed cavy lifting technique before approaching the judging table.',
        prompt: 'Order the safe cavy handling steps:',
        sequenceItems: [
          { step: 1, label: 'Slide one hand securely under the cavy\'s chest behind the front legs' },
          { step: 2, label: 'Cup the other hand completely supporting the hindquarters and rump' },
          { step: 3, label: 'Lift gently and hold the cavy close to your body to prevent jumping' },
          { step: 4, label: 'Place squarely on show carpet supporting weight until fully settled' }
        ]
      },
      {
        id: 'cv_node_3',
        title: 'Observation: Lethargic Cavy',
        region: 'reg_county',
        mile: 68,
        type: 'care_choices',
        narrative: 'Peanut is sitting hunched in the bedding, reluctant to move, and has crusty eye discharge.',
        prompt: 'What is the correct welfare protocol for an ill cavy?',
        options: [
          { text: 'Keep Peanut warm and quiet, isolate from other cavies, note vitals, and immediately alert an adult to contact a veterinarian', isCorrect: true, effect: { condition: +20, bond: +25, feedback: 'Exemplary care! Cavies deteriorate rapidly when ill; immediate professional veterinary escalation is essential.' } },
          { text: 'Administer random leftover pet pills from the shelf', isCorrect: false, effect: { condition: -30, feedback: 'NEVER administer unprescribed medications. Many antibiotics are toxic to cavy digestive flora!' } }
        ]
      },
      {
        id: 'cv_node_4',
        title: 'Grand Cavy Pavilion Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Grand Cavy Showcase! Demonstrate conformation checking, ear cleanliness, and toenail grooming.',
        stations: [
          { name: 'Station 1: Toenail Inspection', question: 'How many toes does a cavy have on its front and hind feet?', correctOption: '4 toes on each front foot, 3 toes on each hind foot (14 total)' },
          { name: 'Station 2: Bedding Safety', question: 'Why should cedar shavings NEVER be used as bedding for cavies?', correctOption: 'Cedar releases aromatic phenols and oils that irritate delicate respiratory tracts' }
        ]
      }
    ]
  },

  // ==========================================
  // 3. POULTRY TRAIL (Chicken & Waterfowl)
  // ==========================================
  {
    id: 'poultry_trail',
    speciesId: 'poultry',
    type: 'livestock',
    name: 'Sunrise Poultry Yard Trail',
    subtitle: 'From Brooder Coop to National Poultry Showmanship',
    companion: {
      name: 'Clucky the Plymouth Rock',
      species: 'Poultry',
      breed: 'Barred Plymouth Rock',
      icon: 'Sun',
      avatarEmoji: '🐔',
      lore: 'An alert, beautifully barred dual-purpose hen with a bright red single comb and gentle showmanship temperament.'
    },
    scenery: 'sunlit coop yards, clean pine shaving runs, and show cages with red rosettes',
    regions: [
      { id: 'reg_home', name: 'Roost Haven', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Biosecurity Flight Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Fair Coop Pavilion', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'National Poultry Arena', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'pl_node_1',
        title: 'Avian Biosecurity Perimeter',
        region: 'reg_home',
        mile: 10,
        type: 'trail_quiz',
        narrative: 'Wild waterfowl are migrating near your coop run. What is the most important biosecurity defense against Highly Pathogenic Avian Influenza (HPAI)?',
        prompt: 'Select the gold-standard avian flock biosecurity rule:',
        options: [
          { text: 'Keep poultry fully under roof/netting to prevent direct or fecal contact with wild birds, and sanitize footwear before entering', isCorrect: true, feedback: 'Critical biosecurity! Wild waterfowl are major carriers of HPAI; strict separation protects the flock.' }
        ]
      },
      {
        id: 'pl_node_2',
        title: 'Poultry Examination Sequence',
        region: 'reg_camp',
        mile: 42,
        type: 'showmanship_sequence',
        narrative: 'Demonstrate the 4-H poultry showmanship examination sequence for the judge.',
        prompt: 'Order the bird examination routine:',
        sequenceItems: [
          { step: 1, label: 'Remove bird from cage head-first, resting keel bone along forearm with legs secured' },
          { step: 2, label: 'Inspect head: examine comb, wattles, eyes, and beak for color and clarity' },
          { step: 3, label: 'Fan open each wing: count primary flight feathers, axial feather, and secondaries' },
          { step: 4, label: 'Check vent: inspect for clean feathering, egg capacity width, and absence of external parasites' }
        ]
      },
      {
        id: 'pl_node_3',
        title: 'Observation: Gasping Bird',
        region: 'reg_county',
        mile: 68,
        type: 'care_choices',
        narrative: 'You notice a pullet coughing, stretching its neck to breathe, and sitting separated from the flock.',
        prompt: 'What is the immediate responsible step?',
        options: [
          { text: 'Immediately isolate the bird in a clean, quiet quarantine pen, wash and sanitize hands/boots, and inform parent/extension veterinarian', isCorrect: true, effect: { condition: +20, bond: +20, feedback: 'Correct action! Respiratory symptoms in poultry require swift isolation and diagnostic advice.' } },
          { text: 'Leave the bird in the main coop hoping it gets better tomorrow', isCorrect: false, effect: { condition: -30, feedback: 'Respiratory pathogens spread rapidly through shared waterers and air!' } }
        ]
      },
      {
        id: 'pl_node_4',
        title: 'National Poultry Arena Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The National Poultry Showmanship Finale! Demonstrate cage entry, pose, and judge oral defense.',
        stations: [
          { name: 'Station 1: Anatomy of Egg Laying', question: 'How many hours does it take for a hen to form and lay an egg?', correctOption: 'Approximately 24 to 26 hours' },
          { name: 'Station 2: Parasite Prevention', question: 'Where do poultry lice and mites commonly hide on a bird’s body?', correctOption: 'Around the warm base of feathers near the vent and beneath the wings' }
        ]
      }
    ]
  },

  // ==========================================
  // 4. GOATS TRAIL (Dairy & Meat Goats)
  // ==========================================
  {
    id: 'goats_trail',
    speciesId: 'goats',
    type: 'livestock',
    name: 'Alpine & Boer Goat Ridge Trail',
    subtitle: 'From Rocky Ridge Homestead to State Fair Ring of Champions',
    companion: {
      name: 'Pippin the Boer Kid',
      species: 'Goat',
      breed: 'Boer Goat',
      icon: 'Activity',
      avatarEmoji: '🐐',
      lore: 'A lively, muscular Boer kid with floppy ears, a white blaze, and steady showmanship collar manners.'
    },
    scenery: 'rugged rocky hills, cedar browse fences, and sunny open ring arenas',
    regions: [
      { id: 'reg_home', name: 'Rocky Paddock', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Ruminant Ridge Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Livestock Ring', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'State Ring of Champions', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'gt_node_1',
        title: 'Ruminant Forage Essentials',
        region: 'reg_home',
        mile: 12,
        type: 'supply_decision',
        narrative: 'Goats are natural browsers, not grazers, and possess a 4-compartment ruminant stomach.',
        prompt: 'Select the foundation feed supply for Pippin on the trail:',
        options: [
          { text: 'High-quality grass/alfalfa forage mix and clean, fresh water provided at all times', isCorrect: true, effect: { supplies: { feed: +20, water: +20 }, condition: +15, feedback: 'Proper rumen health! Fiber stimulates cud chewing and rumen microbial fermentation.' } },
          { text: 'Buckets of sweet feed grain with zero long-stem forage', isCorrect: false, effect: { condition: -25, feedback: 'Grain overload triggers rumen acidosis, enterotoxemia, and bloat!' } }
        ]
      },
      {
        id: 'gt_node_2',
        title: 'Showmanship Collar Control',
        region: 'reg_camp',
        mile: 45,
        type: 'showmanship_sequence',
        narrative: 'Practice proper collar positioning and exhibitor posture for goat showmanship.',
        prompt: 'Order the collar control sequence:',
        sequenceItems: [
          { step: 1, label: 'Hold the show chain/collar with your right hand under the chin with palm facing up' },
          { step: 2, label: 'Keep head held high and level, maintaining eye contact with the judge' },
          { step: 3, label: 'Lead forward smoothly, staying between the goat and the outside rail' },
          { step: 4, label: 'Set front feet squarely by lifting slightly, then place rear legs square and wide' }
        ]
      },
      {
        id: 'gt_node_3',
        title: 'Observation: Bloat Signs',
        region: 'reg_county',
        mile: 72,
        type: 'care_choices',
        narrative: 'Pippin’s left flank is bulging tightly like a drum, and he is groaning in discomfort after getting into damp clover.',
        prompt: 'What are the correct educational steps for suspected bloat?',
        options: [
          { text: 'Immediately alert an adult leader and contact a veterinarian. Remove all feed, keep the animal gently standing/walking, and do not force fluids', isCorrect: true, effect: { condition: +25, bond: +25, feedback: 'Life-saving recognition! Rumen bloat is a severe emergency requiring immediate veterinary guidance.' } },
          { text: 'Give household chemical cleaner down the throat', isCorrect: false, effect: { condition: -40, feedback: 'NEVER drench animals with household cleaners or unprescribed chemicals.' } }
        ]
      },
      {
        id: 'gt_node_4',
        title: 'State Ring of Champions Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Grand Goat Showmanship Finale! Show off setting up legs, teeth age check, and courtesy.',
        stations: [
          { name: 'Station 1: 4 Stomach Compartments', question: 'What are the four compartments of the ruminant stomach in anatomical order?', correctOption: 'Rumen, Reticulum, Omasum, Abomasum' },
          { name: 'Station 2: Teeth Aging', question: 'How can you tell a goat is approximately one year old by inspecting its incisors?', correctOption: 'The two central milk teeth are replaced by two wide permanent incisors' }
        ]
      }
    ]
  },

  // ==========================================
  // 5. SHEEP TRAIL (Market & Breeding Sheep)
  // ==========================================
  {
    id: 'sheep_trail',
    speciesId: 'sheep',
    type: 'livestock',
    name: 'Highland Fleece Sheep Pasture Trail',
    subtitle: 'From Lambing Shed to State Fair Grand Drive',
    companion: {
      name: 'Blossom the Hampshire Lamb',
      species: 'Sheep',
      breed: 'Hampshire Down',
      icon: 'Shield',
      avatarEmoji: '🐑',
      lore: 'A bold, black-faced ewe lamb with tight fleece, strong bone, and an alert show stance.'
    },
    scenery: 'rolling highland pastures, wooden hurdles, and manicured green show rings',
    regions: [
      { id: 'reg_home', name: 'Pasture Fold', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Fleece Fitting Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Wool & Meat Arena', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'State Fair Grand Drive', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'sh_node_1',
        title: 'Strict Copper Toxicity Rule',
        region: 'reg_home',
        mile: 14,
        type: 'trail_quiz',
        narrative: 'You are preparing feed rations for your sheep project.',
        prompt: 'Why must sheep NEVER be fed cattle, goat, or horse feed formulations?',
        options: [
          { text: 'Sheep accumulate dietary copper in liver cells and are uniquely vulnerable to fatal copper toxicity from non-sheep feeds', isCorrect: true, feedback: 'Life-critical rule! Sheep require strictly copper-controlled rations formulated specifically for ovines.' }
        ]
      },
      {
        id: 'sh_node_2',
        title: 'Showmanship Bracing Technique',
        region: 'reg_camp',
        mile: 48,
        type: 'showmanship_sequence',
        narrative: 'Learn the proper hand placement and stance when setting up and bracing a market lamb.',
        prompt: 'Order the sheep showmanship brace sequence:',
        sequenceItems: [
          { step: 1, label: 'Control the head by cupping hands securely under jaw and behind poll without choking' },
          { step: 2, label: 'Place front feet square under shoulders and rear legs square, wide, and slightly back' },
          { step: 3, label: 'Apply gentle, controlled backward pressure against the chest with your leg to encourage muscling brace' },
          { step: 4, label: 'Maintain eye contact with the judge while keeping head steady and level' }
        ]
      },
      {
        id: 'sh_node_3',
        title: 'Observation: Soremouth Inspection',
        region: 'reg_county',
        mile: 70,
        type: 'care_choices',
        narrative: 'At the health check, a lamb exhibits scabby blisters around its lips and muzzle (Orf / Soremouth).',
        prompt: 'What is the biosecurity and zoonosis rule?',
        options: [
          { text: 'Wear protective gloves (Soremouth is zoonotic to humans!), isolate the lamb immediately, and do not enter the show ring', isCorrect: true, effect: { condition: +20, bond: +20, feedback: 'Safety Champion! Orf is contagious to humans and other sheep; gloves and isolation prevent transmission.' } },
          { text: 'Peel off the scabs with bare hands', isCorrect: false, effect: { condition: -30, feedback: 'DANGER! Soremouth causes painful skin lesions in humans if touched with bare hands.' } }
        ]
      },
      {
        id: 'sh_node_4',
        title: 'State Fair Grand Drive Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Grand Sheep Drive! Showcase fleece carding, bracing consistency, and courteous ring presence.',
        stations: [
          { name: 'Station 1: Scrapie Identification', question: 'What official USDA identification is mandatory on exhibition sheep for disease surveillance?', correctOption: 'An official USDA Scrapie premise identification ear tag' },
          { name: 'Station 2: Wool Fiber Crimp', question: 'What does the term "crimp" refer to in wool evaluation?', correctOption: 'The natural waviness and elasticity of individual wool fibers' }
        ]
      }
    ]
  },

  // ==========================================
  // 6. SWINE TRAIL (Market & Breeding Swine)
  // ==========================================
  {
    id: 'swine_trail',
    speciesId: 'swine',
    type: 'livestock',
    name: 'Blue Ribbon Swine Station Trail',
    subtitle: 'From Farrowing Barn to Supreme Swine Arena',
    companion: {
      name: 'Hamilton the Yorkshire Barrow',
      species: 'Swine',
      breed: 'Yorkshire',
      icon: 'Award',
      avatarEmoji: '🐷',
      lore: 'A long-bodied, erect-eared white barrow with an athletic stride and sharp responsiveness to show whip cues.'
    },
    scenery: 'clean oak-fenced pens, pine shavings, and spacious sawdust show arenas',
    regions: [
      { id: 'reg_home', name: 'Pen & Paddock', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Driving Skills Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Swine Barn', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'Supreme Swine Arena', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'sw_node_1',
        title: 'Cooling & Thermoregulation',
        region: 'reg_home',
        mile: 10,
        type: 'supply_decision',
        narrative: 'Pigs lack functional sweat glands and are highly vulnerable to heat stress above 80°F.',
        prompt: 'Select the most effective cooling supply for Hamilton during transit:',
        options: [
          { text: 'Misting water sprayer, wet sand/bedding, and high-velocity ventilation fans', isCorrect: true, effect: { supplies: { water: +20, transportGear: +20 }, condition: +15, feedback: 'Proper thermoregulation! Evaporative cooling and airflow prevent fatal porcine hyperthermia.' } },
          { text: 'Dry closed metal box with no windows', isCorrect: false, effect: { condition: -30, feedback: 'Enclosed spaces without ventilation quickly turn into deadly heat traps for swine!' } }
        ]
      },
      {
        id: 'sw_node_2',
        title: 'Show Whip Driving Technique',
        region: 'reg_camp',
        mile: 44,
        type: 'showmanship_sequence',
        narrative: 'Master guiding your market hog around the arena using gentle driving pipe/whip cues.',
        prompt: 'Order the swine driving mechanics:',
        sequenceItems: [
          { step: 1, label: 'Stay 10 to 15 feet away from the hog, keeping between the hog and the judge’s sightline' },
          { step: 2, label: 'Tap gently on the side of the jowl to turn (tap left jowl to turn right)' },
          { step: 3, label: 'Drive the hog at a steady walking pace without rushing or running' },
          { step: 4, label: 'Keep the hog in the open center of the ring, avoiding corners and pen gates' }
        ]
      },
      {
        id: 'sw_node_3',
        title: 'Observation: Lethargic Stiff Hog',
        region: 'reg_county',
        mile: 74,
        type: 'care_choices',
        narrative: 'Hamilton is breathing rapidly with an open mouth, trembling, and reluctant to rise from the pen.',
        prompt: 'What is the correct welfare protocol for suspected heat distress?',
        options: [
          { text: 'Immediately wet his snout, feet, and belly with cool (not ice-cold) water, turn fans directly on him, and contact a veterinarian', isCorrect: true, effect: { condition: +25, bond: +25, feedback: 'Life-saving husbandry! Cool water on feet and jowls safely lowers core body temperature.' } },
          { text: 'Force the hog to run around the barn to work off stiffness', isCorrect: false, effect: { condition: -40, feedback: 'Fatal danger! Forcing an overheated hog to move triggers fatal cardiovascular collapse.' } }
        ]
      },
      {
        id: 'sw_node_4',
        title: 'Supreme Swine Arena Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Supreme Swine Arena! Execute ring turns, penning control, and sportsmanship.',
        stations: [
          { name: 'Station 1: Universal Ear Notching', question: 'In the universal ear notching system, which ear indicates the litter number?', correctOption: 'The right ear indicates the litter number (the left ear indicates individual pig number)' },
          { name: 'Station 2: Ideal Market Weight', question: 'What is the typical industry target market weight range for finished hogs?', correctOption: '260 to 290 pounds' }
        ]
      }
    ]
  },

  // ==========================================
  // 7. BEEF CATTLE TRAIL (Market & Breeding Beef)
  // ==========================================
  {
    id: 'beef_cattle_trail',
    speciesId: 'beef_cattle',
    type: 'livestock',
    name: 'Rolling Range Beef Cattle Trail',
    subtitle: 'From Open Pasture to National Cattle Congress',
    companion: {
      name: 'Angus the Black Steer',
      species: 'Beef Cattle',
      breed: 'Angus',
      icon: 'Zap',
      avatarEmoji: '🐂',
      lore: 'A deep-bodied, docile Black Angus steer with sound structural soundness and steady halter manners.'
    },
    scenery: 'wide prairie ranges, timber loading corrals, and sawdust cattle rings',
    regions: [
      { id: 'reg_home', name: 'Range Corral', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Show Halter Outpost', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Beef Arena', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'National Cattle Congress', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'bf_node_1',
        title: 'Halter Safety & Flight Zone',
        region: 'reg_home',
        mile: 12,
        type: 'trail_quiz',
        narrative: 'Understanding large animal flight zones is critical for youth safety around 1,200 lb steers.',
        prompt: 'Where is an animal\'s point of balance located when moving beef cattle through a handling chute?',
        options: [
          { text: 'At the animal\'s shoulder: walking behind moves them forward, walking in front turns them back', isCorrect: true, feedback: 'Core handling principle pioneered by Dr. Temple Grandin! The shoulder is the point of balance.' }
        ]
      },
      {
        id: 'bf_node_2',
        title: 'Show Stick Four-Foot Setup',
        region: 'reg_camp',
        mile: 46,
        type: 'showmanship_sequence',
        narrative: 'Master placing all four feet of your steer squarely using your show stick.',
        prompt: 'Order the cattle setup sequence:',
        sequenceItems: [
          { step: 1, label: 'Lead the steer forward into the lineup, stopping with front feet square' },
          { step: 2, label: 'Transfer the lead to your left hand and hold the show stick in your right' },
          { step: 3, label: 'Use the hook or tip of the stick on the rear hooves to position rear feet square and wide' },
          { step: 4, label: 'Calmly stroke the underline to keep the steer standing quietly while watching the judge' }
        ]
      },
      {
        id: 'bf_node_3',
        title: 'Observation: Acute Choke/Bloat',
        region: 'reg_county',
        mile: 75,
        type: 'care_choices',
        narrative: 'A steer is salivating heavily, extending its neck, and coughing after gulping unchewed apple treats.',
        prompt: 'What is the immediate educational safety action?',
        options: [
          { text: 'Alert an adult leader immediately, keep the animal calm, do not attempt home throat probing, and contact a veterinarian', isCorrect: true, effect: { condition: +25, bond: +20, feedback: 'Life-saving choice! Choke can cause airway obstruction; professional veterinary care is imperative.' } },
          { text: 'Ram a garden hose down the throat yourself', isCorrect: false, effect: { condition: -40, feedback: 'NEVER force hoses down throats! This can puncture the esophagus or lungs.' } }
        ]
      },
      {
        id: 'bf_node_4',
        title: 'National Cattle Congress Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The National Cattle Congress! Demonstrate ring spacing, eye contact, and carcass evaluation.',
        stations: [
          { name: 'Station 1: USDA Beef Quality Grades', question: 'What are the top three USDA beef quality grades for consumer marbling and palatability?', correctOption: 'Prime, Choice, Select' },
          { name: 'Station 2: Structural Soundness', question: 'Why is proper angle to the hock and pastern critical in breeding stock?', correctOption: 'It cushions impact, prevents joint arthritis, and ensures longevity across years of pasture grazing' }
        ]
      }
    ]
  },

  // ==========================================
  // 8. DAIRY CATTLE TRAIL (Dairy Project)
  // ==========================================
  {
    id: 'dairy_cattle_trail',
    speciesId: 'dairy_cattle',
    type: 'livestock',
    name: 'Meadowbrook Dairy Homestead Trail',
    subtitle: 'From Calf Hutch to World Dairy Expo Arena',
    companion: {
      name: 'Daisy the Holstein Heifer',
      species: 'Dairy Cattle',
      breed: 'Holstein Friesian',
      icon: 'Droplets',
      avatarEmoji: '🐄',
      lore: 'An elegant black-and-white heifer with dairy sharpness, spring of rib, and gentle parlor manners.'
    },
    scenery: 'clean green pastures, modern robotic milking parlors, and sawdust show rings',
    regions: [
      { id: 'reg_home', name: 'Calf Hutch Way', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Milking Parlor Outpost', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'County Dairy Arena', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'World Dairy Expo Arena', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'dc_node_1',
        title: 'Colostrum: The First Milk Rule',
        region: 'reg_home',
        mile: 10,
        type: 'trail_quiz',
        narrative: 'Calves are born without maternal antibodies in their bloodstream.',
        prompt: 'Why must newborn dairy calves receive high-quality colostrum within the first 4 hours of life?',
        options: [
          { text: 'To achieve passive transfer of immunoglobulins (IgG) before the calf\'s intestinal lining closes to macromolecule absorption', isCorrect: true, feedback: 'Fundamental dairy science! Passive transfer via colostrum is the foundation of calf immune protection.' }
        ]
      },
      {
        id: 'dc_node_2',
        title: 'Dairy Showmanship Backward Walk',
        region: 'reg_camp',
        mile: 48,
        type: 'showmanship_sequence',
        narrative: 'Unlike beef cattle, dairy cattle exhibitors lead by walking backward, facing their animal.',
        prompt: 'Order the dairy showmanship leading technique:',
        sequenceItems: [
          { step: 1, label: 'Hold lead strap in left hand 6-12 inches under chin, palm facing upward' },
          { step: 2, label: 'Walk backward smoothly, looking over your right shoulder periodically to navigate' },
          { step: 3, label: 'Keep the heifer\'s head up alertly to accentuate dairy character and neck extension' },
          { step: 4, label: 'Pose with near rear leg forward (for heifers) to show off depth of flank and udder promise' }
        ]
      },
      {
        id: 'dc_node_3',
        title: 'Observation: Mastitis Indicators',
        region: 'reg_county',
        mile: 72,
        type: 'care_choices',
        narrative: 'During a strip-cup check, milk from a quarter contains abnormal clots, and the quarter feels hot and firm.',
        prompt: 'What is the proper educational protocol?',
        options: [
          { text: 'Isolate the milk from the bulk tank, record findings, and inform the herd manager/veterinarian for culture testing', isCorrect: true, effect: { condition: +25, bond: +20, feedback: 'Quality milk assurance! Withholding abnormal milk protects food safety and herd health.' } },
          { text: 'Dump the milk into the bulk tank and ignore the heat', isCorrect: false, effect: { condition: -40, feedback: 'Never contaminate the food supply with abnormal or high-somatic-cell milk!' } }
        ]
      },
      {
        id: 'dc_node_4',
        title: 'World Dairy Expo Arena Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The World Dairy Expo! Showcase dairy strength, rump angle, and sportsmanship.',
        stations: [
          { name: 'Station 1: PDCA Unified Scorecard', question: 'Which breakdown category carries the highest percentage weight on the PDCA Cow Scorecard?', correctOption: 'Udder (40 points)' },
          { name: 'Station 2: Somatic Cell Count (SCC)', question: 'What does an elevated Somatic Cell Count in bulk tank milk indicate?', correctOption: 'An immune response to intramammary infection (mastitis) in the herd' }
        ]
      }
    ]
  },

  // ==========================================
  // 9. HORSES TRAIL (Equine Project)
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
          { text: 'An ASTM/SEI certified equestrian riding helmet properly buckled and heeled riding boots', isCorrect: true, effect: { supplies: { transportGear: +25 }, condition: +15, bond: +15, feedback: 'Safety First! Certified helmets protect lives against head trauma.' } },
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
          { text: 'Quadrant IV (the horse\'s left front), crossing over so the judge has an unobstructed sightline', isCorrect: true, feedback: 'Exact ring mechanics! The handler is never in the same quadrant as the judge.' }
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
          { text: 'Administer random leftover human pain pills', isCorrect: false, effect: { condition: -30, feedback: 'NEVER give unauthorized medications. Immediate veterinary guidance is essential.' } }
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

  // ==========================================
  // 10. DOG TRAIL (Companion Dog & Agility)
  // ==========================================
  {
    id: 'pet_dogs_trail',
    speciesId: 'dogs',
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
          { text: 'She is feeling mild stress or uncertainty; give her space and do not force an interaction', isCorrect: true, feedback: 'Excellent reading! Whale eye and lip licking are displacement/stress signals.' },
          { text: 'She is aggressive and angry', isCorrect: false, feedback: 'Whale eye indicates discomfort or fear, not deliberate aggression.' }
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
        id: 'pd_node_5',
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
        id: 'pd_node_6',
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
  // 11. PET NEIGHBORHOOD TRAIL (Cats & Small Pets)
  // ==========================================
  {
    id: 'pet_neighborhood_trail',
    speciesId: 'pet_cats',
    type: 'pet',
    name: 'Pet Neighborhood: Whiskers & Wings Trail',
    subtitle: 'From Cozy Sunbeam Perch to Community Animal Welfare Star',
    companion: {
      name: 'Oliver the Calico Cat',
      species: 'Cat',
      breed: 'Domestic Shorthair',
      icon: 'Heart',
      avatarEmoji: '🐱',
      lore: 'An observant feline who loves vertical cat tree perches, puzzle toys, and quiet lap company.'
    },
    scenery: 'sunny window perches, enclosed patio catios, and pet enrichment rooms',
    regions: [
      { id: 'reg_home', name: 'Sunbeam Haven', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Enrichment Loft', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Catio Courtyard', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'Feline & Pet Fellowship Gala', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'pn_node_1',
        title: 'Obligate Carnivore Physiology',
        region: 'reg_home',
        mile: 12,
        type: 'trail_quiz',
        narrative: 'You are preparing Oliver’s dinner bowl.',
        prompt: 'Why can domestic cats NEVER be fed a plant-only vegetarian or vegan diet?',
        options: [
          { text: 'Cats are obligate carnivores who require preformed animal nutrients like taurine to prevent fatal heart disease and blindness', isCorrect: true, feedback: 'Life-saving nutritional fact! Taurine deficiency causes dilated cardiomyopathy in cats.' }
        ]
      },
      {
        id: 'pn_node_2',
        title: 'Lily Plant Toxicity Alert',
        region: 'reg_camp',
        mile: 40,
        type: 'care_choices',
        narrative: 'A visitor brings a floral bouquet containing True Lilies (Lilium species) into your living room.',
        prompt: 'What must you do immediately to protect Oliver?',
        options: [
          { text: 'Immediately remove all lilies from the house. Even minor pollen ingestion or drinking vase water triggers acute fatal kidney failure in felines!', isCorrect: true, effect: { condition: +30, bond: +25, feedback: 'Life-saving awareness! All true lilies and daylilies are deadly to cats.' } },
          { text: 'Leave them on the counter', isCorrect: false, effect: { condition: -40, feedback: 'Cats can jump anywhere, and falling pollen on fur will be groomed off and ingested!' } }
        ]
      },
      {
        id: 'pn_node_3',
        title: 'Fear-Free Towel Handling',
        region: 'reg_county',
        mile: 70,
        type: 'showmanship_sequence',
        narrative: 'Practice the Fear-Free "towel burrito" wrap to keep a cat secure and calm during a routine health exam.',
        prompt: 'Order the gentle towel wrap steps:',
        sequenceItems: [
          { step: 1, label: 'Lay a soft bath towel flat on the table, misted lightly with calming feline pheromones' },
          { step: 2, label: 'Place the cat gently in the center facing away from you' },
          { step: 3, label: 'Wrap one side of the towel snugly over the cat\'s back and under the neck' },
          { step: 4, label: 'Bring the opposite side over, swaddling paws safely while leaving head and ears exposed' }
        ]
      },
      {
        id: 'pn_node_4',
        title: 'Feline & Pet Fellowship Gala Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The Feline & Pet Fellowship Gala! Prove your mastery of cat behavior, safe handling, and habitat enrichment.',
        stations: [
          { name: 'Station 1: Litter Box Formula', question: 'What is the veterinary golden rule for litter boxes in a multi-cat household?', correctOption: 'One box per cat, plus one extra (N + 1)' },
          { name: 'Station 2: Slow-Blink Greeting', question: 'What does a cat’s slow, deliberate eye blink communicate to a human?', correctOption: 'Affection, relaxation, and trust' }
        ]
      }
    ]
  },

  // ==========================================
  // 12. CAMELIDS TRAIL (Llama & Alpaca)
  // ==========================================
  {
    id: 'camelids_trail',
    speciesId: 'camelids',
    type: 'livestock',
    name: 'High Andes Camelid Ridge Trail',
    subtitle: 'From Mountain Pasture to National Alpaca Expo',
    companion: {
      name: 'Andy the Huacaya Alpaca',
      species: 'Alpaca',
      breed: 'Huacaya Alpaca',
      icon: 'Sparkles',
      avatarEmoji: '🦙',
      lore: 'A gentle, crimpy-fleeced alpaca cria with alert banana ears, proud posture, and a soft humming greeting.'
    },
    scenery: 'crisp mountain meadows, high wooden rails, and clean fiber sorting stations',
    regions: [
      { id: 'reg_home', name: 'Andean Slope', milesStart: 0, milesEnd: 25 },
      { id: 'reg_camp', name: 'Fiber & Pack Camp', milesStart: 25, milesEnd: 55 },
      { id: 'reg_county', name: 'Highland Ridge Arena', milesStart: 55, milesEnd: 85 },
      { id: 'reg_state', name: 'National Camelid Congress', milesStart: 85, milesEnd: 100 }
    ],
    nodes: [
      {
        id: 'cm_node_1',
        title: 'Communal Dung Pile Biosecurity',
        region: 'reg_home',
        mile: 12,
        type: 'trail_quiz',
        narrative: 'Camelids exhibit a natural behavioral trait called communal dung piles (poop piles).',
        prompt: 'Why is this natural behavior beneficial for pasture biosecurity and parasite management?',
        options: [
          { text: 'Camelids naturally deposit manure in specific communal spots, keeping grazing forage clean and reducing internal parasite spread', isCorrect: true, feedback: 'Fascinating natural adaptation! Communal piles protect pasture forage cleanliness.' }
        ]
      },
      {
        id: 'cm_node_2',
        title: 'Proper Halter Fit: Obligate Nasal Breathers',
        region: 'reg_camp',
        mile: 44,
        type: 'care_choices',
        narrative: 'You are fitting a show halter on Andy. Camelids are obligate nasal breathers with fragile soft cartilage on the lower nose.',
        prompt: 'Where must the noseband of a camelid halter be positioned?',
        options: [
          { text: 'High on the solid nasal bone right below the eyes; NEVER low on the soft cartilage where it can block airways', isCorrect: true, effect: { condition: +25, bond: +25, feedback: 'Critical anatomy knowledge! Low-fitting halters can suffocate camelids by compressing soft nasal cartilage.' } },
          { text: 'Low over the nostrils', isCorrect: false, effect: { condition: -30, feedback: 'DANGER! Compressing the nostrils impairs breathing and causes acute suffocation!' } }
        ]
      },
      {
        id: 'cm_node_3',
        title: 'Alpaca Public Manners Obstacle',
        region: 'reg_county',
        mile: 74,
        type: 'showmanship_sequence',
        narrative: 'Guide Andy through the public trail obstacle course featuring a small bridge and ground poles.',
        prompt: 'Order the obstacle navigation sequence:',
        sequenceItems: [
          { step: 1, label: 'Approach the wooden footbridge at a calm walk, keeping light two-handed lead tension' },
          { step: 2, label: 'Allow the alpaca to lower its head briefly to inspect the change in footing texture' },
          { step: 3, label: 'Walk confidently across first, encouraging Andy to step forward with four steady feet' },
          { step: 4, label: 'Halt squarely on the opposite side and pause for judge inspection' }
        ]
      },
      {
        id: 'cm_node_4',
        title: 'National Camelid Congress Finale',
        region: 'reg_state',
        mile: 100,
        type: 'fair_sim_finale',
        narrative: 'The National Camelid Congress! Evaluate fleece fineness, obstacle agility, and respectful handling.',
        stations: [
          { name: 'Station 1: Fleece Evaluation', question: 'What unit of measurement is used in professional fiber lab testing to measure alpaca fleece fineness?', correctOption: 'Microns (micrometers)' },
          { name: 'Station 2: Berserk Male Syndrome Prevention', question: 'Why should young male llama/alpaca crias never be bottle-fed or over-cuddled like puppies?', correctOption: 'It causes loss of normal boundary fear toward humans, resulting in dangerous adult aggression' }
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
