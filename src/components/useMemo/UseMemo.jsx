import { useMemo, useState } from "react";

// Создайте компонент App, разместите в нем абзац. Заведите стейт text с начальным значением 'react', пусть значение стейта отображается в качестве текста абзаца. Пусть по клику на абзац, ему в конец текста добавляется восклицательный знак.

// Заведите еще один стейт num, с начальным значением 0. Разместите в App еще один абзац. Сделайте так, чтобы при клике по нему num увеличивалась на 1.

// А теперь добавьте в App функцию triple, которая в качестве параметра принимает num и возвращает его утроенное значение. Положите результат вызова функции в переменную result. Отобразите result в качестве текста второго абзаца. Покликайте по очереди на абзацы, отметьте, как медленно добавляются восклицательные знаки.

// Исправьте ситуацию, обернув медленную функцию triple в useMemo.

function UseMemo() {
  const [num, setNum] = useState(11000000);
  const [text, setText] = useState("react");

  const triple = (num) => {
    let start = performance.now();
    while (performance.now() - start < 500) {}
    return num ** 3;
  };

  const res = useMemo(() => triple(num), [num]);

  const parText = <p onClick={() => setText((prev) => prev + "!")}>{text}</p>;
  const parNum = <p onClick={() => setNum((prev) => prev + 1)}>{res}</p>;

  return (
    <>
      {parText}
      {parNum}
    </>
  );
}

export default UseMemo;
