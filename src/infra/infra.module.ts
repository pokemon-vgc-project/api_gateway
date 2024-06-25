import { Global, Module } from '@nestjs/common';
import { MicroservicesModule } from './microservices/microservices.module';

@Global()
@Module({
  imports: [MicroservicesModule],
  exports: [MicroservicesModule],
})
export class InfraModule {}
