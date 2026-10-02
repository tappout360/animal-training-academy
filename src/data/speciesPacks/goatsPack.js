// WarrenWise Youth Animal Training Academy
// Species Pack: Goats (Capra hircus) - Dairy & Meat Goats
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const GOATS_PACK = {
  id: 'goats',
  name: 'Goats Project Academy',
  species: 'Goats (Dairy & Meat)',
  category: 'Small Ruminant Livestock',
  icon: 'Shield',
  version: '2.0.0',
  lastVerifiedDate: '2026-09-15',
  verifiedBy: 'Extension Livestock Specialist & ADGA/ABGA Youth Committee',
  description: 'Comprehensive 4-H goat project curriculum covering ADGA dairy breeds, Boer meat goats, ruminant digestion, urinary calculi prevention, FAMACHA scoring, scrapie tags, show collars, and ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate Dairy breeds (Alpine, LaMancha, Nubian, Oberhasli, Saanen, Toggenburg, Nigerian Dwarf) vs Meat breeds (Boer, Kiko, Spanish, Myotonic)',
        'Identify unique ear types: Gopher ears, Elf ears, Pendulous (lop) ears, and Erect ears',
        'Understand horn disbudding rules for dairy (mandatory) vs meat show classes',
        'Learn the physical anatomy of the dairy doe (udder attachment, dairy character) vs market wether (muscling, loin)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Friendly Goats & Silly Ears!',
          readAloud: 'Goats love to climb, jump, and make funny noises! Some have long ears like ribbons, and some have tiny little ears.',
          sections: [
            {
              title: 'Milk Goats and Meat Goats',
              body: 'Dairy goats give sweet, healthy milk for drinking and making cheese! Meat goats are strong, muscular animals that love hiking on hills.'
            },
            {
              title: 'Funny Goat Ears',
              body: 'Nubians have long floppy ears that hang past their chin. LaMancha goats have tiny little ears that look like little elves!'
            }
          ],
          quickCheck: {
            question: 'Which goat breed is famous for having very tiny "elf" or "gopher" ears?',
            options: ['LaMancha', 'Nubian', 'Boer'],
            correctIndex: 0,
            feedback: 'LaMancha goats have distinct tiny ears that make them easy to recognize!'
          }
        },
        junior: {
          headline: 'Dairy Breeds, Meat Breeds & Ear Structure Classifications',
          sections: [
            {
              title: 'ADGA Recognized Dairy Breeds',
              body: '• Alpine: Erect ears, dish face, hardy, all colors except solid white or Toggenburg markings.\n• LaMancha: Maximum 1" gopher ear (bucks) or 2" elf ear with cartilage tip (does).\n• Nubian: Long pendulous ears, convex (Roman) nose, high butterfat milk.\n• Saanen: Solid white or light cream, erect ears, "Queen of the Dairy Breeds".\n• Toggenburg: Fawn to chocolate brown with distinct white facial stripes and lower legs.\n• Nigerian Dwarf: Miniature dairy breed with proportional dairy conformation.'
            },
            {
              title: 'Major Meat Breeds',
              body: '• Boer: White body with reddish-brown head, lop ears, heavy muscling, rapid growth.\n• Kiko: Hardy New Zealand meat breed known for parasite resistance and maternal foraging.\n• Myotonic (Fainting Goat): Genetic myotonia congenita causing temporary muscle stiffness when startled.'
            }
          ],
          quickCheck: {
            question: 'Which dairy breed is known for long pendulous ears hanging close to the head and a distinct Roman nose?',
            options: ['Nubian', 'Alpine', 'Saanen'],
            correctIndex: 0,
            feedback: 'Nubians have beautiful long pendulous ears and convex Roman facial profiles.'
          }
        },
        intermediate: {
          headline: 'Linear Appraisal Scoring, Dairy Character & Conformation Evaluation',
          sections: [
            {
              title: 'ADGA Linear Appraisal Categories',
              body: '1. General Appearance: Skeletal correctness, strong straight topline, clean bone.\n2. Dairy Character: Angularity, openness of ribs, flat clean bone free of excess fat.\n3. Body Capacity: Depth of barrel, width of chest floor.\n4. Mammary System: High wide rear udder attachment, smooth fore udder blend, plumb teats.'
            }
          ],
          quickCheck: {
            question: 'In dairy goat judging, what does "dairy character" refer to?',
            options: ['Angularity, sharpness of withers, wide rib spacing, and freedom from beefiness', 'Having spots on the coat', 'Drinking milk from a bucket'],
            correctIndex: 0,
            feedback: 'Dairy character reflects sharpness, angularity, and efficient conversion of feed to milk.'
          }
        },
        senior: {
          headline: 'Horn Disbudding Standards, Genetics of Polledness & Intersex Hermaphroditism',
          sections: [
            {
              title: 'The Polled Gene and Infertility Warning',
              body: 'The dominant gene for polledness (P) in goats is closely linked to a recessive gene causing intersex condition (pseudo-hermaphroditism) in homozygous (PP) females. Breeding two polled goats together risks producing sterile daughters. Always mate polled goats to disbudded/horned partners.'
            }
          ],
          quickCheck: {
            question: 'Why should two naturally polled goats never be bred together?',
            options: ['Offspring will have three horns', 'Homozygous polled genetics carry high risk of producing sterile intersex offspring', 'It causes blue eyes'],
            correctIndex: 1,
            feedback: 'The homozygous polled gene causes genetic intersex infertility in does.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_bb_q1',
          question: 'What is the world’s leading commercial meat goat breed, recognizable by its white body and red-brown head?',
          options: ['Boer goat', 'Saanen', 'Toggenburg', 'Angora'],
          correctIndex: 0,
          explanation: 'Boer goats originated in South Africa and represent the standard in commercial meat production.',
          division: 'junior'
        },
        {
          id: 'gt_bb_q2',
          question: 'Why are horns strictly prohibited on dairy goats in ADGA and 4-H show rings?',
          options: ['Horns are heavy', 'Safety: horns can injure milkers, damage delicate udder tissue, and trap heads in fences', 'Horns turn milk sour'],
          correctIndex: 1,
          explanation: 'Disbudding protects human handlers, herd mates, and prevents udder tearing.',
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
        'Design escape-proof fencing (48" high-tensile woven wire; goats are natural climbers)',
        'Maintain clean elevated sleeping benches to prevent damp bedding and foot rot',
        'Establish regular hoof inspection and trimming every 4-6 weeks',
        'Manage fresh water troughs and winter freeze prevention'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Playful Climbers & Dry Pens!',
          readAloud: 'Goats love standing up high on wooden bridges and rocks! They need dry, clean straw and strong fences so they don’t wander off.',
          sections: [
            {
              title: 'Goat Playgrounds',
              body: 'Goats are agile jumpers! Give them safe wooden spools or platforms to climb on so they stay active and happy.'
            }
          ],
          quickCheck: {
            question: 'Why do goats like climbing on wooden platforms?',
            options: ['They are natural mountain climbers who love standing up high', 'They are afraid of grass', 'To fly away'],
            correctIndex: 0,
            feedback: 'Climbing satisfies natural instincts and keeps hooves clean and dry.'
          }
        },
        junior: {
          headline: 'Fencing Security, Dry Bedding & Routine Hoof Trimming',
          sections: [
            {
              title: 'Fencing: 48-Inch Rule',
              body: 'Goats are notorious escape artists that will test weak gates, push beneath fences, or jump low wire. Use 4-foot (48") high woven wire fence with 4"x4" openings so goats cannot get their horns or heads trapped.'
            },
            {
              title: 'Hoof Trimming Every 4 to 6 Weeks',
              body: 'Overgrown hoof wall rolls over the sole, trapping manure and anaerobic bacteria (causing painful foot rot and abnormal leg stance). Use clean hoof shears to trim the sidewalls flush with the inner pad until pink tissue is reached.'
            }
          ],
          quickCheck: {
            question: 'How frequently should goat hooves be inspected and trimmed?',
            options: ['Every 4 to 6 weeks', 'Once every five years', 'Never, hooves wear down on grass'],
            correctIndex: 0,
            feedback: 'Trimming every 4 to 6 weeks keeps hooves flat, sound, and prevents foot rot.'
          }
        },
        intermediate: {
          headline: 'Foot Rot (Dichelobacter nodosus) Treatment & Pen Biosecurity',
          sections: [
            {
              title: 'Foot Rot vs Foot Scald',
              body: 'Foot scald is an inflammation of the interdigital skin caused by Fusobacterium necrophorum in damp mud. When Dichelobacter nodosus invades, it digests the horn lamina, causing characteristic foul-smelling gray rot and severe lameness. Isolate affected animals and use zinc sulfate footbaths.'
            }
          ],
          quickCheck: {
            question: 'What bacterium causes true contagious foot rot by digesting the hoof horn lamina?',
            options: ['Dichelobacter nodosus', 'Streptococcus lactis', 'Lactobacillus acidophilus'],
            correctIndex: 0,
            feedback: 'Dichelobacter nodosus produces proteases that separate the hoof wall from the sensitive lamina.'
          }
        },
        senior: {
          headline: 'Milking Parlor Sanitation, Mastitis Control & Somatic Cell Counts',
          sections: [
            {
              title: 'Milking Hygiene Routine',
              body: '1. Strip first streams of milk onto a black strip cup to check for flakes, clots, or watery milk (mastitis signs).\n2. Apply pre-milking iodine teat dip; allow 30 seconds contact time.\n3. Wipe dry with dedicated single-use paper towel.\n4. Attach milking machine or milk by hand.\n5. Post-dip immediately with barrier teat dip to seal open streak canals.'
            }
          ],
          quickCheck: {
            question: 'Why is a strip cup used before milking every dairy goat doe?',
            options: ['To measure total volume', 'To inspect the first milk for abnormal flakes or clots that indicate mastitis', 'To cool the milk'],
            correctIndex: 1,
            feedback: 'Stripping milk into a black cup detects early clinical mastitis before milking into the bucket.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_dc_q1',
          question: 'What is the minimum recommended fence height for housing active 4-H show goats?',
          options: ['24 inches', '48 inches (4 feet)', '12 inches'],
          correctIndex: 1,
          explanation: '48-inch woven wire prevents agile goats from jumping or pushing over fences.',
          division: 'junior'
        },
        {
          id: 'gt_dc_q2',
          question: 'What tool is specifically designed to safely pare down overgrown goat hoof walls?',
          options: ['Sharp hoof shears / trimmers', 'Garden hedge shears', 'Pliers'],
          correctIndex: 0,
          explanation: 'Specialized goat hoof shears allow clean, accurate paring parallel to the heel pad.',
          division: 'junior'
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
        'Understand ruminant physiology: the 4 stomach compartments (Rumen, Reticulum, Omasum, Abomasum)',
        'Prevent Urinary Calculi in market wethers (maintain 2:1 Calcium to Phosphorus ratio and ammonium chloride)',
        'Recognize why copper is ESSENTIAL for goats (goats need copper; sheep are poisoned by copper)',
        'Manage rumen fermentation and prevent Acute Lactic Acidosis (grain overload)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Chewing the Cud & Green Hay!',
          readAloud: 'Goats love munching on shrubs, green leaves, and crunchy grass hay! They chew their cud when they are feeling relaxed and happy.',
          sections: [
            {
              title: 'What is Chewing the Cud?',
              body: 'Goats burp up a little mouthful of hay and chew it again very carefully! This is called chewing their cud and helps their tummy digest grass.'
            },
            {
              title: 'Do Goats Really Eat Tin Cans?',
              body: 'NO! That is just a silly cartoon myth. Goats are very picky eaters with sensitive lips who only eat nutritious plants and green hay.'
            }
          ],
          quickCheck: {
            question: 'Do goats actually eat tin cans or metal garbage?',
            options: ['No, that is a silly myth; goats eat nutritious plants, leaves, and hay', 'Yes, they eat iron', 'Yes, all metal'],
            correctIndex: 0,
            feedback: 'Goats are browsing herbivores with delicate mouths that love nutritious plants!'
          }
        },
        junior: {
          headline: 'The 4 Stomach Compartments, Cud Chewing & Mineral Balance',
          sections: [
            {
              title: 'The Four-Part Ruminant Stomach',
              body: '1. Rumen: Huge fermentation vat housing billions of beneficial bacteria and protozoa that break down plant fiber.\n2. Reticulum: Honeycomb lining that traps heavy foreign objects (hardware).\n3. Omasum: "Manyplies" book-like folds that absorb water and fatty acids.\n4. Abomasum: The "true stomach" that secretes gastric acid and digestive enzymes.'
            },
            {
              title: 'CRITICAL RULE: Goats Need Copper; Sheep Cannot Have It!',
              body: 'Never feed sheep minerals or sheep feed to goats. Goats have a high biological requirement for copper (preventing faded coat, anemia, and spinal swayback). Sheep are extremely susceptible to copper toxicity and cannot tolerate goat feed.'
            }
          ],
          quickCheck: {
            question: 'Why must sheep feed NEVER be fed to goats as their primary ration?',
            options: ['Sheep feed lacks copper, which goats require to prevent deficiency, anemia, and poor hair coat', 'Goats refuse to eat sheep feed', 'Sheep feed has too much water'],
            correctIndex: 0,
            feedback: 'Goats have a high copper requirement, whereas sheep are poisoned by high copper.'
          }
        },
        intermediate: {
          headline: 'Urinary Calculi (Water Belly) Prevention & 2:1 Ca:P Ratios',
          sections: [
            {
              title: 'Pathophysiology of Urinary Calculi in Wethers',
              body: 'Castrated male goats (wethers) have a narrow, curved urethra and an S-shaped sigmoid flexure. Excess phosphorus in grain diets forms struvite or calcium phosphate stones that lodge in the urethral process, blocking urination. Prevention: Maintain at least a 2:1 (or 2.5:1) Calcium to Phosphorus ratio, provide loose salt to encourage water intake, and supplement 0.5% ammonium chloride.'
            }
          ],
          quickCheck: {
            question: 'What is the required minimum dietary Calcium to Phosphorus (Ca:P) ratio to prevent urinary calculi in male show wethers?',
            options: ['At least 2:1 (or 2.5:1)', '1:5', 'Calcium is not needed'],
            correctIndex: 0,
            feedback: 'A minimum 2:1 Calcium to Phosphorus ratio prevents phosphate bladder stone formation.'
          }
        },
        senior: {
          headline: 'Rumen Lactic Acidosis Pathogenesis, Thiamine Deficiency & Polioencephalomalacia',
          sections: [
            {
              title: 'Grain Overload & Polio (PEM)',
              body: 'Rapid intake of non-structural carbohydrates causes Streptococcus bovis proliferation in the rumen, driving pH below 5.0 and killing normal microflora. The death of rumen microbes disrupts thiamine production or increases bacterial thiaminase, leading to Polioencephalomalacia (PEM / "goat polio") with star-gazing blindness and seizures.'
            }
          ],
          quickCheck: {
            question: 'What neurologic deficiency manifests as "star-gazing" posture following acute rumen acidosis?',
            options: ['Thiamine (Vitamin B1) deficiency leading to Polioencephalomalacia', 'Vitamin C deficiency', 'Calcium excess'],
            correctIndex: 0,
            feedback: 'Rumen acidosis destroys thiamine-synthesizing microbes, triggering cerebral polio.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_nu_q1',
          question: 'Which compartment of the goat’s four-part stomach is considered the "true stomach" producing digestive acid?',
          options: ['The Abomasum', 'The Rumen', 'The Reticulum', 'The Omasum'],
          correctIndex: 0,
          explanation: 'The abomasum secretes hydrochloric acid and enzymes like a human stomach.',
          division: 'junior'
        },
        {
          id: 'gt_nu_q2',
          question: 'What feed ingredient is commonly added to show wether rations to acidify urine and dissolve struvite stones?',
          options: ['Ammonium chloride', 'Baking soda', 'Table sugar'],
          correctIndex: 0,
          explanation: 'Ammonium chloride lowers urinary pH, preventing struvite calculi formation.',
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
        'Perform FAMACHA eye membrane scoring to detect barber pole worm (Haemonchus contortus) anemia',
        'Recognize signs of acute frothy or gas Bloat (left flank balloon distension)',
        'Understand federal Scrapie disease eradication identification tags',
        'Adhere to youth safety boundaries: Observe symptoms, isolate, and consult a veterinarian'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Checking Goat Eyes & Happy Bellies!',
          readAloud: 'Healthy goats are bright, perky, and love saying hello! We gently check their eyelids to make sure they are nice and pink.',
          sections: [
            {
              title: 'Pink Eyelids Mean Healthy Blood',
              body: 'When your leader or parent checks your goat’s lower eyelid, bright pink means healthy blood! If the eyelid looks pale white, the goat needs vet help.'
            }
          ],
          quickCheck: {
            question: 'What color should the inside of your goat’s lower eyelid be during a health check?',
            options: ['Bright healthy pink/red', 'Ghostly pale white', 'Bright green'],
            correctIndex: 0,
            feedback: 'Pink or red indicates healthy red blood cells and zero parasite anemia!'
          }
        },
        junior: {
          headline: 'FAMACHA Scoring, Barber Pole Worm & Left-Side Bloat',
          sections: [
            {
              title: 'FAMACHA Scoring Protocol',
              body: 'The Barber Pole worm (Haemonchus contortus) pierces the abomasal wall and drinks blood, causing fatal anemia and "bottle jaw" (fluid under the jaw). Gently press down on upper lid, roll down lower lid, and compare mucous membrane to official FAMACHA card (1=Red/Optimal, 2=Pink/Acceptable, 3=Pale Pink/Borderline, 4=Pale/Dangerous, 5=White/Critical Emergency).'
            },
            {
              title: 'Recognizing Bloat on the Left Flank',
              body: 'Because the rumen is located on the LEFT side of the body, rumen gas bloat causes a drum-tight, balloon-like swelling on the left flank behind the ribs. This is a life-threatening emergency that presses on lungs and requires immediate adult and veterinary intervention.'
            }
          ],
          quickCheck: {
            question: 'On which side of the goat’s abdomen does severe gas bloat appear as a tight balloon-like swelling?',
            options: ['The Left flank', 'The Right flank only', 'Under the tail'],
            correctIndex: 0,
            feedback: 'The rumen is on the left flank; severe bloat produces tight left-side distention.'
          }
        },
        intermediate: {
          headline: 'Caseous Lymphadenitis (CL), Caprine Arthritis Encephalitis (CAE) & Scrapie Tags',
          sections: [
            {
              title: 'Caseous Lymphadenitis (CL)',
              body: 'Caused by Corynebacterium pseudotuberculosis, forming thick cheesy abscesses in external lymph nodes (under ears, jaw, prescapular). Highly contagious when abscesses rupture; infected goats shed bacteria into soil where it survives for years. Never lance abscesses in pastures or fair barns!'
            },
            {
              title: 'Federal Scrapie Eradication Tags',
              body: 'Scrapie is a fatal transmissible spongiform encephalopathy (TSE) prion disease. Federal law requires official USDA Scrapie premise identification ear tags or registered tattoo numbers before breeding or exhibition goats leave their home farm.'
            }
          ],
          quickCheck: {
            question: 'What official federal identification tag is required on show goats for disease traceability?',
            options: ['Official USDA Scrapie Tag', 'A paper ribbon', 'A collar bell'],
            correctIndex: 0,
            feedback: 'Scrapie tags provide federal traceability for TSE eradication programs.'
          }
        },
        senior: {
          headline: 'Targeted Selective Treatment (TST), Anthelmintic Resistance & VCPR',
          sections: [
            {
              title: 'Combating Dewormer Resistance',
              body: 'Routine "calendar deworming" of the whole herd has bred resistant super-worms across all three major anthelmintic classes (Benzimidazoles, Macrocyclic lactones, Imidazothiazoles). Implement Targeted Selective Treatment (TST): deworm ONLY animals scoring FAMACHA 4 or 5, leaving susceptible refugia worm populations.'
            }
          ],
          quickCheck: {
            question: 'What is the concept of "refugia" in modern small ruminant parasite management?',
            options: ['Worms that have never been exposed to dewormers, preserving drug-sensitive genetics in the pasture', 'A type of barn fencing', 'A goat breed'],
            correctIndex: 0,
            feedback: 'Preserving drug-sensitive refugia prevents total dewormer resistance.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_hb_q1',
          question: 'What deadly blood-sucking stomach parasite is monitored using the FAMACHA eye card system?',
          options: ['Barber Pole Worm (Haemonchus contortus)', 'Ringworm fungus', 'Ear mites'],
          correctIndex: 0,
          explanation: 'Haemonchus contortus drinks blood in the abomasum, causing lethal anemia.',
          division: 'junior'
        },
        {
          id: 'gt_hb_q2',
          question: 'What is "bottle jaw" in a goat and what does it indicate?',
          options: ['Fluid edema accumulating under the lower jaw caused by severe blood protein loss from heavy parasite infection', 'Chewing on milk bottles', 'A broken jaw bone'],
          correctIndex: 0,
          explanation: 'Bottle jaw indicates critical hypoproteinemia caused by severe worm burden.',
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
        'Lead with proper show collar or chain under jaw (never drag by horns, ears, or legs)',
        'Understand livestock flight zones and points of balance at the shoulder',
        'Recognize low-stress movement techniques (herding instinct and quiet walking)',
        'Ensure clean dry bedding and weather shelter per the Five Freedoms'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Leading & Happy Goats!',
          readAloud: 'Goats are gentle herd buddies. We walk beside them with a soft collar and talk to them in a calm, sweet voice.',
          sections: [
            {
              title: 'Never Pull on Ears or Horns!',
              body: 'Pulling on horns or ears hurts your goat and scares them. Always hold the small collar under their chin with gentle fingers.'
            }
          ],
          quickCheck: {
            question: 'How should you guide your goat when walking in the barn?',
            options: ['Gently hold the collar under their jaw with palm facing up', 'Pull hard on their tail', 'Drag them by the ears'],
            correctIndex: 0,
            feedback: 'Gentle collar guidance under the jaw keeps your goat calm and happy.'
          }
        },
        junior: {
          headline: 'Show Collar Control, Shoulder Balance Point & Horn Safety',
          sections: [
            {
              title: 'Holding the Show Chain/Collar',
              body: 'In dairy and meat showmanship, control the goat using a small link prong-less chain or leather collar held under the jaw. Your right hand holds the collar with palm facing up and thumb on top. Your left hand rests lightly on the hip or tail when standing.'
            },
            {
              title: 'Why Horn Pulling is Dangerous',
              body: 'Never catch, pull, or lead a horned meat goat by its horns. Horn cores contain vascular bone and nerves connected directly to the frontal sinus. Jerking on horns can fracture the horn base, cause sinus hemorrhages, and destroy animal trust.'
            }
          ],
          quickCheck: {
            question: 'Why must you never drag or pull a meat goat by its horns?',
            options: ['Horns will dissolve', 'Horns can fracture at the base, causing severe bleeding, sinus infection, and extreme pain', 'It makes horns curly'],
            correctIndex: 1,
            feedback: 'Pulling on horns causes acute pain and potential skull fracture.'
          }
        },
        intermediate: {
          headline: 'Temple Grandin Flight Zone Principles & Low-Stress Movement',
          sections: [
            {
              title: 'Point of Balance and Flight Zone',
              body: 'The point of balance is at the goat’s shoulder. Stand behind the shoulder point to move the goat forward; step in front of the shoulder to stop or back the goat. Work calmly on the edge of the flight zone without shouting or waving arms.'
            }
          ],
          quickCheck: {
            question: 'Where is an animal’s natural "point of balance" located when moving livestock?',
            options: ['At the point of the shoulder', 'At the tip of the tail', 'Between the ears'],
            correctIndex: 0,
            feedback: 'Stepping behind the shoulder moves animals forward; stepping in front turns or stops them.'
          }
        },
        senior: {
          headline: 'Ethological Herd Dynamics, Separation Anxiety & Humane Transits',
          sections: [
            {
              title: 'Managing Herd Separation Stress at Fairs',
              body: 'Goats are obligate herd ruminants that experience acute cortisol spikes when isolated. Transport show animals in pairs or provide visual pen contact to prevent vocal panic, off-feed anorexia, and immune suppression.'
            }
          ],
          quickCheck: {
            question: 'How can exhibitors minimize acute travel and pen separation stress when taking goats to fair?',
            options: ['Keep them in total isolation', 'Pen them alongside familiar herd mates or provide visual contact with neighboring goats', 'Withhold all water'],
            correctIndex: 1,
            feedback: 'Maintaining herd contact keeps cortisol levels low and animals eating well.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_hw_q1',
          question: 'What is the correct hand grip when holding a goat showmanship collar?',
          options: ['Fingers through collar under the jaw, palm facing up, thumb on top', 'Both fists wrapped around the neck in a headlock', 'Holding only by the tail'],
          correctIndex: 0,
          explanation: 'Palm up under the jaw allows smooth upward control of the head without choking.',
          division: 'junior'
        },
        {
          id: 'gt_hw_q2',
          question: 'According to animal welfare standards, what happens if an exhibitor aggressively knees or strikes an animal in the show ring?',
          options: ['Bonus points are awarded', 'Immediate disqualification and removal from competition for inhumane handling', 'Nothing happens'],
          correctIndex: 1,
          explanation: 'Inhumane handling or physical abuse results in immediate show disqualification.',
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
        'Calculate Average Daily Gain (ADG) for market meat wethers',
        'Record individual animal identification (Scrapie tag #, ADGA tattoo letters)',
        'Track dairy milk production records and Dairy Herd Improvement (DHI) logs',
        'Maintain the complete 4-H Goat Project Financial Balance Sheet'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Goat Storybook!',
          readAloud: 'Write your goat’s name, glue a picture of you smiling together, and record how much hay your buddy eats!',
          sections: [
            {
              title: 'Fun with Growth',
              body: 'Measure how tall your goat is against your waist every month and write it in your book!'
            }
          ],
          quickCheck: {
            question: 'What belongs in your first year 4-H goat scrapbook?',
            options: ['Your goat’s photo, name, tag number, and what you learned caring for them', 'A piece of candy wrapper', 'Blank pages'],
            correctIndex: 0,
            feedback: 'Photos, tag numbers, and memories create a proud first-year record book!'
          }
        },
        junior: {
          headline: 'Average Daily Gain (ADG) Math & Scrapie Ear Tag Logs',
          sections: [
            {
              title: 'Calculating Average Daily Gain (ADG)',
              body: 'ADG = (Final Body Weight - Starting Body Weight) ÷ Days on Feed.\nExample: A market meat wether weighed 40 lbs on May 1st and weighed 70 lbs on July 1st (60 days later). Total gain = 30 lbs. 30 lbs ÷ 60 days = 0.50 lbs per day ADG.'
            },
            {
              title: 'Recording Scrapie Ear Tag Numbers',
              body: 'Every record book must list the full state premise and individual animal number stamped on the Scrapie tag (e.g., "WA 1234 0058").'
            }
          ],
          quickCheck: {
            question: 'A market wether gained 45 lbs over 90 days. What was its Average Daily Gain (ADG)?',
            options: ['0.50 lbs per day', '2.0 lbs per day', '10 lbs per day'],
            correctIndex: 0,
            feedback: '45 lbs ÷ 90 days = 0.50 lbs per day!'
          }
        },
        intermediate: {
          headline: 'Dairy DHI Milk Records, Feed Conversion Ratios & Break-Even Math',
          sections: [
            {
              title: 'DHI Lactation Records',
              body: 'Dairy Herd Improvement (DHI) tracks pounds of milk per test day, butterfat %, and protein %. A high-producing dairy doe produces 6 to 10 lbs (roughly 3 to 5 quarts) of milk per day.'
            }
          ],
          quickCheck: {
            question: 'Approximately how many pounds does one gallon of goat milk weigh?',
            options: ['8.6 pounds', '1 pound', '20 pounds'],
            correctIndex: 0,
            feedback: 'One gallon of milk weighs approximately 8.6 pounds.'
          }
        },
        senior: {
          headline: 'Breeding Co-ancestry, Enterprise Depreciation & Net Return Over Feed Costs',
          sections: [
            {
              title: 'Return Over Feed Costs (ROFC)',
              body: 'ROFC = Value of Market Sale (or Milk) minus Total Feed Costs. Analyze capital depreciation on milk stands, clipping machines, and barn infrastructure.'
            }
          ],
          quickCheck: {
            question: 'What is the primary indicator of economic efficiency in market livestock record books?',
            options: ['Return Over Feed Costs (Gross Revenue minus Feed Costs)', 'Number of photos taken', 'Trophy ribbon count'],
            correctIndex: 0,
            feedback: 'Return over feed cost reflects true economic profitability.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_rk_q1',
          question: 'If a 50 lb bag of goat feed costs $20.00, what is the cost per pound?',
          options: ['$0.40 per pound', '$1.00 per pound', '$0.10 per pound'],
          correctIndex: 0,
          explanation: '$20 divided by 50 lbs = $0.40 per pound.',
          division: 'junior'
        },
        {
          id: 'gt_rk_q2',
          question: 'What information is contained on an official ADGA dairy goat registration certificate?',
          options: ['Registered name, tattoo in right ear (breeder herd letters) and left ear (year letter + birth order number), pedigree ancestors, and breeder', 'Only a drawing of the doe', 'The fair ribbon count'],
          correctIndex: 0,
          explanation: 'Official certificates link pedigree lineage with permanent ear tattoos.',
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
        'Master the fundamental rule: ALWAYS keep the goat between you and the judge',
        'Set up the feet correctly (square front legs, rear legs square or slightly offset depending on dairy vs meat)',
        'Demonstrate ring movements, crossover turns around the front of the goat, and constant judge eye contact',
        'Present yourself in professional show attire (white long sleeves, clean boots)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Walking Tall in the Show Ring!',
          readAloud: 'When we walk in the show ring, we keep our eyes on the friendly judge, smile, and walk smoothly beside our goat!',
          sections: [
            {
              title: 'The Golden Rule',
              body: 'Never stand between the judge and your goat! Always make sure the judge can see your beautiful goat clearly.'
            }
          ],
          quickCheck: {
            question: 'Where should you stand when presenting your goat to the judge?',
            options: ['On the opposite side, keeping the goat between you and the judge', 'Directly blocking the judge’s view', 'Hiding behind the goat'],
            correctIndex: 0,
            feedback: 'Always keep the goat between yourself and the judge!'
          }
        },
        junior: {
          headline: 'Ring Etiquette, Foot Placement & Crossover Turns',
          sections: [
            {
              title: 'Setting Up the Feet',
              body: '1. Front Feet: Place front feet square directly under the point of the shoulders.\n2. Rear Feet: Place rear hocks vertical to the ground and square under the pin bones (dairy does may stand slightly offset to showcase udder attachments; market wethers stand wide and square).\n3. Keep head held high with jaw parallel to ground.'
            },
            {
              title: 'Crossing Over Around the Front',
              body: 'When the judge moves from one side to the other, smoothly step around the FRONT of your goat’s head while maintaining eye contact with the judge. Never walk behind your goat or step over their back.'
            }
          ],
          quickCheck: {
            question: 'How should you change sides as the judge walks around the front of your goat?',
            options: ['Smoothly cross around the FRONT of the goat while keeping eye contact with the judge', 'Crawl under the goat’s belly', 'Walk around behind the rear legs'],
            correctIndex: 0,
            feedback: 'Smoothly crossing around the front preserves head control and maintains judge contact.'
          }
        },
        intermediate: {
          headline: 'Market Meat Bracing vs Dairy Lead, Oral Judge Reasoning & Ring Awareness',
          sections: [
            {
              title: 'Bracing Market Goats vs Natural Stance in Dairy',
              body: 'In market goat showmanship, exhibitors may lightly "brace" the wether’s chest against their thigh when handled by the judge to demonstrate muscle firmness along the loin and leg. In dairy showmanship, BRACING IS STRICTLY PROHIBITED; dairy does must stand naturally and relaxed.'
            }
          ],
          quickCheck: {
            question: 'Is bracing (pushing animal’s chest against handler’s leg) permitted in Dairy Goat showmanship?',
            options: ['NO, bracing is strictly prohibited in dairy showmanship; dairy does must stand naturally', 'YES, all goats must be braced', 'Only on rainy days'],
            correctIndex: 0,
            feedback: 'Bracing is strictly prohibited in dairy showmanship; dairy character requires a natural poise.'
          }
        },
        senior: {
          headline: 'Master Showmanship Ring Demeanor, Judge Interaction & Split-Second Awareness',
          sections: [
            {
              title: 'Oral Answers with Agricultural Precision',
              body: 'Begin answers respectfully: "Judge, my senior doe demonstrates excellent width through the chest floor and angularity over the withers, though she could show a tighter fore udder attachment." Always maintain poise if the animal misbehaves; quietly reset without frustration.'
            }
          ],
          quickCheck: {
            question: 'What is the most professional response if a showmanship judge asks a question you do not know the answer to?',
            options: ['"Judge, I do not know that answer today, but I will research it in the breed standard as soon as I leave the ring."', 'Make up an answer quickly', 'Blame your 4-H leader'],
            correctIndex: 0,
            feedback: 'Honesty and commitment to learn impress judges far more than guessing.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_sh_q1',
          question: 'What is the correct attire for a 4-H dairy goat showmanship exhibitor?',
          options: ['Clean white long-sleeve shirt, white or dark slacks/jeans, closed-toe leather boots, hair tied neatly back', 'Short sleeve athletic wear and flip-flops', 'Muddy chore coveralls'],
          correctIndex: 0,
          explanation: 'Traditional dairy showmanship attire is white long sleeves and clean boots.',
          division: 'junior'
        },
        {
          id: 'gt_sh_q2',
          question: 'What should you do if your goat steps out of position while the judge is evaluating another animal across the ring?',
          options: ['Calmly, quietly, and smoothly reset the goat’s feet back into correct alignment without drawing disruptive attention', 'Ignore it completely', 'Yell at the goat'],
          correctIndex: 0,
          explanation: 'Attentive, quiet repositioning demonstrates continuous ring awareness.',
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
        'Apply the four H’s to livestock stewardship and community leadership',
        'Learn why prohibited substances, drenching, and artificial muscle builders are illegal',
        'Adhere strictly to slaughter withdrawal periods before fair market auctions',
        'Exhibit humility in victory and generous sportsmanship in defeat'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Big 4-H Hearts & Fair Play!',
          readAloud: 'In 4-H, we love our animals and we cheer for our friends! Doing our best is what makes us true champions.',
          sections: [
            {
              title: 'Being a Kind Competitor',
              body: 'When your friend wins the first place ribbon, smile and say "Congratulations!" Always be kind to every animal and every person in the barn.'
            }
          ],
          quickCheck: {
            question: 'What is the most important award in 4-H?',
            options: ['Learning, caring for animals with character, and making wonderful friends', 'Only the tallest purple trophy', 'Money'],
            correctIndex: 0,
            feedback: 'Character, learning, and kindness are what 4-H is all about!'
          }
        },
        junior: {
          headline: 'Honesty in the Ring, No Prohibited Tampering & Wholesome Meat',
          sections: [
            {
              title: 'What Counts as Tampering in Show Goats?',
              body: 'Prohibited practices include: injecting air or gas under the skin to fake muscling, drenching with sugar solutions, applying painful irritants to make tails stand, or using unapproved growth hormones. Success built on deceit is worthless.'
            },
            {
              title: 'The Food Safety Promise',
              body: 'Market goats produce meat consumed by families. Exhibitors sign a legal affidavit verifying zero prohibited drug residues. Never sell an animal within an active withdrawal window.'
            }
          ],
          quickCheck: {
            question: 'Why is artificial tampering (such as injecting air under the skin or giving unapproved drugs) prohibited in show livestock?',
            options: ['It is fraudulent, cruel to animals, endangers human food safety, and violates the 4-H code of ethics', 'It takes too much time', 'Judges cannot see it'],
            correctIndex: 0,
            feedback: 'Tampering compromises food safety and destroys agricultural integrity.'
          }
        },
        intermediate: {
          headline: 'Wholesome Quality Assurance (YQCA Principles) & Public Trust',
          sections: [
            {
              title: 'Youth for the Quality Care of Animals (YQCA) Principles',
              body: 'The food chain begins in your home barn. Understanding proper injection sites (always give injections in the triangle of the neck subcutaneously, NEVER in the high-value leg or loin muscle) protects meat quality and prevents carcass blemishes.'
            }
          ],
          quickCheck: {
            question: 'Where should all intramuscular or subcutaneous livestock injections be administered whenever permitted by the label?',
            options: ['In the neck triangle forward of the shoulder to protect valuable meat cuts', 'In the high-dollar rear leg loin', 'In the tail'],
            correctIndex: 0,
            feedback: 'Injecting in the neck preserves valuable loin and leg cuts from scar tissue.'
          }
        },
        senior: {
          headline: 'Character Leadership, Crisis Management & Agricultural Advocacy',
          sections: [
            {
              title: 'Advocating for Animal Agriculture',
              body: 'Public scrutiny at fairs is intense. Senior exhibitors represent the livestock industry by modeling calm handling, immaculate biosecurity, and answering visitor questions with scientific accuracy and empathy.'
            }
          ],
          quickCheck: {
            question: 'How do senior 4-H exhibitors best represent the livestock industry to fair visitors?',
            options: ['Greet the public warmly, explain humane care and nutrition, and maintain clean well-bedded pens', 'Ignore visitors and stay on their phones', 'Argue with anyone who asks questions'],
            correctIndex: 0,
            feedback: 'Polite, educated transparency builds public confidence in agriculture.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_et_q1',
          question: 'What should an ethical exhibitor do if an animal needs prescription medical treatment 5 days before a terminal fair market sale?',
          options: ['Immediately contact parents, leader, and vet; provide the animal medical treatment, and withdraw from the meat sale to protect food safety', 'Hide the treatment and sell the animal anyway', 'Give double the dose'],
          correctIndex: 0,
          explanation: 'Animal welfare and human food safety always come first; withdrawing the animal protects public health.',
          division: 'junior'
        },
        {
          id: 'gt_et_q2',
          question: 'What are the four H’s in 4-H?',
          options: ['Head, Heart, Hands, and Health', 'Horns, Hooves, Hay, and Hedges', 'Honesty, Help, Hope, and Honor'],
          correctIndex: 0,
          explanation: 'Head, Heart, Hands, and Health guide youth development and character.',
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
        'Formulate SMART goals for the goat project year',
        'Prepare and deliver a club demonstration (e.g. Hoof Trimming or FAMACHA Scoring)',
        'Write professional market buyer invitation letters for local business sponsors',
        'Conduct a year-end project reflection identifying growth and leadership milestones'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Sharing My Goat Story!',
          readAloud: 'Tell your 4-H club about your favorite goat! Bring a colorful poster showing how you brush and feed your buddy.',
          sections: [
            {
              title: 'Speaking Proudly',
              body: 'Stand tall, look at your friends, and share your goat’s name, breed, and favorite green leaves to munch on!'
            }
          ],
          quickCheck: {
            question: 'What is a great way to share your goat project with your club?',
            options: ['Giving a short show-and-tell talk with a colorful poster', 'Whispering in the back of the room', 'Leaving your goat alone in a dark room'],
            correctIndex: 0,
            feedback: 'Show and tell builds public speaking confidence and inspires others!'
          }
        },
        junior: {
          headline: 'SMART Goat Goals & Club Demonstrations',
          sections: [
            {
              title: 'Setting a Junior Goat Goal',
              body: 'Example: "I will trim my goat’s hooves every 4 weeks and record the date and foot condition in my 4-H record book through fair day."'
            },
            {
              title: 'Ideas for Goat Demonstrations',
              body: '• How to Safely Trim Goat Hooves Step-by-Step\n• Using the FAMACHA Eye Card to Check for Anemia\n• Preparing a Dairy Doe for the Show Ring: Washing and Clipping'
            }
          ],
          quickCheck: {
            question: 'Which of the following is a properly formatted SMART goal for a goat project?',
            options: ['"I will practice showmanship walking and foot placement twice a week for 20 minutes from April through July."', '"I want to be the best in the world."', '"Maybe I will buy a goat."'],
            correctIndex: 0,
            feedback: 'Notice how it is specific, measurable, realistic, and has a clear time frame.'
          }
        },
        intermediate: {
          headline: 'Writing Market Buyer Letters & Community Outreach',
          sections: [
            {
              title: 'Crafting Effective Market Buyer Letters',
              body: 'Send typed, signed letters to local businesses 3 to 4 weeks before the fair auction. Describe your project responsibilities, your daily gain statistics, how your auction earnings will fund your education or next year’s herd, and include auction dates and parking passes.'
            }
          ],
          quickCheck: {
            question: 'When should prospective buyer invitation letters be mailed before the county fair auction?',
            options: ['3 to 4 weeks before the fair auction', 'The morning of the sale', 'Two months after fair ends'],
            correctIndex: 0,
            feedback: 'Mailing 3 to 4 weeks in advance gives businesses time to budget and plan attendance.'
          }
        },
        senior: {
          headline: 'Youth Leadership, Showmanship Clinics & Agricultural Careers',
          sections: [
            {
              title: 'Organizing County Goat Clinics',
              body: 'Senior exhibitors serve as Junior Leaders by hosting hands-on clinics teaching younger members how to safely disbud, lead, trim hooves, and prepare record books.'
            }
          ],
          quickCheck: {
            question: 'What is the highest demonstration of 4-H project mastery for a senior exhibitor?',
            options: ['Organizing clinics to mentor, teach, and encourage younger youth members in the project', 'Only competing when guaranteed first place', 'Selling all animals before fair'],
            correctIndex: 0,
            feedback: 'Empowering the next generation of youth exhibitors is the ultimate 4-H leadership achievement.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'gt_cg_q1',
          question: 'What does the "T" in SMART goal setting stand for?',
          options: ['Time-bound (having a specific target completion date)', 'Temporary', 'Trophy', 'Tattoo'],
          correctIndex: 0,
          explanation: 'A goal must be Time-bound with a deadline to maintain focus and accountability.',
          division: 'junior'
        },
        {
          id: 'gt_cg_q2',
          question: 'What is the most effective way to calm public speaking nerves before presenting a club demonstration?',
          options: ['Take slow deep breaths, organize your visual posters in order, and practice out loud in front of a mirror', 'Speak as fast as possible so it ends quickly', 'Run out of the room'],
          correctIndex: 0,
          explanation: 'Preparation, organized visuals, and controlled breathing build poise and confidence.',
          division: 'junior'
        }
      ]
    }
  ]
};
