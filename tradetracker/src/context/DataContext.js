import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [trades, setTrades] = useState([]);
  const [chartData, setChartData] = useState([]);

  const addTrade = (newTrade) => {
    setTrades((prevTrades) => [...prevTrades, newTrade]);
  };
  const addChartData = (data) => {
    setChartData((prevData) => [...prevData, data]);
  };

  return (
    <DataContext.Provider value={{ trades, addTrade, chartData, addChartData }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
