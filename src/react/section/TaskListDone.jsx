import { TaskListSection } from "../components/TaskListSection";

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
      textToMove={"remake"}
    />
  );
}

export { TaskListDone };
