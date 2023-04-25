import { createContext, useState } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [chartData, setChartData] = useState([]);

  return (
    <DataContext.Provider value={{ chartData, setChartData }}>
      {children}
    </DataContext.Provider>
  );
}