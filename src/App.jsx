import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { buttons } from "./utils/constants";

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
    if (todoOp == "-") {
      const result = Number(prevScreen) - Number(currentSceen) + "";
      setCurrentSceen(result);
    }
    if (todoOp == "*") {
      const result = Number(prevScreen) * Number(currentSceen) + "";
      setCurrentSceen(result);
    }
    if (todoOp == "/") {
      const result = Number(prevScreen) / Number(currentSceen) + "";
      setCurrentSceen(result);
    }
    if (todoOp == "AC") {
      const result = "";
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
        {buttons.map((val, index) => {
          if (
            val != "AC" ||
            val != "+" ||
            val != "-" ||
            val != "*" ||
            val != "/" ||
            val != "%" ||
            val != "+/-" ||
            val != "." ||
            val != "="
          )
            return (
              <Button
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            );
          else
            return (
              <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
            );
        })}
        <button className="btn" onClick={equalHandler}>
          =
        </button>
      </div>
    </div>
  );
}
