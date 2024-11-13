import logo from "./logo.svg";
import "./App.css";

// Дана кнопка. По клику на нее получите объект Event и выведите его в консоль.
// Дана кнопка. По клику на нее получите выведите в консоль event.target клика.
function App() {
  function funcEv(ev) {
    console.log(ev);
  }
  function funcTarget(ev) {
    console.log(ev.target);
  }
  return (
    <>
      <button onClick={(ev) => funcEv(ev)}>click ev</button>
      <button onClick={(ev) => funcTarget(ev)}>click target</button>
    </>
  );
}

export default App;
