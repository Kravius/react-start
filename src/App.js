import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

//1 Дан массив с числами. Выведите его в виде списка ul. По клику на любую li возведите ее число в квадрат.

//2 В конце каждой li сделайте кнопку, по нажатию на которую эта li будет удаляться из списка.

//3 Дан инпут. По клику на любую li сделайте так, чтобы текст этой li попал в инпут.

//4 Модифицируйте предыдущую задачу так, чтобы по потери фокуса инпута измененный текст попадал в соответствующую li.

//5 Дана кнопка. По клику на эту кнопку переверните порядок li на обратный.

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  //мое решение задачи 3-4
  // const [inputValue, setInputValue] = useState({ index: "" });

  const [indexInput, setIndexInput] = useState(null);
  const [valueInput, setValueInput] = useState("");

  //first task
  // function squareLi(ev, index) {
  //   const newNote = [...notes];
  //   newNote[index] = newNote[index] ** 2;
  //   setNotes(newNote);
  // }

  function changeLi(index) {
    setValueInput(notes[index]);
    setIndexInput(index);
  }

  const lis = notes.map((el, index) => (
    //first task
    // <li key={index} onClick={(ev) => squareLi(ev, index)}>

    <li key={index} onClick={(ev) => changeLi(index)}>
      {el}
      {createBtn(index)}
    </li>
  ));

  function createBtn(index) {
    return <button onClick={(ev) => deleteLi(ev, index)}>delete</button>;
  }

  function deleteLi(ev, index) {
    ev.stopPropagation();
    setNotes((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  //мое решение задачи 3-4

  // function changeLi(index) {
  //   setInputValue({ [index]: notes[index] });
  // }

  // function handleChangeInputs(ev) {
  //   setInputValue({ [Object.keys(inputValue)]: ev.target.value });
  // }

  // //мое решение задачи 3-4
  // const input = (
  //   <label>
  //     change li:
  //     <input
  //       value={inputValue[Object.keys(inputValue)[0]]}
  //       onChange={(ev) => handleChangeInputs(ev)}
  //       onBlur={(ev) => handleChangeLi(ev)}
  //     ></input>
  //   </label>
  // );

  // function handleChangeLi(ev) {
  //   const keyLi = Object.keys(inputValue)[0];
  //   if (keyLi !== "index") {
  //     const newLi = [...notes];
  //     newLi[keyLi] = ev.target.value;
  //     setNotes(newLi);
  //   }
  //   setInputValue({ index: "" });
  // }

  const input = (
    <label>
      change li:
      <input
        value={valueInput}
        onChange={(ev) => handleChangeInputs(ev)}
        onBlur={(ev) => handleChangeLi(ev)}
      ></input>
    </label>
  );

  function handleChangeInputs(ev) {
    setValueInput(ev.target.value);
  }

  function handleChangeLi(ev) {
    if (indexInput !== null) {
      const newLi = [...notes];
      newLi[indexInput] = ev.target.value;
      setNotes(newLi);
    }
    setValueInput("");
  }

  const createReverseBtn = (
    <button onClick={handleReverse}>reverse click</button>
  );

  function handleReverse() {
    setNotes((prev) => [...prev].reverse());
  }

  return (
    <>
      <ul>{lis}</ul>
      <div>
        {input}
        {createReverseBtn}
      </div>
    </>
  );
}
export default App;
