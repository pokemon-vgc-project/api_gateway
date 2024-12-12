import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ApiFilterParameterQuery(example?: string) {
  return applyDecorators(
    ApiQuery({
      name: 'filters',
      type: String,
      required: false,
      description: example ? `<strong>Filters:</strong> ${example}` : undefined,
    }),
  );
}
