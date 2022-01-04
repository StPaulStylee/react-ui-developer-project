interface SearchResultListProps {
  children: JSX.Element[] | undefined
}

const SearchResultList = ({ children }: SearchResultListProps) => {
  return (
    <section className="search-result-section">
      <div className="search-result-container">
        { children }
      </div>
    </section>
  );
}

export { SearchResultList };
