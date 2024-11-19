import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац.

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <>
      <input
        value={value1}
        onChange={(ev) => setValue1(ev.target.value)}
      ></input>
      <input
        value={value2}
        onChange={(ev) => setValue2(ev.target.value)}
      ></input>
      <p>{value1}</p>
      <p>{value2}</p>
    </>
  );
}
export default App;
