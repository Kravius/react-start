import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Дан следующий массив:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Выведите на экран среднее арифметическое элементов этого массива. В цикле сделайте инпуты для редактирования элементов.

function App() {
  const [value, setValue] = useState(arr);

  function changeHandleInputs(ev, index) {
    const newValue = [...value];
    newValue[index] = ev.target.value;
    setValue(newValue);
    // setValue([
    //   ...value.slice(0, index),
    //   ev.target.value,
    //   ...value.slice(index + 1),
    // ]);
  }
  function sumArr(value) {
    return value.reduce((acc, num) => acc + +num, 0);
  }

  const createInputs = value.map((el, index) => (
    <input
      key={index}
      value={el}
      onChange={(ev) => changeHandleInputs(ev, index)}
    ></input>
  ));

  return (
    <>
      {createInputs}
      <p>{sumArr(value)}</p>
    </>
  );
}
export default App;
