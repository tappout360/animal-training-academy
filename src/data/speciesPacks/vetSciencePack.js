// WarrenWise Youth Animal Training Academy
// Species Pack: Veterinary Science Knowledge Track (No Owned Animal Required)
// Complete 9-Module Standardized Curriculum with Age-Differentiated Content

export const VET_SCIENCE_PACK = {
  id: 'vet_science',
  name: 'Veterinary Science Knowledge Track',
  species: 'Veterinary Science (Comparative Animal Health)',
  category: 'Veterinary & Comparative Science',
  icon: 'Activity',
  version: '1.0.0',
  lastVerifiedDate: '2026-09-22',
  verifiedBy: 'State Extension Veterinary Extension Specialist & DVM Educational Advisory Panel',
  description: 'Comprehensive 4-H veterinary science knowledge track requiring no owned animal. Covers comparative anatomy, clinical restraint, immunology, diagnostic parasitology, SOAP charting, surgical asepsis, and One Health principles.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Systems Anatomy',
      order: 1,
      estimatedMinutes: 20,
      objectives: [
        'Compare major organ systems across species: Skeletal, Circulatory, Respiratory, and Digestive',
        'Distinguish monogastric (swine, dogs), ruminant (cattle, sheep, goats), and hindgut fermenter (horses, rabbits) digestive designs',
        'Learn directional anatomical terminology (cranial, caudal, dorsal, ventral, medial, lateral)'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Inside Our Wonderful Animal Friends!',
          readAloud: 'Every animal has a beating heart, lungs that breathe cool fresh air, strong bones to run fast, and a tummy that digests delicious meals!',
          sections: [
            {
              title: 'Bodies Big and Small',
              body: 'Animals have skeletons inside just like us! A dog’s heart beats faster than a horse’s heart, and a cow has a giant tummy with four special rooms to digest tough grass.'
            }
          ],
          quickCheck: {
            question: 'What organ pumps red blood and oxygen to all parts of an animal’s body?',
            options: ['The heart', 'The ear', 'The tail'],
            correctIndex: 0,
            feedback: 'The heart pumps life-giving blood to all tissues and organs!'
          }
        },
        junior: {
          headline: 'Comparative Digestive Anatomy & Body Planes',
          sections: [
            {
              title: 'Comparing Digestive Systems',
              body: 'Veterinary medicine compares how different species adapt to their diets:\n• Monogastric (Simple Stomach): Humans, dogs, cats, swine. One stomach compartment where enzymatic digestion occurs.\n• Ruminants: Cattle, sheep, goats. Complex 4-compartment stomach (Rumen, Reticulum, Omasum, Abomasum) fermenting cellulose fiber.\n• Hindgut Fermenters: Horses and rabbits. Simple stomach followed by an enlarged cecum and large colon for microbial fermentation.'
            },
            {
              title: 'Directional Anatomy Terms',
              body: '• Cranial: Toward the head / nose.\n• Caudal: Toward the tail.\n• Dorsal: Toward the back or spine.\n• Ventral: Toward the belly or lower surface.\n• Medial: Toward the middle midline.\n• Lateral: Toward the outer sides.'
            }
          ],
          quickCheck: {
            question: 'Which anatomical directional term describes moving toward the animal’s back or spine?',
            options: ['Dorsal', 'Ventral', 'Caudal', 'Medial'],
            correctIndex: 0,
            feedback: 'Dorsal refers to the upper back surface (like the dorsal fin on a dolphin).'
          }
        },
        intermediate: {
          headline: 'Cardiorespiratory Physiology & The Skeletal Framework',
          sections: [
            {
              title: 'Cardiovascular and Respiratory Mechanics',
              body: 'Oxygenated blood is propelled by the left ventricle through the aorta into systemic capillary beds. Deoxygenated blood returns through the vena cava into the right atrium, passes through the tricuspid valve into the right ventricle, and is pumped via pulmonary arteries to alveolar capillary networks for gas exchange. Avian species possess unique air sacs enabling continuous unidirectional airflow, distinct from mammalian tidal lung ventilation.'
            }
          ],
          quickCheck: {
            question: 'How does avian respiratory anatomy differ from mammalian lung respiration?',
            options: ['Birds possess non-vascular air sacs that drive unidirectional airflow through rigid parabronchi', 'Birds breathe through their skin', 'Birds have four lungs instead of two'],
            correctIndex: 0,
            feedback: 'Avian air sacs allow continuous one-way airflow across parabronchial capillary networks.'
          }
        },
        senior: {
          headline: 'Endocrine Regulation, Renal Function & Histology',
          sections: [
            {
              title: 'Renal Counter-Current Mechanisms and Endocrine Feedback',
              body: 'The nephron is the microscopic functional filtration unit of the kidney. The Glomerulus filters plasma into Bowman’s capsule; the Loop of Henle maintains a hyperosmotic corticomedullary gradient utilizing counter-current multiplication; collecting ducts reabsorb water under the influence of Antidiuretic Hormone (ADH / Vasopressin). Endocrine balance involves negative feedback loops: the hypothalamic-pituitary-adrenocortical (HPA) axis regulates systemic cortisol in response to stress.'
            }
          ],
          quickCheck: {
            question: 'What microscopic subunit serves as the primary functional filtration and reabsorption structure of the mammalian kidney?',
            options: ['The nephron', 'The alveolus', 'The neuron', 'The osteocyte'],
            correctIndex: 0,
            feedback: 'The nephron filters plasma and regulates fluid, electrolyte, and waste balance.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_bb_q1',
          question: 'Which of the following animals is classified as a "hindgut fermenter" with an enlarged cecum for fiber breakdown?',
          options: ['Horse', 'Pig', 'Dog', 'Cow'],
          correctIndex: 0,
          explanation: 'Horses and rabbits are hindgut fermenters; microbial fermentation occurs in their enlarged cecum and colon.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Clinical Care, Safety & Restraint',
      order: 2,
      estimatedMinutes: 20,
      objectives: [
        'Understand veterinary hospital safety protocols, OSHA hazard guidelines, and personal protective equipment (PPE)',
        'Master humane physical restraint methods for companion animals and livestock (towels, cat muzzles, headgates, twitches)',
        'Demonstrate safe handling of biological sharps and biomedical hazardous waste'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Vet Helpers & Animal Safety!',
          readAloud: 'Veterinarians are animal doctors who wear clean white coats or colorful scrubs! They use gentle hands and calm voices so pets never feel scared.',
          sections: [
            {
              title: 'Staying Safe Around Patients',
              body: 'Always listen closely when the veterinarian is examining a dog or cat. We move quietly, never poke animals, and wash our hands with warm soapy water after every patient!'
            }
          ],
          quickCheck: {
            question: 'What should we always do after touching or helping examine any animal?',
            options: ['Wash our hands with warm water and soap', 'Rub our eyes immediately', 'Wipe our hands on our pants'],
            correctIndex: 0,
            feedback: 'Always wash hands thoroughly to remove germs and stay clean!'
          }
        },
        junior: {
          headline: 'Safe Physical Restraint & Hospital Hygiene',
          sections: [
            {
              title: 'Restraint Techniques by Species',
              body: '• Cats: "Less is more." Use the "burrito wrap" technique with a soft bath towel to gently secure legs while reducing feline fear and panicky clawing.\n• Dogs: Sternal recumbency (sitting/lying upright) for blood draws from the cephalic vein on the front leg; lateral recumbency (lying flat on their side) for radiographs or saphenous venipuncture. Use basket muzzles when an injured animal is fearful or in acute pain.\n• Cattle: Securely locked in a heavy-duty squeeze chute headgate before any examination.\n• Sharps Safety: All hypodermic needles, scalpel blades, and broken glass ampoules MUST be immediately discarded into a rigid, puncture-proof red OSHA Sharps container—never recapped with two hands or thrown in regular trash!'
            }
          ],
          quickCheck: {
            question: 'Where must all used hypodermic needles and scalpel blades be discarded immediately after use in a veterinary clinic?',
            options: ['In a rigid, puncture-proof red Sharps container', 'In the regular floor wastebasket', 'In an open cardboard box'],
            correctIndex: 0,
            feedback: 'Used needles must go directly into an approved, puncture-proof Sharps container to prevent accidental needle-stick injury.'
          }
        },
        intermediate: {
          headline: 'Fear-Free Veterinary Practice & Occupational Radiation Safety',
          sections: [
            {
              title: 'Minimizing FAS (Fear, Anxiety, Stress) & PPE Protocols',
              body: 'Modern clinical care utilizes "Fear-Free" philosophies: calming pheromones (Feliway for felines, Adaptil for canines), non-slip examination mats, and treats. When assisting with diagnostic radiography (X-rays), staff must don certified lead PPE (0.5 mm lead-equivalent apron, thyroid shield, leaded gloves) and wear a personal thermoluminescent dosimeter (TLD badge) to monitor cumulative ionizing radiation exposure.'
            }
          ],
          quickCheck: {
            question: 'What protective equipment is required when assisting with animal patient radiography (X-rays)?',
            options: ['Lead apron, lead thyroid shield, lead gloves, and a radiation monitoring badge', 'Sunglasses and a raincoat', 'A warm winter coat'],
            correctIndex: 0,
            feedback: 'Lead PPE protects clinical personnel against scatter ionizing radiation.'
          }
        },
        senior: {
          headline: 'Chemical Restraint Protocols, Reversal Agents & Clinic Hazard Communications',
          sections: [
            {
              title: 'Sedation Pharmacology & Reversal Dynamics',
              body: 'When physical restraint poses severe injury risks to patient or staff, chemical restraint is indicated under veterinary direction. Alpha-2 adrenergic agonists (dexmedetomidine, xylazine) produce profound sedation, analgesia, and muscle relaxation. Their effects are rapidly reversible with specific alpha-2 antagonists (atipamezole, yohimbine). Clinics comply with OSHA Hazard Communication Standards, maintaining active Safety Data Sheets (SDS) for all chemical solutions, anesthetic gases (isoflurane scavenging systems), and sterilants.'
            }
          ],
          quickCheck: {
            question: 'Which specific pharmacological reversal agent reverses the sedative effects of the alpha-2 agonist dexmedetomidine in veterinary patients?',
            options: ['Atipamezole (Antisedan)', 'Vitamin C', 'Penicillin', 'Epinephrine'],
            correctIndex: 0,
            feedback: 'Atipamezole competitively binds and antagonizes alpha-2 adrenergic receptors.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_dc_q1',
          question: 'What is the "burrito wrap" technique primarily used for in veterinary clinical handling?',
          options: ['Wrapping a fearful cat in a soft towel to safely control paws and reduce stress during examination', 'Heating up veterinary food', 'Bandaging a fractured leg', 'Grooming a horse mane'],
          correctIndex: 0,
          explanation: 'Towel wrapping wraps the cat securely, shielding claws and providing a calming cocoon.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Comparative Nutrition & Metabolic Health',
      order: 3,
      estimatedMinutes: 20,
      objectives: [
        'Understand the six essential nutrient classes: Water, Protein, Carbohydrates, Lipids, Vitamins, Minerals',
        'Recognize species-specific nutritional requirements (Taurine in obligate carnivore felines, Vitamin C in cavies)',
        'Identify acute metabolic disorders: Bovine Ketosis, Milk Fever (Hypocalcemia), and Equine Rhabdomyolysis'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Good Food for Every Animal!',
          readAloud: 'Different animals need different kinds of food! Cats are meat-eaters, rabbits eat crunchy grass hay, and birds love seeds and insects.',
          sections: [
            {
              title: 'What Animals Eat',
              body: 'Animals cannot just eat whatever they want. Cats must eat cat food because it has special nutrients that keep their eyes bright and their hearts strong!'
            }
          ],
          quickCheck: {
            question: 'Why can’t a pet cat eat only dog food all the time?',
            options: ['Cats need special nutrients like taurine that are only found in cat food', 'Because dog food is shaped like bones', 'Because cats don’t have teeth'],
            correctIndex: 0,
            feedback: 'Cats are obligate carnivores with unique nutritional needs like taurine and arachidonic acid!'
          }
        },
        junior: {
          headline: 'Obligate Carnivores vs Herbivores & Essential Amino Acids',
          sections: [
            {
              title: 'Nutritional Adaptations Across Species',
              body: '• Obligate Carnivores (Cats): Cannot synthesize essential taurine, arachidonic acid, or preformed Vitamin A from plant precursors. Taurine deficiency causes feline central retinal degeneration (blindness) and dilated cardiomyopathy (heart failure).\n• Non-Ruminant Herbivores (Guinea Pigs): Lack the L-gulonolactone oxidase enzyme; cannot synthesize Vitamin C (ascorbic acid) and develop fatal scurvy without daily dietary supplementation.\n• Ruminants: Rumen microflora synthesize all B-complex vitamins and Vitamin K from precursor feedstuffs.'
            }
          ],
          quickCheck: {
            question: 'What fatal cardiac condition develops in domestic cats fed a diet deficient in the essential amino sulfonic acid taurine?',
            options: ['Dilated Cardiomyopathy (DCM)', 'Scrapie', 'Foot rot', 'Colic'],
            correctIndex: 0,
            feedback: 'Taurine deficiency triggers feline dilated cardiomyopathy and irreversible retinal degeneration.'
          }
        },
        intermediate: {
          headline: 'Metabolic Disorders: Hypocalcemia & Negative Energy Balance',
          sections: [
            {
              title: 'Pathophysiology of Metabolic Collapse',
              body: '• Parturient Paresis (Milk Fever): Occurs in high-yielding dairy cows immediately post-calving. Sudden colossal calcium demand for colostrum secretion exceeds physiological parathyroid hormone (PTH) osteoclast resorption, dropping serum calcium below 5 mg/dL. The cow exhibits flaccid paralysis (lying in sternal recumbency with an "S" curved neck) requiring urgent veterinary intravenous calcium borogluconate.\n• Ketosis (Acetonemia): High-producing ruminants enter severe negative energy balance. Adipose tissue mobilizes free fatty acids, hepatic beta-oxidation exceeds capacity, and ketone bodies (acetone, beta-hydroxybutyrate) accumulate in blood, milk, and urine.'
            }
          ],
          quickCheck: {
            question: 'What acute mineral deficiency triggers flaccid paralysis ("milk fever") in high-producing post-parturient dairy cows?',
            options: ['Hypocalcemia (acute calcium deficiency)', 'Iron deficiency', 'Excessive vitamin C', 'Salt toxicity'],
            correctIndex: 0,
            feedback: 'Hypocalcemia causes acute flaccid neuromuscular paralysis in fresh dairy cows.'
          }
        },
        senior: {
          headline: 'Enteral/Parenteral Nutrition, Refeeding Syndrome & Renal Diets',
          sections: [
            {
              title: 'Clinical Critical Care Nutrition',
              body: 'In anorexic patients, calculating Resting Energy Requirement (RER = 70 * BW_kg^0.75) determines target caloric prescription. Reintroducing nutrition too rapidly in starved animals causes Refeeding Syndrome: sudden insulin spikes drive extracellular phosphorus and potassium intracellularly, triggering fatal cardiac arrhythmias and hemolytic anemia. In chronic kidney disease (CKD), clinical renal diets restrict dietary phosphorus and provide high-biological-value protein to minimize nitrogenous uremic toxins.'
            }
          ],
          quickCheck: {
            question: 'What life-threatening electrolyte shift occurs during "Refeeding Syndrome" in severely malnourished animals?',
            options: ['Intense intracellular shift of phosphorus and potassium, causing profound hypophosphatemia and cardiac collapse', 'Excessive blood calcium', 'Dehydration only'],
            correctIndex: 0,
            feedback: 'Refeeding triggers rapid insulin secretion that drives phosphorus intracellularly, causing severe hypophosphatemia.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_nt_q1',
          question: 'Which species is an "obligate carnivore" that strictly requires animal tissue proteins containing taurine and arachidonic acid?',
          options: ['Domestic Cat (Felis catus)', 'Rabbit', 'Sheep', 'Goat'],
          correctIndex: 0,
          explanation: 'Cats are true obligate carnivores requiring essential nutrients exclusively found in animal meat tissues.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'health_biosecurity',
      topicId: 'health_biosecurity',
      title: 'Disease Principles, Immunology & Biosecurity',
      order: 4,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate pathogens: Viruses, Bacteria, Fungi, Protozoa, and Prions',
        'Understand Innate vs Adaptive Immunity and maternal colostrum transfer',
        'Apply the "One Health" framework connecting human, animal, and environmental health'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Germ Busters & Animal Shields!',
          readAloud: 'Germs are microscopic bugs that we cannot see with our eyes! Vaccines are like superhero training shields that teach an animal’s body how to fight off sickness.',
          sections: [
            {
              title: 'How Bodies Fight Germs',
              body: 'Mommy animals give their newborn babies special milk called colostrum. It is full of strong shields to keep the baby safe and warm during their first days of life!'
            }
          ],
          quickCheck: {
            question: 'What is the very first special milk a mother animal gives her newborn called?',
            options: ['Colostrum', 'Soda pop', 'Chocolate milk'],
            correctIndex: 0,
            feedback: 'Colostrum is the antibody-rich first milk that protects newborns from disease!'
          }
        },
        junior: {
          headline: 'Types of Pathogens & How Vaccines Work',
          sections: [
            {
              title: 'Classifying Microscopic Pathogens',
              body: '• Viruses: Non-living protein shells containing genetic code (DNA/RNA). Require a host cell to replicate. Examples: Rabies, Parvovirus, Avian Influenza.\n• Bacteria: Single-celled prokaryotic organisms. Some are beneficial, while others cause disease (e.g., Salmonella, Clostridium, Streptococcus). Can be treated with targeted veterinary antibiotics.\n• Fungi: Spore-forming organisms like Ringworm (Dermatophytosis), which is actually a fungus, NOT a worm!\n• Protozoa: Microscopic single-celled parasites (e.g., Coccidia, Giardia).\n• Prions: Misfolded infectious proteins causing transmissible encephalopathies (Scrapie, BSE, CWD).'
            }
          ],
          quickCheck: {
            question: 'What type of organism actually causes "Ringworm" in animals and humans?',
            options: ['A fungus (dermatophyte), not a worm!', 'A parasitic earthworm', 'A virus', 'A bacterium'],
            correctIndex: 0,
            feedback: 'Despite its common name, ringworm is caused by dermatophyte fungi, not a worm.'
          }
        },
        intermediate: {
          headline: 'Immunology Mechanics & The One Health Triad',
          sections: [
            {
              title: 'Innate vs Adaptive Immunity and One Health',
              body: '• Innate Immunity: Non-specific first line of defense (skin barrier, stomach acid, phagocytic neutrophils and macrophages).\n• Adaptive Immunity: Highly specific response mediated by B-lymphocytes (producing circulating immunoglobulin antibodies: IgG, IgM, IgA) and T-lymphocytes (cell-mediated cytotoxicity). Memory cells enable rapid, overwhelming secondary immune responses upon re-exposure.\n• One Health: Over 60% of all known infectious human diseases, and 75% of emerging infectious diseases (e.g., Rabies, West Nile, Lyme, COVID-19, Avian Flu), are zoonotic—jumping between animals and humans through environmental interfaces.'
            }
          ],
          quickCheck: {
            question: 'What percentage of emerging human infectious diseases are zoonotic (originating from animals)?',
            options: ['Approximately 75%', 'Less than 5%', 'Exactly 0%', '50%'],
            correctIndex: 0,
            feedback: 'Roughly 75% of emerging infectious diseases in humans originate from animal hosts.'
          }
        },
        senior: {
          headline: 'Pathogen Virulence Factors, Antimicrobial Resistance & Epizootiology',
          sections: [
            {
              title: 'Antimicrobial Stewardship and Epidemiology',
              body: 'The overuse of broad-spectrum antimicrobials exerts selective pressure, proliferating resistant strains (MRSA, ESBL-producing Enterobacteriaceae) via horizontal gene transfer (plasmids carrying beta-lactamase). The Veterinary Feed Directive (VFD) mandates licensed veterinary oversight for medically important antimicrobials in animal feeds. Epizootic containment employs R0 (basic reproduction number) modeling, contact tracing, ring vaccination, and strict biocontainment zoning.'
            }
          ],
          quickCheck: {
            question: 'What federal policy in the United States eliminated over-the-counter use of medically important antibiotics in livestock feeds, requiring licensed veterinary authorization?',
            options: ['The Veterinary Feed Directive (VFD)', 'The Food and Safety Act of 1906', 'The Clean Barn Act'],
            correctIndex: 0,
            feedback: 'The Veterinary Feed Directive (VFD) ended OTC feed antibiotics to combat antimicrobial resistance.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_hb_q1',
          question: 'What is a "zoonotic disease"?',
          options: ['A disease that can be transmitted naturally between animals and humans', 'A disease found only inside a zoo exhibit', 'A non-infectious broken bone', 'A nutritional deficiency in plants'],
          correctIndex: 0,
          explanation: 'Zoonotic diseases (e.g. rabies, leptospirosis, salmonella) spread between animals and humans.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'handling_welfare',
      topicId: 'handling_welfare',
      title: 'Parasitology & Diagnostics',
      order: 5,
      estimatedMinutes: 20,
      objectives: [
        'Identify internal endoparasites (roundworms, tapeworms, hookworms, coccidia) and external ectoparasites (fleas, ticks, lice, mites)',
        'Master the diagnostic fecal flotation procedure and microscope slide reading',
        'Understand clinical diagnostic tools: Refractometer, Packed Cell Volume (PCV) centrifuge, Stethoscope, and Otoscope'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Looking Close with Animal Detectives!',
          readAloud: 'Veterinary detectives look through microscopes to find tiny bugs that hide inside animals! When we find them, we can help the pet feel so much better.',
          sections: [
            {
              title: 'Tiny Pesky Bugs',
              body: 'Fleas make pets scratch and itch. Ticks hide in tall summer grass. By checking our pets every day, we keep them happy and safe from pesky bugs!'
            }
          ],
          quickCheck: {
            question: 'What special science tool does a veterinary doctor look through to see microscopic cells and parasite eggs?',
            options: ['A microscope', 'A telescope', 'A kaleidoscope'],
            correctIndex: 0,
            feedback: 'Microscopes magnify tiny parasite eggs and cells so veterinarians can identify them!'
          }
        },
        junior: {
          headline: 'Common Parasites & Fecal Flotation Mechanics',
          sections: [
            {
              title: 'Endoparasites and The Fecal Float',
              body: '• Internal Parasites (Endoparasites): Roundworms (Toxocara - spaghetti-like nematodes), Hookworms (Ancylostoma - blood-suckers causing anemia), Tapeworms (Dipylidium - transmitted when pets swallow fleas, looking like rice grains in stool), Coccidia (protozoal oocysts).\n• The Fecal Flotation Principle: Parasite ova are buoyant. By mixing stool in a flotation solution (e.g., sodium nitrate or zinc sulfate) with a higher specific gravity (1.20 to 1.25) than the eggs (1.05 to 1.15), the parasite eggs float to the top meniscus where they adhere to a glass coverslip for microscopic examination under 10x and 40x magnification!'
            }
          ],
          quickCheck: {
            question: 'Why do parasite eggs float to the top of the vial during a veterinary fecal flotation test?',
            options: ['The flotation liquid has a higher specific gravity (density) than the parasite eggs, causing them to float to the surface', 'Parasite eggs have wings that flap', 'The liquid dissolves all the eggs'],
            correctIndex: 0,
            feedback: 'Density differences cause lighter parasite ova to float to the surface meniscus.'
          }
        },
        intermediate: {
          headline: 'Hematology Diagnostics: PCV, Total Solids & Urinalysis',
          sections: [
            {
              title: 'In-Clinic Laboratory Diagnostics',
              body: '• Packed Cell Volume (PCV / Hematocrit): Microhematocrit tube centrifuged to separate blood into three layers:\n  1. Red blood cell layer at bottom (normal canine 37-55%, feline 30-45%).\n  2. Buffy coat in middle (white blood cells and platelets).\n  3. Plasma at top.\n• Refractometer: Measures Total Plasma Protein (total solids in g/dL) and Urine Specific Gravity (USG; evaluating kidney concentrating capability, e.g. normal feline USG > 1.035).'
            }
          ],
          quickCheck: {
            question: 'What is the middle whitish layer containing white blood cells and platelets called after centrifuging a blood microhematocrit tube?',
            options: ['The buffy coat', 'The plasma crown', 'The red cell pack', 'The meniscus'],
            correctIndex: 0,
            feedback: 'The buffy coat contains concentrated leukocytes and thrombocytes (white blood cells and platelets).'
          }
        },
        senior: {
          headline: 'Serology (ELISA), Molecular Diagnostics (PCR) & Cytological Interpretation',
          sections: [
            {
              title: 'Advanced Diagnostic Methodologies',
              body: 'Point-of-care serology utilizes Enzyme-Linked Immunosorbent Assays (ELISA) to detect circulating antigens (e.g. Dirofilaria immitis heartworm female uterine antigen, FeLV p27 capsid protein) or antibodies (FIV antibodies, Lyme C6 peptide). Polymerase Chain Reaction (PCR) amplifies trace pathogen DNA/RNA sequences with extreme sensitivity. Handlers evaluate fine-needle aspirate cytology: differentiating suppurative septic inflammation (degenerative neutrophils with intracellular bacteria) from neoplastic round cell populations.'
            }
          ],
          quickCheck: {
            question: 'What laboratory technique exponentially amplifies specific pathogen DNA fragments to confirm infectious disease diagnoses?',
            options: ['Polymerase Chain Reaction (PCR)', 'Fecal flotation', 'Refractometry', 'Gross necropsy'],
            correctIndex: 0,
            feedback: 'PCR amplifies targeted nucleic acid sequences with unmatched diagnostic sensitivity.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_dg_q1',
          question: 'Which common internal parasite sheds proglottid segments in an animal’s feces that resemble crawling grains of white rice?',
          options: ['Tapeworm (Cestode)', 'Heartworm', 'Roundworm', 'Botfly'],
          correctIndex: 0,
          explanation: 'Tapeworms shed egg-filled segments (proglottids) that look like grains of rice around the rectum.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Clinical Records & Medical Charting',
      order: 6,
      estimatedMinutes: 20,
      objectives: [
        'Master the veterinary SOAP medical record format (Subjective, Objective, Assessment, Plan)',
        'Understand medical legal requirements, patient confidentiality, and rabies certification logs',
        'Learn prescription drug labeling regulations and meat/milk withdrawal periods in food animals'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Writing Patient Checkups!',
          readAloud: 'Every patient at the clinic has their very own medical folder! The vet writes down how much the pet weighs, what they ate, and what medicine helps them.',
          sections: [
            {
              title: 'Animal Medical Charts',
              body: 'Doctors write careful notes so everyone in the hospital knows how to take care of the pet. We never write silly scribbles in real patient files!'
            }
          ],
          quickCheck: {
            question: 'Why does a veterinary doctor write down notes every time they examine an animal patient?',
            options: ['To keep an accurate history of the animal’s health, treatments, and medicines', 'To practice their penmanship only', 'Because the animal asks them to'],
            correctIndex: 0,
            feedback: 'Accurate medical charts ensure consistent, safe, and legal patient care!'
          }
        },
        junior: {
          headline: 'The SOAP Medical Record Method',
          sections: [
            {
              title: 'Mastering SOAP Charting',
              body: 'Veterinary professionals record medical entries using the universal SOAP format:\n• S - Subjective: The owner’s report and observations ("Dog has been vomiting for 2 days and appears lethargic").\n• O - Objective: Measurable, factual data gathered by clinical staff (Temperature: 102.1°F, Pulse: 110 bpm, Weight: 42 lbs, Capillary Refill Time: 1.5s).\n• A - Assessment: The veterinarian’s professional diagnosis or differential diagnoses based on findings ("Mild dehydration secondary to acute gastroenteritis").\n• P - Plan: Action steps ordered by the veterinarian (Diagnostic blood panel, IV fluids, antiemetic medication, recheck in 24 hours).'
            }
          ],
          quickCheck: {
            question: 'Under which letter of the SOAP format do measurable clinical vitals (temperature, pulse, weight) belong?',
            options: ['O (Objective)', 'S (Subjective)', 'A (Assessment)', 'P (Plan)'],
            correctIndex: 0,
            feedback: 'Measurable, verifiable physical data belongs under Objective (O).'
          }
        },
        intermediate: {
          headline: 'Prescription Labeling & Food Animal Withdrawal Windows',
          sections: [
            {
              title: 'Legal Drug Dispensing & Withdrawal Periods',
              body: 'All dispensed veterinary prescription medications must legally feature complete labeling: clinic name/phone, prescribing veterinarian name, client/patient name, drug name, concentration, clear administration directions ("Give 1 tablet by mouth every 12 hours for 7 days"), expiration date, and cautionary warnings.\n• Food Animal Withdrawal Time: The mandatory time that must elapse between the last administration of a drug to a food animal and the harvest of that animal’s meat or milk to ensure zero pharmaceutical residue exceeds FDA safe limits.'
            }
          ],
          quickCheck: {
            question: 'What is a food animal "withdrawal time"?',
            options: ['The legally required time between drug administration and when meat or milk can be safely harvested for human consumption', 'The time it takes to walk an animal into a stall', 'The time an animal sleeps at night'],
            correctIndex: 0,
            feedback: 'Withdrawal periods ensure drug residues clear the body before food products enter the food supply.'
          }
        },
        senior: {
          headline: 'Electronic Medical Records (EMR), HIPAA-Equivalents & Legal Custody',
          sections: [
            {
              title: 'Veterinary Medical Jurisprudence and Medical Record Integrity',
              body: 'Medical records are legal property of the veterinary facility, while clients possess the right to copies of diagnostic data. Medical errors must never be erased, whited-out, or deleted; in paper charts, errors are crossed through with a single line, initialed, and dated. In Electronic Medical Records (EMR), audit logs track all entry timestamps, edits, and practitioner credentials to withstand legal malpractice scrutiny.'
            }
          ],
          quickCheck: {
            question: 'How must an error in an official paper veterinary medical chart legally be corrected?',
            options: ['Draw a single strike-through line, write the correct note, initial, and date the change', 'Apply correction fluid (white-out) and write over it', 'Tear the page out of the binder and start over'],
            correctIndex: 0,
            feedback: 'Single strike-through with initials and date preserves transparency and legal admissibility.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_rk_q1',
          question: 'What does the acronym "SOAP" stand for in veterinary medical charting?',
          options: ['Subjective, Objective, Assessment, Plan', 'Soap, Operation, Animals, Paws', 'Symptoms, Observations, Action, Prescription', 'Standard, Optional, Actual, Procedure'],
          correctIndex: 0,
          explanation: 'SOAP stands for Subjective, Objective, Assessment, and Plan.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Surgical Foundations & Aseptic Technique',
      order: 7,
      estimatedMinutes: 20,
      objectives: [
        'Differentiate Antiseptics (for living tissue) vs Disinfectants (for non-living surfaces) vs Sterilization',
        'Master the surgical hand scrub, sterile gowning/gloving, and maintaining the operating room sterile field',
        'Identify standard surgical instruments: Hemostatic forceps, Scalpel handles, Needle drivers, and Tissue forceps'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Animal Doctors in Clean Blue Coats!',
          readAloud: 'When an animal needs surgery, doctors wash their hands for a super long time and put on clean sterile gloves and blue coats so no germs can touch the patient!',
          sections: [
            {
              title: 'The Super-Clean Operating Room',
              body: 'Everything in surgery is clean and quiet. Veterinarians wear masks over their nose and mouth so they keep the patient completely safe from germs.'
            }
          ],
          quickCheck: {
            question: 'What do veterinary surgeons wear on their hands during surgery to keep everything sterile and germ-free?',
            options: ['Sterile surgical gloves', 'Winter wool mittens', 'Gardening gloves with dirt'],
            correctIndex: 0,
            feedback: 'Sterile surgical gloves protect surgical patients from contamination.'
          }
        },
        junior: {
          headline: 'Surgical Asepsis & Surgical Instruments',
          sections: [
            {
              title: 'Maintaining the Sterile Field',
              body: '• Sterilization: The complete destruction of all forms of microbial life, including spores (achieved via pressurized steam autoclaves at 250°F / 121°C for 15-30 minutes at 15 psi).\n• Sterile Field: The draped area including the patient incision site, surgical instrument stand (Mayo stand), and gown front from chest to sterile drape level. Sterile team members touch ONLY sterile items. If an unsterile item touches a sterile field, it is contaminated!\n• Core Instruments: Scalpel #3 & #4 handles; Mayo and Metzenbaum dissecting scissors; Kelly and Crile hemostatic forceps (to clamp blood vessels); Olsen-Hegar needle holders (to hold suture needles).'
            }
          ],
          quickCheck: {
            question: 'What machine uses high-pressure steam at 250°F (121°C) to sterilize surgical instruments and eliminate all bacterial spores?',
            options: ['An Autoclave', 'A Microwave oven', 'A Dishwasher', 'A Refrigerator'],
            correctIndex: 0,
            feedback: 'Autoclaves use pressurized steam to achieve complete sterilization.'
          }
        },
        intermediate: {
          headline: 'Surgical Scrub Protocols & Suture Material Science',
          sections: [
            {
              title: 'Surgical Hand Scrubbing and Suture Selection',
              body: '• Surgical Scrub: Scrub hands and forearms starting from clean fingertips progressing down to elbows in circular strokes using chlorhexidine or povidone-iodine. Keep hands elevated higher than elbows at all times so rinse water flows away from hands.\n• Suture Characteristics:\n  - Absorbable (hydrolyzed/enzymatically degraded by body): Polydioxanone (PDS), Polyglactin 910 (Vicryl), Chromic gut. Used for internal visceral closures.\n  - Non-absorbable (permanent or requiring removal): Nylon (Ethilon), Polypropylene (Prolene), Stainless steel. Used for external skin sutures.'
            }
          ],
          quickCheck: {
            question: 'During a pre-surgical hand scrub, why must hands and forearms be held higher than elbows at all times?',
            options: ['So rinse water flows down away from clean fingers toward non-sterile elbows', 'To prevent arms from falling asleep', 'Because surgeons are tall'],
            correctIndex: 0,
            feedback: 'Keeping hands elevated ensures water drains from the cleanest area (hands) to less clean areas (elbows).'
          }
        },
        senior: {
          headline: 'Anesthetic Monitoring Dynamics, Reflexes & Hemodynamic Triage',
          sections: [
            {
              title: 'Intraoperative Monitoring and Anesthetic Depth',
              body: 'Senior veterinary science youth analyze hemodynamic monitoring: Capnography (measuring End-Tidal CO2; normal 35-45 mmHg), Pulse Oximetry (SpO2 > 95%), and Doppler Blood Pressure (Mean Arterial Pressure maintained > 60 mmHg to ensure renal perfusion). Depth of anesthesia is assessed through physical reflexes: palpebral reflex (blinking when medial canthus touched; sluggish in surgical plane), pedal withdrawal, and eye position (ventromedial rotation indicates adequate surgical stage III plane 2 depth).'
            }
          ],
          quickCheck: {
            question: 'What eye position typically indicates an appropriate surgical depth of anesthesia in canines and felines?',
            options: ['Ventromedial rotation (eyes rotated downward and inward)', 'Eyes staring wide awake looking upward', 'Eyes rapidly blinking'],
            correctIndex: 0,
            feedback: 'Ventromedial eye rotation indicates proper surgical stage III plane 2 anesthesia.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_sm_q1',
          question: 'Which instrument is specifically designed to clamp bleeding blood vessels during surgery to achieve hemostasis?',
          options: ['Hemostatic forceps (Kelly or Crile clamp)', 'Stethoscope', 'Scalpel handle', 'Otoscope'],
          correctIndex: 0,
          explanation: 'Hemostatic forceps clamp blood vessels to arrest bleeding and maintain hemostasis.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Bioethics, Welfare & Veterinary Oath',
      order: 8,
      estimatedMinutes: 20,
      objectives: [
        'Understand the Veterinarian’s Oath and ethical duty to relieve animal suffering',
        'Apply the Five Freedoms and Five Domains of Animal Welfare science',
        'Explore compassionate end-of-life care, euthanasia ethics, and veterinary disaster triage'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Always Caring with a Tender Heart!',
          readAloud: 'Veterinarians make a special promise to always help animals feel better, protect them from sickness, and treat every creature with great love and gentle care!',
          sections: [
            {
              title: 'A Promise to Help',
              body: 'When animals hurt or feel sick, they cannot speak human words. We have to be their voice, their protectors, and their kindest friends!'
            }
          ],
          quickCheck: {
            question: 'What is the most important promise a veterinarian makes to animals?',
            options: ['To use their skills to protect animal health and relieve suffering', 'To give every animal a balloon', 'To play games all day'],
            correctIndex: 0,
            feedback: 'Veterinarians swear an oath to protect animal health and relieve suffering.'
          }
        },
        junior: {
          headline: 'The Five Freedoms of Animal Welfare',
          sections: [
            {
              title: 'Universal Welfare Principles',
              body: 'Animal welfare science evaluates quality of life through the internationally recognized Five Freedoms:\n1. Freedom from Hunger and Thirst (ready access to fresh water and nutritious diet)\n2. Freedom from Discomfort (appropriate shelter and comfortable resting area)\n3. Freedom from Pain, Injury, or Disease (prevention or rapid diagnosis and treatment)\n4. Freedom to Express Normal Behavior (sufficient space, proper facilities, and company of the animal’s own kind)\n5. Freedom from Fear and Distress (conditions and care that avoid mental suffering)'
            }
          ],
          quickCheck: {
            question: 'Which of the Five Freedoms is satisfied by providing an animal with a dry, clean, comfortable shelter from winter wind and summer heat?',
            options: ['Freedom from Discomfort', 'Freedom from Hunger and Thirst', 'Freedom from Normal Behavior'],
            correctIndex: 0,
            feedback: 'Providing comfortable shelter and resting areas fulfills the Freedom from Discomfort.'
          }
        },
        intermediate: {
          headline: 'Euthanasia Ethics & The Human-Animal Bond',
          sections: [
            {
              title: 'Compassionate End-of-Life Decisions',
              body: 'Euthanasia (derived from Greek for "good death") is the humane termination of life to relieve intractable, unmanageable suffering. Veterinarians evaluate the HHHHHMM Quality of Life scale: Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, and More Good Days Than Bad. AVMA Euthanasia Guidelines require rapid loss of consciousness followed by cardiac and respiratory arrest without pain or distress (typically via intravenous sodium pentobarbital overdose).'
            }
          ],
          quickCheck: {
            question: 'What is the primary ethical goal of humane veterinary euthanasia?',
            options: ['To provide a rapid, peaceful, and painless release from intractable suffering and terminal disease', 'To avoid having to buy pet food', 'To make room for a new animal'],
            correctIndex: 0,
            feedback: 'Humane euthanasia provides compassionate release from untreatable suffering without distress.'
          }
        },
        senior: {
          headline: 'Bioethics in Biomedical Research & The 3 Rs (Replacement, Reduction, Refinement)',
          sections: [
            {
              title: 'The 3 Rs Framework and IACUC Oversight',
              body: 'When animals are involved in veterinary and biomedical research, ethical compliance is strictly governed by Institutional Animal Care and Use Committees (IACUC) under the Animal Welfare Act. Protocols must satisfy the 3 Rs:\n• Replacement: Using non-animal alternatives (computer modeling, in vitro cell cultures) whenever scientifically viable.\n• Reduction: Minimizing the statistical number of animals utilized while retaining valid data.\n• Refinement: Modifying experimental and husbandry procedures to eliminate or minimize pain, distress, and fear (advanced analgesia, environmental enrichment).'
            }
          ],
          quickCheck: {
            question: 'What do the "3 Rs" stand for in humane bioethical animal research?',
            options: ['Replacement, Reduction, and Refinement', 'Rabbits, Rodents, and Reptiles', 'Read, Review, and React', 'Rescue, Rehabilitate, and Release'],
            correctIndex: 0,
            feedback: 'The 3 Rs (Replacement, Reduction, Refinement) form the foundational ethics of animal research.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_ec_q1',
          question: 'Which international welfare framework outlines five foundational requirements including freedom from hunger, discomfort, pain, and fear?',
          options: ['The Five Freedoms of Animal Welfare', 'The Agricultural Trade Code', 'The AKC Show Standard', 'The Livestock Brand Register'],
          correctIndex: 0,
          explanation: 'The Five Freedoms define essential physical and mental welfare standards for all animals under human care.',
          division: 'junior'
        }
      ]
    },
    {
      id: 'goals_communication',
      topicId: 'goals_communication',
      title: 'Career Pathways, One Health & Leadership',
      order: 9,
      estimatedMinutes: 20,
      objectives: [
        'Explore veterinary career pathways: DVM / VMD, Licensed Veterinary Technician (LVT/CVT), Veterinary Assistant, Epidemiologist, Lab Pathologist',
        'Learn the academic prerequisites for veterinary medical college (NAVLE, VMCAS, animal contact hours)',
        'Champion community One Health initiatives: Rabies vaccination clinics and youth veterinary science workshops'
      ],
      ageContent: {
        cloverbud: {
          headline: 'Dreaming Big as Animal Doctors!',
          readAloud: 'Do you want to help animals when you grow up? You can study hard in school, be kind to all living pets, and learn about science!',
          sections: [
            {
              title: 'Helping Animals Every Day',
              body: 'There are many ways to work with animals! You can work at an animal clinic, help wildlife at a zoo, or teach people how to love their pets.'
            }
          ],
          quickCheck: {
            question: 'What is a great way to start getting ready to work with animals when you grow up?',
            options: ['Learning all about animal care, reading books, and treating all pets gently', 'Ignoring animals completely', 'Never going to school'],
            correctIndex: 0,
            feedback: 'Reading books, studying science, and being gentle with animals starts your journey!'
          }
        },
        junior: {
          headline: 'The Veterinary Health Team & Career Roles',
          sections: [
            {
              title: 'Roles Within the Veterinary Clinic',
              body: 'A veterinary hospital functions as a coordinated interdisciplinary team:\n• Veterinarian (DVM or VMD): 4 years undergraduate study + 4 years accredited veterinary college. Diagnoses disease, prescribes medication, and performs surgery.\n• Licensed Veterinary Technician (LVT / CVT / RVT): 2 to 4 year degree in veterinary technology, passing the VTNE. Administers anesthesia, places IV catheters, performs dental cleanings, runs lab tests, and manages nursing care.\n• Veterinary Assistant: Assists veterinarians and technicians with clinical restraint, patient comfort, sterilization, and client care.\n• Practice Manager: Coordinates business operations, inventory, and personnel.'
            }
          ],
          quickCheck: {
            question: 'Which three clinical duties can ONLY be legally performed by a licensed Veterinarian (DVM/VMD)?',
            options: ['Diagnose diseases, prescribe pharmaceutical medications, and perform surgery', 'Sweep floors, answer phones, and trim nails', 'Groom dogs, walk patients, and fill food bowls'],
            correctIndex: 0,
            feedback: 'Only licensed veterinarians may legally diagnose, prescribe medication, and perform surgical procedures.'
          }
        },
        intermediate: {
          headline: 'Veterinary School Preparation & Experience Tracking',
          sections: [
            {
              title: 'Preparing for Veterinary Medicine Pathways',
              body: 'Admission to veterinary medical college is exceptionally competitive. Aspiring candidates begin preparation in youth:\n• Rigorous STEM Curriculum: Advanced chemistry, biology, physics, genetics, biochemistry, and statistics.\n• Animal & Clinical Experience: Tracking verified contact hours shadowing licensed veterinarians across diverse disciplines (small animal, equine, food animal, laboratory animal, and wildlife).\n• Leadership & Communication: Demonstrating public leadership through 4-H club officer roles, community presentations, and veterinary science skillathons.'
            }
          ],
          quickCheck: {
            question: 'Why is tracking diverse veterinary clinical hours under a licensed veterinarian essential for aspiring veterinary students?',
            options: ['Veterinary admissions committees require verified hours to prove hands-on commitment and realistic industry insight', 'It is required to buy a stethoscope', 'It allows you to skip high school'],
            correctIndex: 0,
            feedback: 'Verified clinical shadowing hours prove dedication and realistic understanding of veterinary medicine.'
          }
        },
        senior: {
          headline: 'One Health Global Leadership, Epidemiology & Public Service',
          sections: [
            {
              title: 'One Health Interdisciplinary Leadership',
              body: 'Senior youth envision careers beyond clinical private practice: Public Health Epidemiologists (CDC, USDA APHIS, WHO) monitoring transboundary emerging zoonoses, food safety inspection veterinarians protecting national food security, and military veterinary corps officers. Handlers organize county rabies awareness drives and lead junior veterinary academies, communicating complex epidemiological concepts with scientific precision.'
            }
          ],
          quickCheck: {
            question: 'Which federal agency oversees animal health surveillance, preventing foreign animal diseases from entering United States livestock populations?',
            options: ['USDA APHIS (Animal and Plant Health Inspection Service)', 'The Federal Aviation Administration (FAA)', 'The Department of Transportation'],
            correctIndex: 0,
            feedback: 'USDA APHIS protects animal and plant health across the United States.'
          }
        }
      },
      quizQuestions: [
        {
          id: 'vs_gc_q1',
          question: 'What national licensure examination must graduates of accredited veterinary medical colleges pass to practice veterinary medicine in the United States?',
          options: ['NAVLE (North American Veterinary Licensing Examination)', 'MCAT', 'BAR exam', 'SAT'],
          correctIndex: 0,
          explanation: 'The NAVLE is the comprehensive licensing examination required to practice veterinary medicine across the United States and Canada.',
          division: 'junior'
        }
      ]
    }
  ]
};
