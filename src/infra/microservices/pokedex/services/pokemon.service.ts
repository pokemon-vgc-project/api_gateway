import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PokedexServices } from '@pokemon-vgc-project/lib-proto';
import { pokedex } from '../../../../domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';
import {
  PaginationMeta,
  PaginationResponse,
} from '../../../../domain/models/pagination.model';

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
}
