import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

export class PokemonBaseStatsDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly hp: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly atk: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly def: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly spa: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly spd: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly spe: number;
}

export class PokemonAbilityDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly id: number;

  @ApiProperty({ type: String, required: true, nullable: false })
  readonly name: string;

  @ApiProperty({ type: String, required: true, nullable: false })
  readonly description: string;

  @ApiProperty({ type: String, required: true, nullable: true })
  readonly type: string;
}

export class PokemonDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly id: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly num: number;

  @ApiProperty({ type: String, required: true, nullable: false })
  readonly name: string;

  @ApiProperty({ type: String, required: true, nullable: true })
  readonly forme: string | null;

  @ApiProperty({ type: Number, required: true, nullable: true })
  readonly baseSpeciesId: number | null;

  @ApiProperty({ type: Number, required: true, nullable: true })
  readonly heightm: number | null;

  @ApiProperty({ type: Number, required: true, nullable: true })
  readonly weightkg: number | null;

  @ApiProperty({ type: PokemonBaseStatsDto, required: true, nullable: false })
  readonly baseStats: PokemonBaseStatsDto;

  @ApiProperty({
    type: PokemonAbilityDto,
    isArray: true,
    required: true,
    nullable: false,
  })
  readonly abilities: PokemonAbilityDto;

  @ApiProperty({ type: String, required: true, nullable: false })
  readonly imgLink: string;
}

export class GetPokemonsDto extends PaginationDto {
  @ApiProperty({
    type: PokemonDto,
    isArray: true,
    required: true,
    nullable: false,
  })
  readonly data: PokemonDto[];
}
