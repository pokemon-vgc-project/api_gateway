import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ApiPaginationParameterQuery() {
  return applyDecorators(
    ApiQuery({ name: 'limit', type: Number, required: false }),
    ApiQuery({ name: 'skip', type: Number, required: false }),
  );
}
