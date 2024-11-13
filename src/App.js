import logo from "./logo.svg";
import "./App.css";

// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
// }
// Сделайте так, чтобы результатом рендеринга был следующий код:

// <p>
// 	name:    <span>john</span>, <br>
// 	surname: <span>smit</span>,
// </p>
// Для значений имени и фамилии используйте значения элементов объекта.

function App() {
  const obj = { name: "john", surname: "smit" };

  return (
    <>
      <p>
        name: <span>{obj.name}</span>
        surname: <span>{obj.surname}</span>
      </p>
    </>
  );
}

export default App;
