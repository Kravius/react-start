import { useState } from "react";
import style from "../../styles/TaskList.module.css";
import CreateTaskOfLi from "../components/TaskOfLi";
import DeleteListOfTaskBTN from "../components/DeleteListOfTaskBTN";
import { MoveListToOtherSection } from "../components/MoveListToOtherSection";

function TaskListSection({
  taskListDataWeBield,
  setTaskListDataWeBield,
  setTaskListMove,
  text,
}) {
  function handleInputChange(id) {
    return (ev) => {
      setTaskListDataWeBield((prev) => {
        const newTaskArr = [...prev];
        newTaskArr[id] = ev.target.value;
        return newTaskArr;
      });
    };
  }

  const createLi = taskListDataWeBield.map((taskText, id) => (
    <li key={id} className={style["list-of-li"]}>
      <CreateTaskOfLi
        id={id}
        taskText={taskText}
        handleInputChange={handleInputChange(id)}
      ></CreateTaskOfLi>

      <MoveListToOtherSection
        fromSection={setTaskListDataWeBield}
        toSection={setTaskListMove}
        text={text}
        id={id}
      />

      <DeleteListOfTaskBTN
        setTaskListDataWeBield={setTaskListDataWeBield}
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
