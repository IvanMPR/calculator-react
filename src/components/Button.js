import { useCalcContext } from "../contexts/CalcContext";

function Button({ children, num, bgColor = "buttonface" }) {
  const { display, setDisplay } = useCalcContext();
  function handleInput(e) {
    setDisplay(display === "0" ? "" + children : display + children);
  }
  return (
    <button
      onClick={handleInput}
      name={num}
      className="button"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}

export default Button;
