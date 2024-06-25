import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './setup/config/config.loader';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
      isGlobal: true,
    }),
    InfraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
