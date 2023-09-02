import { useState, createContext, useContext } from "react";

const CalcContext = createContext();

const operators = ["+", "-", "*", "/"];

function CalcContextProvider({ children }) {
  const [display, setDisplay] = useState("0");

  function handleInput(e) {
    // String representation of clicked button value
    const { num } = e.target.dataset;
    // Clear all
    if (num === "AC") return setDisplay("0");
    // Evaluate expression
    if (num === "=") return setDisplay(eval(display).toString());
    // Delete last character
    if (num === "C")
      return setDisplay(
        display.slice(0, -1).length === 0 ? "0" : display.slice(0, -1)
      );
    // Prevent multiple consecutive zeros
    if (display === "0" && num === "0") return;
    // Prevent multiple consecutive dots - decimal points
    if (display === "0." && num === ".") return;
    // Prevent deleting zero if first input is dot or an operator
    if (display === "0" && (num === "." || operators.includes(num)))
      return setDisplay(display + num);
    // Prevent performing operations with invalid decimal number
    if (display === "0." && operators.includes(num)) return;
    // Prevent operation with expression ending with the dot
    if (display.endsWith(".") && operators.includes(num)) return;
    // Prevent multiple dots at the end of expression
    if (display.endsWith(".") && num === ".") return;
    // If last input is an operator, forbid input of the dot without a number
    if (operators.includes(display.at(-1)) && num === ".") return;
    // Prevent multiple operators in a row
    if (operators.includes(display.at(-1)) && operators.includes(num)) return;
    // Prevent and modify examples like this: 55 + 08 (leading zero in second number will be omitted)
    if (
      display.endsWith("0") &&
      operators.includes(display.at(-2)) &&
      num !== "."
    )
      return setDisplay(display.slice(0, -1) + num);

    // Otherwise, add input to the display, removing the leading zero if necessary
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
