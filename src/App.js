import logo from "./logo.svg";
import "./App.css";

// Дан следующий код:

// function App() {
// 	const attr = 'block';

// 	return <div>
// 		text
// 	</div>;
// }
// Вставьте значение константы attr в атрибут id нашего дива.

function App() {
  const attr = "block";

  return <div id={attr}>text</div>;
}

export default App;
