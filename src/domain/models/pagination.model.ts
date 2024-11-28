import { pokedex } from '../proto/@pokemon-vgc-project/lib-proto/proto/pokedex';

export type PaginationMeta = Required<pokedex.PaginationMeta>;

export interface PaginationResponse<Data> {
  data: Data;
  meta: PaginationMeta;
}

export interface PaginationParams {
  limit?: number;
  skip?: number;
}
