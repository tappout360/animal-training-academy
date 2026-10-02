// WarrenWise Youth Animal Training Academy
// Species Pack: Dogs (Canis lupus familiaris) - 4-H Canine Companion, Obedience & Showmanship
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const DOGS_PACK = {
  id: 'dogs',
  name: 'Dog Project Academy',
  species: 'Dog (Companion, Obedience & Showmanship)',
  category: 'Companion Animals',
  icon: 'Heart',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-22',
  reviewPolicy: 'Reviewed under Academy Accuracy Policy',
  reviewerRole: 'Internal Curriculum Specialist (Canine Education)',
  verifiedBy: 'Reviewed under Academy Accuracy Policy',
  description: 'Complete 4-H dog project curriculum covering AKC breed groups, positive reinforcement training, ring patterns, rabies/DHPP prevention, heartworm awareness, and ethical sportsmanship.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Identify the 7 official AKC breed groups and their historical working functions',
        'Recognize major breeds within Sporting, Hound, Working, Terrier, Toy, Non-Sporting, and Herding groups',
        'Understand purebred standards, mixed-breed participation (All-American Dogs), and coat varieties'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Paws, Tails & Friendly Barkers!',
          readAloud: 'Dogs come in every size, from tiny Chihuahuas that fit in a bag to giant Saint Bernards! Some love retrieving balls and others love herding sheep.',
          sections: [
            {
              title: 'Dogs Big and Small',
              body: 'Dogs are loyal companions. Some have long floppy ears like Bassets, while others have pointy ears like German Shepherds. All dogs need love, good food, and play!'
            }
          ],
          quickCheck: {
            question: 'What do all dogs need every single day to stay happy and healthy?',
            options: ['Fresh water, good food, exercise, and love', 'A video game console', 'Candy bars and soda'],
            correctIndex: 0,
            feedback: 'Dogs need nutritious food, fresh water, regular walks, and affection!'
          }
        },
        junior: {
          headline: 'The 7 AKC Breed Groups & Their Roles',
          sections: [
            {
              title: 'Understanding Breed Functions',
              body: '• Sporting: Bred to assist hunters retrieving game on land and water (Golden Retriever, Labrador Retriever, Cocker Spaniel).\n• Hound: Use keen scent or acute sight to track game (Beagle, Bloodhound, Whippet).\n• Working: Guard property, pull carts, and perform water/mountain rescue (Boxer, Doberman Pinscher, Bernese Mountain Dog, Siberian Husky).\n• Terrier: Feisty, tenacious dogs bred to dig and eradicate vermin (Miniature Schnauzer, Russell Terrier).\n• Toy: Bred to be affectionate lap companions (Chihuahua, Pomeranian, Cavalier King Charles Spaniel).\n• Non-Sporting: Diverse collection with varied traits and histories (Dalmatian, Bulldog, Poodle).\n• Herding: Natural instinct to control the movement of other animals (Border Collie, German Shepherd, Pembroke Welsh Corgi).\n• All-American (Mixed Breeds): Celebrated in 4-H for obedience, agility, and companionship!'
            }
          ],
          quickCheck: {
            question: 'Which AKC group includes breeds like the Border Collie and Australian Shepherd that were bred to control livestock movement?',
            options: ['Herding Group', 'Toy Group', 'Terrier Group'],
            correctIndex: 0,
            feedback: 'Herding breeds have strong natural instincts to round up and gather livestock.'
          }
        },
        intermediate: {
          headline: 'Conformation Anatomy & Functional Movement',
          sections: [
            {
              title: 'Canine Conformation & Structure',
              body: 'Sound canine structure directly impacts longevity and working ability. Key anatomical points evaluated in showmanship and conformation include the stop (indentation between eyes), withers (highest point of shoulder blades), croup (pelvic slope), hock joint, and pasterns. Angulation in the front shoulder and rear stifle determines gait efficiency and drive.'
            }
          ],
          quickCheck: {
            question: 'What is the "withers" on a dog’s body?',
            options: ['The highest point of the shoulder blades where height is measured', 'The tip of the tail', 'The pad underneath the front paw'],
            correctIndex: 0,
            feedback: 'A dog\'s official height is measured from the ground to the top of the withers using a wicket.'
          }
        },
        senior: {
          headline: 'Breed Standards, Genetic Diversity & Canine Biomechanics',
          sections: [
            {
              title: 'Analyzing AKC Breed Standards & Orthopedic Screening',
              body: 'Breed standards serve as written blueprints describing ideal temperament, physical structure, and gait. Responsible youth handlers understand genetic clearances like OFA (Orthopedic Foundation for Animals) for hip/elbow dysplasia and eye CERF/CAER exams. Evaluating structure reveals how deviations (e.g. cow-hocked, roach-backed, or straight shoulders) increase joint wear.'
            }
          ],
          quickCheck: {
            question: 'What does an OFA certification verify when researching canine breeding stock?',
            options: ['Radiographic clearance confirming healthy hip and elbow joint conformation', 'Proof of winning a championship', 'Confirmation of coat color registration'],
            correctIndex: 0,
            feedback: 'OFA evaluations screen for hip and elbow dysplasia to protect canine soundness.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_bb_q1',
          question: 'Which breed group was specifically developed to dig underground burrows and hunt rodents/vermin?',
          options: ['Terrier Group', 'Herding Group', 'Sporting Group', 'Toy Group'],
          correctIndex: 0,
          explanation: 'Terriers were bred to pursue quarry underground and eradicate vermin on farms.',
          division: 'junior'
        },
        {
          id: 'dg_bb_q2',
          question: 'Can mixed-breed dogs (often referred to as All-American Dogs) compete in 4-H dog events?',
          options: ['Yes, 4-H warmly welcomes both purebred and mixed-breed dogs in obedience, rally, agility, and showmanship', 'No, only AKC papers are accepted', 'Only if they are under 10 pounds'],
          correctIndex: 0,
          explanation: '4-H emphasizes youth learning and training companionship, welcoming mixed-breed and purebred dogs alike.',
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
        'Understand humane housing, crate safety, and comfortable resting zones',
        'Learn age-appropriate grooming tools: slicker brush, undercoat rake, nail trimmer, and styptic powder',
        'Master canine dental hygiene and daily exercise requirements'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Grooming & Crate Comfort!',
          readAloud: 'A dog’s crate is like their very own cozy bedroom den! We never use it as a punishment. Brushing keeps their fur shiny and soft.',
          sections: [
            {
              title: 'Crate as a Safe Den',
              body: 'Dogs like a quiet, cozy spot to rest with a soft blanket and cool water. Regular brushing gets rid of loose fur so your dog feels great!'
            }
          ],
          quickCheck: {
            question: 'Should a dog’s crate ever be used as an angry punishment spot?',
            options: ['No, the crate should always be a safe, comforting personal den', 'Yes, whenever you feel upset', 'Only during storms'],
            correctIndex: 0,
            feedback: 'Crates must always remain safe, positive sanctuaries for rest and relaxation.'
          }
        },
        junior: {
          headline: 'Grooming Essentials & Nail Care Safety',
          sections: [
            {
              title: 'Tools of the Trade',
              body: '• Slicker Brush: Wire pins on a flat surface remove mats and loose dead coat.\n• Undercoat Rake: Essential for double-coated breeds (Huskies, Shepherds) during seasonal shedding.\n• Nail Trimming: Long nails cause splayed toes and skeletal pain. When clipping, locate the "quick" (blood vessel inside the nail). If you accidentally nick the quick, immediately apply styptic powder (Kwik Stop) with gentle pressure.'
            }
          ],
          quickCheck: {
            question: 'What emergency grooming product stops bleeding immediately if a dog’s nail quick is accidentally clipped?',
            options: ['Styptic powder (Kwik Stop)', 'Baking soda paste', 'Cold milk'],
            correctIndex: 0,
            feedback: 'Styptic powder acts as a fast hemostatic agent to clot broken nail vessels.'
          }
        },
        intermediate: {
          headline: 'Environmental Enrichment, Dental Prophylaxis & Heat Safety',
          sections: [
            {
              title: 'Preventing Heatstroke & Dental Disease',
              body: 'Dogs regulate internal body heat primarily through panting and minor sweat gland perspiration in their paw pads. Never leave dogs inside parked vehicles—temperatures skyrocket to lethal levels within 10 minutes even on a 70°F day with cracked windows! Routine enzymatic toothpaste brushing prevents periodontal bacteremia and tooth loss.'
            }
          ],
          quickCheck: {
            question: 'Why are parked cars deadly to dogs even when windows are cracked in moderate weather?',
            options: ['Vehicles act as solar ovens where interior temperatures rise to lethal levels (>105°F) in minutes', 'Dogs get bored quickly', 'Dogs prefer air conditioning'],
            correctIndex: 0,
            feedback: 'Vehicles trap heat rapidly, inducing fatal hyperthermia and multi-organ failure.'
          }
        },
        senior: {
          headline: 'Thermoregulation Mechanics, Crate Sizing & Conditioning',
          sections: [
            {
              title: 'Biomechanics of Safe Housing and Fitness Conditioning',
              body: 'Humane crate sizing requires that a dog can stand upright without touching the crate ceiling, turn around completely with ease, and lie outstretched comfortably. Conditioning regimens for canine athletes (agility, tracking, obedience) must balance cardiovascular endurance, proprioception on balance equipment, and adequate warm-up/cool-down periods.'
            }
          ],
          quickCheck: {
            question: 'What is the minimum humane standard for crate dimensions?',
            options: ['The dog can stand fully erect without head touching, turn around freely, and lie stretched out', 'The dog can squeeze in while curling into a ball', 'Double the dog’s weight in square feet'],
            correctIndex: 0,
            feedback: 'A dog must have full clearance to stand, turn, and stretch out without physical restriction.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_dc_q1',
          question: 'What is the primary way dogs cool their bodies down in warm temperatures?',
          options: ['Panting to evaporate moisture from their tongue, mouth, and lungs', 'Sweating heavily across their entire back and chest', 'Licking their fur to dry it'],
          correctIndex: 0,
          explanation: 'Dogs possess few sweat glands in their paw pads, relying predominantly on panting for thermoregulation.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 20,
      objectives: [
        'Understand canine omnivore nutritional requirements (protein, fat, carbohydrates, vitamins, minerals)',
        'Decode AAFCO feeding labels (Guaranteed Analysis, life-stage claims)',
        'Memorize canine toxic household foods (chocolate/theobromine, xylitol, grapes/raisins, onions/garlic)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Yummy Doggy Dinner & Dangerous Snacks!',
          readAloud: 'Dogs love their crunchy kibble and fresh clean water! But some human foods make dogs very sick—especially chocolate and grapes!',
          sections: [
            {
              title: 'Keep Dogs Safe from Bad Foods',
              body: 'Never share chocolate, candy, gum, grapes, or onions with your dog. Stick to healthy dog treats approved by an adult!'
            }
          ],
          quickCheck: {
            question: 'Which of these sweet human treats is poisonous to dogs and should NEVER be given?',
            options: ['Chocolate candy', 'Dog-safe peanut butter', 'Crunchy baby carrots'],
            correctIndex: 0,
            feedback: 'Chocolate contains theobromine which is toxic to dogs!'
          }
        },
        junior: {
          headline: 'AAFCO Labels & Deadly Canine Toxins',
          sections: [
            {
              title: 'Critical Canine Household Toxins',
              body: '• Theobromine (Chocolate): Dark and baking chocolate are the most toxic, causing cardiac arrhythmia and seizures.\n• Xylitol / Birch Sugar: Artificial sweetener found in sugar-free gum, peanut butter, and baked goods; causes massive insulin release leading to life-threatening hypoglycemia and acute liver failure!\n• Grapes & Raisins: Cause sudden, irreversible acute kidney failure even in microscopic quantities.\n• Allium family (Onions, Garlic, Chives): Contain thiosulfate which oxidizes red blood cells, causing hemolytic anemia.'
            }
          ],
          quickCheck: {
            question: 'What common artificial sweetener in sugar-free gum and some peanut butters causes rapid, fatal hypoglycemia in dogs?',
            options: ['Xylitol (birch bark extract / birch sugar)', 'Cane sugar', 'Corn syrup'],
            correctIndex: 0,
            feedback: 'Xylitol triggers massive insulin surges in canines leading to severe hypoglycemia and acute liver failure.'
          }
        },
        intermediate: {
          headline: 'Guaranteed Analysis & Life Stage Nutrition',
          sections: [
            {
              title: 'Evaluating Feed Bags by Life Stage',
              body: 'AAFCO establishes nutritional profiles for Gestation/Lactation, Growth (Puppy), Adult Maintenance, and All Life Stages. Puppy diets contain higher crude protein (>22%) and balanced calcium:phosphorus ratios (1.1:1 to 1.3:1). Large breed puppy feeds strictly control calcium and energy density to prevent rapid skeletal overgrowth and osteochondritis dissecans (OCD).'
            }
          ],
          quickCheck: {
            question: 'Why do large-breed puppy formulas strictly regulate calcium and energy density?',
            options: ['To prevent excessively rapid bone growth that can lead to developmental orthopedic disorders', 'To make puppies grow three times faster', 'To eliminate the need for exercise'],
            correctIndex: 0,
            feedback: 'Controlled growth rates protect developing large-breed joints and growth plates.'
          }
        },
        senior: {
          headline: 'Body Condition Scoring (1-9 Scale) & Caloric Energy Calculations',
          sections: [
            {
              title: 'BCS Assessment and Resting Energy Requirements (RER)',
              body: 'Obesity is the number one nutritional disease in companion dogs. Handlers evaluate Body Condition Score on the WSAVA 9-point scale:\n• Ideal (4-5/9): Ribs easily palpable with minimal fat covering; waist visible behind ribs when viewed from above; abdominal tuck present.\n• Overweight (7-9/9): Ribs difficult or impossible to palpate beneath heavy fat layer; absent waist; distended ventral abdominal profile.\nCalculating RER (Resting Energy Requirement) = 70 * (Body Weight in kg)^0.75.'
            }
          ],
          quickCheck: {
            question: 'What visual and palpable signs indicate an ideal Body Condition Score (4-5 on a 9-point scale)?',
            options: ['Ribs easily palpable without excess fat, distinct waistline behind ribs, and clear abdominal tuck', 'Individual ribs protruding sharply with zero fat covering', 'Flat back with no waist and ribs impossible to feel'],
            correctIndex: 0,
            feedback: 'Ideal conditioning features palpable ribs without excess fat, a visible waist, and an abdominal tuck.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_nt_q1',
          question: 'Eating which of the following foods causes acute kidney failure in dogs even in tiny amounts?',
          options: ['Grapes and raisins', 'Cooked green beans', 'Plain white rice', 'Canned pumpkin'],
          correctIndex: 0,
          explanation: 'Grapes and raisins trigger idiosyncratic, severe acute renal failure in dogs.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'health_biosecurity',
      topicId: 'health_biosecurity',
      title: 'Health Observation & Biosecurity Awareness',
      order: 4,
      estimatedMinutes: 20,
      objectives: [
        'Recognize healthy vital signs: normal temperature (100.5-102.5°F), capillary refill time (< 2 sec), pink gums',
        'Understand Core vaccines (Rabies, DHPP) vs Non-Core (Bordetella, Leptospirosis, Lyme)',
        'Identify internal parasites (Heartworm, Roundworms) and external parasites (Fleas, Ticks)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Healthy Pups from Nose to Tail!',
          readAloud: 'A healthy dog has clear, bright eyes, clean ears that don’t smell, shiny fur, and a wet, cool nose! When they feel good, their tail wags happily.',
          sections: [
            {
              title: 'Spotting When a Dog Feels Bad',
              body: 'If your dog is sleeping all day, won’t eat treats, or has a warm dry nose and tummy ache, tell an adult right away so a friendly veterinarian can help.'
            }
          ],
          quickCheck: {
            question: 'What color should a healthy dog’s gums normally be?',
            options: ['Healthy bubblegum pink', 'Pale ghostly white', 'Bright yellow'],
            correctIndex: 0,
            feedback: 'Healthy canine gums are moist and bubblegum pink!'
          }
        },
        junior: {
          headline: 'Core Vaccinations & Parasite Prevention',
          sections: [
            {
              title: 'Core vs Non-Core Canine Vaccines',
              body: '• Rabies: Mandatory by law across all states; fatal zoonotic viral disease affecting the nervous system.\n• DHPP / DA2PP: Protects against Canine Distemper, Hepatitis (Adenovirus Type 2), Parvovirus (severe bloody diarrhea and dehydration in puppies), and Parainfluenza.\n• Non-Core: Bordetella bronchiseptica (Kennel Cough), Leptospirosis (zoonotic bacteria spread through stagnant water/wildlife urine), Lyme disease.\n• Heartworm Disease: Transmitted exclusively by mosquitoes. Dogs must be tested annually and kept on year-round veterinary preventative medication.'
            }
          ],
          quickCheck: {
            question: 'How is canine heartworm disease (Dirofilaria immitis) transmitted from dog to dog?',
            options: ['Through the bite of an infected mosquito', 'Through direct contact with dog feces', 'By sharing food bowls'],
            correctIndex: 0,
            feedback: 'Heartworms are mosquito-borne parasites that migrate to settle in the pulmonary arteries and heart.'
          }
        },
        intermediate: {
          headline: 'Triage Vitals & Zoonotic Awareness',
          sections: [
            {
              title: 'Vital Signs & Emergency Triage',
              body: 'Normal canine physiological parameters:\n• Temperature: 100.5°F to 102.5°F (rectal).\n• Pulse: 60-140 beats per minute (slower in large breeds, faster in toys).\n• Respiration: 10-30 breaths per minute at rest.\n• Capillary Refill Time (CRT): Under 2 seconds. Press the pink gum firmly; color must return within 2 seconds. Delayed CRT (>2s) or pale/white gums indicates circulatory shock or severe internal hemorrhage requiring immediate emergency veterinary care.'
            }
          ],
          quickCheck: {
            question: 'What does a prolonged capillary refill time (> 2 seconds) and white gums indicate in a dog?',
            options: ['Hypovolemic shock, circulatory failure, or severe blood loss requiring immediate veterinary emergency intervention', 'The dog is just tired from playing', 'The dog has a minor cold'],
            correctIndex: 0,
            feedback: 'Pale gums and delayed capillary refill indicate severe circulatory distress and shock.'
          }
        },
        senior: {
          headline: 'Gastric Dilatation-Volvulus (GDV), Parvovirus Pathophysiology & Biosecurity',
          sections: [
            {
              title: 'GDV Emergency Protocol & Ring Sanitation',
              body: 'Deep-chested breeds (Great Danes, Standard Poodles, German Shepherds) are at high risk for Gastric Dilatation-Volvulus (Bloat). The stomach distends with gas and rotates on its mesenteric axis, occluding the caudal vena cava. Symptoms include non-productive retching, severe abdominal distension, restlessness, and tachycardic collapse. Immediate surgical gastropexy is required. In 4-H club training facilities, strict parvovirus disinfection requires 1:32 household bleach dilution or accelerated hydrogen peroxide, as quaternary ammonium fails to inactivate non-enveloped parvoviral capsids.'
            }
          ],
          quickCheck: {
            question: 'What is the classic clinical presentation of Gastric Dilatation-Volvulus (GDV / Bloat)?',
            options: ['Unproductive retching ("dry heaving"), pacing, distress, and rapid abdominal swelling in deep-chested dogs', 'Excessive sleeping after eating', 'Scratching behind the ears'],
            correctIndex: 0,
            feedback: 'Non-productive retching paired with rapid abdominal distension indicates acute GDV emergency.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_hb_q1',
          question: 'Which lethal viral disease of canines causes severe hemorrhagic (bloody) diarrhea, vomiting, and profound dehydration, especially in unvaccinated puppies?',
          options: ['Canine Parvovirus', 'Canine Influenza', 'Bordetella', 'Ringworm'],
          correctIndex: 0,
          explanation: 'Parvovirus attacks rapidly dividing enterocytes in intestinal crypts, causing severe bloody diarrhea and life-threatening sepsis.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'handling_welfare',
      topicId: 'handling_welfare',
      title: 'Handling & Welfare',
      order: 5,
      estimatedMinutes: 20,
      objectives: [
        'Read canine body language and subtle stress escalation cues (Ladder of Aggression)',
        'Master positive reinforcement training principles (timing, reward markers, high-value reinforcers)',
        'Understand humane equipment choices and safety guidelines for strange dog greetings'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Speaking Doggy Language & Safe Hugs!',
          readAloud: 'Dogs don’t use words—they talk with their ears, eyes, and tails! We always ask the owner before petting any new dog, and let the dog sniff our closed hand first.',
          sections: [
            {
              title: 'The "Ask First" Golden Rule',
              body: 'Never run up to a strange dog or hug them tight around the neck. Always stop, ask the handler "May I please pet your dog?", and let the dog choose to step forward friendly!'
            }
          ],
          quickCheck: {
            question: 'What should you always do BEFORE petting someone else’s dog?',
            options: ['Politely ask the handler for permission first', 'Run up fast and give them a bear hug', 'Grab their tail to say hello'],
            correctIndex: 0,
            feedback: 'Always ask the owner first and approach gently!'
          }
        },
        junior: {
          headline: 'Canine Stress Signals & The Ladder of Aggression',
          sections: [
            {
              title: 'Subtle Signs of Canine Stress',
              body: 'Dogs rarely bite without warning. They communicate escalating discomfort through subtle body language signals:\n1. Calming / Displacement Signals: Yawning when not tired, lip licking, turning head away, sniffing ground.\n2. Heightened Stress: "Whale eye" (showing whites of eyes), stiff body posture, tense closed mouth, trembling.\n3. Defensive Warnings: Growling, hard freezing stare, curling lips to show teeth, snapping in air.\n4. Bite: The final resort when all earlier communication was ignored.\nNever punish a dog for growling! A growl is a vital safety alarm telling you the dog feels threatened.'
            }
          ],
          quickCheck: {
            question: 'Why should you NEVER punish a dog for growling when it feels uncomfortable?',
            options: ['Because growling is an essential warning signal; punishing it removes the warning and creates a dog that bites without notice', 'Because growling means the dog is laughing', 'Because growling makes dogs stronger'],
            correctIndex: 0,
            feedback: 'Punishing a growl extinguishes the warning alarm, creating an unpredictably dangerous dog.'
          }
        },
        intermediate: {
          headline: 'Operant Conditioning & Fear-Free Handling',
          sections: [
            {
              title: 'The Four Quadrants of Operant Conditioning',
              body: '4-H dog projects champion Positive Reinforcement (R+): adding a rewarding stimulus (treat, praise, play) to increase the frequency of desirable behaviors. Marking behaviors with precise timing (using a verbal marker like "YES!" or a mechanical clicker) bridges the exact millisecond the dog performs the criteria before the reinforcer is delivered. Avoid aversive physical corrections which induce anxiety, learned helplessness, and fallout behaviors.'
            }
          ],
          quickCheck: {
            question: 'What is the primary function of a clicker or verbal marker (e.g., "YES!") in positive reinforcement training?',
            options: ['To pinpoint the exact instant the dog performs the correct behavior before delivering reward', 'To frighten the dog into obedience', 'To keep the trainer awake'],
            correctIndex: 0,
            feedback: 'Markers act as precise event bridges connecting the correct behavior to the incoming reinforcer.'
          }
        },
        senior: {
          headline: 'Behavioral Pharmacology, Desensitization & Counter-Conditioning',
          sections: [
            {
              title: 'Systematic Desensitization & Counter-Conditioning (DS/CC)',
              body: 'When addressing reactivity or fear-based behaviors in dogs, handlers apply Systematic Desensitization (presenting the feared trigger at a sub-threshold distance/intensity where no stress reaction is evoked) combined with Counter-Conditioning (pairing the sub-threshold trigger with super high-value food to alter the dog’s underlying emotional valence from fear to anticipation). Handlers recognize trigger stacking, where cumulative micro-stressors lower bite thresholds.'
            }
          ],
          quickCheck: {
            question: 'What is "trigger stacking" in canine behavioral science?',
            options: ['The cumulative effect of multiple minor stressors occurring over time that lowers the threshold for a fear or reactive response', 'Stacking agility obstacles on top of each other', 'Teaching a dog multiple tricks in one day'],
            correctIndex: 0,
            feedback: 'Trigger stacking occurs when cumulative micro-stressors add up until the dog reacts defensively.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_hw_q1',
          question: 'What does "whale eye" indicate when observed in a dog’s facial expression?',
          options: ['The dog is feeling tense or threatened and showing the white sclera of its eyes', 'The dog is completely relaxed and sleepy', 'The dog wants to go swimming'],
          correctIndex: 0,
          explanation: 'Whale eye occurs when a dog turns its head away but shifts its eyes toward the threat, exposing the white sclera.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Maintain mandatory vaccination records (Rabies certificate, county license number)',
        'Track daily training logs, exercise minutes, and behavioral progress',
        'Calculate veterinary expenses, feed costs, equipment investments, and 4-H project financials'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Doggy Scrapbook & Sticker Chart!',
          readAloud: 'Keeping a dog journal is fun! You can draw pictures of your pup playing, paste in their photo, and place stickers every day you fill their clean water bowl.',
          sections: [
            {
              title: 'Daily Care Checkmarks',
              body: 'Marking a checkmark every time you walk, brush, and feed your pup shows everyone how responsible you are as a caring pet guardian!'
            }
          ],
          quickCheck: {
            question: 'Why do we write down when our dog gets their dinner and clean water?',
            options: ['To make sure our dog gets cared for every day without forgetting', 'To show our dog how to read', 'To practice spelling animal names only'],
            correctIndex: 0,
            feedback: 'Record keeping ensures our animals receive consistent, top-tier daily care!'
          }
        },
        junior: {
          headline: '4-H Dog Project Books & Mandatory Health Records',
          sections: [
            {
              title: 'Essential Documentation for Fair Eligibility',
              body: 'Every 4-H dog exhibitor must maintain an organized binder or digital portfolio containing:\n1. Official Rabies Certificate: Signed by a licensed veterinarian showing vaccine lot, expiration date, and microchip number.\n2. County Dog License: Proof of registration with local animal control.\n3. Vaccination Record: DHPP, Bordetella, and annual heartworm test documentation.\n4. Financial Expense Log: Feed bags, veterinary bills, training collars/leads, and entry fees.'
            }
          ],
          quickCheck: {
            question: 'Which legal document signed by a licensed veterinarian is required before any dog can enter a 4-H dog show or fairgrounds?',
            options: ['Official Rabies Vaccination Certificate', 'Pedigree sales contract', 'AKC Championship ribbon certificate'],
            correctIndex: 0,
            feedback: 'A valid Rabies certificate signed by a veterinarian is mandatory by state and fair law.'
          }
        },
        intermediate: {
          headline: 'Training Metric Logs & Behavioral Frequency Tracking',
          sections: [
            {
              title: 'Quantifying Training Milestones',
              body: 'Intermediate handlers track training success rates using operational metrics. Rather than saying "my dog knows stay," handlers record criteria: "Sit-Stay at 20-foot distance for 3 minutes with 90% reliability across 3 novel outdoor environments with distractions." Tracking data identifies when to raise criteria and where remediation is needed.'
            }
          ],
          quickCheck: {
            question: 'How does an intermediate handler scientifically verify a behavior is mastered before entering the show ring?',
            options: ['By testing the 3 Ds: Distance, Duration, and Distraction with consistent high-percentage reliability', 'By guessing after two practice attempts', 'By only practicing inside a quiet hallway'],
            correctIndex: 0,
            feedback: 'Mastery requires proofing across the three Ds: Distance, Duration, and Distraction.'
          }
        },
        senior: {
          headline: 'Full Enterprise Accounting & Lifetime Health Portfolio Auditing',
          sections: [
            {
              title: 'Financial Analysis & Risk Management',
              body: 'Senior youth manage lifetime pet ownership budgets, projecting total lifecycle expenditure (routine preventative care, emergency pet health insurance, amortized equipment, food cost per pound, and travel). Youth analyze cost-benefit ratios of preventative diagnostics (e.g. fecal flotation, senior blood chemistry panels) versus emergent hospital intervention.'
            }
          ],
          quickCheck: {
            question: 'What is the primary objective of completing a comprehensive lifetime cost analysis in a senior companion animal project?',
            options: ['To understand true financial responsibility, budgeting for emergency veterinary reserves and lifetime wellness care', 'To calculate how much money to sell the dog for', 'To eliminate veterinary visits'],
            correctIndex: 0,
            feedback: 'Senior projects build real-world financial literacy and lifetime animal welfare stewardship.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_rk_q1',
          question: 'What crucial information must be recorded on an official Rabies certificate for fair entry validation?',
          options: ['Veterinarian signature, vaccine serial/lot number, date administered, and expiration date', 'The dog’s favorite squeaky toy', 'The names of all littermates', 'The fair judge’s name'],
          correctIndex: 0,
          explanation: 'Official rabies certificates must verify veterinarian identity, serial lot number, and valid vaccination window.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 20,
      objectives: [
        'Master breed-specific stacking: table breeds vs floor breeds, hand stack vs free bait stack',
        'Execute standard showmanship ring patterns: Triangle, "L", "T", Down-and-Back, and Group Heeling',
        'Demonstrate proper lead handling, courtesy spacing, and dental examination presentation to the judge'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Prancing Proudly in the Ring!',
          readAloud: 'Put your best foot forward! Stand tall with your dog by your side on a loose, gentle leash, and smile at the judge while keeping your eyes on your furry partner.',
          sections: [
            {
              title: 'Fun with Showmanship',
              body: 'In showmanship, the judge is looking at YOU and how gently you guide your dog. Keep your dog between you and the center of the ring, and always leave space between you and other dogs!'
            }
          ],
          quickCheck: {
            question: 'Who is the judge looking at most closely during a 4-H Dog Showmanship class?',
            options: ['The youth handler—evaluating grooming, handling skills, and sportsmanship', 'Only the dog’s fur color', 'The crowd in the bleachers'],
            correctIndex: 0,
            feedback: 'Showmanship judges handler teamwork, presentation, and knowledge!'
          }
        },
        junior: {
          headline: 'Stacking Techniques & Ring Patterns',
          sections: [
            {
              title: 'Stacking and Ring Etiquette',
              body: '• Stacking: Position the dog squarely with front legs straight down beneath shoulders and rear hocks perpendicular to the floor.\n  - Table Breeds: Small breeds (Toy group, small Terriers) are gently lifted to the judging table for examination.\n  - Floor Breeds: Medium/large dogs are stacked on the ground.\n• Never Block the Judge’s View: Always stay on the opposite side of the dog so the judge has an unobstructed sightline.\n• Down and Back: Move in a straight line away from the judge, pivot smoothly without switching hands awkwardly, and return directly toward the judge, stopping 6-8 feet before them.\n• Triangle Pattern: Move straight away, turn along the corner of the ring, angle diagonally across the top, and return to judge.'
            }
          ],
          quickCheck: {
            question: 'When executing a Down-and-Back pattern in the show ring, where should you stop your dog in front of the judge?',
            options: ['Approximately 6 to 8 feet directly in front of the judge, standing squarely', 'Right on top of the judge’s shoes', 'At the opposite corner of the arena'],
            correctIndex: 0,
            feedback: 'Stopping 6-8 feet away allows the judge to evaluate the dog’s front assembly comfortably.'
          }
        },
        intermediate: {
          headline: 'Mastering the Bite Check & Complex Ring Heeling',
          sections: [
            {
              title: 'Presenting the Dentition & Precision Turns',
              body: 'When the judge approaches for the physical examination, handlers present the dog’s teeth (bite):\n1. Gently lift the dog’s upper and lower lips with two fingers while keeping jaws closed so the judge can view incisor alignment (scissors, level, or undershot bite depending on breed standard).\n2. Never pry the dog’s jaws wide open.\n3. In group gaiting, maintain a minimum of 6 to 8 feet of buffer space between your dog and the dog in front of you. If the dog ahead is slow, pace your gait or round your corners without crowding.'
            }
          ],
          quickCheck: {
            question: 'How should a handler properly present a dog’s teeth/bite to the judge during oral examination?',
            options: ['Keep the jaws gently closed and peel back the lips to reveal incisors and bite alignment', 'Force the dog’s jaws open wide as if yawning', 'Ask the judge to reach in and grab the dog’s tongue'],
            correctIndex: 0,
            feedback: 'Keep jaws closed and gently retract the lips to display incisor alignment.'
          }
        },
        senior: {
          headline: 'Judge Ring Geometry, Free Stacking & Breed Nuance Evaluation',
          sections: [
            {
              title: 'Elite Ring Strategy & Breed-Specific Presentation',
              body: 'Senior handlers adapt ring handling to highlight individual breed strengths. Sporting and herding breeds are trained to "free bait stack" (stepping into a square stack on verbal/hand cue without manual physical repositioning). Handlers master ring geometry, calculating gait velocity to accommodate the dog’s reach and drive without racing or dragging. Handlers answer in-depth anatomy, breed history, and parasite cycle questions posed spontaneously by the judge.'
            }
          ],
          quickCheck: {
            question: 'What is "free stacking" in competitive showmanship?',
            options: ['Prompting the dog to step forward into a square stack using eye contact, body cue, and bait without touching its legs', 'Letting the dog run free off leash', 'Stacking on an uneven wooden block'],
            correctIndex: 0,
            feedback: 'Free stacking showcases exceptional communication where the dog positions its own legs on cue.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_sm_q1',
          question: 'What cardinal rule of showmanship ring positioning must every youth handler observe at all times?',
          options: ['Never stand directly between the judge and your dog, maintaining an unobstructed view for the judge', 'Always face away from the judge', 'Keep your dog walking behind you at all times'],
          correctIndex: 0,
          explanation: 'The handler must never block the judge\'s visual line to the dog.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Uphold humane training principles, rejecting abusive or pain-inducing methods',
        'Demonstrate outstanding sportsmanship, gracious winning, and graceful losing',
        'Understand canine welfare responsibility, shelter challenges, and community breed advocacy'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Being a Kind Friend to Every Dog and Handler!',
          readAloud: 'True champions are kind! Win or lose, we always give our dog a happy cuddle and tell other youth "Good job!" with a warm high five.',
          sections: [
            {
              title: 'Kindness in the Ring',
              body: 'Dogs can feel when we are angry or stressed. Always speak with a gentle voice and treat your dog with patience. Your dog is your best friend no matter what ribbon you get!'
            }
          ],
          quickCheck: {
            question: 'What should you do right after completing your showmanship class, regardless of your ribbon placing?',
            options: ['Praise your dog enthusiastically and congratulate your fellow exhibitors', 'Blame your dog for making mistakes', 'Throw your ribbon on the ground'],
            correctIndex: 0,
            feedback: 'Always celebrate your dog\'s effort and support fellow 4-H members!'
          }
        },
        junior: {
          headline: 'The 4-H Pillar of Character & Ring Integrity',
          sections: [
            {
              title: 'Fair Play, Animal Welfare & Honest Showing',
              body: '• Trustworthiness: Never use calming drugs, stimulants, or artificial color enhancements on coats.\n• Respect: Treat judges, ring stewards, fellow exhibitors, and parents with courtesy.\n• Responsibility: You are the sole voice and protector of your dog. Never leave your dog unattended in high heat or stressful situations.\n• Fairness: Follow all show rules and accept judge decisions with maturity.'
            }
          ],
          quickCheck: {
            question: 'Is it ethical to administer over-the-counter calming sedatives to make a high-energy dog behave calmly in the show ring?',
            options: ['No, administering unprescribed sedatives or performance-altering drugs is an ethical violation and compromises safety', 'Yes, whenever a dog gets nervous', 'Only during warm-ups'],
            correctIndex: 0,
            feedback: 'Doping or sedating show animals violates ethics codes and endangers canine health.'
          }
        },
        intermediate: {
          headline: 'Advocacy, Breed Bias & Community Responsibility',
          sections: [
            {
              title: 'Addressing Breed Stereotypes & Public Perception',
              body: 'Intermediate youth act as community ambassadors. Handlers recognize that individual canine temperament is shaped by genetics, socialization, training, and environment—not breed labels alone. Youth advocate for responsible pet ownership, spay/neuter awareness, microchipping, and leash laws to protect public safety and reduce shelter overcrowding.'
            }
          ],
          quickCheck: {
            question: 'What factors most reliably determine a companion dog’s behavioral stability in public?',
            options: ['Proper socialization, humane positive training, genetics, and responsible handling', 'Only coat color', 'The state the dog was born in'],
            correctIndex: 0,
            feedback: 'Early positive socialization and consistent training build solid behavioral foundations.'
          }
        },
        senior: {
          headline: 'Ethical Dilemmas in Canine Athletics & Veterinary Boundaries',
          sections: [
            {
              title: 'Managing High-Drive Working Dogs & Handler Accountability',
              body: 'Senior youth navigate complex welfare dilemmas, such as knowing when to retire an aging agility or obedience dog suffering from subclinical arthritis, despite handler aspirations for championships. Youth understand the legal and ethical boundary between basic conditioning and unauthorized veterinary medical procedures.'
            }
          ],
          quickCheck: {
            question: 'When an aging canine athlete exhibits subtle stiffness and reduced jumping enthusiasm, what is the ethical priority?',
            options: ['Consult a veterinarian for an orthopedic evaluation and modify or retire athletic competition to protect welfare', 'Increase training drills until performance improves', 'Give double human pain relievers without veterinary guidance'],
            correctIndex: 0,
            feedback: 'The animal\'s physical welfare and comfort always supersede ribbon aspirations.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_ec_q1',
          question: 'What is the most ethical action to take if your dog appears limping or sore right before entering the agility ring?',
          options: ['Scratch/withdraw your dog from the class and seek veterinary evaluation', 'Force the dog to run through the pain', 'Hide the limp from the judge'],
          correctIndex: 0,
          explanation: 'Youth welfare ethics dictate that animal health and pain relief always come first.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'goals_communication',
      topicId: 'goals_communication',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Establish SMART goals for obedience, showmanship, and companion animal development',
        'Learn the 10 exercises of the AKC Canine Good Citizen (CGC) program',
        'Develop public speaking confidence through 4-H demonstrations and community therapy visits'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Sharing My Dog’s Story with Pride!',
          readAloud: 'You and your dog make an amazing team! You can show your club friends how your dog sits on command or performs a silly high-five trick.',
          sections: [
            {
              title: 'Show and Tell Fun',
              body: 'Talking in front of your club teaches you how to be brave and proud! Tell everyone your dog’s name, breed, and their favorite fun game to play at home.'
            }
          ],
          quickCheck: {
            question: 'What is a great way to practice public speaking in your 4-H club?',
            options: ['Giving a short show-and-tell presentation about your dog and demonstrating a fun trick', 'Refusing to talk to anyone', 'Hiding behind the door'],
            correctIndex: 0,
            feedback: 'Giving club presentations builds lifetime confidence and leadership!'
          }
        },
        junior: {
          headline: 'SMART Goals & The Canine Good Citizen (CGC) Standard',
          sections: [
            {
              title: 'The 10 Steps of Canine Good Citizen (CGC)',
              body: '1. Accepting a friendly stranger\n2. Sitting politely for petting\n3. Appearance and grooming acceptance\n4. Out for a walk (walking on a loose lead)\n5. Walking through a crowd\n6. Sit and down on cue and staying in place\n7. Coming when called (recall)\n8. Reaction to another dog (polite greeting without lunging)\n9. Reaction to distraction (confident recovery)\n10. Supervised separation (remaining calm with a trusted steward for 3 minutes)'
            }
          ],
          quickCheck: {
            question: 'What behavior must a dog demonstrate during the CGC "Supervised Separation" test item?',
            options: ['Remain calm without excessive whining, pacing, or barking for 3 minutes while the owner is out of sight', 'Jump over a 6-foot fence to find the owner', 'Sleep upside down on the floor'],
            correctIndex: 0,
            feedback: 'Supervised separation evaluates emotional stability and absence of severe separation distress.'
          }
        },
        intermediate: {
          headline: 'Public Demonstration Mechanics & Therapy Dog Outreach',
          sections: [
            {
              title: 'Structuring an Illustrated Talk or Method Demonstration',
              body: 'Intermediate handlers deliver 8-10 minute formal 4-H demonstrations utilizing visual aids, live canine assistants, and structured timing:\n• Introduction: Hook, name, purpose, and safety overview.\n• Body: Step-by-step breakdown (e.g. "Teaching the Emergency Drop-on-Recall Using Backchaining").\n• Conclusion: Summary of core concepts, citation of vetted sources, and fielding judge questions.'
            }
          ],
          quickCheck: {
            question: 'What is the recommended structure for an effective 4-H method demonstration?',
            options: ['Catchy introduction, step-by-step sequential demonstration, clear summary, and Q&A session', 'Reading directly from a textbook with no eye contact', 'Only showing a video on your phone'],
            correctIndex: 0,
            feedback: 'Structured presentations with demonstrations and question fielding cultivate mastery.'
          }
        },
        senior: {
          headline: 'Canine-Assisted Therapy Leadership & Legislative Advocacy',
          sections: [
            {
              title: 'Leading Youth Dog Clinics & Service Animal Literacy',
              body: 'Senior handlers mentor younger exhibitors and organize club service initiatives (e.g. certified therapy dog visits to convalescent homes and youth reading literacy programs). Handlers educate the public on the legal definitions under the Americans with Disabilities Act (ADA):\n• Service Animals: Specially trained dogs performing specific tasks for an individual with a disability (protected public access under ADA Title II & III).\n• Emotional Support Animals (ESA): Provide comfort; not afforded public access rights under ADA.\n• Therapy Dogs: Specially trained pets providing comfort in schools and hospitals by institutional invitation.'
            }
          ],
          quickCheck: {
            question: 'Under the Americans with Disabilities Act (ADA), what distinguishes a legitimate Service Dog from a Therapy Dog or ESA?',
            options: ['Service dogs are individually trained to perform specific tasks directly mitigating a handler’s disability and possess federal public access rights', 'Any dog with a store-bought vest is a service dog', 'There is no legal difference between service dogs and emotional support animals'],
            correctIndex: 0,
            feedback: 'The ADA strictly defines service animals by individual task training for a disability, granting public access rights.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'dg_gc_q1',
          question: 'How many test exercises comprise the standard AKC Canine Good Citizen (CGC) assessment?',
          options: ['10 test items', '5 test items', '20 test items', '3 test items'],
          correctIndex: 0,
          explanation: 'The CGC certification consists of 10 standardized behavioral evaluations of polite manners.',
          division: 'junior'
        }
      ]
    }
  ]
};
