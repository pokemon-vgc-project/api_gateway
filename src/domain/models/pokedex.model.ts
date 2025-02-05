export interface PokemonType {
  id: number;
  name: string;
}

export interface PokemonBaseStats {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

export interface PokemonAbility {
  id: number;
  name: string;
  description: string;
  type: string | null;
}

export interface Pokemon {
  id: number;
  num: number;
  name: string;
  forme: string | null;
  baseSpeciesId: number | null;
  heightm: number | null;
  weightkg: number | null;
  types: string[];
  baseStats: PokemonBaseStats;
  abilities: PokemonAbility[];
  imgLink: string;
}
