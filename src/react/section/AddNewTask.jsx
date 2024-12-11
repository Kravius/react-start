import { useState } from "react";
import style from "../../styles/AddNewTask.module.css";

const startText = "Add your task";

function AddNewTask() {
  const [valueInput, setValueInput] = useState(startText);
  const newInput = (
    <div className={style["container-new-task"]}>
      <input
        className={style["input-add-new-task"]}
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
      ></input>
      <button className={style["add-task-btn"]}>ADD +</button>
    </div>
  );
  return newInput;
}

export { AddNewTask };
