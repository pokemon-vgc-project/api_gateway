import { pokedex } from '../proto/pokedex';

export type PaginationMeta = Required<pokedex.PaginationMeta>;

export interface PaginationResponse<Data> {
  data: Data;
  meta: PaginationMeta;
}
