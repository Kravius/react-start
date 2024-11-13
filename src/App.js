import logo from "./logo.svg";
import "./App.css";

// Дан следующий код:

// function App() {
// 	function show1() {
// 		alert(1);
// 	}

// 	function show2() {
// 		alert(2);
// 	}

// 	return <div>
// 		<button>act1</button>
// 		<button>act2</button>
// 	</div>;
// }
// Сделайте так, чтобы по клику на первую кнопку срабатывала первая функция, а по клику на вторую кнопку - вторая функция.

function App() {
  function show1() {
    alert(1);
  }

  function show2() {
    alert(2);
  }

  return (
    <div>
      <button onClick={show1}>act1</button>
      <button onClick={show2}>act2</button>
    </div>
  );
}
export default App;
