import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupHost } from './setup/host.loader';
import { setupSwagger } from './setup/swagger.load';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await setupHost(app);
}
bootstrap();
