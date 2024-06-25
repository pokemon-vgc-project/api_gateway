import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NatureService',
        transport: Transport.GRPC,
        options: {
          url: `localhost:3000`,
          package: 'pokedex',
          protoPath: join(__dirname, '../src/domain/proto/pokedex.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
