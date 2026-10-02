// WarrenWise Youth Animal Training Academy
// Species Pack: Dairy Cattle (Bos taurus) - Dairy Heifers & Cows
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const DAIRY_CATTLE_PACK = {
  id: 'dairy_cattle',
  name: 'Dairy Cattle Project Academy',
  species: 'Dairy Cattle (Cows & Heifers)',
  category: 'Large Livestock',
  icon: 'Shield',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-20',
  reviewPolicy: 'Reviewed under Academy Accuracy Policy',
  reviewerRole: 'Internal Curriculum Specialist (Dairy Science)',
  verifiedBy: 'Reviewed under Academy Accuracy Policy',
  description: 'Comprehensive 4-H dairy project curriculum covering the 6 major breeds, PDCA Unified Scorecard, lactation cycles, milking parlor hygiene, CMT mastitis testing, and showmanship.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Identify the 6 major purebred dairy breeds (Holstein, Jersey, Guernsey, Brown Swiss, Ayrshire, Milking Shorthorn)',
        'Master the PDCA Dairy Cow Unified Scorecard breakdown (Udder 40%, Dairy Strength 25%, Rear Feet & Legs 20%, Frame 15%)',
        'Compare milk volume (Holstein) vs butterfat & protein components (Jersey/Guernsey)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Spotty Cows & Sweet Milk!',
          readAloud: 'Dairy cows give us delicious, cold, creamy milk for cereal, cheese, and ice cream! Black and white Holsteins are the most famous cows in the world.',
          sections: [{ title: 'Black and White Holsteins', body: 'Holsteins have big black and white patches. Jerseys are smaller, gentle fawn-colored cows with big doe-like eyes!' }],
          quickCheck: { question: 'Which dairy breed is famous for its classic black-and-white patches and produces the highest volume of milk?', options: ['Holstein', 'Jersey', 'Angus'], correctIndex: 0, feedback: 'Holsteins produce the largest volume of milk in the world!' }
        },
        junior: {
          headline: 'The 6 Major Dairy Breeds & The PDCA Scorecard',
          sections: [
            {
              title: 'The 6 Recognized Dairy Breeds',
              body: '• Holstein: Black and white (or red and white), largest breed, highest milk volume.\n• Jersey: Smallest breed, fawn color, highest butterfat and milk protein %.\n• Guernsey: Fawn with white markings, produces golden milk rich in beta-carotene.\n• Brown Swiss: Solid silver to dark brown, ancient hardy breed, ideal cheese milk.\n• Ayrshire: Mahogany red and white, excellent udder attachment and vigor.\n• Milking Shorthorn: Red, white, or roan dual-purpose heritage breed.'
            },
            {
              title: 'The PDCA Dairy Cow Unified Scorecard (100 Points)',
              body: '1. Udder (Mammary System): 40 Points (highest weighted category!)\n2. Dairy Strength: 25 Points\n3. Rear Feet and Legs: 20 Points\n4. Frame: 15 Points'
            }
          ],
          quickCheck: {
            question: 'On the official PDCA Dairy Cow Unified Scorecard, which category receives the highest point allocation (40 points)?',
            options: ['Udder (Mammary System)', 'Frame', 'Ears'],
            correctIndex: 0,
            feedback: 'The udder accounts for 40% of the entire dairy scorecard point allocation.'
          }
        },
        intermediate: {
          headline: 'Linear Classification Breakdown (1 to 50 Scale) & Udder Cleft',
          sections: [{ title: 'Evaluating Mammary Structure', body: 'High-scoring udders require: strong median suspensory ligament (visible udder cleft), high wide rear udder attachment, smooth snug fore udder attachment, and squarely placed teats.' }],
          quickCheck: { question: 'What anatomical ligament divides the udder into halves and provides primary vertical support?', options: ['The Median Suspensory Ligament', 'The Lateral ligament', 'The Achilles tendon'], correctIndex: 0, feedback: 'The median suspensory ligament provides essential vertical support for lifetime production.' }
        },
        senior: {
          headline: 'Sire Summaries, Net Merit Dollars ($NM) & Genomic PTAs',
          sections: [{ title: 'Genomic Selection in Dairy Sires', body: 'Evaluate Predicted Transmitting Ability (PTA) for Milk, Fat, Protein, Productive Life (PL), Somatic Cell Score (SCS), and Lifetime Net Merit ($NM).' }],
          quickCheck: { question: 'What does a high positive Productive Life (PL) PTA indicate in a dairy sire summary?', options: ['Daughters are expected to remain productive and sound in the milking herd for additional months', 'Shorter ears', 'More white spots'], correctIndex: 0, feedback: 'Productive Life evaluates lifetime durability and longevity in commercial herds.' }
        }
      },
      quizQuestions: [
        { id: 'dy_bb_q1', question: 'Which dairy breed is renowned for the highest percentage of butterfat and milk protein, making its milk ideal for rich ice cream and butter?', options: ['Jersey', 'Holstein', 'Ayrshire'], correctIndex: 0, explanation: 'Jerseys produce milk with the highest concentration of butterfat and protein.', division: 'junior' }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Understand cow comfort: resting 12-14 hours daily in sand-bedded free stalls',
        'Maintain clean milking parlor hygiene (pre-dip, dry wipe, post-dip teat seal)',
        'Manage fresh water access (dairy cows drink 30 to 50 gallons of water daily)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Clean Beds & Cool Baths!',
          readAloud: 'Dairy cows love lying down in soft, fluffy sand beds to rest and make sweet milk!',
          sections: [{ title: 'Lots of Cold Water', body: 'Making milk takes lots of water! A milking dairy cow drinks a whole bathtub of fresh water every day.' }],
          quickCheck: { question: 'Approximately how much water does a milking dairy cow drink every day?', options: ['30 to 50 gallons of water (a full bathtub)', 'One cup', 'Zero gallons'], correctIndex: 0, feedback: 'Dairy cows drink 30 to 50 gallons of fresh water daily!' }
        },
        junior: {
          headline: 'Free Stall Management, Cow Comfort & Parlor Hygiene',
          sections: [
            {
              title: 'The Cow Comfort Rule: 12 to 14 Hours Resting',
              body: 'Milk is produced when cows lie down. Resting increases blood flow through the udder by 30-50%. Deep sand bedding provides cool, cushiony, inorganic support that prevents bacterial growth.'
            },
            {
              title: 'Standard Milking Routine',
              body: '1. Strip milk onto strip cup to inspect for mastitis.\n2. Apply pre-dip (germicidal disinfectant); wait 30 seconds.\n3. Wipe teat dry with individual clean towel.\n4. Attach milking unit within 60–90 seconds of tactile stimulation (oxytocin peak).\n5. Post-dip with barrier teat dip to seal streak canal.'
            }
          ],
          quickCheck: { question: 'Why is sand considered the gold standard bedding material for dairy cow comfort and mastitis prevention?', options: ['Sand is inorganic and does not support bacterial growth like wet wood shavings', 'Sand makes cows run faster', 'Sand changes milk color'], correctIndex: 0, feedback: 'Inorganic sand cushions joints and inhibits environmental bacterial growth.' }
        },
        intermediate: {
          headline: 'Milking Mechanics: Vacuum Pulsation Ratios & Teat End Hyperkeratosis',
          sections: [{ title: 'Milking Machine Settings', body: 'Maintain steady vacuum (11.5–12.5 kPa) and a 60:40 pulsation ratio (60% milk phase, 40% rest phase). Over-milking causes teat end hyperkeratosis (rough ringing), opening paths for mastitis.' }],
          quickCheck: { question: 'What teat injury results from over-milking or excessive vacuum pressure on dairy cows?', options: ['Teat end hyperkeratosis (rough keratin ringing)', 'Pinkeye', 'Foot rot'], correctIndex: 0, feedback: 'Over-milking damages the delicate teat streak canal, causing hyperkeratosis.' }
        },
        senior: {
          headline: 'Ventilation Engineering (Tunnel vs Cross-Vent) & Heat Index Abatement',
          sections: [{ title: 'Heat Stress Abatement', body: 'Dairy cows begin experiencing heat stress at a Temperature-Humidity Index (THI) of just 68. Install high-volume low-speed (HVLS) fans combined with automated feed line soakers.' }],
          quickCheck: { question: 'At what Temperature-Humidity Index (THI) do high-producing dairy cows begin experiencing production drops from heat stress?', options: ['THI of 68', 'THI of 110', 'Freezing temperatures only'], correctIndex: 0, feedback: 'High-producing dairy cows generate tremendous metabolic heat and stress at THI 68.' }
        }
      },
      quizQuestions: [
        { id: 'dy_dc_q1', question: 'How long does a dairy cow need to lie down and rest each day to achieve optimal milk production and rumination?', options: ['12 to 14 hours per day', '1 hour per day', '24 continuous hours'], correctIndex: 0, explanation: 'Resting 12-14 hours increases udder blood flow by up to 50%.', division: 'junior' }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: [
        'Total Mixed Ration (TMR) balancing: corn silage, alfalfa haylage, protein concentrates, and minerals',
        'Understand energy balance in early lactation (Negative Energy Balance & Ketosis prevention)',
        'Prevent Milk Fever (Hypocalcemia) through Dietary Cation-Anion Difference (DCAD) pre-calving rations'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Yummy Green Salad for Cows (TMR)!',
          readAloud: 'Dairy cows eat a giant mixed salad called TMR! It mixes sweet corn, alfalfa grass, and minerals so every bite is healthy.',
          sections: [{ title: 'Every Bite Balanced', body: 'When cows eat TMR, they get all their vitamins in every single bite without picking out just the corn.' }],
          quickCheck: { question: 'What do we call the completely blended feed mix fed to dairy cows?', options: ['Total Mixed Ration (TMR)', 'Candy mix', 'Soup'], correctIndex: 0, feedback: 'TMR blends all forage, grain, and minerals into a uniform balanced meal!' }
        },
        junior: {
          headline: 'Total Mixed Rations, Rumination & Milk Fever Prevention',
          sections: [
            {
              title: 'What is a Total Mixed Ration (TMR)?',
              body: 'A TMR blends forages (corn silage, alfalfa hay) and concentrates (corn, soybean meal, minerals) into a uniform mixture. This prevents cows from sorting and maintains a stable rumen pH.'
            },
            {
              title: 'Milk Fever (Hypocalcemia)',
              body: 'When a cow begins lactating at calving, calcium rushes into colostrum. If blood calcium plummets, the cow suffers Milk Fever (muscle tremors, inability to stand, "downer cow"). Prevented by proper dry cow mineral balancing.'
            }
          ],
          quickCheck: {
            question: 'What mineral deficiency causes "Milk Fever" (Hypocalcemia) in dairy cows right after calving?',
            options: ['Calcium', 'Iron', 'Salt'],
            correctIndex: 0,
            feedback: 'Sudden demand for calcium in colostrum triggers hypocalcemic Milk Fever.'
          }
        },
        intermediate: {
          headline: 'Dietary Cation-Anion Difference (DCAD) & Negative Energy Balance',
          sections: [{ title: 'Negative Energy Balance and Ketosis', body: 'High-producing cows produce more milk than they can consume energy for in early lactation. Body fat mobilizes rapidly, flooding the liver with non-esterified fatty acids (NEFA) and producing ketone bodies (Ketosis). Balance ruminally protected fats and starch.' }],
          quickCheck: { question: 'What metabolic disorder occurs when a fresh dairy cow mobilizes body fat too rapidly, producing ketones in breath, urine, and milk?', options: ['Ketosis', 'Milk fever', 'Bloat'], correctIndex: 0, feedback: 'Ketosis results from severe negative energy balance in early lactation.' }
        },
        senior: {
          headline: 'Rumen Degradable Protein (RDP) vs Rumen Undegradable Protein (RUP) & Amino Acid Balancing',
          sections: [{ title: 'Bypassing the Rumen with RUP', body: 'Microbial protein synthesizes high biological value protein, but high-producing cows need Rumen Undegradable Protein (RUP / bypass protein) fortified with rumen-protected lysine and methionine.' }],
          quickCheck: { question: 'Why is Rumen Undegradable Protein (RUP) incorporated into high-producing dairy cow rations?', options: ['It bypasses rumen microbial degradation to be absorbed directly in the small intestine', 'It stops fermentation', 'It makes milk yellow'], correctIndex: 0, feedback: 'RUP bypasses the rumen to deliver limiting amino acids directly to the small intestine.' }
        }
      },
      quizQuestions: [
        { id: 'dy_nu_q1', question: 'What is the primary forage foundation fed to dairy cattle across North America for energy and fiber?', options: ['Corn silage and alfalfa haylage', 'Dry pine bark', 'Wheat bread'], correctIndex: 0, explanation: 'Corn silage provides high energy starch and fiber for lactation.', division: 'junior' }
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
        'Perform the California Mastitis Test (CMT) to detect subclinical mastitis',
        'Monitor Somatic Cell Count (SCC) standards (< 200,000 cells/mL for healthy milk)',
        'Recognize Displaced Abomasum (DA / "Twisted Stomach") ping sounds',
        'Implement strict calf colostrum management and Johne’s disease biosecurity'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Happy Calves & Clean Colostrum!',
          readAloud: 'When baby calves are born, we feed them warm mother’s milk called colostrum within their very first hours of life!',
          sections: [{ title: 'Super Milk for Calves', body: 'Colostrum is packed with healthy vitamins that protect baby calves from getting sick.' }],
          quickCheck: { question: 'What is the special first milk produced by a mother cow called?', options: ['Colostrum', 'Yogurt', 'Apple juice'], correctIndex: 0, feedback: 'Colostrum is the golden first milk full of protective antibodies!' }
        },
        junior: {
          headline: 'Mastitis Detection, CMT Paddle Testing & Somatic Cell Counts',
          sections: [
            {
              title: 'California Mastitis Test (CMT)',
              body: 'Mastitis is an inflammation of the mammary gland caused by bacteria (Staph, Strep, E. coli). The CMT paddle tests each of the 4 quarters. Mix milk with reagent; if the mixture thickens into a slime or gel, subclinical mastitis is present.'
            },
            {
              title: 'Somatic Cell Count (SCC)',
              body: 'SCC measures white blood cells fighting infection in milk. A healthy cow has an SCC under 100,000–200,000 cells/mL. High SCC reduces milk quality, shelf life, and cheese yield.'
            }
          ],
          quickCheck: {
            question: 'What tool allows a 4-H dairy exhibitor to test all 4 udder quarters for subclinical mastitis on the farm?',
            options: ['California Mastitis Test (CMT) 4-well paddle', 'A stethoscope', 'A thermometer'],
            correctIndex: 0,
            feedback: 'The 4-well CMT paddle identifies which specific quarter has elevated somatic cells.'
          }
        },
        intermediate: {
          headline: 'Left Displaced Abomasum (LDA) Diagnosis & Johne’s Disease Biosecurity',
          sections: [{ title: 'Displaced Abomasum (DA)', body: 'Following calving, when the rumen is not filled with forage, the abomasum fills with gas and floats upward to the left side (LDA), producing a high-pitched metallic basketball "ping" on auscultation. Requires surgical omentopexy.' }],
          quickCheck: { question: 'What characteristic sound is heard with a stethoscope when flicking the left ribcage of a cow with a Left Displaced Abomasum (LDA)?', options: ['A high-pitched metallic basketball "ping"', 'A low hum', 'Silence'], correctIndex: 0, feedback: 'The trapped gas bubble produces a distinctive metallic ping.' }
        },
        senior: {
          headline: 'Bovine Leukosis Virus (BLV) & Johne’s (Mycobacterium avium paratuberculosis) Control',
          sections: [{ title: 'Johne’s Disease Biosecurity', body: 'Johne’s causes chronic granulomatous enteritis, incurable wasting diarrhea, and thickened corrugated intestines. Transmitted fecal-orally in colostrum; remove calves at birth and feed heat-treated colostrum.' }],
          quickCheck: { question: 'How is Johne’s disease most commonly transmitted to young dairy replacement heifers?', options: ['Ingesting fecal-contaminated colostrum or milk from infected adult cows', 'Mosquito bites', 'Air plumes'], correctIndex: 0, feedback: 'Johne’s is transmitted fecal-orally through colostrum or contaminated teats.' }
        }
      },
      quizQuestions: [
        { id: 'dy_hb_q1', question: 'What is the benchmark Somatic Cell Count (SCC) for an uninfected, healthy dairy cow quarter?', options: ['Under 100,000 to 200,000 cells/mL', 'Over 5,000,000 cells/mL', 'Zero cells always'], correctIndex: 0, explanation: 'Healthy milk contains fewer than 200,000 somatic cells per mL.', division: 'junior' }
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
        'Lead dairy cattle using leather show halters (NO show sticks in dairy showmanship)',
        'Master the slow backward walk facing the heifer/cow with eyes on the judge',
        'Understand dairy cow vision, flight zones, and gentle low-stress handling',
        'Provide non-slip grooved walking surfaces to prevent pelvic splits'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Walking Gently with Sweet Dairy Heifers!',
          readAloud: 'Dairy heifers are calm and gentle. We hold their leather halter lead strap and walk smoothly beside them.',
          sections: [{ title: 'Gentle Hands Only', body: 'Talk to your heifer softly so she knows you are there. Always walk slowly and never shout in the barn.' }],
          quickCheck: { question: 'Should you shout and wave your arms when moving dairy cows?', options: ['NO! Move quietly and calmly so cows feel safe and relaxed', 'Yes, cows like loud noises', 'Only at fair'], correctIndex: 0, feedback: 'Quiet, calm handling keeps dairy cattle relaxed and easy to lead.' }
        },
        junior: {
          headline: 'Dairy Lead Technique (No Show Sticks!) & Backward Walking',
          sections: [
            {
              title: 'NO Show Sticks in Dairy!',
              body: 'Unlike beef cattle showmanship, SHOW STICKS ARE NEVER USED in dairy cattle showmanship! You control foot placement entirely through pressure on the halter lead strap.'
            },
            {
              title: 'Walking Backward Facing the Cow',
              body: 'Hold the lead strap in your left hand (folded, never wrapped) roughly 6–12 inches from the halter ring. Walk backward smoothly in the direction of ring travel, keeping your eyes alternating between your animal and the judge.'
            }
          ],
          quickCheck: {
            question: 'Are show sticks used in 4-H Dairy Cattle showmanship?',
            options: ['NO, show sticks are strictly prohibited in dairy showmanship; foot placement is guided via halter lead pressure', 'YES, all cattle use show sticks', 'Only on milking cows'],
            correctIndex: 0,
            feedback: 'Show sticks are never used in dairy showmanship!'
          }
        },
        intermediate: {
          headline: 'Flight Zone Navigation & Non-Slip Floor Grooving',
          sections: [{ title: 'Preventing Pelvic Splits in Lactating Cows', body: 'Smooth wet concrete causes cows to slip and dislocate hips or tear adductor muscles ("split cow"). Barns must have diamond-pattern grooved concrete and non-slip rubber parlor mats.' }],
          quickCheck: { question: 'Why is concrete floor grooving essential in modern dairy housing?', options: ['To provide traction and prevent hip dislocations and pelvic split injuries on wet concrete', 'To make cleaning harder', 'For decoration'], correctIndex: 0, feedback: 'Grooved concrete provides essential footing for heavy dairy cattle.' }
        },
        senior: {
          headline: 'FARM (Farmers Assuring Responsible Management) Animal Care Audits',
          sections: [{ title: 'National FARM Program Metrics', body: 'Audit standards require 95%+ of herd with body condition score > 2.0, locomotion score 1 (sound walking), hock lesion score 1 (free of swelling), and pre-weaned calves receiving colostrum within 4 hours.' }],
          quickCheck: { question: 'What national program audits animal welfare, disbudding pain management, and calf care across US dairy farms?', options: ['The National FARM Program (Farmers Assuring Responsible Management)', 'The Corn Board', 'The EPA only'], correctIndex: 0, feedback: 'The FARM program establishes verified animal welfare standards for the dairy industry.' }
        }
      },
      quizQuestions: [
        { id: 'dy_hw_q1', question: 'How does an exhibitor adjust foot placement on a dairy heifer without using a show stick?', options: ['Gently apply backward or forward pressure on the halter lead strap while watching the animal’s shoulders and feet', 'Kick the heifer’s hooves', 'Use a broom'], correctIndex: 0, explanation: 'Lead strap pressure coordinates the heifer’s head movement and steps.', division: 'junior' }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Read and interpret Dairy Herd Improvement (DHI) production test sheets',
        'Understand Lactation Curves, Days in Milk (DIM), and 305-day 2x Mature Equivalent (ME)',
        'Track heifer raising costs to first calving (feed, bedding, breeding fees)',
        'Complete the 4-H Dairy Cattle Financial Balance Sheet'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Dairy Scrapbook!',
          readAloud: 'Glue a picture of your heifer, write down her birthday, and record how many gallons of milk her mother gives!',
          sections: [{ title: 'Happy Milk Records', body: 'Count how many gallons of milk your dairy cows give every single day!' }],
          quickCheck: { question: 'What does a dairy heifer grow up to become?', options: ['A milking dairy cow', 'A horse', 'A sheep'], correctIndex: 0, feedback: 'A female calf grows into a heifer, and becomes a cow when she has her first calf!' }
        },
        junior: {
          headline: 'Reading DHI Test Sheets & Calculating Milk Weights',
          sections: [
            {
              title: 'Milk Weight Math',
              body: 'Milk is weighed in POUNDS, not gallons! One gallon of milk weighs approximately 8.6 lbs.\nExample: If a Holstein produces 86 lbs of milk today: 86 ÷ 8.6 = 10 gallons of milk per day!'
            }
          ],
          quickCheck: { question: 'If a dairy cow produces 43 lbs of milk in a day, how many gallons of milk did she produce?', options: ['5 gallons (43 ÷ 8.6 = 5)', '1 gallon', '50 gallons'], correctIndex: 0, feedback: '43 lbs divided by 8.6 lbs/gallon = 5 gallons of milk!' }
        },
        intermediate: {
          headline: '305-Day 2X ME Records & Heifer Replacement Economics',
          sections: [{ title: 'Standardized 305-Day Lactations', body: 'Lactation records are standardized to 305 days, twice-daily milking (2x), and Mature Equivalent (ME) to compare 2-year-old heifers fairly with 5-year-old mature cows.' }],
          quickCheck: { question: 'What is the standard length of a dairy cow lactation record in DHI reporting?', options: ['305 days', '60 days', '365 days'], correctIndex: 0, feedback: '305 days is the global benchmark for dairy lactation reporting.' }
        },
        senior: {
          headline: 'Dairy Feed Costs Over Milk Income (IOFC) & Calving Interval Math',
          sections: [{ title: 'Income Over Feed Cost (IOFC)', body: 'IOFC = Gross Milk Revenue per hundredweight ($/cwt) minus Daily Feed Cost per cow. Target 12.5 to 13.5 month calving intervals to maximize peak lactation profitability.' }],
          quickCheck: { question: 'What is the most widely watched metric of daily profitability on commercial dairy farms?', options: ['Income Over Feed Cost (IOFC)', 'Number of barn windows', 'Cost of straw only'], correctIndex: 0, feedback: 'IOFC measures revenue remaining after paying daily feed expenses.' }
        }
      },
      quizQuestions: [
        { id: 'dy_rk_q1', question: 'How much does one standard gallon of fresh cows’ milk weigh?', options: ['8.6 pounds', '1 pound', '16 pounds'], correctIndex: 0, explanation: 'Milk has a specific gravity of ~1.03, weighing 8.6 lbs per gallon.', division: 'junior' }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 30,
      objectives: [
        'Master the slow backward walk facing the animal with lead in left hand and eyes on judge',
        'Set up feet: on HEIFERS, rear leg nearest judge is back, rear leg away is forward; on MILKING COWS, reverse to show udder!',
        'Maintain level topline, head held high, and smooth ring spacing',
        'Professional dairy show attire (clean white long-sleeve shirt, white pants, leather boots)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Proud in White Clothes!',
          readAloud: 'Dairy showmanship exhibitors wear clean white clothes and walk backward smoothly, smiling at the judge!',
          sections: [{ title: 'Eyes on the Judge', body: 'Walk slowly backward, hold your head high, and look at the judge with confidence!' }],
          quickCheck: { question: 'What color clothing is traditionally worn in dairy cattle showmanship?', options: ['Clean white long-sleeve shirt and white pants', 'Bright orange jumpsuit', 'Pajamas'], correctIndex: 0, feedback: 'Traditional dairy showmanship attire is immaculate all-white!' }
        },
        junior: {
          headline: 'Setting Feet on Heifers vs Milking Cows & Backward Walking',
          sections: [
            {
              title: 'Foot Placement: Heifer vs Milking Cow Rule',
              body: '• HEIFER: Rear leg closest to judge is placed BACK; rear leg away from judge is placed FORWARD. This gives the heifer a long, deep, open flank profile.\n• MILKING COW: The opposite! Rear leg closest to judge is placed FORWARD; rear leg away is placed BACK to give the judge an unobstructed view of the rear udder attachment and fore udder blend!'
            }
          ],
          quickCheck: {
            question: 'When presenting a MILKING DAIRY COW in showmanship, how should the rear feet be positioned when side-profiled to the judge?',
            options: ['Rear leg closest to the judge placed forward to expose the rear udder to full view', 'Rear leg closest placed back', 'Feet crossed'],
            correctIndex: 0,
            feedback: 'Placing the near rear leg forward showcases the rear udder attachment to the judge!'
          }
        },
        intermediate: {
          headline: 'Head Carriage, Ring Cushion & Crossover Turns',
          sections: [{ title: 'Maintaining Head Carriage and Throatlatch Angle', body: 'Hold the lead strap 6 to 12 inches from the halter ring. Keep the cow’s chin up so the neck appears long, lean, and angular without choking.' }],
          quickCheck: { question: 'Why is a dairy cow’s head held high and extended when leading in the show ring?', options: ['To demonstrate dairy character, sharpness, and clean throatlatch extension', 'To keep the cow from seeing the ground', 'To make the cow walk faster'], correctIndex: 0, feedback: 'High head carriage accentuates angularity and clean dairy neck extension.' }
        },
        senior: {
          headline: 'Oral Judge Reasoning & Split-Second Ring Awareness',
          sections: [{ title: 'Delivering Master Reasons', body: 'State: "Judge, my senior two-year-old demonstrates superior height and width of rear udder attachment and cleaner openness through the rib over the second-place cow."' }],
          quickCheck: { question: 'What should you do if the judge asks you to switch animals with another competitor during a master showmanship drive?', options: ['Politely and calmly exchange lead straps, adjust quickly to the new animal’s stride, and show with equal composure', 'Refuse to trade', 'Complain to your leader'], correctIndex: 0, feedback: 'Master showmen demonstrate composure on any animal in the ring.' }
        }
      },
      quizQuestions: [
        { id: 'dy_sh_q1', question: 'Which hand holds the halter lead strap when an exhibitor is walking backward leading dairy cattle in the show ring?', options: ['The LEFT hand', 'The RIGHT hand', 'Both hands behind the back'], correctIndex: 0, explanation: 'The left hand holds the lead near the halter; the right hand holds the folded strap end.', division: 'junior' }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Understand Grade A milk safety: zero antibiotic residues in the commercial milk supply',
        'Learn why "over-bagging" (painful udder edema) and artificial teat plugging are prohibited',
        'Commit to animal welfare and humane cattle handling',
        'Demonstrate gracious sportsmanship in competitive dairy rings'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Caring for Our Dairy Friends!',
          readAloud: 'In 4-H, we treat our cows with gentle kindness every day and cheer for our club friends!',
          sections: [{ title: 'Kindness First', body: 'Always speak gently to your cow. Doing your best and being a good friend is what makes you a champion.' }],
          quickCheck: { question: 'What is the most important rule in 4-H?', options: ['Taking great care of your animals and being honest and kind', 'Winning every trophy', 'Only eating cheese'], correctIndex: 0, feedback: 'Caring and character are the heart of 4-H!' }
        },
        junior: {
          headline: 'Wholesome Milk Safety & Prohibited Tampering',
          sections: [
            {
              title: 'The Pure Milk Covenant',
              body: 'Every tanker truck of milk is tested for antibiotic residues before being unloaded at the dairy processing plant. If a tanker tests positive for antibiotics, the entire 50,000 lb load is dumped and the offending farm is fined. Always observe milk withhold times!'
            },
            {
              title: 'Prohibited Tampering in Dairy Shows',
              body: 'Over-bagging (leaving cows un-milked to cause painful extreme udder swelling), injecting gas or liquids into udders, or applying harsh irritants to teat ends is cruel and strictly prohibited by PDCA show rules.'
            }
          ],
          quickCheck: { question: 'What happens to a commercial milk tanker truck if even trace antibiotic residues are detected in the milk?', options: ['The entire tanker load is rejected and dumped, and the responsible farm pays for the load', 'It is bottled anyway', 'It is fed to pets'], correctIndex: 0, feedback: 'Every milk tanker is tested; zero antibiotic residues are tolerated.' }
        },
        intermediate: {
          headline: 'PDCA Show Ring Ethics Code & Ultrasound Udder Audits',
          sections: [{ title: 'PDCA Ethics Enforcement', body: 'Shows utilize veterinary ultrasound and teat endoscopy to detect illegal foreign substances (collagen, saline, gas) injected into udders. Violators face multi-year national exhibition bans.' }],
          quickCheck: { question: 'Why do national dairy shows use ultrasound machines to inspect udders of champions?', options: ['To verify that udders have not been tampered with through illegal injections of gas, saline, or silicone', 'To measure milk volume', 'To take pictures'], correctIndex: 0, feedback: 'Ultrasound audits protect show integrity and animal welfare.' }
        },
        senior: {
          headline: 'Agricultural Youth Leadership, Consumer Advocacy & Defending Dairy Truth',
          sections: [{ title: 'Defending Modern Dairy Production', body: 'Senior 4-H exhibitors answer visitor questions about calf housing, pasteurization, and cow comfort with factual scientific pride, building lifelong consumer trust.' }],
          quickCheck: { question: 'How do senior 4-H dairy exhibitors best advocate for the dairy industry at the county fair?', options: ['Engage visitors politely, explain animal care and milk safety, and keep the barn spotless', 'Stay away from the public', 'Post arguments online'], correctIndex: 0, feedback: 'Informed, courteous advocacy builds public trust in modern dairy farming.' }
        }
      },
      quizQuestions: [
        { id: 'dy_et_q1', question: 'What practice violates PDCA show ethics by causing painful, excessive udder distention through withholding milking?', options: ['Over-bagging', 'Clipping hair', 'Washing with shampoo'], correctIndex: 0, explanation: 'Over-bagging causes painful pressure, milk leakage, and violates welfare standards.', division: 'junior' }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Set SMART dairy goals for heifer growth and showmanship execution',
        'Prepare and deliver a club demonstration (e.g. California Mastitis Testing or Milk Quality)',
        'Educate the public on the nutritional benefits of 3 servings of dairy daily',
        'Complete the year-end 4-H Dairy Project Record Book'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Sharing the Milk Story!',
          readAloud: 'Tell your club about your heifer! Draw a colorful poster showing how milk gets from the farm to the refrigerator.',
          sections: [{ title: 'Speaking to Friends', body: 'Share your heifer’s name, breed, and your favorite dairy treat with your 4-H club!' }],
          quickCheck: { question: 'What is a fun way to share your dairy project with your club?', options: ['Giving a show-and-tell presentation with a colorful poster', 'Whispering in the dark', 'Staying home'], correctIndex: 0, feedback: 'Show and tell builds public speaking confidence!' }
        },
        junior: {
          headline: 'SMART Dairy Goals & Demonstrations',
          sections: [
            {
              title: 'Setting a SMART Dairy Goal',
              body: 'Example: "I will practice leading my dairy heifer backward twice a week for 20 minutes from April through July to master lead strap foot placement."'
            }
          ],
          quickCheck: { question: 'Which goal meets all SMART criteria?', options: ['"I will test my cow’s milk with the CMT paddle monthly and record SCC in my book through fair."', '"I want a purple ribbon."', '"Maybe I will milk a cow."'], correctIndex: 0, feedback: 'Specific, measurable, and time-bound goals drive mastery.' }
        },
        intermediate: {
          headline: 'Public Education, Dairy Bar Outreach & Interactive Displays',
          sections: [{ title: 'Educational Fair Displays', body: 'Design displays explaining why milk is rich in 13 essential nutrients (calcium, vitamin D, protein, potassium) and debunk myths about plant beverages.' }],
          quickCheck: { question: 'How many essential nutrients are naturally provided in real dairy milk?', options: ['13 essential nutrients', 'Only 1', 'Zero'], correctIndex: 0, feedback: 'Real cows’ milk provides 13 essential nutrients including calcium and protein.' }
        },
        senior: {
          headline: 'Mentorship in Dairy Clinics & Industry Careers',
          sections: [{ title: 'Mentoring Junior Exhibitors', body: 'Senior exhibitors organize hands-on clipping workshops, dairy judging practice sessions, and guide first-year members through their first show.' }],
          quickCheck: { question: 'What is the highest demonstration of 4-H dairy project leadership for a senior exhibitor?', options: ['Hosting clinics to mentor younger members in showmanship, judging, and fitting', 'Only competing when you know you will win', 'Selling all your cows early'], correctIndex: 0, feedback: 'Mentoring younger youth completes the 4-H leadership circle.' }
        }
      },
      quizQuestions: [
        { id: 'dy_cg_q1', question: 'When giving an illustrated talk on the California Mastitis Test, what makes the demonstration most effective?', options: ['Mixing actual milk with CMT reagent on the paddle and showing the slime reaction to the audience', 'Talking with no visual aids', 'Speaking so fast no one can hear'], correctIndex: 0, explanation: 'Live demonstrations of real reactions engage audiences and teach effectively.', division: 'junior' }
      ]
    }
  ]
};
