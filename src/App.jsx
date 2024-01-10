import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numberButtons, operatorButtons } from "./utils/constants";

export default function App() {
  const [currentSceen, setCurrentSceen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentSceen);
    setCurrentSceen("");
  }
  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevScreen) + Number(currentSceen) + "";
      setCurrentSceen(result);
    }
  }

  function changeScreenVal(val) {
    setCurrentSceen(currentSceen + val);
  }

  return (
    <div className="mainCalc">
      <Screen value={currentSceen} />
      <div className="buttons">
        <div className="numbers">
          {numberButtons.map((val, index) => {
            return (
              <Button
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
