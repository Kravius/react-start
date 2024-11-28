import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.

function App() {
  const [groupOption, setGroupOption] = useState("");
  const ageGroup = {
    first: "0 12",
    second: "13 17",
    third: "18 25",
    fours: "25",
  };

  function selectOption(value) {
    return <p>{ageGroup[value] || ageGroup.first}</p>;
  }
  const createSelect = (
    <select
    //always show a text from option when we  use select but we also can chose value
      value={groupOption}
      onChange={(ev) => setGroupOption(ev.target.value)}
    >
      {Object.entries(ageGroup).map(([group, ageText]) => (
        <option key={id()} value={group}>
          {ageText}
        </option>
      ))}
    </select>
  );
  return (
    <>
      {createSelect}
      <p>{groupOption}</p>
      {selectOption(groupOption)}
    </>
  );
}
export default App;
