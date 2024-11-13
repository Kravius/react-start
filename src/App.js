import logo from "./logo.svg";
import "./App.css";

// Даны три кнопки:

// function App() {
// 	return <div>
// 		<button>act1</button>
// 		<button>act2</button>
// 		<button>act3</button>
// 	</div>;
// }
// Сделайте так, чтобы по клику на первую кнопку через alert выводилось число 1, по клику на вторую кнопку - число 2, а по клику на третью - число 3.

function App() {
  function showNumber(num) {
    return alert(num);
  }
  return (
    <div>
      <button onClick={()=>showNumber(1)}>act1</button>
      <button onClick={()=>showNumber(2)}>act2</button>
      <button onClick={()=>showNumber(3)}>act3</button>
    </div>
  );
}

export default App;
