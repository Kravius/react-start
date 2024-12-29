import { useState } from "react";
import style from "../../styles/TaskList.module.css";
import CreateTaskOfLi from "./TaskOfLi";
import DeleteListOfTaskBTN from "./DeleteListOfTaskBTN";
import { MoveListToOtherSection } from "./MoveListToOtherSection";

function TaskListSection({
  taskListDataWeBield,
  setTaskListDataWeBield,
  setTaskListMove,
  textToMove,
}) {
  const textToEmptySpan =
    textToMove === "remake"
      ? "Start to do something"
      : `You don't have any plan!`;

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
        textToMove={textToMove}
        handleInputChange={handleInputChange(id)}
      ></CreateTaskOfLi>

      <MoveListToOtherSection
        fromSection={setTaskListDataWeBield}
        toSection={setTaskListMove}
        textToMove={textToMove}
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
        <ul className={style["task-lists"]}>
          {taskListDataWeBield.length > 0 ? (
            createLi
          ) : (
            <span className={style["empty"]}>{textToEmptySpan}</span>
          )}
        </ul>
      </div>
    </section>
  );
}

export { TaskListSection };
