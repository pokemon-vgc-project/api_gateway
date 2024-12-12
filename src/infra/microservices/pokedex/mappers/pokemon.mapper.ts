import {
  Pokemon,
  PokemonAbility,
  PokemonBaseStats,
  PokemonType,
} from '../../../../domain/models/pokedex.model';
import { pokedex } from '../../../../domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';

export const convertPokemonTypeMsToPokemonType = (
  pokemonTypeMs: pokedex.PokemonTypeDto,
): PokemonType => {
  return {
    id: pokemonTypeMs.id,
    name: pokemonTypeMs.name,
  };
};

export const convertPokemonBaseStatsMsToPokemonBaseStats = (
  baseStatsMs: pokedex.PokemonBaseStats,
): PokemonBaseStats => {
  return {
    hp: baseStatsMs.hp,
    atk: baseStatsMs.atk,
    def: baseStatsMs.def,
    spa: baseStatsMs.spa,
    spd: baseStatsMs.spd,
    spe: baseStatsMs.spe,
  };
};

export const convertPokemonAbilityMsToPokemonAbility = (
  abilityMs: pokedex.PokemonAbility,
): PokemonAbility => {
  return {
    id: abilityMs.id,
    name: abilityMs.name,
    description: abilityMs.description,
    type:
      abilityMs.type && abilityMs.type.trim().length ? abilityMs.type : null,
  };
};

export const convertPokemonMsToPokemon = (
  pokemonMs: pokedex.PokemonDto,
): Pokemon => {
  return {
    id: pokemonMs.id,
    num: pokemonMs.num,
    name: pokemonMs.name,
    forme: pokemonMs.form ?? null,
    baseSpeciesId: pokemonMs.baseSpeciesId ?? null,
    heightm: pokemonMs.heightm ?? null,
    weightkg: pokemonMs.weightkg ?? null,
    types: pokemonMs.types,
    baseStats: convertPokemonBaseStatsMsToPokemonBaseStats(pokemonMs.baseStats),
    abilities: pokemonMs.abilities.map(convertPokemonAbilityMsToPokemonAbility),
  };
};
