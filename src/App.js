import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац.

// function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [result, setResult] = useState(0);

//   function handlerChange(ev, setState) {
//     setState(+ev.target.value);
//   }

//   function sumNumber() {
//     setResult(value1 + value2);
//   }
//   function multNumber() {
//     setResult(value1 * value2);
//   }

//   return (
//     <>
//       <input
//         value={value1}
//         onChange={(ev) => handlerChange(ev, setValue1)}
//       ></input>
//       <input
//         value={value2}
//         onChange={(ev) => handlerChange(ev, setValue2)}
//       ></input>
//       <button onClick={sumNumber}>sum</button>
//       <button onClick={() => multNumber()}>mult</button>
//       <p>{result}</p>
//     </>
//   );
// }
// export default App;

// Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.

// function App() {
//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   const [result, setResult] = useState("");

//   function handlerChange(ev, setState) {
//     setState(ev.target.value);
//   }

//   function sumNumber() {
//     const dateCheck = new Date(value1).getTime();
//     const dateNow = new Date(value2).getTime();
//     const bigger = dateCheck > dateNow ? dateCheck : dateNow;
//     const smaller = dateCheck < dateNow ? dateCheck : dateNow;

//     setResult((bigger - smaller) / (24 * 60 * 60 * 1000));
//   }

//   return (
//     <>
//       <input
//         placeholder="write date like 2025-12-31"
//         value={value1}
//         onChange={(ev) => handlerChange(ev, setValue1)}
//       ></input>
//       <input
//         placeholder="write date like 2025-12-31"
//         value={value2}
//         onChange={(ev) => handlerChange(ev, setValue2)}
//       ></input>
//       <button onClick={sumNumber}>check</button>
//       <p>difference between:{result}</p>
//     </>
//   );
// }
// export default App;

// Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата.

// function App() {
//   const date = new Date();
//   const dateWrite = `${date.getFullYear()}-${
//     date.getMonth() + 1
//   }-${date.getDate()}`;

//   const [value1, setValue1] = useState(dateWrite);
//   const [value2, setValue2] = useState(dateWrite);
//   const [result, setResult] = useState("");

//   function handlerChange(ev, setState) {
//     setState(ev.target.value);
//   }

//   function sumNumber() {
//     const dateCheck = new Date(value1).getTime();
//     const dateNow = new Date(value2).getTime();
//     const bigger = dateCheck > dateNow ? dateCheck : dateNow;
//     const smaller = dateCheck < dateNow ? dateCheck : dateNow;

//     setResult((bigger - smaller) / (24 * 60 * 60 * 1000));
//   }

//   return (
//     <>
//       <input
//         placeholder="write date like 2025-12-31"
//         value={value1}
//         onChange={(ev) => handlerChange(ev, setValue1)}
//       ></input>
//       <input
//         placeholder="write date like 2025-12-31"
//         value={value2}
//         onChange={(ev) => handlerChange(ev, setValue2)}
//       ></input>
//       <button onClick={sumNumber}>check</button>
//       <p>difference between:{result}</p>
//     </>
//   );
// }
// export default App;

// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.

// function App() {
//   const [input, setInput] = useState("");
//   const [text, setText] = useState("");

//   function countSum() {
//     return input.split("").reduce((acc, num) => acc + +num, 0);
//   }

//   function writeSum() {
//     setText(() => countSum());
//   }
//   return (
//     <>
//       <input
//         placeholder="just number"
//         value={input}
//         onChange={(ev) => setInput(ev.target.value)}
//         onBlur={writeSum}
//       ></input>
//       <p>result:{text}</p>
//     </>
//   );
// }
// export default App;

// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац произведение делителей введенного числа.

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  function countSum() {
    if (+input === 0) return "nope";

    let num = 1;
    for (let i = 0; i <= input; i += 1) {
      if (+input % i === 0) {
        num = num * i;
      }
    }
    return num;
  }

  function writeSum() {
    setText(() => countSum());
  }
  return (
    <>
      <input
        placeholder="just number"
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        onBlur={writeSum}
      ></input>
      <p>result:{text}</p>
    </>
  );
}
export default App;
