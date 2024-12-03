import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
    prop1: "value11",
    prop2: "value12",
    prop3: "value13",
  },
  {
    id: "IWSpfBPSV3SXgRF87uO74",
    prop1: "value21",
    prop2: "value22",
    prop3: "value23",
  },
  {
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

//Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.

// Сделайте три инпута и кнопку. По нажатию на кнопку из данных инпута создайте новую li в конце тега ul.

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [inputsValue, setInputsValue] = useState({
    prop1: "",
    prop2: "",
    prop3: "",
  });

  function spans({ prop1, prop2, prop3 }) {
    return (
      <>
        <span>{prop1}</span>
        <span>{prop2}</span>
        <span>{prop3}</span>
      </>
    );
  }

  const createLi = notes.map((note) => <li key={note.id}>{spans(note)}</li>);

  const createBtn = <button onClick={addNewLi}>click to add</button>;

  //first task
  // function addNewLi() {
  //   const newNotes = [...notes];
  //   newNotes.push({
  //     id: id(),
  //     prop1: "value31",
  //     prop2: "value32",
  //     prop3: "value33",
  //   });
  //   setNotes(newNotes);
  // }

  function addNewLi() {
    const isEmpty = Object.values(inputsValue).every((el) => el.length !== 0);
    console.log(isEmpty);
    if (isEmpty) {
      const newNotes = [...notes];
      newNotes.push({ ...inputsValue, id: id() });
      setNotes(newNotes);
    }
  }

  const createInputs = Object.entries(inputsValue).map(
    ([key, value], index) => (
      <input
        key={index}
        value={value}
        onChange={(ev) => handleInputs(ev, key)}
      ></input>
    )
  );

  function handleInputs(ev, key) {
    console.log(inputsValue);
    setInputsValue((prev) => ({
      ...prev,
      ...{ [key]: ev.target.value },
    }));
  }
  return (
    <>
      <ul>{createLi}</ul>
      {createInputs}
      {createBtn}
    </>
  );
}
export default App;
