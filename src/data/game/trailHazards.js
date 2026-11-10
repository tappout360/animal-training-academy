// WarrenWise Animal Academy - Herd Trail Quest
// Master Trail Calamities & Hazards System (The Oregon Trail Reality)
// Triggered when wrong answers or poor husbandry choices occur on the overland trail.

export const TRAIL_HAZARDS = [
  {
    id: 'hazard_bear_raid',
    name: 'Midnight Black Bear Feed Raid & Smashed Tailgate',
    severity: 'CRITICAL',
    category: 'predator_biosecurity',
    audioCue: 'bear_growl',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'At 2:00 AM under a crescent moon, a 350-pound mountain black bear smells unsealed sweet grain downwind! The bear lumbers into camp, claws open the rear canvas flap, smashes the wooden wagon tailgate off its hinges, and devours half your feed sacks! Inside his reinforced travel hutch, your companion is physically safe but thumping his hind legs in sheer terror.',
    penalties: {
      temperament: -30,
      coatCondition: -10,
      supplies: { feed: -40, transportGear: -25 },
      milesDelayed: 6
    },
    educationalLesson: 'Never leave sweet molasses grain or open feed tubs outside at night. Predator biosecurity requires locking all rations in airtight metal vaults and housing small animals inside heavy-gauge welded wire enclosures.',
    recoveryPrompt: 'Perform "Fill With Love" calming strokes immediately, then visit the Trading Post for the Bear-Proof Galvanized Feed Vault & Oak Tailgate Repair Kit (95 pts).',
    solutionItem: {
      id: 'repair_bear_vault_tailgate',
      name: 'Bear-Proof Galvanized Feed Vault & Oak Tailgate Kit',
      cost: 95,
      emoji: '🐻‍❄️'
    }
  },
  {
    id: 'hazard_thrown_wheel_tire',
    name: 'Shattered Hickory Wheel & Thrown Iron Tire',
    severity: 'SEVERE',
    category: 'breakdown',
    audioCue: 'wheel_crash',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'CRACK-CLANG! Your front-right wagon wheel slams into a jagged granite washout rut at Devil’s Gulch. Three wooden spokes snap like dry kindling and the heavy iron outer tire rim flies completely off the wheel, rolling down the canyon! Your wagon lurches to a halt at a steep 30-degree tilt.',
    penalties: {
      temperament: -20,
      poseTraining: -15,
      supplies: { transportGear: -35, water: -15 },
      milesDelayed: 8
    },
    educationalLesson: 'Rough transit jolts can injure delicate animal spines or cause broken teeth against cage wire. Slow down over rocky ruts and brace carriers on shock-absorbing felt pads.',
    recoveryPrompt: 'Your wagon wheel is crippled! Purchase a Spare Seasoned Hickory Wheel & Forged Iron Tire (110 pts) at the Outfitter to jack up the axle and replace the tire.',
    solutionItem: {
      id: 'repair_spare_wheel_tire',
      name: 'Spare Seasoned Hickory Wheel & Forged Iron Tire',
      cost: 110,
      emoji: '🛞'
    }
  },
  {
    id: 'hazard_early_illness_vet',
    name: 'Early GI Slowdown & Respiratory Sniffles (Veterinary Alert)',
    severity: 'CRITICAL',
    category: 'health_alert',
    audioCue: 'vet_alert',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'During morning barn check, you notice your companion sitting hunched in a tight "bread-loaf" posture in the back corner of the pen. Morning pellets are untouched, droppings are tiny and scant, and there is slight dampness around the nostrils. Immediate professional evaluation is needed!',
    penalties: {
      vigorHydration: -30,
      coatCondition: -15,
      temperament: -20,
      supplies: { feed: -10 }
    },
    educationalLesson: 'Hunched posture, tooth grinding, and untouched feed are classic early warning signs of gastrointestinal stasis or respiratory irritation. Never guess at home medications—always isolate, keep warm, and call a licensed veterinarian immediately.',
    recoveryPrompt: 'Dispatch the Licensed Mobile Trail Veterinarian & Supportive Care Recovery Pack (120 pts) at the Outfitter for a stethoscope exam, hydration support, and critical-care herb mash!',
    solutionItem: {
      id: 'camp_mobile_vet_visit',
      name: 'Licensed Mobile Veterinarian Visit & Supportive Recovery Pack',
      cost: 120,
      emoji: '🩺'
    }
  },
  {
    id: 'hazard_coyote_prowl',
    name: 'Night Coyote Pack Prowl & Bent Carrier Latch',
    severity: 'SEVERE',
    category: 'predator_biosecurity',
    audioCue: 'alert',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'Drawn by soiled bedding left near camp, a pair of bold prairie coyotes circle the wagon at midnight! One leaps onto the wagon tongue and scratches at the outer carrier door, bending the light wire latch before your camp lantern scares the pack away.',
    penalties: {
      temperament: -25,
      poseTraining: -15,
      supplies: { transportGear: -20, bedding: -15 }
    },
    educationalLesson: 'Thin chicken wire only keeps poultry in—it never keeps predators out! Always protect small animal housing with 1/2-inch 14-gauge welded hardware cloth and two-step carabiner safety latches.',
    recoveryPrompt: 'Upgrade to the 14-Gauge Predator Hardware Cloth & Carabiner Safety Latch (90 pts) at the Outfitter and comfort your animal.',
    solutionItem: {
      id: 'repair_predator_mesh',
      name: '14-Gauge Predator Hardware Cloth & Carabiner Latch',
      cost: 90,
      emoji: '🛡️'
    }
  },
  {
    id: 'hazard_deluge_mud',
    name: 'Sudden Mountain Thunderstorm & Mud Axle Trap',
    severity: 'SEVERE',
    category: 'weather',
    audioCue: 'storm_thunder',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'A violent frontier squall strikes without warning! Rain pours in blinding torrents, washing out the road ahead. Your heavy pioneer wagon sinks to its wooden axles in thick, sticky clay. Wind tears open the carrier canvas, drenching your companion with muddy spray!',
    penalties: {
      coatCondition: -20,
      vigorHydration: -10,
      supplies: { bedding: -20, transportGear: -15 },
      milesDelayed: 5
    },
    educationalLesson: 'Sudden rainstorms cause hypothermia and ruin show coats. Always secure waterproof oilcloth tarps and carry dry straw reserves before crossing low clay gullies.',
    recoveryPrompt: 'Stitch the torn cover with the Waxed Canvas & Heavy Needle Kit (75 pts) and dry your companion with the Camelhair Show Brush.',
    solutionItem: {
      id: 'repair_canvas_patch',
      name: 'Waxed Canvas & Heavy Needle Kit',
      cost: 75,
      emoji: '🧵'
    }
  },
  {
    id: 'hazard_downed_timber',
    name: 'Fallen Oak Tree Across the Mountain Pass',
    severity: 'MODERATE',
    category: 'obstacle',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'A lightning strike from the night storm has crashed a massive ancient oak across the narrow ridge trail! The path is totally blocked. You have to unhitch the horse team and spend 4 grueling hours chopping through heavy wet boughs to clear a detour. The loud chopping and delays leave your animal terrified and rattled.',
    penalties: {
      temperament: -20,
      poseTraining: -10,
      supplies: { transportGear: -10, feed: -15 }
    },
    educationalLesson: 'Excessive transit delays and sharp metallic chopping noises spike cortisol in show animals. Gentle voice reassurance and quiet handling prevent transit panic.',
    recoveryPrompt: 'Detour cleared, but your companion is tense. Calming herbs and quiet rest are needed before resuming travel.'
  },
  {
    id: 'hazard_contaminated_water',
    name: 'Stagnant Mudhole & Toxic Scum Trap',
    severity: 'CRITICAL',
    category: 'water',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'Running low on water, you filled buckets from a sluggish trailside pool, only to find the water coated in putrid green slime and pungent sulfur. Your companion recoils, snorting in disgust and refusing to touch a drop. You are forced to dump all containers and travel parched under the hot sun.',
    penalties: {
      vigorHydration: -25,
      temperament: -10,
      supplies: { water: -25 }
    },
    educationalLesson: 'Stagnant surface puddles harbor deadly cyanobacteria (blue-green algae), Giardia, and Leptospira. Never compromise: only offer animals tested, moving spring water or boiled trail reserves.',
    recoveryPrompt: 'Your animal is dangerously thirsty. You must reach a clean mountain spring or purchase pure water at the next trading post!'
  },
  {
    id: 'hazard_moldy_feed',
    name: 'Damp Hay Spoilage & Feed Shortage',
    severity: 'CRITICAL',
    category: 'hunger',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'Moisture seeped through the wet wagon floorboards into your bundled hay sacks! Untying the bales reveals white fungal mold and a suffocating musty stench. Feeding this would be fatal. You dump the contaminated bales into the ditch, leaving your feed bins completely empty while your companion whines with hunger.',
    penalties: {
      vigorHydration: -20,
      coatCondition: -15,
      supplies: { feed: -35 }
    },
    educationalLesson: 'Mold spores produce lethal mycotoxins that trigger fatal equine colic, cattle acidosis, and rabbit GI stasis. Always store hay elevated on wooden slats off the wagon floor.',
    recoveryPrompt: 'Your feed bins are bare! Restock fresh Timothy hay cakes at the outfitter immediately to restart gut motility.'
  },
  {
    id: 'hazard_dust_storm',
    name: 'Alkali Dust Gale & Swarm of Biting Midges',
    severity: 'MODERATE',
    category: 'weather',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'A scorching prairie squall sweeps blinding clouds of dry red alkali dust across the trail! Fine grit forces its way into the carrier vents, coating your companion’s fur in chalky grime and irritating their eyes and nostrils. Biting trail gnats swarm the carrier wire.',
    penalties: {
      coatCondition: -25,
      temperament: -15,
      supplies: { grooming: -20 }
    },
    educationalLesson: 'Alkali dust strips essential moisture from skin and cornea tissue. Draping breathable damp muslin over wire carriers shields eyes and protects show coat luster.',
    recoveryPrompt: 'Your companion’s coat is caked in chalky dirt. Intensive brushing with a camelhair brush will be required before show inspection.'
  },
  {
    id: 'hazard_broken_axle',
    name: 'Granite Boulder Jolt & Split Wooden Wheel',
    severity: 'SEVERE',
    category: 'breakdown',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'CRUNCH! The right wagon wheel drops into a deep granite wash. The violent shockwave shatters two wooden spokes and flips the animal carrier on its side! Water sloshes everywhere, and your animal is thrown against the mesh, terrified and shivering.',
    penalties: {
      temperament: -25,
      poseTraining: -15,
      supplies: { transportGear: -25, water: -15 }
    },
    educationalLesson: 'High-speed trail ruts can fracture small animal bones or break teeth. Heavy-duty strap bracing and thick straw bedding cushion carriers against sudden impacts.',
    recoveryPrompt: 'You must jack up the wagon, lash the wheel with wet rawhide, and spend time holding your companion to calm their racing heart.'
  },
  {
    id: 'hazard_unsuccessful_foraging',
    name: 'Failed Forage Hunt & Toxic Hemlock Close-Call',
    severity: 'MODERATE',
    category: 'hunger',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'Desperate to save feed points, you scoured the creek banks for wild greens, but plucked poisonous water hemlock by mistake! Recognizing the purple-spotted hollow stems just in time, you threw the bundle into the campfire. You return to the wagon exhausted, with empty hands and an empty feed trough.',
    penalties: {
      vigorHydration: -15,
      temperament: -10,
      supplies: { feed: -15 }
    },
    educationalLesson: 'Water hemlock and poison hemlock are among North America’s most toxic wild plants. Never harvest unverified trailside weeds for project animals.',
    recoveryPrompt: 'You averted poisoning, but hunger persists. Rely on tested, verified outfitter feeds instead of wild guesswork.'
  }
];

/**
 * Selects an appropriate trail hazard based on the node's subject matter or random frontier luck.
 */
export function getRandomTrailHazard(nodeType = 'care_choices') {
  const matching = TRAIL_HAZARDS.filter(h => {
    if (nodeType.includes('water') || nodeType.includes('hydration')) return h.category === 'water';
    if (nodeType.includes('feed') || nodeType.includes('nutrition')) return h.category === 'hunger';
    if (nodeType.includes('weather') || nodeType.includes('shade')) return h.category === 'weather';
    return true;
  });

  const pool = matching.length > 0 ? matching : TRAIL_HAZARDS;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}
