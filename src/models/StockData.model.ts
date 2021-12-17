import { StockName } from "./StockName.model";

interface StockData {
  id: string;
  changePercentage: string;
  earningsPerShare: string;
  name: string;
  symbol: string;
}

export type { StockData }