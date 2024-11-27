import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания.

// function App() {
//   const [checkBox, setCheckBox] = useState(false);
//   const [textP, setTextP] = useState("");
//   const [] = useState("");
//   return (
//     <>
//       <input
//         type="checkbox"
//         checked={checkBox}
//         onChange={() => setCheckBox(!checkBox)}
//       ></input>
//       <button onClick={() => (checkBox ? setTextP("HI") : setTextP("bey"))}>
//         click
//       </button>
//       <p>состояние {textP}</p>
//     </>
//   );
// }
// export default App;

// С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.

// first try

// function App() {
//   // const language = ['js', 'css', 'html'];
//   const [checkJS, setCheckJS] = useState(false);
//   const [checkCSS, setCheckCSS] = useState(false);
//   const [checkHTML, setCheckHTML] = useState(false);

//   const [value, setValue] = useState("");

//   function text(setUseSate, check, ev) {
//     setUseSate(!check);
//     console.log(ev.target.value);
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={checkJS}
//           onChange={(ev) => text(setCheckJS, checkJS, ev)}
//           value={"js"}
//         ></input>
//         js
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={checkCSS}
//           onChange={(ev) => text(setCheckCSS, checkCSS, ev)}
//           value={"css"}
//         ></input>
//         css
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           checked={checkHTML}
//           onChange={(ev) => text(setCheckHTML, checkHTML, ev)}
//           value="HTML"
//         ></input>
//         html
//       </label>
//       <p>{checkJS ? "js" : false}</p>
//       <p>{checkCSS ? "css" : false}</p>
//       <p>{checkHTML ? "html" : false}</p>
//     </>
//   );
// }

//second try
function App() {
  const language = ["js", "css", "html"];
  const [checkedLanguage, setCheckedLanguage] = useState(
    language.reduce((acc, lang) => ({ ...acc, [lang]: false }), {})
  );

  function changeBox(boxLang) {
    setCheckedLanguage((prev) => ({ ...prev, [boxLang]: !prev[boxLang] }));
  }

  function createInputs() {
    return language.map((lang) => (
      <label key={id()}>
        <input
          key={id()}
          type="checkBox"
          checked={checkedLanguage[lang]}
          onChange={() => changeBox(lang)}
        ></input>
        {lang}
      </label>
    ));
  }

  function createText() {
    return language.map(
      (text) => checkedLanguage[text] && <p key={id()}>{text}</p>
    );
  }
  return (
    <>
      {createInputs()}
      <div>{createText()}</div>
    </>
  );
}
export default App;
