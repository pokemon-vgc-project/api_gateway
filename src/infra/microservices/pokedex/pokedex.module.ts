import { Module } from '@nestjs/common';
import { NatureService } from './services/nature.service';
import { PokemonService } from './services/pokemon.service';
import { PokemonMapper } from './mappers/pokemon.mapper';

@Module({
  providers: [PokemonMapper, NatureService, PokemonService],
  exports: [NatureService, PokemonService],
})
export class PokedexModule {}
