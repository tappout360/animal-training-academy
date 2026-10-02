// WarrenWise Youth Animal Training Academy
// Species Pack: Horses & Ponies (Equus caballus) - 4-H Equine Project
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const HORSES_PACK = {
  id: 'horses',
  name: 'Horse & Pony Project Academy',
  species: 'Horse & Pony (Equine)',
  category: 'Equine Livestock',
  icon: 'Zap',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-22',
  verifiedBy: 'University Equine Extension Specialist & Certified Horsemanship Association (CHA) Judge',
  description: 'Complete 4-H horse project curriculum covering breeds and colors, hindgut digestion, colic & laminitis prevention, ASTM/SEI helmet safety, the quarter system in showmanship, Coggins testing, and equine welfare.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Classify equines into Draft, Light Horse, and Pony categories',
        'Identify major breeds: Quarter Horse, Thoroughbred, Arabian, Morgan, Paint, Appaloosa, Welsh Pony, Shetland Pony, Percheron',
        'Understand hands measurement (1 hand = 4 inches) and facial/leg markings'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Galloping Ponies & Beautiful Horses!',
          readAloud: 'Horses are majestic, gentle giants! Some are big and strong like Draft horses that pull wagons, while ponies are smaller and fun to groom.',
          sections: [
            {
              title: 'Horses and Ponies',
              body: 'Horses love to run, munch on sweet green grass, and nicker to say hello. Ponies are horses that are shorter than 14 and a half hands tall!'
            }
          ],
          quickCheck: {
            question: 'What is a horse that is smaller than 14.2 hands tall called?',
            options: ['A pony', 'A kitten', 'A puppy'],
            correctIndex: 0,
            feedback: 'Equines measuring under 14.2 hands (58 inches) are classified as ponies!'
          }
        },
        junior: {
          headline: 'Breed Classifications, Hand Measurement & Markings',
          sections: [
            {
              title: 'Measuring Height in Hands',
              body: 'Horses are measured from the level ground to the top of the withers in "hands." One hand equals exactly 4 inches (e.g. 15.2 hands = 15 hands + 2 inches = 62 inches). A horse is strictly defined as measuring 14.2 hands (58 inches) or taller, while an equine under 14.2 hands is a pony.'
            },
            {
              title: 'Major Breeds & Markings',
              body: '• American Quarter Horse: Muscular, versatile stock horse renowned for sprinting a quarter-mile.\n• Arabian: Dished face, arched neck, high tail carriage, unmatched endurance.\n• Thoroughbred: Long, lean racing breed with high speed and stamina.\n• Markings: Star (forehead), Strip (narrow stripe down bridge of nose), Snip (between nostrils), Blaze (wide white face marking), Bald face. Leg markings include Coronet, Pastern, Sock, and Stocking.'
            }
          ],
          quickCheck: {
            question: 'How many inches are in one "hand" when measuring equine height?',
            options: ['4 inches', '6 inches', '12 inches', '1 inch'],
            correctIndex: 0,
            feedback: 'One hand equals exactly 4 inches.'
          }
        },
        intermediate: {
          headline: 'Equine Conformation, Blemishes vs Unsoundnesses & Coat Genetics',
          sections: [
            {
              title: 'Evaluating Equine Conformation',
              body: 'Balanced conformation requires proportional thirds: shoulder, back/barrel, and hindquarter should each comprise roughly one-third of the horse\'s length. A desirable shoulder angle is approximately 45 degrees, matching the pastern angle.\n• Blemish: An acquired defect that affects appearance but does NOT cause lameness (e.g. capped hock, windpuffs, healed wire scar).\n• Unsoundness: A physical condition that impairs the horse\'s usefulness or causes active lameness (e.g. bone spavin, ringbone, navicular syndrome, roaring).'
            }
          ],
          quickCheck: {
            question: 'What is the distinction between a "blemish" and an "unsoundness" in equine evaluation?',
            options: ['A blemish is cosmetic and does not cause lameness, while an unsoundness impairs soundness or athletic serviceability', 'They mean the exact same thing', 'A blemish is always fatal'],
            correctIndex: 0,
            feedback: 'Blemishes are cosmetic scars or bumps, while unsoundnesses cause pain or impair function.'
          }
        },
        senior: {
          headline: 'Linear Scorecards, Functional Biomechanics & Genetic Heritability',
          sections: [
            {
              title: 'Equine Biomechanics and Kinematics',
              body: 'Senior youth analyze how structural angles dictate athletic longevity. A steep shoulder angle (>55 degrees) produces a short, jarring stride with excessive concussion on the fetlock and navicular apparatus. Sickle hocks or post legs predispose equines to curb and hock arthritis. Genetic testing covers autosomal dominant disorders like HYPP (Hyperkalemic Periodic Paralysis) and PSSM (Polysaccharide Storage Myopathy).'
            }
          ],
          quickCheck: {
            question: 'In Quarter Horses, which genetic disorder traced back to the stallion Impressive causes defective sodium ion channels and muscle tremors?',
            options: ['HYPP (Hyperkalemic Periodic Paralysis)', 'Scrapie', 'EPM', 'Ringbone'],
            correctIndex: 0,
            feedback: 'HYPP causes dangerous sodium channel dysfunction leading to muscle tremors and collapse.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_bb_q1',
          question: 'What is the cutoff height dividing a pony from a horse under standard equine breed registries?',
          options: ['14.2 hands (58 inches at the withers)', '12.0 hands', '16.0 hands', '10.5 hands'],
          correctIndex: 0,
          explanation: 'Equines measuring less than 14 hands 2 inches (14.2 hands) are classified as ponies.',
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
        'Identify safe stall requirements (minimum 12x12 ft), clean bedding, and safe fencing (never barbed wire)',
        'Master the full grooming routine and tools (curry comb, dandy brush, body brush, hoof pick)',
        'Understand routine farrier hoof care (trimming/resetting every 6-8 weeks)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Brushing Our Big Equine Friends!',
          readAloud: 'Horses love a good spa day! We use special brushes to sweep off dirt and make their coat gleam like shiny satin.',
          sections: [
            {
              title: 'Fun with Grooming',
              body: 'Use the rubber curry comb in gentle circles to loosen the barn dust. Then use a soft brush around their sweet face and ears!'
            }
          ],
          quickCheck: {
            question: 'Which grooming brush is used in gentle circles on the horse’s fleshy body to loosen mud and dirt?',
            options: ['Rubber curry comb', 'Toothbrush', 'Metal wire sponge'],
            correctIndex: 0,
            feedback: 'The rubber curry comb is rubbed in circles to lift loose dirt and stimulate skin oils.'
          }
        },
        junior: {
          headline: 'Grooming Sequence & Hoof Picking Safety',
          sections: [
            {
              title: 'The Step-by-Step Grooming Routine',
              body: '1. Rubber Curry Comb: Applied in circular motions on neck, barrel, and hips (never on face or lower leg bones).\n2. Hard / Dandy (Stiff) Brush: Short, firm flicking strokes in direction of hair growth to sweep away loosened dirt.\n3. Soft / Body Brush: Smooth long strokes across entire coat, sensitive head, and legs.\n4. Hoof Pick: Stand facing the horse’s tail, run hand down leg, ask horse to lift hoof. Clean the hoof starting at the heel and picking downward toward the toe, carefully avoiding the triangular sensitive frog in the center!'
            }
          ],
          quickCheck: {
            question: 'When using a hoof pick, in what direction should you scrape dirt and stones out of the hoof?',
            options: ['From heel toward the toe, working around the triangular frog', 'From toe straight up into the leg', 'In vigorous circles across the center frog'],
            correctIndex: 0,
            feedback: 'Always pick from heel down to toe, avoiding injuring the sensitive central frog.'
          }
        },
        intermediate: {
          headline: 'Fencing Safety, Stall Sizing & Bedding Dynamics',
          sections: [
            {
              title: 'Equine Facility Safety Standards',
              body: 'Standard box stalls for average light horses must measure at least 12 feet by 12 feet with a 9 to 10 foot ceiling for adequate headroom and air exchange. Fencing must be visible, secure, and durable—such as vinyl post-and-rail, wooden boards, or coated wire mesh. NEVER use barbed wire for horse paddocks, as equines possess a panic flight response that results in catastrophic flesh lacerations.'
            }
          ],
          quickCheck: {
            question: 'Why is standard cattle barbed wire strictly forbidden in horse pastures and paddocks?',
            options: ['Horses have thin skin and a flight reflex that causes severe, life-threatening wire-cut lacerations when spooked', 'Barbed wire is too expensive', 'Horses chew through barbed wire in seconds'],
            correctIndex: 0,
            feedback: 'Barbed wire causes horrific lacerations and tendon tears in fleeing horses.'
          }
        },
        senior: {
          headline: 'Hoof Biomechanics, Farriery Angles & Barn Ventilation Air Quality',
          sections: [
            {
              title: 'Hoof Capsule Physiology and Farriery Science',
              body: 'A horse\'s hoof wall grows approximately 1/4 to 3/8 inch per month, necessitating routine trimming or resetting every 6 to 8 weeks. Handlers evaluate the hoof-pastern axis (HPA)—the dorsal hoof wall angle should form an unbroken, continuous straight line with the slope of the pastern (typically 50-55 degrees in front). A broken-back axis concentrates extreme strain onto the deep digital flexor tendon and navicular bone.'
            }
          ],
          quickCheck: {
            question: 'What biomechanical flaw occurs when a horse exhibits a "broken-back" hoof-pastern axis?',
            options: ['The angle of the dorsal hoof wall is flatter than the pastern, shifting excessive strain onto the navicular bone and deep flexor tendon', 'The hoof points inward', 'The horse cannot turn left'],
            correctIndex: 0,
            feedback: 'A broken-back axis elevates strain on the navicular apparatus and deep digital flexor tendon.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_dc_q1',
          question: 'What is the soft, triangular, shock-absorbing structure located in the center of the underside of a horse’s hoof?',
          options: ['The frog', 'The toe', 'The coronary band', 'The white line'],
          correctIndex: 0,
          explanation: 'The frog is the V-shaped elastic structure that provides shock absorption and circulatory pumping in the equine hoof.',
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
        'Understand hindgut fermenter digestive anatomy (stomach, small intestine, cecum, large colon)',
        'Calculate forage intake (minimum 1.5% to 2.0% of body weight in dry matter daily)',
        'Identify deadly nutritional hazards: Colic and Laminitis/Founder from carbohydrate overload'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Hay, Oats & Cool Clean Water!',
          readAloud: 'Horses love green pasture grass and sweet fragrant hay! They drink a whole bathtub of fresh clean water every single day.',
          sections: [
            {
              title: 'Lots of Grass and Hay',
              body: 'Horses have a special tummy that needs to chew hay throughout the day to stay happy and comfortable. Fresh water must always be clean and cool!'
            }
          ],
          quickCheck: {
            question: 'About how many gallons of fresh water does an adult horse drink every day?',
            options: ['10 to 12 gallons (a big tub!)', 'Half a cup', 'None, horses don’t drink water'],
            correctIndex: 0,
            feedback: 'An adult horse consumes roughly 10 to 12 gallons of fresh water daily!'
          }
        },
        junior: {
          headline: 'Forage-First Feeding & Digestive Anatomy',
          sections: [
            {
              title: 'The Hindgut Fermenter',
              body: 'Horses are non-ruminant herbivores known as "hindgut fermenters." Their stomach is relatively small (holding only 2-4 gallons), while their cecum and large colon contain trillions of beneficial microbes that ferment fibrous hay and grass into energy.\n• The Golden Rule: Feed by weight, not volume! A 1,000-pound horse requires at least 15 to 20 pounds of good hay daily (1.5% to 2% of body weight).\n• Never feed more than 5 pounds (0.5% body weight) of grain/concentrates in a single meal.'
            }
          ],
          quickCheck: {
            question: 'What is the primary foundation of every healthy horse diet?',
            options: ['High quality forage (pasture grass or hay)', 'Corn and molasses candy', 'Grain only with zero grass'],
            correctIndex: 0,
            feedback: 'Forage (hay and pasture) is the vital foundation of all equine digestive health.'
          }
        },
        intermediate: {
          headline: 'Colic & Laminitis (Founder): Pathophysiology and Emergency Prevention',
          sections: [
            {
              title: 'Colic & Carbohydrate Overload Laminitis',
              body: '• Colic (Abdominal Pain): Symptoms include pawing the ground, looking back at the flank, biting at belly, repeatedly lying down and rolling violently, and absence of gut sounds. Colic is an immediate medical emergency requiring professional veterinary care!\n• Laminitis / Founder: Rapid ingestion of high-fructan spring grass or grain bin break-ins overwhelms the small intestine. Undigested starch floods into the cecum, causing rapid microbial die-off, endotoxin release, and severe inflammation of the sensitive laminae in the hooves. The horse exhibits a "sawhorse stance" rocking weight back onto its heels.'
            }
          ],
          quickCheck: {
            question: 'What postural sign is characteristic of a horse suffering from acute laminitis (founder)?',
            options: ['A "sawhorse stance" with front feet camped forward, leaning back to relieve pressure on the toes', 'Standing on tiptoes', 'Head tucked between front knees'],
            correctIndex: 0,
            feedback: 'Horses with laminitis camp their front feet forward to take pressure off agonizing toe laminae.'
          }
        },
        senior: {
          headline: 'Equine Energy Partitioning, Non-Structural Carbohydrates (NSC) & Electrolytes',
          sections: [
            {
              title: 'Balancing Equine Rations & Metabolic Disease',
              body: 'Senior handlers formulate rations based on Digestible Energy (DE in Mcal/day), Crude Protein, Lysine, and mineral ratios (Calcium:Phosphorus must remain between 1.5:1 and 2:1). Horses with Equine Metabolic Syndrome (EMS) or Pituitary Pars Intermedia Dysfunction (PPID / Cushing’s) require hay tested for Non-Structural Carbohydrates (NSC = WSC + Starch) below 10-12% dry matter to prevent laminitic episodes.'
            }
          ],
          quickCheck: {
            question: 'Why must hay tested for horses with Equine Metabolic Syndrome (EMS) have Non-Structural Carbohydrates (NSC) below 10-12%?',
            options: ['To prevent excessive insulin surges that trigger laminitic lamellar separation in the hooves', 'To make the hay taste sweeter', 'To double the horse’s running speed'],
            correctIndex: 0,
            feedback: 'Low NSC diets prevent dangerous hyperinsulinemia that triggers equine laminitis.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_nt_q1',
          question: 'In what portion of the horse’s digestive tract does microbial fermentation of fiber take place?',
          options: ['The cecum and large colon (hindgut)', 'The small stomach', 'The gallbladder', 'The esophagus'],
          correctIndex: 0,
          explanation: 'Horses are hindgut fermenters; microbial digestion of cellulose occurs in the large cecum and colon.',
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
        'Recognize normal equine vitals: Temperature (99.0-101.5°F), Heart Rate (28-44 bpm), Respiration (8-16 bpm), Gut Sounds in all 4 quadrants',
        'Identify Core Vaccines (Rabies, Tetanus, EEE/WEE, West Nile Virus) and Coggins testing for EIA',
        'Master equine biosecurity at shows and isolation protocols for new arrivals'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Happy, Healthy Ponies!',
          readAloud: 'A happy pony has bright, curious eyes, pricked ears, and a calm, quiet heartbeat. We always wash our hands and clean our buckets between horses!',
          sections: [
            {
              title: 'Signs of a Happy Horse',
              body: 'Healthy horses are alert, enjoy eating their hay, and love standing happily in their pasture. If a horse hangs their head low and refuses food, let an adult know right away.'
            }
          ],
          quickCheck: {
            question: 'What is a clear sign that a pony is feeling bright and healthy?',
            options: ['Alert eyes, pricked ears, and an eager appetite for hay', 'Lying flat on the ground groaning', 'Refusing to drink any water'],
            correctIndex: 0,
            feedback: 'Alert eyes and an eager appetite indicate good equine health!'
          }
        },
        junior: {
          headline: 'Normal Equine Vitals & The Coggins Test',
          sections: [
            {
              title: 'Equine Vital Signs & Core Vaccines',
              body: '• Normal Temperature: 99.0°F to 101.5°F (taken rectally with lubricated thermometer).\n• Resting Heart Rate: 28 to 44 beats per minute.\n• Resting Respiration: 8 to 16 breaths per minute.\n• Gut Sounds: Auditory gurgling sounds (borborygmi) must be heard in all 4 quadrants of the abdomen using a stethoscope. Total silence is a warning sign of colic!\n• Core Vaccines: Rabies, Tetanus toxoid, Eastern/Western Equine Encephalomyelitis (EEE/WEE), West Nile Virus (WNV).\n• Coggins Test: An annual blood test checking for antibodies against Equine Infectious Anemia (EIA), a lethal viral disease with no vaccine or cure. A negative Coggins certificate is legally required for horse shows, fairgrounds, and state line crossings.'
            }
          ],
          quickCheck: {
            question: 'What deadly equine virus is tested for via an annual Coggins blood test before horses can attend shows or cross state lines?',
            options: ['Equine Infectious Anemia (EIA)', 'Common cold', 'Ringworm', 'Canine Parvovirus'],
            correctIndex: 0,
            feedback: 'The Coggins test screens for Equine Infectious Anemia (EIA).'
          }
        },
        intermediate: {
          headline: 'Biosecurity Protocols, Quarantine & Strangles Awareness',
          sections: [
            {
              title: 'Preventing Contagious Disease Outbreaks',
              body: 'When traveling to 4-H horse shows, maintain strict biosecurity:\n1. Never allow your horse to touch noses with unfamiliar horses over stall partitions or arena rails.\n2. Never submerge hoses into communal water buckets (keep a 2-inch air gap) or share water troughs.\n3. Disinfect stall walls with accelerated hydrogen peroxide or phenolic compounds before moving your horse in.\n4. Quarantine new or returning horses for a minimum of 14 to 21 days, monitoring temperature twice daily for fever spikes (>101.5°F) indicating Strangles (Streptococcus equi) or Equine Herpesvirus (EHV-1).'
            }
          ],
          quickCheck: {
            question: 'How long should a new horse or a horse returning from a major competition be isolated in quarantine?',
            options: ['14 to 21 days with twice-daily temperature logs', '1 hour', 'No quarantine is needed'],
            correctIndex: 0,
            feedback: 'A 14-21 day quarantine ensures incubation periods for respiratory pathogens pass safely.'
          }
        },
        senior: {
          headline: 'Selective Targeted Deworming, Fecal Egg Counts (FEC) & Ophthalmic Emergencies',
          sections: [
            {
              title: 'Evidence-Based Parasite Control and Eye Ulcers',
              body: 'Modern equine medicine has eliminated rotational calendar deworming due to rampant anthelmintic resistance in cyathostomins (small strongyles). Handlers implement Selective Targeted Deworming using Quantitative Fecal Egg Counts (McMaster FEC test):\n• Low shedders (< 200 eggs per gram - EPG): Dewormed only 1-2 times annually.\n• High shedders (> 500 EPG): Receive targeted treatments.\nAny corneal trauma or cloudy, tearing eye is an immediate ophthalmic emergency; never apply steroid eye ointments to a horse eye without veterinary fluorescein staining, as steroids cause rapid fungal or bacterial corneal perforation!'
            }
          ],
          quickCheck: {
            question: 'Why should eye ointments containing corticosteroids NEVER be administered to a squinting, cloudy horse eye without a veterinary fluorescein stain test?',
            options: ['Steroids prevent corneal ulcer healing and can cause rapid corneal melting or eye perforation', 'Steroids change eye color', 'Steroids attract flies'],
            correctIndex: 0,
            feedback: 'Corticosteroids inhibit epithelial healing and can lead to catastrophic eye perforation if an ulcer exists.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_hb_q1',
          question: 'What is the normal resting pulse rate for an adult, relaxed horse in beats per minute (bpm)?',
          options: ['28 to 44 bpm', '80 to 120 bpm', '10 to 15 bpm', '150 to 180 bpm'],
          correctIndex: 0,
          explanation: 'Adult horses have very large, efficient hearts with a resting rate of 28 to 44 beats per minute.',
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
        'Understand equine flight response, blind spots (directly behind hindquarters and beneath nose), and safe approach angles (45 degrees to shoulder)',
        'Mandatory riding safety gear: ASTM/SEI certified riding helmet and heeled boots',
        'Master the quick-release knot and safe halter/lead handling rules'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Helmets On & Gentle Hands!',
          readAloud: 'Safety always comes first around horses! We always wear an approved riding helmet that snaps snugly under our chin, and boots with a heel so our feet don’t slip!',
          sections: [
            {
              title: 'Safe Around Big Friends',
              body: 'Never sneak up behind a horse where they cannot see you! Walk up calmly toward their shoulder, speaking with a soft friendly voice.'
            }
          ],
          quickCheck: {
            question: 'What special certified safety gear should you ALWAYS buckle on your head before mounting a horse?',
            options: ['An ASTM/SEI certified equestrian riding helmet', 'A baseball cap', 'A bicycle helmet or winter beanie'],
            correctIndex: 0,
            feedback: 'Always wear an ASTM/SEI certified equestrian helmet properly fitted and buckled!'
          }
        },
        junior: {
          headline: 'Blind Spots, Safe Tying & Leading Rules',
          sections: [
            {
              title: 'Equine Vision & Handling Golden Rules',
              body: '• Blind Spots: Horses cannot see directly behind their hindquarters or directly beneath their nose/chin. Always approach at a 45-degree angle toward the shoulder and talk so they know where you are.\n• Leading on the "Near Side": Lead from the left side of the horse, walking between the horse\'s head and shoulder. Hold the lead rope with your right hand about 6-8 inches from the halter, and fold the excess rope in an accordion in your left hand—NEVER wrap the lead rope or chain around your hand or fingers!\n• Quick-Release Knot: Always tie a horse to a secure post or sturdy tie ring at withers height or higher using a quick-release knot that can be untied in one quick pull during a panic.'
            }
          ],
          quickCheck: {
            question: 'Why must you NEVER wrap a lead rope, lunge line, or chain around your hand or fingers?',
            options: ['If the horse spooks and bolts, the coiled rope will clamp down, causing severe hand fracture or amputation', 'Because it wrinkles the lead rope', 'Because the rope gets dirty faster'],
            correctIndex: 0,
            feedback: 'Never wrap leads around fingers or limbs; a sudden pull causes catastrophic crush injuries or finger amputation.'
          }
        },
        intermediate: {
          headline: 'Flight Zone Dynamics, Cross-Tying Safety & Tack Inspection',
          sections: [
            {
              title: 'Equine Behavioral Psychology & Equipment Integrity',
              body: 'As prey animals, horses react instinctively with fight-or-flight when startled. Handlers respect the point of balance (at the horse\'s shoulder): moving behind the point of balance drives the horse forward, while stepping in front of it halts or turns the horse. Routinely inspect stirrup leathers, girth billets, and bridle stitching for dry rot or torn threads before every ride.'
            }
          ],
          quickCheck: {
            question: 'Where is an equine’s anatomical "point of balance" located when moving or driving the animal?',
            options: ['At the point of the shoulder', 'At the tail dock', 'At the hoof', 'At the ears'],
            correctIndex: 0,
            feedback: 'The shoulder is the point of balance: stepping behind urges forward motion; stepping ahead blocks forward movement.'
          }
        },
        senior: {
          headline: 'Equine Welfare Charters, Behavioral Ethology & Non-Coercive Horsemanship',
          sections: [
            {
              title: 'Welfare Principles & Ethological Stress Indicators',
              body: 'Senior equestrians understand the Five Domains of Animal Welfare (Nutrition, Environment, Health, Behavior, and Mental State). Handlers eliminate aversive or pain-inducing devices like severe twisted-wire bits, hyperflexion/rollkur head positions, or soring. Signs of chronic stress or learned helplessness include tongue lolling, teeth grinding, tail wringing, and glazed, unresponsive eyes.'
            }
          ],
          quickCheck: {
            question: 'What behavioral signs indicate acute or chronic emotional distress in a ridden or handled horse?',
            options: ['Persistent tail wringing, teeth grinding, ears pinned flat back, and tongue lolling', 'Soft chewing and licking lips', 'Blinking gently with ears forward'],
            correctIndex: 0,
            feedback: 'Teeth grinding and tail wringing are unmistakable signals of equine tension, pain, or distress.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_hw_q1',
          question: 'What knot must always be used when tying a horse with a lead rope to a solid hitching post?',
          options: ['A quick-release knot (slip knot)', 'A square knot tied tight', 'A double-loop shoelace knot', 'A fisherman’s cinch'],
          correctIndex: 0,
          explanation: 'A quick-release knot can be instantly untied with one single pull on the tail if the horse panics or sits back.',
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
        'Maintain mandatory health records: negative Coggins certificate, annual vaccine dates, and deworming schedule',
        'Track farrier appointments, shoeing intervals, and teeth floating schedules',
        'Compute horse maintenance costs: boarding, hay tonnage, concentrate bags, veterinary care, and show fees'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Barn Day Memory Book!',
          readAloud: 'Horses are a big responsibility! In your 4-H scrapbook, you can paste photos of your favorite pony, write their name, and record what yummy hay they eat.',
          sections: [
            {
              title: 'Tracking Pony Fun',
              body: 'Keeping notes about your pony shows everyone how much you care! You can draw pictures of your saddle and bridle too.'
            }
          ],
          quickCheck: {
            question: 'What is something fun and helpful to keep in your 4-H horse project folder?',
            options: ['Your horse’s photo, name, feeding routine, and care checklist', 'Wrappers from old candy', 'Nothing at all'],
            correctIndex: 0,
            feedback: 'Project binders keep track of your horse’s care, feeding, and milestones!'
          }
        },
        junior: {
          headline: '4-H Horse Project Record Books & Expense Tracking',
          sections: [
            {
              title: 'Core Records for Fair Eligibility',
              body: 'Every youth horse exhibitor must maintain a complete 4-H Horse Record Book including:\n1. Proof of Ownership / Lease Agreement: Filed by county deadline.\n2. Negative Coggins Test Certificate: Official state laboratory form.\n3. Preventative Health Log: Vaccines (Rabies, Tetanus, EEE/WEE, West Nile), deworming dates.\n4. Farrier Record: Hoof trims or shoe resets every 6 to 8 weeks.\n5. Financial Expense Log: Hay, grain, bedding, boarding, tack, veterinary bills, entry fees.'
            }
          ],
          quickCheck: {
            question: 'How frequently does a working horse typically require farrier hoof trimming or shoe resetting recorded in your logbook?',
            options: ['Every 6 to 8 weeks', 'Once every three years', 'Only when a shoe falls off'],
            correctIndex: 0,
            feedback: 'Equine hooves grow constantly, requiring farrier attention every 6 to 8 weeks.'
          }
        },
        intermediate: {
          headline: 'Conditioning Metrics, Body Weight Estimation & Feed Calculations',
          sections: [
            {
              title: 'Estimating Body Weight and Feed Conversions',
              body: 'Accurate weight is essential for dosing dewormers and formulating rations. Handlers utilize the weight tape formula:\nWeight in Pounds = [Heart Girth (inches)^2 * Body Length (inches)] / 330.\nIntermediate youth record training hours, tracking heart rate recovery intervals after exercise to scientifically monitor conditioning and stamina progression.'
            }
          ],
          quickCheck: {
            question: 'What standard measurements are taken with a weight tape to estimate a horse’s body weight in pounds?',
            options: ['Heart girth circumference and body length from point of shoulder to point of buttock', 'Height of ears and length of tail', 'Length of front hoof only'],
            correctIndex: 0,
            feedback: 'Heart girth squared multiplied by body length divided by 330 provides accurate weight estimation.'
          }
        },
        senior: {
          headline: 'Equine Enterprise Budgeting, Depreciation & Risk Management',
          sections: [
            {
              title: 'Comprehensive Equine Financial Accounting',
              body: 'Senior youth analyze the true economic footprint of horse ownership. Budget models include fixed costs (amortization and depreciation of horse trailers, barns, fencing, tack) versus variable costs (veterinary emergencies, dental equilibration floats, hay price fluctuations per ton, farrier care, and liability insurance policies). Youth perform break-even analyses on training and clinic operations.'
            }
          ],
          quickCheck: {
            question: 'In an equine enterprise budget, what is considered a "fixed cost"?',
            options: ['Depreciation on horse trailers, barns, and long-term tack investments', 'Emergency veterinary colic treatment', 'Monthly grain bills that change with hay prices'],
            correctIndex: 0,
            feedback: 'Fixed costs represent capital assets like trailers and equipment that depreciate over time.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_rk_q1',
          question: 'Which legal laboratory document must be kept in every horse project record book to verify negative status for Equine Infectious Anemia?',
          options: ['Official Coggins Test Certificate', 'Feed purchase receipt', 'Farrier business card', 'Breed registration ribbon'],
          correctIndex: 0,
          explanation: 'Official negative Coggins certificates verify laboratory clearance for Equine Infectious Anemia.',
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
        'Master the "Quarter System" ring mechanics in Western Showmanship at Halter and English In-Hand',
        'Perform precise maneuvers: walk, trot, crisp square halt, back in straight line, and 90/180/360-degree pivots on the haunches',
        'Learn show halter fit, chain lead shank safety (never wrapping hand), and ring presentation'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Standing Proud with Our Pony Partner!',
          readAloud: 'In showmanship, you and your pony walk in together like best friends! Stand up tall, keep your smile bright, and look at the judge.',
          sections: [
            {
              title: 'Standing Square',
              body: 'Teach your pony to stand still and square on all four legs. Keep your eyes on the judge, but always pay attention to your pony!'
            }
          ],
          quickCheck: {
            question: 'What should you do when presenting your pony to the judge in showmanship?',
            options: ['Stand tall, smile, pay attention to the judge and keep your pony standing squarely', 'Look down at your boots the entire time', 'Let go of the lead rope and run away'],
            correctIndex: 0,
            feedback: 'Stand tall with confidence, keeping your focus on the judge and pony!'
          }
        },
        junior: {
          headline: 'The Quarter System & Halter Showmanship Basics',
          sections: [
            {
              title: 'Mastering the Quarter System',
              body: 'Showmanship evaluates the exhibitor\'s ability to present their horse to best advantage. The horse is visually divided into four imaginary quadrants by an imaginary line running down the spine and another intersecting at the withers:\n• Quadrant I: Right front (off-side shoulder/head)\n• Quadrant II: Right hind\n• Quadrant III: Left hind\n• Quadrant IV: Left front (near-side shoulder/head)\n• The Golden Rule: The handler must never be in the same quadrant as the judge! When the judge is in Quadrant I (right front), the handler stands in Quadrant IV (left front). As the judge crosses to Quadrant II (right rear), the handler crosses over to Quadrant I to maintain an unobstructed view for the judge.'
            }
          ],
          quickCheck: {
            question: 'According to the Quarter System, if the judge is standing in Quadrant IV (left front near the horse’s head), where should the handler stand?',
            options: ['In Quadrant I (right front side of the horse\'s head)', 'In Quadrant IV right next to the judge', 'Behind the horse’s tail'],
            correctIndex: 0,
            feedback: 'The handler always crosses over so the judge has a clear view and handler maintains safety.'
          }
        },
        intermediate: {
          headline: 'Precision Ring Maneuvers: The Pivot on the Haunches & Straight Backing',
          sections: [
            {
              title: 'Executing Complex Maneuvers',
              body: '• Pivot on the Haunches: The horse must plant its right hind pivot foot and smoothly step around it with its front legs crossing over. The handler walks forward in a circle around the pivot, looking where they are traveling.\n• Backing: Stand facing the horse’s shoulder at a 45-degree angle. Prompt the horse to back smoothly in a straight line with subtle lead cues—never pull backward forcefully on the halter or kick toward the chest.\n• Crisp Halt: When halting, the horse should immediately step into a balanced square stance with all four legs plumb without needing fidgety manual repositioning.'
            }
          ],
          quickCheck: {
            question: 'During a right-hand pivot on the haunches in showmanship, which leg should remain planted as the pivot point?',
            options: ['The right hind leg', 'The left front leg', 'The tail', 'Both front legs'],
            correctIndex: 0,
            feedback: 'In a right-turn pivot, the right hind leg serves as the stationary pivot axis.'
          }
        },
        senior: {
          headline: 'Judge Ring Geometry, Pattern Nuance & Breed In-Hand Criteria',
          sections: [
            {
              title: 'Advanced Ringcraft and Pattern Execution',
              body: 'Senior showmanship exhibitors execute intricate pattern elements with microscopic transitions. Handlers memorize cone placement, maintaining straight lines between markers without drifting. Handlers understand differing breed standards: American Quarter Horses are shown in leather halters with silver plates and chain under chin, while Arabians are shown in delicate cable halters with animated trot presentation, and draft horses are shown in white cotton show bridles with tail decorations.'
            }
          ],
          quickCheck: {
            question: 'What differentiates American Quarter Horse halter presentation from Arabian horse in-hand presentation?',
            options: ['Quarter horses are shown quietly in heavy leather/silver halters squared up; Arabians are presented with animated park trot in delicate cable show halters', 'There is no difference', 'Quarter horses are ridden bareback in halter classes'],
            correctIndex: 0,
            feedback: 'Breed-specific traditions dictate distinct tack, grooming presentation, and movement styles.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_sm_q1',
          question: 'What is the imaginary line dividing a horse into front and rear halves in the Quarter System?',
          options: ['A line crossing over the withers', 'A line at the hocks', 'A line down the ears', 'A line across the knees'],
          correctIndex: 0,
          explanation: 'The Quarter System divides the horse lengthwise down the spine and horizontally across the withers.',
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
        'Uphold the Humane Equine Welfare Code: zero tolerance for soring, tail altering, or illegal calming drugs',
        'Prioritize horse comfort and health over blue ribbons or championship points',
        'Exhibit exemplary sportsmanship in ring competition, warm-up arenas, and barn stalls'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Loving Our Pony Partners First and Always!',
          readAloud: 'A true horse lover cares for their pony before themselves! After a fun ride, we always brush out the sweat marks, offer cool clean water, and say "Thank you, partner!"',
          sections: [
            {
              title: 'Kindness to Animals',
              body: 'Horses give us their very best when we treat them with gentle kindness and patience. We never shout at or hit our pony.'
            }
          ],
          quickCheck: {
            question: 'What should you always do after riding or showing your horse before you go eat lunch?',
            options: ['Cool your horse down, groom the sweat off, and offer fresh water and clean hay', 'Leave the horse tied in the hot sun with the saddle on', 'Run away to the carnival rides'],
            correctIndex: 0,
            feedback: 'The animal’s comfort, water, and cool-down always come before the rider’s rest!'
          }
        },
        junior: {
          headline: 'Integrity in the Arena & Prohibited Practices',
          sections: [
            {
              title: 'Rules of Ethical Horsemanship',
              body: '• The Horse Protection Act: Federal law prohibiting "soring" (applying caustic blistering agents or mechanical pain devices to gaited horse limbs to create exaggerated gaits).\n• Zero Tolerance for Doping: Administering sedatives, tranquilizers, or performance-altering drugs (e.g., acepromazine, reserpine) to make an energetic horse seem calm in the ring is strictly illegal and unethical.\n• Humane Tack: Harsh wire bits, burrs inside cheekpieces, and tail-nerve cutting or alcohol blocking are strictly banned across all youth equine competitions.'
            }
          ],
          quickCheck: {
            question: 'Which federal law strictly prohibits the abusive practice of "soring" on equines?',
            options: ['The Horse Protection Act (HPA)', 'The Clean Air Act', 'The Maritime Act'],
            correctIndex: 0,
            feedback: 'The Horse Protection Act federally criminalizes soring and cruel gait-altering methods.'
          }
        },
        intermediate: {
          headline: 'Warm-Up Arena Etiquette & Equine Stress Management',
          sections: [
            {
              title: 'Sportsmanship in Crowded Arenas',
              body: 'Ethics extends to the schooling and warm-up ring. Riders pass left-shoulder to left-shoulder. Slower horses walking or halting must yield the outside rail to faster cantering or trotting horses. Never school a tired, sweating horse to exhaustion. Handlers recognize red ribbons tied into an equine’s tail as a universal warning that the horse is known to kick—give that horse plenty of space!'
            }
          ],
          quickCheck: {
            question: 'What does a red ribbon braided into a horse’s tail signify in a warm-up ring or on a trail ride?',
            options: ['The horse is known to kick—keep back and maintain a wide safety distance', 'The horse won first place', 'The horse is for sale'],
            correctIndex: 0,
            feedback: 'A red tail ribbon is the universal warning indicating a horse prone to kicking.'
          }
        },
        senior: {
          headline: 'Social License to Operate (SLO) & Ethical Stewardship in Equestrian Sports',
          sections: [
            {
              title: 'Preserving the Social License to Operate in Equine Activities',
              body: 'Senior equestrians confront modern public scrutiny regarding equestrian sport legitimacy. Social License to Operate (SLO) relies on transparency, ethical welfare accountability, and prioritizing equine well-being above tradition or financial gain. Youth advocate for evidence-based welfare: strict bit check inspections, elimination of hyperflexion, heat-index safety cancellations, and lifetime retirement transition planning for aged equines.'
            }
          ],
          quickCheck: {
            question: 'What does "Social License to Operate" (SLO) refer to regarding modern equestrian activities and fairs?',
            options: ['The ongoing public acceptance and trust that horses are treated humanely, ethically, and with high welfare standards', 'A state driver’s license to pull a trailer', 'A county permit to build a barn'],
            correctIndex: 0,
            feedback: 'Social License to Operate depends entirely on public trust in ethical animal welfare.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_ec_q1',
          question: 'Is it ever permissible to use tranquilizers or calming cocktails to quiet down a nervous horse before a 4-H showmanship class?',
          options: ['No, administering performance-altering pharmaceuticals violates show rules and constitutes unethical conduct', 'Yes, whenever the horse feels energetic', 'Only if the judge doesn’t notice'],
          correctIndex: 0,
          explanation: 'Doping show horses violates 4-H ethics, state fair guidelines, and endangers animal safety.',
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
        'Formulate SMART horsemanship goals (equitation posture, pattern precision, daily ground manners)',
        'Participate in 4-H Equine Hippology, Horse Bowl, and Oral Reasons judging contests',
        'Lead club demonstrations on saddle fitting, tack cleaning, and trailer loading safety'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Sharing My Equine Adventure!',
          readAloud: 'You have learned so much about horses and ponies! You can bring a horseshoe, a curry comb, or your favorite pony photo to share with all your 4-H club friends.',
          sections: [
            {
              title: 'Show and Tell Fun',
              body: 'Tell your club members your pony’s name, what color coat they have, and show them how to use a rubber curry comb!'
            }
          ],
          quickCheck: {
            question: 'What is a great item to bring to a club meeting for horse project show-and-tell?',
            options: ['A clean grooming brush or horseshoe to demonstrate proper pony care', 'A live horse inside the school library without permission', 'Nothing at all'],
            correctIndex: 0,
            feedback: 'Demonstrating grooming tools or tack makes fantastic show-and-tell presentations!'
          }
        },
        junior: {
          headline: 'SMART Goals & Equine Educational Contests',
          sections: [
            {
              title: 'Expanding Your Horsemanship Knowledge',
              body: '• Setting SMART Goals: "I will improve my horse\'s right-lead canter depart from a 50% success rate to 85% by June 1 using ground poles and balance exercises three times per week."\n• Hippology Contests: Test comprehensive equine knowledge through slide identification, judging classes, station challenges (feed identification, parasite identification, tack parts), and written exams.\n• Horse Bowl: Fast-paced buzzer competition testing instant recall of veterinary science, nutrition, breeds, and history.'
            }
          ],
          quickCheck: {
            question: 'Which competitive 4-H equine educational event features buzzer matches testing instant knowledge of horse breeds, anatomy, and nutrition?',
            options: ['Horse Bowl', 'Tack cleaning bee', 'Trail riding trail'],
            correctIndex: 0,
            feedback: 'Horse Bowl is the fast-paced buzzer contest testing equine trivia and science.'
          }
        },
        intermediate: {
          headline: 'Oral Reasons Delivery & Tack Fit Demonstrations',
          sections: [
            {
              title: 'Delivering Compelling Oral Reasons',
              body: 'When judging conformation or performance classes, intermediate youth defend placings in front of an official judge:\n• Structure: Introduction of class, comparison of top pair, grant to second place, middle pair comparison, bottom pair comparison, and closing statement.\n• Terminology: Use positive comparative terminology ("more balanced over withers," "smoother transition from lope to trot") rather than vague slang.'
            }
          ],
          quickCheck: {
            question: 'What is the correct structure for defending an equine judging class in Oral Reasons?',
            options: ['Clear introduction, systematic comparative pairs (top, middle, bottom) with grants, and a decisive conclusion', 'Saying "I just liked the brown one the best"', 'Reading directly from a printed paper with your eyes down'],
            correctIndex: 0,
            feedback: 'Oral reasons require organized comparative pairs and decisive defense of placings.'
          }
        },
        senior: {
          headline: 'Equine Industry Leadership, Clinic Instruction & Mentorship',
          sections: [
            {
              title: 'Mentoring Junior Exhibitors & Public Advocacy',
              body: 'Senior youth transition into junior leadership roles: running beginner showmanship clinics, organizing county trailer-loading workshops, and leading therapeutic riding volunteer corps. Youth communicate effectively with veterinarians, farriers, boarders, and fair superintendents, exemplifying professional equine industry career pathways.'
            }
          ],
          quickCheck: {
            question: 'How do senior 4-H equine members demonstrate premier leadership within their county?',
            options: ['By organizing clinics to mentor younger riders on safety, ground manners, and tack fit', 'By keeping all their knowledge secret', 'By refusing to let juniors watch their schooling'],
            correctIndex: 0,
            feedback: 'Leadership means mentoring younger members and championing safe horsemanship!'
          }
        }
      },
      quizQuestions: [
        {
          id: 'hr_gc_q1',
          question: 'What is the comprehensive equine contest called that combines judging, hands-on stations (tack, feed, anatomy), and written testing?',
          options: ['Hippology', 'Rodeo', 'Barrel Racing', 'Polo'],
          correctIndex: 0,
          explanation: 'Hippology encompasses comprehensive testing of equine science, veterinary knowledge, and judging evaluation.',
          division: 'junior'
        }
      ]
    }
  ]
};
