// WarrenWise Animal Academy - Herd Trail Quest
// Fortnite-Style Cosmetic Collection & Self-Expression
// 100% Earned Through Learning, Non-Pay-To-Win, Youth-Safe Visuals

export const COSMETIC_RARITIES = {
  COMMON: { id: 'COMMON', label: 'Common', color: 'from-slate-400 to-slate-500', border: 'border-slate-300', bg: 'bg-slate-100 text-slate-700' },
  UNCOMMON: { id: 'UNCOMMON', label: 'Uncommon', color: 'from-emerald-500 to-green-600', border: 'border-emerald-400', bg: 'bg-emerald-50 text-emerald-800' },
  RARE: { id: 'RARE', label: 'Rare', color: 'from-blue-500 to-indigo-600', border: 'border-blue-400', bg: 'bg-blue-50 text-blue-800' },
  EPIC: { id: 'EPIC', label: 'Epic', color: 'from-purple-500 to-fuchsia-600', border: 'border-purple-400', bg: 'bg-purple-50 text-purple-800' },
  LEGENDARY: { id: 'LEGENDARY', label: 'Legendary', color: 'from-amber-400 to-yellow-500', border: 'border-yellow-400', bg: 'bg-amber-50 text-amber-800' }
};

export const COSMETIC_TYPES = [
  { id: 'all', label: 'All Items' },
  { id: 'companion_pet', label: 'Unlockable Pets 🐾' },
  { id: 'trail_gear', label: 'Upgraded Equipment 🎒' },
  { id: 'traveler_skin', label: 'Traveler Outfits 👕' },
  { id: 'companion_skin', label: 'Companion Styles ✨' },
  { id: 'companion_pose', label: 'Companion Poses 🌟' },
  { id: 'emote', label: 'Celebration Emotes 🎉' },
  { id: 'arrival_effect', label: 'Arrival Gliders 🪂' },
  { id: 'habitat_decor', label: 'Campsite Decor 🏡' },
  { id: 'profile_flair', label: 'Profile Flair 👑' }
];

export const STEWARD_TITLES = [
  { id: 'seeker', title: 'Seeker', milesMin: 0, description: 'Beginning the trail with open eyes and a caring heart.', badgeColor: 'bg-slate-100 text-slate-700' },
  { id: 'handler', title: 'Handler', milesMin: 25, description: 'Demonstrating calm ground handling and daily supply stewardship.', badgeColor: 'bg-emerald-100 text-emerald-800' },
  { id: 'steward', title: 'Steward', milesMin: 55, description: 'Exemplifying animal welfare ethics and biosecurity vigilance.', badgeColor: 'bg-blue-100 text-blue-800' },
  { id: 'trail_mentor', title: 'Trail Mentor-in-Training', milesMin: 85, description: 'Leading by example, sharing knowledge, and preparing for the Grand Arena.', badgeColor: 'bg-purple-100 text-purple-800' }
];

