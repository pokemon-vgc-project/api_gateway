import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';

export class GetFormesDto extends PaginationDto {
  @ApiProperty({
    type: String,
    isArray: true,
    required: true,
    nullable: false,
  })
  readonly data: string[];
}
