interface SearchResultItemProps {
  handleClick: (data: string) => void;
  name: string;
  symbol: string;
}

const SearchResultItem = ({ handleClick, name, symbol }: SearchResultItemProps) => {
  const clickMethod = () => {
    handleClick(symbol);
  };

  return (
    <div className="stock-list-item" onClick={clickMethod}>
      <span className="stock-list-item-detail name"><b>Name:</b> {name}</span>
      <span className="stock-list-item-detail symbol"><b>Symbol:</b> {symbol} </span>
    </div>
  )
}

export { SearchResultItem };
