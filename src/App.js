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

const emptyObject = {
  id: id(),
  prop1: "",
  prop2: "",
  prop3: "",
};

//1 В конце каждой li сделайте кнопку, по нажатию на которую эта li будет удаляться из списка.

//2 Даны три инпута. В конце каждой li сделайте кнопку, по нажатию на которую данные объекта этой li будут попадать в соответствующие инпуты.

//3 Модифицируйте предыдущую задачу так, чтобы рядом с инпутами была кнопка, по нажатию на которую данные инпутов будут попадать в соответствующую li.

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [inputsValue, setInputsValue] = useState(emptyObject);

  function createSpans({ prop1, prop2, prop3 }) {
    return (
      <>
        <span>{prop1}</span>
        <span>{prop2}</span>
        <span>{prop3}</span>
      </>
    );
  }

  const createLi = notes.map((note, indexLi) => (
    <li key={note.id}>
      {createSpans(note)}
      {createBtnDeleteLi(note.id, indexLi)}
      {createBtnChangeLi(note)}
    </li>
  ));

  function createBtnChangeLi(note) {
    return <button onClick={() => changeLi(note)}>Change</button>;
  }

  function changeLi(note) {
    setInputsValue((prev) => ({ ...note }));
  }

  function createBtnDeleteLi(noteId, indexLi) {
    return <button onClick={() => deleteLi(noteId, indexLi)}>Delete</button>;
  }

  function deleteLi(noteId, indexLi) {
    // setNotes((prevNotes) => {
    //   const newNotes = [...prevNotes];
    //   newNotes.splice(indexLi, 1);
    //   return newNotes;
    // });
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  const createBtnAddNewLi = <button onClick={addNewLi}>click to add</button>;

  const createInputs = Object.entries(inputsValue)
    .filter(([key]) => key !== "id")
    .map(([key, value], index) => {
      return (
        <input
          key={index}
          value={value}
          onChange={(ev) => handleInputs(ev, key)}
        ></input>
      );
    });

  function handleInputs(ev, key) {
    setInputsValue((prev) => ({
      ...prev,
      [key]: ev.target.value,
    }));
  }

  function addNewLi() {
    const { id: idChangeInput } = inputsValue;
    setNotes((prev) => {
      return prev.map((el) => {
        if (el.id === idChangeInput) {
          setInputsValue(emptyObject);
          return inputsValue;
        }
        return el;
      });
    });
  }

  return (
    <>
      <ul>{createLi}</ul>
      {createInputs}
      {createBtnAddNewLi}
    </>
  );
}
export default App;
