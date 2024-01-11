import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numbers } from "./utils/constants";
import { operators } from "./utils/constants";
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
    if (todoOp == "+/-") {
      const result = Number(prevScreen) * -1;
      setCurrentSceen(result);
    }
  }

  function changeScreenVal(val) {
    setCurrentSceen(currentSceen + val);
  }

  function pressedBtn(val) {
    if (
      val == "+" ||
      val == "AC" ||
      val == "+/-" ||
      val == "%" ||
      val == "/" ||
      val == "*" ||
      val == "-" ||
      val == "+"
    ) {
      changeTodoOp(val);
    }
    if (
      val == "7" ||
      val == "8" ||
      val == "9" ||
      val == "4" ||
      val == "5" ||
      val == "6" ||
      val == "1" ||
      val == "2" ||
      val == "3" ||
      val == "0" ||
      val == "."
    ) {
      changeScreenVal(val);
    }
    if (val == "=") {
      equalHandler();
    }
  }

  return (
    <div className="mainCalc">
      <Screen value={currentSceen} />
      <div className="buttons">
        {buttons.map((val, index) => {
          return <Button key={index} value={val} pressedBtn={pressedBtn} />;
        })}
      </div>
    </div>
  );
}
