import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { GetFormesDto } from '../dtos/pokemons/forme.dto';
import { PokemonService } from '../../infra/microservices/pokedex/services/pokemon.service';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('formes')
  @ApiOperation({ description: "Get the pokemon's forme list" })
  @ApiOkResponse({ type: GetFormesDto })
  getFormes() {
    return this.pokemonService.getFormes();
  }
}
