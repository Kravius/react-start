import logo from "./logo.svg";
import "./App.css";

// В компоненте App дан следующий массив:

const users = [
  { name: "user1", surn: "surn1", age: 30 },
  { name: "user2", surn: "surn2", age: 31 },
  { name: "user3", surn: "surn3", age: 32 },
];
// Выведите элементы этого массива в виде списка ul.

function App() {
  const text = users.map((user, index) => {
    const data = Object.entries(user);
    const span = data.map(([key, value], index) => (
      <span key={index}>
        {key}:{value}
      </span>
    ));
    return <li key={index}>{span}</li>;
  });

  return <ul>{text}</ul>;
}
export default App;
