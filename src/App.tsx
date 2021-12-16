import { useState, useEffect } from 'react';
import './App.css';
import { StockInput } from './components/StockInput';
import { SearchResultList } from './components/SearchResultList';
import { StockData } from './models/StockData.model';
import { StockName } from './models/StockName.model';

function App() {
  // console.log('Render from app component');
  const [searchResults, setSearchResults] = useState<StockName[] | undefined >();
  const [selectedStocks, setSelectedStocks] = useState<StockData[] | undefined>();
  // useEffect(() => {
    // console.log('in useEffect');
    // console.log(JSON.stringify(searchResults));
  // }, [searchResults])
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <StockInput setSearchResults={setSearchResults} />
      <SearchResultList searchResults={searchResults} />
    </div>
  );
}

export default App;
