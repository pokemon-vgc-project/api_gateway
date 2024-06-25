import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupHost } from './setup/host.loader';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupHost(app);
}
bootstrap();
