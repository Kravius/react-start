import { useState } from "react";
import style from "../../styles/TaskList.module.css";
import CreateTaskOfLi from "../components/TaskOfLi";
import DeleteListOfTaskBTN from "../components/DeleteListOfTaskBTN";

function TaskListSection({ setTaskListData, taskListData }) {
  function handleInputChange(id) {
    return (ev) => {
      setTaskListData((prev) => {
        const newTaskArr = [...prev];
        newTaskArr[id] = ev.target.value;
        return newTaskArr;
      });
    };
  }

  const createLi = taskListData.map((taskText, id) => (
    <li key={id} className={style["list-of-li"]}>
      <CreateTaskOfLi
        id={id}
        taskText={taskText}
        handleInputChange={handleInputChange(id)}
      ></CreateTaskOfLi>

      <DeleteListOfTaskBTN
        setTaskListData={setTaskListData}
        id={id}
      ></DeleteListOfTaskBTN>
    </li>
  ));
  return (
    <section>
      <div>
        <ul className={style["task-lists"]}>{createLi}</ul>
      </div>
    </section>
  );
}

export { TaskListSection };
