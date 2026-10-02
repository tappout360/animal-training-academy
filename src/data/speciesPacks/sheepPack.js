// WarrenWise Youth Animal Training Academy
// Species Pack: Sheep (Ovis aries) - Market Lambs & Breeding Stock
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const SHEEP_PACK = {
  id: 'sheep',
  name: 'Sheep Project Academy',
  species: 'Sheep (Market Lambs & Breeding)',
  category: 'Small Ruminant Livestock',
  icon: 'Shield',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-20',
  reviewPolicy: 'Reviewed under Academy Accuracy Policy',
  reviewerRole: 'Internal Curriculum Specialist (Small Ruminants)',
  verifiedBy: 'Reviewed under Academy Accuracy Policy',
  description: 'Complete 4-H sheep project curriculum covering meat vs wool breeds, copper toxicity prevention, scrapie tags, market lamb bracing, shearing, and ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate Meat breeds (Suffolk, Hampshire, Southdown, Dorset) vs Wool breeds (Merino, Rambouillet) vs Hair breeds (Katahdin, Dorper)',
        'Identify market lamb characteristics (muscling, rack, loin, leg of lamb)',
        'Understand breeding ewe longevity and maternal traits'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Fluffy Sheep & Woolly Friends!',
          readAloud: 'Sheep give us soft, warm wool to knit cozy sweaters and socks! Some have black faces and some have white fluffy faces.',
          sections: [{ title: 'Wool and Hair Sheep', body: 'Wool sheep have thick fluffy coats that get sheared in springtime. Hair sheep shed their hair naturally like dogs!' }],
          quickCheck: { question: 'What do we get from wool sheep that makes warm winter sweaters?', options: ['Wool fleece', 'Cotton candy', 'Feathers'], correctIndex: 0, feedback: 'Sheep wool is spun into warm yarn!' }
        },
        junior: {
          headline: 'Meat Breeds, Wool Types & Market Conformation',
          sections: [
            {
              title: 'Major Meat Breeds',
              body: '• Suffolk: Black bare head and legs, no wool on poll, rapid growth, heavy muscled.\n• Hampshire: Black face with signature wool cap on poll and wool on legs.\n• Southdown: Small, stocky, light brown/gray face, heavily muscled.\n• Dorset: All white, known for out-of-season breeding (polled or horned).'
            }
          ],
          quickCheck: { question: 'Which popular black-faced meat breed features a distinct wool cap on its forehead and wool on its legs?', options: ['Hampshire', 'Suffolk (bare head)', 'Merino'], correctIndex: 0, feedback: 'Hampshires have the signature wool cap and wool on their legs.' }
        },
        intermediate: {
          headline: 'Fiber Microns, Carcass Merit & Linear Ewe Evaluation',
          sections: [{ title: 'Wool Micron Grading', body: 'Wool is graded by fiber diameter in microns (e.g. Fine Wool Merino < 20 microns; Medium Wool 25-30 microns). Lower micron count indicates finer, softer fiber.' }],
          quickCheck: { question: 'What does a lower micron number indicate when evaluating wool fleece?', options: ['Finer, softer wool fibers', 'Thicker, coarser fibers', 'Dirty wool'], correctIndex: 0, feedback: 'Lower microns signify superior fine fiber quality.' }
        },
        senior: {
          headline: 'National Sheep Improvement Program (NSIP) & Expected Progeny Differences (EPDs)',
          sections: [{ title: 'Using EPDs in Seedstock Selection', body: 'NSIP tracks Carcass Plus index, maternal lambing rate, weaning weight, and parasite fecal egg count (FEC) EBVs.' }],
          quickCheck: { question: 'What does a negative Fecal Egg Count (FEC) breeding value indicate?', options: ['Superior genetic resistance to intestinal parasites', 'Inferior growth', 'Color defects'], correctIndex: 0, feedback: 'Negative FEC EBVs indicate high genetic resistance to worms.' }
        }
      },
      quizQuestions: [
        { id: 'sh_bb_q1', question: 'Which sheep breed is known for having a bare black head with NO wool cap or leg wool?', options: ['Suffolk', 'Hampshire', 'Rambouillet'], correctIndex: 0, explanation: 'Suffolks are recognizable by clean black heads and legs without wool.', division: 'junior' }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Safe penning, clean bedding, and annual springtime shearing',
        'Humane tail docking standards (docking at caudal fold to prevent rectal prolapse and flystrike)',
        'Routine hoof trimming to prevent contagious foot rot'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Springtime Shearing Day!',
          readAloud: 'In spring, sheep get a haircut called shearing so they stay cool all summer long!',
          sections: [{ title: 'A Cool Summer Haircut', body: 'Shearing takes off their heavy winter coat. It doesn’t hurt at all, just like getting your hair cut!' }],
          quickCheck: { question: 'Why are sheep sheared in the spring?', options: ['To keep them cool in summer and collect wool', 'To make them invisible', 'To change their color'], correctIndex: 0, feedback: 'Shearing keeps sheep cool and produces wool.' }
        },
        junior: {
          headline: 'Tail Docking Guidelines & Flystrike Prevention',
          sections: [{ title: 'Tail Docking at the Caudal Fold', body: 'Docking tails prevents flystrike (maggots in soiled wool). However, docking TOO SHORT causes rectal prolapse (weakened anal sphincter). AVMA and 4-H rules require docking at the caudal fold (leaving at least 2 tail vertebrae).' }],
          quickCheck: { question: 'Where should a lamb’s tail be docked according to welfare guidelines to prevent rectal prolapse?', options: ['At the distal end of the caudal fold (covering the anus)', 'Completely flush with the spine with zero tail', 'Sheep tails should never be docked under any circumstances'], correctIndex: 0, feedback: 'Leaving the caudal fold protects rectal sphincter muscles from prolapse.' }
        },
        intermediate: {
          headline: 'Flystrike (Myiasis) Pathogenesis & Pen Sanitation',
          sections: [{ title: 'Flystrike Prevention', body: 'Blowflies (Lucilia sericata) deposit eggs in urine-soaked fleece. Maggots hatch within 12 hours and secrete enzymes digesting living tissue. Keep pens clean, dry, and crutch (shear wool around tail/dock).' }],
          quickCheck: { question: 'What is "crutching" in sheep husbandry?', options: ['Shearing wool from around the tail, dock, and rear legs to prevent manure buildup and flystrike', 'Feeding extra grain', 'Trimming horns'], correctIndex: 0, feedback: 'Crutching removes soiled rear wool to stop flystrike.' }
        },
        senior: {
          headline: 'Ventilation Dynamics, Cold Housing & Newborn Lamb Hypothermia',
          sections: [{ title: 'Combating Hypothermia in Lambing Jugs', body: 'Newborn lambs lose heat rapidly through evaporation. Use individual 4x4 lambing jugs with heat lamps and warm colostrum (50 ml/kg within 2 hours).' }],
          quickCheck: { question: 'What is the most critical intervention for a newborn lamb within its first 2 hours of life?', options: ['Receiving adequate maternal colostrum for energy and passive immunity', 'Giving a bath', 'Immediate tail docking'], correctIndex: 0, feedback: 'Colostrum provides life-saving warmth and antibodies.' }
        }
      },
      quizQuestions: [
        { id: 'sh_dc_q1', question: 'What severe medical condition can occur in growing market lambs if their tails are docked excessively short?', options: ['Rectal prolapse', 'Sore hocks', 'Ear infection'], correctIndex: 0, explanation: 'Ultra-short docking severs the levator ani muscle, leading to rectal prolapse.', division: 'junior' }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: [
        'CRITICAL SAFETY RULE: Sheep Copper Toxicity (sheep cannot excrete excess copper)',
        'Ruminant digestion, high quality forage, and grain creep feeding',
        'Preventing Enterotoxemia (Overeating Disease) with CD&T vaccination'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Hay, Pasture & Safe Sheep Food!',
          readAloud: 'Sheep love eating green grass and sweet hay! But remember: sheep need their own special sheep food, never goat food!',
          sections: [{ title: 'Special Sheep Chow', body: 'Sheep have very sensitive tummies. Always make sure the feed bag says "SHEEP" right on the label!' }],
          quickCheck: { question: 'Can you feed goat or cattle feed to a sheep?', options: ['NO! It contains copper which can make sheep very sick', 'Yes, all animals eat the same', 'Only on weekends'], correctIndex: 0, feedback: 'Never feed goat or cattle feed to sheep because of toxic copper!' }
        },
        junior: {
          headline: 'CRITICAL WARNING: Sheep Copper Toxicity & Enterotoxemia',
          sections: [
            {
              title: 'Why Copper Kills Sheep',
              body: 'Sheep liver cells accumulate copper easily and cannot excrete it efficiently into bile. When liver storage saturates, copper explodes into the bloodstream, destroying red blood cells (hemolytic crisis, jaundice, gunmetal kidneys, and death). NEVER feed cattle, goat, or horse feed to sheep!'
            },
            {
              title: 'Overeating Disease (Enterotoxemia)',
              body: 'Caused by Clostridium perfringens Types C & D in lambs on high grain rations. Prevented by CD&T vaccination.'
            }
          ],
          quickCheck: {
            question: 'Why are mineral feeds formulated for goats, horses, or cattle fatal to sheep?',
            options: ['They contain high levels of copper that accumulate in the sheep’s liver, causing fatal hemolytic crisis', 'They have too much water', 'Sheep cannot chew them'],
            correctIndex: 0,
            feedback: 'Sheep are uniquely sensitive to copper poisoning; always use dedicated sheep minerals.'
          }
        },
        intermediate: {
          headline: 'Copper-Molybdenum Antagonism & Feed Ratios',
          sections: [{ title: 'Molybdenum and Sulfate Ratios', body: 'Dietary copper should remain below 10–15 ppm in sheep diets, with a Copper to Molybdenum ratio around 6:1 to 10:1. Molybdenum binds copper into insoluble thiomolybdates.' }],
          quickCheck: { question: 'What mineral acts as an antagonist to bind copper and prevent toxicity in sheep diets?', options: ['Molybdenum', 'Iron', 'Potassium'], correctIndex: 0, feedback: 'Molybdenum binds copper into harmless excretable complexes.' }
        },
        senior: {
          headline: 'Rumen Volatile Fatty Acids (Acetate, Propionate, Butyrate) & Acidosis',
          sections: [{ title: 'Carbohydrate Fermentation Pathways', body: 'High concentrate market diets shift rumen VFA balance toward propionate for rapid adipose and muscle gain, but require 10-15% effective fiber to maintain rumen papillae integrity.' }],
          quickCheck: { question: 'What primary VFA is produced by rumen bacteria fermenting starches into glucose precursors?', options: ['Propionate', 'Acetate', 'Lactate'], correctIndex: 0, feedback: 'Propionate is the primary glucose precursor driving market weight gain.' }
        }
      },
      quizQuestions: [
        { id: 'sh_nu_q1', question: 'Which mineral is notoriously toxic to sheep even at levels commonly found in goat and cattle feeds?', options: ['Copper', 'Calcium', 'Salt', 'Phosphorus'], correctIndex: 0, explanation: 'Sheep accumulate copper in liver cells, leading to fatal hemolytic crisis.', division: 'junior' }
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
        'FAMACHA scoring for Barber Pole Worm (Haemonchus contortus)',
        'Recognize Sore Mouth (Contagious Ecthyma / ORF) as a ZOONOTIC disease transmitted to humans',
        'CD&T vaccination for Clostridial enterotoxemia and Tetanus',
        'Mandatory USDA Scrapie eradication ear tags'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Healthy Lamb Checks & Wash Hands!',
          readAloud: 'We check our sheep’s eyes and hooves every day. And always wash your hands after petting sheep!',
          sections: [{ title: 'Washing Hands Keeps You Safe', body: 'Some lamb sores can spread to human hands, so always wash with warm soapy water after visiting the barn!' }],
          quickCheck: { question: 'What should you always do after petting sheep at the fair?', options: ['Wash your hands with warm soap and water', 'Rub your eyes', 'Eat without washing'], correctIndex: 0, feedback: 'Hand washing keeps you and your animals healthy!' }
        },
        junior: {
          headline: 'Sore Mouth (ORF Zoonosis) & FAMACHA Scoring',
          sections: [
            {
              title: 'Sore Mouth is Zoonotic!',
              body: 'Contagious Ecthyma (Orf / Sore Mouth) causes crusty scabs around lips and nostrils. It is a poxvirus that CAN INFECT HUMANS, producing painful blister lesions on hands. Always wear disposable gloves when handling affected sheep!'
            },
            {
              title: 'CD&T Vaccine Protocol',
              body: 'Every show sheep must be vaccinated with CD&T (Clostridium perfringens Types C & D and Tetanus toxoid) to prevent sudden death from overeating disease and lockjaw.'
            }
          ],
          quickCheck: {
            question: 'What zoonotic viral disease of sheep produces crusty scabs on the lips and can infect human hands?',
            options: ['Sore Mouth (Contagious Ecthyma / Orf)', 'Pinkeye', 'Foot rot'],
            correctIndex: 0,
            feedback: 'Sore Mouth is zoonotic; wear gloves to protect yourself.'
          }
        },
        intermediate: {
          headline: 'Scrapie TSE Prion Genetics (Codon 171) & Eradication',
          sections: [{ title: 'Scrapie Resistance Genetics', body: 'Scrapie susceptibility is determined by Codon 171: Arginine (R) provides resistance; Glutamine (Q) indicates susceptibility. Breeding stock with QR or RR genotype are resistant to classical Scrapie.' }],
          quickCheck: { question: 'Which amino acid allele at Codon 171 confers genetic resistance to classical Scrapie in sheep?', options: ['Arginine (R / RR)', 'Glutamine (Q / QQ)', 'Valine'], correctIndex: 0, feedback: 'RR sheep are genetically resistant to Scrapie.' }
        },
        senior: {
          headline: 'Targeted Selective Treatment (TST) & Biosecurity Disinfection',
          sections: [{ title: 'Anthelmintic Stewardship in Flocks', body: 'Avoid whole-flock blanket drenching. Use FAMACHA 4-5 triggers, fecal flotation egg counts, and pasture rotation to maintain drug-susceptible refugia.' }],
          quickCheck: { question: 'What is the purpose of Targeted Selective Treatment in sheep parasite control?', options: ['To slow the onset of dewormer resistance by leaving refugia worms', 'To treat all animals monthly', 'To eliminate all pasture grass'], correctIndex: 0, feedback: 'TST preserves refugia and prolongs dewormer efficacy.' }
        }
      },
      quizQuestions: [
        { id: 'sh_hb_q1', question: 'What does the "T" in the essential 4-H sheep CD&T vaccine represent?', options: ['Tetanus (lockjaw)', 'Tuberculosis', 'Thyroid'], correctIndex: 0, explanation: 'CD&T protects against Clostridium perfringens Types C & D and Tetanus toxoid.', division: 'junior' }
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
        'Never catch or lift sheep by their wool (causes painful skin bruising and pelt damage)',
        'Control with hand under chin and behind dock/rump',
        'Understand sheep flocking behavior and low-stress flight zones',
        'Humane handling and proper show halter fit'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Gentle Chin Holds!',
          readAloud: 'Never pull on a sheep’s wool! That hurts like pulling hair. We hold them gently under their chin.',
          sections: [{ title: 'No Wool Pulling!', body: 'A sheep’s wool is attached to their delicate skin. Always guide them with a halter or gentle hand under their chin.' }],
          quickCheck: { question: 'Should you ever catch or hold a sheep by pulling its wool?', options: ['NO, never pull wool; it causes painful bruises', 'Yes, wool is strong', 'Only when running'], correctIndex: 0, feedback: 'Never grab wool; it tears delicate skin and bruises meat.' }
        },
        junior: {
          headline: 'Chin Control, Flocking Instinct & Flight Zones',
          sections: [
            {
              title: 'The Chin and Dock Hold',
              body: 'Place your dominant hand under the sheep’s jaw/chin with fingers cupped. Keep their head at a natural upright angle. Place your other hand behind the dock/tail to provide forward movement.'
            }
          ],
          quickCheck: { question: 'Where do you place your hands when controlling a sheep without a halter?', options: ['One hand cupped under the chin, the other hand behind the dock', 'Both hands gripping the back wool', 'Pulling both ears'], correctIndex: 0, feedback: 'Chin and dock control provides calm, humane guidance.' }
        },
        intermediate: {
          headline: 'Temple Grandin Curved Chute Principles & Vision Constraints',
          sections: [{ title: 'Livestock Vision & Flow', body: 'Sheep have wide-angle panoramic vision (over 300 degrees) but poor depth perception. They balk at shadows, flapping coats, or sudden contrast. Use curved chutes with solid walls.' }],
          quickCheck: { question: 'Why do curved handling chutes move sheep more efficiently than straight chutes?', options: ['Curved chutes prevent sheep from seeing what is ahead until they are committed, and appeal to their natural tendency to circle', 'They take up less space', 'Sheep like curves'], correctIndex: 0, feedback: 'Curved chutes utilize natural circling instincts.' }
        },
        senior: {
          headline: 'Humane Livestock Handling Audits & Stress Cortisol Metrics',
          sections: [{ title: 'Welfare Audit Rubrics', body: 'Measure slip and fall rates (< 1%), vocalization rates (< 3%), and electric prod use (0% in 4-H projects).' }],
          quickCheck: { question: 'What is the maximum acceptable slip rate during humane livestock facility audits?', options: ['Under 1% of animals', '50%', 'Any amount is fine'], correctIndex: 0, feedback: 'Top welfare audits mandate less than 1% slipping.' }
        }
      },
      quizQuestions: [
        { id: 'sh_hw_q1', question: 'What injury is caused when an exhibitor grabs a market lamb tightly by its wool?', options: ['Subcutaneous bruising that damages meat carcass quality and causes acute pain', 'Horns grow faster', 'Nothing happens'], correctIndex: 0, explanation: 'Wool pulling separates skin from subcutaneous tissue, causing severe bruising.', division: 'junior' }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Calculate Average Daily Gain (ADG) for market lambs (aiming for 0.60 to 0.85 lbs/day)',
        'Track Feed Conversion Ratio (FCR) (5:1 to 6:1 typical for lambs)',
        'Record Scrapie premise identification numbers and fair weigh-in milestones',
        'Complete the 4-H Market Lamb Financial Balance Sheet'
      ],
      ageContent: {
        cloverbud: {
          headline: 'My Lamb Scrapbook!',
          readAloud: 'Weigh your lamb, take photos, and write down how many pounds of hay they munch!',
          sections: [{ title: 'Growing Bigger Every Day', body: 'Write down your lamb’s ear tag number and celebrate how much they grow every week!' }],
          quickCheck: { question: 'What number must be written in every 4-H lamb record book?', options: ['Official Scrapie ear tag number', 'The lamb’s shoe size', 'Favorite color'], correctIndex: 0, feedback: 'Scrapie tags provide official animal identification.' }
        },
        junior: {
          headline: 'Calculating Market Lamb ADG & Break-Even Costs',
          sections: [{ title: 'Average Daily Gain Formula', body: 'ADG = (Fair Weight - Initial Weigh-In Weight) ÷ Days on Feed. Market lambs should gain between 0.60 and 0.85 lbs per day to reach peak condition (125-145 lbs) on fair day.' }],
          quickCheck: { question: 'A market lamb gains 54 lbs over 70 days. What is its Average Daily Gain?', options: ['0.77 lbs per day', '2.5 lbs per day', '10 lbs per day'], correctIndex: 0, feedback: '54 lbs ÷ 70 days = 0.77 lbs/day!' }
        },
        intermediate: {
          headline: 'Feed Conversion Ratios & Carcass Yield Grade Calculations',
          sections: [{ title: 'Yield Grade Formula', body: 'Lamb Yield Grade = 0.4 + (10 × 12th rib backfat thickness in inches). Ideal backfat is 0.15 to 0.25 inches (Yield Grade 1.9 to 2.9).' }],
          quickCheck: { question: 'What is the ideal 12th-rib backfat thickness for an industry-standard market lamb?', options: ['0.15 to 0.25 inches', '2.0 inches', 'Zero fat'], correctIndex: 0, feedback: '0.15 to 0.25 inches of backfat delivers optimal carcass cutability.' }
        },
        senior: {
          headline: 'Enterprise Financial Audits & Market Carcass Value Math',
          sections: [{ title: 'Evaluating Carcass Merit Premium', body: 'Calculate dressing percentage (hot carcass weight ÷ live weight × 100; typical 50-54%) and bone-in retail cuts value.' }],
          quickCheck: { question: 'What is the average dressing percentage for a shorn market show lamb?', options: ['50% to 54%', '20%', '90%'], correctIndex: 0, feedback: 'Average shorn lamb dressing percentage is 50-54%.' }
        }
      },
      quizQuestions: [
        { id: 'sh_rk_q1', question: 'What is the standard ideal live weight range for market lambs at county and state fairs?', options: ['125 to 145 pounds', '30 to 40 pounds', '400 to 500 pounds'], correctIndex: 0, explanation: '125-145 lbs yields ideal consumer market cuts.', division: 'junior' }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 30,
      objectives: [
        'Setting up front feet square and rear hocks straight and wide',
        'Bracing market lambs with body pressure against the chest/shoulder to show muscle firmness',
        'Always keeping the lamb between yourself and the judge',
        'Professional show ring attire and sportsmanship'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Smiling in the Show Ring!',
          readAloud: 'Walk smoothly, keep your eyes on the judge, and show how proud you are of your lamb!',
          sections: [{ title: 'Between You and the Judge', body: 'Always make sure the judge can see your lamb clearly without you standing in the way!' }],
          quickCheck: { question: 'Where should the lamb be positioned relative to you and the judge?', options: ['Between you and the judge at all times', 'Behind your back', 'Under the bleachers'], correctIndex: 0, feedback: 'Always keep the animal in full view of the judge.' }
        },
        junior: {
          headline: 'Setting Feet, Hand Placement & Market Bracing',
          sections: [
            {
              title: 'Foot Placement and Bracing',
              body: '1. Front feet square directly under shoulders.\n2. Rear feet square and slightly wider than front to show muscle expression.\n3. In market lamb showmanship, lightly press your leg against the lamb’s chest to brace them when the judge handles the loin and leg (keeps muscles tight and firm).'
            }
          ],
          quickCheck: { question: 'Why do market lamb exhibitors brace their lambs when the judge handles the animal?', options: ['To flex the loin and hindquarter muscles so the judge feels meat firmness', 'To make the lamb sleepy', 'To hide faults'], correctIndex: 0, feedback: 'Bracing flexes the dorsal loin and leg muscles for handling evaluation.' }
        },
        intermediate: {
          headline: 'Breeding Sheep (No Bracing) vs Market Lambs (Bracing)',
          sections: [{ title: 'Breeding Ewes: Natural Stance', body: 'Unlike market lambs, breeding ewes are NOT braced! Breeding ewes should stand naturally with head held high on halter to showcase maternal broodiness, rib shape, and structural soundness.' }],
          quickCheck: { question: 'Is bracing permitted when showing breeding ewes in 4-H showmanship?', options: ['NO, breeding ewes must stand naturally without bracing', 'YES, all sheep must be braced', 'Only in winter'], correctIndex: 0, feedback: 'Breeding ewes must stand naturally to demonstrate reproductive structural soundness.' }
        },
        senior: {
          headline: 'Oral Judge Reasoning, Split-Second Ring Control & Poise',
          sections: [{ title: 'Handling Ring Challenges', body: 'If a lamb refuses to lead or backs up, calmly reset without getting frustrated. Maintain eye contact, smile, and deliver concise agricultural terminology during oral questioning.' }],
          quickCheck: { question: 'How should an exhibitor react if their lamb struggles or steps out of position?', options: ['Calmly and smoothly reposition the feet without showing anger or frustration', 'Yell at the animal', 'Leave the ring'], correctIndex: 0, feedback: 'Patience and poise are hallmarks of master showmanship.' }
        }
      },
      quizQuestions: [
        { id: 'sh_sh_q1', question: 'What is the correct attire for a 4-H market lamb showmanship exhibitor?', options: ['Clean collared long-sleeve button-down shirt, dark jeans, belt, and closed-toe leather boots', 'Short sleeve t-shirt and tennis shoes', 'Muddy barn boots'], correctIndex: 0, explanation: 'Long sleeves, clean jeans, and leather boots present professional livestock attire.', division: 'junior' }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Uphold food safety and slaughter withdrawal periods on livestock affidavits',
        'Learn why illegal icing, air injections, and unethical drenching are prohibited',
        'Commit to animal welfare over purple banners',
        'Demonstrate gracious sportsmanship win or lose'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Big Hearts, Honest Champions!',
          readAloud: 'In 4-H, we do the right thing every single day because we love our animals and respect our friends!',
          sections: [{ title: 'Cheering for Club Friends', body: 'Congratulate the winner with a smile! Doing your best is what makes you a true champion.' }],
          quickCheck: { question: 'What makes you a true 4-H champion?', options: ['Kindness, honesty, and taking great care of your animal', 'Only getting first place', 'Cheating'], correctIndex: 0, feedback: 'Character and daily care make true champions!' }
        },
        junior: {
          headline: 'Tampering Rules & Food Safety Wholesomeness',
          sections: [
            {
              title: 'Prohibited Tampering in Show Lambs',
              body: 'Strictly prohibited: injecting air or oils under the hide, icing lambs with ice blankets (causes tissue damage and cramping), artificial twine or wool packing, or giving tranquilizers. Champions win with genetics, daily feeding, and practice!'
            }
          ],
          quickCheck: { question: 'Is it ethical to inject air under the skin of a market lamb to make it appear wider?', options: ['NO! That is illegal tampering, animal cruelty, and grounds for disqualification and ban from competition', 'Yes, for fun', 'Yes, judges expect it'], correctIndex: 0, feedback: 'Injecting air is fraudulent, inhumane tampering and is strictly illegal.' }
        },
        intermediate: {
          headline: 'Wholesome Assurance (YQCA), Injection Sites & Withdrawal Laws',
          sections: [{ title: 'Proper Injection Technique', body: 'All injections must be administered subcutaneously (SQ) in the neck triangle forward of the shoulder blade to prevent injection-site lesions in premium retail cuts (rack and loin).' }],
          quickCheck: { question: 'Where should injections be given on a market lamb to protect valuable meat cuts?', options: ['In the neck triangle forward of the shoulder', 'In the rear leg', 'In the top of the loin'], correctIndex: 0, feedback: 'Neck injections protect valuable meat cuts from scar tissue.' }
        },
        senior: {
          headline: 'Agricultural Public Relations, Consumer Trust & Industry Integrity',
          sections: [{ title: 'Representing Youth Agriculture', body: 'Senior exhibitors protect the public image of animal agriculture by maintaining spotless pens, providing clean water, and answering fair visitors with patience and science.' }],
          quickCheck: { question: 'What is the primary responsibility of senior 4-H livestock exhibitors to fair visitors?', options: ['Model ethical care, explain modern husbandry, and maintain clean biosecure pens', 'Hide in the camper', 'Argue with visitors'], correctIndex: 0, feedback: 'Transparent, polite education safeguards public trust in animal agriculture.' }
        }
      },
      quizQuestions: [
        { id: 'sh_et_q1', question: 'What does signing a 4-H County Fair Livestock Drug Affidavit legally certify?', options: ['That the animal has met all legal medication withdrawal times and contains zero illegal pharmaceutical residues', 'That you like sheep', 'That you bought your lamb at auction'], correctIndex: 0, explanation: 'The affidavit is a legal covenant certifying wholesome food safety for consumers.', division: 'junior' }
      ]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Goals & Communication',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Set SMART sheep project goals for daily rate of gain and showmanship mastery',
        'Prepare and deliver a club demonstration (e.g. Shearing, Hoof Trimming, or Wool Carding)',
        'Write professional auction buyer invitation letters to local community businesses',
        'Complete the year-end 4-H reflection portfolio'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Show & Tell with My Woolly Buddy!',
          readAloud: 'Tell your club about your lamb! Show a poster with photos of your lamb eating sweet hay.',
          sections: [{ title: 'My First Talk', body: 'Stand tall and share your lamb’s name, breed, and what fun things you learned!' }],
          quickCheck: { question: 'What is a fun way to share your sheep project with your club?', options: ['Giving a short show-and-tell presentation with a colorful poster', 'Whispering in the dark', 'Staying home'], correctIndex: 0, feedback: 'Show and tell builds speaking confidence!' }
        },
        junior: {
          headline: 'SMART Lamb Goals & Club Presentations',
          sections: [
            {
              title: 'Writing a SMART Goal',
              body: 'Example: "I will practice leading and setting up my market lamb 3 times a week for 20 minutes from May 1st to August 1st to prepare for county fair showmanship."'
            }
          ],
          quickCheck: { question: 'Which goal is properly formatted as a SMART goal?', options: ['"I will weigh my lamb every Sunday morning and record ADG in my record book through fair day."', '"I want a big trophy."', '"Maybe I will get a lamb."'], correctIndex: 0, feedback: 'Specific, measurable, and time-bound goals drive mastery.' }
        },
        intermediate: {
          headline: 'Market Buyer Sponsor Letters & Auction Invitations',
          sections: [{ title: 'Buyer Letter Elements', body: '1. Introduction: Your name, age, 4-H club, years in sheep project.\n2. Story: What you learned about sheep nutrition and daily gain.\n3. Invitation: Fair auction date, time, buyer registration, and livestock barbecue.\n4. Future Plans: How earnings fund college savings or next year’s project.' }],
          quickCheck: { question: 'What should always be included in a market buyer invitation letter?', options: ['Your project learning, how proceeds will be used, and auction date/location details', 'Demands for money', 'Complaints about chores'], correctIndex: 0, feedback: 'Professional letters explain project learning and invite community partnerships.' }
        },
        senior: {
          headline: 'Junior Leader Mentorship & Organizing County Sheep Workshops',
          sections: [{ title: 'Mentoring Younger Members', body: 'Senior members lead hands-on clinics teaching younger members how to safely catch, shear, trim hooves, and brace lambs.' }],
          quickCheck: { question: 'What is the highest demonstration of 4-H project mastery for a senior sheep exhibitor?', options: ['Hosting clinics to mentor younger first-year members in showmanship and care', 'Only entering shows where you win', 'Selling your lamb early'], correctIndex: 0, feedback: 'True leadership empowers younger youth and builds the future of agriculture.' }
        }
      },
      quizQuestions: [
        { id: 'sh_cg_q1', question: 'When preparing a demonstration poster on sheep shearing, what makes the poster most effective?', options: ['High contrast colors, clear lettering readable from 4-6 feet away, and organized bullet points', 'Tiny writing in yellow pencil', 'No words at all'], correctIndex: 0, explanation: 'Readable high-contrast text and clear visuals make posters educational.', division: 'junior' }
      ]
    }
  ]
};
