import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Nature } from 'src/domain/models/nature.model';
import { PaginationResponse } from 'src/domain/models/pagination.model';
import { pokedex } from 'src/domain/proto/pokedex';
import { convertNatureMsToNature } from '../mappers/nature.mapper';

@Injectable()
export class NatureService implements OnModuleInit {
  private natureMsService: pokedex.NatureService;

  constructor(
    @Inject('NatureService')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.natureMsService =
      this.client.getService<pokedex.NatureService>('NatureService');
  }

  async getNatures(): Promise<PaginationResponse<Nature[]>> {
    const { data, meta } = await firstValueFrom<pokedex.ResponseNatureDto>(
      this.natureMsService.getNatures({}),
    );

    return {
      data: data.map(convertNatureMsToNature),
      meta,
    };
  }
}
