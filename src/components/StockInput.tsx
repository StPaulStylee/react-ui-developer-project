import { useState, Dispatch, ChangeEvent, MouseEvent, SetStateAction } from 'react';
import { StockName } from '../models/StockName.model';
import { SymbolSearchResult } from '../models/SymbolSearch.model';
import { getDataFromFetch } from '../utilities/fetchUtility';
import { formatSearchResults } from '../utilities/searchResultUtility';

interface StockInputProps {
  setSearchResults: Dispatch<SetStateAction<StockName[]>>
}

const StockInput = ({ setSearchResults }: StockInputProps) => {
  console.log('Render from StockInput');
  const [currentSearch, setCurrentSearch] = useState('');

  const submitSearch = async (event: MouseEvent) => {
    event.preventDefault();
    const trimmedSearch = currentSearch.trim();
    if (!trimmedSearch) {
      alert('Bruh... Ya gotta enter a valid search.');
      return;
    }
    // update this call to take in a config which pulls values from .env
    const symbolResponse = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${currentSearch}&apikey=Q9SOLJTLGQ84PKLR`);
    // This is resused a lot - make a utility function that is generic
    // const results: SymbolSearchResult  = await symbolResponse.json();
    const results = await getDataFromFetch<SymbolSearchResult>(symbolResponse);
    const formattedResults = formatSearchResults(results)
    setSearchResults(formattedResults);
  }

  const clearSearch = (event: MouseEvent) => {
    event.preventDefault();
    setSearchResults([]);
  }

  const updateCurrentSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value);
  }

  return (
    <form>
      <label htmlFor="stock-search">Find a stock by Symbol or Name</label>
      <input id="stock-search" onChange={updateCurrentSearch} />
      <button type="submit" onClick={submitSearch}>Find</button>
      <button onClick={clearSearch}>Clear</button>
    </form>
  )
}

export { StockInput };
