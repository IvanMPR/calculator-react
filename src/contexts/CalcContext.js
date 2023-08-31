import { useState, createContext, useContext } from "react";

const CalcContext = createContext();

function CalcContextProvider({ children }) {
  const [display, setDisplay] = useState("");
  return (
    <CalcContext.Provider value={{ display, setDisplay }}>
      {children}
    </CalcContext.Provider>
  );
}

function useCalcContext() {
  const context = useContext(CalcContext);
  if (context === undefined) {
    throw new Error("useCalcContext must be used within a CalcContextProvider");
  }
  return context;
}

export { CalcContextProvider, useCalcContext };
