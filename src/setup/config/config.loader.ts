import { ConfigLoaderAdapter } from './config_loader.interface';

export enum configLoaderEnum {
  HTTP = 'http',
  POKEDEX_MS = 'pokedexMs',
}

export const getConfig = (): ConfigLoaderAdapter => ({
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 3001,
  },
  pokedexMs: {
    url: process.env.POKEDEX_MS_HOST || 'localhost:3000',
    package: process.env.POKEDEX_MS_PACKAGE || 'pokedex',
  },
});
