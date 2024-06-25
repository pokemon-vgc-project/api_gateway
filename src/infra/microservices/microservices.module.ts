import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getNatureServiceProvider } from './providers/nature_service.provider';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'NatureService',
        inject: [ConfigService],
        useFactory: getNatureServiceProvider,
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroservicesModule {}
