import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя.

const polishCities = ["Варшава", "Краков", "Познань", "Вроцлав", "Гданьск"];

function App() {
  const [selection, setSelection] = useState("");

  function handleSelect(ev) {
    setSelection(ev.target.value);
  }

  const createSelect = (
    <select value={selection} onChange={(ev) => handleSelect(ev)}>
      {polishCities.map((city) => (
        <option key={id()}>{city}</option>
      ))}
    </select>
  );

  return (
    <>
      {createSelect}
      <p>{selection}</p>
    </>
  );
}
export default App;
