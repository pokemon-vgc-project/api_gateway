import { ConfigService } from '@nestjs/config';
import {
  Pokemon,
  PokemonAbility,
  PokemonBaseStats,
  PokemonType,
} from '../../../../domain/models/pokedex.model';
import { pokedex } from '../../../../domain/proto/@pokemon-vgc-project/lib-proto/proto/pokedex';
import { WailordMs } from 'src/setup/config/config_loader.interface';
import { configLoaderEnum } from 'src/setup/config/config.loader';
import { Injectable } from '@nestjs/common';

interface GetPokemonImgLinkOptions {
  num: number;
  forme?: string;
}

@Injectable()
export class PokemonMapper {
  constructor(private readonly configService: ConfigService) {}

  convertPokemonTypeMsToPokemonType = (
    pokemonTypeMs: pokedex.PokemonTypeDto,
  ): PokemonType => {
    return {
      id: pokemonTypeMs.id,
      name: pokemonTypeMs.name,
    };
  };

  convertPokemonMsToPokemon = (pokemonMs: pokedex.PokemonDto): Pokemon => {
    return {
      id: pokemonMs.id,
      num: pokemonMs.num,
      name: pokemonMs.name,
      forme: pokemonMs.form ?? null,
      baseSpeciesId: pokemonMs.baseSpeciesId ?? null,
      heightm: pokemonMs.heightm ?? null,
      weightkg: pokemonMs.weightkg ?? null,
      types: pokemonMs.types,
      baseStats: this.convertPokemonBaseStatsMsToPokemonBaseStats(
        pokemonMs.baseStats,
      ),
      abilities: pokemonMs.abilities.map(
        this.convertPokemonAbilityMsToPokemonAbility,
      ),
      imgLink: this.getPokemonImgLink({
        num: pokemonMs.num,
        forme: pokemonMs.form,
      }),
    };
  };

  convertPokemonBaseStatsMsToPokemonBaseStats = (
    baseStatsMs: pokedex.PokemonBaseStats,
  ): PokemonBaseStats => {
    return {
      hp: baseStatsMs.hp,
      atk: baseStatsMs.atk,
      def: baseStatsMs.def,
      spa: baseStatsMs.spa,
      spd: baseStatsMs.spd,
      spe: baseStatsMs.spe,
    };
  };

  convertPokemonAbilityMsToPokemonAbility = (
    abilityMs: pokedex.PokemonAbility,
  ): PokemonAbility => {
    return {
      id: abilityMs.id,
      name: abilityMs.name,
      description: abilityMs.description,
      type:
        abilityMs.type && abilityMs.type.trim().length ? abilityMs.type : null,
    };
  };

  getPokemonImgLink({ num, forme }: GetPokemonImgLinkOptions): string {
    const host = this.configService.get<WailordMs>(
      configLoaderEnum.WAILORD_MS,
    ).host;

    const formeStr = forme && forme.trim() !== '' ? `_${forme}` : '';
    return `${host}/pokedex/${num}${formeStr}.png`;
  }
}
