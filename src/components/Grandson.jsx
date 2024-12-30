import { useContext } from "react";
import { MyContext } from "./MyContext";

function Grandson() {
  const { age, setAge } = useContext(MyContext);
  const btnAge = <button onClick={() => setAge(age * 2)}>change Age</button>;
  const div = (
    <div style={{ border: "1px solid red" }}>
      Grandson: {age / 2}
      {btnAge}
    </div>
  );
  return <>{div}</>;
}

export default Grandson;
