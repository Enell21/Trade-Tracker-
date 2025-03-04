import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [trades, setTrades] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [formData, setFormData] = useState({
    selectedMonth: "",
    changeValue: "",
    tradeEntry: "",
    prizeOnSell: "",
    tradeSize: "",
    PNL: "",
    tradeDescription: "",
  });

  const addTrade = (newTrade) => {
    setTrades((prevTrades) => [...prevTrades, newTrade]);
  };
  const addChartData = (data) => {
    const monthData = chartData.find((item) => item.date === data.name);
    if (monthData) {
      monthData.PNL += data.PNL;
      setChartData([...chartData]);
    } else {
      setChartData((prevData) => [...prevData, data]);
    }
  };

  const updatedFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const resetFormData = () => {
    setFormData({
      selectedMonth: "",
      changeValue: "",
      tradeEntry: "",
      prizeOnSell: "",
      tradeSize: "",
      PNL: "",
      tradeDescription: "",
    });
  };
  return (
    <DataContext.Provider
      value={{
        trades,
        addTrade,
        chartData,
        addChartData,
        formData,
        updatedFormData,
        resetFormData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  return useContext(DataContext);
};
