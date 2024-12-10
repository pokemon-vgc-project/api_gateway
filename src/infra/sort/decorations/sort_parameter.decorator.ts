import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ApiSortParameterQuery(names: string[]) {
  return applyDecorators(
    ApiQuery({
      name: 'sorts',
      type: [String],
      required: false,
      description: `<strong>Example:</strong> { name: string, order: asc | desc };<br/><strong>Names:</strong> ${names.join(', ')}`,
    }),
  );
}
