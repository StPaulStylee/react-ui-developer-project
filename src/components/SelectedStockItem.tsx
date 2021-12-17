import { StockData } from "../models/StockData.model";

interface SelectedStockItemProps {
  data: StockData;
}

const SelectedStockItem = ({ data }: SelectedStockItemProps) => {
  console.log('Render from SelectStockItem');
  return (
    <div className="selected-stock-item">
      <p><b>{data.name}</b> (<i>{data.symbol}</i>)</p>
      <p><b>Earnings Per Share:</b> {data.earningsPerShare}</p>
      <p><b>Percent Changed Today: </b>{data.changePercentage}</p>
    </div>
  )
}

export { SelectedStockItem };
