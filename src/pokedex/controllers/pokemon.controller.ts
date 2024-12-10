import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PokemonService } from '../../infra/microservices/pokedex/services/pokemon.service';
import { GetFormesDto } from '../dtos/pokemons/forme.dto';
import { GetTypesDto } from '../dtos/pokemons/type.dto';
import { GetPokemonsDto } from '../dtos/pokemons/pokemon.dto';
import { PaginationParamsDecorator } from 'src/infra/pagination/decorations/pagination.decorator';
import { PaginationParams } from 'src/domain/models/pagination.model';
import { ApiPaginationParameterQuery } from 'src/infra/pagination/decorations/pagination_parameter.decorator';
import { SortParamsDecorator } from 'src/infra/sort/decorations/sort.decoration';
import { SortParams } from 'src/infra/sort/model/sort.model';
import {
  pokemonSortNames,
  pokemonSortNamesExample,
} from '../model/pokemon_sorts.model';
import { ApiSortParameterQuery } from 'src/infra/sort/decorations/sort_parameter.decorator';

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @ApiOperation({ description: 'Get pokemon list' })
  @ApiPaginationParameterQuery()
  @ApiSortParameterQuery(pokemonSortNamesExample)
  @ApiOkResponse({ type: GetPokemonsDto })
  getPokemons(
    @PaginationParamsDecorator() pagination: PaginationParams | undefined,
    @SortParamsDecorator(pokemonSortNames) sorts: SortParams[] | undefined,
  ) {
    return this.pokemonService.getPokemons({ pagination, sorts });
  }

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
