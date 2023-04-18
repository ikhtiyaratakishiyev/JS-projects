import React, { useState } from "react";
import './style.scss'

export default function index({
  result,
  setResult,
  number1,
  setNumber1,
  number2,
  setNumber2,
}) {
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setNumber2(Number(e.target.value))}
      />

      <button onClick={() => setResult(number1 + number2)}>Topla</button>
      <button onClick={() => setResult(number1 - number2)}>Azalt</button>
      <button onClick={() => setResult(number1 * number2)}>Vur</button>
      <button onClick={() => setResult(number1 / number2)}>Bol</button>
      <h1>Cem: {result} </h1>
    </div>
  );
}
