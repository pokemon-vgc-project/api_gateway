import { FilterTypePropModel } from '../models/filter_type_prop.model';

export const convertToFilterMapper = <T>(
  filterTypeProps: FilterTypePropModel[],
  query: unknown,
): T | undefined => {
  const filterProp = {};

  filterTypeProps.forEach(({ prop }) => {
    if (!Object.keys(query).includes(prop)) {
      return;
    }

    filterProp[prop] = query[prop];
  });

  return Object.keys(filterProp).length
    ? (filterProp as unknown as T)
    : undefined;
};
