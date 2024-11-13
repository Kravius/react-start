import logo from "./logo.svg";
import "./App.css";

// Дан следующий код:

// function App() {
// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;
// }
// Сделайте так, чтобы результатом рендеринга было следующее:

// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// </ul>

function App() {
  const ul = (
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>
  );
  return ul;
}

export default App;
