import { useCalcContext } from "../contexts/CalcContext";

function Display() {
  const { display, setDisplay } = useCalcContext();

  return (
    <input
      type="text"
      className="input"
      value={display}
      onChange={(e) => setDisplay(e.target.value)}
    />
  );
}

export default Display;
