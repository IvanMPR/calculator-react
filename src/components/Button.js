import { useCalcContext } from "../contexts/CalcContext";

function Button({ children, bgColor = "buttonface" }) {
  const { handleInput } = useCalcContext();

  return (
    <button
      onClick={handleInput}
      data-num={children}
      className="button"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}

export default Button;
