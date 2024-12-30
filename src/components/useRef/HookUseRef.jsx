import { useRef, useState } from "react";

//Создайте компонент App, но вместо стейта теперь используйте реф. Убедитесь, что при нажатии кнопки текст абзаца не будет меняться. Добавьте также вывод текста абзаца в консоль, откройте ее и убедитесь, что на самом деле текст меняется.

// const textStart = `Lorem ipsum dolor sit amet consectetur.`;

// function HookUseRef() {
//   // const [refText, setText] = useState(textStart);
//   const refText = useRef(textStart);
//   console.log(refText, "start");
//   const textAdd = <p>{refText.current}</p>;

//   const handelAddText = () => {
//     console.log(refText);
//     refText.current += "!";
//   };
//   const btnTextAdd = <button onClick={() => handelAddText()}>click add</button>;
//   return (
//     <>
//       {textAdd} {btnTextAdd}
//     </>
//   );
// }

// Возьмите код компонента App, который мы написали на этом уроке и сделайте так, чтобы по клику на кнопку в инпуте кроме наведения фокуса происходило еще и очищение поля ввода. Воспользуйтесь для этого свойством value инпута.

function HookUseRef() {
  const [text, setText] = useState("hii");
  const refText = useRef(null);

  console.log("rerender");

  const inputFocus = (
    <input
      onChange={(ev) => setText(ev.target.value)}
      ref={refText}
      value={text}
    ></input>
  );

  const handelBtnFocusInput = () => {
    refText.current.focus();
    refText.current.value = "";
  };

  const btn = <button onClick={handelBtnFocusInput}>focus input</button>;
  return (
    <>
      {inputFocus}
      {btn}
    </>
  );
}

export default HookUseRef;
