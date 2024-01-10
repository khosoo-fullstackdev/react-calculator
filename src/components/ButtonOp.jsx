import React from "react";
import "../styles/button.css";

export default function ButtonOp({ value, changeTodoOp }) {
  console.log(value);
  return (
    <button className="btn" onClick={() => changeTodoOp(value)}>
      {value}
    </button>
  );
}
