import { useEffect, useState } from "react";

export default function Hooks() {
  const [color, setColor] = useState("orange");
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("nameReact")) || "Glib"
  );

  const handelColor = () => {
    setColor((prev) => (prev === "orange" ? "green" : "orange"));
  };

  const handelInput = (ev) => {
    setName(ev.target.value);
  };

  const inputName = (
    <label>
      name<input value={name} onChange={(ev) => handelInput(ev)}></input>
    </label>
  );

  const handelName = () => {};
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    localStorage.setItem("nameReact", JSON.stringify(name));
  }, [name]);

  return (
    <div>
      {inputName}
      <button onClick={handelName}>clickName</button>
      <button onClick={handelColor}>clickColor</button>
      <p>{name}</p>
    </div>
  );
}
