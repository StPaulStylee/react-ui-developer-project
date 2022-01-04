import { Dispatch, SetStateAction } from "react";
import { StockData } from "../models/StockData.model";

interface SelectedStockItemProps {
  data: StockData;
  setSelectedStocks: Dispatch<SetStateAction<StockData[]>>
  border: boolean;
}

const SelectedStockItem = ({ data, setSelectedStocks, border }: SelectedStockItemProps) => {
  const setPercentChangeClass = (percentValue: string): string => {
    return parseInt(percentValue) <= 0 ? 'percent-negative' : 'percent-positive';
  }

  const setContainerClass = (needsBorder: boolean) => {
    return needsBorder ? "selected-stock-container border-right" : "selected-stock-container"
  }

  const removeFromSelectedStocks = () => {
    setSelectedStocks((prevSelectedStocks) => {
      const filteredStocks = prevSelectedStocks.filter(stock => stock.id !== data.id);
      return filteredStocks;
    });
  }

  return (
    <div className={setContainerClass(border)}>
      {!data ? <div className="select-stock-undefined"><p>Search for a stock by symbol or name and select up to three(3) results to see more details...</p></div> :
      <div className="selected-stock-item">
        <div className="remove-container"><span className="remove" onClick={removeFromSelectedStocks}>Remove</span></div>
        <p className="stock-name"><b>{data.name}</b> (<i className="stock-symbol">{data.symbol}</i>)</p>
        <p className="stock-price"><b>Current Price: </b>${data.price}</p>
        <p className="stock-percent-change"><b>Percent Changed Today: </b><span className={setPercentChangeClass(data.changePercentage)}>{data.changePercentage}</span></p>
        <p className="stock-eps"><b>Earnings Per Share:</b> ${data.earningsPerShare}</p>
        <p className="stock-high"><b>High:</b> ${data.high}</p>
        <p className="stock-low"><b>Low:</b> ${data.low}</p>
      </div>}
    </div>
  )
}

export { SelectedStockItem };
