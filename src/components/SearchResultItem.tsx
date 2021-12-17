interface SearchResultItemProps {
  handleClick: (data: string) => void;
  name: string;
  symbol: string;
}

const SearchResultItem = ({ handleClick, name, symbol }: SearchResultItemProps) => {
  console.log('Render from SearchResultItem');
  const clickMethod = () => {
    handleClick(symbol);
  };

  return (
    <div className="stock-list-item" onClick={clickMethod}>
      <span><b>Symbol:</b> {symbol} </span>
      <span><b>Name:</b> {name}</span>
    </div>
  )
}

export { SearchResultItem };
