import { ConfigService } from '@nestjs/config';
import { ClientProvider, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { configLoaderEnum } from '../../../../setup/config/config.loader';
import { PokedexMs } from '../../../../setup/config/config_loader.interface';

export const getPokemonsServiceProvider = (
  configService: ConfigService,
): ClientProvider => {
  const {
    package: packageStr,
    host,
    port,
  } = configService.get<PokedexMs>(configLoaderEnum.POKEDEX_MS);
  const url = `${host}:${port}`;
  return {
    transport: Transport.GRPC,
    options: {
      url,
      package: packageStr,
      protoPath: join(
        __dirname,
        '../../../../../node_modules/@pokemon-vgc-project/lib-proto/proto/pokedex.proto',
      ),
    },
  };
};
