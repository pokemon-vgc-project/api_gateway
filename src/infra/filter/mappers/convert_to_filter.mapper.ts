import { FilterTypePropModel } from '../models/filter_type_prop.model';
import { FilterTypesEnum } from '../models/filter_types.enum';

export const convertToFilterMapper = <T>(
  filterTypeProps: FilterTypePropModel[],
  query: unknown,
): T | undefined => {
  const filterProp = {};

  filterTypeProps.forEach(({ prop, type }) => {
    if (!Object.keys(query).includes(prop)) {
      return;
    }

    switch (type) {
      case FilterTypesEnum.FILTER_TYPE_NUMBER:
        filterProp[prop] = Number(query[prop]);
        break;
      case FilterTypesEnum.FILTER_TYPE_NUMBER_LIST:
        filterProp[prop] = query[prop].map((n) => Number(n));
        break;
      case FilterTypesEnum.FILTER_TYPE_START_END:
        filterProp[prop] = JSON.parse(query[prop]);
        break;
      default:
        filterProp[prop] = query[prop];
    }
  });

  return Object.keys(filterProp).length
    ? (filterProp as unknown as T)
    : undefined;
};
