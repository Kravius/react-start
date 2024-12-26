import { useState } from "react";
import style from "../../styles/TaskListDone.module.css";
import { TaskListSection } from "./TaskListSection";

function TaskListDone({
  taskListDataDone,
  setTaskListDataDone,
  setTaskListMove,
}) {
  return (
    <TaskListSection
      taskListDataWeBield={taskListDataDone}
      setTaskListDataWeBield={setTaskListDataDone}
      setTaskListMove={setTaskListMove}
      text={"remake"}
    />
  );
}

export { TaskListDone };
