import React from "react";
import "../styles/button.css";

export default function ButtonOp({ value, pressedBtn }) {
  return (
    <button className="btn " onClick={() => pressedBtn(value)}>
      {value}
    </button>
  );
}
