import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PokemonService } from '../../infra/microservices/pokedex/services/pokemon.service';
import { GetFormesDto } from '../dtos/pokemons/forme.dto';
import { GetTypesDto } from '../dtos/pokemons/type.dto';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('formes')
  @ApiOperation({ description: "Get the pokemon's forme list" })
  @ApiOkResponse({ type: GetFormesDto })
  getFormes() {
    return this.pokemonService.getFormes();
  }

  @Get('types')
  @ApiOperation({ description: "Get the pokemo's forme list" })
  @ApiOkResponse({ type: GetTypesDto })
  getTypes() {
    return this.pokemonService.getTypes();
  }
}
