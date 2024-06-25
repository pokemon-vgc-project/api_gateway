import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { pokedex } from './domain/proto/pokedex';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private natureService: pokedex.NatureService;

  constructor(
    @Inject('NatureService')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.natureService =
      this.client.getService<pokedex.NatureService>('NatureService');
  }

  getNatures(): Observable<pokedex.ResponseNatureDto> {
    return this.natureService.getNatures({});
  }
}
