// WarrenWise Youth Animal Training Academy - Species Pack Registry

import { RABBITS_PACK } from './rabbitsPack.js';
import { CAVIES_PACK } from './caviesPack.js';
import { POULTRY_PACK } from './poultryPack.js';
import { GOATS_PACK } from './goatsPack.js';

export const ALL_SPECIES_PACKS = [
  RABBITS_PACK,
  CAVIES_PACK,
  POULTRY_PACK,
  GOATS_PACK
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
    moduleCount: p.modules.length,
    isPhase2Preview: !!p.isPhase2Preview
  }));
}
