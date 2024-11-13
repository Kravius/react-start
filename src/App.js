import logo from "./logo.svg";
import "./App.css";

// Пусть в константе isAdult содержится true, если пользователю уже есть 18 лет, и false, если нет:

// function App() {
// 	const isAdult = true;

// }
// Сделайте так, чтобы в зависимости от значения isAdult на экране показался или один абзац с текстом, или другой.

function App() {
  const isAdult = true;

  const text = isAdult ? "18+" : "you don't have 18";

  return <p>{text}</p>;
}

export default App;
