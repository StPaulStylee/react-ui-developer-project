interface StockOverviewRaw {
  EPS: string;
  Name: string;
  Symbol: string;
}

interface StockOverview {
  earningsPerShare: string;
  name: string;
  symbol: string;
}

export type { StockOverviewRaw, StockOverview };
