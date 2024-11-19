import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Пусть в стейте хранится число. Выведите это число в абзаце. Сделайте две кнопки. Пусть первая кнопка увеличивает возраст на единицу, а вторая - уменьшает его.

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>plus +</button>
        <button onClick={() => (count > 0 ? setCount(count - 1) : false)}>
          minus - 1
        </button>
      </div>
    </>
  );
}
export default App;
