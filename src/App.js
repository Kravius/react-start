import logo from "./logo.svg";
import "./App.css";

// Дан следующий код:

// function App() {
// 	const age = 19;

// 	return <div>

// 	</div>;
// }
// Если в age записано больше 18 лет, то в тексте тега div покажите пользователю абзац с одним текстом, а если меньше - то с другим.

function App() {
  const age = 19;

  return <div>{age ? <p>18+</p> : <p>nope</p>}</div>;
}

export default App;
