import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getNatureServiceProvider } from './pokedex/providers/nature_service.provider';
import { getPokemonsServiceProvider } from './pokedex/providers/pokemons_service.provider';
import { ConfigService } from '@nestjs/config';
import { PokedexModule } from './pokedex/pokedex.module';
import { PokedexServices } from '@pokemon-vgc-project/lib-proto';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: PokedexServices.NATURE_SERVICE,
        inject: [ConfigService],
        useFactory: getNatureServiceProvider,
      },
      {
        name: PokedexServices.POKEMON_SERVICE,
        inject: [ConfigService],
        useFactory: getPokemonsServiceProvider,
      },
    ]),
    PokedexModule,
  ],
  exports: [ClientsModule, PokedexModule],
})
export class MicroservicesModule {}
