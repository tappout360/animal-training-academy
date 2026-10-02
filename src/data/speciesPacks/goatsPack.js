// WarrenWise Youth Animal Training Academy
// Species Pack: Goats (Capra hircus) - Dairy & Meat Goats
// Phase 2 Pack Preview: Standardized 9-Module Architecture

export const GOATS_PACK = {
  id: 'goats',
  name: 'Goats Project Academy',
  species: 'Goats (Dairy & Meat)',
  category: 'Small Ruminant Livestock',
  icon: 'Shield',
  version: '1.0.0-preview',
  lastVerifiedDate: '2026-09-01',
  verifiedBy: 'Extension Livestock Specialist & ADGA Youth Committee',
  isPhase2Preview: true,
  description: 'Foundations of dairy goat and market meat goat 4-H projects covering ADGA/ABGA breeds, ruminant nutrition, scrapie tag identification, showmanship collars, and ethics.',
  targetDivisions: ['cloverbud', 'junior', 'intermediate', 'senior'],
  modules: [
    {
      id: 'basics_breeds',
      topicId: 'basics_breeds',
      title: 'Basics & Breeds',
      order: 1,
      estimatedMinutes: 20,
      objectives: ['Differentiate Dairy (Nubian, Alpine, LaMancha, Saanen) vs Meat (Boer, Kiko, Spanish) breeds', 'Identify unique ear structures (gopher ear, elf ear, pendulous ears)', 'Understand horn disbudding standards for dairy vs meat show classes'],
      ageContent: { junior: { headline: 'Dairy vs Meat Breeds', sections: [{ title: 'Recognizing Breeds', body: 'Dairy goats produce nutritious milk. Nubians have long bell-shaped ears and roman noses. LaManchas have distinct tiny ears (gopher or elf ears). Boer goats are stocky white goats with red heads bred for muscular meat production.' }], quickCheck: { question: 'Which dairy goat breed has very short, tiny "gopher" or "elf" ears?', options: ['LaMancha', 'Nubian', 'Alpine'], correctIndex: 0, feedback: 'LaManchas are famous for their tiny ears!' } } },
      quizQuestions: [{ id: 'gt_bb_q1', question: 'What is the primary commercial production purpose of Boer goats?', options: ['Meat production', 'Cashmere wool', 'Cheese milk'], correctIndex: 0, explanation: 'Boer goats originated in South Africa and are the leading meat goat breed.', division: 'junior' }]
    },
    {
      id: 'daily_care',
      topicId: 'daily_care',
      title: 'Daily Care & Housing',
      order: 2,
      estimatedMinutes: 20,
      objectives: ['Escape-proof fencing (goats are curious climbers)', 'Dry elevated sleeping platforms to prevent foot rot', 'Clean watering troughs and salt/mineral feeders'],
      ageContent: { junior: { headline: 'Goat Fencing & Hoof Care', sections: [{ title: 'Fence Fundamentals', body: 'Goats love to climb and rub against fences. High-tensile woven wire (48 inches tall) with stout corner posts keeps goats in and stray predators out.' }], quickCheck: { question: 'Why do goats need sturdy 4-foot fencing?', options: ['They are agile climbers that will escape weak fences', 'They cannot jump at all', 'Goats only live underground'], correctIndex: 0, feedback: 'Goats are curious escape artists that need strong fences!' } } },
      quizQuestions: [{ id: 'gt_dc_q1', question: 'How often should goat hooves typically be inspected and trimmed to prevent foot rot and abnormal stance?', options: ['Every 4 to 6 weeks', 'Once every 5 years', 'Hooves never need trimming'], correctIndex: 0, explanation: 'Routine trimming every 4-6 weeks keeps hooves flat and healthy.', division: 'junior' }]
    },
    {
      id: 'nutrition',
      topicId: 'nutrition',
      title: 'Nutrition Principles',
      order: 3,
      estimatedMinutes: 25,
      objectives: ['Ruminant digestion: 4 stomach compartments (Rumen, Reticulum, Omasum, Abomasum)', 'Preventing Urinary Calculi in wethers (maintain 2:1 Calcium to Phosphorus ratio and ammonium chloride)', 'Importance of loose goat mineral with copper (goats need copper; sheep do NOT)'],
      ageContent: { junior: { headline: 'The Four-Part Ruminant Stomach', sections: [{ title: 'How Goats Digest Grass and Hay', body: 'Goats are ruminants with four stomach compartments: Rumen, Reticulum, Omasum, and Abomasum. They chew their cud (regurgitated forage) to help rumen bacteria break down tough plant fiber.' }], quickCheck: { question: 'Which stomach compartment is the "true glandular stomach" in a goat?', options: ['Abomasum', 'Rumen', 'Reticulum'], correctIndex: 0, feedback: 'The abomasum secretes digestive acid just like a human stomach.' } } },
      quizQuestions: [{ id: 'gt_nu_q1', question: 'Why must sheep feed NEVER be fed to goats?', options: ['Sheep feed is lacking copper, which goats require to prevent deficiency and coat bleaching', 'Goats refuse to eat sheep feed', 'Sheep feed has too much water'], correctIndex: 0, explanation: 'Goats have a high copper requirement, while sheep are easily poisoned by copper. Goats need dedicated goat minerals.', division: 'junior' }]
    },
    {
      id: 'health_biosecurity',
      topicId: 'health_biosecurity',
      title: 'Health Observation & Biosecurity',
      order: 4,
      estimatedMinutes: 25,
      requiresSafetyReview: true,
      objectives: ['FAMACHA eye membrane scoring for barber pole worm (Haemonchus contortus)', 'Recognizing signs of bloat (distended left flank)', 'Federal Scrapie eradication identification tags'],
      ageContent: { junior: { headline: 'FAMACHA Scoring & Checking for Worms', sections: [{ title: 'Checking Inner Eyelids', body: 'The barber pole worm drinks blood and causes severe anemia. By gently rolling down the lower eyelid, exhibitors match the conjunctiva color against the FAMACHA card (red/pink = healthy, pale white = severe anemia needing vet-guided deworming).' }], quickCheck: { question: 'What does a pale white inner eyelid indicate during FAMACHA scoring?', options: ['Severe anemia caused by blood-sucking parasites', 'A healthy goat', 'The goat is sleepy'], correctIndex: 0, feedback: 'Pale white eyelids indicate critical anemia and require prompt vet attention.' } } },
      quizQuestions: [{ id: 'gt_hb_q1', question: 'On which side of the goat does the rumen sit, where severe gas bloat appears as a tight balloon swelling?', options: ['The Left side', 'The Right side', 'Between the front hooves'], correctIndex: 0, explanation: 'The rumen is located on the left flank; frothy or gas bloat causes noticeable left-side distention.', division: 'junior' }]
    },
    {
      id: 'handling_welfare',
      topicId: 'handling_welfare',
      title: 'Handling & Welfare',
      order: 5,
      estimatedMinutes: 20,
      requiresSafetyReview: true,
      objectives: ['Leading with goat show collar or chain', 'Never lifting or dragging a goat by its horns, ears, or fleece', 'Low-stress flight zones and humane handling principles'],
      ageContent: { junior: { headline: 'Leading with Respect and Grace', sections: [{ title: 'Showmanship Collar Control', body: 'Hold the small prong collar or chain under the goat’s jaw with your right hand. Keep their head up and alert without choking or jerking.' }], quickCheck: { question: 'Where do you hold a dairy goat when leading in the show ring?', options: ['Gently under the jaw by the show collar or chain with fingers palm up', 'By twisting both ears', 'By pulling the tail'], correctIndex: 0, feedback: 'Under the jaw provides calm, controlled guidance.' } } },
      quizQuestions: [{ id: 'gt_hw_q1', question: 'Why should you never pull or drag a goat by its horns?', options: ['Horns can break at the base, causing severe bleeding, pain, and loss of trust', 'Horns will melt', 'It makes the horns grow faster'], correctIndex: 0, explanation: 'Pulling on horns causes acute pain and potential horn core fracture.', division: 'junior' }]
    },
    {
      id: 'record_keeping',
      topicId: 'record_keeping',
      title: 'Record Keeping & Budgeting',
      order: 6,
      estimatedMinutes: 20,
      objectives: ['Official USDA Scrapie premise and animal ID numbers', 'Daily Rate of Gain (ADG) calculations for market wethers', 'Feed and veterinary expense tracking'],
      ageContent: { junior: { headline: 'Average Daily Gain (ADG) Math', sections: [{ title: 'Calculating Daily Gain', body: 'ADG = (Final Weight - Starting Weight) ÷ Number of Days on Feed. Market meat goats aim for 0.35 to 0.50 lbs of gain per day.' }], quickCheck: { question: 'If a market wether gains 30 lbs over 60 days, what is its Average Daily Gain?', options: ['0.50 lbs per day', '2.0 lbs per day', '5.0 lbs per day'], correctIndex: 0, feedback: '30 lbs ÷ 60 days = 0.50 lbs per day!' } } },
      quizQuestions: [{ id: 'gt_rk_q1', question: 'What official federal identification tag must intact goats possess before leaving their home farm or attending shows?', options: ['Official USDA Scrapie Tag', 'A paper ribbon', 'A collar bell'], correctIndex: 0, explanation: 'Scrapie tags provide traceability for federal disease eradication.', division: 'junior' }]
    },
    {
      id: 'showmanship',
      topicId: 'showmanship',
      title: 'Showmanship Foundations',
      order: 7,
      estimatedMinutes: 25,
      objectives: ['Always keep the goat between you and the judge', 'Setting up the feet (front feet square, rear feet slightly offset or square according to breed)', 'Maintaining eye contact with judge while walking the ring'],
      ageContent: { junior: { headline: 'The Golden Rule of Goat Showmanship', sections: [{ title: 'Between You and the Judge', body: 'Never block the judge’s view! As the judge moves around the goat, smoothly cross over to the opposite side so the goat remains between you and the judge at all times.' }], quickCheck: { question: 'What is the most fundamental rule when presenting a goat to the judge in the ring?', options: ['Always keep the goat between yourself and the judge', 'Stand directly in front of the judge’s face', 'Hold the goat with both arms wrapped around its neck'], correctIndex: 0, feedback: 'Keeping the goat in plain view of the judge is rule #1!' } } },
      quizQuestions: [{ id: 'gt_sh_q1', question: 'How should you change sides as the judge walks around the front of your goat?', options: ['Smoothly cross around the front of your goat while maintaining eye contact with the judge', 'Crawl under the goat’s belly', 'Run behind the goat’s rear legs'], correctIndex: 0, explanation: 'Crossing smoothly around the head preserves control and maintains judge contact.', division: 'junior' }]
    },
    {
      id: 'ethics_character',
      topicId: 'ethics_character',
      title: 'Ethics & Character (Head, Heart, Hands, Health)',
      order: 8,
      estimatedMinutes: 20,
      objectives: ['Adherence to medication withdrawal times before fair sale', 'No illegal icing, drenching, or tampering', 'Sportsmanship in competitive showmanship rings'],
      ageContent: { junior: { headline: 'Fair Play in Market Animals', sections: [{ title: 'Wholesome Food Production', body: 'Market meat goats enter the food chain. Administering unapproved drugs or withholding water to make weight is harmful and illegal. Show with character!' }], quickCheck: { question: 'Why is strict adherence to withdrawal times required before market livestock sales?', options: ['To guarantee wholesome meat free of chemical residues for families', 'To make records longer', 'It is optional'], correctIndex: 0, feedback: 'Food safety and animal welfare are non-negotiable ethical standards.' } } },
      quizQuestions: [{ id: 'gt_et_q1', question: 'What does character in the show ring mean?', options: ['Doing the right thing for your animal and fellow competitors even when nobody is looking', 'Winning whatever the cost', 'Hiding faults from leaders'], correctIndex: 0, explanation: 'Integrity is doing what is right at all times.', division: 'junior' }]
    },
    {
      id: 'communication_goals',
      topicId: 'communication_goals',
      title: 'Project Communication & Goal Setting',
      order: 9,
      estimatedMinutes: 20,
      objectives: ['Set SMART goat project goals', 'Deliver a goat grooming demonstration or hoof trimming clinic', 'Answer public questions during open barn hours'],
      ageContent: { junior: { headline: 'Educating the Public About Goats', sections: [{ title: 'Debunking Goat Myths', body: 'Teach visitors that goats do NOT eat tin cans! They are browsing herbivores with delicate mouths that love nutritious shrubs, leaves, and green hay.' }], quickCheck: { question: 'Do goats actually eat tin cans?', options: ['No, that is a myth; goats investigate with sensitive lips but eat plants and browse', 'Yes, they eat iron', 'Yes, all metal'], correctIndex: 0, feedback: 'Goats are browsers that eat forage, never metal!' } } },
      quizQuestions: [{ id: 'gt_cg_q1', question: 'How does giving a public demonstration build communication skills?', options: ['It teaches you to organize knowledge, speak clearly, and share skills with your community', 'It takes too much time', 'It is only for leaders'], correctIndex: 0, explanation: 'Demonstrations teach public speaking, composure, and leadership.', division: 'junior' }]
    }
  ]
};
