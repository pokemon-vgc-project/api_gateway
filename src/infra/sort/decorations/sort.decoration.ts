import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { SortParams } from '../model/sort.model';

export const SortParamsDecorator = (sortNames: string[]) => {
  return createParamDecorator(
    (_: unknown, ctx: ExecutionContext): SortParams[] | undefined => {
      const request = ctx.switchToHttp().getRequest();
      const { sorts } = request.query;

      if (!Array.isArray(sorts) || !sorts.length) {
        return undefined;
      }

      const sortParamsList: SortParams[] = sorts.map((sortParamsStr) => {
        const sortParams: SortParams = JSON.parse(sortParamsStr);
        const [name] = sortParams.name.split('.');
        if (!sortNames.includes(name)) {
          throw new BadRequestException(`The ${sortParams.name} is invalid`);
        }

        if (sortParams.order !== 'desc') {
          sortParams.order = 'asc';
        }

        return sortParams;
      });

      return sortParamsList;
    },
  )();
};
