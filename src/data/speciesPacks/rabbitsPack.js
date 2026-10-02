// WarrenWise Youth Animal Training Academy
// Species Pack: Rabbits (Oryctolagus cuniculus)
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const RABBITS_PACK = {
  id: 'rabbits',
  name: 'Rabbits Project Academy',
  species: 'Rabbit',
  category: 'Small Animal',
  icon: 'Rabbit',
  version: '2.4.0',
  lastVerifiedDate: '2026-08-15',
  verifiedBy: 'Extension Small Animal Specialist & ARBA Youth Advisory Board',
  description: 'Comprehensive 4-H rabbit project mastery covering ARBA breed standards, 12-step showmanship, daily husbandry, biosecurity, and project ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Recognize the 5 major rabbit body types (Compact, Commercial, Full Arch, Semi-Arch, Cylindrical)',
        'Understand the difference between 4-Class and 6-Class breeds',
        'Identify 4 major fur types: Rollback, Flyback, Rex, and Wool',
        'Distinguish common pet vs meat vs wool vs exhibition breeds'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Bunny Breeds & Bunny Shapes!',
          readAloud: 'Rabbits come in many shapes and sizes! Some have tiny floppy ears, and some have huge long ears.',
          sections: [
            {
              title: 'Fun Bunny Shapes',
              body: 'Look at how bunnies sit! Some bunnies are round like a soft little ball (like Holland Lops and Netherland Dwarfs). Other bunnies are long and athletic like a little deer!'
            },
            {
              title: 'Bunny Fur is Soft!',
              body: 'Some bunnies have fur that bounces back when you pet them backwards. Rex bunnies feel like plush velvet toy stuffed animals!'
            }
          ],
          quickCheck: {
            question: 'Which bunny has soft floppy ears that hang down?',
            options: ['Holland Lop', 'Netherland Dwarf', 'Wild Hare'],
            correctIndex: 0,
            feedback: 'Great job! Lop rabbits have sweet floppy ears that hang down by their cheeks.'
          }
        },
        junior: {
          headline: 'Breed Types & 4-Class vs 6-Class Fundamentals',
          sections: [
            {
              title: 'What is a 4-Class vs 6-Class Breed?',
              body: 'In rabbit showing, breeds are divided by mature weight. 4-Class breeds (Junior Buck, Junior Doe, Senior Buck, Senior Doe) are smaller breeds under 9 lbs. 6-Class breeds (which add Intermediate Buck and Intermediate Doe) are larger commercial breeds maturing at 9 lbs or heavier, such as New Zealands and Californians.'
            },
            {
              title: 'The Five Recognized Body Types',
              body: '1. Compact: Short, rounded (Mini Rex, Holland Lop, Dutch).\n2. Commercial: Ideal meat production balance with depth over the hips (New Zealand, Rex).\n3. Full Arch: Continuous arch from neck to tail, stands high off table (Checkered Giant, Tan).\n4. Semi-Arch (Mandolin): Low shoulders, long rising arch (Flemish Giant, English Lop).\n5. Cylindrical: Long, slender, circular tube shape (Himalayan).'
            },
            {
              title: 'Fur Types',
              body: 'Rollback gently rolls back in place when petted backward. Flyback snaps back instantly into position. Rex fur stands completely upright like plush velvet (guard hairs and undercoat are equal length). Wool is spun fiber (Angoras, Jersey Wooly).'
            }
          ],
          quickCheck: {
            question: 'How many age classes do breeds weighing over 9 lbs at maturity compete in?',
            options: ['4 Classes', '6 Classes', '2 Classes'],
            correctIndex: 1,
            feedback: 'Correct! Larger commercial breeds have 6 classes because they take longer to mature and need an Intermediate (6-8 month) class.'
          }
        },
        intermediate: {
          headline: 'Body Type Mechanics, Variety Groups & Classifications',
          sections: [
            {
              title: 'Detailed Body Type Evaluation',
              body: 'Evaluating body types requires understanding bone structure, loin fullness, and shoulder taper. Compact breeds must demonstrate tight depth without cutback behind the shoulders. Commercial breeds require top of hips to be the highest point of the body with maximum meat over the saddle.'
            },
            {
              title: 'Varieties and Color Groups',
              body: 'Breeds are categorized by varieties (colors). Common variety groups include Self (one solid color: Black, Blue, White), Agouti (banded hair shafts: Chestnut, Chinchilla, Opal), Shaded (points darker than body: Siamese Sable, Sable Point), and Broken (white patterned with any recognized color).'
            }
          ],
          quickCheck: {
            question: 'An Agouti coat pattern is characterized by:',
            options: ['Solid white patches', 'Rings or bands of color along individual hair shafts', 'Plush vertical fur without guard hairs'],
            correctIndex: 1,
            feedback: 'Exactly. Agouti hairs (like in Chestnut Agouti) have alternating bands of color from base to tip, ending with an eye-circle and light belly.'
          }
        },
        senior: {
          headline: 'Standard of Perfection In-Depth & Breed Registration Rules',
          sections: [
            {
              title: 'ARBA Standard Point Allocations',
              body: 'Every breed standard allocates 100 total points across body type, fur, color, condition, and head/ears. Commercial breeds allocate upwards of 65–70 points to body type alone (hindquarters, loin, shoulders), whereas Wool breeds allocate 50+ points to wool density, texture, and length.'
            },
            {
              title: 'Registration Qualifications vs Show Pedigrees',
              body: 'A 3-generation pedigree shows ancestors and weights. Official ARBA registration requires inspection by a licensed registrar verifying that the rabbit has 3 full generations of ancestors of the same recognized breed and meets all minimum weight and standard requirements with zero disqualifications.'
            }
          ],
          quickCheck: {
            question: 'What is required for a rabbit to become officially ARBA Registered?',
            options: ['Only winning first place at county fair', 'In-person examination by a licensed ARBA Registrar and 3 complete generations on pedigree', 'Ordering an online certificate with a photo'],
            correctIndex: 1,
            feedback: 'Correct! Official registration requires physical verification of zero standard disqualifications by an authorized registrar.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_bb_q1',
          question: 'Which of the following breeds exhibits a Full Arch body type?',
          options: ['Checkered Giant', 'Holland Lop', 'Netherland Dwarf', 'New Zealand'],
          correctIndex: 0,
          explanation: 'Checkered Giants and Tans are classic Full Arch breeds that show daylight underneath their bellies and stand alert.',
          division: 'junior'
        },
        {
          id: 'rb_bb_q2',
          question: 'What distinguishes Rex fur from normal Flyback fur?',
          options: ['Rex fur is twice as long as wool', 'Rex fur has guard hairs and undercoat of uniform length, standing upright at a 90° angle', 'Rex fur does not shed'],
          correctIndex: 1,
          explanation: 'A mutation causes Rex guard hairs to be short and equal to the undercoat, creating the signature plush velvet touch.',
          division: 'junior'
        },
        {
          id: 'rb_bb_q3',
          question: 'In a 6-Class breed, what age qualifies an animal for the Intermediate class?',
          options: ['Under 6 months', '6 to 8 months of age', 'Over 12 months'],
          correctIndex: 1,
          explanation: '6-Class breeds have Junior (under 6 months), Intermediate (6-8 months), and Senior (over 8 months) classes.',
          division: 'intermediate'
        },
        {
          id: 'rb_bb_q4',
          question: 'Which ear receives the breeder tattoo and which is reserved for official registration?',
          options: ['Left ear has tattoo, Right ear is reserved for official registration', 'Right ear has tattoo, Left ear is reserved for registration', 'Either ear can have both tattoos'],
          correctIndex: 0,
          explanation: 'The youth/breeder places their identification tattoo in the LEFT ear. The RIGHT ear is kept blank for the licensed registrar.',
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
        'Determine proper hutch/cage dimensions and wire gauge for rabbit safety',
        'Learn resting board placement to prevent ulcerative pododermatitis (sore hocks)',
        'Establish clean watering systems (gravity crocks vs ball-point sipper bottles)',
        'Manage temperature extremes: heat stress (>85°F) prevention and winter water freezing'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Making Bunny Cozy & Happy!',
          readAloud: 'Every day our bunny needs fresh cool water, sweet green hay, and a clean dry bed to sleep in.',
          sections: [
            {
              title: 'Daily Chores Checklist',
              body: '1. Check the water bottle — make sure fresh water flows!\n2. Give fresh hay — bunnies love to crunch hay!\n3. Say hello gently and look to see if bunny is hopping happily.'
            },
            {
              title: 'Keeping Cool in Summer',
              body: 'Bunnies do not like hot weather! In summer, put a frozen water bottle in their cage so they can lean against it like an air conditioner.'
            }
          ],
          quickCheck: {
            question: 'What can you give a bunny on hot sunny days to help them stay cool?',
            options: ['A frozen water bottle to lay next to', 'A hot blanket', 'A bowl of ice cream'],
            correctIndex: 0,
            feedback: 'Yes! Bunnies love laying beside a frozen 2-liter bottle to chill down safely.'
          }
        },
        junior: {
          headline: 'Housing Design, Ventilation & Daily Barn Routine',
          sections: [
            {
              title: 'Cage Floor Safety & Dimensions',
              body: 'Wire mesh floors allow droppings to pass through into trays. Floor wire should be 14-gauge 1/2" x 1" galvanized wire. A resting board (plastic poly-mat or unpainted untreated wood) is vital so the rabbit can rest off the wire and protect its foot pads.'
            },
            {
              title: 'Temperature Control & Ventilation',
              body: 'Rabbits handle cold much better than heat. Temperatures above 85°F (29°C) can cause life-threatening heat exhaustion. Good air flow without direct cold drafts prevents respiratory irritation from ammonia buildup.'
            }
          ],
          quickCheck: {
            question: 'Why is a resting board or mat placed in a wire rabbit cage?',
            options: ['To give the rabbit a place to sleep upside down', 'To protect rear foot pads from wire pressure and prevent sore hocks', 'To chew for dental vitamins'],
            correctIndex: 1,
            feedback: 'Correct! Resting boards relieve pressure on the rabbit hocks and prevent painful sore hocks.'
          }
        },
        intermediate: {
          headline: 'Barn Environmental Management & Sanitation Schedules',
          sections: [
            {
              title: 'Ammonia Management & Waste Removal',
              body: 'Urine breakdown produces ammonia gas. In enclosed rabbitries, ammonia concentrations above 10-15 ppm cause nasal cilia damage, opening the door for respiratory infections. Drop pans must be cleaned 2–3 times weekly, utilizing absorbent bedding like pine shavings or agricultural lime underneath.'
            },
            {
              title: 'Winterization & Freeze Protection',
              body: 'In freezing conditions, ball-point sipper tubes freeze rapidly even if the bottle reservoir remains liquid. Use heated crocks, submerged thermostatic tank heaters, or cycle 2 sets of water bottles twice daily.'
            }
          ],
          quickCheck: {
            question: 'What is the primary danger of poor ventilation and high ammonia in a rabbit barn?',
            options: ['Weight gain', 'Damage to delicate respiratory linings leading to respiratory disease', 'Loss of ear tattoo legibility'],
            correctIndex: 1,
            feedback: 'Exactly. Ammonia gas irritates mucosal linings and predisposes rabbits to Pasteurella or Bordetella.'
          }
        },
        senior: {
          headline: 'Facility Engineering, Biosecurity Airflow & Density Calculations',
          sections: [
            {
              title: 'Air Exchange and Square Footage Standards',
              body: 'Commercial rabbit facilities target 10–15 complete room air exchanges per hour. The USDA Animal Welfare Act and ARBA recommend minimum cage sizing based on weight: 1.5–3.0 sq ft for small breeds, 4.0 sq ft for medium (Commercial) breeds, and 5.0+ sq ft for giant breeds with minimum 14–16 inch ceiling clearance.'
            }
          ],
          quickCheck: {
            question: 'For a senior commercial breed doe with a litter, what is the minimum recommended cage footprint?',
            options: ['1 square foot', '2 square feet', 'At least 4 to 5 square feet', '10 square inches'],
            correctIndex: 2,
            feedback: 'Correct! Adequate footprint is necessary to prevent crowding and kit crushing.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_dc_q1',
          question: 'At what ambient temperature does rabbit heat exhaustion become a severe emergency risk?',
          options: ['Above 60°F', 'Above 72°F', 'Above 85°F (29°C)', 'Above 110°F only'],
          correctIndex: 2,
          explanation: 'Rabbits cannot sweat and rely primarily on ear blood vessels for cooling. Over 85°F, rabbits can quickly suffer heat stroke.',
          division: 'junior'
        },
        {
          id: 'rb_dc_q2',
          question: 'What wire specification is safest for the floor of standard rabbit cages?',
          options: ['Chicken wire (thin hex wire)', '14-gauge 1/2" x 1" welded wire', 'Hardware cloth with sharp solder points'],
          correctIndex: 1,
          explanation: '14-gauge 1/2" x 1" wire is rigid enough to support weight and allow manure to drop without trapping feet.',
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
        'Understand the rabbit digestive tract as a hindgut fermenter',
        'Identify grass hay (Timothy, Orchard) as the mandatory foundation (70-80%) of the diet',
        'Analyze commercial pellet feed labels (crude protein 16-18%, crude fiber 18-22%)',
        'Explain the role and biological importance of cecotropes (night feces)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Hay, Pellets & Healthy Bunny Bellies!',
          readAloud: 'Bunnies need lots and lots of sweet green grass hay every day to keep their tummies hopping happy!',
          sections: [
            {
              title: 'The Hay Mountain!',
              body: 'Rabbits should have a pile of grass hay as big as their own body every single day. Hay helps their teeth stay trim and their tummy stay strong.'
            },
            {
              title: 'Treats Are Only for Special Moments',
              body: 'Carrots and apples have lots of natural sugar. Only give a tiny coin-sized slice as a reward, never a whole carrot!'
            }
          ],
          quickCheck: {
            question: 'What food should be available to your rabbit all day long?',
            options: ['Fresh grass hay (like Timothy hay)', 'Corn and candy', 'Bread slices'],
            correctIndex: 0,
            feedback: 'Spot on! Grass hay keeps their digestive system moving smoothly 24/7.'
          }
        },
        junior: {
          headline: 'Hindgut Fermentation, Crude Fiber & Daily Rations',
          sections: [
            {
              title: 'How a Rabbit Digest Works',
              body: 'Rabbits are hindgut fermenters. They have a huge organ called the cecum that houses beneficial bacteria. These microbes ferment fiber into energy. Without long-stem fiber (hay), the gut slows down and can stop completely (a dangerous condition called GI stasis).'
            },
            {
              title: 'Commercial Pellets: What to Look For',
              body: 'Quality commercial rabbit pellets should contain 16–18% crude protein for growing/breeding stock (or 14–16% for pet/maintenance) and at least 18–22% crude fiber. Avoid mixes with colorful corn, seeds, and cereal rings, which cause selective eating and obesity.'
            },
            {
              title: 'Cecotropes: Nature’s Recycled Nutrition',
              body: 'Rabbits produce two kinds of droppings: hard dry round fecal pellets, and soft clustered cecotropes (often called night feces). Rabbits ingest cecotropes directly to absorb essential B vitamins, protein, and amino acids produced by cecal microbes.'
            }
          ],
          quickCheck: {
            question: 'What are cecotropes and why does a rabbit eat them?',
            options: ['They are poisonous droppings that must be discarded', 'Nutrient-rich soft pellets that provide vital B-vitamins and bacterial protein', 'Hard dry manure pellets used for fertilizer'],
            correctIndex: 1,
            feedback: 'Correct! Cecotrophy is a healthy, natural, and essential digestive process for all rabbits.'
          }
        },
        intermediate: {
          headline: 'Feed Conversion Ratios, Protein Requirements & Calcium Balance',
          sections: [
            {
              title: 'Alfalfa vs Grass Hay',
              body: 'Alfalfa is a legume high in protein (18-20%) and calcium (1.2-1.5%). While suitable for growing kits and nursing does, senior maintenance rabbits fed excessive alfalfa can develop bladder sludge and urinary stones due to excess excreted calcium. Non-breeding rabbits thrive on lower-calcium grass hays (Timothy, Orchard, Brome).'
            },
            {
              title: 'Feed Conversion & Show Conditioning',
              body: 'Conditioning a show rabbit requires balancing firm muscular flesh without accumulating loose flabby fat in the dewlap or abdomen. Regulate pellet intake to approximately 1/2 oz to 1 oz of pellet per pound of body weight depending on individual metabolism.'
            }
          ],
          quickCheck: {
            question: 'Why should non-breeding adult show rabbits not receive unlimited alfalfa hay?',
            options: ['Alfalfa turns their fur purple', 'Excess protein and calcium can cause obesity and urinary bladder sludge', 'It is too expensive to feed'],
            correctIndex: 1,
            feedback: 'Right! High calcium in alfalfa is excreted through rabbit urine and can cause urinary problems in mature rabbits.'
          }
        },
        senior: {
          headline: 'Cecal Microflora Ecology, Enterotoxemia Prevention & Volatile Fatty Acids',
          sections: [
            {
              title: 'The Pathophysiology of Carbohydrate Overload',
              body: 'High starch diets (cereals, fruits, grain seeds) cause undigested starch to overflow from the stomach into the cecum. This causes an explosion of opportunistic pathogens (Clostridium perfringens or E. coli), dropping the pH and releasing deadly enterotoxins. High-fiber diets maintain optimal cecal motility and produce acetate and butyrate volatile fatty acids.'
            }
          ],
          quickCheck: {
            question: 'What is the physiological consequence of feeding high-starch grain treats to rabbits?',
            options: ['Improved glossy flyback fur', 'Cecal carbohydrate overload resulting in dysbiosis and enterotoxemia', 'Increased bone density'],
            correctIndex: 1,
            feedback: 'Accurate. Simple carbs disrupt the delicate microbial flora of the cecum, risking fatal gut shutdown.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_nut_q1',
          question: 'What percentage of a healthy pet or show rabbit’s daily diet should consist of fresh grass hay?',
          options: ['10–20%', '30–40%', '70–80% or free-choice', 'Hay is not required if pellets are provided'],
          correctIndex: 2,
          explanation: 'Grass hay provides the indigestible long fiber required to keep peristalsis active and naturally wears down constantly growing teeth.',
          division: 'junior'
        },
        {
          id: 'rb_nut_q2',
          question: 'Why should seed and corn “gourmet mix” rabbit feeds be avoided?',
          options: ['Rabbits cannot chew seeds', 'Seeds are too high in fat and starch, causing selective feeding, gut dysbiosis, and liver lipidosis', 'They spoil in less than an hour'],
          correctIndex: 1,
          explanation: 'Rabbits will pick out the sugary grains and reject healthy pellets, leading to severe nutritional deficiencies and digestive issues.',
          division: 'intermediate'
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
        'Perform a daily 5-point physical health check (eyes, nose, teeth, feet, vent)',
        'Recognize early signs of common ailments (ear mites, snuffles, GI stasis, sore hocks)',
        'Implement strict 30-day quarantine for all new arrivals or returning show stock',
        'Adhere to non-medical youth boundaries: Observe, Isolate, Sanitize, and Consult Veterinarian'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Being a Bunny Detective!',
          readAloud: 'Healthy bunnies are bright, bouncy, and have clean noses! We check our bunny every day with gentle hands.',
          sections: [
            {
              title: 'The Happy Bunny Check',
              body: 'Look at bunny’s eyes: are they bright and clear? Look at bunny’s nose: is it dry with no sneezes? If bunny sits puffed in a corner and won’t eat a treat, tell an adult right away!'
            },
            {
              title: 'Clean Hands First!',
              body: 'Always wash your hands before and after touching your animals to keep everyone safe and germ-free.'
            }
          ],
          quickCheck: {
            question: 'What should you do if your bunny stops eating and sits huddled in the corner?',
            options: ['Wait 3 days to see what happens', 'Tell your parent, coach, or an adult immediately', 'Give the rabbit a chocolate bar'],
            correctIndex: 1,
            feedback: 'Exactly right! When a bunny stops eating, it is an emergency that needs adult and vet help right away.'
          }
        },
        junior: {
          headline: 'Daily Health Examination & Early Warning Signs',
          sections: [
            {
              title: 'The Daily Health Check Routine',
              body: 'Examine: 1. Eyes: Clear, bright, no discharge or weeping.\n2. Nose: Dry, clean, no white nasal mucus or matted inner front paws (which rabbits wipe their nose with).\n3. Ears: Clean, pink, no crusty brown flakes (ear mites).\n4. Vent: Clean, no diarrhea, sores, or crust.\n5. Droppings: Normal round, fibrous pellets.'
            },
            {
              title: 'Biosecurity at Shows & at Home',
              body: 'Biosecurity means protecting your animals from germs! Never share grooming brushes, carriers, or waterers at the county fair without sanitizing. Always wash hands between animals.'
            },
            {
              title: 'Safety Boundary Rule',
              body: '4-H youth observe and report symptoms. You must NEVER give prescription drugs or calculate medicine dosages on your own. Always consult a licensed veterinarian or Extension professional.'
            }
          ],
          quickCheck: {
            question: 'What does crusty brown discharge inside a rabbit’s ear typically indicate?',
            options: ['Healthy wax buildup', 'Ear mites (Psoroptes cuniculi) requiring vet-guided treatment', 'Excess dirt from digging'],
            correctIndex: 1,
            feedback: 'Correct! Ear mites cause crusting and intense itching and need proper veterinary care.'
          }
        },
        intermediate: {
          headline: 'Quarantine Protocols, Zoonoses & Infectious Pathogens',
          sections: [
            {
              title: 'The 30-Day Quarantine Rule',
              body: 'Any new animal brought onto the premise or returning from an outside show should be quarantined in a separate airspace for 30 days. Tend to your resident healthy herd FIRST, and care for quarantined stock LAST with dedicated clothes and boots.'
            },
            {
              title: 'Rabbit Hemorrhagic Disease Virus (RHDV2)',
              body: 'RHDV2 is a reportable, highly contagious calicivirus affecting domestic and wild rabbits. It can be carried on clothes, shoes, hay, and flies. Prevention relies on vaccination by a veterinarian, strict footwear decontamination, and avoiding contact with wild rabbits.'
            }
          ],
          quickCheck: {
            question: 'When caring for both your regular herd and quarantined rabbits, what order of chore flow should you follow?',
            options: ['Quarantine rabbits first, then healthy herd', 'Healthy herd first, quarantined rabbits last with dedicated boots and sanitation', 'It does not matter as long as chores get done'],
            correctIndex: 1,
            feedback: 'Always care for your clean healthy stock first, and finish with quarantined animals to avoid spreading pathogens.'
          }
        },
        senior: {
          headline: 'Epidemiology, Necropsy Value & Veterinary Partnership',
          sections: [
            {
              title: 'Working with a Veterinarian',
              body: 'A valid Veterinarian-Client-Patient Relationship (VCPR) is essential. Keep a dedicated medical log recording dates of observations, veterinary recommendations, and quarantine releases. Never store or administer expired prescription medications.'
            }
          ],
          quickCheck: {
            question: 'What legal relationship must be in place before obtaining prescription medications for your livestock herd?',
            options: ['A 4-H club membership card', 'A valid Veterinarian-Client-Patient Relationship (VCPR)', 'An ARBA youth membership'],
            correctIndex: 1,
            feedback: 'A legal VCPR ensures a veterinarian has seen your animals and oversees any prescription treatments.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_hb_q1',
          question: 'If a rabbit has matted wet fur on the inside of both front paws, what does this symptom usually indicate?',
          options: ['The rabbit likes to dig in mud', 'The rabbit is wiping runny nasal discharge from its nose (possible respiratory infection)', 'Normal grooming behavior'],
          correctIndex: 1,
          explanation: 'Rabbits wipe their noses with the inside of their front paws; matted front paws are a classic sign of nasal discharge and snuffles.',
          division: 'junior'
        },
        {
          id: 'rb_hb_q2',
          question: 'What is the recommended minimum quarantine duration for new or returning show rabbits?',
          options: ['24 hours', '7 days', '30 days', '6 months'],
          correctIndex: 2,
          explanation: 'A 30-day quarantine allows incubation periods for viruses, bacteria, and parasites to manifest without infecting the primary herd.',
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
        'Master the two-handed football carry supporting the rabbit’s powerful hindquarters',
        'Learn why rabbits must NEVER be picked up by their ears or scruff',
        'Recognize signs of fear and stress (thumping, freezing, bulging eyes, teeth grinding)',
        'Understand Five Freedoms of animal welfare in the context of 4-H projects'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Hands, Happy Bunny!',
          readAloud: 'Rabbits have delicate little bones. We always pick them up with two gentle hands and tuck them safe like a football.',
          sections: [
            {
              title: 'Never Lift by the Ears!',
              body: 'A bunny’s ears are for listening to your voice, not for lifting! Always keep one hand under their chest and your other hand holding their rear end safe.'
            },
            {
              title: 'The Bunny Football Tuck',
              body: 'Hold your bunny close against your body with their head under your elbow. They feel snug, safe, and protected from sudden jumps.'
            }
          ],
          quickCheck: {
            question: 'How should you hold a rabbit when carrying it to the table?',
            options: ['By the ears with one hand', 'Tucked gently against your side with hindquarters supported by your hand', 'Upside down by the hind legs'],
            correctIndex: 1,
            feedback: 'Yes! The football tuck keeps their powerful back legs safe so they cannot kick and hurt their spine.'
          }
        },
        junior: {
          headline: 'Spinal Safety, Carrying Techniques & Animal Body Language',
          sections: [
            {
              title: 'Preventing Lumbar Spine Fractures',
              body: 'A rabbit’s skeleton accounts for only 7–8% of its total body weight, while its back leg muscles are tremendously powerful. If a rabbit kicks hard while suspended without rear support, it can break its own back (lumbar spinal luxation). Always secure the rump!'
            },
            {
              title: 'Reading Stress Signals',
              body: 'Thumping the floor: signaling danger or extreme annoyance.\nRapid shallow breathing with nostrils flaring: overheating or acute fear.\nTooth purring (soft quiet clicks): contentment during gentle petting.\nLoud tooth grinding: severe pain or intestinal distress.'
            }
          ],
          quickCheck: {
            question: 'Why can a rabbit suffer a fractured spine if its rear legs are not supported during handling?',
            options: ['Their back legs are too weak to kick', 'Their back muscles are so powerful they can kick and dislocate fragile lumbar vertebrae', 'They will drop their tail'],
            correctIndex: 1,
            feedback: 'Exactly. Supporting the hindquarters prevents sudden violent kicking that can paralyze the rabbit.'
          }
        },
        intermediate: {
          headline: 'The Five Freedoms of Animal Welfare & Housing Enrichment',
          sections: [
            {
              title: 'The Five Freedoms in Youth Animal Projects',
              body: '1. Freedom from hunger and thirst (fresh water, balanced feed).\n2. Freedom from discomfort (weather protection, clean dry bedding).\n3. Freedom from pain, injury, and disease (prevention and prompt vet care).\n4. Freedom to express normal behavior (adequate room, resting shelves, safe wooden chew blocks).\n5. Freedom from fear and distress (gentle handling, safe housing away from predators).'
            }
          ],
          quickCheck: {
            question: 'Which of the following is considered positive environmental enrichment for a rabbit?',
            options: ['Untreated applewood chew sticks and cardboard tunnels', 'Playing loud rock music in the barn', 'Plastic bags that can be swallowed'],
            correctIndex: 0,
            feedback: 'Great! Safe wood chews satisfy natural gnawing behaviors and prevent boredom.'
          }
        },
        senior: {
          headline: 'Ethical Husbandry, Humane Endpoints & Lifetime Responsibility',
          sections: [
            {
              title: 'Humane Responsibility and Quality of Life',
              body: 'Youth exhibitors take full stewardship of living animals. In senior projects, exhibitors must establish quality-of-life assessment rubrics (H-H-H-M-M-P-Q scale adapted for small stock) and understand compassionate euthanasia criteria in consultation with veterinarians.'
            }
          ],
          quickCheck: {
            question: 'What is the exhibitor’s primary ethical duty when an animal exhibits chronic suffering that cannot be relieved?',
            options: ['Keep the animal indefinitely to maintain records', 'Promptly consult a licensed veterinarian for humane palliative care or euthanasia', 'Release the rabbit into the wild'],
            correctIndex: 1,
            feedback: 'Animal welfare always comes first. Humane medical intervention is the ethical core of 4-H stewardship.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_hw_q1',
          question: 'What is the single most important rule when lifting or carrying a rabbit?',
          options: ['Wear sunglasses', 'Always firmly support the rabbit’s hindquarters to prevent spinal injury', 'Lift by the tail'],
          correctIndex: 1,
          explanation: 'Supporting the rear end prevents violent kicks that can dislocate the lumbar spine and cause permanent paralysis.',
          division: 'junior'
        },
        {
          id: 'rb_hw_q2',
          question: 'What does loud, rhythmic foot thumping by a rabbit indicate?',
          options: ['Dancing for food', 'Warning of perceived danger, predator presence, or extreme alarm', 'The rabbit is ready to sleep'],
          correctIndex: 1,
          explanation: 'In the wild, rabbits thump to warn warren members of underground predators or impending danger.',
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
        'Track daily feed, bedding, and equipment expenses in a project balance sheet',
        'Maintain individual rabbit identification logs (tattoo numbers, pedigree, weights)',
        'Calculate Feed Conversion Ratio (FCR) and cost-per-pound of gain for meat pens',
        'Prepare a complete 4-H Project Record Book for county fair evaluation'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Bunny Scrapbook & Diary!',
          readAloud: 'Keeping a project book is like writing a fun adventure story with pictures of you and your bunny!',
          sections: [
            {
              title: 'Draw & Measure',
              body: 'Draw a picture of your bunny on day one. With help from mom or dad, weigh your bunny on a kitchen scale and write the number down in your book!'
            }
          ],
          quickCheck: {
            question: 'Why do we keep a project notebook for our animal?',
            options: ['To remember what we learned and how our bunny grew', 'To tear out pages for bedding', 'To hide it under the bed'],
            correctIndex: 0,
            feedback: 'Yes! Your 4-H record book shows all your hard work and achievements.'
          }
        },
        junior: {
          headline: 'Feed Logs, Expense Tracking & Health Dates',
          sections: [
            {
              title: 'What Goes in Your Project Record Book?',
              body: '1. Inventory: Rabbit tattoo number, breed, variety, birth date, purchase price.\n2. Feed Expense: Date, brand of feed, bag weight, cost per bag.\n3. Health Log: Toenail trimming dates, weight checks, vet checkups.\n4. Show Results: Fair date, judge name, placing, ribbons won.'
            }
          ],
          quickCheck: {
            question: 'If a 50 lb bag of feed costs $20.00, how much does the feed cost per pound?',
            options: ['$0.10', '$0.40', '$1.00'],
            correctIndex: 1,
            feedback: '$20 divided by 50 lbs = $0.40 per pound! Excellent budgeting math.'
          }
        },
        intermediate: {
          headline: 'Profit & Loss Accounting, Meat Pen FCR & Inventory Depreciation',
          sections: [
            {
              title: 'Feed Conversion Ratio (FCR)',
              body: 'FCR = Pounds of Feed Consumed ÷ Pounds of Body Weight Gained. In commercial meat pens (trio of 3 rabbits under 10 weeks of age, each weighing 3.5 to 5.5 lbs), an efficient FCR is 3:1 to 3.5:1. Lower FCR means better feed efficiency and higher profitability.'
            }
          ],
          quickCheck: {
            question: 'A meat pen rabbit ate 12 lbs of feed and gained 4 lbs of weight. What is its FCR?',
            options: ['1:1', '3:1', '4:1', '12:1'],
            correctIndex: 1,
            feedback: '12 lbs feed ÷ 4 lbs gain = 3:1 Feed Conversion Ratio.'
          }
        },
        senior: {
          headline: 'Herd Management Software, Breeding Coefficients & Enterprise Analysis',
          sections: [
            {
              title: 'Calculating Enterprise Net Margin',
              body: 'Track total revenue (fair premiums, stock sales, manure sales) minus operating expenses (feed, bedding, entries, tattoo supplies) and fixed capital depreciation (cages, carriers). A professional record book demonstrates leadership and enterprise solvency.'
            }
          ],
          quickCheck: {
            question: 'What is the formula for calculating Net Profit in your 4-H rabbit project enterprise?',
            options: ['Gross Income minus Total Expenses', 'Total Feed Cost multiplied by Ribbons Won', 'Number of cages divided by rabbits'],
            correctIndex: 0,
            feedback: 'Net Profit = Gross Income minus Total Operating and Fixed Expenses.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_rk_q1',
          question: 'What primary information must be listed on a rabbit’s official pedigree sheet?',
          options: ['Only the rabbit’s name and ribbon count', 'Three full ancestral generations of names, tattoo numbers, varieties, and weights', 'A picture of the exhibitor'],
          correctIndex: 1,
          explanation: 'An official pedigree requires at least 3 generations (parents, grandparents, great-grandparents) with ear numbers, colors, and weights.',
          division: 'junior'
        },
        {
          id: 'rb_rk_q2',
          question: 'Why is recording regular weekly weights critical when raising a market meat pen?',
          options: ['To see who has the prettiest ears', 'To ensure rabbits hit the exact 3.5 to 5.5 lb weight window on fair entry day without being disqualified', 'Weights are only needed once per year'],
          correctIndex: 1,
          explanation: 'Market meat pens have strict maximum and minimum weights; going over or under weight results in immediate show disqualification.',
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
        'Perform the complete 12-step ARBA/4-H table showmanship routine from memory',
        'Pose the rabbit correctly according to breed body type',
        'Demonstrate proper examination of teeth, eyes, ears, toes, hocks, vent, and fur',
        'Answer judge oral questions with confidence, clarity, and sportsmanship'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Showing My Bunny on the Table!',
          readAloud: 'Showmanship is showing the judge how much you care for your bunny and how well you know them!',
          sections: [
            {
              title: 'Smile and Stand Tall!',
              body: 'Wear a nice clean collared shirt. Look at the judge, smile, and introduce yourself and your rabbit!'
            },
            {
              title: 'The Table Pose',
              body: 'Place your bunny gently on the carpet mat. Help their front paws sit under their eyes, and make sure they look proud!'
            }
          ],
          quickCheck: {
            question: 'What should you do when you first approach the showmanship table?',
            options: ['Look at your shoes and whisper', 'Smile, make polite eye contact with the judge, and pose your rabbit calmly', 'Run around the table'],
            correctIndex: 1,
            feedback: 'Perfect! Confidence and polite eye contact show the judge you are ready.'
          }
        },
        junior: {
          headline: 'The 12-Step ARBA Showmanship Procedure',
          sections: [
            {
              title: 'Steps 1 through 6: Transfer to Front Legs',
              body: '1. Carry rabbit under arm (football hold), set onto table facing judge.\n2. Pose rabbit properly for body type (front feet under eyes, back feet tucked under hips).\n3. Ears: Open both ears wide to show tattoo in left ear; check for ear mites.\n4. Eyes & Nose: Look into both eyes for blindness; check nose for nasal discharge.\n5. Teeth: Gently part lips; check that top incisors overlap bottom incisors (no malocclusion).\n6. Front Feet & Nails: Count 5 toenails on each front paw (including dewclaw); check for straight bone and white/colored nail match.'
            },
            {
              title: 'Steps 7 through 12: Hind Legs to Final Courtesy',
              body: '7. Hind Feet & Hocks: Count 4 toenails on each back paw; check heel pads for sore hocks.\n8. Vent & Sex: Flip rabbit gently on rump, check sex organ for vent disease.\n9. Abdomen: Run hand along belly feeling for abscesses, lumps, or mastitis.\n10. Tail: Check that tail is straight and carried over spine (no wry or screw tail).\n11. Fur Condition: Pet fur backwards to demonstrate rollback/flyback/rex return.\n12. Final Pose: Return to immaculate pose, step back slightly, keep eyes on judge.'
            }
          ],
          quickCheck: {
            question: 'How many toenails (including the dewclaw) should you count on each front foot of a rabbit?',
            options: ['3 toenails', '4 toenails', '5 toenails', '6 toenails'],
            correctIndex: 2,
            feedback: 'Rabbits have 5 toenails on each front foot (4 main + 1 dewclaw) and 4 on each rear foot!'
          }
        },
        intermediate: {
          headline: 'Judging Faults, Disqualifications & Poised Oral Responses',
          sections: [
            {
              title: 'General Disqualifications to Memorize',
              body: 'Be ready to explain DQs to the judge:\n• Malocclusion (buck teeth, wolf teeth, or butt teeth where incisors meet flat without overlap)\n• Missing toenail or mismatched toenail color on colored breeds\n• White discharge from nose (snuffles)\n• Ear canker / active mites\n• Blindness or wall eyes\n• Wry tail (tail permanently turned sideways) or broken tail\n• Vent disease (spirochetosis)'
            }
          ],
          quickCheck: {
            question: 'What is malocclusion and why is it a permanent show disqualification?',
            options: ['Loss of fur on the ears', 'Improper alignment of top and bottom incisors preventing normal wear', 'A rabbit that refuses to pose'],
            correctIndex: 1,
            feedback: 'Malocclusion is a genetic dental misalignment where overgrown teeth can prevent eating.'
          }
        },
        senior: {
          headline: 'Pre-Registrar Evaluation, Oral Reasons & Ring Demeanor',
          sections: [
            {
              title: 'Structuring Showmanship Answers',
              body: 'Use professional agricultural terminology. When asked why your rabbit placed or what faults it carries, state: "Judge, my senior doe displays excellent depth through the loin and smooth loin taper, but could be faulted for slightly soft fur condition over the shoulders." Never argue with the judge; maintain poise and gratitude.'
            }
          ],
          quickCheck: {
            question: 'How should an exhibitor react if a judge asks a question they do not know the answer to?',
            options: ['Make up an answer quickly', 'Blame their club leader', 'Politely state: "Judge, I do not know that answer today, but I will research it in the Standard of Perfection as soon as I leave the table."'],
            correctIndex: 2,
            feedback: 'Honesty and eager commitment to study impress judges far more than guessing.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_sh_q1',
          question: 'What is the correct attire for a youth rabbit showmanship exhibitor?',
          options: ['T-shirt with cartoon logos and flip-flops', 'Clean long-sleeve white or dark collared shirt/jacket, clean jeans/slacks, closed-toe leather boots', 'Short sleeve athletic wear'],
          correctIndex: 1,
          explanation: 'Long sleeves protect arms from rabbit nails and present professional show ring attire. Closed-toe shoes protect feet.',
          division: 'junior'
        },
        {
          id: 'rb_sh_q2',
          question: 'In which ear must the identification tattoo be placed according to ARBA show rules?',
          options: ['Left ear only', 'Right ear only', 'Both ears', 'Inside the upper lip'],
          correctIndex: 0,
          explanation: 'The left ear is mandatory for exhibitor identification. The right ear is strictly reserved for the official ARBA registration tattoo.',
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
        'Live the 4-H motto: "To Make the Best Better" and pledge (Head, Heart, Hands, Health)',
        'Understand fair play: why altering animal appearance artificially is unethical and grounds for disqualification',
        'Commit to animal welfare over ribbons and trophies',
        'Demonstrate good sportsmanship when winning and when losing'
      ],
      ageContent: {
        cloverbud: {
          headline: 'The 4-H Heart & Caring for Friends!',
          readAloud: 'In 4-H, we care for our animals with our whole heart, and we cheer for our friends whether we win a ribbon or not!',
          sections: [
            {
              title: 'Being a Cheerful Friend',
              body: 'When your friend gets a first place ribbon, smile and say "Congratulations!" When you do your best, you are always a winner!'
            }
          ],
          quickCheck: {
            question: 'What should you do after your show class finishes?',
            options: ['Congratulate the winner and thank the judge with a smile', 'Throw your ribbon on the ground', 'Leave the barn angry'],
            correctIndex: 0,
            feedback: 'Yes! Good sportsmanship and kindness are the true heart of 4-H.'
          }
        },
        junior: {
          headline: 'Honesty in the Show Ring & Unethical Tampering',
          sections: [
            {
              title: 'What is Unethical Tampering?',
              body: 'Unethical tampering means altering an animal to deceive the judge. In rabbits, this includes dyeing fur, plucking white hairs out of colored breeds, clipping or polishing mismatched toenails, or giving tranquilizers. True champions win with honest breeding and daily care!'
            },
            {
              title: 'The 4-H Pledge in the Barn',
              body: 'Head to clearer thinking: Learn proper care.\nHeart to greater loyalty: Be honest and kind.\nHands to larger service: Help younger members in the barn.\nHealth to better living: Practice safe handling and cleanliness.'
            }
          ],
          quickCheck: {
            question: 'Is it ethical to use a black marker to color in a stray white spot on a black show rabbit?',
            options: ['Yes, if no one sees you', 'No, coloring or dyeing fur is fraudulent tampering and causes immediate disqualification', 'Yes, it makes the rabbit prettier'],
            correctIndex: 1,
            feedback: 'Never dye or alter an animal. Honesty and integrity matter far more than any ribbon.'
          }
        },
        intermediate: {
          headline: 'Food Safety, Withdrawal Times & Wholesome Meat Projects',
          sections: [
            {
              title: 'Market Project Wholesomeness',
              body: 'Exhibitors with market meat pens produce meat that enters the human food supply. All exhibitors must observe strict medication withdrawal times and sign an ethical affidavit certifying no prohibited substances were administered.'
            }
          ],
          quickCheck: {
            question: 'What does a medication "withdrawal time" mean in a market meat project?',
            options: ['How long it takes to withdraw money from the bank', 'The required time period between the last dose of medication and when the animal can be harvested for food', 'How long the rabbit sleeps'],
            correctIndex: 1,
            feedback: 'Withdrawal times ensure that zero pharmaceutical residues remain in meat consumed by the public.'
          }
        },
        senior: {
          headline: 'Character Leadership, Mentorship & Public Trust in Agriculture',
          sections: [
            {
              title: 'Protecting the Integrity of Youth Agriculture',
              body: 'Senior members are ambassadors for agriculture. The public observes how animals are treated at fairs. Maintaining clean water, clean bedding, calm handling, and patient education safeguards public trust in animal agriculture.'
            }
          ],
          quickCheck: {
            question: 'As a senior 4-H exhibitor, what is your role when you observe the public walking through the rabbit barn?',
            options: ['Ignore them and look at your phone', 'Greet them warmly, explain rabbit project care, and answer questions politely to advocate for agriculture', 'Tell them they cannot look at the rabbits'],
            correctIndex: 1,
            feedback: 'Leadership means educating the community and representing agricultural youth with pride.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_eth_q1',
          question: 'What are the four H’s in 4-H?',
          options: ['Horses, Hens, Hogs, and Hay', 'Head, Heart, Hands, and Health', 'Honesty, Help, Hope, and Honor'],
          correctIndex: 1,
          explanation: 'The four H’s represent Head (clearer thinking), Heart (greater loyalty), Hands (larger service), and Health (better living).',
          division: 'junior'
        },
        {
          id: 'rb_eth_q2',
          question: 'If you see an animal struggling in extreme heat at the fair while its owner is away, what should an ethical exhibitor do?',
          options: ['Walk away because it is not your animal', 'Immediately alert a barn superintendent or adult leader and provide cool water or ice if authorized', 'Take photos and post them online to complain'],
          correctIndex: 1,
          explanation: 'Animal welfare always comes first. Alerting barn leadership protects the life of the animal responsibly.',
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
        'Formulate SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for the project year',
        'Prepare and deliver a 4-H club demonstration or illustrated talk on rabbit care',
        'Engage respectfully with fair judges and the general public during barn duty',
        'Conduct a year-end project reflection to identify growth and next year’s challenges'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Show & Tell Fun with Bunnies!',
          readAloud: 'Sharing what you love with friends is so exciting! You can show your club how you brush your bunny or how bunny eats hay.',
          sections: [
            {
              title: 'My Project Goal',
              body: 'A goal is something fun you want to learn! Like: "I want to learn the 5 parts of my bunny’s head before fair!"'
            }
          ],
          quickCheck: {
            question: 'What is a great goal for your first year with a bunny?',
            options: ['Learn how to feed and brush my bunny safely every single day', 'Never clean the cage', 'Win every award in the world'],
            correctIndex: 0,
            feedback: 'Learning daily care and safe handling is the best goal in the world!'
          }
        },
        junior: {
          headline: 'Setting SMART Goals & Club Demonstrations',
          sections: [
            {
              title: 'Writing SMART Goals',
              body: 'Specific: Exactly what you want to achieve.\nMeasurable: A number or milestone you can track.\nAchievable: Realistic for your age and resources.\nRelevant: Directly benefits your animal knowledge.\nTime-bound: Has a target date (e.g. by July 15th).'
            },
            {
              title: 'Giving a Club Demonstration',
              body: 'Choose one practical topic: "How to Safely Trim Rabbit Toenails" or "How to Read an ARBA Ear Tattoo." Use posters, speak clearly, and practice in front of a mirror.'
            }
          ],
          quickCheck: {
            question: 'Which of the following is a properly formatted SMART goal?',
            options: ['"I want to win big."', '"I will practice my 12-step showmanship routine twice a week so I can perform it without notes by June 1st."', '"I might buy some rabbits."'],
            correctIndex: 1,
            feedback: 'Notice how it is specific, measurable, realistic, and has a clear target date!'
          }
        },
        intermediate: {
          headline: 'Public Speaking, Poster Contests & Buyer Letters',
          sections: [
            {
              title: 'Writing Market Buyer Letters',
              body: 'If you raise a market meat pen, sending professional letters to local business sponsors 3-4 weeks before the fair auction is vital. Introduce yourself, describe what 4-H has taught you, share what your proceeds will fund (college/next year project), and invite them to the auction.'
            }
          ],
          quickCheck: {
            question: 'What is the primary purpose of writing buyer invitation letters before the county fair auction?',
            options: ['To demand money from businesses', 'To build community relationships, share your learning, and invite prospective bidders to support youth agriculture', 'To complain about feed costs'],
            correctIndex: 1,
            feedback: 'Buyer letters cultivate community partnerships and demonstrate professionalism.'
          }
        },
        senior: {
          headline: 'Agricultural Advocacy, Junior Leader Mentorship & Grant Applications',
          sections: [
            {
              title: 'Mentoring Junior Members',
              body: 'Senior members lead by mentoring Cloverbuds and Juniors in showmanship clinics and barn setups. Serving as a Junior Superintendent builds communication, crisis-resolution, and organizational leadership.'
            }
          ],
          quickCheck: {
            question: 'What leadership action by a senior exhibitor most strongly embodies the 4-H pledge?',
            options: ['Keeping all breeding secrets to oneself', 'Hosting a hands-on showmanship practice clinic for younger first-year members', 'Complaining about judges'],
            correctIndex: 1,
            feedback: 'Sharing knowledge and lifting younger exhibitors builds a thriving 4-H community.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'rb_cg_q1',
          question: 'What does the "M" stand for in SMART goals?',
          options: ['Magical', 'Measurable', 'Minimum', 'Money'],
          correctIndex: 1,
          explanation: 'A goal must be Measurable so you can definitively assess when you have reached it.',
          division: 'junior'
        },
        {
          id: 'rb_cg_q2',
          question: 'When speaking with fair visitors who ask why rabbits are kept in cages, what is the best educational response?',
          options: ['"Because that’s what we have to do."', '"Wire cages with resting mats provide sanitation, prevent fighting, protect them from predators, and allow individual monitoring of water and feed."', '"Go ask the barn manager."'],
          correctIndex: 1,
          explanation: 'Clear, polite explanation of animal safety, biosecurity, and welfare educates the public effectively.',
          division: 'intermediate'
        }
      ]
    }
  ]
};
