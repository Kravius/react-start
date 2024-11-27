import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function id() {
  return nanoid(5);
}

// Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода:
{
  /* <div>
	<h2>Ура, вам уже есть 18</h2>
	<p>
		здесь расположен контент только для взрослых
	</p>
</div>
А если чекбокс не отмечен - то следующий:

 <div>
	<p>
		увы, вам еще нет 18 лет:(
	</p>
</div> */
}

const text1 = (
  <div>
    <h2>Ура, вам уже есть 18</h2>
    <p>здесь расположен контент только для взрослых</p>
  </div>
);
const text2 = (
  <div>
    <p>увы, вам еще нет 18 лет:</p>
  </div>
);

function App() {
  const [checked, setChecked] = useState(false);

  function howOld() {
    return (checked && text1) || text2;
  }
  return (
    <>
      <label>
        <input
          checked={checked}
          type="checkBox"
          onChange={() => setChecked(!checked)}
        ></input>
        do you have 18?
      </label>
      {howOld()}
    </>
  );
}
export default App;
