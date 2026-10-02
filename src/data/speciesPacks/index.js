// WarrenWise Youth Animal Training Academy - Complete Species Pack Registry
// Phases 1-4 Full Multi-Species Coverage

import { RABBITS_PACK } from './rabbitsPack.js';
import { CAVIES_PACK } from './caviesPack.js';
import { POULTRY_PACK } from './poultryPack.js';
import { GOATS_PACK } from './goatsPack.js';
import { SHEEP_PACK } from './sheepPack.js';
import { SWINE_PACK } from './swinePack.js';
import { BEEF_CATTLE_PACK } from './beefCattlePack.js';
import { DAIRY_CATTLE_PACK } from './dairyCattlePack.js';
import { DOGS_PACK } from './dogsPack.js';
import { HORSES_PACK } from './horsesPack.js';
import { VET_SCIENCE_PACK } from './vetSciencePack.js';

export const ALL_SPECIES_PACKS = [
  // Phase 1: Gold Standard Foundation
  RABBITS_PACK,
  CAVIES_PACK,

  // Phase 2: Poultry & Small Ruminants
  POULTRY_PACK,
  GOATS_PACK,

  // Phase 3: Major Livestock Tracks
  SHEEP_PACK,
  SWINE_PACK,
  BEEF_CATTLE_PACK,
  DAIRY_CATTLE_PACK,

  // Phase 4: Companion, Equine & Veterinary Science
  DOGS_PACK,
  HORSES_PACK,
  VET_SCIENCE_PACK
];

export function getSpeciesPackById(id) {
  return ALL_SPECIES_PACKS.find(p => p.id === id) || RABBITS_PACK;
}

export function getModuleFromPack(speciesId, moduleId) {
  const pack = getSpeciesPackById(speciesId);
  return pack.modules.find(m => m.id === moduleId || m.topicId === moduleId) || pack.modules[0];
}

export function getAvailableSpecies() {
  return ALL_SPECIES_PACKS.map(p => ({
    id: p.id,
    name: p.name,
    species: p.species,
    category: p.category,
    icon: p.icon,
    version: p.version,
    lastVerifiedDate: p.lastVerifiedDate,
    verifiedBy: p.verifiedBy,
    moduleCount: p.modules.length,
    phase: getSpeciesPhase(p.id)
  }));
}

export function getSpeciesPhase(id) {
  if (['rabbits', 'cavies'].includes(id)) return 1;
  if (['poultry', 'goats'].includes(id)) return 2;
  if (['sheep', 'swine', 'beef_cattle', 'dairy_cattle'].includes(id)) return 3;
  return 4;
}

export {
  RABBITS_PACK,
  CAVIES_PACK,
  POULTRY_PACK,
  GOATS_PACK,
  SHEEP_PACK,
  SWINE_PACK,
  BEEF_CATTLE_PACK,
  DAIRY_CATTLE_PACK,
  DOGS_PACK,
  HORSES_PACK,
  VET_SCIENCE_PACK
};
