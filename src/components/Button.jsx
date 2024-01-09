import "../styles/display.css";
import Buttons from "./Buttons";
const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
export default function CalcBody() {
  return (
    <div className="calc-body">
      {buttons.map((e, index) => {
        return <Buttons data={e} key={index} />;
      })}
    </div>
  );
}
