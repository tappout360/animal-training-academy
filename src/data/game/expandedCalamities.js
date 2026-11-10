// WarrenWise Animal Academy - Expanded Oregon Trail Calamities & Survival Hazards
// Detailed realistic challenges: What goes wrong, what happens visually & audibly,
// and the hands-on solutions youth purchase & apply to heal, repair, or overcome the disaster!

export const EXPANDED_CALAMITIES = [
  {
    id: 'calamity_river_flash_flood',
    title: 'Roaring Snake River Flash Flood & Sinking Wagon',
    category: 'water_crossing',
    severity: 'CRITICAL',
    audioKey: 'splash',
    visualBefore: {
      scene: 'Wagon tilted 45° in raging muddy white-water rapids, muddy foam rushing over carriage floor, animal cages sloshing with water!',
      emojis: '🌊⛈️🪵🐴😱',
      status: 'CRITICAL: Wagon Flooding · Hypothermia Risk · Feed Soaked'
    },
    visualAfter: {
      scene: 'Wagon caulked tight like a boat with pine pitch, secured with heavy hemp guide rope & hoisted safely up the sandy riverbank to a warm fire!',
      emojis: '🪵🚣‍♂️🏮🔥✨',
      status: 'RECOVERED: River Crossed · 100% Dry · Animals Safe by Fire'
    },
    story: 'Spring snowmelt turned the normally shallow pebble ford into a 6-foot roaring torrential river! As the wagon entered the water, the left wheels hit a sunken boulder and submerged. Frantic splashing fills the caravan, and cages begin bobbing in the freezing river flow!',
    wrongChoicePenalty: {
      supplies: { feed: -30, bedding: -25, transportGear: -20 },
      vigorHydration: -20,
      temperament: -25,
      coatCondition: -20
    },
    educationalLesson: 'Never rush into murky moving water higher than the wagon hubs. Pioneer stockmanship requires testing water depth with a sounding pole, waterproofing the wagon box bottom with pine pitch tallow, and removing small animals to a high tow platform.',
    solutionItem: {
      id: 'fix_river_caulk_harness',
      name: 'Pine Pitch Box Caulking & High-Water Floating Rig',
      cost: 95,
      emoji: '🪵🚣‍♂️',
      actionVerb: 'Caulk Wagon Box & Float Safely'
    }
  },
  {
    id: 'calamity_desert_heatwave',
    title: '104°F Alkali Desert Heatwave & Severe Heat Stroke Alert',
    category: 'heat_stress',
    severity: 'CRITICAL',
    audioKey: 'wind',
    visualBefore: {
      scene: 'Blistering desert sun beating mercilessly on dry cracked alkali earth, rabbit ears engorged with red veins, panting with open mouths in 104°F heat!',
      emojis: '☀️🌵🔥🥵🥀',
      status: 'CRITICAL: Heat Stroke Threat · Core Temp Spiking · Lethargy'
    },
    visualAfter: {
      scene: 'Reflective silver sun-shade canopy deployed over wagon, terracotta cooling tiles placed under paws, cool misting breeze keeping pets at ideal 68°F!',
      emojis: '⛺❄️💨💧😌✨',
      status: 'RECOVERED: Shaded · Terracotta Tiles Cold · Vitals Stabilized'
    },
    story: 'At 1:00 PM crossing the 40-mile desert stretch, the temperature soars to 104°F with zero breeze. Small animals cannot sweat! Your rabbit Barnaby is panting rapidly with dilated ear vessels, and the cavy Pippin lies flat on his side, dangerously overheated!',
    wrongChoicePenalty: {
      vigorHydration: -35,
      temperament: -20,
      supplies: { water: -30 }
    },
    educationalLesson: 'Rabbits and cavies are extremely susceptible to fatal heat stroke above 85°F. Never submerge an overheated animal in ice water (which causes fatal vascular shock). Instead, provide shade, evaporative terracotta tiles, and gently mist ears with room-temperature water.',
    solutionItem: {
      id: 'fix_desert_shade_chiller',
      name: 'Reflective Solar Sun-Canopy & Chilled Terracotta Tile Kit',
      cost: 85,
      emoji: '⛺❄️',
      actionVerb: 'Rig Reflective Canopy & Chilled Tiles'
    }
  },
  {
    id: 'calamity_stampede_coyote_panic',
    title: 'Midnight Prairie Wolf Pack Howl & Wire Door Breach',
    category: 'predator_security',
    severity: 'SEVERE',
    audioKey: 'howl',
    visualBefore: {
      scene: 'Pack of yellow-eyed prairie wolves pacing 10 feet from the wagon in deep shadows, sharp claws tearing at weak chicken-wire latch!',
      emojis: '🐺🌕🪵💥😱',
      status: 'SEVERE: Wire Latch Bent · Panic Thumping · Predator at Door'
    },
    visualAfter: {
      scene: 'Bright kerosene perimeter lanterns lit, two-step safety brass carabiners locked, 14-gauge hardware cloth firmly repelling predators!',
      emojis: '🏮🛡️🔒🐕😴',
      status: 'RECOVERED: Camp Fortified · Night Watch Guarding · Pets Asleep'
    },
    story: 'Under a bone-white full moon, eerie hunting howls echo across the sagebrush. A cunning wolf pack sneaks past the wagon tongue. One predator leaps onto the tailgate, gnawing at a flimsy single-hook wire latch until it bends outward!',
    wrongChoicePenalty: {
      temperament: -30,
      poseTraining: -20,
      supplies: { transportGear: -20 }
    },
    educationalLesson: 'Predators like raccoons, foxes, and wolves have nimble paws that easily unhook simple wire latches. True biosecurity requires two-step child-proof brass carabiners and perimeter lanterns that keep wildlife outside the 30-yard camp ring.',
    solutionItem: {
      id: 'fix_predator_lantern_carabiner',
      name: 'High-Lumen Perimeter Lanterns & Dual-Lock Brass Carabiners',
      cost: 90,
      emoji: '🏮🔒',
      actionVerb: 'Lock Carabiners & Light Perimeter'
    }
  },
  {
    id: 'calamity_toxic_forage_weeds',
    title: 'Poisonous Water Hemlock & Spoilage in Feed Bins',
    category: 'feed_toxicity',
    severity: 'CRITICAL',
    audioKey: 'alert',
    visualBefore: {
      scene: 'Bucket of harvested wild trailside greens containing purple-spotted water hemlock and white moldy damp hay in the wagon corner!',
      emojis: '🥀☠️🧺🤢❌',
      status: 'CRITICAL: Toxic Weeds in Trough · Feed Spoilage · Ingestion Risk'
    },
    visualAfter: {
      scene: 'Certified Weed-Free 1st-Cutting Sun-Cured Western Timothy Hay bales cleanly stacked on elevated slatted cedar racks with mineral salt block!',
      emojis: '🌾🏆🪵✨😋',
      status: 'RECOVERED: Inspected Feed Bins · Pure Green Fiber · Motility Thriving'
    },
    story: 'Running low on rations, someone picked wild trailside celery greens that turn out to be deadly poisonous Water Hemlock! At the same time, floor moisture seeped into the hay bags, breeding poisonous white Aspergillus mold spores.',
    wrongChoicePenalty: {
      vigorHydration: -25,
      coatCondition: -20,
      supplies: { feed: -45 }
    },
    educationalLesson: 'Water hemlock contains lethal cicutoxin that causes violent seizures within 30 minutes. Never harvest unverified wild plants. All livestock and small animals must receive verified, certified weed-free forage kept on dry elevated cedar slats.',
    solutionItem: {
      id: 'fix_certified_hay_rack',
      name: 'Certified Weed-Free Western Timothy Bales & Elevated Cedar Racks',
      cost: 80,
      emoji: '🌾🪵',
      actionVerb: 'Restock Pure Timothy & Install Racks'
    }
  }
];
