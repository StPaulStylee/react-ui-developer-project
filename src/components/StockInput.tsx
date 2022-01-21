import { useState, Dispatch, ChangeEvent, MouseEvent, SetStateAction } from 'react';
import { StockName } from '../models/StockName.model';
import { SymbolSearchResult } from '../models/SymbolSearch.model';
import { getDataFromFetch } from '../utilities/fetchUtility';
import { formatSearchResults } from '../utilities/searchResultUtility';

interface StockInputProps {
  setSearchResults: Dispatch<SetStateAction<StockName[]>>;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

const StockInput = ({ setSearchResults, setHasError }: StockInputProps) => {
  const [currentSearch, setCurrentSearch] = useState('');

  const submitSearch = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      const trimmedSearch = currentSearch.trim();
      if (!trimmedSearch) {
        alert('Bruh... Ya gotta enter a valid search.');
        return;
      }
      const symbolResponse = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${currentSearch}&apikey=Q9SOLJTLGQ84PKLR`);
      const results = await getDataFromFetch<SymbolSearchResult>(symbolResponse);
      const formattedResults = formatSearchResults(results)
      setSearchResults(formattedResults);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  }

  const clearSearch = (event: MouseEvent) => {
    event.preventDefault();
    setSearchResults([]);
  }

  const updateCurrentSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value);
  }

  return (
    <section className="stock-input-section">
      <form>
        <label className="form-label" htmlFor="stock-search">Find a stock by Symbol or Name</label>
        <input className="form-input" id="stock-search" onChange={updateCurrentSearch} />
        <button className="form-button search" type="submit" onClick={submitSearch}>Find</button>
        <button className="form-button clear" onClick={clearSearch}>Clear</button>
      </form>
    </section>
  )
}

export { StockInput };
