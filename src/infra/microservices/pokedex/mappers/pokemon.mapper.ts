import { PokemonType } from '../../../../domain/models/pokedex.model';
import { pokedex } from '../../../../domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';

export const convertPokemonTypeMsToPokemonType = (
  pokemonTypeMs: pokedex.PokemonTypeDto,
): PokemonType => {
  return {
    id: pokemonTypeMs.id,
    name: pokemonTypeMs.name,
  };
};
