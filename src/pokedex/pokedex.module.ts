import { Module } from '@nestjs/common';
import { NatureController } from './controllers/nature.controller';
import { PokemonController } from './controllers/pokemon.controller';

@Module({
  controllers: [NatureController, PokemonController],
})
export class PokedexModule {}
