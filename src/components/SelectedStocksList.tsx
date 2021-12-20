interface SelectedStocksListProps {
  children: JSX.Element[] | undefined
}

const SelectedStocksList = ({ children }: SelectedStocksListProps) => {
  return (
    <section className="selected-stocks-section">
      { children }
    </section>
  );
}

export { SelectedStocksList };