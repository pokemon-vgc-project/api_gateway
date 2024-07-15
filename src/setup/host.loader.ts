import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpSetup } from './config/config_loader.interface';
import { configLoaderEnum } from './config/config.loader';

export async function setupHost(app: INestApplication) {
  const configService = app.get<ConfigService>(ConfigService);
  const { host, port } = configService.get<HttpSetup>(configLoaderEnum.HTTP);
  app.enableCors();
  await app.listen(port, host);
  console.log(`Started server on ${host} host and ${port} port`);
}
