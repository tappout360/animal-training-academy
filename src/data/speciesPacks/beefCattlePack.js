// WarrenWise Youth Animal Training Academy
// Species Pack: Beef Cattle (Bos taurus / Bos indicus) - Market Steers & Breeding Heifers
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const BEEF_CATTLE_PACK = {
  id: 'beef_cattle',
  name: 'Beef Cattle Project Academy',
  species: 'Beef Cattle (Steers & Heifers)',
  category: 'Large Livestock',
  icon: 'Shield',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-20',
  verifiedBy: 'Extension Beef Specialist & NCBA Youth Committee',
  description: 'Comprehensive 4-H beef curriculum covering British vs Continental breeds, ruminant nutrition, show halter and show stick handling, USDA Quality/Yield grading, and ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate British breeds (Angus, Hereford, Shorthorn) vs Continental breeds (Charolais, Simmental, Limousin) vs Bos indicus (Brahman)',
        'Identify market steer conformation (frame size, muscling, rib shape, trimness)',
        'Understand breeding heifer reproductive soundness and maternal traits'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Giants & Beef Breeds!',
          readAloud: 'Beef cattle are big, strong, gentle animals! Black Angus cattle are solid black, and Herefords have red bodies with white faces.',
          sections: [{ title: 'Recognizing Beef Cattle', body: 'Look at the color of their hair coat! Black Angus have no horns and all black hair. Herefords have red bodies and white faces.' }],
          quickCheck: { question: 'Which beef breed is solid black with no horns and is famous for high quality marbling?', options: ['Black Angus', 'Hereford', 'Charolais'], correctIndex: 0, feedback: 'Black Angus are polled (no horns) and all black!' }
        },
        junior: {
          headline: 'British vs Continental Breeds & Market Conformation',
          sections: [
            {
              title: 'British vs Continental Differences',
              body: '• British Breeds (Angus, Hereford, Red Angus, Shorthorn): Smaller to moderate mature frame, early maturing, high marbling quality grade, maternal calving ease.\n• Continental / European Exotics (Charolais, Simmental, Limousin, Gelbvieh): Larger frame, heavier muscling, high lean cutout yield grade, later maturing.'
            }
          ],
          quickCheck: { question: 'Which group of beef cattle originated in Britain and is known for earlier maturity and higher marbling quality?', options: ['British Breeds (Angus, Hereford, Shorthorn)', 'Continental Breeds (Charolais, Limousin)', 'Brahman breeds'], correctIndex: 0, feedback: 'British breeds excel in early maturity and marbling.' }
        },
        intermediate: {
          headline: 'USDA Quality Grades (Prime, Choice, Select) vs Yield Grades (1-5)',
          sections: [{ title: 'Quality vs Yield Grades', body: '• Quality Grade predicts palatability (tenderness, juiciness, flavor) based on marbling (intramuscular fat) and physiological maturity.\n• Yield Grade (1 through 5) estimates retail cutability of boneless, closely trimmed retail cuts based on hot carcass weight, ribeye area, 12th-rib fat thickness, and kidney, pelvic, and heart (KPH) fat.' }],
          quickCheck: { question: 'What does USDA Quality Grade evaluate in beef carcasses?', options: ['Expected eating palatability, tenderness, and juiciness based on marbling', 'The length of the hide', 'Bone weight only'], correctIndex: 0, feedback: 'Quality grades evaluate marbling and maturity for tenderness and flavor.' }
        },
        senior: {
          headline: 'Expected Progeny Differences (EPDs) & Carcass Ultrasound Technology',
          sections: [{ title: 'Using EPDs in Heifer Selection', body: 'Evaluate Calving Ease Direct (CED), Birth Weight (BW), Weaning Weight (WW), Yearling Weight (YW), and Marbling (Marb) EPDs alongside real-time carcass ultrasound ribeye measurements.' }],
          quickCheck: { question: 'What EPD should be prioritized when selecting a beef bull to breed to first-calf virgin heifers?', options: ['High Calving Ease Direct (CED) and low Birth Weight (BW)', 'Maximum Yearling Weight only', 'High Mature Height'], correctIndex: 0, feedback: 'High Calving Ease Direct minimizes dystocia risks in young heifers.' }
        }
      },
      quizQuestions: [
        { id: 'bf_bb_q1', question: 'Which beef breed is recognized by its solid white or creamy coat and large muscular Continental frame?', options: ['Charolais', 'Angus', 'Hereford'], correctIndex: 0, explanation: 'Charolais originated in France and is recognized by its white coat and heavy muscling.', division: 'junior' }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Provide safe fencing (pipe, cable, or stout high-tensile wire), dry bedding packs, and windbreaks',
        'Establish daily grooming, hair blowing, and skin washing routines for show conditioning',
        'Manage fresh water troughs (mature steers drink 10 to 20+ gallons daily)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Brushing & Blowing Hair!',
          readAloud: 'Show cattle love a refreshing cold bath and brushing! We brush their hair forward every day to make their coat fluffy and clean.',
          sections: [{ title: 'Daily Barn Chores', body: 'Check their big water tub every morning to make sure it is filled with cool, clean drinking water!' }],
          quickCheck: { question: 'How much water does a big steer drink on a warm day?', options: ['10 to 20 gallons or more', 'One glass', 'Zero gallons'], correctIndex: 0, feedback: 'Cattle drink 10 to 20+ gallons of fresh water every day!' }
        },
        junior: {
          headline: 'Hair Care, Blower Training & Facilities Safety',
          sections: [
            {
              title: 'Daily Hair Training',
              body: 'Show cattle hair is trained daily: wash with cattle shampoo, rinse thoroughly, blow dry with a livestock blower while combing hair upward and forward at a 45-degree angle to build hair pop and body depth.'
            },
            {
              title: 'Stout Penning',
              body: 'A 1,300 lb animal requires heavy pipe gates, secure latches, and clean dry bedding packs (pine shavings or cedar fiber) to protect foot pads.'
            }
          ],
          quickCheck: { question: 'In what direction should you comb show cattle hair while using a livestock blower to train the hair to stand up?', options: ['Forward and upward at a 45-degree angle', 'Straight down flat against the skin', 'Backwards toward the tail only'], correctIndex: 0, feedback: 'Combing forward and upward trains hair to stand up, creating fullness.' }
        },
        intermediate: {
          headline: 'Heat Stress Management & Chilled Barn (Cooler) Technology',
          sections: [{ title: 'Combatting Heat Index in Feedlots', body: 'Cattle with dark hides and heavy rumen fermentation are prone to heat stress above 80°F with high humidity. Provide shades, industrial circulation fans, and misters.' }],
          quickCheck: { question: 'Why does high humidity intensify heat stress in beef cattle?', options: ['It slows evaporative cooling through panting and sweating', 'It turns feed sour', 'It makes hair curl'], correctIndex: 0, feedback: 'High humidity blocks respiratory evaporative heat dissipation.' }
        },
        senior: {
          headline: 'Feedlot Drainage Engineering & Environmental Manure Plans',
          sections: [{ title: 'Nutrient Management Plans (NMP)', body: 'Manage pen slopes (2-4% slope away from feed bunks) and settling basins to prevent agricultural phosphorus and nitrogen runoff into surface waterways.' }],
          quickCheck: { question: 'What is the ideal lot slope for open beef cattle pens to ensure positive water drainage without erosion?', options: ['2% to 4% slope away from feed bunks', '50% steep slope', 'Flat with zero slope'], correctIndex: 0, feedback: '2-4% slope provides positive drainage without pooling or excessive erosion.' }
        }
      },
      quizQuestions: [
        { id: 'bf_dc_q1', question: 'What piece of livestock equipment uses high-velocity warm air to dry hair and train it to stand up for show day?', options: ['Livestock blower', 'Garden hose', 'Rotary lawnmower'], correctIndex: 0, explanation: 'Livestock blowers dry hair quickly and train follicles to stand upright.', division: 'junior' }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: [
        'Ruminant digestion: fermenting cellulose in the rumen into volatile fatty acids',
        'Balance high-energy finishing rations (steam-flaked corn, distiller grains) with effective fiber',
        'Prevent acute Rumen Acidosis and Bloat through gradual feed step-up transitions'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Chewing the Cud with Big Steers!',
          readAloud: 'Steers eat yummy sweet hay and cracked grain. When they lie down and chew their cud, their tummy is working happily!',
          sections: [{ title: 'How Cattle Eat', body: 'Cattle don’t have top front teeth! They use their long rough tongue to wrap around grass and pull it into their mouth.' }],
          quickCheck: { question: 'Do cows have top front teeth?', options: ['No, they have a tough dental pad instead of top front teeth', 'Yes, they have 20 sharp teeth', 'Only in winter'], correctIndex: 0, feedback: 'Cattle have a hard dental pad on top instead of incisors!' }
        },
        junior: {
          headline: 'Rumen Fermentation, Stepping Up Feed & Preventing Bloat',
          sections: [
            {
              title: 'The Stepping-Up Period',
              body: 'Never switch a steer from hay to high-grain feed overnight! Rumen microbes need 2 to 3 weeks of gradual adjustment (step-up rations). Sudden grain spikes cause deadly lactic acidosis and frothy bloat.'
            }
          ],
          quickCheck: { question: 'Why must changes from roughage to high-grain finishing rations be made gradually over 2 to 3 weeks?', options: ['To allow rumen microbes time to adapt and prevent acute lactic acidosis and bloat', 'To make chores slower', 'Cattle forget how to eat'], correctIndex: 0, feedback: 'Gradual feed transitions give rumen microflora time to adjust safely.' }
        },
        intermediate: {
          headline: 'Net Energy for Maintenance (NEm) vs Net Energy for Gain (NEg)',
          sections: [{ title: 'The California Net Energy System', body: 'Total digestible energy is split into NEm (energy required to maintain zero weight change) and NEg (energy deposited as muscle and adipose tissue). Finishing rations maximize NEg.' }],
          quickCheck: { question: 'In beef cattle ration balancing, what does NEg represent?', options: ['Net Energy for Gain (energy available for tissue growth after maintenance is met)', 'Non-Essential grass', 'Negative energy'], correctIndex: 0, feedback: 'NEg measures the energy deposited directly into carcass weight gain.' }
        },
        senior: {
          headline: 'Subacute Ruminal Acidosis (SARA), Liver Abscesses & Ionophores',
          sections: [{ title: 'Ionophores in Finishing Rations', body: 'Ionophores (Monensin / Lasalocid) alter rumen bacterial populations, inhibiting Gram-positive lactic acid producers while selecting for propionate producers. This stabilizes rumen pH and prevents liver abscesses.' }],
          quickCheck: { question: 'How do ionophores like Monensin improve feed efficiency in finishing beef cattle?', options: ['They shift rumen fermentation toward propionic acid and reduce methane loss', 'They cause cattle to stop drinking', 'They act as artificial colorings'], correctIndex: 0, feedback: 'Ionophores increase propionate production and suppress acidosis.' }
        }
      },
      quizQuestions: [
        { id: 'bf_nu_q1', question: 'What is the typical Average Daily Gain (ADG) targeted for a finished market show steer on feed?', options: ['2.5 to 3.5 lbs per day', '0.1 lbs per day', '20 lbs per day'], correctIndex: 0, explanation: 'Steers on finishing feed gain 2.5 to 3.5 lbs per day.', division: 'junior' }
      ]
    },
    {
      id: 'health_biosecurity',
      topicId: 'health_biosecurity',
      title: 'Health Observation & Biosecurity',
      order: 4,
      estimatedMinutes: 25,
      requiresSafetyReview: true,
      objectives: [
        'Recognize Bovine Respiratory Disease Complex (BRDC / "Shipping Fever")',
        'Identify signs of Pinkeye (Infectious Bovine Keratoconjunctivitis)',
        'Administer 7-way or 8-way Clostridial vaccines (Blackleg) and core respiratory viral antigens',
        'Implement strict 30-day show quarantine and biosecurity disinfection'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Bright Eyes & Clean Barns!',
          readAloud: 'Healthy steers have bright clear eyes, a moist cool nose, and love stretching their legs in clean straw.',
          sections: [{ title: 'The Daily Check', body: 'Look at your steer’s eyes every morning. If eyes look watery or red, tell an adult right away!' }],
          quickCheck: { question: 'What does a clean moist nose and bright clear eyes tell you about your steer?', options: ['Your steer is healthy and feeling good', 'The steer is sick', 'The steer needs a blanket'], correctIndex: 0, feedback: 'Moist noses and clear bright eyes are classic signs of cattle health!' }
        },
        junior: {
          headline: 'Shipping Fever, Pinkeye & Blackleg Vaccination',
          sections: [
            {
              title: 'Bovine Respiratory Disease (BRDC)',
              body: 'Stress from hauling, weather changes, and crowds at fairs weakens lung immunity, allowing viral (IBR, BVD, BRSV) and bacterial (Mannheimia haemolytica) pathogens to cause pneumonia (Shipping Fever). Symptoms: drooping ears, crusty nose, fever > 103°F, coughing.'
            },
            {
              title: 'Blackleg (Clostridial Disease)',
              body: 'Clostridium chauvoei spores in soil infect cattle, causing rapid, fatal muscle necrosis and swelling with crackling gas under the skin. Prevented by routine 7-way clostridial vaccination.'
            }
          ],
          quickCheck: {
            question: 'What fatal bacterial disease produces painful swelling with crackling gas under the skin and is prevented by a 7-way vaccine?',
            options: ['Blackleg (Clostridium chauvoei)', 'Pinkeye', 'Foot rot'],
            correctIndex: 0,
            feedback: '7-way clostridial vaccine protects against Blackleg and malignant edema.'
          }
        },
        intermediate: {
          headline: 'Bovine Viral Diarrhea (BVD) Persistently Infected (PI) Calves',
          sections: [{ title: 'BVD Persistently Infected Animals', body: 'When a pregnant cow is infected with BVD virus between days 40–120 of gestation, the fetal immune system recognizes the virus as "self." The calf is born Persistently Infected (PI), shedding billions of viral particles for life. Ear notch antigen testing eliminates PI carriers.' }],
          quickCheck: { question: 'How is a BVD Persistently Infected (PI) calf detected prior to introducing it to your herd?', options: ['Ear notch skin tissue antigen test (ELISA or PCR)', 'Looking at the teeth', 'Taking the calf’s temperature'], correctIndex: 0, feedback: 'Ear notch tissue tests detect PI calves shedding BVD virus.' }
        },
        senior: {
          headline: 'Veterinary Feed Directive (VFD), Antimicrobial Stewardship & VCPR',
          sections: [{ title: 'The Veterinary Feed Directive (VFD)', body: 'Federal VFD law requires a written order from a licensed veterinarian with a valid VCPR before medically important antibiotics (chlortetracycline, tylosin) can be blended into livestock feed. Off-label use of VFD drugs in feed is strictly illegal.' }],
          quickCheck: { question: 'What federal regulation mandates a written veterinary order before medically important antibiotics can be included in cattle feed?', options: ['The Veterinary Feed Directive (VFD)', 'The Meat Inspection Act', 'NPIP regulations'], correctIndex: 0, feedback: 'The VFD governs antibiotic use in livestock feed to prevent drug resistance.' }
        }
      },
      quizQuestions: [
        { id: 'bf_hb_q1', question: 'What is the normal resting rectal temperature for a healthy beef steer or heifer?', options: ['101.5°F (range 100.5°F to 102.5°F)', '95.0°F', '108.0°F'], correctIndex: 0, explanation: 'Normal beef cattle body temperature is 101.5°F; temperatures above 103°F indicate fever.', division: 'junior' }
      ]
    },
    {
      id: 'handling_welfare',
      topicId: 'handling_welfare',
      title: 'Handling & Welfare',
      order: 5,
      estimatedMinutes: 20,
      requiresSafetyReview: true,
      objectives: [
        'Lead safely with leather show halter and lead strap (never wrap lead around hand)',
        'Master the Show Stick for scratching, calming, and foot placement',
        'Understand bovine flight zones, blind spots behind hips, and kick zones',
        'Humane handling and tie-out knot safety'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Safe Hands & Gentle Halters!',
          readAloud: 'Steers are very big, so we always practice being safe! Never wrap a lead rope around your hand.',
          sections: [{ title: 'Never Wrap the Rope!', body: 'Hold your lead strap folded in your hand, never looped around your fingers or wrist. If your steer jumps, you can let go safely!' }],
          quickCheck: { question: 'Why should you never wrap a lead rope around your hand when leading cattle?', options: ['If the animal pulls or bolts, it can trap your hand and cause severe injury', 'It looks messy', 'It makes the rope dirty'], correctIndex: 0, feedback: 'Never wrap ropes around your hand or body; always hold in an accordioned grip.' }
        },
        junior: {
          headline: 'Show Halter Fit, Show Stick Technique & Flight Zones',
          sections: [
            {
              title: 'Fitting the Show Halter',
              body: 'The nosepiece should rest midway between the eyes and the nostrils (roughly 1.5 to 2 inches below the eye). Halters placed too low press on fragile nasal cartilage; halters too high slip off.'
            },
            {
              title: 'Using the Show Stick',
              body: 'The show stick serves three functions: 1) Calming: scratch the underline to relax the steer. 2) Foot placement: use the hook to push or pull hooves into square position. 3) Topline: press gently down on a high loin to level the back.'
            }
          ],
          quickCheck: { question: 'Where should the noseband of a cattle show halter be positioned?', options: ['Midway between the eyes and nostrils (about 1.5 to 2 inches below the eye)', 'Directly over the nostrils blocking breathing', 'Behind the ears'], correctIndex: 0, feedback: 'Midway between eyes and nostrils provides firm control without pinching.' }
        },
        intermediate: {
          headline: 'Bovine Field of Vision (330 Degrees) & Blind Spot Dangers',
          sections: [{ title: 'The Rear Blind Spot and Kick Arc', body: 'Cattle have wide panoramic vision but a 30–50 degree blind spot directly behind their tail. Approaching cattle directly from behind startles them and triggers a powerful forward-and-outward cow kick. Always approach at the shoulder with a calm voice.' }],
          quickCheck: { question: 'What direction does a cow’s natural defensive kick travel?', options: ['Forward and outward to the side (cow kick)', 'Straight backward like a horse only', 'Under its belly'], correctIndex: 0, feedback: 'Cattle kick forward and outward to protect their belly and flank.' }
        },
        senior: {
          headline: 'Temple Grandin Facility Audits & Low-Stress Cattle Flow',
          sections: [{ title: 'Low-Stress Working Facilities', body: 'Utilize solid curved chutes, eliminate high-contrast shadows on scale floors, provide non-slip grooved concrete, and maintain 0% electric prod usage.' }],
          quickCheck: { question: 'What simple environmental modification prevents cattle from balking at the entrance of a squeeze chute?', options: ['Eliminating shadows and bright contrasting glares on the floor', 'Painting walls black', 'Playing loud sirens'], correctIndex: 0, feedback: 'Eliminating floor shadows and glare encourages cattle to walk forward calmly.' }
        }
      },
      quizQuestions: [
        { id: 'bf_hw_q1', question: 'What knot must always be used when tying cattle to a barn wall or tie-out rail?', options: ['A Quick-Release Slip Knot (so the animal can be freed instantly in an emergency)', 'A square knot that cannot be untied', 'No knot; just wrap the rope'], correctIndex: 0, explanation: 'Quick-release knots allow handlers to pull one loop and free an entangled animal instantly.', division: 'junior' }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Calculate Average Daily Gain (ADG) aiming for 2.5 to 3.5 lbs/day',
        'Track Feed Conversion Ratio (FCR) (6:1 to 7.5:1 typical for feedlot cattle)',
        'Target ideal fair market weight window (1,250 to 1,450 lbs)',
        'Complete the 4-H Beef Financial Ledger and Breakeven Price Calculations'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Steer Record Journal!',
          readAloud: 'Watch your steer grow from a little calf into a big champion steer! Write down how many pounds he weighs every month.',
          sections: [{ title: 'Weighing Day', body: 'Weigh your steer on the livestock scale and write the big number in your book with a smile!' }],
          quickCheck: { question: 'Why do we record our steer’s weight in our 4-H record book?', options: ['To track how much weight they gain every day', 'To see if they fit in the car', 'To pick their favorite color'], correctIndex: 0, feedback: 'Tracking weight confirms healthy growth toward fair day!' }
        },
        junior: {
          headline: 'Market Steer ADG Math & Fair Weight Windows',
          sections: [
            {
              title: 'ADG Formula',
              body: 'ADG = (Fair Weight - Tag-In Weight) ÷ Days on Feed.\nExample: Steer weighed 650 lbs at initial December tag-in and weighed 1,350 lbs at August fair (180 days). Gain = 700 lbs. 700 lbs ÷ 180 days = 3.88 lbs/day ADG.'
            },
            {
              title: 'Ideal Fair Weight Window',
              body: 'Modern market steers should finish between 1,250 and 1,450 lbs to produce premium 800–900 lb carcasses.'
            }
          ],
          quickCheck: { question: 'If a feeder steer weighs 750 lbs on Jan 1st and weighs 1,350 lbs on July 1st (180 days later), what is its ADG?', options: ['3.33 lbs per day', '0.50 lbs per day', '10 lbs per day'], correctIndex: 0, feedback: '600 lbs gained ÷ 180 days = 3.33 lbs per day!' }
        },
        intermediate: {
          headline: 'Breakeven Price Per Pound & Dressing Percentage Calculations',
          sections: [{ title: 'Breakeven Math', body: 'Breakeven Price ($/lb) = Total Costs (Purchase Price + Feed + Vet + Supplies) ÷ Final Live Weight. Typical beef dressing percentage is 62–64%.' }],
          quickCheck: { question: 'What is the average dressing percentage for a finished market steer?', options: ['62% to 64%', '40%', '85%'], correctIndex: 0, feedback: 'Beef steers dress out around 62-64%.' }
        },
        senior: {
          headline: 'Grid Pricing Formulas, Cutability Indexes & Carcass Premiums',
          sections: [{ title: 'Marketing on the Carcass Grid', body: 'Calculate value based on base carcass price adjusted for Quality Grade premiums (Prime/Certified Angus Beef) and Yield Grade discounts (YG 4/5).' }],
          quickCheck: { question: 'In carcass grid marketing, what premium grade earns the highest dollar bonus above base Choice price?', options: ['USDA Prime', 'USDA Select', 'Commercial'], correctIndex: 0, feedback: 'USDA Prime commands the highest quality premium on beef grids.' }
        }
      },
      quizQuestions: [
        { id: 'bf_rk_q1', question: 'What is the ideal finished weight range for market steers at county and state fair weigh-ins?', options: ['1,250 to 1,450 pounds', '400 to 500 pounds', '3,000 to 4,000 pounds'], correctIndex: 0, explanation: '1,250-1,450 lbs produces ideal 800-900 lb hanging carcasses with Choice marbling.', division: 'junior' }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 30,
      objectives: [
        'Lead with leather show halter in right hand, holding lead strap folded neatly',
        'Operate the Show Stick in left hand to set feet and calm underline',
        'Set feet square (rear feet square and wide; front feet straight under shoulders)',
        'Maintain eye contact with judge while circling and standing in line'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Walking in the Big Ring!',
          readAloud: 'Walk tall, smile at the judge, and keep your steer walking smoothly around the arena ring!',
          sections: [{ title: 'Eye Contact & Poise', body: 'Keep your eyes on the judge and hold your show stick safely beside you.' }],
          quickCheck: { question: 'Where should you look when leading your steer in the show ring?', options: ['Keep alert, polite eye contact with the judge', 'Look down at your boots', 'Stare at the arena ceiling'], correctIndex: 0, feedback: 'Polite eye contact shows poise and ring awareness!' }
        },
        junior: {
          headline: 'Setting Feet with the Show Stick, Halter Lead & Ring Movements',
          sections: [
            {
              title: 'Setting Up the Feet',
              body: '1. Stop your steer straight in line.\n2. Front Feet: Place front feet square directly under points of shoulder. Pull lead gently to step forward, or press on shoulder to step back.\n3. Rear Feet: Use the hook of your show stick near the dewclaw to pull foot forward or push foot back until rear hocks stand square and wide.'
            }
          ],
          quickCheck: { question: 'How do you position the rear feet of a beef steer using a show stick?', options: ['Use the small hook near the dewclaw to gently pull the foot forward or press backward until square', 'Hit the steer on the hip', 'Pinch the ear'], correctIndex: 0, feedback: 'Hooking near the dewclaw gently guides the hoof into position.' }
        },
        intermediate: {
          headline: 'Topline Leveling, Ring Spacing & Smooth Crossover Turns',
          sections: [{ title: 'Leveling the Topline', body: 'If a steer humps its back or raises its loin, gently press the show stick tip downward in the loin crease. If a steer drops its belly, gently scratch the underline forward of the navel.' }],
          quickCheck: { question: 'What should you do with your show stick if your steer roaches (humps) its back high in the loin?', options: ['Gently press the tip of the stick downward into the loin crease to flatten the topline', 'Hit the steer’s head', 'Drop the stick'], correctIndex: 0, feedback: 'Pressing the loin crease relaxes spinal muscles and flattens the topline.' }
        },
        senior: {
          headline: 'Master Showmanship Ring Demeanor, Ring Awareness & Oral Reasons',
          sections: [{ title: 'Advanced Ring Etiquette', body: 'Leave 6 to 8 feet of cushion behind the steer ahead of you on the profile line. If your steer misbehaves, calmly circle out of line, reset, and maintain composure.' }],
          quickCheck: { question: 'How much space should you maintain between your steer and the animal in front of you on the profile line?', options: ['At least 6 to 8 feet of safety cushion', 'Tail to nose with zero space', '50 feet away'], correctIndex: 0, feedback: '6 to 8 feet prevents crowding, kicking, and allows the judge full view.' }
        }
      },
      quizQuestions: [
        { id: 'bf_sh_q1', question: 'Which hand holds the leather show halter lead strap when presenting beef cattle to the judge?', options: ['The RIGHT hand', 'The LEFT hand', 'Tied around the waist'], correctIndex: 0, explanation: 'The right hand holds the halter lead strap near the chin; the left hand holds the show stick.', division: 'junior' }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Honor livestock drug withdrawal affidavits and ensure human food safety',
        'Learn why artificial twine packing, hair dyeing, and unapproved tranquilizers are illegal',
        'Uphold sportsmanship, fair play, and animal dignity',
        'Live the 4-H pledge through community leadership'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Caring Hearts, Honest Hands!',
          readAloud: 'In 4-H, we do our best, take great care of our big animal friends, and cheer for everyone!',
          sections: [{ title: 'Being a Great Teammate', body: 'Help younger members carry feed buckets and congratulate your club friends with a smile!' }],
          quickCheck: { question: 'What does the "Hands" in 4-H remind us to do?', options: ['Use our hands for larger service and helping others', 'Keep our hands in our pockets', 'Only hold trophies'], correctIndex: 0, feedback: 'Hands to larger service means helping our club and community.' }
        },
        junior: {
          headline: 'The Food Safety Promise & Prohibited Tampering',
          sections: [
            {
              title: 'What Counts as Tampering in Beef Cattle?',
              body: 'Prohibited practices: adding false hair or twine to legs or tailhead, dyeing hair coat colors, pumping liquid into stomachs to fake rib shape, injecting air under the skin, or using unapproved calming drugs. True champions win through honest feeding and practice.'
            }
          ],
          quickCheck: { question: 'Is it ethical to glue false twine or artificial hair onto a steer’s legs to make them appear heavier boned?', options: ['NO! Adding artificial hair or twine is fraudulent tampering and results in immediate disqualification', 'Yes, everyone does it', 'Yes, judges expect it'], correctIndex: 0, feedback: 'Adding artificial twine or false hair is strictly prohibited tampering.' }
        },
        intermediate: {
          headline: 'YQCA Injection Guidelines & Beef Quality Assurance (BQA)',
          sections: [{ title: 'Beef Quality Assurance Injection Triangle', body: 'All injections must be given in the neck triangle forward of the shoulder blade using subcutaneous (SQ) administration whenever labeled. Never inject into the top sirloin, round, or loin.' }],
          quickCheck: { question: 'Where must all cattle injections be administered under Beef Quality Assurance (BQA) guidelines?', options: ['In the neck triangle forward of the shoulder', 'In the rear round steak', 'In the top sirloin'], correctIndex: 0, feedback: 'Neck injections protect valuable steak cuts from injection-site abscesses.' }
        },
        senior: {
          headline: 'Public Scrutiny, Beef Advocacy & Defending Animal Agriculture',
          sections: [{ title: 'Advocating for the Beef Industry', body: 'Senior exhibitors serve as agricultural ambassadors, explaining ruminant upcycling (turning grass inedible by humans into nutrient-dense beef) to fair visitors with poise.' }],
          quickCheck: { question: 'What is "upcycling" in beef cattle nutrition and sustainability?', options: ['Cattle convert solar energy and fibrous plants inedible by humans into high-quality protein and essential iron', 'Recycling plastic in barns', 'Painting trailers'], correctIndex: 0, feedback: 'Cattle upcycle cellulosic forage into nutrient-dense human food.' }
        }
      },
      quizQuestions: [
        { id: 'bf_et_q1', question: 'What legal covenant does an exhibitor sign certifying zero prohibited chemical residues remain in a market steer carcass?', options: ['4-H County Fair Livestock Drug Withdrawal Affidavit', 'A permission slip', 'A receipt'], correctIndex: 0, explanation: 'The drug affidavit certifies compliance with all FDA withdrawal times.', division: 'junior' }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Formulate SMART goals for rate of gain, halter breaking, and showmanship',
        'Prepare and deliver a club demonstration (e.g. Halter Breaking or Show Day Fitting)',
        'Write professional market buyer invitation letters to local agribusinesses',
        'Conduct a year-end beef project reflection'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Show & Tell with My Big Buddy!',
          readAloud: 'Tell your 4-H club about your steer! Bring a colorful poster showing how you brush and feed him.',
          sections: [{ title: 'Speaking to Your Friends', body: 'Stand tall, look at your friends, and share your steer’s name and breed with a proud smile!' }],
          quickCheck: { question: 'What is a fun way to share your steer project with your club?', options: ['Giving a short show-and-tell talk with a colorful poster', 'Whispering in the corner', 'Staying home'], correctIndex: 0, feedback: 'Show and tell builds speaking confidence!' }
        },
        junior: {
          headline: 'SMART Beef Goals & Club Demonstrations',
          sections: [
            {
              title: 'Setting a SMART Beef Goal',
              body: 'Example: "I will tie, wash, and blow my steer’s hair 3 days a week for 45 minutes from May 1st to August 1st to achieve show-day hair pop."'
            }
          ],
          quickCheck: { question: 'Which goal meets all the SMART criteria?', options: ['"I will calculate monthly ADG and practice show stick placement twice a week through fair day."', '"I want a purple banner."', '"Maybe I will halter break my steer."'], correctIndex: 0, feedback: 'Specific, measurable, and time-bound goals drive success.' }
        },
        intermediate: {
          headline: 'Writing Market Buyer Letters & Auction Invitations',
          sections: [{ title: 'Buyer Letter Strategy', body: 'Send personalized letters to 5–10 local businesses 3 to 4 weeks before the fair auction. Include a picture of you with your steer, your project budget, what you learned, and the auction date and time.' }],
          quickCheck: { question: 'Why are market buyer invitation letters mailed 3 to 4 weeks prior to the county fair auction?', options: ['To give business sponsors time to plan budgets and attend the livestock sale', 'To ask for free candy', 'It doesn’t matter when they are mailed'], correctIndex: 0, feedback: 'Advance notice gives community sponsors time to budget support.' }
        },
        senior: {
          headline: 'Mentorship in Cattle Clinics & Agricultural Careers',
          sections: [{ title: 'Mentoring Junior Exhibitors', body: 'Senior exhibitors serve as Junior Leaders, hosting hands-on clinics teaching younger members how to safely halter break, wash, clip, and handle beef cattle.' }],
          quickCheck: { question: 'What is the highest demonstration of 4-H project mastery for a senior beef exhibitor?', options: ['Hosting clinics to mentor younger first-year members in showmanship and care', 'Only entering shows where you win', 'Selling your steer early'], correctIndex: 0, feedback: 'True leadership empowers younger youth and builds the future of agriculture.' }
        }
      },
      quizQuestions: [
        { id: 'bf_cg_q1', question: 'When preparing an educational demonstration on cattle fitting, what makes the demonstration most effective?', options: ['Clear step-by-step demonstrations with safety precautions explained out loud', 'Talking without showing tools', 'Rushing through in 30 seconds'], correctIndex: 0, explanation: 'Clear, step-by-step physical demonstrations with safety emphasis educate listeners effectively.', division: 'junior' }
      ]
    }
  ]
};
