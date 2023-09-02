import { useState, createContext, useContext } from "react";

const CalcContext = createContext();

const operators = ["+", "-", "*", "/"];

function CalcContextProvider({ children }) {
  const [display, setDisplay] = useState("0");
  console.log(display, typeof display);

  function handleInput(e) {
    // String representation of clicked button value
    const { num } = e.target.dataset;

    if (num === "AC") return setDisplay("0");
    if (num === "=") return setDisplay(eval(display).toString());
    if (num === "C")
      return setDisplay(
        display.slice(0, -1).length === 0 ? "0" : display.slice(0, -1)
      );

    if (display === "0" && num === "0") return;
    if (display === "0." && num === ".") return;
    if (display === "0" && (num === "." || operators.includes(num)))
      return setDisplay(display + num);
    if (display === "0." && operators.includes(num)) return;
    if (display.endsWith(".") && operators.includes(num)) return;
    if (display.endsWith(".") && num === ".") return;
    if (operators.includes(display.at(-1)) && num === ".") return;

    setDisplay(display === "0" ? (display + num).slice(1) : display + num);
  }

  return (
    <CalcContext.Provider
      value={{
        display,
        setDisplay,
        handleInput,
      }}
    >
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
