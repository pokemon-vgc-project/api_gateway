export interface HttpSetup {
  host: string;
  port: number;
}

export interface PokedexMs {
  url: string;
  package: string;
}

export interface ConfigLoaderAdapter {
  http: HttpSetup;
  pokedexMs: PokedexMs;
}
