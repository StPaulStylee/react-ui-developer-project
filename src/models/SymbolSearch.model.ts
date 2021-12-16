interface SymbolSearchResult {
  bestMatches: SymbolSearch[]
}

interface SymbolSearch {
  [key: string]: string;
}

export type { SymbolSearchResult, SymbolSearch };
