import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

export class TypeDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly id: number;

  @ApiProperty({ type: String, required: true, nullable: false })
  readonly name: string;
}

export class GetTypesDto extends PaginationDto {
  @ApiProperty({
    type: TypeDto,
    isArray: true,
    required: true,
    nullable: false,
  })
  readonly data: TypeDto[];
}
