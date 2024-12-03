import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

const initNotes = [
  {
    id: id(),
    name: "name1",
    desc: "long description 1",
    show: false,
  },
  {
    id: id(),
    name: "name2",
    desc: "long description 2",
    show: false,
  },
  {
    id: id(),
    name: "name3",
    desc: "long description 3",
    show: false,
  },
];

//В конце каждого абзаца сделайте кнопку, по нажатию на которую будет показываться полное описание продукта.

function App() {
  const [notes, setNotes] = useState(initNotes);

  function createBtnShow(id) {
    return <button onClick={() => showMassage(id)}>show</button>;
  }

  function showMassage(idShowElement) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === idShowElement ? { ...note, show: !note.show } : note
      )
    );
  }

  const result = notes.map((note) => {
    return (
      <p key={note.id}>
        {note.name},{note.show ? <i>{note.desc}</i> : ""}
        {createBtnShow(note.id)}
      </p>
    );
  });

  return <div>{result}</div>;
}
export default App;
