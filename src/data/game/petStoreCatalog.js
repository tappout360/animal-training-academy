// WarrenWise Animal Academy - Official Livestock & Companion Pet Store Catalog
// 12 Species with authentic breeds, coat color genetics, temperament traits, and 4-H Trail compatibility.
// Fully balanced economy: Higher-tier trails require unlocking/adopting matching species.

export const PET_STORE_BREEDS = [
  // 1. RABBITS (Rank 1 - Starter Trail 1+)
  {
    speciesId: 'rabbits',
    speciesName: 'Rabbits',
    emoji: '🐰',
    rank: 1,
    requiredTrail: 1,
    baseCost: 150,
    arbaRegistry: 'ARBA Recognized',
    breeds: [
      {
        id: 'rabbit_holland_lop',
        name: 'Holland Lop',
        bodyType: 'Compact',
        idealWeight: '3.5 - 4.0 lbs',
        temperament: 'Curious, doclie, gentle demeanor',
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
        temperament: 'Plush velvet coat, lively & alert',
        colors: [
          { id: 'castor', name: 'Castor (Rich mahogany red)', hex: '#8B3A1C', rarity: 'Common', priceModifier: 0 },
          { id: 'black_velvet', name: 'Jet Black Gloss Velvet', hex: '#1C1C1E', rarity: 'Uncommon', priceModifier: 30 },
          { id: 'opal', name: 'Opal Fawn Gray', hex: '#A89F91', rarity: 'Rare', priceModifier: 55 },
          { id: 'harlequin', name: 'Japanese Harlequin Checker', hex: '#E2973E', rarity: 'Grand Champion', priceModifier: 100 }
        ],
        specialPerk: '+20% Natural Coat Sheen (resists trail dust)'
      },
      {
        id: 'rabbit_flemish_giant',
        name: 'Flemish Giant',
        bodyType: 'Semi-Arch (Mandolin)',
        idealWeight: '14 - 18 lbs',
        temperament: 'Gentle giant, calm under pressure',
        colors: [
          { id: 'sandy', name: 'Sandy Reddish Brass', hex: '#C29B38', rarity: 'Common', priceModifier: 0 },
          { id: 'steel_gray', name: 'Steel Gray Slate', hex: '#5A636A', rarity: 'Uncommon', priceModifier: 35 },
          { id: 'fawn_gold', name: 'Golden Fawn', hex: '#D9A74A', rarity: 'Rare', priceModifier: 60 }
        ],
        specialPerk: '+25% Wagon Calamity Resilience (calms fellow animals)'
      }
    ]
  },

  // 2. CAVIES / GUINEA PIGS (Rank 2 - Trail 2+)
  {
    speciesId: 'cavies',
    speciesName: 'Cavies (Guinea Pigs)',
    emoji: '🐹',
    rank: 2,
    requiredTrail: 2,
    baseCost: 200,
    arbaRegistry: 'ACBA Recognized',
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
        bodyType: '8-10 symmetrical rosettes',
        idealWeight: '2.0 - 2.8 lbs',
        temperament: 'Spunky, dramatic rosette crests',
        colors: [
          { id: 'brindle', name: 'Tiger Brindle Red/Black', hex: '#703A1A', rarity: 'Common', priceModifier: 0 },
          { id: 'tortoise_white', name: 'Show Tortoise & White', hex: '#C47335', rarity: 'Uncommon', priceModifier: 30 }
        ],
        specialPerk: '+15% Show Ring Texture distinction score'
      }
    ]
  },

  // 3. CATS (Rank 3 - Trail 3+)
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
      }
    ]
  },

  // 4. DOGS (Rank 4 - Trail 4+)
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
      }
    ]
  },

  // 5. POULTRY (Rank 5 - Trail 4+)
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
      }
    ]
  },

  // 6. GOATS (Rank 6 - Trail 5+)
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
          { id: 'traditional_red_head', name: 'Traditional White Body & Red Head', hex: '#A94420', rarity: 'Common', priceModifier: 0 }
        ],
        specialPerk: 'ADG Booster: Gains Average Daily Gain score 20% faster'
      }
    ]
  },

  // 7. SHEEP (Rank 7 - Trail 6+)
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
      }
    ]
  },

  // 8. SWINE (Rank 8 - Trail 7+)
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
      }
    ]
  },

  // 9. DAIRY CATTLE (Rank 9 - Trail 8+)
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
        temperament: 'Gentle, doclie, large expressive eyes',
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
      }
    ]
  },

  // 10. BEEF CATTLE (Rank 10 - Trail 9+)
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
      }
    ]
  },

  // 11. HORSES & PONIES (Rank 11 - Master Trail 10)
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
      }
    ]
  },

  // 12. VETERINARY SCIENCE COMPANION (Rank 12 - Master Scholar)
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
        name: 'Clinical Assessment Companion',
        bodyType: 'Anatomical Teaching Partner',
        idealWeight: 'Standard',
        temperament: 'Calm, patient for heart-rate & stethoscope exams',
        colors: [
          { id: 'golden_lab', name: 'Certified Therapy Golden Honey', hex: '#E8B96D', rarity: 'Common', priceModifier: 0 },
          { id: 'tricolor_berner', name: 'Swiss Mountain Clinical Guard', hex: '#1C1B20', rarity: 'Grand Champion', priceModifier: 150 }
        ],
        specialPerk: 'Vet Triage: Instantly spots early illness signs in any caravan animal'
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
