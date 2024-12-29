import { useEffect, useState } from "react";

// Дан компонент. Сделайте так, чтобы по клику на любое место страницы фон этого компонента менял цвет.
// export default function Hooks() {
//   const [color, setColor] = useState("orange");
//   const [name, setName] = useState(
//     JSON.parse(localStorage.getItem("nameReact")) || "Glib"
//   );

//   const handelColor1 = () => {
//     setColor((prev) => (prev === "orange" ? "green" : "orange"));
//   };

//   const handelInput = (ev) => {
//     setName(ev.target.value);
//   };

//   const inputName = (
//     <label>
//       name<input value={name} onChange={(ev) => handelInput(ev)}></input>
//     </label>
//   );

//   useEffect(() => {
//     const handelColorWindow = (ev) => {
//       if (ev.target.tagName !== "BUTTON")
//         setColor((prev) => (prev === "orange" ? "green" : "orange"));
//     };

//     window.addEventListener("click", handelColorWindow);

//     return () => {
//       window.removeEventListener("click", handelColorWindow);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.backgroundColor = color;
//   }, [color]);

//   useEffect(() => {
//     localStorage.setItem("nameReact", JSON.stringify(name));
//   }, [name]);

//   return (
//     <div>
//       {inputName}
//       <button onClick={handelColor1}>clickColor</button>
//       <p>{name}</p>s
//     </div>
//   );
// }

//Сделайте ссылку, по нажатию на которую будет появляться блок. Сделайте так, чтобы по нажатию в любое место окна браузера наш блок скрывался.
export default function Hooks() {
  const [color, setColor] = useState("orange");
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("nameReact")) || "Glib"
  );

  const [block, setBlock] = useState(true);

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

  const createRef = (
    <a
      href="#"
      onClick={(ev) => {
        ev.preventDefault();
        setBlock((prev) => (prev = true));
      }}
    >
      click to show
    </a>
  );

  useEffect(() => {
    const handelColorWindow = (ev) => {
      if (ev.target.tagName !== "A") setBlock((prev) => (prev = false));
    };

    window.addEventListener("click", handelColorWindow);

    return () => {
      window.removeEventListener("click", handelColorWindow);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    localStorage.setItem("nameReact", JSON.stringify(name));
  }, [name]);

  return (
    <div>
      {inputName}
      <button onClick={handelColor}>clickColor</button>
      <p>{name}</p>
      {createRef}
      {block ? (
        <div
          style={{ border: "1px solid black", height: "100px", width: "100px" }}
        ></div>
      ) : (
        false
      )}
    </div>
  );
}
