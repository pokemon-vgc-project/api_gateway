export enum PokemonStatusEnum {
  ATK = 'ATK',
  DEF = 'DEF',
  SPA = 'SPA',
  SPD = 'SPD',
  SPE = 'SPE',
}

export interface Nature {
  id: number;
  name: string;
  increase: PokemonStatusEnum | null;
  decrease: PokemonStatusEnum | null;
}
