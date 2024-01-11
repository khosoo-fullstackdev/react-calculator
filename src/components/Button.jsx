import React from "react";
import "../styles/button.css";

export default function Button({ value, pressedBtn }) {
  return (
    <button className="btn" onClick={() => pressedBtn(value)}>
      {value}
    </button>
  );
}
