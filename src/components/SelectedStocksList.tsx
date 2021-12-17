interface SelectedStocksListProps {
  children: JSX.Element[] | undefined
}

const SelectedStocksList = ({ children }: SelectedStocksListProps) => {
  console.log('Render from SelectedStocksList');
  return (
    <section>
      { children }
    </section>
  );
}

export { SelectedStocksList };