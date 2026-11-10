// WarrenWise Animal Academy - Dynamic Visual Need States Engine
// Computes dominant physiological need, visual expression, posture, accessories, and particle effects.

export const ANIMAL_VISUAL_STATES = {
  hungry: {
    id: 'hungry',
    label: 'Hungry (Needs Food)',
    badgeColor: 'bg-amber-500 text-stone-950',
    summary: 'Thin posture, sniffing empty feeding crock, licking lips with hopeful eyes',
    bellySize: 'lean',
    ears: 'slightly_low',
    eyes: 'hungry_wide',
    mouth: 'licking_lips',
    furGloss: 'flat',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'empty_bowl',
    speechBubble: 'Tummy rumbling... I need crunchy Timothy hay and pellets!',
    dominantNeedText: 'Feed Bar < 40%'
  },
  thirsty: {
    id: 'thirsty',
    label: 'Thirsty (Needs Water)',
    badgeColor: 'bg-cyan-500 text-slate-950',
    summary: 'Dry coat, low energy posture, nudging dry sipper ball-spout',
    bellySize: 'normal',
    ears: 'drooped_tired',
    eyes: 'tired_narrow',
    mouth: 'dry_panting',
    furGloss: 'dull',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'dry_bottle',
    speechBubble: 'Parched mouth... Please check and fill my fresh water bottle!',
    dominantNeedText: 'Hydration Bar < 40%'
  },
  messy: {
    id: 'messy',
    label: 'Messy Coat (Needs Brushing)',
    badgeColor: 'bg-purple-500 text-white',
    summary: 'Loose shedding tufts, unkempt tangles, dull unbrushed fur',
    bellySize: 'normal',
    ears: 'perked_askew',
    eyes: 'normal',
    mouth: 'neutral',
    furGloss: 'dull',
    furMess: 'heavy_shedding',
    dirtSpots: false,
    accessory: 'loose_fur_tufts',
    speechBubble: 'My coat is shedding loose fur! A gentle brush stroke will make it shine.',
    dominantNeedText: 'Coat Sheen Bar < 45%'
  },
  dirty: {
    id: 'dirty',
    label: 'Soiled Stall (Needs Cleaning)',
    badgeColor: 'bg-stone-600 text-white',
    summary: 'Muddy dust smudges on paws & rump, standing near soiled straw',
    bellySize: 'normal',
    ears: 'shaking_head',
    eyes: 'discomfort',
    mouth: 'wrinkled_nose',
    furGloss: 'flat',
    furMess: 'none',
    dirtSpots: true,
    accessory: 'soiled_shavings',
    speechBubble: 'Uh-oh, my pen has soiled spots! Scoop them out and spread fresh pine shavings.',
    dominantNeedText: 'Cleanliness Bar < 45%'
  },
  sad: {
    id: 'sad',
    label: 'Lonely (Needs Love & Stroking)',
    badgeColor: 'bg-pink-500 text-white',
    summary: 'Droopy ears, big mournful eyes, tucked hindquarters, feeling shy and lonely',
    bellySize: 'normal',
    ears: 'drooped_sad',
    eyes: 'mournful_sparkle',
    mouth: 'soft_frown',
    furGloss: 'normal',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'rain_cloud',
    speechBubble: 'Feeling lonely and anxious in the wagon... Gentle forehead strokes will calm me.',
    dominantNeedText: 'Bond / Love Bar < 50%'
  },
  happy: {
    id: 'happy',
    label: 'Happy & Well-Cared-For',
    badgeColor: 'bg-emerald-500 text-stone-950',
    summary: 'Plump belly, content nose wiggling, relaxed posture, bright engaged eyes',
    bellySize: 'full',
    ears: 'relaxed_forward',
    eyes: 'bright_smiling',
    mouth: 'happy_nibble',
    furGloss: 'healthy',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'hay_strand',
    speechBubble: 'Ahhh, feeling warm, nourished, and happy! Ready for today’s trail stretch.',
    dominantNeedText: 'All Needs Balanced'
  },
  clean: {
    id: 'clean',
    label: 'Clean & Fluffy Sheen',
    badgeColor: 'bg-teal-500 text-white',
    summary: 'Freshly brushed luster, immaculate paws, soft velvety fur glowing in sunlight',
    bellySize: 'full',
    ears: 'proud_lop',
    eyes: 'glowing_bright',
    mouth: 'content_smile',
    furGloss: 'high_sheen',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'sparkles',
    speechBubble: 'My coat is smooth as silk! Not a single tangle or speck of dust.',
    dominantNeedText: 'Coat & Cleanliness >= 80%'
  },
  showReady: {
    id: 'showReady',
    label: 'Grand Champion Show-Ready',
    badgeColor: 'bg-gradient-to-r from-amber-400 to-purple-600 text-white',
    summary: 'ARBA standard table pose, compact Mandolin topline, calm confident eye, pristine luster',
    bellySize: 'champion_tuck',
    ears: 'perfect_horseshoe_crown',
    eyes: 'confident_champion',
    mouth: 'steady_breath',
    furGloss: 'radiant_rollout',
    furMess: 'none',
    dirtSpots: false,
    accessory: 'purple_rosette',
    speechBubble: '100% Fair-Ring Ready! Posed square, crown set, and ready for Judge Miller’s table!',
    dominantNeedText: 'All 5 Need Bars >= 85%'
  }
};

/**
 * Priority-based dominant need evaluator (User Requested Logic)
 */
export function getDominantState(stats = {}) {
  const feed = stats.feed ?? stats.fullness ?? 70;
  const water = stats.water ?? stats.hydration ?? 70;
  const coat = stats.coat ?? 70;
  const clean = stats.clean ?? stats.hygiene ?? 70;
  const love = stats.love ?? stats.bond ?? 70;

  // Strict priority order: Most urgent physiological threat wins
  if (feed < 40) return 'hungry';
  if (water < 40) return 'thirsty';
  if (coat < 45) return 'messy';
  if (clean < 45) return 'dirty';
  if (love < 50) return 'sad';

  // All needs met at highest echelon
  if (feed >= 85 && water >= 85 && coat >= 85 && clean >= 85 && love >= 85) {
    return 'showReady';
  }

  // Very clean and neat
  if (coat >= 80 && clean >= 80) {
    return 'clean';
  }

  return 'happy';
}
