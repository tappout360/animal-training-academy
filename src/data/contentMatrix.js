// WarrenWise Youth Animal Training Academy - Standardized Content Matrix Checklist
// Enforces 9-Module complete knowledge standards, welfare boundaries, and veterinary disallowances across all 11 species

export const DISALLOWED_MEDICAL_TERMS = [
  'prescribe antibiotics',
  'prescribe medication to your',
  'antibiotic dosage',
  'penicillin dosage',
  'mg/kg dosage',
  'inject without veterinarian',
  'diy surgery',
  'home surgery',
  'tranquilize before show',
  'calming paste cocktail',
  'sedate for judging'
];

export const CONTENT_MATRIX = {
  rabbits: {
    speciesName: 'Rabbits',
    category: 'Small Stock Livestock',
    modules: [
      {
        moduleId: 'basics_breeds',
        title: 'Basics & Breeds',
        requiredObjectives: ['4-class vs 6-class breeds', 'ARBA standard body types (semi-arch, compact, full arch, commercial, cylindrical)', 'Fur types (flyback, rollback, rex, satin, wool)'],
        requiredIdSkills: ['ARBA recognized breeds', 'Body types identification', 'Ear, hock, spine anatomy'],
        welfareSafetyPoints: ['Safe supporting of hindquarters to prevent broken lumbar spine', 'Heat stress prevention over 85°F'],
        juniorVsSeniorDepth: 'Junior focuses on identifying popular breeds and 4-class vs 6-class; Senior evaluates genetic coat alleles (A, B, C, D, E) and ARBA Standard of Perfection faults.',
        disallowedContent: ['Veterinary antibiotic dosages', 'Home ear-mite chemical treatments'],
        verificationStatus: 'Approved',
        verifiedBy: 'ARBA Licensed Judge & Extension Specialist'
      },
      {
        moduleId: 'daily_care',
        title: 'Daily Care & Housing',
        requiredObjectives: ['Cage wire gauge sizing', 'Rest boards for sore hock prevention', 'Daily manure dropping pan cleaning'],
        requiredIdSkills: ['Slicker brush', 'Nail trimmers with styptic powder', 'Rest boards'],
        welfareSafetyPoints: ['Ulcerative pododermatitis prevention', 'Adequate barn ventilation'],
        juniorVsSeniorDepth: 'Junior learns daily feeding and rest mat placement; Senior designs commercial rabbitry airflow and ammonia cubic-feet-per-minute ventilation.',
        disallowedContent: ['Invasive abscess lancing without vet'],
        verificationStatus: 'Approved',
        verifiedBy: 'Extension Small Stock Specialist'
      },
      {
        moduleId: 'nutrition',
        title: 'Nutrition Principles',
        requiredObjectives: ['Hindgut cecotrophy and cecotropes', 'High fiber Timothy/orchard hay intake', 'Pellet rationing based on breed weight'],
        requiredIdSkills: ['Timothy hay vs alfalfa', 'Quality extruded pellets', 'Water crocks vs ball-point sippers'],
        welfareSafetyPoints: ['Fatal GI stasis prevention', 'Trichobezoar (wool block) hydration management'],
        juniorVsSeniorDepth: 'Junior understands daily hay necessity; Senior calculates crude fiber, acid detergent fiber (ADF), and cecal volatile fatty acids.',
        disallowedContent: ['Medicated feed dosing recommendations'],
        verificationStatus: 'Approved',
        verifiedBy: 'University Nutrition Specialist'
      },
      {
        moduleId: 'health_biosecurity',
        title: 'Health Observation & Biosecurity Awareness',
        requiredObjectives: ['Rabbit Hemorrhagic Disease Virus (RHDV2) biosecurity', 'Pasteurella snuffles symptoms', '30-day show isolation quarantine'],
        requiredIdSkills: ['Normal vitals observation', 'Ear mite crust recognition', 'Malocclusion wolf teeth check'],
        welfareSafetyPoints: ['Mandatory quarantine', 'Immediate veterinary consult for GI stasis or neurological wry neck'],
        juniorVsSeniorDepth: 'Junior identifies clear eyes and dry noses; Senior manages RHDV2 vaccination records, state import permits, and biosecurity disinfection chemistry.',
        disallowedContent: ['Prescribing antibiotics for snuffles', 'DIY tooth clipping without veterinary guidance'],
        verificationStatus: 'Approved',
        verifiedBy: 'DVM Extension Specialist'
      },
      {
        moduleId: 'handling_welfare',
        title: 'Handling & Welfare',
        requiredObjectives: ['Tuck-and-football carry hold', 'Supporting hind legs at all times', 'Never lifting by ears or scruff'],
        requiredIdSkills: ['Table transport stance', 'Gentle table flip for vent and tooth exam'],
        welfareSafetyPoints: ['Spinal fracture prevention', 'Stress reduction'],
        juniorVsSeniorDepth: 'Junior practices gentle two-handed carries; Senior trains younger members on flight response psychology.',
        disallowedContent: ['Rough physical discipline'],
        verificationStatus: 'Approved',
        verifiedBy: 'Certified Welfare Auditor'
      },
      {
        moduleId: 'record_keeping',
        title: 'Record Keeping',
        requiredObjectives: ['Tattoo ear registration records', 'Breeding date and kindle box tracking', 'Feed cost vs show entry budget'],
        requiredIdSkills: ['Pedigree certificate reading', 'Weight tracking scales', 'Breeding calendar'],
        welfareSafetyPoints: ['Accurate tracking of nest box insertion (day 28)'],
        juniorVsSeniorDepth: 'Junior logs daily feed and monthly weights; Senior tracks breeding coefficients, kit mortality statistics, and enterprise accounting.',
        disallowedContent: ['Official registry forgery'],
        verificationStatus: 'Approved',
        verifiedBy: 'State 4-H Specialist'
      },
      {
        moduleId: 'showmanship',
        title: 'Showmanship Foundations',
        requiredObjectives: ['ARBA 12-step table evaluation sequence', 'Proper show pose by breed type', 'Professional show attire (long sleeves)'],
        requiredIdSkills: ['12-step physical check sequence', 'Poser hand positioning'],
        welfareSafetyPoints: ['Gentle flipping and firm table security'],
        juniorVsSeniorDepth: 'Junior performs the 12 steps calmly; Senior recites anatomical terms and handles oral examination questions fluently.',
        disallowedContent: ['Artificial cosmetic dyes or chalks'],
        verificationStatus: 'Approved',
        verifiedBy: 'ARBA Showmanship Superintendent'
      },
      {
        moduleId: 'ethics_character',
        title: 'Ethics & Character',
        requiredObjectives: ['4-H Character Counts pillars', 'Humane treatment over winning', 'Sportsmanship inside and outside the ring'],
        requiredIdSkills: ['Recognizing ethical violations', 'Gracious sportsmanship conduct'],
        welfareSafetyPoints: ['Zero tolerance for animal abandonment or neglect'],
        juniorVsSeniorDepth: 'Junior practices congratulating peers; Senior leads club ethics discussions and mentors newcomers.',
        disallowedContent: ['Unethical grooming alteration instructions'],
        verificationStatus: 'Approved',
        verifiedBy: 'State Ethics Review Panel'
      },
      {
        moduleId: 'goals_communication',
        title: 'Project Goals & Communication',
        requiredObjectives: ['SMART goal formulation', 'Club demonstrations on rabbit care', 'Breed judging reasons'],
        requiredIdSkills: ['Illustrated talk visual aids', 'Oral presentation delivery'],
        welfareSafetyPoints: ['Safe animal handling during public demonstrations'],
        juniorVsSeniorDepth: 'Junior gives 3-minute show-and-tell; Senior prepares formal 10-minute method demonstration with judging contest defense.',
        disallowedContent: ['Misleading public claims about official certification'],
        verificationStatus: 'Approved',
        verifiedBy: 'Youth Leadership Coordinator'
      }
    ]
  },
  cavies: {
    speciesName: 'Cavies (Guinea Pigs)',
    category: 'Small Stock Livestock',
    modules: [
      {
        moduleId: 'basics_breeds',
        title: 'Basics & Breeds',
        requiredObjectives: ['13 ARBA recognized cavy breeds', 'Smooth vs Rough vs Longhaired coat varieties', 'Cavy age classes (Junior, Intermediate, Senior by weight)'],
        requiredIdSkills: ['Breed identification: American, Abyssinian, Peruvian, Silkie, Teddy, Texel', 'Crown and rosette patterns'],
        welfareSafetyPoints: ['Gentle handling to prevent ribcage trauma'],
        juniorVsSeniorDepth: 'Junior identifies American vs Abyssinian; Senior evaluates rosette placement and crest symmetry according to ARBA standard.',
        disallowedContent: ['Medication prescribing'],
        verificationStatus: 'Approved',
        verifiedBy: 'ARBA Cavy Specialist'
      },
      {
        moduleId: 'daily_care',
        title: 'Daily Care & Housing',
        requiredObjectives: ['Solid-bottom cages (never wire-mesh floors)', 'Aspen or paper bedding (never cedar shavings)', 'Safe ambient temperature 65-75°F'],
        requiredIdSkills: ['Solid plastic trays', 'Fleece liners vs paper bedding', 'Nail clipping tools'],
        welfareSafetyPoints: ['Bumblefoot (ulcerative pododermatitis) prevention', 'Fatal heat prostration over 80°F'],
        juniorVsSeniorDepth: 'Junior cleans daily solid pens; Senior configures multi-level herd management and bedding absorbency testing.',
        disallowedContent: ['Home surgery on impacted cecum'],
        verificationStatus: 'Approved',
        verifiedBy: 'Extension Cavy Specialist'
      },
      {
        moduleId: 'nutrition',
        title: 'Nutrition Principles',
        requiredObjectives: ['Mandatory daily Vitamin C requirement (10-30 mg/day)', 'Inability to synthesize ascorbic acid', 'Continuous access to Timothy hay'],
        requiredIdSkills: ['Bell peppers and dark leafy greens', 'Stabilized Vitamin C cavy pellets', 'Fresh orchard grass'],
        welfareSafetyPoints: ['Scurvy prevention (joint hemorrhages, loose teeth)', 'Never using water droplets that degrade in light'],
        juniorVsSeniorDepth: 'Junior identifies high Vitamin C veggies; Senior calculates dietary milligrams per kilogram and shelf-life degradation kinetics of ascorbic acid.',
        disallowedContent: ['Prescription vitamin injections'],
        verificationStatus: 'Approved',
        verifiedBy: 'Veterinary Nutritionist'
      },
      {
        moduleId: 'health_biosecurity',
        title: 'Health Observation & Biosecurity Awareness',
        requiredObjectives: ['Fatal antibiotic sensitivity (penicillins, ampicillin, cephalosporins disrupt gut microflora)', 'Bordetella bronchiseptica transmission from rabbits/dogs', 'Signs of health vs illness'],
        requiredIdSkills: ['Weighing scale monitoring', 'Incisor alignment check', 'Coat parasite checks for mites/lice'],
        welfareSafetyPoints: ['Fatal enterotoxemia from beta-lactams', 'Never housing cavies with rabbits due to Bordetella transmission'],
        juniorVsSeniorDepth: 'Junior logs weekly weights; Senior recognizes early signs of pneumonia and dysbiosis, alerting veterinarians immediately.',
        disallowedContent: ['Recommending antibiotics for cavies (must be veterinarian prescribed only)'],
        verificationStatus: 'Approved',
        verifiedBy: 'DVM Small Exotic Animal Committee'
      },
      {
        moduleId: 'handling_welfare',
        title: 'Handling & Welfare',
        requiredObjectives: ['Two-handed secure hold (chest and rump)', 'Understanding prey animal freeze-and-flight instincts', 'Social herd needs (never isolated long-term)'],
        requiredIdSkills: ['Gentle table transfer', 'Handling wraps'],
        welfareSafetyPoints: ['Never dropping or holding around belly', 'Protecting social welfare'],
        juniorVsSeniorDepth: 'Junior practices gentle handling; Senior designs environmental enrichment habitats.',
        disallowedContent: ['Invasive behavioral devices'],
        verificationStatus: 'Approved',
        verifiedBy: 'Cavy Welfare Board'
      },
      {
        moduleId: 'record_keeping',
        title: 'Record Keeping',
        requiredObjectives: ['ARBA ear tag numbering', 'Weekly weight records in grams', 'Feed and vegetable expense tracking'],
        requiredIdSkills: ['Gram scales', 'Tag pliers and ear records'],
        welfareSafetyPoints: ['Weight drop is the #1 earliest indicator of cavy illness'],
        juniorVsSeniorDepth: 'Junior plots weekly weights; Senior conducts financial break-even analyses of breeding pairs.',
        disallowedContent: ['Fictitious show entry logs'],
        verificationStatus: 'Approved',
        verifiedBy: 'State 4-H Cavy Committee'
      },
      {
        moduleId: 'showmanship',
        title: 'Showmanship Foundations',
        requiredObjectives: ['Show carpet/mat presentation', 'ARBA examination steps: eyes, ears, nose, teeth, belly, toes', 'Professional exhibitor conduct'],
        requiredIdSkills: ['Presentation on carpet block', 'Calm exhibitor poise'],
        welfareSafetyPoints: ['Secure carpet grip preventing falls'],
        juniorVsSeniorDepth: 'Junior exhibits basic poise and anatomy; Senior articulates breed disqualifications and standard faults.',
        disallowedContent: ['Coat lacquers or trimming fur on non-trimmed breeds'],
        verificationStatus: 'Approved',
        verifiedBy: 'ARBA Cavy Judge'
      },
      {
        moduleId: 'ethics_character',
        title: 'Ethics & Character',
        requiredObjectives: ['Respect for all animals and exhibitors', 'Honest reporting in record books', 'Humane treatment throughout animal life'],
        requiredIdSkills: ['Ethical problem-solving scenarios'],
        welfareSafetyPoints: ['Compassionate rehoming or care for retired cavies'],
        juniorVsSeniorDepth: 'Junior practices empathy; Senior facilitates ethical peer dialogues.',
        disallowedContent: ['Cruel training methods'],
        verificationStatus: 'Approved',
        verifiedBy: 'Extension Ethics Board'
      },
      {
        moduleId: 'goals_communication',
        title: 'Project Goals & Communication',
        requiredObjectives: ['Setting annual project goals', 'Preparing a cavy demonstration', 'Answering judge questions with poise'],
        requiredIdSkills: ['Public speaking poster design', 'Oral response formatting'],
        welfareSafetyPoints: ['Protecting animal comfort during presentations'],
        juniorVsSeniorDepth: 'Junior explains Vitamin C importance to club; Senior delivers formal clinic on breeding and genetics.',
        disallowedContent: ['False claims of medical expertise'],
        verificationStatus: 'Approved',
        verifiedBy: '4-H Leadership Specialist'
      }
    ]
  },
  poultry: {
    speciesName: 'Poultry',
    category: 'Avian Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['APA Large Fowl classes vs Bantam classes', 'Comb types (single, rose, pea, walnut, cushion)', 'Dual-purpose vs egg production vs meat breeds'], requiredIdSkills: ['Major breeds (Plymouth Rock, Leghorn, Silkie, Orpington)', 'Comb types', 'Egg shell colors'], welfareSafetyPoints: ['Safe handling avoiding wing fractures'], juniorVsSeniorDepth: 'Junior learns egg colors and common breeds; Senior analyzes APA Standard of Perfection color genetics.', disallowedContent: ['DIY caponizing instructions'], verificationStatus: 'Approved', verifiedBy: 'Extension Poultry Specialist' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Coop predator-proofing (hardware cloth)', 'Roost bar spacing', 'Dry litter and ammonia control'], requiredIdSkills: ['Coop designs', 'Feeder/waterer sanitation'], welfareSafetyPoints: ['Predator protection (raccoons, weasels)', 'Frostbite prevention on combs'], juniorVsSeniorDepth: 'Junior manages daily water/feed; Senior engineers coop winterization and ventilation rates.', disallowedContent: ['Unsupervised electrical heating hacks'], verificationStatus: 'Approved', verifiedBy: 'Extension Poultry Team' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Starter, Grower, Layer rations', 'Calcium needs for eggshell formation', 'Insoluble grit for gizzard grinding'], requiredIdSkills: ['Oyster shell', 'Flock grit', 'Pellet vs crumble feeds'], welfareSafetyPoints: ['Preventing egg binding and soft-shell collapse'], juniorVsSeniorDepth: 'Junior learns calcium needs for hens; Senior formulates crude protein and metabolizable energy rations.', disallowedContent: ['Medicated feed dosing adjustments'], verificationStatus: 'Approved', verifiedBy: 'Poultry Nutrition Specialist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['Highly Pathogenic Avian Influenza (HPAI) biosecurity', 'NPIP testing (Pullorum-Typhoid)', 'Marek’s disease and Coccidiosis awareness'], requiredIdSkills: ['Healthy comb inspection', 'Vent checks', 'External mites/lice detection'], welfareSafetyPoints: ['Immediate quarantine for respiratory distress', 'Wild waterfowl exclusion'], juniorVsSeniorDepth: 'Junior follows strict boot wash; Senior manages USDA APHIS reporting procedures for foreign animal diseases.', disallowedContent: ['Prescribing antibiotics for avian diseases'], verificationStatus: 'Approved', verifiedBy: 'DVM Poultry Health Specialist' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Keel-bone rest hold', 'Securing legs between fingers', 'Wings pinned gently against body'], requiredIdSkills: ['Two-handed carrier hold', 'Cage entry and exit technique'], welfareSafetyPoints: ['Never carrying chickens upside down by legs'], juniorVsSeniorDepth: 'Junior demonstrates secure keel hold; Senior coaches younger exhibitors on bird ethology.', disallowedContent: ['Rough flight containment'], verificationStatus: 'Approved', verifiedBy: 'Avian Welfare Scientist' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['NPIP testing flock certificates', 'Egg production tracking and lay percentage', 'Feed conversion ratio (FCR)'], requiredIdSkills: ['Flock egg logs', 'Feed intake ledgers'], welfareSafetyPoints: ['Monitoring drop in egg production as early disease indicator'], juniorVsSeniorDepth: 'Junior charts egg counts; Senior calculates FCR in broiler meat pens.', disallowedContent: ['Falsifying NPIP records'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Poultry Chair' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Standard poultry examination sequence (head, wings, body, legs, vent)', 'Coop in and coop out presentation', 'Direct eye contact and confidence with judge'], requiredIdSkills: ['Complete bird examination routine', 'Posing bird on table'], welfareSafetyPoints: ['Preventing bird drops or flight panics'], juniorVsSeniorDepth: 'Junior performs clean exam; Senior answers in-depth parasite and breed origin questions.', disallowedContent: ['Artificial comb dye or plumage dye'], verificationStatus: 'Approved', verifiedBy: 'APA Licensed Poultry Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Humane care of production flocks', 'Honesty in age and ownership', 'Responsible sportsmanship'], requiredIdSkills: ['Fair play scenarios'], welfareSafetyPoints: ['Zero tolerance for cruelty or neglect'], juniorVsSeniorDepth: 'Junior demonstrates gracious winning; Senior leads county ethics discussions.', disallowedContent: ['Illegal feather enhancements'], verificationStatus: 'Approved', verifiedBy: 'Extension Ethics Committee' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting annual flock goals', 'Poultry judging contests (past egg production, carcass grading, egg candling)', 'Public presentation on biosecurity'], requiredIdSkills: ['Candling egg evaluation', 'Oral defense of judging classes'], welfareSafetyPoints: ['Bird welfare during transport and display'], juniorVsSeniorDepth: 'Junior gives egg anatomy demonstration; Senior defends poultry judging pairs in Oral Reasons.', disallowedContent: ['Unverified veterinary advice to public'], verificationStatus: 'Approved', verifiedBy: 'Youth Development Educator' }
    ]
  },
  goats: {
    speciesName: 'Goats',
    category: 'Small Ruminant Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['ADGA Dairy breeds vs Boer/Kiko Meat breeds vs Pygmy/Nigerian Dwarf companion breeds', '4-compartment ruminant stomach', 'Breed conformational markers'], requiredIdSkills: ['Dairy vs Meat goat identification', 'ADGA breed recognition'], welfareSafetyPoints: ['Horn safety and polled genetics'], juniorVsSeniorDepth: 'Junior identifies dairy vs meat breeds; Senior evaluates linear appraisal scores and structural soundess.', disallowedContent: ['Prescribing pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'ADGA Judge & Goat Extension Specialist' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Fencing escape prevention (woven wire)', 'Elevated sleeping benches', 'Regular hoof trimming every 6-8 weeks'], requiredIdSkills: ['Hoof shears', 'Fencing inspection tools'], welfareSafetyPoints: ['Contagious foot rot prevention', 'Clean dry housing to avoid pneumonia'], juniorVsSeniorDepth: 'Junior learns to clean pens and pick hooves; Senior trims hooves squarely parallel to the hairline.', disallowedContent: ['DIY castration without proper anesthesia guidance'], verificationStatus: 'Approved', verifiedBy: 'Small Ruminant Specialist' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Ruminant fiber fermentation', 'Urinary calculi prevention in wethers (strict 2:1 Calcium to Phosphorus ratio)', 'Copper requirements (unlike sheep, goats need copper)'], requiredIdSkills: ['Alfalfa vs grass hay', 'Mineral mixes specifically formulated for goats', 'Ammonium chloride supplementation'], welfareSafetyPoints: ['Fatal urinary obstruction in male wethers', 'Grain overload bloat prevention'], juniorVsSeniorDepth: 'Junior recognizes high-fiber browse; Senior balances rations for lactating dairy does.', disallowedContent: ['Medicated feed dosing adjustments'], verificationStatus: 'Approved', verifiedBy: 'Ruminant Nutritionist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['FAMACHA eye mucous membrane scoring for Barber Pole worm', 'Scrapie eradication program tags', 'Caseous Lymphadenitis (CL) and CAE biosecurity'], requiredIdSkills: ['FAMACHA 1-5 score card', 'Normal goat vitals (Temp 101.5-103.5°F)', 'Abscess identification'], welfareSafetyPoints: ['Barber pole worm fatal anemia', 'Never lancing suspected CL abscesses in pens'], juniorVsSeniorDepth: 'Junior checks FAMACHA color; Senior executes targeted selective deworming strategies.', disallowedContent: ['Prescribing anthelmintics or off-label pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'DVM Small Ruminant Committee' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Under-jaw and collar hold', 'Never leading by horns alone', 'Flight zones and natural herd behavior'], requiredIdSkills: ['Proper show collar handling', 'Restraint for hoof trimming'], welfareSafetyPoints: ['Safe disbudding standards under veterinary anesthesia'], juniorVsSeniorDepth: 'Junior walks goat calmly on collar; Senior manages large buck handling safely.', disallowedContent: ['Rough dragging or horn pulling'], verificationStatus: 'Approved', verifiedBy: 'Welfare Science Board' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['USDA Scrapie premises ID and individual ear tags', 'DHIR milk weight logs for dairy goats', 'Deworming and hoof trim dates'], requiredIdSkills: ['Scrapie tag records', 'Milk scale tracking'], welfareSafetyPoints: ['Tracking withdrawal times for meat and milk'], juniorVsSeniorDepth: 'Junior logs daily feed and trim dates; Senior conducts enterprise cost-of-production analysis per pound of gain.', disallowedContent: ['Forging scrapie tag numbers'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Goat Superintendent' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Show collar control without drooping leads', 'Setting up feet squarely without lifting off ground', 'Staying on the opposite side of the judge at all times'], requiredIdSkills: ['Front and rear leg square placement', 'Ring movement and transitions'], welfareSafetyPoints: ['Keeping animal breathing comfortably without choking on collar'], juniorVsSeniorDepth: 'Junior maintains eye contact and square stance; Senior maneuvers complex side-by-side judge challenges seamlessly.', disallowedContent: ['Cosmetic ear trimming or dyes'], verificationStatus: 'Approved', verifiedBy: 'ADGA Showmanship Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Fair play in breeding and market classes', 'Zero tolerance for illegal drenching or icing', 'Integrity in ownership deadlines'], requiredIdSkills: ['Recognizing prohibited show practices'], welfareSafetyPoints: ['Protecting animal dignity and welfare over winning'], juniorVsSeniorDepth: 'Junior learns honesty and graciousness; Senior leads club ethics discussions.', disallowedContent: ['Illegal substance drenching instructions'], verificationStatus: 'Approved', verifiedBy: 'State Livestock Ethics Board' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['SMART goals for breeding or market project', 'Goat Bowl and Skillathon preparation', 'Public demonstration of milking or cheese making'], requiredIdSkills: ['Oral Reasons judging delivery', 'Public clinic presentation'], welfareSafetyPoints: ['Safe public interaction at educational petting exhibits'], juniorVsSeniorDepth: 'Junior presents goat care poster; Senior delivers official Oral Reasons in dairy goat judging.', disallowedContent: ['Unlicensed veterinary diagnosis to the public'], verificationStatus: 'Approved', verifiedBy: 'Extension 4-H Specialist' }
    ]
  },
  sheep: {
    speciesName: 'Sheep',
    category: 'Small Ruminant Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['Meat breeds (Suffolk, Hampshire) vs Wool breeds (Merino, Rambouillet) vs Hair breeds (Katahdin, Dorper)', 'Market lamb conformation (rack, loin, leg)', 'Ewe maternal traits'], requiredIdSkills: ['Breed recognition', 'Market carcass anatomy'], welfareSafetyPoints: ['Heat stress in un-sheared sheep'], juniorVsSeniorDepth: 'Junior identifies wool vs hair breeds; Senior evaluates NSIP EBVs and fiber micron grading.', disallowedContent: ['Prescribing antibiotics'], verificationStatus: 'Approved', verifiedBy: 'ASI Youth Committee' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Annual spring shearing', 'Tail docking at the caudal fold (preventing rectal prolapse)', 'Hoof trimming and dry bedding'], requiredIdSkills: ['Shearing equipment', 'Hoof shears'], welfareSafetyPoints: ['AVMA tail docking standard at caudal fold', 'Flystrike prevention'], juniorVsSeniorDepth: 'Junior helps with daily barn duties; Senior crutches sheep to prevent myiasis.', disallowedContent: ['Ultra-short docking flush with spine'], verificationStatus: 'Approved', verifiedBy: 'Small Ruminant Extension Team' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['FATAL COPPER TOXICITY WARNING (Sheep cannot excrete excess copper; never feed goat/cattle feeds)', 'Forage fiber ruminant digestion', 'Enterotoxemia prevention (Overeating disease)'], requiredIdSkills: ['Sheep-specific mineral bags', 'Quality grass hay', 'CD&T vaccination link to high grain diets'], welfareSafetyPoints: ['Severe jaundice and death from copper toxicity', 'Urinary calculi prevention in wethers'], juniorVsSeniorDepth: 'Junior checks feed tags for "Copper Free"; Senior balances forage:concentrate ratios for market lamb gain.', disallowedContent: ['Prescribing copper supplements'], verificationStatus: 'Approved', verifiedBy: 'University Nutrition Specialist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['CD&T vaccination (Clostridium perfringens C&D + Tetanus)', 'Contagious Ecthyma (Sore Mouth) zoonosis', 'Scrapie program compliance and FAMACHA testing'], requiredIdSkills: ['Sore mouth lesions warning', 'FAMACHA eye scoring', 'Scrapie ear tags'], welfareSafetyPoints: ['Zoonotic sore mouth transmission to humans', 'Parasitic anemia'], juniorVsSeniorDepth: 'Junior identifies healthy vital signs; Senior manages flock biosecurity for foot rot and scrapie.', disallowedContent: ['Prescription antibiotic dosing'], verificationStatus: 'Approved', verifiedBy: 'DVM Sheep Specialist' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Rumping (setting up on dock for shearing and feet care)', 'Holding under jaw and dock', 'Never pulling or dragging by wool'], welfareSafetyPoints: ['Wool pull bruising and tissue damage', 'Safe restraint without asphyxiation'], juniorVsSeniorDepth: 'Junior holds lamb under jaw and dock; Senior masters setting up sheep on rump smoothly.', disallowedContent: ['Lifting or dragging sheep by fleece'], verificationStatus: 'Approved', verifiedBy: 'Livestock Welfare Board' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['Scrapie flock records', 'Average Daily Gain (ADG) calculations', 'Feed cost per pound of gain'], requiredIdSkills: ['Livestock scales', 'Breeding and lambing jugs charts'], welfareSafetyPoints: ['Tracking withdrawal times for show feeds and vaccines'], juniorVsSeniorDepth: 'Junior logs weights; Senior calculates break-even sales prices and feed efficiency.', disallowedContent: ['Falsifying scrapie tags'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Sheep Board' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Bracing market lambs correctly (front feet square, rear feet slightly back)', 'Controlling lamb with knees and chin without lifting front feet off ground', 'Maintaining judge view'], requiredIdSkills: ['Square foot placement', 'Proper bracing stance'], welfareSafetyPoints: ['Never choking lamb or lifting feet off the ground during bracing'], juniorVsSeniorDepth: 'Junior sets feet squarely; Senior executes clean bracing and ring presence.', disallowedContent: ['Excessive choking or slapping'], verificationStatus: 'Approved', verifiedBy: 'National Sheep Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Bans on ice packing, artificial drenching, or air pumping under skin', 'Character Counts in the barn', 'Fair play in market classes'], requiredIdSkills: ['Recognizing unethical tampering'], welfareSafetyPoints: ['Zero tolerance for tissue trauma or dehydration'], juniorVsSeniorDepth: 'Junior exhibits honest sportsmanship; Senior champions purebred flock integrity.', disallowedContent: ['Prohibited carcass enhancement techniques'], verificationStatus: 'Approved', verifiedBy: 'Livestock Quality Assurance Board' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting SMART project goals', 'Judging reasons in market lamb evaluation', 'Demonstrations on wool carding or lamb care'], requiredIdSkills: ['Oral Reasons delivery', 'Market lamb placing'], welfareSafetyPoints: ['Safe animal transport to fairgrounds'], juniorVsSeniorDepth: 'Junior presents sheep project to club; Senior delivers comparative oral reasons to judging official.', disallowedContent: ['Unqualified medical advice'], verificationStatus: 'Approved', verifiedBy: 'Extension 4-H Faculty' }
    ]
  },
  swine: {
    speciesName: 'Swine',
    category: 'Monogastric Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['8 major purebred swine breeds (Yorkshire, Hampshire, Duroc, Berkshire, Chester White, Landrace, Poland China, Spotted)', 'Ear carriage: Erect (Yorkshire, Hampshire, Berkshire) vs Drooped (Duroc, Chester White, Landrace)', 'Universal Ear Notching System (Right ear = Litter, Left ear = Pig)'], requiredIdSkills: ['Breed identification', 'Reading ear notches'], welfareSafetyPoints: ['Safe handling in pens avoiding pig bites'], juniorVsSeniorDepth: 'Junior memorizes ear carriage and notch reading; Senior analyzes terminal vs maternal EPDs.', disallowedContent: ['Prescribing antibiotics'], verificationStatus: 'Approved', verifiedBy: 'National Swine Registry Specialist' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Heat stress sensitivity (pigs cannot sweat; need misters/fans over 80°F)', 'Dry clean shavings bedding', 'Daily skin and hair conditioning'], requiredIdSkills: ['Swine misters and fans', 'Skin conditioners and brushes'], welfareSafetyPoints: ['Fatal hyperthermia prevention', 'Tail biting prevention through enrichment'], juniorVsSeniorDepth: 'Junior keeps wash pens clean; Senior engineers barn cooling and floor drainage.', disallowedContent: ['DIY hernia surgery'], verificationStatus: 'Approved', verifiedBy: 'Extension Swine Team' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Monogastric digestive physiology', 'Lysine as first limiting amino acid', 'Phase feeding (Starter, Grower, Finisher)'], requiredIdSkills: ['Complete ground feed rations', 'Automatic nipple waterers check'], welfareSafetyPoints: ['Salt poisoning (water deprivation syndrome) prevention'], juniorVsSeniorDepth: 'Junior checks daily water flow; Senior balances crude protein, lysine, and energy density.', disallowedContent: ['Ractopamine / Paylean feed additive use where banned'], verificationStatus: 'Approved', verifiedBy: 'Swine Nutritionist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['Porcine Epidemic Diarrhea (PEDv) and PRRS biosecurity', 'Swine Influenza zoonosis awareness', 'Show quarantine and boot washing'], requiredIdSkills: ['Normal swine vitals (101.5-103.5°F)', 'Recognizing respiratory thumping'], welfareSafetyPoints: ['Biosecurity boot baths', 'Immediate veterinary isolation for coughing/diarrhea'], juniorVsSeniorDepth: 'Junior washes boots before entering; Senior implements all-in/all-out barn biosecurity.', disallowedContent: ['Prescribing prescription medications'], verificationStatus: 'Approved', verifiedBy: 'DVM Swine Committee' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Driving with sorting board and driving whip/pipe', 'Tapping shoulder gently to guide direction (never hitting rump)', 'Flight zone mechanics'], requiredIdSkills: ['Sorting board', 'Driving whip / cane'], welfareSafetyPoints: ['Porcine Stress Syndrome (PSS) collapse prevention'], juniorVsSeniorDepth: 'Junior walks pig using sorting board; Senior guides pig smoothly in open arenas.', disallowedContent: ['Striking animal with excessive force'], verificationStatus: 'Approved', verifiedBy: 'Pork Quality Assurance Board' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['Ear notch diagrams in record book', 'Average Daily Gain (ADG 1.8-2.2 lbs/day target)', 'PQA Plus certification compliance'], requiredIdSkills: ['Weight scales', 'Feed conversion calculation'], welfareSafetyPoints: ['Strict documentation of withdrawal periods'], juniorVsSeniorDepth: 'Junior logs feed bags; Senior calculates feed:gain ratios and cost-per-pound economics.', disallowedContent: ['Altering ear notch diagrams'], verificationStatus: 'Approved', verifiedBy: 'PQA Plus State Coordinator' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Keeping pig 15-20 feet from judge', 'Keeping pig moving at slow, natural pace', 'Never getting between pig and judge'], requiredIdSkills: ['Driving pig with pipe/whip', 'Penning pig cleanly on request'], welfareSafetyPoints: ['Hydration and cool-down in show holding pens'], juniorVsSeniorDepth: 'Junior maintains eye contact and driving pace; Senior pens pig effortlessly and handles ring traffic.', disallowedContent: ['Using harsh chemicals or dyes on skin'], verificationStatus: 'Approved', verifiedBy: 'National Swine Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Zero tolerance for Paylean (Ractopamine) where banned', 'Wholesome meat supply responsibility', 'Humane treatment throughout transport and showing'], requiredIdSkills: ['PQA Plus ethical decision making'], welfareSafetyPoints: ['Safe handling in hot trailers during fair transport'], juniorVsSeniorDepth: 'Junior respects ring marshals; Senior leads educational workshops on food animal safety.', disallowedContent: ['Illegal drug residue administration'], verificationStatus: 'Approved', verifiedBy: 'Livestock Ethics Review Board' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting SMART weight and show goals', 'Swine judging oral reasons', 'Public education on pork production and food safety'], requiredIdSkills: ['Oral defense of market hog classes', 'Demonstration delivery'], welfareSafetyPoints: ['Public bio-security at barn tours'], juniorVsSeniorDepth: 'Junior presents pig project poster; Senior defends market swine pairs in oral reasons.', disallowedContent: ['Unverified veterinary advice'], verificationStatus: 'Approved', verifiedBy: 'Extension 4-H Swine Chair' }
    ]
  },
  beef_cattle: {
    speciesName: 'Beef Cattle',
    category: 'Large Ruminant Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['British breeds (Angus, Hereford, Shorthorn) vs Continental breeds (Charolais, Simmental, Limousin) vs American composite breeds (Brahman, Brangus, Beefmaster)', 'Market steer conformation vs breeding heifer maternal traits', 'Frame scoring'], requiredIdSkills: ['Breed recognition', 'Anatomy: brisket, stifle, hooks, pins, cod/udder'], welfareSafetyPoints: ['Safe handling of large animals'], juniorVsSeniorDepth: 'Junior identifies major breeds; Senior evaluates EPDs (Birth Weight, Weaning Weight, Marbling) and genomic testing.', disallowedContent: ['Prescribing veterinary pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'Beef Cattle Extension Specialist' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Stout corral fencing and heavy-duty gates', 'Hair care: daily rinsing, blowing, and brushing forward', 'Deep straw/shavings bedding'], requiredIdSkills: ['Livestock blower', 'Rice root brush', 'Hoof chutes'], welfareSafetyPoints: ['Heat abatement with fans/misters', 'Dry footing preventing foot rot'], juniorVsSeniorDepth: 'Junior rinses and blows hair daily; Senior coordinates professional hoof trimming and facility maintenance.', disallowedContent: ['DIY surgical lancing of abscesses'], verificationStatus: 'Approved', verifiedBy: 'Beef Extension Educator' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Ruminant digestion of roughages', 'Market steer ADG target 2.5-3.5 lbs/day', 'High-grain acidosis and bloat prevention'], requiredIdSkills: ['TMR rations', 'Protein supplements and mineral tubs'], welfareSafetyPoints: ['Ruminal acidosis prevention via gradual ration step-up', 'Clean fresh water (20-30 gal/day)'], juniorVsSeniorDepth: 'Junior feeds measured rations twice daily; Senior balances net energy for maintenance (NEm) and gain (NEg).', disallowedContent: ['Medicated feed dosing adjustments'], verificationStatus: 'Approved', verifiedBy: 'Ruminant Nutritionist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['Beef Quality Assurance (BQA) guidelines: subcutaneous (SubQ) injections exclusively in neck triangle', 'Bovine Respiratory Disease Complex (BRDC / Shipping Fever)', 'Vaccinations: 7-way Blackleg (Clostridial), BVD, IBR, BRSV'], requiredIdSkills: ['BQA injection triangle on neck', 'Normal vitals (101.5°F)'], welfareSafetyPoints: ['Preventing injection site lesions in valuable carcass cuts', 'Quarantine returning show cattle for 21 days'], juniorVsSeniorDepth: 'Junior identifies BQA triangle location; Senior executes complete BQA certification protocols.', disallowedContent: ['Intramuscular injections in high-value hindquarter rump cuts'], verificationStatus: 'Approved', verifiedBy: 'BQA State Coordinator & DVM' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Flight zone and point of balance at shoulder', 'Low-stress handling (Temple Grandin principles)', 'Halter breaking safety (never wrapping rope around hand/body)'], requiredIdSkills: ['Leather show halter and lead', 'Using squeeze chutes safely'], welfareSafetyPoints: ['Preventing crush injuries', 'Calm handling without shouting or electric prods'], juniorVsSeniorDepth: 'Junior leads steer with safe accordion rope folds; Senior manages flight zones in large pens.', disallowedContent: ['Excessive use of electric prods'], verificationStatus: 'Approved', verifiedBy: 'Humane Livestock Handling Auditor' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['Official 840 RFID ear tag records', 'Average Daily Gain and feed efficiency logs', 'BQA health treatment records with withdrawal dates'], requiredIdSkills: ['Livestock scale weighing', 'RFID scanners and logs'], welfareSafetyPoints: ['Strict adherence to meat withdrawal times before harvest'], juniorVsSeniorDepth: 'Junior calculates monthly weight gains; Senior runs enterprise break-even projections and carcass grid valuation.', disallowedContent: ['Falsifying health records or withdrawal dates'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Beef Committee' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Show stick mechanics: setting up feet square/offset for heifers', 'Leading clockwise with show stick in left hand, lead in right', 'Eye contact with judge while monitoring steer'], requiredIdSkills: ['Show stick usage', 'Combing hair forward in ring'], welfareSafetyPoints: ['Safe spacing (8-10 feet) between cattle in arena'], juniorVsSeniorDepth: 'Junior sets feet with show stick; Senior maneuvers steer through judge switches and questions smoothly.', disallowedContent: ['Artificial hair extensions (false tail switches) where prohibited'], verificationStatus: 'Approved', verifiedBy: 'National Beef Cattle Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Wholesome food supply commitment', 'Prohibition of air injection under skin, calming drugs, or physical abuse', 'Sportsmanship in competitive rings'], requiredIdSkills: ['BQA ethical compliance'], welfareSafetyPoints: ['Zero tolerance for chemical sedation or tail cutting'], juniorVsSeniorDepth: 'Junior demonstrates respect for competitors; Senior leads club ethics discussions.', disallowedContent: ['Illegal performance-altering pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'Livestock Ethics Review Board' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting SMART beef project goals', 'Judging reasons in market steer and breeding heifer classes', 'Public demonstrations on BQA or feed management'], requiredIdSkills: ['Oral Reasons delivery', 'Market beef evaluation'], welfareSafetyPoints: ['Safe livestock exhibition at public fairs'], juniorVsSeniorDepth: 'Junior presents beef poster to club; Senior delivers comparative oral reasons to judging official.', disallowedContent: ['Unlicensed veterinary advice'], verificationStatus: 'Approved', verifiedBy: 'Extension Beef Specialist' }
    ]
  },
  dairy_cattle: {
    speciesName: 'Dairy Cattle',
    category: 'Large Ruminant Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['6 major dairy breeds (Holstein, Jersey, Brown Swiss, Guernsey, Ayrshire, Milking Shorthorn)', 'PDCA Unified Scorecard (Udder 40%, Dairy Strength 25%, Rear Feet/Legs 20%, Frame 15%)', 'Dairy conformation: openness of rib, angularity, clean neck'], requiredIdSkills: ['Breed identification by color and markings', 'PDCA scorecard breakdowns'], welfareSafetyPoints: ['Safe handling in barns'], juniorVsSeniorDepth: 'Junior identifies the 6 dairy breeds; Senior scores cows on PDCA points and analyzes PTA (Predicted Transmitting Ability).', disallowedContent: ['Prescribing pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'PDCA Licensed Dairy Judge' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Clean, dry sand or deep shavings bedding', 'Milking sanitation (pre-dip, strip, wipe, attach, post-dip)', 'Teat dipping for mastitis prevention'], requiredIdSkills: ['Teat dip cups', 'Strip cup examination'], welfareSafetyPoints: ['Mastitis prevention and clean udder environment', 'Non-slip barn grooving preventing splits'], juniorVsSeniorDepth: 'Junior cleans stalls and washes calves; Senior executes proper parlor milking hygiene.', disallowedContent: ['Unprescribed intramammary infusions'], verificationStatus: 'Approved', verifiedBy: 'Extension Dairy Specialist' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Total Mixed Ration (TMR) feeding', 'High energy and protein demands of lactation', 'Clean water consumption (30-50 gal/day)'], requiredIdSkills: ['Corn silage vs alfalfa haylage', 'TMR mixer evaluation'], welfareSafetyPoints: ['Rumen acidosis and displaced abomasum (DA) prevention', 'Milk fever hypocalcemia prevention'], juniorVsSeniorDepth: 'Junior feeds calves fresh milk replacer; Senior calculates dry matter intake (DMI) and energy balance.', disallowedContent: ['Medicated milk replacer dosing alterations'], verificationStatus: 'Approved', verifiedBy: 'Dairy Nutrition Specialist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['California Mastitis Test (CMT) paddle for subclinical mastitis', 'Calf scours and pneumonia prevention', 'Normal vitals and transition cow monitoring'], requiredIdSkills: ['CMT paddle reagent testing', 'Bovine vitals check'], welfareSafetyPoints: ['Immediate veterinary treatment for toxic coliform mastitis', 'Isolation of diarrheic calves'], juniorVsSeniorDepth: 'Junior reads CMT paddle gel formation; Senior manages somatic cell count (SCC) records.', disallowedContent: ['Prescribing antibiotics for mastitis without vet'], verificationStatus: 'Approved', verifiedBy: 'DVM Dairy Specialist' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Gentle halter leading on left side', 'Never using a show stick (dairy cattle are led backward by hand on the halter)', 'Low-stress handling in parlor and pens'], requiredIdSkills: ['White leather show halter', 'Backwards walking posture'], welfareSafetyPoints: ['Preventing slip falls on wet parlor concrete'], juniorVsSeniorDepth: 'Junior leads dairy heifer smoothly; Senior demonstrates backward walk holding halter close to chin.', disallowedContent: ['Striking dairy cattle with objects'], verificationStatus: 'Approved', verifiedBy: 'Dairy Animal Welfare Board' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['DHI (Dairy Herd Information) milk production records', 'Breeding dates, gestation table (283 days), and calving dates', 'Medicine and milk withdrawal records'], requiredIdSkills: ['DHI record sheets', 'Calving calendar'], welfareSafetyPoints: ['Zero antibiotic residue in the human milk supply'], juniorVsSeniorDepth: 'Junior logs calf feed and weights; Senior analyzes lifetime lactation curves and somatic cell trends.', disallowedContent: ['Falsifying DHI records'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Dairy Committee' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Walking backward slowly and smoothly while leading heifer', 'Setting up rear feet first: rear foot closest to judge placed back', 'Maintaining cow head high and alert at all times'], requiredIdSkills: ['Hand on halter near chin', 'Rear foot placement according to judge location'], welfareSafetyPoints: ['Never letting animal break free in ring'], juniorVsSeniorDepth: 'Junior walks backward smoothly; Senior positions rear legs effortlessly based on judge angles.', disallowedContent: ['Excessive udder filling or tampering'], verificationStatus: 'Approved', verifiedBy: 'National Dairy Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['PDCA Show Ethics Code: zero tolerance for udder edema tampering or teat sealing', 'Pure milk supply stewardship', 'Gracious sportsmanship in the ring'], requiredIdSkills: ['Recognizing PDCA show infractions'], welfareSafetyPoints: ['Welfare of dairy cows during hot summer fairs'], juniorVsSeniorDepth: 'Junior respects ring decisions; Senior models ethical leadership for young dairy exhibitors.', disallowedContent: ['Prohibited teat alteration protocols'], verificationStatus: 'Approved', verifiedBy: 'PDCA Ethics Committee' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting SMART dairy enterprise goals', 'Dairy judging contests with oral reasons defense', 'Demonstrations on milk quality or calf management'], requiredIdSkills: ['Oral Reasons delivery', 'Dairy judging placement'], welfareSafetyPoints: ['Safe biosecurity during dairy tours'], juniorVsSeniorDepth: 'Junior gives milk quality demonstration; Senior delivers competitive oral reasons to dairy judge.', disallowedContent: ['Unlicensed veterinary diagnosis to the public'], verificationStatus: 'Approved', verifiedBy: 'Extension Dairy Faculty' }
    ]
  },
  dogs: {
    speciesName: 'Dogs',
    category: 'Companion Animals',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['7 AKC breed groups and historical functions', 'Conformation points (stop, withers, croup, hocks)', 'Mixed-breed All-American participation'], requiredIdSkills: ['AKC breed identification', 'Breed group functions', 'Anatomy landmarks'], welfareSafetyPoints: ['Safe handling avoiding dog-on-dog conflicts'], juniorVsSeniorDepth: 'Junior classifies breeds into the 7 AKC groups; Senior evaluates OFA clearances and canine biomechanics.', disallowedContent: ['Prescribing veterinary pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'AKC / 4-H Dog Advisory Panel' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Crate as a safe positive den (never punishment)', 'Grooming tools: slicker brush, undercoat rake, nail trimmers, styptic powder', 'Preventing heatstroke in vehicles'], requiredIdSkills: ['Grooming brushes', 'Styptic powder application'], welfareSafetyPoints: ['Never leaving dogs in parked cars', 'Sizing crates so dog can stand, turn, and lie down'], juniorVsSeniorDepth: 'Junior grooms and brushes daily; Senior computes canine athletic conditioning programs.', disallowedContent: ['Home surgery on ear hematomas'], verificationStatus: 'Approved', verifiedBy: 'Certified Canine Specialist' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Canine omnivore requirements', 'AAFCO feeding labels by life stage', 'Deadly toxins: chocolate, xylitol, grapes/raisins, onions/garlic'], requiredIdSkills: ['Reading dog food guaranteed analysis', 'Identifying toxic foods'], welfareSafetyPoints: ['Emergency recognition of xylitol and grape toxicity', 'WSAVA 1-9 Body Condition Scoring'], juniorVsSeniorDepth: 'Junior identifies toxic foods to avoid; Senior calculates Resting Energy Requirements (RER) and evaluates BCS.', disallowedContent: ['Prescription diet formulations without veterinarian'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Nutritionist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['Core vaccines (Rabies, DHPP) vs non-core', 'Heartworm mosquito transmission and testing', 'Normal vitals: Temp (100.5-102.5°F), Capillary Refill Time (< 2s)'], requiredIdSkills: ['Vital signs check', 'Recognizing shock/pale gums'], welfareSafetyPoints: ['Recognizing Gastric Dilatation-Volvulus (GDV / Bloat) as emergency', 'Mandatory rabies vaccination'], juniorVsSeniorDepth: 'Junior recognizes normal gum color and vitals; Senior manages parvovirus biocontainment protocols.', disallowedContent: ['Prescribing prescription anthelmintics or pain relievers (never human ibuprofen/acetaminophen)'], verificationStatus: 'Approved', verifiedBy: 'DVM Canine Advisory Committee' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Reading stress signals: whale eye, lip licking, yawning, freezing', 'Ladder of Aggression and bite prevention', 'Positive Reinforcement (R+) and marker timing'], requiredIdSkills: ['Reading subtle body language cues', 'Clicker / verbal marker timing'], welfareSafetyPoints: ['Never punishing a growl', 'Safe greetings asking owner first'], juniorVsSeniorDepth: 'Junior learns to "Ask First" and spot stress cues; Senior applies systematic desensitization and counter-conditioning.', disallowedContent: ['Severe aversive tools or physical punishment'], verificationStatus: 'Approved', verifiedBy: 'Certified Canine Behavior Consultant' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['Official signed rabies certificate and county license', 'Vaccination and heartworm preventative logs', 'Expense ledger for food, veterinary care, and equipment'], requiredIdSkills: ['Rabies certificate validation', 'Training log documentation'], welfareSafetyPoints: ['Keeping rabies vaccine records up to date for public safety'], juniorVsSeniorDepth: 'Junior maintains daily care sticker log; Senior conducts lifetime canine ownership budget analysis.', disallowedContent: ['Forging veterinary rabies signatures'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Dog Superintendent' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Breed-specific stacking (table vs floor, hand stack vs free stack)', 'Ring patterns: Triangle, L, T, Down-and-Back', 'Bite examination presentation and courtesy spacing (6-8 ft)'], requiredIdSkills: ['Ring pattern execution', 'Presenting teeth/bite to judge'], welfareSafetyPoints: ['Maintaining safe distance between strange dogs in ring'], juniorVsSeniorDepth: 'Junior stacks squarely and executes Down-and-Back; Senior free-stacks and navigates complex ring geometry.', disallowedContent: ['Using cosmetic dyes or tranquilizers on show dogs'], verificationStatus: 'Approved', verifiedBy: '4-H Dog Showmanship Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Compassionate training prioritizing canine well-being over ribbons', 'Zero tolerance for sedatives or calming drugs in competition', 'Advocating against breed bias and supporting shelter rescues'], requiredIdSkills: ['Ethical sportsmanship scenarios'], welfareSafetyPoints: ['Retiring or scratching limping or stressed dogs'], juniorVsSeniorDepth: 'Junior practices gracious sportsmanship; Senior tackles welfare dilemmas in canine sports.', disallowedContent: ['Administering tranquilizers or calming cocktails'], verificationStatus: 'Approved', verifiedBy: 'Dog Ethics Advisory Panel' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['SMART goals for obedience, agility, or rally', '10 test exercises of the AKC Canine Good Citizen (CGC)', 'Demonstrations and therapy dog community outreach'], requiredIdSkills: ['CGC 10 steps', 'Public speaking demonstration'], welfareSafetyPoints: ['Welfare of dogs during community therapy visits'], juniorVsSeniorDepth: 'Junior presents dog trick demonstration to club; Senior explains ADA service animal vs therapy dog distinctions.', disallowedContent: ['Falsely presenting pets as certified service dogs'], verificationStatus: 'Approved', verifiedBy: 'Extension 4-H Dog Specialist' }
    ]
  },
  horses: {
    speciesName: 'Horses & Ponies',
    category: 'Equine Livestock',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Breeds', requiredObjectives: ['Draft, Light Horse, Pony categories (Pony < 14.2 hands)', 'Measuring height in hands (1 hand = 4 inches)', 'Major breeds, coat colors, and facial/leg markings'], requiredIdSkills: ['Breed identification', 'Hand measurement', 'Face markings: Star, Strip, Snip, Blaze'], welfareSafetyPoints: ['Safe approach angles around large equines'], juniorVsSeniorDepth: 'Junior measures height in hands and identifies colors; Senior evaluates conformation, unsoundnesses vs blemishes, and genetic disorders (HYPP).', disallowedContent: ['Prescribing veterinary pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'CHA Equine Specialist' },
      { moduleId: 'daily_care', title: 'Daily Care & Housing', requiredObjectives: ['Safe stall dimensions (min 12x12 ft) and safe fencing (never barbed wire)', 'Grooming tools: curry comb, dandy brush, soft brush, hoof pick', 'Hoof care: farrier trimming/shoeing every 6-8 weeks'], requiredIdSkills: ['Grooming sequence', 'Hoof picking heel to toe avoiding frog'], welfareSafetyPoints: ['Barbed wire fence bans', 'Farrier schedule preventing lameness'], juniorVsSeniorDepth: 'Junior demonstrates step-by-step grooming; Senior evaluates hoof-pastern axis (HPA) and barn ventilation dynamics.', disallowedContent: ['DIY farriery surgery on abscesses'], verificationStatus: 'Approved', verifiedBy: 'Equine Extension Educator' },
      { moduleId: 'nutrition', title: 'Nutrition Principles', requiredObjectives: ['Hindgut fermenter physiology (cecum and colon microbial fermentation)', 'Forage requirement: minimum 1.5-2.0% body weight daily in hay/pasture', 'Digestive emergencies: Colic and Laminitis/Founder from carbohydrate overload'], requiredIdSkills: ['Quality hay evaluation', 'Clean water (10-12 gal/day)', 'Weighing feed vs scooping'], welfareSafetyPoints: ['Colic recognition as immediate veterinary emergency', 'Sawhorse stance recognition in acute founder'], juniorVsSeniorDepth: 'Junior understands forage-first feeding; Senior formulates digestible energy rations and tests hay for Non-Structural Carbohydrates (NSC < 10-12%).', disallowedContent: ['Prescribing veterinary colic drugs without vet consult'], verificationStatus: 'Approved', verifiedBy: 'Equine Nutrition Specialist' },
      { moduleId: 'health_biosecurity', title: 'Health Observation & Biosecurity Awareness', requiredObjectives: ['Normal vitals: Temp (99-101.5°F), Heart Rate (28-44 bpm), Respiration (8-16 bpm), Gut sounds in all 4 quadrants', 'Core vaccines: Rabies, Tetanus, EEE/WEE, West Nile Virus', 'Annual Coggins test for Equine Infectious Anemia (EIA)'], requiredIdSkills: ['Stethoscope gut sound check', 'Coggins certificate validation'], welfareSafetyPoints: ['Zero delay in veterinary call for silent gut colic', 'Eye trauma emergency rule (never use steroids without fluorescein stain)'], juniorVsSeniorDepth: 'Junior checks vital signs and Coggins paper; Senior executes Selective Targeted Deworming using Quantitative Fecal Egg Counts.', disallowedContent: ['Prescribing prescription medications or steroids for eyes'], verificationStatus: 'Approved', verifiedBy: 'DVM Equine Specialist' },
      { moduleId: 'handling_welfare', title: 'Handling & Welfare', requiredObjectives: ['Blind spots (directly behind and beneath nose) and 45-degree shoulder approach', 'Mandatory safety gear: ASTM/SEI certified riding helmet and heeled boots', 'Quick-release knot and never wrapping lead ropes around hands'], requiredIdSkills: ['Tying quick-release knot', 'Leading on near side with folded lead'], welfareSafetyPoints: ['Catastrophic hand degloving prevention (never wrapping ropes)', 'ASTM/SEI helmet rule'], juniorVsSeniorDepth: 'Junior ties quick-release knots securely; Senior applies Five Domains of Animal Welfare and non-coercive horsemanship.', disallowedContent: ['Use of severe wire bits or soring devices'], verificationStatus: 'Approved', verifiedBy: 'Certified Horsemanship Association' },
      { moduleId: 'record_keeping', title: 'Record Keeping', requiredObjectives: ['Negative Coggins test laboratory certificate', 'Farrier trimming log and dental floating dates', 'Equine enterprise expense accounting'], requiredIdSkills: ['Weight tape calculations', 'Record book maintenance'], welfareSafetyPoints: ['Maintaining mandatory state health papers for fair entry'], juniorVsSeniorDepth: 'Junior tracks feed and farrier visits; Senior conducts enterprise budgeting distinguishing fixed vs variable costs.', disallowedContent: ['Forging Coggins documents'], verificationStatus: 'Approved', verifiedBy: 'State 4-H Equine Committee' },
      { moduleId: 'showmanship', title: 'Showmanship Foundations', requiredObjectives: ['Mastering the Quarter System (handler never in same quadrant as judge)', 'Precision maneuvers: walk, trot, crisp square halt, pivot on haunches', 'Show halter fit and lead shank safety'], requiredIdSkills: ['Quarter System movement', 'Pivot on the haunches'], welfareSafetyPoints: ['Never wrapping chain shank around hand'], juniorVsSeniorDepth: 'Junior executes the 4 quadrants smoothly; Senior maneuvers intricate patterns and explains breed in-hand nuances.', disallowedContent: ['Tranquilizing show horses before classes'], verificationStatus: 'Approved', verifiedBy: 'National Equine Judge' },
      { moduleId: 'ethics_character', title: 'Ethics & Character', requiredObjectives: ['Horse Protection Act federal compliance: zero tolerance for soring', 'Zero tolerance for sedatives, tranquilizers, or tail blocking', 'Sportsmanship in warm-up arenas and ring'], requiredIdSkills: ['Recognizing prohibited practices', 'Warm-up arena etiquette'], welfareSafetyPoints: ['Cooling horse down and offering water before handler rest'], juniorVsSeniorDepth: 'Junior puts pony needs first; Senior champions public trust and Social License to Operate (SLO) in equestrian sports.', disallowedContent: ['Administering tranquilizers or illegal calming paste cocktails'], verificationStatus: 'Approved', verifiedBy: 'Equine Ethics Review Board' },
      { moduleId: 'goals_communication', title: 'Project Goals & Communication', requiredObjectives: ['Setting SMART horsemanship goals', 'Hippology, Horse Bowl, and Oral Reasons judging contests', 'Public demonstration of tack cleaning, safety, or saddle fit'], requiredIdSkills: ['Hippology station ID', 'Delivering comparative Oral Reasons'], welfareSafetyPoints: ['Equine safety during club educational demonstrations'], juniorVsSeniorDepth: 'Junior demonstrates grooming tool to club; Senior delivers comparative Oral Reasons in horse judging.', disallowedContent: ['Unlicensed veterinary diagnosis to the public'], verificationStatus: 'Approved', verifiedBy: 'Extension Equine Faculty' }
    ]
  },
  vet_science: {
    speciesName: 'Veterinary Science Knowledge Track',
    category: 'Veterinary & Comparative Science',
    modules: [
      { moduleId: 'basics_breeds', title: 'Basics & Systems Anatomy', requiredObjectives: ['Comparative body systems: Skeletal, Circulatory, Respiratory, Digestive', 'Monogastric vs Ruminant vs Hindgut Fermenter digestive physiology', 'Directional terminology: Cranial, Caudal, Dorsal, Ventral, Medial, Lateral'], requiredIdSkills: ['Organ identification', 'Directional planes', 'Comparative skulls and teeth'], welfareSafetyPoints: ['Understanding species anatomical limits'], juniorVsSeniorDepth: 'Junior classifies digestive designs; Senior evaluates renal counter-current multiplication and endocrine feedback.', disallowedContent: ['DIY surgical instructions'], verificationStatus: 'Approved', verifiedBy: 'DVM Veterinary Science Faculty' },
      { moduleId: 'daily_care', title: 'Clinical Care, Safety & Restraint', requiredObjectives: ['OSHA clinical safety standards and PPE', 'Humane restraint: feline towel burrito, canine lateral recumbency, bovine headgate', 'Immediate puncture-proof red OSHA Sharps container disposal'], requiredIdSkills: ['Towel wrap restraint', 'Sharps disposal', 'Basket muzzle application'], welfareSafetyPoints: ['Needle-stick injury prevention', 'Fear-Free handling minimizing patient FAS'], juniorVsSeniorDepth: 'Junior practices towel wraps and sharps rules; Senior understands sedation pharmacology and reversal agents.', disallowedContent: ['Unsupervised administration of controlled pharmaceuticals'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Hospital Safety Board' },
      { moduleId: 'nutrition', title: 'Comparative Nutrition & Metabolic Health', requiredObjectives: ['6 essential nutrient classes (water, protein, fat, carbs, vitamins, minerals)', 'Species-specific needs: Taurine in cats, Vitamin C in cavies', 'Metabolic diseases: Bovine Milk Fever (hypocalcemia) and Ketosis'], requiredIdSkills: ['Feed tag analysis', 'Identifying deficiency symptoms'], welfareSafetyPoints: ['Refeeding syndrome prevention in starved animals', 'Urinary calculi prevention'], juniorVsSeniorDepth: 'Junior learns obligate carnivore needs; Senior calculates Resting Energy Requirements (RER) and manages renal diets.', disallowedContent: ['Prescribing prescription medical diets without vet authorization'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Nutritionist' },
      { moduleId: 'health_biosecurity', title: 'Disease Principles, Immunology & Biosecurity', requiredObjectives: ['Pathogen classes: Viruses, Bacteria, Fungi, Protozoa, Prions', 'Innate vs Adaptive immunity and maternal colostrum transfer', 'One Health paradigm: 75% of emerging human diseases are zoonotic'], requiredIdSkills: ['Identifying disease vectors', 'Biosecurity sanitation agents'], welfareSafetyPoints: ['Veterinary Feed Directive (VFD) antimicrobial stewardship', 'Zoonotic infection containment'], juniorVsSeniorDepth: 'Junior distinguishes pathogens and vaccines; Senior models epidemiological R0 disease spread and plasmid resistance.', disallowedContent: ['Off-label antibiotic dosing protocols'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Epidemiologist' },
      { moduleId: 'handling_welfare', title: 'Parasitology & Diagnostics', requiredObjectives: ['Endoparasites (roundworms, tapeworms, hookworms, coccidia) vs Ectoparasites', 'Fecal flotation specific gravity principles', 'Clinical tools: Refractometer, Centrifuged PCV (Buffy coat), Stethoscope'], requiredIdSkills: ['Reading fecal float microscope slides', 'Reading PCV and total solids'], welfareSafetyPoints: ['Safe handling of zoonotic parasite samples (Toxocara visceral larva migrans)'], juniorVsSeniorDepth: 'Junior identifies worms under microscope; Senior evaluates point-of-care ELISA and PCR diagnostic assays.', disallowedContent: ['Prescribing prescription antiparasitics without vet diagnosis'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Parasitologist' },
      { moduleId: 'record_keeping', title: 'Clinical Records & Medical Charting', requiredObjectives: ['SOAP clinical format (Subjective, Objective, Assessment, Plan)', 'Medical legal record integrity (single strike-through corrections, timestamps)', 'Food animal drug withdrawal periods for public food safety'], requiredIdSkills: ['SOAP chart documentation', 'Reading prescription labels'], welfareSafetyPoints: ['Zero pharmaceutical contamination of the human food supply'], juniorVsSeniorDepth: 'Junior categorizes exam notes into S, O, A, and P; Senior analyzes veterinary jurisprudence and EMR audit logs.', disallowedContent: ['Falsifying medical records or altering dates'], verificationStatus: 'Approved', verifiedBy: 'Veterinary State Board Counsel' },
      { moduleId: 'showmanship', title: 'Surgical Foundations & Aseptic Technique', requiredObjectives: ['Sterilization vs Disinfection vs Antisepsis', 'Pressurized steam autoclave parameters (250°F / 121°C for 15-30 min at 15 psi)', 'Surgical hand scrub holding hands above elbows and sterile field boundaries'], requiredIdSkills: ['Core surgical instruments (hemostats, scalpel, needle holders)', 'Surgical gown and glove gloving'], welfareSafetyPoints: ['Sterile field contamination prevention'], juniorVsSeniorDepth: 'Junior identifies surgical instruments and asepsis rules; Senior evaluates hemodynamic monitoring (capnography, SpO2) and reflexes.', disallowedContent: ['Performing home surgical procedures'], verificationStatus: 'Approved', verifiedBy: 'Board Certified Veterinary Surgeon' },
      { moduleId: 'ethics_character', title: 'Bioethics, Welfare & Veterinary Oath', requiredObjectives: ['Veterinarian’s Oath: relieving animal suffering and protecting public health', 'The Five Freedoms of Animal Welfare', 'The 3 Rs in research: Replacement, Reduction, Refinement'], requiredIdSkills: ['Welfare assessment frameworks', 'Bioethical decision making'], welfareSafetyPoints: ['Compassionate humane euthanasia guidelines relieving untreatable pain'], juniorVsSeniorDepth: 'Junior applies the Five Freedoms; Senior analyzes IACUC protocols and disaster triage ethics.', disallowedContent: ['Advocating unscientific or cruel procedures'], verificationStatus: 'Approved', verifiedBy: 'Veterinary Bioethics Chair' },
      { moduleId: 'goals_communication', title: 'Career Pathways, One Health & Leadership', requiredObjectives: ['Veterinary team roles: DVM (diagnose, prescribe, surgery), LVT/CVT, Vet Assistant', 'Academic pathway: STEM degrees, contact shadowing hours, NAVLE', 'One Health public service and rabies clinic leadership'], requiredIdSkills: ['Career role distinction', 'Public science communication'], welfareSafetyPoints: ['Public education on animal bite prevention and rabies'], juniorVsSeniorDepth: 'Junior explores animal care careers; Senior prepares veterinary school admissions portfolios and coordinates youth clinics.', disallowedContent: ['Practicing veterinary medicine without a state license'], verificationStatus: 'Approved', verifiedBy: 'Veterinary College Admissions Director' }
    ]
  }
};

/**
 * Validates a species pack against the Content Matrix Checklist.
 * Ensures:
 * 1. All 9 standard modules exist.
 * 2. Each module contains required objectives and age-differentiated content.
 * 3. No disallowed medical/prescriptive terms are present in the text.
 */
export function validateSpeciesPackMatrix(speciesPack) {
  const speciesId = speciesPack.id;
  const matrixSpec = CONTENT_MATRIX[speciesId];

  if (!matrixSpec) {
    return {
      isValid: false,
      speciesId,
      error: `No Content Matrix specification found for species: ${speciesId}`,
      moduleAudit: [],
      violations: []
    };
  }

  const moduleAudit = [];
  const violations = [];

  matrixSpec.modules.forEach(reqMod => {
    const packMod = speciesPack.modules.find(m => 
      m.id === reqMod.moduleId || 
      m.topicId === reqMod.moduleId ||
      (reqMod.moduleId === 'goals_communication' && (m.id === 'communication_goals' || m.topicId === 'communication_goals'))
    );

    if (!packMod) {
      moduleAudit.push({
        moduleId: reqMod.moduleId,
        title: reqMod.title,
        status: 'Missing Module in Species Pack',
        passed: false
      });
      return;
    }

    // Check age tracks
    const hasCloverbud = !!packMod.ageContent?.cloverbud;
    const hasJunior = !!packMod.ageContent?.junior;
    const hasIntermediate = !!packMod.ageContent?.intermediate;
    const hasSenior = !!packMod.ageContent?.senior;

    // Check for disallowed terms in text content
    const modString = JSON.stringify(packMod).toLowerCase();
    const foundDisallowed = DISALLOWED_MEDICAL_TERMS.filter(term => modString.includes(term.toLowerCase()));

    if (foundDisallowed.length > 0) {
      violations.push({
        moduleId: reqMod.moduleId,
        disallowedFound: foundDisallowed
      });
    }

    moduleAudit.push({
      moduleId: reqMod.moduleId,
      title: reqMod.title,
      hasObjectives: (packMod.objectives && packMod.objectives.length >= 2),
      hasAllAgeTracks: (hasCloverbud && hasJunior && hasIntermediate && hasSenior),
      cleanOfDisallowed: foundDisallowed.length === 0,
      verifiedBy: reqMod.verifiedBy,
      status: reqMod.verificationStatus,
      passed: (hasCloverbud && hasJunior && hasIntermediate && hasSenior && foundDisallowed.length === 0)
    });
  });

  const allPassed = moduleAudit.every(m => m.passed) && moduleAudit.length === 9;

  return {
    isValid: allPassed,
    speciesId,
    speciesName: matrixSpec.speciesName,
    category: matrixSpec.category,
    moduleAudit,
    violations,
    totalModules: moduleAudit.length,
    passedModules: moduleAudit.filter(m => m.passed).length
  };
}

export function getAllContentMatrixSummaries(speciesPacks) {
  return speciesPacks.map(pack => validateSpeciesPackMatrix(pack));
}
