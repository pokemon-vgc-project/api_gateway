import { ConfigService } from '@nestjs/config';
import { ClientProvider, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { configLoaderEnum } from 'src/setup/config/config.loader';
import { PokedexMs } from 'src/setup/config/config_loader.interface';

export const getNatureServiceProvider = (
  configService: ConfigService,
): ClientProvider => {
  const { package: packageStr, url } = configService.get<PokedexMs>(
    configLoaderEnum.POKEDEX_MS,
  );

  return {
    transport: Transport.GRPC,
    options: {
      url,
      package: packageStr,
      protoPath: join(__dirname, '../../../../src/domain/proto/pokedex.proto'),
    },
  };
};
