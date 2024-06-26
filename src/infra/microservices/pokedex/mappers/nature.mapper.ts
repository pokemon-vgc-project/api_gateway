import { Nature, PokemonStatusEnum } from 'src/domain/models/nature.model';
import { pokedex } from 'src/domain/proto/pokedex';

export const convertNatureMsToNature = (
  natureMs: pokedex.NatureDto,
): Nature => ({
  id: natureMs.id,
  name: natureMs.name,
  increase: (natureMs.increase as unknown as PokemonStatusEnum) ?? null,
  decrease: (natureMs.decrease as unknown as PokemonStatusEnum) ?? null,
});