export const ALL_COSMETICS = [
  // --- Traveler Outfits ---
  {
    id: 'outfit_trail_blazer',
    name: 'Trail Blazer Khakis',
    type: 'traveler_skin',
    rarity: 'COMMON',
    description: 'Rugged, durable trail vest and khakis built for daily barn and trail exploration.',
    icon: 'Shirt',
    unlockCriteria: 'Starter Outfit (Unlocked by default)',
    isDefault: true
  },
  {
    id: 'outfit_clover_scout',
    name: 'Clover Scout Green',
    type: 'traveler_skin',
    rarity: 'UNCOMMON',
    description: 'Classic green and white collared scout attire featuring embroidered 4-H emblem patches.',
    icon: 'Sparkles',
    unlockCriteria: 'Reach Care Camp (Mile 25)'
  },
  {
    id: 'outfit_barn_pioneer',
    name: 'Prairie Pioneer Flannel',
    type: 'traveler_skin',
    rarity: 'RARE',
    description: 'Cozy buffalo-check flannel with heavy-duty leather boots and rolled denim.',
    icon: 'Shield',
    unlockCriteria: 'Earn 300 Herd Bond XP'
  },
  {
    id: 'outfit_neon_rancher',
    name: 'Neon Horizon Rancher',
    type: 'traveler_skin',
    rarity: 'EPIC',
    description: 'Electrifying sunset-colored fringe jacket with luminescent boot stitching.',
    icon: 'Zap',
    unlockCriteria: 'Complete County Fair Practice node'
  },
  {
    id: 'outfit_cyber_showman',
    name: 'Grand Champion Tux & Sash',
    type: 'traveler_skin',
    rarity: 'LEGENDARY',
    description: 'Immaculate formal presentation attire with gilded trim and four-leaf clover tie clip.',
    icon: 'Award',
    unlockCriteria: 'Master the Fair Day Sim Finale with a Blue Ribbon'
  },

  // --- Companion Animal Styles ---
  {
    id: 'comp_classic_fur',
    name: 'Natural Heritage Coat',
    type: 'companion_skin',
    rarity: 'COMMON',
    description: 'Natural, healthy, well-brushed coat and markings true to breed standards.',
    icon: 'Heart',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'comp_clover_sparkle',
    name: 'Emerald Clover Sparkles',
    type: 'companion_skin',
    rarity: 'UNCOMMON',
    description: 'Subtle glowing emerald sparkles trail along your companion when walking.',
    icon: 'Sparkles',
    unlockCriteria: 'Complete 3 Nutrition Trail Challenges'
  },
  {
    id: 'comp_sunset_bay',
    name: 'Golden Sunset Glow',
    type: 'companion_skin',
    rarity: 'RARE',
    description: 'Warm golden shimmer reflecting the afternoon pasture sunshine.',
    icon: 'Sun',
    unlockCriteria: 'Reach Herd Bond Level 5'
  },
  {
    id: 'comp_frosty_whiskers',
    name: 'Frost & Stardust Aura',
    type: 'companion_skin',
    rarity: 'EPIC',
    description: 'Cool crystalline accents dancing gently around ears and tail.',
    icon: 'Sparkles',
    unlockCriteria: 'Solve 5 Biosecurity Care Challenges'
  },
  {
    id: 'comp_legendary_phoenix',
    name: 'Grand Champion Royal Clover',
    type: 'companion_skin',
    rarity: 'LEGENDARY',
    description: 'An illustrious golden aura crowned by a radiant four-leaf halo.',
    icon: 'Crown',
    unlockCriteria: 'Complete 100 Miles on any trail'
  },

  // --- Companion Poses ---
  {
    id: 'pose_alert_stand',
    name: 'Alert & Square Stance',
    type: 'companion_pose',
    rarity: 'COMMON',
    description: 'Poised, attentive square stand with ears pricked and eyes forward.',
    icon: 'Eye',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'pose_playful_bow',
    name: 'Joyful Play Bow',
    type: 'companion_pose',
    rarity: 'UNCOMMON',
    description: 'Happy front-paws-down stretch inviting joyful playtime and trust.',
    icon: 'Heart',
    unlockCriteria: 'Complete 2 Handling Safety Nodes'
  },
  {
    id: 'pose_binky_twirl',
    name: 'Binky Celebration Leap',
    type: 'companion_pose',
    rarity: 'RARE',
    description: 'High-energy celebratory mid-air hop and spin expressing pure contentment!',
    icon: 'Sparkles',
    unlockCriteria: 'Reach Herd Bond Level 4'
  },
  {
    id: 'pose_victory_crest',
    name: 'Show Ring Champion Pose',
    type: 'companion_pose',
    rarity: 'EPIC',
    description: 'Dignified, immaculate profile pose presenting top conformation lines.',
    icon: 'Award',
    unlockCriteria: 'Score 100% on a Showmanship Sequence'
  },

  // --- Unlockable Companion Pets ---
  {
    id: 'pet_barnaby_jr',
    name: 'Barnaby Jr. the Mini Holland Lop',
    type: 'companion_pet',
    rarity: 'COMMON',
    avatarEmoji: '🐰',
    species: 'Rabbit',
    description: 'A lively floppy-eared companion who does joyful binkies when you solve nutrition and forage drills.',
    icon: 'Heart',
    unlockCriteria: 'Starter Companion Pet (Unlocked by default)',
    isDefault: true
  },
  {
    id: 'pet_pip_hamster',
    name: 'Pip the Golden Pocket Hamster',
    type: 'companion_pet',
    rarity: 'UNCOMMON',
    avatarEmoji: '🐹',
    species: 'Pocket Pet',
    description: 'A curious pocket pet who burrows into fresh Timothy hay and stores safe grain treats in cheek pouches.',
    icon: 'Heart',
    unlockCriteria: 'Reach Care Camp (Mile 25)'
  },
  {
    id: 'pet_luna_kitten',
    name: 'Luna the Calico Barn Kitten',
    type: 'companion_pet',
    rarity: 'RARE',
    avatarEmoji: '🐱',
    species: 'Cat',
    description: 'A purring feline guardian who watches over the tack room and loves gentle Fear-Free towel cuddles.',
    icon: 'Heart',
    unlockCriteria: 'Reach Herd Bond Level 3'
  },
  {
    id: 'pet_sunny_chick',
    name: 'Sunny the Silkie Bantam Chick',
    type: 'companion_pet',
    rarity: 'RARE',
    avatarEmoji: '🐥',
    species: 'Poultry',
    description: 'An impossibly fluffy golden down ball who chirps merrily and perches softly on your sleeve.',
    icon: 'Sparkles',
    unlockCriteria: 'Solve 3 Poultry Yard Trail Challenges'
  },
  {
    id: 'pet_bramble_kid',
    name: 'Bramble the Pygmy Kid Goat',
    type: 'companion_pet',
    rarity: 'RARE',
    avatarEmoji: '🐐',
    species: 'Goat',
    description: 'An agile kid goat who prances across wooden balance blocks and nibbles browse forage with endless cheer.',
    icon: 'Sparkles',
    unlockCriteria: 'Reach Herd Bond Level 5'
  },
  {
    id: 'pet_copper_pup',
    name: 'Copper the Golden Retriever Pup',
    type: 'companion_pet',
    rarity: 'EPIC',
    avatarEmoji: '🐕',
    species: 'Dog',
    description: 'An enthusiastic four-legged trainee with a soft mouth, sharp nose, and eager Canine Good Citizen manners.',
    icon: 'Award',
    unlockCriteria: 'Reach County Fair Practice (Mile 55)'
  },
  {
    id: 'pet_buttercup_calf',
    name: 'Buttercup the Miniature Jersey Calf',
    type: 'companion_pet',
    rarity: 'EPIC',
    avatarEmoji: '🐮',
    species: 'Dairy Cattle',
    description: 'A doe-eyed, fawn-coated calf with silky ears who enjoys gentle halter lead practice on morning pastures.',
    icon: 'Heart',
    unlockCriteria: 'Reach Herd Bond Level 7'
  },
  {
    id: 'pet_andy_alpaca',
    name: 'Andy the Huacaya Alpaca Cria',
    type: 'companion_pet',
    rarity: 'EPIC',
    avatarEmoji: '🦙',
    species: 'Camelid',
    description: 'A prize fiber fleece cria with gentle humming vocalizations and proud, alert upright carriage.',
    icon: 'Sparkles',
    unlockCriteria: 'Complete 8 Trail Challenges without losing condition'
  },
  {
    id: 'pet_truffles_piglet',
    name: 'Truffles the Kunekune Piglet',
    type: 'companion_pet',
    rarity: 'EPIC',
    avatarEmoji: '🐷',
    species: 'Swine',
    description: 'A friendly spotted grazing piglet with dual wattles who wags its tail during gentle brushing sessions.',
    icon: 'Smile',
    unlockCriteria: 'Score 100% on a Swine Nutrition or Care Node'
  },
  {
    id: 'pet_woolly_lamb',
    name: 'Woolly the Baby Southdown Lamb',
    type: 'companion_pet',
    rarity: 'EPIC',
    avatarEmoji: '🐑',
    species: 'Sheep',
    description: 'A gentle, teddy-bear-faced lamb with dense crimped fleece who follows your footsteps around the paddock.',
    icon: 'Heart',
    unlockCriteria: 'Master the Sheep Copper Toxicity Challenge'
  },
  {
    id: 'pet_chester_foal',
    name: 'Chester the Shetland Pony Foal',
    type: 'companion_pet',
    rarity: 'LEGENDARY',
    avatarEmoji: '🐴',
    species: 'Horse',
    description: 'A spirited miniature equine with a flowing flaxen mane and proud showmanship trot.',
    icon: 'Crown',
    unlockCriteria: 'Reach Grand Arena (Mile 85)'
  },
  {
    id: 'pet_echo_bird',
    name: 'Echo the Amazon Parakeet',
    type: 'companion_pet',
    rarity: 'LEGENDARY',
    avatarEmoji: '🦜',
    species: 'Pet Bird',
    description: 'A brilliant green and turquoise feathered companion who chirps encouragement when answering judge questions.',
    icon: 'Crown',
    unlockCriteria: 'Master the Fair Day Sim Finale with a Blue Ribbon'
  },

  // --- Upgraded Trail Equipment & Gear ---
  {
    id: 'gear_basic_lead',
    name: 'Sturdy Cotton Lead Line',
    type: 'trail_gear',
    rarity: 'COMMON',
    gearEmoji: '🪢',
    description: 'Clean, reliable braided cotton lead with safe solid brass swivel snap.',
    icon: 'Activity',
    unlockCriteria: 'Starter Equipment (Unlocked by default)',
    isDefault: true
  },
  {
    id: 'gear_brass_flask',
    name: 'Polar Insulated Stainless Canteen',
    type: 'trail_gear',
    rarity: 'UNCOMMON',
    gearEmoji: '🧊',
    description: 'Double-walled vacuum insulated water canteen that keeps clean hydration icy cold for 24 hours in hot barns.',
    icon: 'Droplets',
    unlockCriteria: 'Solve a Hydration & Care Challenge'
  },
  {
    id: 'gear_carved_stick',
    name: 'Carved Hickory Show Stick',
    type: 'trail_gear',
    rarity: 'UNCOMMON',
    gearEmoji: '🪵',
    description: 'Smooth, polished wooden show stick with balanced weight and ergonomic cross-stitched leather grip.',
    icon: 'Wand2',
    unlockCriteria: 'Score 100% on a Showmanship Sequence challenge'
  },
  {
    id: 'gear_showmanship_cane',
    name: 'Burnished Cherry Showmanship Cane',
    type: 'trail_gear',
    rarity: 'UNCOMMON',
    gearEmoji: '🦯',
    description: 'Traditional curved showmanship cane with a deep hand-rubbed oil finish.',
    icon: 'Wand2',
    unlockCriteria: 'Complete 3 Swine or Dairy Showmanship Nodes'
  },
  {
    id: 'gear_solar_fan',
    name: 'BreezeMaster Portable Aeration Fan',
    type: 'trail_gear',
    rarity: 'RARE',
    gearEmoji: '💨',
    description: 'Ultra-quiet clip-on solar aeration fan that keeps carrier crates cool and ventilated during warm transport.',
    icon: 'Wind',
    unlockCriteria: 'Reach Care Camp (Mile 25)'
  },
  {
    id: 'gear_solar_lantern',
    name: 'Solar Barn Lantern Pack',
    type: 'trail_gear',
    rarity: 'RARE',
    gearEmoji: '🏮',
    description: 'Eco-friendly solar backpack lantern keeping nighttime stall and vital health checks bright.',
    icon: 'Flame',
    unlockCriteria: 'Maintain a 5-day Trail Streak'
  },
  {
    id: 'gear_leather_caddy',
    name: 'Bridle Leather Grooming Caddy',
    type: 'trail_gear',
    rarity: 'RARE',
    gearEmoji: '🧰',
    description: 'Hand-stitched dark harness leather caddy with custom brass compartments for brushes, hoof picks, and cards.',
    icon: 'Package',
    unlockCriteria: 'Accumulate 100 Grooming Supply Points'
  },
  {
    id: 'gear_digital_scale',
    name: 'Precision Animal Health Scale',
    type: 'trail_gear',
    rarity: 'RARE',
    gearEmoji: '⚖️',
    description: 'Calibrated digital weight platform with tare function for tracking daily feed rations and growth milestones.',
    icon: 'Shield',
    unlockCriteria: 'Complete 3 Record Keeping Nodes'
  },
  {
    id: 'gear_gilded_brush',
    name: 'Gold-Bristle Finishing Brush Set',
    type: 'trail_gear',
    rarity: 'EPIC',
    gearEmoji: '🪥',
    description: 'Ultra-fine goat-hair and brass bristle set with polished walnut handles for dazzling coat bloom.',
    icon: 'Sparkles',
    unlockCriteria: 'Reach Herd Bond Level 6'
  },
  {
    id: 'gear_biosecurity_kit',
    name: 'BioGuard Pro Boot Dip & Sprayer',
    type: 'trail_gear',
    rarity: 'EPIC',
    gearEmoji: '🧼',
    description: 'Standard-setting farm biosecurity station with USDA-compliant virucidal boot bath and tire sanitizing sprayer.',
    icon: 'Shield',
    unlockCriteria: 'Solve 5 Biosecurity Care Challenges'
  },
  {
    id: 'gear_jeweled_halter',
    name: 'Silver-Plate Show Halter',
    type: 'trail_gear',
    rarity: 'EPIC',
    gearEmoji: '📿',
    description: 'Supple hand-tooled dark oil leather adorned with engraved sterling silver accents and nameplate.',
    icon: 'Shield',
    unlockCriteria: 'Complete 10 Trail Nodes without losing supplies'
  },
  {
    id: 'gear_grand_trophy_tack',
    name: 'Royal Clover Champion Tack & Harness',
    type: 'trail_gear',
    rarity: 'LEGENDARY',
    gearEmoji: '🏆',
    description: 'The pinnacle of show equipment: gilded emerald leather, four-leaf clover rivets, and commemorative State Fair medallion.',
    icon: 'Crown',
    unlockCriteria: 'Master the Fair Day Sim Finale with a Blue Ribbon'
  },

  // --- Emotes & Celebrations ---
  {
    id: 'emote_hat_tip',
    name: 'Respectful Hat Tip',
    type: 'emote',
    rarity: 'COMMON',
    description: 'Polite, sportsmanship-first greeting to the judge and fellow trail travelers.',
    icon: 'Smile',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'emote_brush_swish',
    name: 'Quick Curry Brush Swish',
    type: 'emote',
    rarity: 'UNCOMMON',
    description: 'Stylishly brush off barn dust with a high-energy flick.',
    icon: 'Wind',
    unlockCriteria: 'Complete 2 Daily Care Nodes'
  },
  {
    id: 'emote_bunny_hop',
    name: 'Joyful Bunny Hop & Twirl',
    type: 'emote',
    rarity: 'RARE',
    description: 'Playful binky hop and joyful celebratory twirl!',
    icon: 'Footprints',
    unlockCriteria: 'Reach 50 Miles Traveled'
  },
  {
    id: 'emote_victory_salute',
    name: 'Ringmaster Victory Salute',
    type: 'emote',
    rarity: 'EPIC',
    description: 'Confidently salute the grandstand with head held high.',
    icon: 'Trophy',
    unlockCriteria: 'Win a Fair Day Sim challenge'
  },

  // --- Arrival Effects ---
  {
    id: 'arrival_clover_breeze',
    name: 'Four-Leaf Clover Breeze',
    type: 'arrival_effect',
    rarity: 'UNCOMMON',
    description: 'Arrive at new trail nodes surrounded by floating green shamrocks.',
    icon: 'Wind',
    unlockCriteria: 'Complete First Trail Node',
    isDefault: true
  },
  {
    id: 'arrival_golden_dust',
    name: 'Golden Straw Whirlwind',
    type: 'arrival_effect',
    rarity: 'RARE',
    description: 'Touch down in a swirl of warm autumn straw and barn glitter.',
    icon: 'Compass',
    unlockCriteria: 'Score 100% on Catch & Classify'
  },
  {
    id: 'arrival_starlight_glider',
    name: 'Constellation Glider Wings',
    type: 'arrival_effect',
    rarity: 'LEGENDARY',
    description: 'Glide into campsites under ethereal starlit constellations.',
    icon: 'Sparkles',
    unlockCriteria: 'Reach State Fair Practice Arena'
  },

  // --- Campsite & Habitat Decor ---
  {
    id: 'decor_pine_bench',
    name: 'Hand-Crafted Cedar Bench',
    type: 'habitat_decor',
    rarity: 'COMMON',
    description: 'A welcoming cedar rest bench with clean cedar aroma.',
    icon: 'Home',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'decor_solar_trough',
    name: 'Auto-Clean Solar Fountain',
    type: 'habitat_decor',
    rarity: 'UNCOMMON',
    description: 'Fresh bubbling water station ensuring clean hydration 24/7.',
    icon: 'Droplets',
    unlockCriteria: 'Solve a Hydration Care Challenge'
  },
  {
    id: 'decor_ribbon_wall',
    name: 'Trophy Rosette Display Stand',
    type: 'habitat_decor',
    rarity: 'RARE',
    description: 'Proud velvet board to showcase your earned practice ribbons.',
    icon: 'Award',
    unlockCriteria: 'Earn 3 Practice Ribbons'
  },
  {
    id: 'decor_wind_chime',
    name: 'Harmony Horseshoe Chimes',
    type: 'habitat_decor',
    rarity: 'EPIC',
    description: 'Melodic chimes fashioned from vintage polished horseshoes.',
    icon: 'Music',
    unlockCriteria: 'Reach Herd Bond Level 8'
  },
  {
    id: 'decor_cozy_hearth',
    name: 'Campfire Gathering Ring',
    type: 'habitat_decor',
    rarity: 'LEGENDARY',
    description: 'Cozy stone fire ring where party companions gather under the stars.',
    icon: 'Flame',
    unlockCriteria: 'Complete the entire Trail Journey'
  },

  // --- Profile Flair ---
  {
    id: 'flair_green_clover',
    name: 'Emerald Clover Border',
    type: 'profile_flair',
    rarity: 'COMMON',
    description: 'A cheerful green clover border around your traveler profile card.',
    icon: 'Shield',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'flair_trail_master',
    name: 'Trail Master Laurels',
    type: 'profile_flair',
    rarity: 'EPIC',
    description: 'Golden oak and clover laurels highlighting veteran trail leadership.',
    icon: 'Crown',
    unlockCriteria: 'Earn the Trail Mentor-in-Training title'
  }
];

export function getStewardTitle(currentMile = 0) {
  if (currentMile >= 85) return STEWARD_TITLES[3];
  if (currentMile >= 55) return STEWARD_TITLES[2];
  if (currentMile >= 25) return STEWARD_TITLES[1];
  return STEWARD_TITLES[0];
}
