import logo from "./logo.svg";
import "./App.css";

// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. С ее помощью выведите на экран сумму цифр числа 123.

function App() {
  const num = 123;
  function getDigitsSum() {
    return num
      .toString()
      .split("")
      .reduce((acc, num) => acc + +num, 0);
  }
  return <p>{getDigitsSum()}</p>;
}
export default App;
