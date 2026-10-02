// WarrenWise Animal Academy - Herd Trail Quest
// Master Trail Calamities & Hazards System (The Oregon Trail Reality)
// Triggered when wrong answers or poor husbandry choices occur on the overland trail.

export const TRAIL_HAZARDS = [
  {
    id: 'hazard_deluge_mud',
    name: 'Sudden Mountain Thunderstorm & Mud Axle Trap',
    severity: 'SEVERE',
    category: 'weather',
    image: '/game/trail_storm_hazard.jpg',
    narrative: 'A violent frontier squall strikes without warning! Rain pours in blinding torrents, washing out the road ahead. Your heavy pioneer wagon sinks to its wooden axles in thick, sticky clay. Wind tears open the carrier canvas, drenching your companion with muddy spray!',
    penalties: {
      coatCondition: -20,
      vigorHydration: -10,
      supplies: { bedding: -20, transportGear: -15 },
      milesDelayed: 5
    },
    educationalLesson: 'Sudden rainstorms cause hypothermia and ruin show coats. Always secure waterproof oilcloth tarps and carry dry straw reserves before crossing low clay gullies.',
    recoveryPrompt: 'You must halt the caravan, dig out the wagon wheels, and spend extra time drying and grooming your animal.'
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
