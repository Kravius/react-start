import logo from "./logo.svg";
import "./App.css";

// Дан следующий код:

// function App() {
// 	const isAuth = true;

// 	return <div>
// 		<p>вы авторизованы</p>
// 	</div>;
// }
// Сделайте так, чтобы приведенный абзац с текстом показывался только если в isAuth записано true.
function App() {
  const isAuth = true;

  return <div>{isAuth && <p>вы авторизованы</p>}</div>;
}

export default App;
