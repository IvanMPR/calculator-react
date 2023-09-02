import { useCalcContext } from "../contexts/CalcContext";

function Display() {
  const { display } = useCalcContext();

  return (
    <input type="text" className="input" value={display} readOnly={true} />
  );
}

export default Display;
