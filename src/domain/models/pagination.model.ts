import { pokedex } from '../proto/pokedex';

export interface PaginationMeta extends pokedex.PaginationMeta {}

export interface PaginationResponse<Data> {
  data: Data;
  meta: PaginationMeta;
}
