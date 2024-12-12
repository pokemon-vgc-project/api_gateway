import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PokedexServices } from '@pokemon-vgc-project/lib-proto';
import { pokedex } from '../../../../domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';
import {
  PaginationParams,
  PaginationMeta,
  PaginationResponse,
} from '../../../../domain/models/pagination.model';
import { Pokemon, PokemonType } from '../../../../domain/models/pokedex.model';
import {
  convertPokemonMsToPokemon,
  convertPokemonTypeMsToPokemonType,
} from '../mappers/pokemon.mapper';
import { SortParams } from 'src/infra/sort/model/sort.model';
import { PokemonFilters } from '../models/pokemon_filters.model';

interface GetPokemonsOptions {
  pagination?: PaginationParams;
  sorts?: SortParams[];
  filters?: PokemonFilters;
}

@Injectable()
export class PokemonService implements OnModuleInit {
  private pokemonMsService: pokedex.PokemonService;

  constructor(
    @Inject(PokedexServices.POKEMON_SERVICE)
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.pokemonMsService = this.client.getService<pokedex.PokemonService>(
      PokedexServices.POKEMON_SERVICE,
    );
  }

  async getFormes(): Promise<PaginationResponse<string[]>> {
    const { data, meta } =
      await firstValueFrom<pokedex.ResponsePokemonFormsDto>(
        this.pokemonMsService.getPokemonForms({}),
      );

    return {
      data,
      meta: meta as unknown as PaginationMeta,
    };
  }

  async getTypes(): Promise<PaginationResponse<PokemonType[]>> {
    const { data, meta } =
      await firstValueFrom<pokedex.ResponsePokemonTypesDto>(
        this.pokemonMsService.getPokemonTypes({}),
      );

    return {
      data: data.map(convertPokemonTypeMsToPokemonType),
      meta: meta as unknown as PaginationMeta,
    };
  }

  async getPokemons({
    pagination,
    filters,
    sorts,
  }: GetPokemonsOptions): Promise<PaginationResponse<Pokemon[]>> {
    const { data, meta } = await firstValueFrom<pokedex.ResponsePokemonsDto>(
      this.pokemonMsService.getPokemons({ pagination, sorts, filters }),
    );

    return {
      data: data ? data.map(convertPokemonMsToPokemon) : [],
      meta: meta as unknown as PaginationMeta,
    };
  }
}
