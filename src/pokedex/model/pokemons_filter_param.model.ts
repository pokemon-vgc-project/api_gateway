import { FilterTypesEnum } from '../../infra/filter/models/filter_types.enum';
import { FilterTypePropModel } from '../../infra/filter/models/filter_type_prop.model';

export const pokemonsFilterParams: FilterTypePropModel[] = [
  { prop: 'pokemonNum', type: FilterTypesEnum.FILTER_TYPE_START_END },
  { prop: 'heightm', type: FilterTypesEnum.FILTER_TYPE_START_END },
  { prop: 'weightkg', type: FilterTypesEnum.FILTER_TYPE_START_END },
  { prop: 'types', type: FilterTypesEnum.FILTER_TYPE_NUMBER_LIST },
  { prop: 'abilities', type: FilterTypesEnum.FILTER_TYPE_NUMBER_LIST },
  { prop: 'name', type: FilterTypesEnum.FILTER_TYPE_STRING },
  { prop: 'forms', type: FilterTypesEnum.FILTER_TYPE_STRING_LIST },
];
