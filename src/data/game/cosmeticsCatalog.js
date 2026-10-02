// WarrenWise Animal Academy - Herd Trail Quest
// Fortnite-Style Cosmetic Collection (100% Earned Through Learning, Non-Pay-To-Win)

export const COSMETIC_RARITIES = {
  COMMON: { id: 'COMMON', label: 'Common', color: 'from-slate-400 to-slate-500', border: 'border-slate-300', bg: 'bg-slate-100 text-slate-700' },
  UNCOMMON: { id: 'UNCOMMON', label: 'Uncommon', color: 'from-emerald-500 to-green-600', border: 'border-emerald-400', bg: 'bg-emerald-50 text-emerald-800' },
  RARE: { id: 'RARE', label: 'Rare', color: 'from-blue-500 to-indigo-600', border: 'border-blue-400', bg: 'bg-blue-50 text-blue-800' },
  EPIC: { id: 'EPIC', label: 'Epic', color: 'from-purple-500 to-fuchsia-600', border: 'border-purple-400', bg: 'bg-purple-50 text-purple-800' },
  LEGENDARY: { id: 'LEGENDARY', label: 'Legendary', color: 'from-amber-400 to-yellow-500', border: 'border-yellow-400', bg: 'bg-amber-50 text-amber-800' }
};

export const COSMETIC_TYPES = [
  { id: 'all', label: 'All Items' },
  { id: 'traveler_skin', label: 'Traveler Outfits' },
  { id: 'companion_skin', label: 'Companion Styles' },
  { id: 'trail_gear', label: 'Trail Gear' },
  { id: 'emote', label: 'Celebration Emotes' },
  { id: 'arrival_effect', label: 'Arrival Gliders' },
  { id: 'habitat_decor', label: 'Campsite Decor' },
  { id: 'profile_flair', label: 'Profile Flair' }
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
    unlockCriteria: 'Reach Training Camp (Mile 50)'
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

  // --- Trail Gear ---
  {
    id: 'gear_basic_lead',
    name: 'Sturdy Cotton Lead Line',
    type: 'trail_gear',
    rarity: 'COMMON',
    description: 'Clean, reliable cotton lead with safe brass snap.',
    icon: 'Activity',
    unlockCriteria: 'Unlocked by default',
    isDefault: true
  },
  {
    id: 'gear_carved_stick',
    name: 'Carved Hickory Show Stick',
    type: 'trail_gear',
    rarity: 'UNCOMMON',
    description: 'Smooth, polished wooden show stick with ergonomic leather grip.',
    icon: 'Wand2',
    unlockCriteria: 'Score 100% on a Showmanship Sequence challenge'
  },
  {
    id: 'gear_solar_lantern',
    name: 'Solar Barn Lantern Pack',
    type: 'trail_gear',
    rarity: 'RARE',
    description: 'Eco-friendly solar backpack lantern keeping nighttime trail checks bright.',
    icon: 'Flame',
    unlockCriteria: 'Maintain a 5-day Trail Streak'
  },
  {
    id: 'gear_jeweled_halter',
    name: 'Silver-Plate Show Halter',
    type: 'trail_gear',
    rarity: 'EPIC',
    description: 'Supple hand-tooled dark oil leather adorned with engraved sterling silver accents.',
    icon: 'Shield',
    unlockCriteria: 'Complete 10 Trail Nodes without losing supplies'
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
    unlockCriteria: 'Complete First Trail Node'
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
  }
];
