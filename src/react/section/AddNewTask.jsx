import { useState } from "react";
import style from "../../styles/AddNewTask.module.css";
import CreateInputTask from "../components/TaskInputs";
import { AddNewTaskBTN } from "../components/Button";

function AddNewTask() {
  const newInput = (
    <section>
      <div className={style["container-new-task"]}>
        {<CreateInputTask />}
        {<AddNewTaskBTN />}
      </div>
    </section>
  );
  return newInput;
}

// function CreateInputTask() {
//   const [valueInput, setValueInput] = useState(startText);
//   return (
//     <input
//       className={style["input-add-new-task"]}
//       value={valueInput}
//       onChange={(ev) => setValueInput(ev.target.value)}
//     ></input>
//   );
// }

export { AddNewTask };
