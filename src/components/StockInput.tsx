import { useState, Dispatch, ChangeEvent, MouseEvent, SetStateAction } from 'react';
import { StockName } from '../models/StockName.model';
import { SymbolSearchResult } from '../models/SymbolSearch.model';
import { formatSearchResults } from '../utilities/searchResultUtility';

interface StockInputProps {
  setSearchResults: Dispatch<SetStateAction<StockName[] | undefined>>
}

// Do I need a clear button?
const StockInput = ({ setSearchResults }: StockInputProps) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const submitSearch = async (_event: MouseEvent) => {
    // update this call to take in a config which pulls values from .env
    const symbolResponse = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${currentSearch}&apikey=Q9SOLJTLGQ84PKLR`);
    // const overviewResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAL`);
    const results: SymbolSearchResult  = await symbolResponse.json();
    const formattedResults = formatSearchResults(results)
    setSearchResults(formattedResults);
  }

  const updateCurrentSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCurrentSearch(event.target.value);
  }

  return (
    <>
      <label htmlFor="stock-search">Find a stock by Symbol or Name</label>
      <input id="stock-search" onChange={updateCurrentSearch} />
      <button onClick={submitSearch}>Find</button>
    </>
  )
}

export { StockInput };
