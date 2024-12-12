import { FilterStartEndModel } from '../../../filter/models/filter.model';

export interface PokemonFilters {
  pokemonNum?: FilterStartEndModel;
  heightm?: FilterStartEndModel;
  weightkg?: FilterStartEndModel;
  types?: number[];
  abilities?: number[];
  name?: string;
  forms?: string[];
}

export const PokemonFiltersExample = `
 pokemonNum?: FilterStartEndModel; 
 heightm?: FilterStartEndModel; 
 weightkg?: FilterStartEndModel; 
 types?: number[]; 
 abilities?: number[];
 name?: string;
 forms?: string[]; 
 `;
