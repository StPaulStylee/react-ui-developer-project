import './App.css';
import { useState } from 'react';
import { GenericError } from './components/GenericError';
import { SearchResultItem } from './components/SearchResultItem';
import { SearchResultList } from './components/SearchResultList';
import { SelectedStockItem } from './components/SelectedStockItem';
import { SelectedStocksList } from './components/SelectedStocksList';
import { StockData } from './models/StockData.model';
import { StockInput } from './components/StockInput';
import { GlobalQuoteRaw } from './models/GlobalQuote.model';
import { StockName } from './models/StockName.model';
import { StockOverviewRaw } from './models/StockOverview.model';
import { getStockData } from './utilities/selectStockUtility';
import { getDataFromFetch } from './utilities/fetchUtility';

function App() {
  const [searchResults, setSearchResults] = useState<StockName[]>(new Array(3));
  const [selectedStocks, setSelectedStocks] = useState<StockData[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleSelectedStock = async (selectedStock: string) => {
    try {
      const overviewResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${selectedStock}&apikey=Q9SOLJTLGQ84PKLR`);
      const overviewResults = await getDataFromFetch<StockOverviewRaw>(overviewResponse);
      const quoteResponse = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedStock}&apikey=Q9SOLJTLGQ84PKLR`);
      const quoteResults = await getDataFromFetch<GlobalQuoteRaw>(quoteResponse);
      const stockData = getStockData(overviewResults, quoteResults);
      setSelectedStocks((prevSelectedStocks) => [...prevSelectedStocks, stockData]);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  }

  return (
    <div className="App" id="AppId">
      {hasError ? <GenericError /> : <></>}
      <StockInput setSearchResults={setSearchResults} setHasError={setHasError}/>
      <SearchResultList>
        {searchResults.map(result => (
          <SearchResultItem handleClick={handleSelectedStock} name={result.name} symbol={result.symbol} key={result.id} />
        ))
        }
      </SearchResultList>
      <SelectedStocksList>
        <SelectedStockItem data={selectedStocks[0]} setSelectedStocks={setSelectedStocks} border={true} key="0" />
        <SelectedStockItem data={selectedStocks[1]} setSelectedStocks={setSelectedStocks} border={true} key="1" />
        <SelectedStockItem data={selectedStocks[2]} setSelectedStocks={setSelectedStocks} border={false} key="2" />
      </SelectedStocksList>
    </div>
  );
}

export default App;
