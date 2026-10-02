// WarrenWise Youth Animal Training Academy
// Species Pack: Poultry (Chickens, Waterfowl & Turkeys)
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const POULTRY_PACK = {
  id: 'poultry',
  name: 'Poultry Project Academy',
  species: 'Poultry (Chickens, Turkeys & Waterfowl)',
  category: 'Avian Livestock',
  icon: 'Egg',
  version: '2.0.0',
  lastVerifiedDate: '2026-09-15',
  verifiedBy: 'Extension Avian Specialist & APA/ABA Youth Committee',
  description: 'Comprehensive 4-H poultry project mastery covering APA breed standards, large fowl vs bantams, waterfowl, biosecurity (Avian Influenza prevention), egg quality, and showmanship.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate Standard (Large Fowl) vs Bantam classes',
        'Identify APA 6 American classes and comb types (Single, Rose, Pea, Walnut, Cushion, Strawberry)',
        'Recognize domestic waterfowl (Ducks & Geese) and Turkey varieties',
        'Learn feather patterns: Barred, Laced, Spangled, Penciled, and Mottled'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Feather Friends & Funny Combs!',
          readAloud: 'Chickens have soft feathers, wings for fluttering, and colorful crowns on their head called combs!',
          sections: [
            {
              title: 'Big Chickens and Tiny Bantams',
              body: 'Some chickens are big and tall like Rhode Island Reds! Other chickens are tiny pocket-sized birds called Bantams that fit right in your hands.'
            },
            {
              title: 'Ducks and Geese',
              body: 'Waterfowl have webbed feet that work like natural swimming flippers, and waterproof feathers that keep them dry in the pond!'
            }
          ],
          quickCheck: {
            question: 'What do ducks have on their feet that helps them paddle in water?',
            options: ['Webbed feet', 'Horseshoes', 'Rabbit claws'],
            correctIndex: 0,
            feedback: 'That’s right! Webbed feet act like little swimming oars.'
          }
        },
        junior: {
          headline: 'Large Fowl vs Bantams, APA Classes & Comb Anatomy',
          sections: [
            {
              title: 'Standard vs Bantam Sizes',
              body: 'Standard large fowl are full-sized utility or exhibition birds. Bantams are miniature counterparts (or true bantams without large counterparts, like Sebrights) weighing roughly 1/4 to 1/5 of large fowl.'
            },
            {
              title: 'Recognizing Comb Types',
              body: 'ARPA and APA recognize distinct comb structures:\n• Single: Vertical blade with serrated points (Leghorn, Plymouth Rock).\n• Rose: Low, solid, covered with small round points ending in a rear spike (Wyandotte).\n• Pea: Three parallel low ridges, center ridge highest (Brahma, Ameraucana).\n• Walnut: Solid circular corrugated surface resembling half a walnut (Silkie).'
            },
            {
              title: 'Waterfowl & Turkeys',
              body: 'Turkeys are classified into varieties (Broad Breasted Bronze, White Holland, Royal Palm, Bourbon Red) characterized by snoods, caruncles, and beards. Duck classes include Heavy (Pekin), Medium (Cayuga), Light (Runner), and Bantam (Call Duck).'
            }
          ],
          quickCheck: {
            question: 'Which chicken breed class features a low solid comb covered with round points and a rear spike?',
            options: ['Rose Comb', 'Single Comb', 'Pea Comb'],
            correctIndex: 0,
            feedback: 'Rose combs are low and flat with small points ending in a clean spike.'
          }
        },
        intermediate: {
          headline: 'APA Standards of Perfection, Feather Markings & Plumage Mechanics',
          sections: [
            {
              title: 'The Six Large Fowl Classes',
              body: '1. American (Plymouth Rock, Rhode Island Red, Wyandotte - clean yellow legs, brown eggs)\n2. Asiatic (Brahma, Cochin, Langshan - feathered shanks, large heavy bodies)\n3. English (Orpington, Australorp, Sussex - white skin, good table meat)\n4. Mediterranean (Leghorn, Ancona - white earlobes, white eggs, non-broody)\n5. Continental (Polish, Houdan, Faverolles - crested, feathered legs, European)\n6. All Other Standard Breeds (AOSB - Ameraucanas, Games, Sumatras)'
            }
          ],
          quickCheck: {
            question: 'Which large fowl class is known for feathered legs, large frames, and Asiatic origin?',
            options: ['Mediterranean', 'Asiatic (Brahmas, Cochins, Langshans)', 'English'],
            correctIndex: 1,
            feedback: 'The Asiatic class is recognized by heavy bone, feathered shanks, and brown eggs.'
          }
        },
        senior: {
          headline: 'Genetics of Color Varieties, APA Disqualifications & Pre-Judge Analysis',
          sections: [
            {
              title: 'General APA Disqualifications',
              body: 'Permanent show disqualifications include: side sprigs on single combs; absence of spike on rose comb; stubs or down on shanks of clean-legged breeds; twisted or split wings; duck foot (hind toe pointing forward); clipped primary feathers; and positive Pullorum reaction.'
            }
          ],
          quickCheck: {
            question: 'What is a "side sprig" on a single comb bird and how is it scored?',
            options: ['A desirable second crown earning bonus points', 'A point growing out from the side of a single comb; an automatic APA show disqualification', 'A colored feather on the neck'],
            correctIndex: 1,
            feedback: 'Side sprigs are genetic defects and constitute an automatic disqualification.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_bb_q1',
          question: 'What is the miniature equivalent of a standard full-size chicken called?',
          options: ['A Bantam', 'A Pullet', 'A Capon', 'A Drake'],
          correctIndex: 0,
          explanation: 'Bantams are miniature varieties roughly 1/4 to 1/5 the size of large fowl.',
          division: 'junior'
        },
        {
          id: 'pt_bb_q2',
          question: 'What color eggs do Mediterranean breeds (such as White Leghorns) lay?',
          options: ['Brown eggs', 'White eggs', 'Olive green eggs', 'Pink eggs'],
          correctIndex: 1,
          explanation: 'White earlobes on Mediterranean breeds correlate with white-shelled eggs.',
          division: 'junior'
        },
        {
          id: 'pt_bb_q3',
          question: 'Which of the following is considered an automatic APA show disqualification on a clean-legged breed like a Plymouth Rock?',
          options: ['Having red wattles', 'Feather stubs or down growing on the shanks or feet', 'Having yellow skin'],
          correctIndex: 1,
          explanation: 'Clean-legged breeds must be completely free of feathers, stubs, or down on their shanks.',
          division: 'intermediate'
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
        'Build predator-proof coops using 1/2" hardware cloth instead of hex chicken wire',
        'Maintain proper roost spacing (8-10" per bird) and nest box ratios (1 box per 4-5 hens)',
        'Manage deep litter bedding to control ammonia levels and moisture',
        'Provide clean water (preventing frozen founts in winter and heat stagnation in summer)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Safe Coops & Cozy Nests!',
          readAloud: 'Chickens love to sleep up high on roosting sticks and lay fresh eggs in clean straw nests!',
          sections: [
            {
              title: 'Bedtime on the Roost',
              body: 'When the sun sets, chickens hop up onto their wooden roost bars to sleep safely away from the cold ground.'
            },
            {
              title: 'Fresh Water Every Morning',
              body: 'Chickens drink lots of water to make healthy eggs! Check their water fount every morning to make sure it is clean and cool.'
            }
          ],
          quickCheck: {
            question: 'Where do chickens prefer to sleep at night?',
            options: ['Up on an elevated wooden roost bar', 'In a swimming pool', 'Underground'],
            correctIndex: 0,
            feedback: 'Roosting high up is an instinct that keeps birds safe and clean.'
          }
        },
        junior: {
          headline: 'Predator Proofing, Coop Sizing & Deep Litter Sanitation',
          sections: [
            {
              title: 'Hardware Cloth vs Chicken Wire',
              body: 'Never rely on hex chicken wire to protect birds at night. Raccoons, weasels, and dogs can easily tear or reach through hex wire. Use heavy 1/2" galvanized hardware cloth fastened with screws and fender washers.'
            },
            {
              title: 'Coop & Run Space Requirements',
              body: 'Standard Large Fowl: Minimum 3–4 sq ft per bird inside the coop, and 8–10 sq ft in the predator-safe outdoor run. Bantams require 2 sq ft coop and 4–5 sq ft run.'
            }
          ],
          quickCheck: {
            question: 'Why is 1/2" welded hardware cloth required instead of thin hex chicken wire?',
            options: ['It is shinier in the sun', 'Raccoons and weasels can tear or reach through thin chicken wire to harm birds', 'Chickens like to eat it'],
            correctIndex: 1,
            feedback: 'Hardware cloth stops predators from reaching through or tearing the wire.'
          }
        },
        intermediate: {
          headline: 'Ventilation Engineering, Moisture Removal & Ammonia Pathologies',
          sections: [
            {
              title: 'Ventilation vs Drafts',
              body: 'Chickens exhale tremendous moisture and produce nitrogenous manure. Poor airflow traps humidity, causing frostbitten combs in sub-freezing temperatures and severe respiratory inflammation from ammonia (> 15 ppm). Place vents high above roost level.'
            }
          ],
          quickCheck: {
            question: 'What is the primary cause of comb frostbite in winter chicken coops?',
            options: ['Feeding scratch grains', 'Trapped ambient moisture and high humidity combined with freezing temperatures', 'Too much straw in nest boxes'],
            correctIndex: 1,
            feedback: 'High humidity is what causes comb and wattle freezing; good high ventilation prevents it.'
          }
        },
        senior: {
          headline: 'Lighting Photoperiod Programs & Molt Management',
          sections: [
            {
              title: 'The 14–16 Hour Laying Photoperiod',
              body: 'Light enters the eye and stimulates the avian hypothalamus and anterior pituitary to release LH and FSH, stimulating the ovary. In fall, decreasing natural day length triggers the annual post-nuptial molt (shedding feathers and resting reproductive tract).'
            }
          ],
          quickCheck: {
            question: 'How many daily hours of light are physiologically required to sustain peak egg production in laying hens?',
            options: ['6 to 8 hours', '14 to 16 hours', '24 continuous hours'],
            correctIndex: 1,
            feedback: '14 to 16 hours of daily photoperiod maintains pituitary stimulation of the ovary.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_dc_q1',
          question: 'What is the recommended ratio of nesting boxes to laying hens in a 4-H flock?',
          options: ['1 box for every 4 to 5 hens', '1 box per 50 hens', 'No boxes; hens only lay on roosts'],
          correctIndex: 0,
          explanation: '1 box per 4-5 hens prevents crowding, broken eggs, and egg eating.',
          division: 'junior'
        },
        {
          id: 'pt_dc_q2',
          question: 'Where should coop ventilation openings be positioned relative to roosting birds?',
          options: ['At floor level blowing across their feet', 'High near the roofline above roost level to exhaust warm moist air without direct cold drafts', 'Coops should be airtight with zero vents'],
          correctIndex: 1,
          explanation: 'High roofline ventilation draws warm moist air out without creating cold drafts on birds.',
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
        'Match feed rations to growth stages (Chick Starter 20-22%, Grower 16-18%, Layer 16% with 3.5-4.5% Calcium)',
        'Understand the role of insoluble granite grit in the muscular gizzard',
        'Learn why layer feed must NEVER be fed to growing chicks (excess calcium causes kidney damage)',
        'Balance scratch grains as a 10% treat rather than a complete balanced ration'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Grit, Seeds & Calcium Shells!',
          readAloud: 'Chickens don’t have any teeth! They eat tiny little stones called grit to help their tummy grind up corn and wheat!',
          sections: [
            {
              title: 'How Chickens Chew',
              body: 'Chickens swallow their food whole. Inside their tummy is a super strong muscle called the gizzard that acts like a blender to grind their food.'
            }
          ],
          quickCheck: {
            question: 'Do chickens have teeth to chew their food?',
            options: ['No, they swallow food whole and grind it in their gizzard', 'Yes, they have 20 sharp teeth', 'Only in winter'],
            correctIndex: 0,
            feedback: 'Birds have zero teeth and use their muscular gizzard to grind grains!'
          }
        },
        junior: {
          headline: 'Life Stage Feeds, Gizzard Grit & Calcium Requirements',
          sections: [
            {
              title: 'Feeding by Growth Stage',
              body: '• Chick Starter: 20–22% crude protein for rapid early feathering and muscle growth.\n• Grower/Developer: 16–18% protein for steady structural frame development.\n• Layer Ration: 16% protein fortified with 3.5–4.5% calcium (from limestone and crushed oyster shell) to build eggshells.'
            },
            {
              title: 'CRITICAL RULE: Never Feed Layer Feed to Chicks!',
              body: 'The high calcium content (4%) in layer feeds will damage chick kidneys (visceral gout) and can kill young birds under 16 weeks of age. Only feed layer rations when hens reach point-of-lay.'
            }
          ],
          quickCheck: {
            question: 'Why must high-calcium layer feed never be fed to growing chicks under 16 weeks of age?',
            options: ['It makes their feathers blue', 'Excess calcium causes severe kidney calcification and death (gout)', 'Chicks refuse to eat pellets'],
            correctIndex: 1,
            feedback: 'Young kidneys cannot excrete excess calcium; only point-of-lay pullets need layer feed.'
          }
        },
        intermediate: {
          headline: 'Avian Digestive Anatomy: Crop, Proventriculus, Gizzard & Ceca',
          sections: [
            {
              title: 'The Path of Feed Digestion',
              body: '1. Beak: Pecking and swallowing with saliva.\n2. Crop: Ingested food pouch for temporary storage and softening.\n3. Proventriculus: The true glandular stomach; secretes hydrochloric acid and pepsin.\n4. Ventriculus (Gizzard): Muscular grinder lined with koilin membrane utilizing insoluble granite grit.\n5. Small Intestine: Nutrient absorption.\n6. Ceca: Paired fermentation pouches that break down fiber.\n7. Cloaca / Vent: Common exit for fecal and urate excretion.'
            }
          ],
          quickCheck: {
            question: 'Which organ serves as the glandular stomach of a chicken, secreting hydrochloric acid and pepsin?',
            options: ['The Proventriculus', 'The Crop', 'The Gizzard'],
            correctIndex: 0,
            feedback: 'The proventriculus is the true chemical stomach directly preceding the muscular gizzard.'
          }
        },
        senior: {
          headline: 'Amino Acid Balancing (Methionine/Lysine) & Shell Calcite Deposition',
          sections: [
            {
              title: 'First Limiting Amino Acids in Poultry',
              body: 'Methionine is the first limiting amino acid in corn-soy poultry diets. Methionine and cystine are critical for keratin synthesis in growing feathers and albumins in egg white. Shell deposition requires 2 grams of elemental calcium over a 20-hour uterine cycle.'
            }
          ],
          quickCheck: {
            question: 'What is the primary first-limiting amino acid in typical corn-and-soybean poultry rations?',
            options: ['Methionine', 'Tryptophan', 'Leucine'],
            correctIndex: 0,
            feedback: 'Methionine is the first limiting amino acid required for feather and egg production.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_nu_q1',
          question: 'What is the function of the chicken’s crop located at the base of the neck?',
          options: ['Temporary storage and moistening of swallowed food', 'Laying eggs', 'Filtering oxygen into blood'],
          correctIndex: 0,
          explanation: 'The crop stores feed when birds gorge, slowly passing it to the proventriculus.',
          division: 'junior'
        },
        {
          id: 'pt_nu_q2',
          question: 'Why should scratch grains (cracked corn and wheat) make up no more than 10% of a flock’s daily diet?',
          options: ['Scratch is a low-protein, high-fat "candy" treat that dilutes essential vitamins and causes obesity', 'Scratch turns feathers purple', 'Chickens cannot digest corn'],
          correctIndex: 0,
          explanation: 'Scratch is high in starch and lacks balanced vitamins, calcium, and protein.',
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
        'Recognize signs of Highly Pathogenic Avian Influenza (HPAI) and report to state vet',
        'Inspect for common ectoparasites: Poultry Lice, Northern Fowl Mites, Scaly Leg Mites',
        'Adhere to mandatory NPIP Pullorum-Typhoid testing before fair exhibition',
        'Implement strict footwear disinfection and 30-day quarantine protocols'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Healthy Feathers & Clean Boots!',
          readAloud: 'Healthy chickens are alert, curious, and love scratching in the yard! We always wash our hands and boots before visiting them.',
          sections: [
            {
              title: 'The Happy Hen Check',
              body: 'Bright red combs, clean shiny eyes, and dry beaks mean your birds are feeling wonderful!'
            }
          ],
          quickCheck: {
            question: 'What should you do before entering your chicken coop after visiting another barn?',
            options: ['Wash your boots and hands with soap and water', 'Bring unknown wild birds into the coop', 'Never check your birds'],
            correctIndex: 0,
            feedback: 'Clean boots keep dangerous germs away from your flock!'
          }
        },
        junior: {
          headline: 'Avian Biosecurity, External Parasites & Pullorum Testing',
          sections: [
            {
              title: 'Preventing Avian Influenza (HPAI)',
              body: 'Avian Influenza is a severe viral disease carried by migratory wild waterfowl (ducks and geese). Keep domestic flocks enclosed under roof netting away from wild bird droppings. Never share feeders or transport crates without sanitizing.'
            },
            {
              title: 'Checking for Mites and Lice',
              body: 'Part feathers around the vent and under wings. Northern fowl mites appear as tiny black pepper specks crawling on skin; poultry lice are fast-moving straw-colored insects laying white egg clusters at the base of feather shafts.'
            },
            {
              title: 'Pullorum-Typhoid Blood Testing',
              body: 'Most county and state fairs require official NPIP blood testing showing negative reaction for Salmonella pullorum before birds can enter the show barn.'
            }
          ],
          quickCheck: {
            question: 'Where on the chicken’s body are poultry mites and lice most commonly detected during a health check?',
            options: ['Directly on the beak tip', 'Around the warm vent area and underneath the wings', 'On top of the tail feathers only'],
            correctIndex: 1,
            feedback: 'The warm skin around the vent and under the wings is where parasites congregate.'
          }
        },
        intermediate: {
          headline: 'Coccidiosis Life Cycle, Respiratory Diseases & Biosecurity Audits',
          sections: [
            {
              title: 'Coccidiosis and Oocyst Management',
              body: 'Coccidiosis is caused by protozoan parasites (Eimeria spp.) damaging the intestinal lining, causing bloody droppings, hunching, and lethargy in young birds. Wet litter accelerates oocyst sporulation. Keep waterers clean and litter dry.'
            }
          ],
          quickCheck: {
            question: 'What environmental factor in the brooder most rapidly accelerates coccidiosis parasite sporulation?',
            options: ['Dry clean pine shavings', 'Wet, warm, soiled damp bedding around waterers', 'Adequate fresh ventilation'],
            correctIndex: 1,
            feedback: 'Moist damp litter provides the exact moisture needed for coccidia oocysts to become infectious.'
          }
        },
        senior: {
          headline: 'Immunology, Marek’s Disease Pathogenesis & National Poultry Improvement Plan',
          sections: [
            {
              title: 'Marek’s Disease Virus (MDV)',
              body: 'Marek’s is an oncogenic alpha-herpesvirus transmitted through feather follicle dander. It causes asymmetric leg paralysis (one leg forward, one backward) and visceral tumors. Preventative vaccination occurs in ovo (day 18 of incubation) or subcutaneously at day of hatch.'
            }
          ],
          quickCheck: {
            question: 'What is the characteristic clinical sign of neural Marek’s disease in growing chickens?',
            options: ['Sudden loss of toenails', 'Asymmetric progressive leg paralysis with one leg stretched forward and one backward', 'Loss of comb spikes'],
            correctIndex: 1,
            feedback: 'Sciatic nerve infiltration by Marek’s causes the classic split-leg paralysis posture.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_hb_q1',
          question: 'What official NPIP blood test certification is legally required before poultry can enter most 4-H fair exhibitions?',
          options: ['Pullorum-Typhoid negative blood test', 'Rabies vaccine tag', 'Heartworm antibody test'],
          correctIndex: 0,
          explanation: 'NPIP Pullorum-Typhoid testing guarantees the flock is free from fatal Salmonella pullorum.',
          division: 'junior'
        },
        {
          id: 'pt_hb_q2',
          question: 'What should a poultry exhibitor do if they find multiple birds dead overnight with swollen purple combs and facial edema?',
          options: ['Throw them in the compost and ignore it', 'Immediately isolate the flock and report suspected Avian Influenza to the State Veterinarian / USDA hotline', 'Take the birds to fair anyway'],
          correctIndex: 1,
          explanation: 'Sudden high mortality and cyanotic combs are warning signs of HPAI that require immediate state notification.',
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
        'Master the keel-rest hold locking legs between fingers with palms supporting breastbone',
        'Cage retrieval and return techniques (ALWAYS head first)',
        'Never carry birds by their wings, neck, or upside down by legs',
        'Provide dust bathing access to satisfy natural grooming behaviors'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Holds for Calm Chickens!',
          readAloud: 'Chickens have hollow bones that help them be light. We always hold them close and secure their wings gently.',
          sections: [
            {
              title: 'Two Gentle Hands',
              body: 'Rest the chicken’s tummy right in your open palm. Place your other hand softly over their back so they don’t flap their wings and get scared.'
            }
          ],
          quickCheck: {
            question: 'How should you hold your chicken so it feels safe and calm?',
            options: ['Support the tummy in your hand with your other hand resting gently over its wings', 'By the neck', 'By one feather'],
            correctIndex: 0,
            feedback: 'Supporting the breast and wings keeps your chicken calm, safe, and happy.'
          }
        },
        junior: {
          headline: 'The Keel Rest Hold & Safe Cage Transfers',
          sections: [
            {
              title: 'The Keel Hold Technique',
              body: 'Slide your dominant hand under the chicken’s body with the breastbone (keel) resting across your palm. Place your index finger between the bird’s legs and grasp the legs gently above the hock joints. Your forearm tucks the bird’s body against your ribs.'
            },
            {
              title: 'Cage In and Cage Out: Always Head First!',
              body: 'When removing a bird from a show cage, turn the bird so its HEAD comes out first. When returning the bird to the cage, place its HEAD in first. Never pull a bird out backwards; wings will catch on wire and break flight feathers.'
            }
          ],
          quickCheck: {
            question: 'Why must chickens always be removed from and returned to wire show cages head first?',
            options: ['It looks fancier to the judge', 'It prevents wings from catching on the cage door and breaking fragile flight feathers', 'Chickens cannot walk backwards'],
            correctIndex: 1,
            feedback: 'Head first prevents wing flapping, struggling, and broken feathers.'
          }
        },
        intermediate: {
          headline: 'Avian Respiratory Mechanics & Freedom from Compression',
          sections: [
            {
              title: 'Why You Must Never Squeeze a Bird’s Chest',
              body: 'Birds lack a muscular diaphragm and rely on the movement of the keel bone (sternum) to expand their air sacs and bellows air through their lungs. Squeezing a bird’s ribcage or carrying it upside down compresses air sacs and causes suffocation.'
            }
          ],
          quickCheck: {
            question: 'Why does tight chest compression cause rapid suffocation in birds?',
            options: ['Birds lack a diaphragm and require free keel movement to inflate their air sacs', 'Birds breathe through their feathers', 'Their hearts stop instantly'],
            correctIndex: 0,
            feedback: 'Birds must be able to expand their chest bellows freely to move air through air sacs.'
          }
        },
        senior: {
          headline: 'Ethological Welfare, Natural Pecking Foraging & Cannibalism Prevention',
          sections: [
            {
              title: 'Enrichment and Feather Pecking Prevention',
              body: 'Feather pecking stems from redirected foraging behavior under confinement or boredom. Providing deep foraging litter, whole grains scattered in straw, cabbage tetherballs, and dust bathing pits reduces behavioral stereotypes and prevents cannibalism.'
            }
          ],
          quickCheck: {
            question: 'What behavioral motivation drives destructive feather pecking in confined poultry flocks?',
            options: ['Excess sleep', 'Redirected ground foraging behavior due to lack of environmental foraging substrates', 'Looking for water'],
            correctIndex: 1,
            feedback: 'Enriching the environment with foraging substrates satisfies natural ground pecking instincts.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_hw_q1',
          question: 'What is the correct hold when carrying an exhibition chicken to the show table?',
          options: ['Resting the keel bone on your palm with legs locked between fingers and forearm supporting wings against your body', 'By the tip of the tail', 'Upside down by one leg'],
          correctIndex: 0,
          explanation: 'The keel hold provides complete control, prevents wing flapping, and protects the bird.',
          division: 'junior'
        },
        {
          id: 'pt_hw_q2',
          question: 'Why is providing a dry dust bath (sand, peat moss, wood ash) essential for poultry welfare?',
          options: ['Chickens use dust to naturally clean oil and suffocate ectoparasites like lice and mites', 'It turns feathers different colors', 'It helps them lay two eggs a day'],
          correctIndex: 0,
          explanation: 'Dust bathing is a primary grooming behavior that controls parasites and maintains feather health.',
          division: 'junior'
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
        'Track daily egg production logs and compute Hen-Day Egg Production %',
        'Calculate feed cost per dozen eggs produced and Feed Conversion Ratio (FCR) for broiler meat pens',
        'Maintain individual leg band identification records and Pullorum health test certificates',
        'Complete the 4-H Poultry Project Financial Ledger'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Egg Basket Diary!',
          readAloud: 'Every time your hens lay eggs, count them into your egg carton and draw a happy egg in your project book!',
          sections: [
            {
              title: 'Counting the Harvest',
              body: 'Count: 1, 2, 3, 4, 5 eggs! How many eggs did your flock give you this week?'
            }
          ],
          quickCheck: {
            question: 'If you have 4 hens and find 4 eggs in the nest today, how did your hens do?',
            options: ['Super! Every hen laid an egg (100%)', 'Very bad', 'Zero eggs'],
            correctIndex: 0,
            feedback: '4 out of 4 is a perfect 100% laying day!'
          }
        },
        junior: {
          headline: 'Hen-Day Production Math, Feed Costs & Leg Band Records',
          sections: [
            {
              title: 'Hen-Day Egg Production Formula',
              body: 'Hen-Day % = (Number of Eggs Produced Today ÷ Number of Laying Hens in Flock) × 100.\nExample: 10 hens produce 8 eggs in a day. (8 ÷ 10) × 100 = 80% Hen-Day Production.'
            },
            {
              title: 'Calculating Feed Cost Per Dozen Eggs',
              body: '1. Track total pounds of layer feed eaten in a month.\n2. Multiply by price per pound to get total feed cost.\n3. Divide total feed cost by dozens of eggs collected to find cost per dozen.'
            }
          ],
          quickCheck: {
            question: 'A flock of 20 hens produces 16 eggs on Tuesday. What is their Hen-Day Production percentage?',
            options: ['50%', '80%', '95%'],
            correctIndex: 1,
            feedback: '16 divided by 20 = 0.80, or 80% Hen-Day production!'
          }
        },
        intermediate: {
          headline: 'Broiler Meat Pen FCR & Depreciation of Incubators/Brooders',
          sections: [
            {
              title: 'Broiler Meat Pen Efficiency',
              body: 'Commercial meat pens (trio of broilers 6 to 8 weeks old, 3.5 to 6.0 lbs each) target an aggressive Feed Conversion Ratio (FCR) of 1.8:1 to 2.0:1. Track weekly weigh-ins to predict market readiness.'
            }
          ],
          quickCheck: {
            question: 'A pen of market broilers consumed 20 lbs of feed and gained 10 lbs of live body weight. What is their FCR?',
            options: ['2:1', '5:1', '10:1'],
            correctIndex: 0,
            feedback: '20 lbs feed ÷ 10 lbs weight gain = 2:1 Feed Conversion Ratio.'
          }
        },
        senior: {
          headline: 'Flock Enterprise Accounting, NPIP Records & Farm Gate Margins',
          sections: [
            {
              title: 'Value-Added Egg Marketing Margins',
              body: 'Calculate net operating profit by deducting carton costs, NPIP certification fees, bedding, and layer mash from gross sales at farmers markets or local farm stands.'
            }
          ],
          quickCheck: {
            question: 'What is the formula for calculating Net Farm Enterprise Income in your 4-H poultry project?',
            options: ['Gross Revenue minus Total Operating and Capital Depreciation Expenses', 'Feed cost times eggs laid', 'Number of feathers divided by hens'],
            correctIndex: 0,
            feedback: 'Net Income = Gross Revenue minus All Operating and Fixed Capital Expenses.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_rk_q1',
          question: 'If a 50 lb bag of organic layer feed costs $25.00, what is the cost of feed per pound?',
          options: ['$0.50 per pound', '$1.00 per pound', '$2.00 per pound'],
          correctIndex: 0,
          explanation: '$25 divided by 50 lbs = $0.50 per pound of feed.',
          division: 'junior'
        },
        {
          id: 'pt_rk_q2',
          question: 'Why are numbered aluminum or plastic spiral leg bands used in exhibition poultry record books?',
          options: ['They make chickens run faster', 'They provide individual permanent identification numbers to link birds with pedigrees and blood test certificates', 'To track egg shell color'],
          correctIndex: 1,
          explanation: 'Numbered leg bands identify individual birds for health tests and show entries.',
          division: 'junior'
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
        'Master the APA Showmanship examination procedure (head, comb, eyes, beak, wings, vent, keel, shanks, toes)',
        'Demonstrate proper cage removal and re-caging (always head first)',
        'Present the bird on the table in proper pose and maintain judge eye contact',
        'Answer judge oral questions with poise, clarity, and sportsmanship'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Showing My Beautiful Chicken!',
          readAloud: 'At the show table, we show the judge how clean and healthy our chicken is, and we smile big!',
          sections: [
            {
              title: 'Stand Tall and Proud',
              body: 'Wear a nice clean collared shirt. Hold your chicken gently in the keel hold and look at the judge with a cheerful smile!'
            }
          ],
          quickCheck: {
            question: 'What should you do when the poultry judge looks at you during showmanship?',
            options: ['Smile, stand tall, and maintain polite eye contact', 'Hide under the show table', 'Drop your bird'],
            correctIndex: 0,
            feedback: 'Polite eye contact and poise show the judge your confidence and hard work!'
          }
        },
        junior: {
          headline: 'The Step-by-Step Poultry Showmanship Examination',
          sections: [
            {
              title: 'The Table Examination Procedure',
              body: '1. Approach cage, open door, remove bird HEAD FIRST into keel hold.\n2. Walk to judge table, pose bird facing judge.\n3. Head Examination: Point out comb, wattles, earlobes, and beak straightness.\n4. Eye Examination: Check both eyes for blindness or ocular Marek’s (gray iris).\n5. Wing Examination: Open both wings fully to count 10 primary flight feathers, 1 axial feather, and secondary feathers.\n6. Breast/Keel: Run fingers down keel bone checking for straightness (no crooked keel).\n7. Abdomen & Vent: Check pubic bone spread and inspect vent for mites.\n8. Shanks & Toes: Count 4 toes (or 5 on Silkies/Faverolles), straight nails, zero stubs.\n9. Return bird to cage HEAD FIRST, close latch, step back, and await judge questions.'
            }
          ],
          quickCheck: {
            question: 'How many primary flight feathers does an anatomically normal chicken have on each wing?',
            options: ['5 primaries', '10 primary feathers', '25 primaries'],
            correctIndex: 1,
            feedback: 'Chickens have 10 primary flight feathers separated from secondary feathers by the short axial feather.'
          }
        },
        intermediate: {
          headline: 'Wing Anatomy (Axial Feather), Crooked Keels & Pubic Bone Spread',
          sections: [
            {
              title: 'Evaluating Layer Capacity on the Table',
              body: 'During showmanship, demonstrate laying capacity by measuring the spread between the pubic bones (2–3 fingers indicates active laying) and between pubic bones and the tip of the keel (3–4 fingers indicates abdominal capacity for egg production).'
            }
          ],
          quickCheck: {
            question: 'What does a wide 3-finger spread between pubic bones indicate to a judge evaluating a laying hen?',
            options: ['The hen is actively in lay with expanding reproductive tract', 'The hen is too young to lay', 'The hen has broken bones'],
            correctIndex: 0,
            feedback: 'Wide pubic spread indicates an active, productive laying hen.'
          }
        },
        senior: {
          headline: 'Ring Poise, Advanced Judge Questions & Standard of Perfection Knowledge',
          sections: [
            {
              title: 'Answering Advanced Judge Queries',
              body: 'Senior exhibitors must know breed origin (e.g. Plymouth Rock developed in Massachusetts), year admitted to the APA Standard (1874), breed disqualifications, and market classification weights. Speak clearly and fluently.'
            }
          ],
          quickCheck: {
            question: 'What short key feather separates the primary flight feathers from the secondary feathers on a chicken’s wing?',
            options: ['The Axial feather', 'The Pin feather', 'The Sickle feather'],
            correctIndex: 0,
            feedback: 'The axial feather is the short dividing feather located between primary and secondary flights.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_sh_q1',
          question: 'What is the correct showmanship attire for a 4-H poultry exhibitor?',
          options: ['Clean long-sleeve white shirt or dark jacket, neat jeans or slacks, closed-toe boots, hair tied back', 'Short sleeve athletic jersey and sandals', 'Muddy chore clothes'],
          correctIndex: 0,
          explanation: 'Long sleeves protect arms from claws and present a professional agricultural appearance.',
          division: 'junior'
        },
        {
          id: 'pt_sh_q2',
          question: 'Which of the following breeds naturally possesses FIVE toes on each foot instead of the normal four?',
          options: ['Silkie (and Faverolles / Dorkings)', 'Leghorn', 'Rhode Island Red', 'Cornish'],
          correctIndex: 0,
          explanation: 'Silkies, Faverolles, Dorkings, Sultans, and Houdans carry the 5-toed polydactyly trait in their breed standard.',
          division: 'intermediate'
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
        'Apply the four H’s to daily poultry stewardship',
        'Learn why artificial tampering (feather dyeing, trimming comb spikes, surgical alterations) is fraudulent',
        'Protect birds during hot summer county fairs with proper ventilation and frozen water bottles',
        'Demonstrate humility in winning and gracious sportsmanship in defeat'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Being a Caring 4-H Club Friend!',
          readAloud: 'When we take good care of our chickens, we show kindness and big hearts to everyone!',
          sections: [
            {
              title: 'Cheering for Everyone',
              body: 'In 4-H, we congratulate our friends and say "Great job!" whether we win a purple ribbon or a green participation ribbon!'
            }
          ],
          quickCheck: {
            question: 'What should you do after your showmanship class ends?',
            options: ['Congratulate the winner, thank the judge, and smile', 'Complain and throw your ribbon', 'Ignore your club members'],
            correctIndex: 0,
            feedback: 'True 4-H champions show kindness, gratitude, and sportsmanship!'
          }
        },
        junior: {
          headline: 'Honesty in Exhibition & Prohibited Tampering',
          sections: [
            {
              title: 'What Counts as Tampering in Poultry?',
              body: 'Unethical tampering includes: plucking foreign colored feathers, using shoe polish or dyes on shanks or plumage, surgically trimming side sprigs from combs, or giving tranquilizers. True success comes from daily care, clean washing, and honest genetics.'
            }
          ],
          quickCheck: {
            question: 'Is it ethical to pluck out off-color black feathers on a white show bird to hide them from the judge?',
            options: ['No, plucking or trimming feathers to deceive the judge is fraudulent tampering and results in disqualification', 'Yes, everyone does it', 'Yes, it makes the bird look nicer'],
            correctIndex: 0,
            feedback: 'Plucking off-color feathers violates show rules and ethics covenants.'
          }
        },
        intermediate: {
          headline: 'Terminal Market Meat Pens & Withdrawal Affidavit Integrity',
          sections: [
            {
              title: 'Food Safety Responsibilities',
              body: 'Market broiler pens enter the human food supply at fair auctions. Administering medications without observing full withdrawal times endangers consumers and breaks legal affidavits. Character means honoring food safety.'
            }
          ],
          quickCheck: {
            question: 'Why must medication withdrawal periods be strictly documented on livestock affidavits?',
            options: ['To guarantee meat is wholesome and free of harmful pharmaceutical residues for consumer families', 'To make project record books longer', 'It is optional paperwork'],
            correctIndex: 0,
            feedback: 'Food safety and consumer public trust are the core responsibilities of livestock producers.'
          }
        },
        senior: {
          headline: 'Agricultural Youth Leadership, Biosecurity Advocacy & Public Trust',
          sections: [
            {
              title: 'Educating the Public at County Fairs',
              body: 'Fair visitors often have misconceptions about commercial egg farming and poultry welfare. Senior 4-H members represent modern agriculture by explaining flock nutrition, predator protection, and avian health with patient courtesy.'
            }
          ],
          quickCheck: {
            question: 'How do senior 4-H poultry exhibitors best build public trust in agriculture during the fair?',
            options: ['Engage visitors warmly, explain animal care and biosecurity, and maintain immaculate clean cages', 'Avoid speaking to the public', 'Post complaints on social media'],
            correctIndex: 0,
            feedback: 'Direct, knowledgeable public advocacy builds lifelong trust in animal agriculture.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_et_q1',
          question: 'If you notice ambient barn temperatures at the county fair reaching dangerous heat levels (over 90°F) while a neighboring exhibitor is away, what is the most ethical action?',
          options: ['Immediately notify the barn superintendent, mist the barn floor, and place ice bottles near panting birds', 'Do nothing because they are your competition', 'Take their birds home'],
          correctIndex: 0,
          explanation: 'Animal welfare and life protection always take precedence over competition rivalries.',
          division: 'junior'
        },
        {
          id: 'pt_et_q2',
          question: 'What does the 4-H motto "To Make the Best Better" teach exhibitors?',
          options: ['Continuous personal improvement, learning from mistakes, and lifting others up through service', 'Winning at any cost', 'Only competing when guaranteed a ribbon'],
          correctIndex: 0,
          explanation: 'The motto inspires lifelong growth, excellence, and service to club and community.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Formulate SMART goals for the poultry project year',
        'Prepare and deliver a club demonstration (e.g. Egg Candling and Anatomy)',
        'Design an educational poster explaining Avian Influenza biosecurity to fair visitors',
        'Conduct a year-end project reflection identifying growth and leadership milestones'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Show & Tell with My Feather Friends!',
          readAloud: 'Tell your 4-H club about your favorite chicken! Draw a colorful picture of your hen eating watermelons.',
          sections: [
            {
              title: 'Speaking to Your Club',
              body: 'Stand tall, hold your poster, and share 3 things you love about your chickens!'
            }
          ],
          quickCheck: {
            question: 'What is a fun way to share your chicken project with your club?',
            options: ['Giving a short show-and-tell talk with your leader', 'Whispering in the corner', 'Staying home'],
            correctIndex: 0,
            feedback: 'Show and tell builds speaking confidence and shares the joy of animals!'
          }
        },
        junior: {
          headline: 'SMART Poultry Goals & Demonstrations',
          sections: [
            {
              title: 'Setting a Junior Poultry Goal',
              body: 'Example: "I will candle 12 eggs every Saturday and record air cell depth in my 4-H record book for 8 consecutive weeks before the county fair."'
            },
            {
              title: 'Ideas for Poultry Demonstrations',
              body: '• How to Safely Wash and Blow-Dry an Exhibition Chicken\n• Candling Eggs to Determine Grade AA, A, and B Freshness\n• Building a Predator-Safe 1/2" Hardware Cloth Brooder'
            }
          ],
          quickCheck: {
            question: 'What does candling an egg with a bright light allow you to inspect without cracking the shell?',
            options: ['Air cell depth, yolk movement, blood spots, and hairline shell micro-cracks', 'The breed of the rooster', 'How loud the hen will cluck'],
            correctIndex: 0,
            feedback: 'Candling illuminates the interior quality and soundness of the egg non-destructively.'
          }
        },
        intermediate: {
          headline: 'Educational Posters, Buyer Letters & Public Interaction',
          sections: [
            {
              title: 'Writing Market Broiler Sponsor Letters',
              body: 'Send polite letters to local agribusinesses and community supporters 3–4 weeks before fair auction. Share your project budget, what you learned about feed efficiency, and invite them to the market sale.'
            }
          ],
          quickCheck: {
            question: 'What is the primary objective of sending fair buyer invitation letters?',
            options: ['To demand money', 'To cultivate community partnerships, share educational learning, and invite prospective bidders to support youth agriculture', 'To complain about feed costs'],
            correctIndex: 1,
            feedback: 'Buyer letters build lasting relationships and educate community leaders on youth projects.'
          }
        },
        senior: {
          headline: 'Agricultural Advocacy, Mentorship Clinics & Industry Careers',
          sections: [
            {
              title: 'Mentoring Younger Club Members',
              body: 'Senior poultry exhibitors organize hands-on cage transfer clinics, showmanship workshops, and guide junior members through NPIP pullorum testing days.'
            }
          ],
          quickCheck: {
            question: 'What action best exemplifies senior 4-H youth leadership?',
            options: ['Organizing hands-on clinics to mentor younger members in showmanship and biosecurity', 'Keeping all show tips secret', 'Arguing with the judge'],
            correctIndex: 0,
            feedback: 'True leadership empowers younger youth and strengthens the entire agricultural community.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'pt_cg_q1',
          question: 'What does the "R" in SMART project goal setting stand for?',
          options: ['Relevant', 'Random', 'Rooster', 'Rapid'],
          correctIndex: 0,
          explanation: 'Goals must be Relevant to your learning and project objectives.',
          division: 'junior'
        },
        {
          id: 'pt_cg_q2',
          question: 'What is the primary indicator of interior egg freshness evaluated during candling?',
          options: ['Air cell depth (shallower air cell = fresher egg)', 'The weight of the carton', 'Color of the egg yolk only'],
          correctIndex: 0,
          explanation: 'Freshly laid eggs have tiny air cells (< 1/8 inch for Grade AA); as eggs age and lose moisture, the air cell enlarges.',
          division: 'intermediate'
        }
      ]
    }
  ]
};
