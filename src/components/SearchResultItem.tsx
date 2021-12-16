interface SearchResultItemProps {
  symbol: string;
  name: string;
}

const SearchResultItem = ({ symbol, name }: SearchResultItemProps) => {
  return (
    <div className='stock-list-item'>
      <span>Symbol: {symbol}</span>
      <span>Name: {name}</span>
    </div>
  )
}

export { SearchResultItem };
