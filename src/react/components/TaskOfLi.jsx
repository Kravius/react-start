import { useState } from "react";
import style from "../../styles/NewLiOfTask.module.css";

export default function CreateTaskOfLi({ taskText, id, handleInputChange }) {
  const [inputActive, setInput] = useState(false);

  const task = inputActive ? (
    <input
      className={style["task-input"]}
      value={taskText}
      onChange={(ev) => handleInputChange(ev)}
      onBlur={() => setInput((prev) => !prev)}
    ></input>
  ) : (
    <span
      className={style["text-task"]}
      onClick={() => setInput((prev) => !prev)}
    >
      {taskText}
    </span>
  );
  return task;
}
