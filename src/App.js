import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.

// function App() {
//   const [radioValue, setRadioValue] = useState("1");
//   const radioArray = ["1", "2", "3"];

//   function changeHandlerRadio(ev) {
//     setRadioValue(ev.target.value);
//   }

//   const createRadio = radioArray.map((el) => (
//     <input
//       type="radio"
//       value={el}
//       name="radioTest"
//       checked={radioValue === el && radioValue}
//       key={id()}
//       onChange={(ev) => changeHandlerRadio(ev)}
//     ></input>
//   ));
//   return <>{createRadio}</>;
// }
// export default App;

// С помощью радиокнопочек спросите у пользователя его любимый язык программирования. Выведите его выбор в абзац. Если выбран язык JavaScript, похвалите пользователя.

function App() {
  const [radioValue, setRadioValue] = useState("");
  const [radioValueText, setRadioValueText] = useState("");
  // const radioArray = ["1", "2", "3"];
  const radioLanguages = { 1: "js", 2: "html", 3: "css" };

  function changeHandlerRadio(ev) {
    setRadioValue(ev.target.value);
  }

  const createRadio = Object.entries(radioLanguages).map(([el, text]) => (
    <label value={text} key={id()}>
      {text}
      <input
        type="radio"
        value={el}
        name="radioTest"
        checked={radioValue === el && radioValue}
        key={id()}
        onChange={(ev) => changeHandlerRadio(ev)}
      ></input>
    </label>
  ));
  return (
    <>
      <div>
        <p>what is your favorites language?</p>
        {createRadio}
        <p>
          {radioLanguages[radioValue]}:
          {radioLanguages[radioValue] === "js" && "good job"}
        </p>
      </div>
    </>
  );
}
export default App;
