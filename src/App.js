import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// 1) Сделайте кнопку, нажатие на которую будет банить пользователя и кнопку, нажатие на которую будет разбанивать пользователя.

// 2) Модифицируйте предыдущую задачу так, чтобы из двух кнопок всегда была видна только соответствующая. То есть, если пользователь забанен, то видна кнопка для разбанивания, а если не забанен - для забанивания.

function App() {
  const [isBan, setIsBan] = useState(false);

  return (
    <>
      <div>
        <span>{isBan ? "nope" : "you ban"}</span>
        <button onClick={() => setIsBan(!isBan)}>
          {isBan ? "ban user" : "unbanned user"}
        </button>
      </div>
    </>
  );
}
export default App;
