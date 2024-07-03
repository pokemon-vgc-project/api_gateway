import { Module } from '@nestjs/common';
import { NatureController } from './controllers/nature.controller';

@Module({
  controllers: [NatureController],
})
export class PokedexModule {}
