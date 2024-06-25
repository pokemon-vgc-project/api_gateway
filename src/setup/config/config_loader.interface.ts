export interface HttpSetup {
  host: string;
  port: number;
}

export interface PokedexMs {
  host: string;
  port: number;
  package: string;
}

export interface ConfigLoaderAdapter {
  http: HttpSetup;
  pokedexMs: PokedexMs;
}
