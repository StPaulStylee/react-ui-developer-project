import './App.css';
import { useState } from 'react';
import { StockInput } from './components/StockInput';
import { SearchResultList } from './components/SearchResultList';
import { StockData } from './models/StockData.model';
import { StockName } from './models/StockName.model';
import { SearchResultItem } from './components/SearchResultItem';
import { getStockData } from './utilities/selectStockUtility';
import { StockOverviewRaw } from './models/StockOverview.model';
import { GlobalQuoteRaw } from './models/GlobalQuote.model';
import { SelectedStocksList } from './components/SelectedStocksList';
import { SelectedStockItem } from './components/SelectedStockItem';
import { getDataFromFetch } from './utilities/fetchUtility';

function App() {
  console.log('Render from app component');
  const [searchResults, setSearchResults] = useState<StockName[]>([]);
  const [selectedStocks, setSelectedStocks] = useState<StockData[]>([]);
  const handleSelectedStock = async (selectedStock: string) => {
    const overviewResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${selectedStock}&apikey=Q9SOLJTLGQ84PKLR`);
    const overviewResults = await getDataFromFetch<StockOverviewRaw>(overviewResponse);
    const quoteResponse = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedStock}&apikey=Q9SOLJTLGQ84PKLR`);
    const quoteResults = await getDataFromFetch<GlobalQuoteRaw>(quoteResponse)
    const stockData = getStockData(overviewResults, quoteResults);
    setSelectedStocks((prevSelectedStocks) => [...prevSelectedStocks, stockData])
  }

  return (
    <div className="App">
      <StockInput setSearchResults={setSearchResults} />
      <SearchResultList>
        {searchResults.map(result => (
          <SearchResultItem handleClick={handleSelectedStock} name={result.name} symbol={result.symbol} key={result.id} />
        ))
        }
      </SearchResultList>
      <SelectedStocksList>
        {selectedStocks.map(stock => (
          <SelectedStockItem data={stock} key={stock.id}/>
        ))
        }
      </SelectedStocksList>
    </div>
  );
}

export default App;
