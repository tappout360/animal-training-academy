// WarrenWise Youth Animal Training Academy
// Species Pack: Swine (Sus domesticus) - Market Hogs & Breeding Gilts
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const SWINE_PACK = {
  id: 'swine',
  name: 'Swine Project Academy',
  species: 'Swine (Market Hogs & Gilts)',
  category: 'Large Livestock',
  icon: 'Shield',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-20',
  verifiedBy: 'Extension Swine Specialist & National Swine Registry (NSR) Youth Board',
  description: 'Comprehensive 4-H swine curriculum covering the 8 major breeds, universal ear notching system, monogastric lysine nutrition, African Swine Fever biosecurity, driving showmanship, and pork quality.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Identify the 8 major purebred swine breeds (Yorkshire, Hampshire, Duroc, Berkshire, Landrace, Chester White, Poland China, Spot)',
        'Classify breeds by ear carriage (Erect ears vs Drooped ears) and purpose (Maternal vs Terminal Sire)',
        'Understand modern crossbred market hogs (blue butts, belted barrows)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Oink! Pigs with Floppy & Pointy Ears!',
          readAloud: 'Pigs are super smart, friendly animals! Some have cute floppy ears that hang over their eyes, and some have tall pointy ears that stand straight up.',
          sections: [{ title: 'Pig Colors and Patterns', body: 'Duroc pigs are rusty red! Hampshires are black with a white belt wrapped around their shoulders. Yorkshires are big, beautiful white pigs.' }],
          quickCheck: { question: 'Which pig breed is solid red with droopy ears?', options: ['Duroc', 'Yorkshire', 'Hampshire'], correctIndex: 0, feedback: 'Durocs are famous for their solid red color and drooping ears!' }
        },
        junior: {
          headline: 'The 8 Purebred Breeds, Ear Positions & Maternal vs Terminal Lines',
          sections: [
            {
              title: 'Erect Ears vs Drooping Ears Rule',
              body: 'A quick rule of thumb for breeds ending in "shire":\n• Breeds ending in "-SHIRE" (Yorkshire, Hampshire, Berkshire) have ERECT (pointy) ears.\n• Breeds NOT ending in "-shire" (Duroc, Landrace, Chester White, Spot, Poland China) have DROOPING (floppy) ears!'
            },
            {
              title: 'Maternal vs Terminal Breeds',
              body: '• Maternal (White Breeds): Yorkshire, Landrace, Chester White (large litters, milk production, mothering ability).\n• Terminal Sire (Colored Breeds): Hampshire, Duroc, Berkshire (heavy muscling, carcass cutout, fast growth rate).'
            }
          ],
          quickCheck: {
            question: 'Which of the following breeds has ERECT (standing upright) ears?',
            options: ['Yorkshire', 'Landrace', 'Duroc'],
            correctIndex: 0,
            feedback: 'Yorkshires have erect ears! Landrace and Duroc have drooping ears.'
          }
        },
        intermediate: {
          headline: 'Carcass Cutout, Berkshire Gold Standards & Sire Selection',
          sections: [{ title: 'Berkshire Meat Quality', body: 'Berkshires (black with 6 white points: 4 feet, face, tail) are prized worldwide for high intramuscular fat (marbling), tenderness, and pH stability (Berkshire Gold standard).' }],
          quickCheck: { question: 'What meat quality trait makes Berkshire pork famous in high-end culinary markets?', options: ['Superior intramuscular marbling, tenderness, and moisture retention', 'Zero fat', 'Blue meat'], correctIndex: 0, feedback: 'Berkshire genetics excel in pork marbling and flavor.' }
        },
        senior: {
          headline: 'National Swine Registry (NSR) Pedigree Registration & EPD Metrics',
          sections: [{ title: 'Swine EPD Selection', body: 'Evaluate Terminal Sire Index (TSI) weighing Days to 250 lbs and Backfat EPDs versus Maternal Line Index (MLI) incorporating Number Born Alive (NBA) and 21-day Litter Weight.' }],
          quickCheck: { question: 'What does the Terminal Sire Index (TSI) prioritize in swine genetic selection?', options: ['Post-weaning growth rate and lean carcass cutout', 'Ear length', 'Litter size only'], correctIndex: 0, feedback: 'TSI evaluates lean growth and pounds of muscle.' }
        }
      },
      quizQuestions: [
        { id: 'sw_bb_q1', question: 'Which breed of swine is known as the "Mother Breed" and is solid white with erect ears?', options: ['Yorkshire', 'Landrace', 'Chester White'], correctIndex: 0, explanation: 'Yorkshires are white with erect ears and known for mothering ability.', division: 'junior' }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Manage heat stress: pigs CANNOT sweat and are vulnerable to fatal hyperthermia > 80°F',
        'Provide clean pen bedding (wood shavings), concrete/slat drainage, and nipple watering systems',
        'Maintain daily skin and hair washing for show conditioning'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Keeping Pigs Cool & Clean!',
          readAloud: 'Pigs cannot sweat like humans! That’s why they love cool water misters and nice mud wallows to stay chilled on sunny days.',
          sections: [{ title: 'Cool Water is Life', body: 'When it gets hot outside, spray cool water on your pig’s pen and keep fresh drinking water running 24 hours a day.' }],
          quickCheck: { question: 'Can pigs sweat through their skin like humans do to cool down?', options: ['NO! Pigs have almost no sweat glands and rely on water to cool off', 'Yes, they sweat a lot', 'Only in winter'], correctIndex: 0, feedback: 'Pigs cannot sweat and count on you for cool water and shade!' }
        },
        junior: {
          headline: 'Heat Stress Prevention, Nipple Waterers & Pen Sizing',
          sections: [
            {
              title: 'Why Heat Kills Pigs',
              body: 'Pigs have very thick subcutaneous fat and virtually zero functional sweat glands. Ambient temperatures above 80°F (27°C) trigger rapid respiratory distress, open-mouth panting, and fatal heat exhaustion. Provide shade, cross-ventilation fans, and misting nozzles.'
            },
            {
              title: 'Water Requirements',
              body: 'A growing market hog drinks 2 to 4 gallons of clean water daily. Inspect bite-nipple waterers daily to ensure adequate water flow (1 to 2 quarts per minute).'
            }
          ],
          quickCheck: {
            question: 'What is the minimum amount of fresh drinking water a 200 lb market hog requires each day?',
            options: ['2 to 4 gallons per day', 'One cup', 'Zero, pigs do not drink water'],
            correctIndex: 0,
            feedback: 'Market hogs need 2 to 4 gallons of clean cool water daily to thrive.'
          }
        },
        intermediate: {
          headline: 'Ventilation Engineering (CFM Rates) & Slatted Floor Biosecurity',
          sections: [{ title: 'Barn Air Exchanges', body: 'Target 150–200 CFM (cubic feet per minute) of airflow per market pig in summer. Manage pit ammonia and hydrogen sulfide levels below 10 ppm through continuous exhaust fan operation.' }],
          quickCheck: { question: 'What toxic gas accumulated in manure pits can cause sudden respiratory distress in swine barns?', options: ['Hydrogen sulfide and ammonia', 'Pure oxygen', 'Helium'], correctIndex: 0, feedback: 'Hydrogen sulfide and ammonia from manure pits are dangerous without ventilation.' }
        },
        senior: {
          headline: 'Porcine Stress Syndrome (PSS) / Halothane Gene Pathology',
          sections: [{ title: 'The PSS Mutation (Halothane Gene)', body: 'A point mutation in the ryanodine receptor (RYR1) gene causes uncontrolled calcium release into skeletal muscle under stress or heat, causing malignant hyperthermia, muscle rigidity, and pale, soft, exudative (PSE) pork. NSR requires testing to eliminate the Halothane gene.' }],
          quickCheck: { question: 'What meat carcass defect results from animals carrying the Porcine Stress Syndrome (PSS) mutation?', options: ['Pale, Soft, Exudative (PSE) pork', 'Dark cutting beef', 'Yellow fat'], correctIndex: 0, feedback: 'PSS produces unpalatable PSE pork due to post-mortem lactic acid buildup.' }
        }
      },
      quizQuestions: [
        { id: 'sw_dc_q1', question: 'At what ambient temperature does market hog heat stress become a dangerous emergency?', options: ['Above 80°F (27°C)', 'Above 50°F', 'Only above 120°F'], correctIndex: 0, explanation: 'Because pigs cannot sweat, temperatures above 80°F risk heat stroke.', division: 'junior' }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: [
        'Understand monogastric (single-stomach) omnivore digestive physiology',
        'Identify LYSINE as the first-limiting amino acid in swine nutrition',
        'Transition protein levels by weight (Starter 20-22%, Grower 16-18%, Finisher 14-16%)',
        'Learn why Ractopamine (Paylean) is banned in global export markets'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Crunchy Corn & Soybean Chow!',
          readAloud: 'Pigs have one tummy just like you and me! They love eating nutritious grains, minerals, and healthy treats.',
          sections: [{ title: 'Balanced Pig Feed', body: 'Pigs eat wholesome grain pellets made from ground corn and golden soybeans that give them energy to grow big and strong.' }],
          quickCheck: { question: 'Does a pig have four stomachs like a cow, or one stomach like a human?', options: ['One stomach (monogastric)', 'Four stomachs', 'Zero stomachs'], correctIndex: 0, feedback: 'Pigs are monogastric with one stomach just like humans!' }
        },
        junior: {
          headline: 'Monogastric Digestion, Lysine & Feeding by Phase',
          sections: [
            {
              title: 'Lysine: The Muscle Building Block',
              body: 'Pigs cannot make essential amino acids. LYSINE is the first-limiting amino acid. Without adequate dietary lysine (1.0% to 1.3% in young pigs), pigs cannot utilize other proteins to build lean muscle.'
            },
            {
              title: 'Phase Feeding',
              body: '• Starter (30–60 lbs): 20–22% protein for rapid early muscle and bone growth.\n• Grower (60–160 lbs): 16–18% protein.\n• Finisher (160–280 lbs): 14–16% protein with higher energy for fat cover and marbling.'
            }
          ],
          quickCheck: {
            question: 'What is the first-limiting essential amino acid in corn-and-soybean swine rations?',
            options: ['Lysine', 'Vitamin C', 'Calcium'],
            correctIndex: 0,
            feedback: 'Lysine is the first-limiting amino acid governing muscle growth in pigs.'
          }
        },
        intermediate: {
          headline: 'Feed Conversion Ratios & The Global Ractopamine (Paylean) Ban',
          sections: [
            {
              title: 'Understanding Paylean Bans',
              body: 'Ractopamine hydrochloride (Paylean) is a beta-agonist that directs calories to muscle rather than fat. However, because major international export markets (China, European Union) ban ractopamine residues, almost all 4-H county and state fairs now strictly ban Paylean.'
            }
          ],
          quickCheck: {
            question: 'Why have most 4-H livestock shows and commercial packing plants banned the feed additive Ractopamine (Paylean)?',
            options: ['It violates international export trade requirements and packing plant food safety policies', 'It turns pigs pink', 'It makes pigs sleepy'],
            correctIndex: 0,
            feedback: 'Major export packing plants require 100% ractopamine-free pork.'
          }
        },
        senior: {
          headline: 'Net Energy (NE) Balancing, Standardized Ileal Digestibility (SID) & Phytase',
          sections: [{ title: 'Phytase and Environmental Phosphorus', body: 'Pigs lack endogenous phytase to digest plant phytate phosphorus. Adding microbial phytase enzyme releases bound phosphorus, reducing costly dicalcium phosphate addition and cutting environmental phosphorus excretion by 30%.' }],
          quickCheck: { question: 'What enzyme is added to swine diets to release bound plant phosphorus and reduce manure runoff?', options: ['Phytase', 'Amylase', 'Pepsin'], correctIndex: 0, feedback: 'Phytase unlocks plant phosphorus and protects water quality.' }
        }
      },
      quizQuestions: [
        { id: 'sw_nu_q1', question: 'What typical Feed Conversion Ratio (FCR) is expected for an efficient modern market hog?', options: ['2.5 to 3.0 lbs of feed per 1 lb of body weight gain', '10 to 15 lbs feed per lb gain', '1 lb feed per 10 lbs gain'], correctIndex: 0, explanation: 'Modern market hogs efficiently convert 2.5 to 3.0 lbs feed into 1 lb gain.', division: 'junior' }
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
        'Master the Universal Ear Notching System (Right ear = Litter #, Left ear = Pig #)',
        'Recognize high-threat swine viral diseases: PRRS, PEDV, and African Swine Fever (ASF)',
        'Implement strict shower-in / boots-off biosecurity protocols',
        'Follow mandatory withdrawal times and observe veterinary VCPR rules'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Healthy Snouts & Clean Boots!',
          readAloud: 'Healthy pigs love greeting you with a cheerful grunt and a cold, wet nose! We wash our boots so germs never enter the barn.',
          sections: [{ title: 'The Cold Wet Snout', body: 'Touch your pig’s snout gently! A moist, cool snout and bright curious eyes mean your pig is feeling great!' }],
          quickCheck: { question: 'What does a clean, cool, moist snout indicate on your show pig?', options: ['A healthy, alert pig', 'A sick pig', 'The pig needs sunscreen'], correctIndex: 0, feedback: 'A cool, moist snout indicates normal body temperature and hydration!' }
        },
        junior: {
          headline: 'The Universal Ear Notching System & African Swine Fever Awareness',
          sections: [
            {
              title: 'How to Read Pig Ear Notches',
              body: 'The universal notch system identifies purebred and show pigs permanently:\n• RIGHT EAR = LITTER NUMBER (Notch values: 1, 3, 9, 27, 81).\n• LEFT EAR = INDIVIDUAL PIG NUMBER (Notch values: 1, 3, 9).\nExample: Notch 27 and 3 in right ear (27+3 = 30) and notch 3 and 1 in left ear (3+1 = 4). This pig is: 30-4 (Litter 30, Pig 4).'
            },
            {
              title: 'African Swine Fever (ASF) Biosecurity',
              body: 'ASF is a fatal foreign viral disease. NEVER feed table scraps, pork scraps, or human food waste (garbage feeding) to pigs; virus survives in cured pork and spreads like wildfire.'
            }
          ],
          quickCheck: {
            question: 'In the universal swine ear notching system, which ear indicates the LITTER number?',
            options: ['The RIGHT ear', 'The LEFT ear', 'Neither ear'],
            correctIndex: 0,
            feedback: 'The pig’s RIGHT ear represents the Litter number; the LEFT ear is the Individual pig number.'
          }
        },
        intermediate: {
          headline: 'PRRS (Porcine Reproductive and Respiratory Syndrome) & PEDV Pathogenesis',
          sections: [{ title: 'PRRS and Aerosol Transmission', body: 'PRRS virus targets alveolar macrophages in lungs, destroying immune defenses. The virus travels several miles via air plumes in cold humid weather. Implement MERV 16 air filtration and clean transport trailers with thermal drying.' }],
          quickCheck: { question: 'What immune cells in the pig’s respiratory tract are specifically destroyed by the PRRS virus?', options: ['Pulmonary alveolar macrophages', 'Red blood cells', 'Skin cells'], correctIndex: 0, feedback: 'PRRS destroys alveolar macrophages, compromising lung defenses.' }
        },
        senior: {
          headline: 'Epidemiology, Foreign Animal Disease (FAD) Triage & Secure Pork Supply (SPS)',
          sections: [{ title: 'Secure Pork Supply (SPS) Plan', body: 'SPS protocols prepare producers with biosecurity lines of separation (LOS), clean trailer wash stations, and premises ID records to allow permitted movement during an FAD outbreak.' }],
          quickCheck: { question: 'What is the "Line of Separation" (LOS) in a Secure Pork Supply biosecurity plan?', options: ['A physical boundary segregating clean animal housing from outside pathogen vectors', 'A property fence', 'A painting on the floor'], correctIndex: 0, feedback: 'The Line of Separation demarcates clean interior herds from outside contamination.' }
        }
      },
      quizQuestions: [
        { id: 'sw_hb_q1', question: 'If a pig has notches 9 and 1 in its right ear, and notch 3 in its left ear, what is its official identification number?', options: ['10-3', '9-1', '3-10'], correctIndex: 0, explanation: 'Right ear: 9 + 1 = Litter 10. Left ear: Notch 3 = Pig 3. Official ID: 10-3.', division: 'junior' }
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
        'Move pigs using sorting boards, hurdles, and driving pipes (never hit, kick, or grab ears)',
        'Understand swine sight limitations (poor depth perception, wide panoramic blind spots)',
        'Recognize calm, low-stress movement using body position and flight zone angles'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Taps with the Driving Pipe!',
          readAloud: 'Pigs respond to gentle guidance! We guide them with a light plastic pipe and a red sorting board.',
          sections: [{ title: 'Gentle Guiding Only', body: 'Never hit a pig! Tap the air or touch their shoulder softly to ask them to turn left or right.' }],
          quickCheck: { question: 'What tool do we use to calmly guide a pig when walking in the barn?', options: ['A lightweight plastic show pipe or sorting cane', 'A baseball bat', 'Ropes around the legs'], correctIndex: 0, feedback: 'A show pipe or cane guides pigs gently without fear.' }
        },
        junior: {
          headline: 'Sorting Boards, Driving Pipes & Blind Spot Angles',
          sections: [
            {
              title: 'Using the Sorting Board and Pipe',
              body: 'Pigs are driven, not led! Use a solid plastic sorting board (hurdle) as a visual wall to block escape paths. Use a lightweight PVC driving pipe or cane to tap lightly on the jowl or shoulder to direct the pig’s head. Never hit a pig on the loin or ham.'
            }
          ],
          quickCheck: { question: 'Where should you apply light taps with a driving tool to steer a pig to the right?', options: ['Tap gently on the left side of the jowl/face to turn the head right', 'Hit the ham as hard as possible', 'Pull the tail'], correctIndex: 0, feedback: 'Tapping the left jowl turns the pig’s head and body to the right.' }
        },
        intermediate: {
          headline: 'Swine Sensory Perception & Balking Triggers',
          sections: [{ title: 'Understanding What Pigs Fear', body: 'Pigs have narrow binocular vision (30–50 degrees) in front and a wide blind spot directly behind their tail. They balk at changes in floor texture (moving from dirt to concrete), deep shadows, or sudden drafts.' }],
          quickCheck: { question: 'Where is a pig’s primary blind spot located where it cannot see you without turning?', options: ['Directly behind its tail (rear blind zone)', 'Directly in front of its nose', 'Above its head'], correctIndex: 0, feedback: 'Standing directly behind the pig enters its blind spot and causes it to turn.' }
        },
        senior: {
          headline: 'Humane Slaughter Act Standards & Transportation Loading Densities',
          sections: [{ title: 'Loading Density and Stress Control', body: 'Transporting finished market hogs requires 4.0 to 4.5 sq ft per 250 lb hog. Overcrowding in humid weather causes acute cardiovascular fatigue and non-ambulatory pigs.' }],
          quickCheck: { question: 'What is the primary cause of fatigued/non-ambulatory pigs during summer transit?', options: ['Heat stress combined with overcrowded trailer density and rough handling', 'Eating too much hay', 'Sleeping on the trailer'], correctIndex: 0, feedback: 'Heat, overcrowding, and rough loading trigger fatal acute fatigue.' }
        }
      },
      quizQuestions: [
        { id: 'sw_hw_q1', question: 'Why is a solid plastic sorting board (hurdle) the safest and most effective tool for moving pigs?', options: ['Pigs respect a solid visual barrier and cannot see through it, redirecting their forward movement calmly', 'It makes a loud noise', 'It protects handlers from rain'], correctIndex: 0, explanation: 'Pigs stop when encountering a solid visual barrier, allowing smooth direction.', division: 'junior' }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Calculate Average Daily Gain (ADG) aiming for 1.8 to 2.2 lbs per day',
        'Compute Feed Conversion Ratio (FCR) and cost of gain per pound',
        'Target ideal fair market weight window (240 to 290 lbs)',
        'Maintain the complete 4-H Swine Project Financial Ledger'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Piggy Bank Ledger!',
          readAloud: 'Track how many pounds your pig gains every week! Feeding good chow turns little pigs into big champions.',
          sections: [{ title: 'Counting the Pounds', body: 'Weigh your pig with your 4-H club and write down the numbers in your project book!' }],
          quickCheck: { question: 'Why do we weigh our market pig every week?', options: ['To track healthy growth and make sure they reach fair weight', 'To see if they fit in a backpack', 'Pigs like weighing scales'], correctIndex: 0, feedback: 'Weekly weights ensure pigs hit the required fair weigh-in window!' }
        },
        junior: {
          headline: 'Calculating ADG & Fair Weight Targets',
          sections: [
            {
              title: 'ADG Math for Market Hogs',
              body: 'ADG = (Fair Weigh-In Weight - Starting Tag-In Weight) ÷ Total Days on Feed.\nExample: Starting weight = 60 lbs. Fair weight = 260 lbs (200 lbs gained). Over 100 days on feed: 200 ÷ 100 = 2.0 lbs per day ADG.'
            },
            {
              title: 'The Fair Weight Window',
              body: 'Most county and state fairs require market hogs to weigh between 240 and 290 lbs. Hogs weighing over 290 or under 240 are disqualified from market competition.'
            }
          ],
          quickCheck: { question: 'If a feeder pig weighs 70 lbs on May 1st and gains 190 lbs over 95 days, what is its Average Daily Gain?', options: ['2.0 lbs per day', '0.5 lbs per day', '10 lbs per day'], correctIndex: 0, feedback: '190 lbs ÷ 95 days = 2.0 lbs per day!' }
        },
        intermediate: {
          headline: 'Lean Meat Cutout Percentage & Dressing Percentage Math',
          sections: [{ title: 'Dressing Percentage and Lean Cutout', body: 'Average hog dressing percentage is 72–76% (higher than cattle/sheep because skin and feet remain on carcass). Percent Lean formula incorporates 10th rib backfat and loin eye area (LEA).' }],
          quickCheck: { question: 'What is the average dressing percentage for a market hog at slaughter?', options: ['72% to 76%', '50%', '95%'], correctIndex: 0, feedback: 'Hogs dress out around 72-76% because skin and jowl remain on carcass.' }
        },
        senior: {
          headline: 'Enterprise Financial Audits, Marginal Cost of Gain & Hedging',
          sections: [{ title: 'Marginal Cost of Gain', body: 'As pigs pass 250 lbs, feed efficiency worsens from 2.6:1 to 3.5:1. Calculate marginal feed cost per pound of gain to optimize target market timing.' }],
          quickCheck: { question: 'What happens to Feed Conversion Ratio (FCR) as a market pig approaches 280+ lbs?', options: ['FCR increases (it takes more feed to gain each pound of weight)', 'FCR stays at zero', 'FCR improves dramatically'], correctIndex: 0, feedback: 'Heavier pigs require more maintenance feed and deposit fat, raising FCR.' }
        }
      },
      quizQuestions: [
        { id: 'sw_rk_q1', question: 'What is the standard ideal weight range for finished market show hogs at fair weigh-in?', options: ['240 to 290 pounds', '50 to 100 pounds', '600 to 800 pounds'], correctIndex: 0, explanation: '240-290 lbs yields optimal retail pork cuts and consumer bacon thickness.', division: 'junior' }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 30,
      objectives: [
        'Drive the pig 10 to 15 feet away from the judge at a steady, natural walking pace',
        'Keep the pig off the fence and out of ring corners',
        'Maintain continuous eye contact with the judge while moving with relaxed poise',
        'Master the crossover turn using light taps on the opposite jowl'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Driving My Pig in the Ring!',
          readAloud: 'In the show ring, we walk alongside our pig with a smile on our face and our eyes on the judge!',
          sections: [{ title: 'Eyes on the Judge', body: 'Always know where the judge is standing! Guide your pig across the open ring so the judge can see how well you drive.' }],
          quickCheck: { question: 'Should you stare down at your shoes or keep eye contact with the judge?', options: ['Keep confident eye contact with the judge', 'Stare at your shoes', 'Close your eyes'], correctIndex: 0, feedback: 'Eye contact shows confidence and attentiveness!' }
        },
        junior: {
          headline: 'The 10-15 Foot Distance Rule, Corner Prevention & Pipe Control',
          sections: [
            {
              title: 'The 10 to 15 Foot Distance Rule',
              body: 'Maintain a 10 to 15 foot cushion between your pig and the judge. If you are too close, the judge cannot evaluate total balance; if you are across the arena, you are out of view.'
            },
            {
              title: 'Keep Pigs Off the Fence!',
              body: 'Pigs love running along arena fences and burying their snouts in corners. Use your pipe or cane on the side facing the rail to turn the pig’s head into open center ring.'
            }
          ],
          quickCheck: { question: 'What is the ideal distance to maintain between your market pig and the showmanship judge?', options: ['10 to 15 feet away', '6 inches away (touching the judge’s shoes)', 'Across the other side of the fairgrounds'], correctIndex: 0, feedback: '10 to 15 feet gives the judge the ideal viewing angle for total conformation.' }
        },
        intermediate: {
          headline: 'Head Carriage, Natural Walking Speed & Ring Awareness',
          sections: [{ title: 'Head Carriage and Pace', body: 'Train your pig at home to walk with its head held proud and high. Do not rush or run behind the pig; walk with smooth athletic composure.' }],
          quickCheck: { question: 'What should you do if two fighting pigs crash into your driving path in the show ring?', options: ['Calmly and smoothly maneuver your pig away into open space without panicking', 'Jump on the pigs', 'Abandon your pig and run out'], correctIndex: 0, feedback: 'Poise and spatial navigation in tight situations highlight top showmen.' }
        },
        senior: {
          headline: 'Master Showmanship Ring Strategy, Judge Inquiries & Oral Reasons',
          sections: [{ title: 'Answering Technical Judge Questions', body: 'Be prepared to state: pig ear notch number, breed sire, birth date, carcass cutability, crude protein %, and ideal market endpoint with agricultural precision.' }],
          quickCheck: { question: 'What should you immediately state when the showmanship judge asks: "What is your pig’s ear notch?"', options: ['State Litter number followed by Individual number clearly: "Judge, my barrow is notched 14-2."', 'State your shoe size', 'Say you forgot'], correctIndex: 0, feedback: 'Stating notch numbers fluently proves project mastery.' }
        }
      },
      quizQuestions: [
        { id: 'sw_sh_q1', question: 'What tool is most commonly used in youth 4-H swine showmanship to guide and drive the animal?', options: ['A lightweight plastic show pipe or show whip/cane', 'A leather halter', 'A metal chain'], correctIndex: 0, explanation: 'Show pipes or whips guide pigs with light taps on the jowl.', division: 'junior' }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Honor food safety and slaughter withdrawal periods on show drug affidavits',
        'Learn why unapproved beta-agonists, diuretics, and artificial skin oils are prohibited',
        'Commit to animal welfare and humane transport over trophies',
        'Demonstrate good sportsmanship in competitive showmanship drives'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Honest Hearts, True Champions!',
          readAloud: 'Doing what is right even when nobody is looking is what 4-H character is all about!',
          sections: [{ title: 'High Fives in the Barn', body: 'Congratulate fellow exhibitors and help your friends wash their pigs before the show!' }],
          quickCheck: { question: 'What does the "Heart" in 4-H remind us to practice?', options: ['Loyalty, kindness, honesty, and good sportsmanship', 'Running fast', 'Only caring about ribbons'], correctIndex: 0, feedback: 'Heart to greater loyalty means integrity and kindness.' }
        },
        junior: {
          headline: 'The Food Safety Promise & Prohibited Tampering',
          sections: [
            {
              title: 'Pork Food Safety Covenant',
              body: 'Market pigs produce pork chops, bacon, and roasts eaten by families across America. Administering drugs without observing full withdrawal times violates federal law and breaks the 4-H Code of Ethics. True champions win through honest feeding and devotion.'
            }
          ],
          quickCheck: { question: 'Why is adherence to medication withdrawal periods mandatory on market hog affidavits?', options: ['To guarantee wholesome, drug-free pork for consumer families', 'To make extra paperwork', 'It is optional'], correctIndex: 0, feedback: 'Food safety and public trust are non-negotiable producer duties.' }
        },
        intermediate: {
          headline: 'YQCA Principles: Injection Triangle & Proper Needle Selection',
          sections: [{ title: 'Swine Injection Sites', body: 'Administer all injections in the neck muscle forward of the shoulder blade using clean 16–18 gauge 1" needles. NEVER inject into the ham or loin.' }],
          quickCheck: { question: 'Where on the pig should all intramuscular injections be administered to protect premium pork cuts?', options: ['In the neck muscle just behind and below the ear', 'In the rear ham', 'In the tenderloin'], correctIndex: 0, feedback: 'Neck injections protect valuable ham and loin cuts from injection blemishes.' }
        },
        senior: {
          headline: 'Agricultural Youth Leadership, Biosecurity Advocacy & Public Relations',
          sections: [{ title: 'Advocating for Modern Pork Production', body: 'Senior exhibitors represent the pork industry to fair visitors by modeling clean pens, biosecure footwear, and answering questions about gestation housing and nutrition.' }],
          quickCheck: { question: 'How do senior 4-H swine exhibitors protect the public image of animal agriculture?', options: ['Model compassionate care, keep pens clean, and engage visitors politely with facts', 'Avoid talking to visitors', 'Post angry comments'], correctIndex: 0, feedback: 'Transparent, polite education safeguards consumer trust in modern pork production.' }
        }
      },
      quizQuestions: [
        { id: 'sw_et_q1', question: 'What is the exhibitor’s legal and ethical duty if an animal requires medical treatment within 10 days of a terminal fair market sale?', options: ['Administer the treatment under veterinary guidance and withdraw the animal from the meat sale to protect food safety', 'Sell the animal secretly', 'Ignore the illness'], correctIndex: 0, explanation: 'Food safety and animal welfare come first; withdrawing the animal protects public health.', division: 'junior' }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Formulate SMART goals for rate of gain, feed budgeting, and showmanship',
        'Prepare and deliver a club demonstration (e.g. Ear Notching or Feed Mixing)',
        'Write professional market buyer invitation letters for local business sponsors',
        'Complete the year-end 4-H project record book portfolio'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Show & Tell with My Piggy Buddy!',
          readAloud: 'Tell your 4-H club about your pig! Bring a colorful poster showing how you wash and feed your buddy.',
          sections: [{ title: 'Sharing What You Love', body: 'Stand tall and tell your friends 3 fun things you learned raising your pig this year!' }],
          quickCheck: { question: 'What is a fun way to share your pig project with your club?', options: ['Giving a short show-and-tell talk with a colorful poster', 'Whispering in the back', 'Staying home'], correctIndex: 0, feedback: 'Show and tell builds public speaking confidence!' }
        },
        junior: {
          headline: 'SMART Swine Goals & Club Demonstrations',
          sections: [
            {
              title: 'Setting a SMART Swine Goal',
              body: 'Example: "I will walk my market hog 20 minutes every evening, 4 days a week from June 1st to August 10th to build driving endurance for showmanship."'
            }
          ],
          quickCheck: { question: 'Which goal meets all the SMART criteria?', options: ['"I will track feed conversion every 2 weeks and calculate ADG in my record book through fair day."', '"I want a purple ribbon."', '"Maybe I will walk my pig."'], correctIndex: 0, feedback: 'Specific, measurable, and time-bound goals drive mastery.' }
        },
        intermediate: {
          headline: 'Market Buyer Sponsor Letters & Auction Invitations',
          sections: [{ title: 'Buyer Letter Strategy', body: 'Send personalized letters to 5–10 local businesses 3 to 4 weeks before the fair auction. Include a picture of you with your pig, your project budget, what you learned, and the auction date and time.' }],
          quickCheck: { question: 'Why are market buyer invitation letters mailed 3 to 4 weeks prior to the county fair auction?', options: ['To give business sponsors time to plan budgets and attend the livestock sale', 'To ask for free candy', 'It doesn’t matter when they are mailed'], correctIndex: 0, feedback: 'Advance notice gives community sponsors time to budget support.' }
        },
        senior: {
          headline: 'Mentorship in Swine Show Clinics & Agricultural Careers',
          sections: [{ title: 'Mentoring Junior Exhibitors', body: 'Senior exhibitors serve as Junior Superintendents, hosting hands-on clinics teaching younger members how to drive pigs, read ear notches, and complete financial balance sheets.' }],
          quickCheck: { question: 'What is the highest demonstration of 4-H project mastery for a senior swine exhibitor?', options: ['Hosting clinics to mentor younger first-year members in driving and care', 'Only entering shows where you win', 'Selling your pig early'], correctIndex: 0, feedback: 'True leadership empowers younger youth and builds the future of agriculture.' }
        }
      },
      quizQuestions: [
        { id: 'sw_cg_q1', question: 'When preparing an educational demonstration on the universal ear notching system, what is the best visual aid?', options: ['A large clear diagram showing the notch values on both ears (Right=Litter, Left=Individual)', 'A blank sheet of paper', 'No visual aids'], correctIndex: 0, explanation: 'Clear anatomical diagrams make complex technical subjects easy to understand.', division: 'junior' }
      ]
    }
  ]
};
