// WarrenWise Youth Animal Training Academy
// Species Pack: Cavies / Guinea Pigs (Cavia porcellus)
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const CAVIES_PACK = {
  id: 'cavies',
  name: 'Cavies Project Academy',
  species: 'Cavy (Guinea Pig)',
  category: 'Small Animal',
  icon: 'Sparkles',
  version: '2.1.0',
  lastVerifiedDate: '2026-08-20',
  verifiedBy: 'Extension Small Animal Specialist & ACBA/ARBA Cavy Judges Committee',
  description: 'Complete 4-H cavy project curriculum covering ARBA recognized cavy breeds, unique Vitamin C requirements, solid-floor housing, showmanship mats, and ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Recognize the 13 ARBA-recognized cavy breeds (American, Abyssinian, Peruvian, Silkie, Teddy, etc.)',
        'Understand the 4-Class weight system (Junior up to 22 oz, Intermediate 22-32 oz, Senior over 32 oz)',
        'Identify coat characteristics: Smooth, Wire/Resilient, Longhaired, and Crested/Rosetted',
        'Learn the difference between satin vs non-satin varieties'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Meet the Wonderful Cavies!',
          readAloud: 'Cavies, also known as guinea pigs, make cheerful squeaks called wheeks! Some have smooth hair and some have funny swirl haircuts called rosettes.',
          sections: [
            {
              title: 'Smooth vs Swirly Cavies',
              body: 'American cavies have smooth shiny fur that lays flat. Abyssinian cavies have lots of little circles in their fur called rosettes that look like little starbursts!'
            },
            {
              title: 'Cavy Squeaks and Wheeks',
              body: 'When your cavy hears the refrigerator open, they make a happy sound: "Wheek! Wheek! Wheek!" That means: "Yay! Fresh treats are coming!"'
            }
          ],
          quickCheck: {
            question: 'What is another common name for a cavy?',
            options: ['Guinea Pig', 'Hamster', 'Chinchilla'],
            correctIndex: 0,
            feedback: 'That’s right! Cavies and guinea pigs are the exact same wonderful animal.'
          }
        },
        junior: {
          headline: 'The 13 ARBA Breeds & 4-Class Weight Categories',
          sections: [
            {
              title: 'The 13 Recognized Breeds',
              body: 'ARBA recognizes 13 distinct breeds of cavies: American, American Satin, Abyssinian, Abyssinian Satin, Peruvian, Peruvian Satin, Silkie, Silkie Satin, Teddy, Teddy Satin, Texel, Coronet, and White Crested.\n• Short coats: American (smooth), Teddy (resilient plush fur).\n• Rosetted: Abyssinian (requires distinct rosettes with sharp centers).\n• Longhaired: Peruvian (mane parted down back sweeping forward), Silkie (sweeps straight back like a cape), Texel (curled ringlets).'
            },
            {
              title: 'The Cavy 4-Class Weight System',
              body: 'Unlike rabbits which use age, cavies are classified strictly by weight in show classes:\n• Junior: Up to 22 ounces (minimum 12 oz)\n• Intermediate: Over 22 ounces and up to 32 ounces\n• Senior: Over 32 ounces'
            }
          ],
          quickCheck: {
            question: 'In cavy showing, what determines whether an animal is in the Junior, Intermediate, or Senior class?',
            options: ['Its body weight on the official scale', 'Its ear length', 'The number of spots on its coat'],
            correctIndex: 0,
            feedback: 'Correct! Cavy age classes are determined purely by body weight in ounces.'
          }
        },
        intermediate: {
          headline: 'Rosette Placement, Satin Sheen & Disqualifications',
          sections: [
            {
              title: 'Abyssinian Rosette Standards',
              body: 'An ideal show Abyssinian must possess a minimum of 8 distinct rosettes: 4 saddle rosettes forming a straight line across the body, 2 hip rosettes, and 2 rump rosettes. Double centers, flat spots, or guttering (matted lines between rosettes) are faulted or disqualified.'
            },
            {
              title: 'Satin Gene Mutation',
              body: 'Satin breeds possess hollow hair shafts that reflect light with intense, glass-like luminescence. While stunning, satin cavies can carry a genetic risk of osteodystrophy (calcium mobilization disorder) requiring careful breeding selection.'
            }
          ],
          quickCheck: {
            question: 'How many properly placed rosettes are required on an ideal show Abyssinian cavy?',
            options: ['At least 8 distinct rosettes', 'Only 2', 'Over 30 rosettes'],
            correctIndex: 0,
            feedback: 'Yes! A minimum of 8 rosettes (4 saddle, 2 hip, 2 rump) with clear centers is required.'
          }
        },
        senior: {
          headline: 'Genetic Classifications, Longhair Grooming & ACBA Standards',
          sections: [
            {
              title: 'Longhair Care & Show Presentation',
              body: 'Peruvian, Silkie, Coronet, and Texel show coats require specialized wrapping with tissue paper and plastic wraps to protect coat density, sweep length, and cleanliness from urine and feces.'
            }
          ],
          quickCheck: {
            question: 'What distinguishes a Coronet cavy from a Silkie cavy?',
            options: ['Coronets have a single circular rosette (crest) on top of the forehead between the ears', 'Coronets have short curly fur', 'Silkie cavies have rosettes on their rump'],
            correctIndex: 0,
            feedback: 'Exactly. A Coronet has a long flowing Silkie coat plus a single symmetrical crest on the forehead.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_bb_q1',
          question: 'What is the maximum weight for a Junior Cavy in ARBA competition?',
          options: ['12 ounces', '22 ounces', '32 ounces', '48 ounces'],
          correctIndex: 1,
          explanation: 'Cavies weighing up to 22 ounces compete as Juniors; over 22 oz up to 32 oz are Intermediates; over 32 oz are Seniors.',
          division: 'junior'
        },
        {
          id: 'cv_bb_q2',
          question: 'Which cavy breed features dense, crimped, springy fur that stands upright from the body?',
          options: ['American', 'Teddy', 'Silkie', 'Peruvian'],
          correctIndex: 1,
          explanation: 'Teddies have a dense, resilient, plush coat that springs back when touched, resembling a teddy bear.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Recognize why cavies require solid-bottom housing instead of wire mesh flooring',
        'Identify safe bedding (kiln-dried aspen, paper bedding) vs toxic bedding (cedar)',
        'Manage appropriate cage sizing (minimum 7.5 to 10.5 sq ft for a pair)',
        'Maintain comfortable barn temperatures (65°F to 75°F; highly vulnerable to heatstroke > 80°F)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Safe, Soft Homes for Happy Cavies!',
          readAloud: 'Cavies have tiny, tender feet! Their cage floor must always be flat and covered in soft fluffy paper bedding.',
          sections: [
            {
              title: 'Flat Floors Only!',
              body: 'Wire cages hurt little cavy toes and can trap their feet. Always give your cavy a solid flat floor with deep, cozy bedding.'
            },
            {
              title: 'A Little House to Hide In',
              body: 'Cavies love having a wooden hidey-house or igloo where they can take peaceful afternoon naps and feel safe.'
            }
          ],
          quickCheck: {
            question: 'Why should a cavy cage have a solid flat floor instead of wire mesh?',
            options: ['Wire mesh hurts their delicate foot pads and can break their toes', 'Wire makes them shed faster', 'Solid floors are colder'],
            correctIndex: 0,
            feedback: 'Yes! Solid floors prevent painful bumblefoot infections and broken legs.'
          }
        },
        junior: {
          headline: 'Bedding Safety, Cage Sizes & Daily Spot Cleaning',
          sections: [
            {
              title: 'Safe vs Dangerous Bedding',
              body: 'SAFE: Kiln-dried aspen shavings, recycled paper pulp bedding, or washable fleece liners with absorbent underpads.\nDANGEROUS: Cedar shavings (contains toxic plicatic aromatic hydrocarbons that damage liver and respiratory tract) and raw un-kiln-dried pine.'
            },
            {
              title: 'Cage Dimensions for Social Cavies',
              body: 'Cavies are highly social herd animals. A pair of cavies requires a minimum of 7.5 to 10.5 square feet of continuous flat floor space (e.g. standard C&C grid cages 2x4 grid size).'
            }
          ],
          quickCheck: {
            question: 'Which bedding material is strictly toxic to cavies and must NEVER be used in their hutch?',
            options: ['Recycled paper pulp', 'Cedar shavings', 'Kiln-dried aspen shavings'],
            correctIndex: 1,
            feedback: 'Cedar produces toxic aromatic oils that destroy cavy respiratory cilia and liver enzymes.'
          }
        },
        intermediate: {
          headline: 'Bumblefoot (Pododermatitis) Prevention & Heat Sensitivity',
          sections: [
            {
              title: 'Pododermatitis (Bumblefoot) Pathogenesis',
              body: 'Bumblefoot occurs when abrasive flooring, damp dirty bedding, or obesity creates microscopic abrasions on the foot pads, permitting Staphylococcus aureus infection. It causes severe swelling, ulceration, and bone osteomyelitis if neglected. Daily dry bedding and weekly foot inspections are vital.'
            },
            {
              title: 'Temperature Fragility',
              body: 'Cavies thrive at 65°F to 75°F. Unlike rabbits, cavies have very compact bodies with minimal surface area for heat dissipation. Temperatures exceeding 80°F to 82°F cause rapid, fatal heat prostration.'
            }
          ],
          quickCheck: {
            question: 'What is the primary cause of bumblefoot (pododermatitis) in cavies?',
            options: ['Eating too much hay', 'Wire flooring, soiled damp bedding, or abrasive surfaces causing bacterial foot pad ulceration', 'Excessive nail trimming'],
            correctIndex: 1,
            feedback: 'Keep solid floors clean and dry with deep soft bedding to prevent bumblefoot.'
          }
        },
        senior: {
          headline: 'Fleece Liners Sanitation Protocols & Herd Enrichment',
          sections: [
            {
              title: 'Sanitizing Modern Fleece Bedding Systems',
              body: 'Fleece systems require wicking preparation (pre-washing with unscented detergent and white vinegar until liquid passes through instantly without beading). Daily spot-sweeping of fecal pellets and total laundering every 3–4 days prevents ammonia buildup.'
            }
          ],
          quickCheck: {
            question: 'What test confirms fleece bedding is properly prepared to wick urine away from cavy skin?',
            options: ['Smell test', 'Pouring a splash of water to ensure it absorbs through into the lower towel layer instantly without pooling', 'Weighing the fleece'],
            correctIndex: 1,
            feedback: 'Properly wicked fleece keeps the surface dry and protects foot pads from scald.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_dc_q1',
          question: 'What is the ideal ambient temperature range for housing cavies?',
          options: ['40°F to 55°F', '65°F to 75°F', '85°F to 95°F', 'Over 100°F'],
          correctIndex: 1,
          explanation: 'Cavies are comfortable between 65°F and 75°F; temperatures over 80°F risk life-threatening heat stroke.',
          division: 'junior'
        },
        {
          id: 'cv_dc_q2',
          question: 'Why must cavies never be housed alone without daily companionship or a compatible cavy partner?',
          options: ['They forget how to eat', 'They are obligate social herd animals that suffer profound depression and stress when isolated', 'They will escape'],
          correctIndex: 1,
          explanation: 'Cavies are deeply social animals whose welfare depends on companionship and herd communication.',
          division: 'intermediate'
        }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: [
        'Master the critical biological requirement for dietary Vitamin C (10-30 mg daily)',
        'Identify symptoms and prevention of Scurvy (hypovitaminosis C)',
        'Balance unlimited Timothy hay, fortified cavy pellets, and low-calcium fresh vegetables',
        'Learn why rabbit pellets CANNOT be substituted for cavy feed'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Vitamin C & Green Bell Peppers!',
          readAloud: 'Did you know cavies cannot make their own Vitamin C? Just like humans, they need to eat Vitamin C every day to stay strong!',
          sections: [
            {
              title: 'Crunchy Bell Peppers!',
              body: 'A delicious slice of fresh green or red bell pepper provides your cavy with the Vitamin C they need to keep their teeth and joints healthy.'
            },
            {
              title: 'Hay, Hay, and More Hay!',
              body: 'Just like bunnies, cavies need all-day grass hay to chew on and keep their tummy working.'
            }
          ],
          quickCheck: {
            question: 'Which special vitamin do cavies need in their food every single day?',
            options: ['Vitamin C', 'Vitamin X', 'Vitamin Candy'],
            correctIndex: 0,
            feedback: 'You got it! Cavies cannot make Vitamin C, so they count on you to feed it to them!'
          }
        },
        junior: {
          headline: 'Vitamin C Requirements, Scurvy & Cavy-Specific Pellets',
          sections: [
            {
              title: 'Why Cavies Need Vitamin C',
              body: 'Cavies lack the enzyme L-gulonolactone oxidase, which means their bodies cannot manufacture Vitamin C (ascorbic acid). A healthy cavy requires 10–30 mg of Vitamin C per day (more if pregnant, nursing, or stressed). Without Vitamin C, cavies develop Scurvy within 2–3 weeks, suffering swollen painful joints, bleeding gums, weight loss, and lethargy.'
            },
            {
              title: 'Never Feed Rabbit Pellets to Cavies!',
              body: 'Rabbit pellets do not contain adequate Vitamin C, and often contain levels of Vitamin D or antibiotics that are toxic to cavies. Always feed fresh, fortified pellets specifically labeled for Guinea Pigs.'
            },
            {
              title: 'Fresh Veggies as Vitamin C Sources',
              body: 'Fresh green bell pepper, yellow bell pepper, cilantro, and dark leafy lettuces (Romaine, Green Leaf). Avoid iceberg lettuce (mostly water, causes diarrhea) and excessive spinach (high oxalic acid).'
            }
          ],
          quickCheck: {
            question: 'What dangerous condition develops if a cavy does not receive Vitamin C in its diet?',
            options: ['Scurvy (causing painful swollen joints and weakness)', 'Ear mites', 'Loss of whiskers'],
            correctIndex: 0,
            feedback: 'Scurvy is a painful, debilitating disease caused by lack of Vitamin C.'
          }
        },
        intermediate: {
          headline: 'Pellet Degradation, Water Additives Fallacy & Calcium/Oxalate Balance',
          sections: [
            {
              title: 'The Truth About Vitamin C in Water Bottles',
              body: 'Putting Vitamin C drops in water bottles is NOT recommended because ascorbic acid degrades rapidly in the presence of light, heat, and metal sipper nozzles (breaking down within 8–12 hours). It also alters the water taste, causing cavies to drink less and risk dehydration. Feed fresh fortified pellets (<90 days old) and fresh vegetables instead.'
            },
            {
              title: 'Calcium and Bladder Stones (Urolithiasis)',
              body: 'Cavies are prone to calcium carbonate bladder stones. Adult cavies over 6 months should not be fed high-calcium alfalfa hay or excessive high-calcium veggies like parsley or kale. Feed Timothy or orchard grass hay.'
            }
          ],
          quickCheck: {
            question: 'Why is adding liquid Vitamin C to water bottles discouraged by veterinarians and cavy experts?',
            options: ['It turns water bright pink', 'Vitamin C breaks down rapidly in light and water, and changes the taste so the cavy may refuse to drink', 'It causes tooth decay'],
            correctIndex: 1,
            feedback: 'Exactly. Fresh vegetables and stabilized pellets are far more reliable and safe.'
          }
        },
        senior: {
          headline: 'Ascorbic Acid Biochemistry, Collagen Synthesis & Urolithiasis Management',
          sections: [
            {
              title: 'Collagen Cross-Linking Pathology in Hypovitaminosis C',
              body: 'Ascorbic acid serves as an obligate cofactor for prolyl and lysyl hydroxylase in collagen synthesis. Deficiency causes compromised capillary integrity, subperiosteal hemorrhages, joint pain, and epiphyseal separation in young cavies.'
            }
          ],
          quickCheck: {
            question: 'What cellular process fails in cavies suffering from acute ascorbic acid deficiency?',
            options: ['Melanin production', 'Enzymatic hydroxylation of proline and lysine in collagen synthesis', 'Digestive cecal fermentation of cellulose'],
            correctIndex: 1,
            feedback: 'Proline and lysine hydroxylation requires Vitamin C for cross-linking collagen fibers.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_nut_q1',
          question: 'How much Vitamin C does an average adult cavy require each day?',
          options: ['1 to 2 mg', '10 to 30 mg', '500 to 1000 mg', 'Zero mg'],
          correctIndex: 1,
          explanation: 'Standard maintenance requirement is 10–30 mg daily; stressed, sick, or gestating cavies require up to 50 mg.',
          division: 'junior'
        },
        {
          id: 'cv_nut_q2',
          question: 'Why is standard commercial rabbit feed unsafe as a long-term diet for cavies?',
          options: ['It is too crunchy', 'It lacks required Vitamin C levels and may contain additives or mineral balances unsafe for cavies', 'Rabbits and cavies eat the exact same food'],
          correctIndex: 1,
          explanation: 'Rabbit feeds do not contain stabilized Vitamin C levels needed by cavies and can lead to scurvy.',
          division: 'junior'
        }
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
        'Weigh cavies weekly on a kitchen gram/ounce scale to detect hidden weight loss',
        'Recognize common cavy ailments: Sarcoptic mange mites (Trixacarus caviae), URI, impaction, malocclusion',
        'Learn why penicillin and beta-lactam antibiotics are FATAL to cavies',
        'Follow safety rules: quarantine, observation, sanitizing, and prompt vet care'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Cavy Doctor Checkup Day!',
          readAloud: 'Cavies hide when they feel sick because they are prey animals. We weigh them and check their eyes and ears every week to keep them safe!',
          sections: [
            {
              title: 'The Kitchen Scale Game',
              body: 'Put your cavy gently in a bowl on a scale once a week. If their weight drops, tell an adult right away! Weight loss is the first sign a cavy needs help.'
            }
          ],
          quickCheck: {
            question: 'What is the most important tool for detecting early illness in a cavy?',
            options: ['A kitchen gram scale for regular weekly weighing', 'A magnifying glass', 'A whistle'],
            correctIndex: 0,
            feedback: 'A scale catches weight loss before any other symptom shows up!'
          }
        },
        junior: {
          headline: 'Weekly Weighing, Sarcoptic Mange Mites & Toxic Antibiotics',
          sections: [
            {
              title: 'Weekly Weighing Protocol',
              body: 'Record cavy weight weekly in ounces or grams. A loss of 1 to 2 ounces requires close observation; a loss of 3 or more ounces is a medical emergency requiring a veterinary visit.'
            },
            {
              title: 'Cavy Mites (Trixacarus caviae)',
              body: 'Mange mites burrow under the skin, causing extreme itchiness, hair loss, crusts, and even seizures from sheer pain when touched. Requires vet diagnosis and prescribed antiparasitics.'
            },
            {
              title: 'CRITICAL WARNING: Fatal Antibiotics',
              body: 'Beta-lactam antibiotics (Penicillin, Amoxicillin, Ampicillin, Cephalosporins) are LETHAL to cavies. They wipe out beneficial Gram-positive gut bacteria, causing fatal Clostridial enterotoxemia. Never give leftover dog, cat, or human medicine to a cavy!'
            }
          ],
          quickCheck: {
            question: 'Why are penicillin-family antibiotics fatal to cavies?',
            options: ['They cause their fur to change color', 'They destroy beneficial gut bacteria, leading to fatal toxin release in the intestines', 'They make cavies too energetic'],
            correctIndex: 1,
            feedback: 'Beta-lactam antibiotics destroy the cavy digestive microbiome and cause deadly enterotoxemia.'
          }
        },
        intermediate: {
          headline: 'Boar Impaction, Cervical Lymphadenitis (Lumps) & Quarantine',
          sections: [
            {
              title: 'Senior Boar Perineal Impaction',
              body: 'Older male cavies (boars) can experience loss of muscle tone in the perineal sac, accumulating feces and hay that cannot be expelled normally. Daily or weekly gentle cleaning of the perineal pouch with mineral oil and warm water may be required.'
            },
            {
              title: 'Cervical Lymphadenitis ("Lumps")',
              body: 'Caused by Streptococcus zooepidemicus, producing severe abscesses in lymph nodes under the jaw and neck. Highly contagious through saliva and water bowls; infected cavies must be strictly isolated.'
            }
          ],
          quickCheck: {
            question: 'What symptom characterizes Cervical Lymphadenitis in cavies?',
            options: ['Loss of toenails', 'Swollen firm abscesses under the jaw or lower neck area', 'Excessive sneezing with dry paws'],
            correctIndex: 1,
            feedback: 'Lymph node abscesses under the jaw indicate Streptococcus zooepidemicus ("lumps").'
          }
        },
        senior: {
          headline: 'Pharmacokinetics in Cavia, VCPR & Emergency Triage',
          sections: [
            {
              title: 'Safe Small Animal Antibiotic Protocols',
              body: 'Safe antibiotics overseen by exotic veterinarians include Enrofloxacin (Baytril), Trimethoprim-Sulfa (TMS), and Azithromycin, alongside supportive probiotics and critical care syringe feedings.'
            }
          ],
          quickCheck: {
            question: 'What is the role of 4-H youth when a cavy shows clinical signs of respiratory distress?',
            options: ['Buy farm-store penicillin and inject it', 'Immediately isolate the animal and seek licensed exotic veterinary care under an active VCPR', 'Place the cavy outside in direct sunlight'],
            correctIndex: 1,
            feedback: 'Prompt veterinary consultation is the only safe and ethical response.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_hb_q1',
          question: 'Which of the following antibiotics is known to be FATAL if administered to cavies?',
          options: ['Trimethoprim-Sulfa', 'Amoxicillin / Penicillin', 'Enrofloxacin', 'Saline eye drops'],
          correctIndex: 1,
          explanation: 'Penicillins and amoxicillin disrupt the cecal microflora of cavies, causing fatal Clostridium enterotoxemia within days.',
          division: 'junior'
        },
        {
          id: 'cv_hb_q2',
          question: 'How long should a newly purchased or adopted cavy be kept in quarantine before joining other animals?',
          options: ['24 hours', '3 days', '30 days', 'No quarantine needed if they look happy'],
          correctIndex: 2,
          explanation: '30 days protects the herd from respiratory pathogens, ringworm, and burrowing mites.',
          division: 'intermediate'
        }
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
        'Perform the two-handed cavy scoop supporting both chest and hindquarters',
        'Learn why cavies must never be held high in the air without chest support',
        'Understand cavy vocalizations: wheeking, rumblestrutting, teeth chattering, and purring',
        'Provide gentle handling that minimizes prey animal stress'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Two-Hand Cavy Cuddles!',
          readAloud: 'Cavies are gentle little friends. We always pick them up with two hands: one hand under their front arms, and one hand supporting their bottom.',
          sections: [
            {
              title: 'The Two-Hand Scoop',
              body: 'Slide your first hand under your cavy’s chest right behind their front paws. Slide your second hand under their bottom. Lift them gently close to your chest!'
            },
            {
              title: 'What Are They Saying?',
              body: '• Wheek!: "I’m excited for vegetables!"\n• Soft purr: "I feel cozy and loved."\n• Teeth clicking/chattering: "I feel nervous, please give me space."'
            }
          ],
          quickCheck: {
            question: 'What does loud teeth clicking (chattering) mean when a cavy does it?',
            options: ['They are playing the drums', 'They are asking for a hug', 'They feel frightened or annoyed and want you to give them space'],
            correctIndex: 2,
            feedback: 'Yes! Teeth chattering is a warning that the cavy feels stressed or defensive.'
          }
        },
        junior: {
          headline: 'Proper Lifting, Vocal Language & Safe Table Boundaries',
          sections: [
            {
              title: 'Why Proper Support is Vital',
              body: 'Cavies have fragile rib cages, delicate spines, and small lungs. Never squeeze their chest tightly, and never lift them by one hand. Always keep them close to a table surface or your body; a drop from table height can rupture their diaphragm, break front incisors, or fracture legs.'
            },
            {
              title: 'Understanding Cavy Communication',
              body: '• Wheeking: High-pitched whistle for food or excitement.\n• Rumblestrutting: Deep throaty rumble with swaying hips (dominance or mating display).\n• Popcorning: Sudden energetic jumping and twisting in the air (pure happiness in young cavies!).\n• Freezing: Absolute stillness when alarmed by a predator shadow or sudden noise.'
            }
          ],
          quickCheck: {
            question: 'What is "popcorning" in guinea pigs?',
            options: ['A sign of intestinal gas', 'Sudden bouncy jumping and twisting in the air showing joy and excitement', 'Eating popcorn treats'],
            correctIndex: 1,
            feedback: 'Popcorning is an adorable sign of joyful, healthy cavy energy!'
          }
        },
        intermediate: {
          headline: 'Social Hierarchy, Herd Introductions & Stress Cortisol',
          sections: [
            {
              title: 'Safe Pairing and Herd Introduction',
              body: 'Never drop an unfamiliar cavy directly into another cavy’s home cage, as territorial fighting will ensue. Introduce new cavies on neutral territory (e.g. bathroom floor with hay piles and hideouts with 2 exits). Monitor for normal rumblestrutting vs aggressive jaw-snapping and flying bites.'
            }
          ],
          quickCheck: {
            question: 'Where should initial introductions between two unfamiliar cavies take place?',
            options: ['Directly inside the resident cavy’s favorite sleep hutch', 'On neutral territory (like an open playpen) with multiple food piles and hideouts', 'Inside a dark cardboard box'],
            correctIndex: 1,
            feedback: 'Neutral territory eliminates territorial defensiveness.'
          }
        },
        senior: {
          headline: 'Ethological Stress Markers, Corticosteroid Management & Lifetime Care',
          sections: [
            {
              title: 'Minimizing Show Stress',
              body: 'Transporting cavies to fairs causes travel stress. Provide high-moisture vegetables (cucumber, bell pepper) during transport to prevent dehydration, and use opaque carrier covers to reduce visual panic.'
            }
          ],
          quickCheck: {
            question: 'Why are sliced cucumbers or bell peppers ideal during transport to fairs?',
            options: ['They prevent cavies from squeaking', 'They supply both hydration and Vitamin C without water bottle leaks flooding the carrier', 'They make the carrier smell nice'],
            correctIndex: 1,
            feedback: 'High-water vegetables provide safe hydration without messy water spills in travel carriers.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_hw_q1',
          question: 'How should you hold a cavy when carrying it to the show table?',
          options: ['One hand under the chest behind the front legs, the other supporting the hindquarters securely against your body', 'By the back of the neck with one hand', 'By the back legs'],
          correctIndex: 0,
          explanation: 'Two-hand support protects the delicate spine and prevents struggles or falls.',
          division: 'junior'
        },
        {
          id: 'cv_hw_q2',
          question: 'Why must hiding boxes in multi-cavy enclosures have at least two exits?',
          options: ['It looks like a tunnel', 'So a subordinate cavy cannot be cornered or trapped by a dominant cavy', 'To keep it cooler'],
          correctIndex: 1,
          explanation: 'Two exits prevent territorial bullying and biting injuries when animals live together.',
          division: 'intermediate'
        }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Maintain individual cavy records: ear tag numbers, breed, variety, birth date, weights',
        'Record feed, vegetable, bedding, and equipment purchases in a project ledger',
        'Track show placings and judge comments to guide breeding or selection decisions',
        'Complete the 4-H Small Animal Project Record Book'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Cavy Project Journal!',
          readAloud: 'Write your cavy’s name, glue a fun photo, and write down what treats your cavy loved the best!',
          sections: [
            {
              title: 'Fun with Numbers',
              body: 'Count how many times your cavy pop-corns in a week, and write down their weight number with your 4-H leader!'
            }
          ],
          quickCheck: {
            question: 'What belongs in your first year 4-H cavy scrapbook?',
            options: ['Your cavy’s photo, name, and what you learned caring for them', 'A grocery receipt for candy', 'Blank pages'],
            correctIndex: 0,
            feedback: 'Photos and memories make your first record book shine!'
          }
        },
        junior: {
          headline: 'Ear Tag Numbers, Weight Logs & Expense Balances',
          sections: [
            {
              title: 'Cavy Identification Methods',
              body: 'Unlike rabbits which have ear tattoos, cavies have smaller, thinner ears and are commonly identified with a special lightweight metal ear tag placed in the left ear according to ARBA/ACBA show regulations.'
            },
            {
              title: 'Tracking Fresh Vegetable Costs',
              body: 'Fresh vegetables add to monthly project costs. Record weekly bell pepper, greens, and pellet purchases to see your true monthly investment.'
            }
          ],
          quickCheck: {
            question: 'What is the standard ARBA/ACBA identification method for show cavies?',
            options: ['A numbered metal tag in the left ear', 'A painted collar', 'A microchip on the nose'],
            correctIndex: 0,
            feedback: 'Standard show cavies use small metal ear tags in the left ear.'
          }
        },
        intermediate: {
          headline: 'Breeding Records, Gestation Tracking & Inventory Depreciation',
          sections: [
            {
              title: 'Gestation and Breeding Records',
              body: 'Cavy gestation is remarkably long for a small rodent: 59 to 72 days (average 68 days). Pups are born precocial (fully furred with eyes open and teeth erupted). Record mating dates carefully to prepare birth hutches.'
            }
          ],
          quickCheck: {
            question: 'What is the average gestation length for a pregnant cavy (sow)?',
            options: ['16 to 18 days', '28 to 31 days', '59 to 72 days (average 68 days)', '9 months'],
            correctIndex: 2,
            feedback: 'Cavy gestation is 59-72 days, allowing pups to be born fully furred and alert!'
          }
        },
        senior: {
          headline: 'Pedigree Lineage Mapping, Co-ancestry & Financial Audits',
          sections: [
            {
              title: 'Evaluating Linebreeding vs Outcrossing',
              body: 'Senior cavy breeders track pedigree coefficients to preserve desirable characteristics (e.g., broad Roman nose in Americans or clear rosettes in Abyssinians) while avoiding genetic faults.'
            }
          ],
          quickCheck: {
            question: 'What term describes cavy pups being born fully furred, with eyes open, teeth erupted, and able to eat solids within hours?',
            options: ['Altricial', 'Precocial', 'Marsupial'],
            correctIndex: 1,
            feedback: 'Precocial young are born mature and mobile, unlike altricial rabbit kits born hairless and blind.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_rk_q1',
          question: 'In which ear is an official identification tag placed on a show cavy?',
          options: ['Left ear', 'Right ear', 'Either ear', 'Under the tail'],
          correctIndex: 0,
          explanation: 'Official ARBA/ACBA rules designate the left ear for exhibitor ear tags.',
          division: 'junior'
        },
        {
          id: 'cv_rk_q2',
          question: 'What is the primary difference between newborn cavy pups and newborn rabbit kits?',
          options: ['Cavy pups are born precocial (furred, eyes open); rabbit kits are altricial (hairless, blind)', 'Cavy pups are born blind and hairless', 'There is no difference'],
          correctIndex: 0,
          explanation: 'Cavy pups can walk and eat hay hours after birth; rabbit kits remain helpless in a nest box for weeks.',
          division: 'intermediate'
        }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 30,
      objectives: [
        'Demonstrate the complete table routine using a clean carpet show board or mat',
        'Perform the step-by-step examination: ears, eyes, nose, teeth, feet, pads, coat, and belly',
        'Master the correct show pose for your cavy breed on the carpet mat',
        'Present yourself professionally and answer judge oral questions with poise'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Cavy on the Carpet Show Mat!',
          readAloud: 'At the cavy show table, our cavy sits on a soft carpet mat. We gently pet them and show the judge how healthy they are!',
          sections: [
            {
              title: 'Posing Your Cavy',
              body: 'Help your cavy sit like a soft little loaf of bread on their show mat with their paws tucked under them. Smile at the judge!'
            }
          ],
          quickCheck: {
            question: 'What item do exhibitors bring to the show table for their cavy to sit on safely?',
            options: ['A clean carpet show mat or show board', 'A metal tray', 'A bed pillow'],
            correctIndex: 0,
            feedback: 'A carpet show mat gives the cavy comfortable grip and prevents slipping.'
          }
        },
        junior: {
          headline: 'The Cavy Showmanship Table Routine',
          sections: [
            {
              title: 'Preparing for the Table',
              body: 'Attire: White long-sleeve collared shirt, clean pants, hair tied back. Place your carpet show board on the table facing the judge. Bring your cavy up using the safe two-hand carry.'
            },
            {
              title: 'Step-by-Step Routine',
              body: '1. Place cavy on mat facing judge in proper breed pose (American: compact brick shape; Abyssinian: natural pose showing rosettes).\n2. Ears: Check both ears for ear tag in left ear, tears, lice, or dirt.\n3. Eyes: Check for pea eye, cataract, discharge, or crust.\n4. Nose: Dry and clean, no sneezing or nasal mucus.\n5. Mouth/Teeth: Part lips to show top and bottom incisors (check for broken or overgrown teeth).\n6. Front Feet & Nails: Count 4 toes on each front foot; inspect nail straightness.\n7. Hind Feet & Pads: Count 3 toes on each back foot; inspect heel pads for bumblefoot sores.\n8. Belly & Vent: Check sex (boar or sow), inspect perineal area, feel abdomen for lumps.\n9. Coat Texture & Grooming: Stroke coat to demonstrate breed density and cleanliness.\n10. Final Pose: Reset your cavy in an alert pose, take one step back, and await judge questions.'
            }
          ],
          quickCheck: {
            question: 'How many toes does a normal cavy have on each front foot and each rear foot?',
            options: ['5 on front, 4 on back', '4 on front, 3 on back', '3 on front, 3 on back'],
            correctIndex: 1,
            feedback: 'Cavies have 4 toes on each front paw and 3 toes on each rear paw (total 14 toes).'
          }
        },
        intermediate: {
          headline: 'Cavy Disqualifications & Breed Points',
          sections: [
            {
              title: 'Disqualifications to Watch For',
              body: '• Extra toes (polydactyly)\n• Missing toes or toenails\n• Cataracts or blindness\n• Broken teeth or malocclusion\n• Open sores or bumblefoot on pads\n• Parasites (active lice or mites)\n• Weight out of class limits on official scale'
            }
          ],
          quickCheck: {
            question: 'What is polydactyly and how is it scored in cavy judging?',
            options: ['Extra toes; it is an automatic disqualification (DQ)', 'A rare breed color that earns bonus points', 'A type of cavy vocalization'],
            correctIndex: 0,
            feedback: 'Extra toes (polydactyly) is a genetic defect and an automatic disqualification.'
          }
        },
        senior: {
          headline: 'Pre-Judge Evaluation, Breed Standard Allocations & Poise',
          sections: [
            {
              title: 'Delivering Fluent Oral Answers',
              body: 'When answering judges, speak clearly: "Judge, this senior sow demonstrates excellent depth and crown fullness, though she shows slight thinning behind the ears." Knowledge of breed point distribution (e.g. Abyssinian rosettes worth 40 points) distinguishes top senior competitors.'
            }
          ],
          quickCheck: {
            question: 'What is "pea eye" (fatty eye) in cavies?',
            options: ['Eating green peas too fast', 'A protrusion of the conjunctival sac beneath the lower eyelid, which is faulted in show competition', 'A breed with green eyes'],
            correctIndex: 1,
            feedback: 'Pea eye is a protrusion of the conjunctiva beneath the eyelid, evaluated as a fault by judges.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_sh_q1',
          question: 'How many total toes does an anatomically normal cavy have?',
          options: ['12 toes', '14 toes (4 front, 3 back per foot)', '18 toes (5 front, 4 back)', '20 toes'],
          correctIndex: 1,
          explanation: 'Cavies have 4 toes on each front foot and 3 toes on each back foot, totaling 14 toes.',
          division: 'junior'
        },
        {
          id: 'cv_sh_q2',
          question: 'What should you do if your cavy moves or turns around while the judge is evaluating another exhibitor?',
          options: ['Ignore it and look away', 'Quietly, calmly, and gently reposition the cavy back into its proper show pose without drawing dramatic attention', 'Grab it quickly by the neck'],
          correctIndex: 1,
          explanation: 'Poised, gentle repositioning demonstrates attentive showmanship under all ring conditions.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Apply the four H’s to daily cavy welfare and community mentorship',
        'Learn why artificial tampering (dyeing coats, plucking hairs, tranquilizing) is strictly unethical',
        'Protect animals during hot county fairs with attentive monitoring',
        'Exhibit grace, humility, and generous sportsmanship'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Being a Kind Cavy Friend!',
          readAloud: 'When we take good care of our little friends, we show everyone what a big caring heart we have!',
          sections: [
            {
              title: 'Helping Others in the Barn',
              body: 'If you see another 4-H member who needs help carrying their cavy carrier, ask an adult and lend a cheerful hand!'
            }
          ],
          quickCheck: {
            question: 'What does the "Heart" in 4-H remind us to do?',
            options: ['Be kind, loyal, and honest with people and animals', 'Run as fast as we can', 'Only think about ribbons'],
            correctIndex: 0,
            feedback: 'Heart to greater loyalty means kindness and honest integrity.'
          }
        },
        junior: {
          headline: 'Integrity in the Show Room & Barn Citizenship',
          sections: [
            {
              title: 'Honest Showing',
              body: 'In cavies, unethical practices include pulling white hairs from self-colored breeds, cutting or trimming rosettes, using oils or sprays to create artificial shine, or falsifying weight cards. Winning with honesty feels great; winning by cheating dishonors your club and yourself.'
            }
          ],
          quickCheck: {
            question: 'Is it acceptable to trim or pluck coat hairs to make a cavy’s rosettes appear sharper?',
            options: ['No, that is fraudulent alteration and results in disqualification', 'Yes, as long as scissors are clean', 'Yes, judges expect it'],
            correctIndex: 0,
            feedback: 'Altering an animal’s coat artificially is strictly prohibited tampering.'
          }
        },
        intermediate: {
          headline: 'Fair Welfare Stewardship & Extreme Weather Protocols',
          sections: [
            {
              title: 'Protecting Cavies During Heatwaves at Fair',
              body: 'Fairs often occur during the hottest months of summer. In open livestock barns, cavies can easily suffer heat prostration. Ethical exhibitors provide ice bottles, mist fans, clean water, and coordinate with barn superintendents.'
            }
          ],
          quickCheck: {
            question: 'What should you do if ambient temperature in the cavy barn at the fair exceeds 85°F?',
            options: ['Leave the barn to get lemonade', 'Place frozen water bottles wrapped in cloth in cages and alert leaders for additional fan airflow', 'Cover cages with thick blankets'],
            correctIndex: 1,
            feedback: 'Frozen bottles provide life-saving cooling for heat-sensitive cavies.'
          }
        },
        senior: {
          headline: 'Agricultural Youth Leadership, Mentorship & Public Relations',
          sections: [
            {
              title: 'Educating the Public on Cavy Care',
              body: 'Many fair visitors mistakenly think guinea pigs are simple "disposable starter pets." Senior exhibitors have the opportunity and responsibility to educate families on dietary Vitamin C, proper cage size, and lifetime veterinary care.'
            }
          ],
          quickCheck: {
            question: 'How can senior cavy exhibitors best advocate for animal welfare during the county fair?',
            options: ['Stay hidden in the show office', 'Engage visitors with educational displays and polite demonstrations of correct handling and nutrition', 'Argue with visitors'],
            correctIndex: 1,
            feedback: 'Public education elevates the standards of companion animal care across the entire community.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_eth_q1',
          question: 'What should a 4-H cavy exhibitor do if their cavy is awarded Best of Breed?',
          options: ['Boast and tell other exhibitors their animals were not good', 'Smile, thank the judge, and congratulate fellow exhibitors on their hard work and fine animals', 'Refuse the ribbon'],
          correctIndex: 1,
          explanation: 'True champions show humility, gratitude, and encourage their peers.',
          division: 'junior'
        },
        {
          id: 'cv_eth_q2',
          question: 'If you notice a competitor’s cavy water bottle is dry and leaking in the heat, what is the most ethical action?',
          options: ['Say nothing so their cavy won’t do well', 'Politely notify the exhibitor or barn superintendent and offer to help refill clean water', 'Take their cavy home'],
          correctIndex: 1,
          explanation: 'Animal welfare always comes before competition. Protecting animal life is our highest shared duty.',
          division: 'intermediate'
        }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Communication & Goal Setting',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Set SMART goals for the cavy project year',
        'Create and present an illustrated talk or demonstration on cavy husbandry',
        'Communicate clearly with judges and the public about cavy welfare',
        'Reflect on year-end achievements and plan leadership steps'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Squeaky Presentation!',
          readAloud: 'Tell your 4-H club about your favorite cavy! Bring a poster with photos of your cavy eating their favorite bell pepper.',
          sections: [
            {
              title: 'Speaking Loud & Proud',
              body: 'Stand tall, look at your friends, and tell them three fun things about your cavy: their name, their breed, and their favorite snack!'
            }
          ],
          quickCheck: {
            question: 'What is a great way to share your cavy project with your club?',
            options: ['Giving a short show-and-tell talk with a colorful poster', 'Whispering in the back of the room', 'Leaving your cavy alone in a dark room'],
            correctIndex: 0,
            feedback: 'Show-and-tell with a bright poster is a fantastic way to practice public speaking!'
          }
        },
        junior: {
          headline: 'Club Demonstrations & SMART Cavy Goals',
          sections: [
            {
              title: 'Ideas for Cavy Demonstrations',
              body: '1. "How to Safely Weigh Your Cavy and Track Health"\n2. "The ABCs of Vitamin C: Feeding Your Cavy for Life"\n3. "How to Safely Trim Cavy Toenails Without Hitting the Quick"'
            },
            {
              title: 'Setting a Junior Goal',
              body: 'Example: "I will weigh my cavy every Saturday morning and record the weight in my 4-H logbook for 6 consecutive months."'
            }
          ],
          quickCheck: {
            question: 'Which of the following is a clear, measurable project goal for a junior cavy exhibitor?',
            options: ['"I want my cavy to be famous."', '"I will practice the 10-step showmanship routine on my carpet board twice a week through July 1st."', '"I will read about cavies sometime."'],
            correctIndex: 1,
            feedback: 'Clear, time-bound goals help you track tangible mastery.'
          }
        },
        intermediate: {
          headline: 'Community Outreach, Educational Displays & Fair Booths',
          sections: [
            {
              title: 'Designing an Award-Winning Fair Display',
              body: 'A winning educational display has a clear title, high-contrast readable lettering from 4 feet away, accurate scientific information, and engaging interactive elements (like samples of safe vs unsafe bedding).'
            }
          ],
          quickCheck: {
            question: 'From what distance should the primary title and headlines of an educational poster be easily readable?',
            options: ['6 inches', 'At least 4 to 6 feet away', 'Across the entire fairgrounds with binoculars'],
            correctIndex: 1,
            feedback: 'Posters must be legible from a natural standing distance of 4 to 6 feet.'
          }
        },
        senior: {
          headline: 'Leadership in Cavy Clinics, Mentorship & Public Relations',
          sections: [
            {
              title: 'Leading a County Cavy Workshop',
              body: 'Senior members lead hands-on clinics teaching younger members how to hold cavies, how to read ear tags, and how to prepare carpet show boards. Mentoring others completes the 4-H leadership cycle.'
            }
          ],
          quickCheck: {
            question: 'What is the highest demonstration of 4-H project mastery for a senior exhibitor?',
            options: ['Only entering shows where you are guaranteed to win', 'Organizing clinics to teach, encourage, and mentor younger members in the project', 'Selling all your animals before the fair'],
            correctIndex: 1,
            feedback: 'True leadership is empowering the next generation of youth exhibitors.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'cv_cg_q1',
          question: 'When presenting a demonstration on trimming cavy toenails, what item should you always have on hand in case a nail is cut too short into the quick?',
          options: ['Styptic powder or cornstarch to quickly stop bleeding', 'A bottle of perfume', 'A piece of cheese'],
          correctIndex: 0,
          explanation: 'Styptic powder (or clean cornstarch) safely and quickly stops bleeding if a nail quick is accidentally nicked.',
          division: 'junior'
        },
        {
          id: 'cv_cg_q2',
          question: 'What is the most effective way to calm your nerves before answering judge questions in a showmanship contest?',
          options: ['Take a slow, deep breath, listen carefully to the whole question, and smile before speaking', 'Speak as fast as possible so it ends quickly', 'Run away from the table'],
          correctIndex: 0,
          explanation: 'Deep breathing, active listening, and a calm smile project poise and give you time to organize your thoughts.',
          division: 'junior'
        }
      ]
    }
  ]
};
