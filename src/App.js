import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.

//Сделайте инпут и кнопку. По нажатию на кнопку пусть текст инпута станет новым тегом li в конец тега ul.

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [valueInp, setValueInp] = useState("");

  const li = notes.map((el, ind) => <li key={ind}>{el}</li>);

  const input = (
    <input
      value={valueInp}
      placeholder="write a new one li"
      onChange={(ev) => setValueInp(ev.target.value)}
    ></input>
  );

  //first task
  // function addLi() {
  //   setNotes((prev) => [...prev, +prev[prev.length - 1] + 1]);
  // }

  function addLi() {
    if (valueInp.length) {
      const newLi = [...notes];
      newLi.push(valueInp);
      setNotes(newLi);
      setValueInp("");
    }
  }

  const btn = <button onClick={addLi}>click add</button>;
  return (
    <>
      <ul>{li}</ul>
      {input}
      {btn}
    </>
  );
}
export default App;
