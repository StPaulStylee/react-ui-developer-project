interface GlobalQuoteRaw {
  ['Global Quote']: {
    [key: string]: string;
  }
}

interface GlobalQuote {
  changePercentage: string;
  high: string;
  low: string;
  price: string;
}

export type { GlobalQuoteRaw, GlobalQuote };
