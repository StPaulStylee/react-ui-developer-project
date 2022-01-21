import { GlobalQuote, GlobalQuoteRaw } from "../models/GlobalQuote.model";
import { StockData } from "../models/StockData.model";
import { StockOverview, StockOverviewRaw } from "../models/StockOverview.model";

const getStockData = (overview: StockOverviewRaw, quote: GlobalQuoteRaw): StockData => {
  const overviewData = getOverviewData(overview);
  const quoteData = getQuoteData(quote);
  const stockData: StockData = {...overviewData, ...quoteData, id: overviewData.symbol };
  return stockData;
}

// This method feels sloppy. The keys on the data returned by the API are
// whack and without a schema provided by the API its tough to know if
// all of this is necessary
const getQuoteData = (quote: GlobalQuoteRaw): GlobalQuote =>  {
  if (!quote['Global Quote']) {
    throw Error();
  }
  const keys = Object.keys(quote['Global Quote']);
  const formattedObject: any = {};
  keys.forEach(key => {
    const editedKey = key.split('. ')[1];
    formattedObject[editedKey] = quote['Global Quote'][key];
  });
  const globalQuote: GlobalQuote = {
    changePercentage: formattedObject['change percent'],
    high: formattedObject['high'].slice(0, -2),
    low: formattedObject['low'].slice(0, -2),
    price: formattedObject['price'].slice(0, -2)
  }
  return globalQuote;
}

const getOverviewData = (overview: StockOverviewRaw): StockOverview => {
  const overviewData: StockOverview = {
    earningsPerShare: overview.EPS,
    name: overview.Name,
    symbol: overview.Symbol
  }
  return overviewData;
}

export { getStockData };
