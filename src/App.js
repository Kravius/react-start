import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился транслит вводимого текста.

// Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел.

function App() {
  const [areaText, setAreaText] = useState("");
  const [value, setValue] = useState();

  function sumArr(arr) {
    const num = arr.split(/\n/).reduce((acc, num) => acc + +num, 0);
    setValue(num);
  }

  function result(textArea) {
    const arrNum = textArea.target.value.replace(/[^\d\r\n]/g, "");
    sumArr(arrNum);
    setAreaText(textArea.target.value);
  }
  return (
    <>
      <textarea value={areaText} onChange={(ev) => result(ev)}></textarea>
      <p>{value}</p>
    </>
  );
}
export default App;
