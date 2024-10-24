import { Module } from '@nestjs/common';
import { NatureService } from './services/nature.service';
import { PokemonService } from './services/pokemon.service';

@Module({
  providers: [NatureService, PokemonService],
  exports: [NatureService, PokemonService],
})
export class PokedexModule {}
