import { useState } from "react";
import style from "../../styles/AddNewTask.module.css";

export default function CreateInputTask({ valueInput, setValueInput }) {
  
  return (
    <input
      placeholder="Add your task"
      className={style["input-add-new-task"]}
      value={valueInput}
      onChange={(ev) => setValueInput(ev.target.value)}
    ></input>
  );
}
