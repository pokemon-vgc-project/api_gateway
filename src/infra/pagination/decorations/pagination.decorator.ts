import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginationParams } from '../../../domain/models/pagination.model';

export const PaginationParamsDecorator = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): PaginationParams | undefined => {
    const request = ctx.switchToHttp().getRequest();
    const { limit: limitStr, skip: skipStr } = request.query;

    const paginationParams: PaginationParams = {};

    const limit = limitStr ? Number(limitStr) : 0;
    const skip = skipStr ? Number(skipStr) : 0;

    if (limit > 0) {
      paginationParams.limit = limit;
    }

    if (skip > 0) {
      paginationParams.skip = skip;
    }

    return Object.keys(paginationParams).length > 0
      ? paginationParams
      : undefined;
  },
);
