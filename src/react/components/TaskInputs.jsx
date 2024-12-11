import { useState } from "react";
import style from "../../styles/AddNewTask.module.css";

const startText = "Add your task";

export default function CreateInputTask() {
  const [valueInput, setValueInput] = useState(startText);
  return (
    <input
      className={style["input-add-new-task"]}
      value={valueInput}
      onChange={(ev) => setValueInput(ev.target.value)}
    ></input>
  );
}
