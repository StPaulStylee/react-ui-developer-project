import { SymbolSearchResult } from '../models/SymbolSearch.model';
import { formatSearchResults } from '../utilities/searchResultUtility'

describe('searchResultUtility', () => {
  const mockData: SymbolSearchResult = {
    bestMatches: [
      {
        ['1. Cool']: 'Beans',
        ['2. How Neat']: 'is that?',
        ['3. That\'s']: 'pretty neat.'
      },
      {
        ['1. name']: 'Clam Chowder',
        ['2. symbol']: 'the red or the white?',
      }
    ]
  }

  it('should format the provided data as expected', () => {
    const stockNames = formatSearchResults(mockData);
    expect(stockNames.length).toStrictEqual(2);
    expect(Object.keys(stockNames[0])).toEqual(['Cool', 'How Neat', 'That\'s', 'id']);
    expect(stockNames[1].name).toStrictEqual('Clam Chowder');
    expect(stockNames[1].symbol).toStrictEqual('the red or the white?');
    expect(stockNames[1].id).toStrictEqual('the red or the white?');
  })
});

export {}