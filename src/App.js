import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Даны 4 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  function handlerChange(ev, setState) {
    setState(+ev.target.value);
  }

  return (
    <>
      <input
        value={value1}
        onChange={(ev) => handlerChange(ev, setValue1)}
      ></input>
      <input
        value={value2}
        onChange={(ev) => handlerChange(ev, setValue2)}
      ></input>
      <input
        value={value3}
        onChange={(ev) => handlerChange(ev, setValue3)}
      ></input>
      <input
        value={value4}
        onChange={(ev) => handlerChange(ev, setValue4)}
      ></input>
      <p>{(value1 + value2 + value3 + value4) / 2}</p>
    </>
  );
}
export default App;
