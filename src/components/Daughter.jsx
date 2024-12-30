import { useContext } from "react";
import { MyContext } from "./MyContext";
import Grandson from "./Grandson";

// В пустом компоненте App создайте компонент Parent, а в нем компонент Daughter, а в Daughter компонент Grandson. Используя контекст, передайте из App значение возраста 42, а с помощью useContext выведите его в компоненте Daughter.

function Daughter() {
  const { age, setAge } = useContext(MyContext);

  return (
    <div style={{ border: "1px solid green" }}>
      I am daughter,{age}
      {<Grandson />}
    </div>
  );
}

export default Daughter;
