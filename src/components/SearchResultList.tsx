import { StockName } from "../models/StockName.model";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultListProps {
  searchResults: StockName[] | undefined
}

const SearchResultList = ({ searchResults }: SearchResultListProps) => {
  // console.log('SearchResultList Rendered.');
  // searchResults.forEach(result => console.log(result.symbol));
  return (
    <section>
      {!searchResults ? <p>Enter some shit</p> : null }
      {searchResults && !searchResults?.length ? <p>No Results Found</p> : null }
      {searchResults?.map(result => (
        <SearchResultItem symbol={result.symbol} name={result.name} />
      ))
      }
    </section>
  );
}

export { SearchResultList };
