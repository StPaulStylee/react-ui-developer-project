import { StockName } from "../models/StockName.model";
import { SymbolSearch, SymbolSearchResult } from "../models/SymbolSearch.model";

const formatSearchResults = (data: SymbolSearchResult) => {
  const formattedData = data.bestMatches.map(d => {
    return mapStockName(d);
  });
  return formattedData;
}

const mapStockName = (symbol: SymbolSearch) =>  {
  const keys = Object.keys(symbol);
  const formattedObject: any = {};
  keys.forEach(key => {
    const editedKey = key.split('. ')[1];
    formattedObject[editedKey] = symbol[key];
  })
  return formattedObject as StockName;
}

export { formatSearchResults };
