interface GlobalQuoteRaw {
  ['Global Quote']: {
    [key: string]: string;
  }
}

interface GlobalQuote {
  changePercentage: string;
}

export type { GlobalQuoteRaw, GlobalQuote };
