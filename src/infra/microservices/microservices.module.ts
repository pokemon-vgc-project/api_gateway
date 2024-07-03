import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getNatureServiceProvider } from './pokedex/providers/nature_service.provider';
import { ConfigService } from '@nestjs/config';
import { PokedexModule } from './pokedex/pokedex.module';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'NatureService',
        inject: [ConfigService],
        useFactory: getNatureServiceProvider,
      },
    ]),
    PokedexModule,
  ],
  exports: [ClientsModule, PokedexModule],
})
export class MicroservicesModule {}
