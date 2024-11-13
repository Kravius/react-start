import logo from "./logo.svg";
import "./App.css";

// Дан массив:

// function App() {
// 	const arr = [1, 2, 3, 4, 5];
// }
// Сделайте так, чтобы результатом рендеринга был тег ul, в тегах li которого будут стоять элементы массива.

function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  const ul = arr.map((el, ind) => {
    return <li key={ind}>{el}</li>;
  });
  return <ul>{ul}</ul>;
}

export default App;
