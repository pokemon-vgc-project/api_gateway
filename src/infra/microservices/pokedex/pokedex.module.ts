import { Module } from '@nestjs/common';
import { NatureService } from './services/nature.service';

@Module({
  providers: [NatureService],
  exports: [NatureService],
})
export class PokedexModule {}
