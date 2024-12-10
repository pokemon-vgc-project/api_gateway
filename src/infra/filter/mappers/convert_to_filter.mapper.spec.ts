import { FilterTypesEnum } from '../models/filter_types.enum';
import { convertToFilterMapper } from './convert_to_filter.mapper';

describe('convertToFilterMapper', () => {
  it('should convert a filter type number', () => {
    const data = convertToFilterMapper<{ prop1: number }>(
      [{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_NUMBER }],
      { prop1: 10 },
    );
    expect(data.prop1).toEqual(10);
  });

  it('should convert a filter type number list', () => {
    const data = convertToFilterMapper<{ prop1: number[] }>(
      [{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_NUMBER_LIST }],
      { prop1: [10, 15, 0] },
    );
    const expectData = [10, 15, 0];
    expect(data.prop1).toEqual(expect.arrayContaining(expectData));
    expect(data.prop1.length).toEqual(expectData.length);
  });

  it('should convert a filter type start and end', () => {
    const data = convertToFilterMapper<{
      prop1: { start: number; end: number };
    }>([{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_START_END }], {
      prop1: `{"start": 0, "end": 10}`,
    });
    expect(data.prop1.start).toEqual(0);
    expect(data.prop1.end).toEqual(10);
  });

  it('should convert a filter type string', () => {
    const data = convertToFilterMapper<{ prop1: string }>(
      [{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_STRING }],
      { prop1: 'test prop' },
    );
    expect(data.prop1).toEqual('test prop');
  });

  it('should convert a filter type string list', () => {
    const data = convertToFilterMapper<{ prop1: string[] }>(
      [{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_STRING_LIST }],
      { prop1: ['abacate', 'banana', 'morango'] },
    );
    const expectData = ['abacate', 'banana', 'morango'];
    expect(data.prop1).toEqual(expect.arrayContaining(expectData));
    expect(data.prop1.length).toEqual(expectData.length);
  });

  it('should return undefined when the query is a blank object', () => {
    const data = convertToFilterMapper<{ prop1: string[] }>(
      [{ prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_STRING_LIST }],
      {},
    );
    expect(data).toBeUndefined();
  });

  it('should only return the data that contains on filterTypeProps list', () => {
    const data = convertToFilterMapper<{ [key: string]: number | string }>(
      [
        { prop: 'prop1', type: FilterTypesEnum.FILTER_TYPE_NUMBER },
        { prop: 'prop2', type: FilterTypesEnum.FILTER_TYPE_STRING },
      ],
      { prop1: 100, prop2: 'test prop', prop3: 1 },
    );
    expect(data.prop1).toEqual(100);
    expect(data.prop2).toEqual('test prop');
    expect(data.prop3).toBeUndefined();
  });
});
