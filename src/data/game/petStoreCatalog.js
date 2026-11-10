// WarrenWise Animal Academy - Official Livestock & Companion Pet Store Catalog
// 12 Species with authentic breeds, coat color genetics, temperament traits, and 4-H Trail compatibility.
// Fully expanded: 80 authentic breeds across all 12 project species!
// Top 10 Rabbit breeds (including New Zealands!), Top 10 Guinea Pig breeds, Top 6 for all other species.

export const PET_STORE_BREEDS = [
  // =========================================================================
  // 1. RABBITS (Top 10 Most Popular ARBA Breeds - Starter Trail 1+)
  // =========================================================================
  {
    speciesId: 'rabbits',
    speciesName: 'Rabbits',
    emoji: '🐰',
    rank: 1,
    requiredTrail: 1,
    baseCost: 150,
    arbaRegistry: 'ARBA Standard of Perfection',
    breeds: [
      {
        id: 'rabbit_holland_lop',
        name: 'Holland Lop',
        bodyType: 'Compact',
        idealWeight: '3.5 - 4.0 lbs',
        temperament: 'Curious, docile, gentle demeanor, floppy lop ears',
        colors: [
          { id: 'tortoise', name: 'Tortoise (Orange/Black shading)', hex: '#D27D2D', rarity: 'Common', priceModifier: 0 },
          { id: 'broken_orange', name: 'Broken Orange & White', hex: '#E08A38', rarity: 'Uncommon', priceModifier: 25 },
          { id: 'blue_otter', name: 'Blue Otter (Cream underbelly)', hex: '#4A6572', rarity: 'Rare', priceModifier: 50 },
          { id: 'pure_frosty', name: 'Frosty Chinchilla Pearl', hex: '#F0F4F8', rarity: 'Grand Champion', priceModifier: 90 }
        ],
        specialPerk: '+15% Table Pose Stability bonus during judging'
      },
      {
        id: 'rabbit_mini_rex',
        name: 'Mini Rex',
        bodyType: 'Compact',
        idealWeight: '3.75 - 4.25 lbs',
        temperament: 'Plush velvet coat, lively & alert personality',
        colors: [
          { id: 'castor', name: 'Castor (Rich mahogany red)', hex: '#8B3A1C', rarity: 'Common', priceModifier: 0 },
          { id: 'black_velvet', name: 'Jet Black Gloss Velvet', hex: '#1C1C1E', rarity: 'Uncommon', priceModifier: 30 },
          { id: 'opal', name: 'Opal Fawn Gray', hex: '#A89F91', rarity: 'Rare', priceModifier: 55 },
          { id: 'harlequin', name: 'Japanese Harlequin Checker', hex: '#E2973E', rarity: 'Grand Champion', priceModifier: 100 }
        ],
        specialPerk: '+20% Natural Coat Sheen (resists trail dust)'
      },
      {
        id: 'rabbit_netherland_dwarf',
        name: 'Netherland Dwarf',
        bodyType: 'Compact (Miniature)',
        idealWeight: '2.0 - 2.5 lbs',
        temperament: 'Spirited, tiny erect ears, alert round eyes',
        colors: [
          { id: 'ruby_eyed_white', name: 'Ruby Eyed White (REW)', hex: '#FFFFFF', rarity: 'Common', priceModifier: 0 },
          { id: 'sable_point', name: 'Sable Point Sepia Shading', hex: '#795548', rarity: 'Uncommon', priceModifier: 30 },
          { id: 'smoke_pearl', name: 'Smoke Pearl Luster', hex: '#B0BEC5', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Compact Traveler: Takes 30% less space in caravan cage'
      },
      {
        id: 'rabbit_new_zealand',
        name: 'New Zealand',
        bodyType: 'Commercial (America\'s Leading 4-H Meat & Fur Breed)',
        idealWeight: '9.5 - 12.0 lbs',
        temperament: 'Calm, rapid growth, excellent mothering ability',
        colors: [
          { id: 'nz_white', name: 'Pure White (America\'s Standard)', hex: '#FFFFFF', rarity: 'Common', priceModifier: 0 },
          { id: 'nz_red', name: 'Rich Sorrel Red', hex: '#B7410E', rarity: 'Uncommon', priceModifier: 35 },
          { id: 'nz_black', name: 'Jet Gloss Black', hex: '#1F1E24', rarity: 'Rare', priceModifier: 60 },
          { id: 'nz_broken', name: 'Broken Red & Crisp White Pattern', hex: '#D97706', rarity: 'Grand Champion', priceModifier: 95 }
        ],
        specialPerk: 'Commercial Champion: +25% Average Daily Gain & Fur Density score'
      },
      {
        id: 'rabbit_flemish_giant',
        name: 'Flemish Giant',
        bodyType: 'Semi-Arch (Mandolin Topline)',
        idealWeight: '14 - 18+ lbs',
        temperament: 'Gentle giant, calm and unflappable under pressure',
        colors: [
          { id: 'sandy', name: 'Sandy Reddish Brass', hex: '#C29B38', rarity: 'Common', priceModifier: 0 },
          { id: 'steel_gray', name: 'Steel Gray Slate', hex: '#5A636A', rarity: 'Uncommon', priceModifier: 35 },
          { id: 'fawn_gold', name: 'Golden Fawn', hex: '#D9A74A', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: '+25% Wagon Calamity Resilience (calms fellow animals)'
      },
      {
        id: 'rabbit_lionhead',
        name: 'Lionhead',
        bodyType: 'Compact with Wool Mane',
        idealWeight: '3.0 - 3.75 lbs',
        temperament: 'Playful, distinctive wool mane and chest bib, cuddly',
        colors: [
          { id: 'lion_tortoise', name: 'Tortoise Mane & Amber Flank', hex: '#D27D2D', rarity: 'Common', priceModifier: 0 },
          { id: 'lion_siamese_sable', name: 'Siamese Sable Fur & Dark Mask', hex: '#5D4037', rarity: 'Uncommon', priceModifier: 40 },
          { id: 'lion_chinchilla', name: 'Silver Chinchilla Ticked Mane', hex: '#CFD8DC', rarity: 'Grand Champion', priceModifier: 85 }
        ],
        specialPerk: 'Mane Charm: +20% score in Showmanship Grooming Presentation'
      },
      {
        id: 'rabbit_english_angora',
        name: 'English Angora',
        bodyType: 'Full Wool / Compact',
        idealWeight: '5.5 - 7.5 lbs',
        temperament: 'Ultra-gentle, facial furnishings & tasseled ears',
        colors: [
          { id: 'angora_white', name: 'Snow White Angora Fleece', hex: '#FAF9F6', rarity: 'Common', priceModifier: 0 },
          { id: 'angora_blue', name: 'Smoky Blue Wool Cloud', hex: '#78909C', rarity: 'Rare', priceModifier: 60 },
          { id: 'angora_chocolate', name: 'Deep Velvet Chocolate Wool', hex: '#4E342E', rarity: 'Grand Champion', priceModifier: 110 }
        ],
        specialPerk: 'Fiber Harvest: Generates +30 Trail Outfitter points every 50 miles'
      },
      {
        id: 'rabbit_mini_lop',
        name: 'Mini Lop',
        bodyType: 'Compact & Chunky Lop',
        idealWeight: '4.5 - 6.5 lbs',
        temperament: 'Substantial bone, muscular, laid-back personality',
        colors: [
          { id: 'mini_lop_chinchilla', name: 'Classic Chinchilla Slate', hex: '#9E9E9E', rarity: 'Common', priceModifier: 0 },
          { id: 'mini_lop_broken_tri', name: 'Broken Tri-Color (Orange/Black)', hex: '#D35400', rarity: 'Uncommon', priceModifier: 35 }
        ],
        specialPerk: 'Sturdy Traveler: Resists wagon road jolts with ease'
      },
      {
        id: 'rabbit_standard_rex',
        name: 'Standard Rex',
        bodyType: 'Commercial (Full-Size Velvet)',
        idealWeight: '7.5 - 10.5 lbs',
        temperament: 'Plush velvet coat, stately and calm demeanor',
        colors: [
          { id: 'rex_castor', name: 'Classic Castor Agouti', hex: '#6D4C41', rarity: 'Common', priceModifier: 0 },
          { id: 'rex_amber', name: 'Amber Cinnamon Gloss', hex: '#E67E22', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Velvet Prime: +30 points in ARBA Fur Class Evaluation'
      },
      {
        id: 'rabbit_himalayan',
        name: 'Himalayan',
        bodyType: 'Cylindrical (Long & Snakelike)',
        idealWeight: '2.5 - 4.5 lbs',
        temperament: 'Calm, docile, pose stretches flat on table',
        colors: [
          { id: 'himi_black', name: 'Snow Body with Jet Black Points & Ruby Eyes', hex: '#212121', rarity: 'Common', priceModifier: 0 },
          { id: 'himi_blue', name: 'Snow Body with Slate Blue Points', hex: '#546E7A', rarity: 'Uncommon', priceModifier: 35 }
        ],
        specialPerk: 'Cylindrical Standard: +20 points in ARBA Breed Type Inspection'
      }
    ]
  },

  // =========================================================================
  // 2. CAVIES / GUINEA PIGS (Top 10 Most Popular ACBA Breeds - Trail 2+)
  // =========================================================================
  {
    speciesId: 'cavies',
    speciesName: 'Cavies (Guinea Pigs)',
    emoji: '🐹',
    rank: 2,
    requiredTrail: 2,
    baseCost: 200,
    arbaRegistry: 'ACBA / ARBA Recognized',
    breeds: [
      {
        id: 'cavy_american',
        name: 'American Cavy',
        bodyType: 'Short smooth coat',
        idealWeight: '2.0 - 2.5 lbs',
        temperament: 'Vocal wheeker, friendly & resilient',
        colors: [
          { id: 'tri_color', name: 'Classic Tri-Color (Red/White/Black)', hex: '#8C4320', rarity: 'Common', priceModifier: 0 },
          { id: 'golden_agouti', name: 'Golden Agouti (Wild-ticked)', hex: '#A3704C', rarity: 'Uncommon', priceModifier: 25 },
          { id: 'satin_roan', name: 'Satin Roan Glass Gloss', hex: '#E8D3B9', rarity: 'Rare', priceModifier: 50 }
        ],
        specialPerk: 'Natural whistle warns of approaching prairie hazards'
      },
      {
        id: 'cavy_abyssinian',
        name: 'Abyssinian Cavy',
        bodyType: '8-10 symmetrical rosettes and ridges',
        idealWeight: '2.0 - 2.8 lbs',
        temperament: 'Spunky, dramatic rosette crests, active curiosity',
        colors: [
          { id: 'brindle', name: 'Tiger Brindle Red/Black', hex: '#703A1A', rarity: 'Common', priceModifier: 0 },
          { id: 'tortoise_white', name: 'Show Tortoise & White', hex: '#C47335', rarity: 'Uncommon', priceModifier: 30 }
        ],
        specialPerk: '+15% Show Ring Texture distinction score'
      },
      {
        id: 'cavy_peruvian',
        name: 'Peruvian Longhaired Cavy',
        bodyType: 'Sweeping floor-length coat & head crest',
        idealWeight: '2.2 - 2.8 lbs',
        temperament: 'Glamorous, calm during table grooming',
        colors: [
          { id: 'silky_cream_slate', name: 'Silky Cream & Slate Tri', hex: '#EFEBE9', rarity: 'Rare', priceModifier: 60 },
          { id: 'pure_champagne', name: 'Champagne Satin Sheen', hex: '#FFF8E1', rarity: 'Grand Champion', priceModifier: 95 }
        ],
        specialPerk: 'Showstopper Coat: +25% score in Grooming Presentation'
      },
      {
        id: 'cavy_teddy',
        name: 'Teddy Cavy',
        bodyType: 'Dense resilient short fuzzy crimped coat',
        idealWeight: '2.0 - 2.8 lbs',
        temperament: 'Looks like a cuddly teddy bear, very calm disposition',
        colors: [
          { id: 'teddy_copper', name: 'Warm Copper Agouti & White', hex: '#A0522D', rarity: 'Common', priceModifier: 0 },
          { id: 'teddy_chocolate', name: 'Dark Chocolate & Orange Plush', hex: '#5D4037', rarity: 'Uncommon', priceModifier: 35 }
        ],
        specialPerk: 'Calm Demeanor: 20% lower stress during judge handling'
      },
      {
        id: 'cavy_silkie',
        name: 'Silkie (Sheltie) Cavy',
        bodyType: 'Flowing teardrop coat, sweeps back from head',
        idealWeight: '2.0 - 2.6 lbs',
        temperament: 'Gentle, hair never covers the face, serene handler bond',
        colors: [
          { id: 'silkie_golden_white', name: 'Golden Cream & Silk White', hex: '#FAD7A0', rarity: 'Common', priceModifier: 0 },
          { id: 'silkie_smoke_tri', name: 'Silver Smoke & Slate Tri-Color', hex: '#90A4AE', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Silky Sheen: Eliminates fur tangling in camp straw'
      },
      {
        id: 'cavy_coronet',
        name: 'Coronet Cavy',
        bodyType: 'Long flowing silky coat with centered crown rosette',
        idealWeight: '2.2 - 2.7 lbs',
        temperament: 'Majestic carriage and serene temperament',
        colors: [
          { id: 'coronet_cream', name: 'Cream & Buff Gold with Pearl Rosette', hex: '#FFF3E0', rarity: 'Rare', priceModifier: 55 }
        ],
        specialPerk: 'Royal Crest: +25% bonus in ACBA Table Presentation'
      },
      {
        id: 'cavy_texel',
        name: 'Texel Cavy',
        bodyType: 'Long bouncy ringlet corkscrew curls',
        idealWeight: '2.0 - 2.6 lbs',
        temperament: 'Sweet, charming curly locks, placid in arms',
        colors: [
          { id: 'texel_ginger_ringlet', name: 'Ginger Gold Spring Ringlets', hex: '#E67E22', rarity: 'Rare', priceModifier: 65 },
          { id: 'texel_pure_ebony', name: 'Gloss Obsidian Curly Locks', hex: '#212121', rarity: 'Grand Champion', priceModifier: 90 }
        ],
        specialPerk: 'Ringlet Resilience: High resistance to cold night breezes'
      },
      {
        id: 'cavy_white_crested',
        name: 'White Crested Cavy',
        bodyType: 'Smooth short coat with single pure white forehead rosette',
        idealWeight: '2.0 - 2.5 lbs',
        temperament: 'Alert, striking contrast between body and white crest',
        colors: [
          { id: 'crested_red', name: 'Deep Solid Red with White Crown', hex: '#C0392B', rarity: 'Common', priceModifier: 0 },
          { id: 'crested_black', name: 'Solid Jet Black with White Star Crown', hex: '#1C1C1E', rarity: 'Uncommon', priceModifier: 40 }
        ],
        specialPerk: 'Crown Distinction: Automatic +15 points in Breed Standard class'
      },
      {
        id: 'cavy_skinny_pig',
        name: 'Skinny Pig (Hairless Cavy)',
        bodyType: 'Smooth rubbery warm skin with fuzzy muzzle & feet',
        idealWeight: '1.8 - 2.4 lbs',
        temperament: 'Warm cuddle bug, active metabolism, thrives in cozy blankets',
        colors: [
          { id: 'skinny_pink_spotted', name: 'Warm Rosy Skin with Charcoal Spots', hex: '#F8BBD0', rarity: 'Rare', priceModifier: 75 }
        ],
        specialPerk: 'Hypoallergenic Champion: 0% dander allergy risk at camp'
      },
      {
        id: 'cavy_rex',
        name: 'Rex Cavy',
        bodyType: 'Dense crimped woolly coat with crinkled whiskers',
        idealWeight: '2.2 - 2.8 lbs',
        temperament: 'Robust, friendly, thick springy coat',
        colors: [
          { id: 'rex_agouti_cavy', name: 'Silver Agouti Wool Texture', hex: '#78909C', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Wool Shield: Dirt and bedding dust brush right off'
      }
    ]
  },

  // =========================================================================
  // 3. CATS (Top 6 Companion Breeds - Trail 3+)
  // =========================================================================
  {
    speciesId: 'cats',
    speciesName: 'Companion Cats',
    emoji: '🐱',
    rank: 3,
    requiredTrail: 3,
    baseCost: 240,
    arbaRegistry: '4-H Companion Animal Program',
    breeds: [
      {
        id: 'cat_shorthair',
        name: 'American Shorthair',
        bodyType: 'Medium muscular working cat',
        idealWeight: '8 - 12 lbs',
        temperament: 'Alert barn hunter, calm around harness',
        colors: [
          { id: 'silver_tabby', name: 'Classic Silver Tabby', hex: '#8E9AA0', rarity: 'Common', priceModifier: 0 },
          { id: 'brown_mackerel', name: 'Warm Brown Mackerel', hex: '#5D432C', rarity: 'Uncommon', priceModifier: 25 },
          { id: 'calico_patch', name: 'High-Contrast Calico', hex: '#E6935C', rarity: 'Rare', priceModifier: 45 }
        ],
        specialPerk: 'Barn mouser perk: Keeps camp feed bags 100% rodent-free'
      },
      {
        id: 'cat_maine_coon',
        name: 'Maine Coon',
        bodyType: 'Rugged heavy tufted coat & lynx tips',
        idealWeight: '13 - 18 lbs',
        temperament: 'Gentle giant, water-resistant coat, friendly chirper',
        colors: [
          { id: 'red_tabby_white', name: 'Red Classic Tabby & White Bib', hex: '#D84315', rarity: 'Rare', priceModifier: 55 },
          { id: 'black_smoke', name: 'Black Smoke Silver Undercoat', hex: '#37474F', rarity: 'Grand Champion', priceModifier: 90 }
        ],
        specialPerk: 'Weatherproof Fur: 100% immune to rainstorm chills'
      },
      {
        id: 'cat_siamese',
        name: 'Siamese (Seal Point)',
        bodyType: 'Sleek refined frame, deep sapphire eyes',
        idealWeight: '7 - 10 lbs',
        temperament: 'Vocal, extraordinarily observant, affectionate',
        colors: [
          { id: 'seal_point', name: 'Cream Coat with Rich Seal Brown Points', hex: '#3E2723', rarity: 'Common', priceModifier: 0 },
          { id: 'blue_point', name: 'Silvery Platinum with Slate Blue Points', hex: '#607D8B', rarity: 'Uncommon', priceModifier: 35 }
        ],
        specialPerk: 'Vigilant Sentinel: Spots campsite predators before they approach'
      },
      {
        id: 'cat_ragdoll',
        name: 'Ragdoll Semi-Longhair',
        bodyType: 'Large plush muscular frame, big oval blue eyes',
        idealWeight: '12 - 18 lbs',
        temperament: 'Docile, relaxed limp cuddle in human arms',
        colors: [
          { id: 'blue_bicolor', name: 'Blue Point with Crisp Inverted V Face', hex: '#ECEFF1', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Soothing Presence: Restores +15% team tranquility each evening camp'
      },
      {
        id: 'cat_bengal',
        name: 'Bengal (Leopard Rosettes)',
        bodyType: 'Athletic, muscular, glitter-sheen pelt',
        idealWeight: '9 - 15 lbs',
        temperament: 'High energy, playful, loves water and leash hikes',
        colors: [
          { id: 'brown_spotted_rosette', name: 'Golden Brown with Midnight Rosettes', hex: '#D35400', rarity: 'Grand Champion', priceModifier: 110 }
        ],
        specialPerk: 'Trail Agility: Leaps across broken wagon logs effortlessly'
      },
      {
        id: 'cat_british_shorthair',
        name: 'British Shorthair',
        bodyType: 'Chubby round cheeks, dense crisp plush coat',
        idealWeight: '9 - 14 lbs',
        temperament: 'Calm, dignified, quiet companion with copper eyes',
        colors: [
          { id: 'british_blue', name: 'Solid British Blue Slate', hex: '#546E7A', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Quiet Composure: Never startles during thunderclaps'
      }
    ]
  },

  // =========================================================================
  // 4. DOGS (Top 6 Herding & Companion Breeds - Trail 4+)
  // =========================================================================
  {
    speciesId: 'dogs',
    speciesName: 'Herding & Companion Dogs',
    emoji: '🐶',
    rank: 4,
    requiredTrail: 4,
    baseCost: 320,
    arbaRegistry: 'AKC / 4-H Dog Project',
    breeds: [
      {
        id: 'dog_border_collie',
        name: 'Border Collie',
        bodyType: 'Agile Herder',
        idealWeight: '35 - 45 lbs',
        temperament: 'Intense focus, eager to work & learn',
        colors: [
          { id: 'classic_black_white', name: 'Classic Black & White', hex: '#1E1E24', rarity: 'Common', priceModifier: 0 },
          { id: 'blue_merle', name: 'Blue Merle Marbled Slate', hex: '#7A8B99', rarity: 'Rare', priceModifier: 60 },
          { id: 'red_tricolor', name: 'Red Australian Tri-Color', hex: '#873D26', rarity: 'Grand Champion', priceModifier: 95 }
        ],
        specialPerk: 'Night Watch Sentry: Automatically spots predators 100 yards out'
      },
      {
        id: 'dog_golden_retriever',
        name: 'Golden Retriever',
        bodyType: 'Sturdy Sporting',
        idealWeight: '55 - 70 lbs',
        temperament: 'Sweet, gentle mouth, loyal family companion',
        colors: [
          { id: 'warm_gold', name: 'Warm Harvest Gold', hex: '#E1A95F', rarity: 'Common', priceModifier: 0 },
          { id: 'cream_platinum', name: 'English Cream Platinum', hex: '#F5EBE1', rarity: 'Rare', priceModifier: 50 }
        ],
        specialPerk: '+20% Herd Morale boost during heavy rainstorms'
      },
      {
        id: 'dog_australian_shepherd',
        name: 'Australian Shepherd',
        bodyType: 'Medium working herder, docked/natural tail',
        idealWeight: '40 - 55 lbs',
        temperament: 'Versatile, high drive, eye-catching color genetics',
        colors: [
          { id: 'black_tri', name: 'Black Tri with Copper Points', hex: '#263238', rarity: 'Common', priceModifier: 0 },
          { id: 'red_merle_amber', name: 'Red Merle with Amber Eyes', hex: '#8D6E63', rarity: 'Grand Champion', priceModifier: 85 }
        ],
        specialPerk: 'Pioneer Trail Boss: Guides caravan wagons through dense fog'
      },
      {
        id: 'dog_pembroke_corgi',
        name: 'Pembroke Welsh Corgi',
        bodyType: 'Low-set sturdy herder, foxy expression',
        idealWeight: '26 - 30 lbs',
        temperament: 'Spirited, tenacious cattle drover, affectionate',
        colors: [
          { id: 'red_white_corgi', name: 'Red & White with Full White Collar', hex: '#C66900', rarity: 'Common', priceModifier: 0 },
          { id: 'fawn_sable_corgi', name: 'Sable & White with Black Cast', hex: '#8D5320', rarity: 'Uncommon', priceModifier: 30 }
        ],
        specialPerk: 'Heeler Agility: Easily maneuvers trail animals past narrow canyon hazards'
      },
      {
        id: 'dog_german_shepherd',
        name: 'German Shepherd Dog',
        bodyType: 'Strong noble working trotter',
        idealWeight: '65 - 85 lbs',
        temperament: 'Confident, highly trainable guardian',
        colors: [
          { id: 'black_tan_saddle', name: 'Classic Black & Rich Tan Saddle', hex: '#212121', rarity: 'Common', priceModifier: 0 },
          { id: 'solid_black_shepherd', name: 'Solid Black Working Line', hex: '#111111', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Trail Sentry: 100% protection against overnight campsite supply loss'
      },
      {
        id: 'dog_labrador',
        name: 'Labrador Retriever',
        bodyType: 'Athletic, water-resistant double coat, otter tail',
        idealWeight: '55 - 75 lbs',
        temperament: 'Kind, outgoing, biddable, exceptional swimming ability',
        colors: [
          { id: 'yellow_lab', name: 'Sunny Yellow Honey', hex: '#F9E79F', rarity: 'Common', priceModifier: 0 },
          { id: 'chocolate_lab', name: 'Rich Dark Chocolate', hex: '#4E342E', rarity: 'Uncommon', priceModifier: 35 },
          { id: 'black_lab', name: 'Gloss Jet Black', hex: '#1A1A1A', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'River Guide: Pulls lead ropes safely across swollen river crossings'
      }
    ]
  },

  // =========================================================================
  // 5. POULTRY (Top 6 Chickens, Waterfowl & Turkeys - Trail 4+)
  // =========================================================================
  {
    speciesId: 'poultry',
    speciesName: 'Poultry (Chickens & Waterfowl)',
    emoji: '🐔',
    rank: 5,
    requiredTrail: 4,
    baseCost: 280,
    arbaRegistry: 'APA / ABA Standard of Perfection',
    breeds: [
      {
        id: 'chicken_silkie',
        name: 'Silkie Bantam',
        bodyType: 'Feathered 5-toed crest',
        idealWeight: '32 - 36 oz',
        temperament: 'Fluffy down feathers, docile & cuddly',
        colors: [
          { id: 'pure_white', name: 'Cloud White Crest', hex: '#FFFFFF', rarity: 'Common', priceModifier: 0 },
          { id: 'buff_gold', name: 'Warm Buff Velvet', hex: '#DDB067', rarity: 'Uncommon', priceModifier: 30 },
          { id: 'blue_splash', name: 'Blue Splash Marbled', hex: '#68788C', rarity: 'Rare', priceModifier: 65 }
        ],
        specialPerk: 'Egg Basket: Lays fresh camp breakfast eggs every 20 miles'
      },
      {
        id: 'chicken_plymouth_rock',
        name: 'Barred Plymouth Rock',
        bodyType: 'Dual-Purpose Heavy American',
        idealWeight: '7.5 lbs',
        temperament: 'Hardy winter layer, calm showmanship demeanor',
        colors: [
          { id: 'barred_zebra', name: 'Crisp Zebra Barred Black/White', hex: '#343A40', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Cold Hardy: 0% vitality loss during frosty mountain passes'
      },
      {
        id: 'chicken_ameraucana',
        name: 'Easter Egger Ameraucana',
        bodyType: 'Bearded muffs & pea comb',
        idealWeight: '5.5 - 6.5 lbs',
        temperament: 'Curious, distinctive fluffy cheeks, pastel eggs',
        colors: [
          { id: 'blue_wheaten', name: 'Blue Wheaten Feather Muffs', hex: '#C99E66', rarity: 'Common', priceModifier: 0 },
          { id: 'lavender_pastel', name: 'Self-Lavender Pastel Blue Eggs', hex: '#9FA8DA', rarity: 'Grand Champion', priceModifier: 80 }
        ],
        specialPerk: 'Pastel Eggs: Sells for 2x coin value at Trail Outfitter trading posts'
      },
      {
        id: 'duck_pekin',
        name: 'White Pekin Duck',
        bodyType: 'Heavy Waterfowl, upright posture, waterproof plumage',
        idealWeight: '8 - 9 lbs',
        temperament: 'Cheerful quacker, hardy forager, calm around handlers',
        colors: [
          { id: 'pekin_white_orange', name: 'Crisp White Down & Vibrant Orange Bill', hex: '#FFFDE7', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Water Wayfarer: Finds freshwater springs along arid desert trail legs'
      },
      {
        id: 'chicken_rhode_island',
        name: 'Rhode Island Red',
        bodyType: 'Heavy American dual-purpose layer',
        idealWeight: '6.5 - 8.5 lbs',
        temperament: 'America\'s heritage workhorse layer, vigorous & alert',
        colors: [
          { id: 'rich_mahogany_red', name: 'Rich Mahogany Red Luster', hex: '#7F1D1D', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Sturdy Constitution: +25% cold tolerance through high mountain passes'
      },
      {
        id: 'turkey_heritage_bronze',
        name: 'Heritage Bronze Turkey',
        bodyType: 'Broad-breasted heavy heritage poultry with grand tail fan',
        idealWeight: '18 - 25 lbs',
        temperament: 'Majestic carriage, bold vocal strutting in showmanship',
        colors: [
          { id: 'bronze_iridescent', name: 'Metallic Iridescent Copper Bronze & White Tipped Fan', hex: '#6D4C41', rarity: 'Rare', priceModifier: 70 }
        ],
        specialPerk: 'Grand Frontier Alarm: Alert gobble clears obstructive trail wildlife'
      }
    ]
  },

  // =========================================================================
  // 6. GOATS (Top 6 Dairy & Meat Breeds - Trail 5+)
  // =========================================================================
  {
    speciesId: 'goats',
    speciesName: 'Dairy & Meat Goats',
    emoji: '🐐',
    rank: 6,
    requiredTrail: 5,
    baseCost: 400,
    arbaRegistry: 'ADGA Recognized',
    breeds: [
      {
        id: 'goat_nigerian_dwarf',
        name: 'Nigerian Dwarf Dairy Goat',
        bodyType: 'Miniature Dairy Wedge',
        idealWeight: '50 - 75 lbs',
        temperament: 'Playful, high butterfat milk, friendly',
        colors: [
          { id: 'chamoisee', name: 'Bay Chamoisee with Black Dorsal', hex: '#9E5B32', rarity: 'Common', priceModifier: 0 },
          { id: 'buckskin_gold', name: 'Golden Buckskin & White Belt', hex: '#E5AA68', rarity: 'Uncommon', priceModifier: 40 },
          { id: 'moonspotted_blue', name: 'Frosted Moonspots & Blue Eyes', hex: '#7D8C99', rarity: 'Grand Champion', priceModifier: 110 }
        ],
        specialPerk: 'Rich Milk: Restores +20 Hydration to entire caravan party'
      },
      {
        id: 'goat_boer',
        name: 'Boer Meat Goat',
        bodyType: 'Heavy Muscled Meat Conformation',
        idealWeight: '190 - 230 lbs',
        temperament: 'Calm, rapid growth, distinctive red head',
        colors: [
          { id: 'traditional_red_head', name: 'Traditional White Body & Red Head', hex: '#A94420', rarity: 'Common', priceModifier: 0 },
          { id: 'full_dappled', name: 'Dappled Leopard Paint Boer', hex: '#5D4037', rarity: 'Rare', priceModifier: 75 }
        ],
        specialPerk: 'ADG Booster: Gains Average Daily Gain score 20% faster'
      },
      {
        id: 'goat_nubian',
        name: 'Anglo-Nubian Dairy Goat',
        bodyType: 'Tall regal dairy frame, long pendulous ears',
        idealWeight: '135 - 175 lbs',
        temperament: 'Affectionate, loud musical call, convex Roman nose',
        colors: [
          { id: 'chestnut_frosted', name: 'Rich Chestnut with Frosted Ears', hex: '#6D4C41', rarity: 'Common', priceModifier: 0 },
          { id: 'black_tan_royal', name: 'Royal Black & Tan Sundgau', hex: '#212121', rarity: 'Rare', priceModifier: 65 }
        ],
        specialPerk: 'Butterfat Champion: Produces highest-quality butter for camp'
      },
      {
        id: 'goat_alpine',
        name: 'French Alpine Dairy Goat',
        bodyType: 'Medium-to-large erect ears, dish face, agile mountaineer',
        idealWeight: '135 - 150 lbs',
        temperament: 'Alert, curious, hardy climber with great endurance',
        colors: [
          { id: 'cou_blanc', name: 'Cou Blanc (White Neck/Black Flank)', hex: '#37474F', rarity: 'Common', priceModifier: 0 },
          { id: 'sundgau_alpine', name: 'Sundgau Black with Sharp White Stripes', hex: '#212121', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Steep Ascent: 30% faster navigation on rocky mountain passes'
      },
      {
        id: 'goat_pygmy',
        name: 'American Pygmy Goat',
        bodyType: 'Compact, heavy-boned, full barrel body',
        idealWeight: '45 - 60 lbs',
        temperament: 'Affectionate, hardy pet/meat companion, very agile',
        colors: [
          { id: 'caramel_pygmy', name: 'Caramel with Dark Points', hex: '#C68A4C', rarity: 'Common', priceModifier: 0 },
          { id: 'silver_agouti_pygmy', name: 'Silver Gray Agouti Pattern', hex: '#9E9E9E', rarity: 'Uncommon', priceModifier: 35 }
        ],
        specialPerk: 'Pocket Sized: Never gets stuck in rocky canyon fissures'
      },
      {
        id: 'goat_lamancha',
        name: 'American LaMancha Dairy Goat',
        bodyType: 'Dairy conformation with distinctive gopher/elf ears',
        idealWeight: '130 - 150 lbs',
        temperament: 'Exceptional docility, quiet temperament, high milk butterfat',
        colors: [
          { id: 'sundgau_lamancha', name: 'Classic Bay Sundgau with Elf Ears', hex: '#795548', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Gentle Milker: Produces sweet high-butterfat milk on trail mornings'
      }
    ]
  },

  // =========================================================================
  // 7. SHEEP (Top 6 Breeding & Market Breeds - Trail 6+)
  // =========================================================================
  {
    speciesId: 'sheep',
    speciesName: 'Breeding & Market Sheep',
    emoji: '🐑',
    rank: 7,
    requiredTrail: 6,
    baseCost: 450,
    arbaRegistry: 'National Suffolk & Hampshire Assns',
    breeds: [
      {
        id: 'sheep_southdown',
        name: 'Babydoll Southdown',
        bodyType: 'Compact Dual-Wool & Meat',
        idealWeight: '110 - 150 lbs',
        temperament: 'Smiling wooly face, calm with children',
        colors: [
          { id: 'natural_white_wool', name: 'Cream Snow Fleece', hex: '#F4EFEA', rarity: 'Common', priceModifier: 0 },
          { id: 'black_fleece', name: 'Rare Obsidian Natural Fleece', hex: '#2A292B', rarity: 'Rare', priceModifier: 75 }
        ],
        specialPerk: 'Zero-Copper Guardian: Alerts youth if mineral mix contains copper'
      },
      {
        id: 'sheep_suffolk',
        name: 'Suffolk Market Lamb',
        bodyType: 'Tall meat breed, clean black head & legs',
        idealWeight: '130 - 145 lbs (Fair Market)',
        temperament: 'Energetic, powerful loin muscle',
        colors: [
          { id: 'classic_black_head', name: 'Pure White Fleece & Jet Black Points', hex: '#1C1B1F', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Show Brace: Adds +25 points on Judge Hand Inspection'
      },
      {
        id: 'sheep_dorper',
        name: 'Dorper Hair Sheep',
        bodyType: 'Hardy shedding meat sheep (no shearing needed)',
        idealWeight: '180 - 210 lbs',
        temperament: 'Extremely hardy desert forager, thrives on brush',
        colors: [
          { id: 'blackhead_dorper', name: 'Black Head with Clean White Body', hex: '#263238', rarity: 'Common', priceModifier: 0 },
          { id: 'white_dorper', name: 'All-White Purebred Dorper', hex: '#FAFAFA', rarity: 'Uncommon', priceModifier: 40 }
        ],
        specialPerk: 'Low Maintenance: Never suffers from wool flystrike or burrs'
      },
      {
        id: 'sheep_hampshire',
        name: 'Hampshire Down Market Lamb',
        bodyType: 'Heavy muscular frame, bold black face with wool cap',
        idealWeight: '135 - 150 lbs',
        temperament: 'Rapid muscle growth, deep wide loin',
        colors: [
          { id: 'hamp_black_cap', name: 'Jet Black Face & Dense Snow Wool Cap', hex: '#212121', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Market Muscle: +30 points on market lamb confirmation'
      },
      {
        id: 'sheep_katahdin',
        name: 'Katahdin Hair Sheep',
        bodyType: 'Low maintenance, naturally parasite-resistant hair sheep',
        idealWeight: '140 - 185 lbs',
        temperament: 'Calm, adaptable, naturally sheds coat in spring',
        colors: [
          { id: 'katahdin_piebald', name: 'Crisp Red & White Harlequin Patch', hex: '#B25936', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Parasite Shield: 100% immune to trail pasture internal parasite hazards'
      },
      {
        id: 'sheep_merino',
        name: 'Merino Fine Wool Sheep',
        bodyType: 'Deep pleated skin folds, world-renowned crimped wool',
        idealWeight: '150 - 200 lbs',
        temperament: 'Flocking instinct, serene grazer',
        colors: [
          { id: 'merino_ivory', name: 'Pure Fine Ivory Wool Fleece', hex: '#FFFDD0', rarity: 'Grand Champion', priceModifier: 90 }
        ],
        specialPerk: 'Golden Fleece: Earns +50 coins per fleece shearing at Trading Posts'
      }
    ]
  },

  // =========================================================================
  // 8. SWINE (Top 6 Market & Breeding Breeds - Trail 7+)
  // =========================================================================
  {
    speciesId: 'swine',
    speciesName: 'Market & Breeding Swine',
    emoji: '🐷',
    rank: 8,
    requiredTrail: 7,
    baseCost: 520,
    arbaRegistry: 'NSR National Swine Registry',
    breeds: [
      {
        id: 'swine_hampshire',
        name: 'Hampshire (The Belt)',
        bodyType: 'Erect ears, muscular top',
        idealWeight: '250 - 280 lbs',
        temperament: 'Active driver, responds to show whip tap',
        colors: [
          { id: 'classic_white_belt', name: 'Jet Black with Crisp White Belt', hex: '#1F1E24', rarity: 'Common', priceModifier: 0 },
          { id: 'wide_belt_champion', name: 'Wide Show Belt with Clean Ham', hex: '#2C2B34', rarity: 'Rare', priceModifier: 70 }
        ],
        specialPerk: 'Drive Ring Master: Drives 15 feet ahead of judge with ease'
      },
      {
        id: 'swine_duroc',
        name: 'Duroc Red Swine',
        bodyType: 'Drooped ears, deep cherry red, meat champion',
        idealWeight: '260 - 290 lbs',
        temperament: 'Calm, docile, rapid feed efficiency',
        colors: [
          { id: 'cherry_red', name: 'Deep Red Mahogany Cherry', hex: '#7E2B1E', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Cool Mist Resilience: 25% lower heat stress in summer shows'
      },
      {
        id: 'swine_berkshire',
        name: 'Berkshire (Heritage Kurobuta)',
        bodyType: 'Erect ears, 6 white points, prized marbled pork',
        idealWeight: '250 - 275 lbs',
        temperament: 'Docile, friendly personality, intelligent',
        colors: [
          { id: 'berkshire_six_points', name: 'Gloss Black with 6 White Points (Feet, Face, Tail)', hex: '#1A1A1D', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Heritage Quality: +30 points in Carcass & Ultrasound evaluation'
      },
      {
        id: 'swine_yorkshire',
        name: 'Yorkshire (The Mother Breed)',
        bodyType: 'Long-bodied erect ears, high scale frame',
        idealWeight: '250 - 280 lbs',
        temperament: 'Calm, high maternal instinct, superior feed conversion',
        colors: [
          { id: 'pearl_white_york', name: 'Pure Pearl White & Erect Ears', hex: '#FFFFFF', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Feed Efficiency: Consumes 20% less rations per 10 trail miles'
      },
      {
        id: 'swine_chester_white',
        name: 'Chester White',
        bodyType: 'Medium drooped ears, rugged mothering frame',
        idealWeight: '250 - 275 lbs',
        temperament: 'Gentle, durable, outstanding carcass quality',
        colors: [
          { id: 'chester_snow', name: 'Solid White with Drooped Ears', hex: '#FAFAFA', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Durable Walker: Never develops hoof soreness on gravel trails'
      },
      {
        id: 'swine_spotted',
        name: 'Spotted Swine (Spot)',
        bodyType: 'Drooped ears, 50/50 black and white spots',
        idealWeight: '260 - 290 lbs',
        temperament: 'Vigorous, aggressive feed intake, rapid weight gain',
        colors: [
          { id: 'spot_black_white', name: 'Bold Dalmation Black & White Spots', hex: '#37474F', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Fast Finisher: Reaches 270 lbs fair weight in record time'
      }
    ]
  },

  // =========================================================================
  // 9. DAIRY CATTLE (Top 6 Dairy Breeds - Trail 8+)
  // =========================================================================
  {
    speciesId: 'dairy_cattle',
    speciesName: 'Dairy Cattle',
    emoji: '🥛',
    rank: 9,
    requiredTrail: 8,
    baseCost: 650,
    arbaRegistry: 'Holstein & Jersey Cattle Assns',
    breeds: [
      {
        id: 'dairy_jersey',
        name: 'Jersey Heifer',
        bodyType: 'Refined dairy wedge, dished face',
        idealWeight: '900 - 1,000 lbs',
        temperament: 'Gentle, docile, large expressive eyes',
        colors: [
          { id: 'mulberry_fawn', name: 'Warm Fawn & Dark Muzzle', hex: '#B87A4A', rarity: 'Common', priceModifier: 0 },
          { id: 'golden_fawn_star', name: 'Golden Fawn with Forehead Star', hex: '#D28B4E', rarity: 'Uncommon', priceModifier: 50 }
        ],
        specialPerk: 'High Butterfat: Supplies entire camp with butter and sweet milk'
      },
      {
        id: 'dairy_holstein',
        name: 'Holstein Friesian',
        bodyType: 'Large high-capacity dairy frame',
        idealWeight: '1,400 - 1,500 lbs',
        temperament: 'Even-tempered, responsive to halter cues',
        colors: [
          { id: 'piebald_black_white', name: 'Distinctive Piebald Black & White', hex: '#1C1C1E', rarity: 'Common', priceModifier: 0 },
          { id: 'red_white_holstein', name: 'Rare Recessive Red & White Pattern', hex: '#9E3827', rarity: 'Grand Champion', priceModifier: 120 }
        ],
        specialPerk: 'Volume Leader: Triples daily milk trade points at Outfitters'
      },
      {
        id: 'dairy_guernsey',
        name: 'Golden Guernsey',
        bodyType: 'Medium dairy frame, golden-yellow skin pigment',
        idealWeight: '1,100 - 1,200 lbs',
        temperament: 'Calm, docile disposition, famous for golden A2 milk',
        colors: [
          { id: 'fawn_white_patches', name: 'Golden Fawn with Clear White Flank', hex: '#E09F5A', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Golden Beta-Carotene: Restores party vigor +30% each camp'
      },
      {
        id: 'dairy_brown_swiss',
        name: 'Brown Swiss (Alpine Heritage)',
        bodyType: 'Large sturdy dairy frame, distinctive docile muzzle',
        idealWeight: '1,300 - 1,400 lbs',
        temperament: 'Unflappable, gentle demeanor, high protein milk',
        colors: [
          { id: 'slate_brown_swiss', name: 'Solid Slate Gray to Warm Brown', hex: '#6D5D53', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Mountain Hardiness: Never tires during steep mountain stages'
      },
      {
        id: 'dairy_ayrshire',
        name: 'Ayrshire Dairy Cow',
        bodyType: 'Medium dairy frame, graceful Scottish head and neck',
        idealWeight: '1,200 lbs',
        temperament: 'Active, alert, thrives in tough pasture terrain',
        colors: [
          { id: 'ayrshire_mahogany', name: 'White with Vivid Mahogany Red Spots', hex: '#A93226', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Rugged Forager: Finds nutritious grass on rocky cliff edges'
      },
      {
        id: 'dairy_milking_shorthorn',
        name: 'Milking Shorthorn',
        bodyType: 'Dual-purpose dairy frame, roan genetics',
        idealWeight: '1,250 - 1,400 lbs',
        temperament: 'Extremely docile, easy calver, long productive life',
        colors: [
          { id: 'shorthorn_strawberry_roan', name: 'Classic Strawberry Red Roan', hex: '#BD6B56', rarity: 'Rare', priceModifier: 55 }
        ],
        specialPerk: 'Heritage Calmer: Completely prevents panic during loud thunderstorms'
      }
    ]
  },

  // =========================================================================
  // 10. BEEF CATTLE (Top 6 Market & Breeding Breeds - Trail 9+)
  // =========================================================================
  {
    speciesId: 'beef_cattle',
    speciesName: 'Market & Breeding Beef',
    emoji: '🐂',
    rank: 10,
    requiredTrail: 9,
    baseCost: 750,
    arbaRegistry: 'American Angus & Hereford Assns',
    breeds: [
      {
        id: 'beef_angus',
        name: 'Black Angus Steer',
        bodyType: 'Smooth polled, deep flank, thick ribeye',
        idealWeight: '1,250 - 1,350 lbs',
        temperament: 'Responds to show stick touch under belly',
        colors: [
          { id: 'solid_black', name: 'Gloss Carbon Black', hex: '#141416', rarity: 'Common', priceModifier: 0 },
          { id: 'red_angus', name: 'Crimson Rust Red Angus', hex: '#7A2E20', rarity: 'Rare', priceModifier: 80 }
        ],
        specialPerk: 'Show Stick Pro: Sets all 4 feet square within 3 seconds'
      },
      {
        id: 'beef_hereford',
        name: 'Polled Hereford',
        bodyType: 'Deep-bodied, white face & red coat',
        idealWeight: '1,300 lbs',
        temperament: 'Docile, easily led across rough river beds',
        colors: [
          { id: 'feather_neck', name: 'Classic Red with White Crest & Muzzle', hex: '#8F341F', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Draft Power: Can pull bogged wagons out of mud holes'
      },
      {
        id: 'beef_charolais',
        name: 'Charolais French Heavy Beef',
        bodyType: 'Massive muscular frame, wide top, deep quarter',
        idealWeight: '1,350 - 1,450 lbs',
        temperament: 'Powerful, steady walking stride in show ring',
        colors: [
          { id: 'creamy_white_straw', name: 'Creamy White to Straw Fleece', hex: '#FFF9C4', rarity: 'Common', priceModifier: 0 },
          { id: 'smoky_cross', name: 'Silver Smoky Composite', hex: '#78909C', rarity: 'Rare', priceModifier: 70 }
        ],
        specialPerk: 'High Cutability: Highest ribeye area score in market classes'
      },
      {
        id: 'beef_highland',
        name: 'Scottish Highland Cattle',
        bodyType: 'Dramatic wide horns, shaggy double hair coat',
        idealWeight: '1,100 - 1,300 lbs',
        temperament: 'Majestic Scottish heritage, supreme weather resilience',
        colors: [
          { id: 'highland_dun', name: 'Shaggy Golden Dun & Wide Horns', hex: '#C49A45', rarity: 'Common', priceModifier: 0 },
          { id: 'highland_red', name: 'Traditional Scottish Russet Red', hex: '#9E3D24', rarity: 'Rare', priceModifier: 85 }
        ],
        specialPerk: 'Severe Weather Shield: Completely immune to blizzard/rain chill penalties'
      },
      {
        id: 'beef_red_angus',
        name: 'Red Angus',
        bodyType: 'Naturally polled, deep cherry red carcass conformation',
        idealWeight: '1,250 - 1,350 lbs',
        temperament: 'Excellent maternal instinct, heat tolerant',
        colors: [
          { id: 'red_angus_cherry', name: 'Uniform Cherry Red Coat', hex: '#873600', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Summer Cool: 25% lower heat stress on scorching prairie trail legs'
      },
      {
        id: 'beef_simmental',
        name: 'Simmental Beef',
        bodyType: 'Large muscular Swiss frame with distinctive blaze face',
        idealWeight: '1,350 - 1,480 lbs',
        temperament: 'Docile giant, powerful rear quarter muscling',
        colors: [
          { id: 'simmental_gold_white', name: 'Gold-Red with Clean White Blaze', hex: '#D35400', rarity: 'Uncommon', priceModifier: 45 }
        ],
        specialPerk: 'Muscle Density: Top score in ultrasound eye-muscle depth'
      }
    ]
  },

  // =========================================================================
  // 11. HORSES & PONIES (Top 6 Equine Breeds - Trail 10)
  // =========================================================================
  {
    speciesId: 'horses',
    speciesName: 'Equine (Horses & Ponies)',
    emoji: '🐴',
    rank: 11,
    requiredTrail: 10,
    baseCost: 900,
    arbaRegistry: 'AQHA / APHA / 4-H Equine Program',
    breeds: [
      {
        id: 'horse_quarter_horse',
        name: 'American Quarter Horse',
        bodyType: 'Compact, heavy muscled hindquarters',
        idealWeight: '1,000 - 1,200 lbs',
        temperament: 'Sensible, cow sense, quick learner',
        colors: [
          { id: 'sorrel', name: 'Chestnut Sorrel with Flaxen Mane', hex: '#A34C2B', rarity: 'Common', priceModifier: 0 },
          { id: 'bay_black_points', name: 'Mahogany Bay & Black Legs', hex: '#632B1A', rarity: 'Uncommon', priceModifier: 50 },
          { id: 'palomino_gold', name: 'Golden Coin Palomino with White Mane', hex: '#E2B15D', rarity: 'Rare', priceModifier: 110 },
          { id: 'blue_roan', name: 'Silver Blue Roan Frost', hex: '#586A7A', rarity: 'Grand Champion', priceModifier: 180 }
        ],
        specialPerk: 'Pioneer Lead: Increases caravan travel speed by +25% across all trails'
      },
      {
        id: 'horse_appaloosa',
        name: 'Appaloosa Leopard',
        bodyType: 'Mottled skin, striped hooves, spotted blanket',
        idealWeight: '1,050 lbs',
        temperament: 'Endurance champion, Surefooted on rocky mountain cliffs',
        colors: [
          { id: 'leopard_spots', name: 'Full Snow Leopard Black Spots', hex: '#EAEAEA', rarity: 'Rare', priceModifier: 120 }
        ],
        specialPerk: 'Mountain Surefooted: 0% risk of wheel slip on cliff trails'
      },
      {
        id: 'horse_paint',
        name: 'American Paint Horse',
        bodyType: 'Muscular stock horse with splash pinto markings',
        idealWeight: '1,050 - 1,150 lbs',
        temperament: 'Friendly, striking ring presence',
        colors: [
          { id: 'tobiano_bay', name: 'Tobiano Bay & Crisp White Overo', hex: '#5D4037', rarity: 'Common', priceModifier: 0 },
          { id: 'medicine_hat', name: 'Sacred Medicine Hat & Blue Eyes', hex: '#FFFFFF', rarity: 'Grand Champion', priceModifier: 160 }
        ],
        specialPerk: 'Ring Charisma: +30 points in Equine Western Showmanship'
      },
      {
        id: 'horse_shetland',
        name: 'Shetland Heritage Pony',
        bodyType: 'Compact ultra-hardy draft pony, heavy mane and forelock',
        idealWeight: '400 - 450 lbs',
        temperament: 'High endurance, sturdy companion for young exhibitors',
        colors: [
          { id: 'shetland_flaxen', name: 'Dappled Flaxen Chestnut & White Mane', hex: '#D7A15C', rarity: 'Common', priceModifier: 0 },
          { id: 'shetland_piebald', name: 'Piebald High-Contrast Black & White', hex: '#1E1E24', rarity: 'Uncommon', priceModifier: 45 }
        ],
        specialPerk: 'Junior Leadline Hero: +35 points for Cloverbud and Junior trail riders'
      },
      {
        id: 'horse_clydesdale',
        name: 'Clydesdale Gentle Giant',
        bodyType: 'Massive Scottish draft horse with glorious feathered hooves',
        idealWeight: '1,800 - 2,000 lbs',
        temperament: 'Gentle, magnificent high-stepping gait, great pulling strength',
        colors: [
          { id: 'clydesdale_bay_blaze', name: 'Rich Bay with Wide White Blaze & 4 White Feathers', hex: '#5D4037', rarity: 'Grand Champion', priceModifier: 150 }
        ],
        specialPerk: 'Heavy Draft Haul: Pulls overloaded heavy supply wagons without slowing'
      },
      {
        id: 'horse_arabian',
        name: 'Arabian Desert Horse',
        bodyType: 'Finely dished face, arched neck, high tail carriage',
        idealWeight: '900 - 1,000 lbs',
        temperament: 'Spirited, supreme desert endurance, deep lung capacity',
        colors: [
          { id: 'arabian_grey_dappled', name: 'Silver Dappled Rose Grey', hex: '#CFD8DC', rarity: 'Rare', priceModifier: 95 }
        ],
        specialPerk: 'Desert Wind: Never runs out of stamina in scorching desert legs'
      }
    ]
  },

  // =========================================================================
  // 12. VETERINARY SCIENCE (Top 6 Clinical Assessment Partners - Master Trail 10)
  // =========================================================================
  {
    speciesId: 'vet_science',
    speciesName: 'Veterinary Science Clinical Partner',
    emoji: '🩺',
    rank: 12,
    requiredTrail: 10,
    baseCost: 1000,
    arbaRegistry: 'WarrenWise Comparative Vet Medicine Track',
    breeds: [
      {
        id: 'vet_canine_partner',
        name: 'Clinical Canine Assessment Companion',
        bodyType: 'Anatomical Teaching Partner',
        idealWeight: 'Standard',
        temperament: 'Calm, patient for heart-rate & stethoscope exams',
        colors: [
          { id: 'golden_lab', name: 'Certified Therapy Golden Honey', hex: '#E8B96D', rarity: 'Common', priceModifier: 0 },
          { id: 'tricolor_berner', name: 'Swiss Mountain Clinical Guard', hex: '#1C1B20', rarity: 'Grand Champion', priceModifier: 150 }
        ],
        specialPerk: 'Vet Triage: Instantly spots early illness signs in any caravan animal'
      },
      {
        id: 'vet_equine_model',
        name: 'Equine Anatomy & Colic Assessment Sim',
        bodyType: 'Full-Scale Veterinary Teaching Simulator',
        idealWeight: 'N/A (Clinical Simulator)',
        temperament: 'Features working heart sounds & digestive quadrants',
        colors: [
          { id: 'clinical_bay', name: 'Standard Clinical Chestnut/Bay', hex: '#795548', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Stethoscope Master: +40 bonus points on all Vet Science oral exams'
      },
      {
        id: 'vet_canine_cpr',
        name: 'Canine CPR & Emergency Bandaging Model',
        bodyType: 'Life-Size Anatomical Emergency Manikin',
        idealWeight: 'Clinical Practice Standard',
        temperament: 'Functional chest compression airway and limb bandaging joints',
        colors: [
          { id: 'medical_blue', name: 'Clinical Blue & Diagnostic White', hex: '#0288D1', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Emergency Responder: +50 points on all clinical first-aid stations'
      },
      {
        id: 'vet_feline_dental',
        name: 'Feline Clinical & Dental Triage Partner',
        bodyType: 'Feline Clinical Teaching Partner',
        idealWeight: 'Standard Small Animal',
        temperament: 'Calm for ear-mite, ocular, and dental tartar checks',
        colors: [
          { id: 'feline_silver_tabby', name: 'Silver Tabby Diagnostic Partner', hex: '#9E9E9E', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'Micro-Assessment: Identifies small animal health cues instantly'
      },
      {
        id: 'vet_ruminant_bloat',
        name: 'Livestock Ruminant & Bloat Assessment Model',
        bodyType: 'Full Ruminant Anatomical Cross-Section',
        idealWeight: 'Teaching Lab Scale',
        temperament: 'Demonstrates 4 stomach compartments and bloat gas relief',
        colors: [
          { id: 'ruminant_diagram_color', name: 'Diagnostic Anatomical Color-Coded', hex: '#43A047', rarity: 'Uncommon', priceModifier: 40 }
        ],
        specialPerk: 'Rumen Whisperer: Prevents bloat casualties across the entire herd'
      },
      {
        id: 'vet_avian_exotic',
        name: 'Avian & Exotic Clinical Health Model',
        bodyType: 'Avian Air-Sac & Keel Bone Evaluation Sim',
        idealWeight: 'Clinical Aviary Scale',
        temperament: 'Shows crop impaction, feather health, and wing bandaging',
        colors: [
          { id: 'avian_emerald_blue', name: 'Clinical Feather Diagnostic Pattern', hex: '#00ACC1', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: 'Flock Biosecurity: 100% defense against avian respiratory issues'
      }
    ]
  }
];

/**
 * Calculates purchase price for an animal based on species base price, breed rarity, and color tier.
 */
export function calculatePetPrice(speciesId, breedId, colorId) {
  const species = PET_STORE_BREEDS.find(s => s.speciesId === speciesId);
  if (!species) return 150;

  const breed = species.breeds.find(b => b.id === breedId) || species.breeds[0];
  const color = breed.colors.find(c => c.id === colorId) || breed.colors[0];

  return species.baseCost + (color.priceModifier || 0);
}
