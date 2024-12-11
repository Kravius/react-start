import { useState } from "react";
import style from "../../styles/AddNewTask.module.css";
import CreateInputTask from "../components/CreateInputTask";
import { AddNewTaskBTN } from "../components/Button";

function AddNewTask({ setTaskListData }) {
  const [valueInput, setValueInput] = useState("");

  function handelAddTaskBtn() {
    setTaskListData((prev) => [...prev, valueInput]);
    setValueInput("");
  }

  const newInput = (
    <section>
      <div className={style["container-new-task"]}>
        {
          <CreateInputTask
            valueInput={valueInput}
            setValueInput={setValueInput}
          />
        }
        {
          <AddNewTaskBTN
            valueInput={valueInput}
            handelClick={handelAddTaskBtn}
          />
        }
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
