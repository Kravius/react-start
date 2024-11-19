import logo from "./logo.svg";
import "./App.css";

// В компоненте App дан следующий массив:

const users = [
  { id: 1, name: "user1", surn: "surn1", age: 30 },
  { id: 2, name: "user2", surn: "surn2", age: 31 },
  { id: 3, name: "user3", surn: "surn3", age: 32 },
  { id: 3, name: "user3", surn: "surn3", age: 32 },
];
// Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.

function App() {
  const table = users.map(({ id, name, surn, age }) => {
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{surn}</td>
        <td>{age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>name111</td>

          <td>surn22</td>

          <td>age333</td>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
}
export default App;
