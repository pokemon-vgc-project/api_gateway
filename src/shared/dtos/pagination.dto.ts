import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetaDto {
  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly page: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly skip: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly limit: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly itemCount: number;

  @ApiProperty({ type: Number, required: true, nullable: false })
  readonly pageCount: number;

  @ApiProperty({ type: Boolean, required: true, nullable: false })
  readonly hasPreviousPage: boolean;

  @ApiProperty({ type: Boolean, required: true, nullable: false })
  readonly hasNextPage: boolean;
}

export class PaginationDto {
  @ApiProperty({ type: PaginationMetaDto, required: true, nullable: false })
  readonly meta: PaginationMetaDto;
}
