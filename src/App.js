import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// import { Calculator } from "./Calculator";

function id() {
  return nanoid(5);
}

// function App() {
//   return (
//     <>
//       <Calculator />
//     </>
//   );
// }

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState({ value: "", index: "" });

  const result = notes.map((note, index) => {
    return (
      <p key={index} onClick={() => startEdit(note, index)}>
        {note}
      </p>
    );
  });

  function startEdit(note, index) {
    setValue({
      value: note,
      index: index,
    });
    console.log(value);
  }

  function changeItem(event) {
    setValue((prev) => ({ ...prev, value: event.target.value }));
    setNotes([
      ...notes.slice(0, value.index),
      event.target.value,
      ...notes.slice(value.index + 1),
    ]);
  }

  return (
    <div>
      {result}
      <input value={value.value} onChange={changeItem} />
    </div>
  );
}

export default App;
