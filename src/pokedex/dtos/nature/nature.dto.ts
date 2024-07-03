import { ApiProperty } from '@nestjs/swagger';
import { PokemonStatusEnum } from 'src/domain/models/nature.model';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

export class NatureDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly id: number;

  @ApiProperty({ enum: PokemonStatusEnum, required: true, nullable: true })
  readonly increase: PokemonStatusEnum | null;

  @ApiProperty({ enum: PokemonStatusEnum, required: true, nullable: true })
  readonly decrease: PokemonStatusEnum | null;
}

export class GetNaturesDto extends PaginationDto {
  @ApiProperty({
    type: NatureDto,
    isArray: true,
    required: true,
    nullable: false,
  })
  readonly data: NatureDto[];
}
