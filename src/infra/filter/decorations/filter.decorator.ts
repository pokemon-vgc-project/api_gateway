import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { convertToFilterMapper } from '../mappers/convert_to_filter.mapper';
import { FilterTypePropModel } from '../models/filter_type_prop.model';

export const FilterParamsDecorator = <T>(
  filterTypeProps: FilterTypePropModel[],
) =>
  createParamDecorator((_: unknown, ctx: ExecutionContext): T | undefined => {
    const request = ctx.switchToHttp().getRequest();
    return convertToFilterMapper(filterTypeProps, request.query);
  })();
