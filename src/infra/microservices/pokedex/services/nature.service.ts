import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Nature } from 'src/domain/models/nature.model';
import {
  PaginationMeta,
  PaginationResponse,
} from 'src/domain/models/pagination.model';
import { pokedex } from 'src/domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';
import { convertNatureMsToNature } from '../mappers/nature.mapper';
import { PokedexServices } from '@pokemon-vgc-project/lib-proto';

@Injectable()
export class NatureService implements OnModuleInit {
  private natureMsService: pokedex.NatureService;

  constructor(
    @Inject(PokedexServices.NATURE_SERVICE)
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.natureMsService = this.client.getService<pokedex.NatureService>(
      PokedexServices.NATURE_SERVICE,
    );
  }

  async getNatures(): Promise<PaginationResponse<Nature[]>> {
    const { data, meta } = await firstValueFrom<pokedex.ResponseNatureDto>(
      this.natureMsService.getNatures({}),
    );

    return {
      data: data.map(convertNatureMsToNature),
      meta: meta as unknown as PaginationMeta,
    };
  }
}
