// WarrenWise Youth Animal Training Academy
// Species Pack: Poultry / Chickens (Gallus gallus domesticus)
// Phase 2 Pack Preview: Standardized 9-Module Architecture

export const POULTRY_PACK = {
  id: 'poultry',
  name: 'Poultry Project Academy',
  species: 'Poultry (Chickens, Waterfowl & Turkeys)',
  category: 'Avian Livestock',
  icon: 'Egg',
  version: '1.0.0-preview',
  lastVerifiedDate: '2026-09-01',
  verifiedBy: 'Extension Avian Health Specialist & APA/ABA Youth Committee',
  isPhase2Preview: true,
  description: 'Foundations of poultry exhibition, egg production, avian biosecurity (Avian Influenza prevention), breed standards, and APA showmanship.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: ['Differentiate Standard vs Bantam classes', 'Identify APA 6 American classes and feather types', 'Understand single comb, rose comb, and pea comb shapes'],
      ageContent: {
        cloverbud: {
          headline: 'Chirp! Feathers, Fluff & Funny Combs',
          sections: [{ title: 'Feather Friends', body: 'Chickens have soft feathers, pointy beaks, and a red crown on their head called a comb!' }],
          quickCheck: { question: 'What is the red part on top of a chicken’s head called?', options: ['A comb', 'A hat', 'A feather'], correctIndex: 0, feedback: 'Correct! Chickens have a red comb on top of their head.' }
        },
        junior: {
          headline: 'Large Fowl vs Bantams & Comb Types',
          sections: [{ title: 'Standard vs Bantam', body: 'Large Fowl are standard full-sized birds. Bantams are miniature chickens, typically 1/4 to 1/5 the size of large fowl. Common comb types include Single, Rose, Pea, Walnut, Cushion, and Strawberry.' }],
          quickCheck: { question: 'What is a bantam chicken?', options: ['A miniature chicken breed', 'A wild turkey', 'A swimming duck'], correctIndex: 0, feedback: 'Bantams are miniature varieties of chickens!' }
        }
      },
      quizQuestions: [
        { id: 'pt_bb_q1', question: 'Which of the following is NOT an APA recognized comb type?', options: ['Single comb', 'Pea comb', 'Spiral antenna comb', 'Rose comb'], correctIndex: 2, explanation: 'Spiral antenna does not exist. Single, Pea, Rose, and Walnut are recognized.', division: 'junior' }
      ]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: ['Coop security from predators (raccoons, weasels, hawks)', 'Roost bar spacing and nest box ratios', 'Ventilation and deep litter management'],
      ageContent: { junior: { headline: 'Safe Coops & Predator Proofing', sections: [{ title: 'Predator Protection', body: 'Use 1/2" hardware cloth instead of flimsy chicken wire to keep raccoons and weasels out of the coop.' }], quickCheck: { question: 'Why is 1/2" hardware cloth better than hex chicken wire?', options: ['It is stronger and stops raccoons from reaching through', 'It is shinier', 'Chickens like to eat it'], correctIndex: 0, feedback: 'Hardware cloth is predator-proof!' } } },
      quizQuestions: [{ id: 'pt_dc_q1', question: 'How many nesting boxes are recommended per 4 to 5 laying hens?', options: ['At least 1 nesting box', '50 boxes', 'None, hens nest on the roof'], correctIndex: 0, explanation: 'A ratio of 1 nest box per 4-5 hens prevents crowding.', division: 'junior' }]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 20,
      objectives: ['Understand Starter (20-22%), Grower (16-18%), and Layer (16% + 3.5-4% Calcium) rations', 'The role of insoluble grit in the muscular gizzard', 'Clean fresh water requirements'],
      ageContent: { junior: { headline: 'Grit & Gizzards', sections: [{ title: 'Why Chickens Eat Stones', body: 'Chickens have no teeth! They swallow tiny granite stones called grit, which sit in the muscular gizzard to grind grain seeds into digestible mash.' }], quickCheck: { question: 'What organ in the chicken uses grit to grind hard feed grains?', options: ['The gizzard', 'The crop', 'The comb'], correctIndex: 0, feedback: 'The muscular gizzard acts as the chicken’s teeth!' } } },
      quizQuestions: [{ id: 'pt_nu_q1', question: 'Why do laying hens require supplemental calcium (like crushed oyster shell)?', options: ['To build strong eggshells', 'To make their feathers grow faster', 'To crow louder'], correctIndex: 0, explanation: 'Eggshells are almost pure calcium carbonate.', division: 'junior' }]
    },
    {
      id: 'health_biosecurity',
      topicId: 'health_biosecurity',
      title: 'Health Observation & Biosecurity',
      order: 4,
      estimatedMinutes: 25,
      requiresSafetyReview: true,
      objectives: ['Highly Pathogenic Avian Influenza (HPAI) awareness and wild waterfowl separation', 'Checking for poultry lice, northern fowl mites, and scaly leg mites', 'Strict clean footwear and equipment sanitizing protocols'],
      ageContent: { junior: { headline: 'Avian Biosecurity & Keeping Germs Out', sections: [{ title: 'HPAI Prevention', body: 'Never allow wild ducks or geese near your flock. Have dedicated chore boots that are never worn off your property. Report sudden high mortality immediately to Extension or State Vet.' }], quickCheck: { question: 'What should you do before entering your chicken coop after visiting a fair?', options: ['Change clothes and wash chore boots with disinfectant', 'Walk right into the coop wearing muddy show boots', 'Feed your birds extra bread'], correctIndex: 0, feedback: 'Biosecurity stops deadly bird flu!' } } },
      quizQuestions: [{ id: 'pt_hb_q1', question: 'Which wild birds are the primary natural carriers of Avian Influenza viruses?', options: ['Wild waterfowl (ducks and geese)', 'Robins', 'Hummingbirds'], correctIndex: 0, explanation: 'Migratory waterfowl carry and shed influenza without showing illness.', division: 'junior' }]
    },
    {
      id: 'handling_welfare',
      topicId: 'handling_welfare',
      title: 'Handling & Welfare',
      order: 5,
      estimatedMinutes: 20,
      requiresSafetyReview: true,
      objectives: ['Hold bird with keel bone resting on palm and legs locked between fingers', 'Protect wing flapping and pinfeathers during handling', 'Provide dust bath access for natural parasite control'],
      ageContent: { junior: { headline: 'Safe Poultry Handling Hold', sections: [{ title: 'The Keel Rest Hold', body: 'Rest the chicken’s breastbone (keel) in the palm of your hand, placing your index finger between its legs to gently lock them. Your other hand rests gently over the wings.' }], quickCheck: { question: 'How do you secure a chicken’s legs during a showmanship hold?', options: ['Lock legs gently between your fingers while supporting the keel bone', 'Tie them together with string', 'Hold only by the tail feathers'], correctIndex: 0, feedback: 'Supporting the keel and legs keeps the bird calm and safe.' } } },
      quizQuestions: [{ id: 'pt_hw_q1', question: 'Why must you never carry a chicken upside down by its feet?', options: ['It causes severe distress, panic, and respiratory compression', 'Chickens only fly upside down', 'It is fine to do so'], correctIndex: 0, explanation: 'Carrying birds upside down causes extreme pain, distress, and breathing difficulty.', division: 'junior' }]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: ['Track daily egg production logs and Hen-Day Egg Production %', 'Calculate feed cost per dozen eggs', 'Maintain pullorum-typhoid flock test records'],
      ageContent: { junior: { headline: 'Egg Production Tracking', sections: [{ title: 'Hen-Day Production', body: 'If 10 hens lay 8 eggs today, Hen-Day Production is 80%! Record your numbers every evening.' }], quickCheck: { question: 'If 5 hens lay 5 eggs in one day, what is your egg percentage?', options: ['100%', '50%', '10%'], correctIndex: 0, feedback: '5 out of 5 = 100% production!' } } },
      quizQuestions: [{ id: 'pt_rk_q1', question: 'What blood test certification is required in most states before exhibiting poultry at fairs?', options: ['Pullorum-Typhoid (NPIP) negative test', 'Rabies vaccine tag', 'Heartworm test'], correctIndex: 0, explanation: 'NPIP Pullorum-Typhoid testing is mandatory to prevent Salmonella pullorum spread.', division: 'junior' }]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 25,
      objectives: ['APA cage retrieval and re-caging procedure (head first into coop, head first out)', 'Inspection of head, comb, wattles, eyes, wings, vent, and plumage', 'Oral examination presentation before judge'],
      ageContent: { junior: { headline: 'Cage In & Cage Out Technique', sections: [{ title: 'Always Head First Out!', body: 'When taking a bird out of a show cage, turn the bird so its head comes toward the door first. Never drag a bird out backwards, which breaks wing feathers.' }], quickCheck: { question: 'How should a chicken be removed from a show cage during showmanship?', options: ['Head first, with hands securing wings to prevent flapping', 'Backwards by the tail', 'Upside down'], correctIndex: 0, feedback: 'Head first prevents wing and feather damage.' } } },
      quizQuestions: [{ id: 'pt_sh_q1', question: 'What is examined when inspecting a chicken’s wing during showmanship?', options: ['Primary feathers, secondary feathers, and axial feather', 'Only the color of the skin', 'The weight of the egg'], correctIndex: 0, explanation: 'You check for missing, broken, or split wing feathers and the short axial feather.', division: 'junior' }]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: ['Welfare of show birds in warm barns', 'No unethical feather trimming, coloring, or surgical alterations', 'Upholding sportsmanship and club teamwork'],
      ageContent: { junior: { headline: 'Integrity in the Show Room', sections: [{ title: 'Feather Authenticity', body: 'Never pluck off-color feathers or trim comb spikes. True quality reflects patient breeding and gentle daily care.' }], quickCheck: { question: 'Is it ethical to dye white feathers on a show bird?', options: ['No, that is prohibited tampering', 'Yes, for fun', 'Yes, judges prefer it'], correctIndex: 0, feedback: 'Never artificially alter show birds.' } } },
      quizQuestions: [{ id: 'pt_et_q1', question: 'What is the top priority at the poultry show barn?', options: ['Bird welfare, fresh water, and biosecurity', 'Winning the tallest trophy', 'Leaving early'], correctIndex: 0, explanation: 'Animal welfare and biosecurity always come first.', division: 'junior' }]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Communication & Goal Setting',
      order: 9,
      estimatedMinutes: 20,
      objectives: ['Set SMART poultry project goals', 'Present a poultry demonstration (e.g. egg anatomy and candling)', 'Educate fair visitors about safe egg handling and flock care'],
      ageContent: { junior: { headline: 'Sharing the Egg Story', sections: [{ title: 'Egg Candling Demo', body: 'Demonstrate how shining a bright light through an egg reveals the air cell, yolk, and shell soundness.' }], quickCheck: { question: 'What is "candling" an egg?', options: ['Shining a bright light through an egg to inspect the interior', 'Cooking an egg by candlelight', 'Painting the shell'], correctIndex: 0, feedback: 'Candling lets you see inside the egg safely!' } } },
      quizQuestions: [{ id: 'pt_cg_q1', question: 'What does candling an egg allow a poultry judge or exhibitor to see?', options: ['Air cell depth, yolk shadow, and micro-cracks in the shell', 'The hen’s name', 'The color of the feather'], correctIndex: 0, explanation: 'Candling evaluates egg interior quality and shell integrity.', division: 'junior' }]
    }
  ]
};
