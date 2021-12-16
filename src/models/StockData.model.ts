import { StockName } from "./StockName.model";

interface StockData {
  id: string;
  brandingInfo: StockName;
  changePercentage: string;
  eps: string;
}

export type { StockData }