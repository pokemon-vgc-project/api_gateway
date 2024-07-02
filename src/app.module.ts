import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './setup/config/config.loader';
import { InfraModule } from './infra/infra.module';
import { PokedexModule } from './pokedex/pokedex.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
      isGlobal: true,
    }),
    InfraModule,
    PokedexModule,
  ],
})
export class AppModule {}
