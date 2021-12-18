interface SearchResultListProps {
  children: JSX.Element[] | undefined
}

const SearchResultList = ({ children }: SearchResultListProps) => {
  console.log('Render from SearchResultList');
  // searchResults.forEach(result => console.log(result.symbol));
  return (
    <section className="search-result-list">
      { children }
            {/* {!searchResults ? <p>Enter some shit</p> : <></> }
        {searchResults && !searchResults?.length ? <p>No Results Found</p> : <></> }
        {!searchResults ? <p>Enter some shit</p> : <></> }
        {searchResults && !searchResults?.length ? <p>No Results Found</p> : <></> } */}
      {/* {!searchResults ? <p>Enter some shit</p> : null }
      {searchResults && !searchResults?.length ? <p>No Results Found</p> : null }
      {searchResults?.map(result => (
        <SearchResultItem symbol={result.symbol} name={result.name} />
      ))
      } */}
    </section>
  );
}

export { SearchResultList };
