import { StockName } from "../models/StockName.model";
import { SymbolSearch, SymbolSearchResult } from "../models/SymbolSearch.model";

const formatSearchResults = (results: SymbolSearchResult): StockName[] => {
  const formattedData = results.bestMatches.map(result => {
    return mapStockName(result);
  });
  return formattedData;
}

// I don't love this method as it's bypassing TS with the 'formattedObject' 
// variable. The setting of it's 'id' feels especially bad.
const mapStockName = (symbol: SymbolSearch): StockName =>  {
  const keys = Object.keys(symbol);
  const formattedObject: any = {};
  keys.forEach((key) => {
    const editedKey = key.split('. ')[1];
    formattedObject[editedKey] = symbol[key];
  })
  formattedObject.id = formattedObject.symbol;
  return formattedObject as StockName;
}

export { formatSearchResults };
