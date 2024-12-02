import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Пусть в стейте хранится объект с датой:

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};
// Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.

// Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты.

function App() {
  const [obj, setObj] = useState(initDate);
  const par = Object.entries(obj).map(([timeKey, timeValue], index) => (
    <p key={index}>
      {timeKey}: {timeValue}
    </p>
  ));

  function handleInputs(ev, timeKey) {
    setObj({ ...obj, ...{ [timeKey]: ev.target.value } });
  }

  const inputs = Object.entries(obj).map(([timeKey, timeValue], index) => (
    <label key={index}>
      {timeKey}
      <input
        key={index}
        defaultValue={timeValue}
        onBlur={(ev) => handleInputs(ev, timeKey)}
      ></input>
    </label>
  ));

  return (
    <div>
      {par}
      {inputs}
    </div>
  );
}
export default App;
