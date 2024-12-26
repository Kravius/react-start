import { TaskListSection } from "../components/TaskListSection";

function TaskListMustDo({
  setTaskListMove,
  taskListDataMustDo,
  setTaskListDataMustDo,
}) {
  return (
    <TaskListSection
      taskListDataWeBield={taskListDataMustDo}
      setTaskListDataWeBield={setTaskListDataMustDo}
      setTaskListMove={setTaskListMove}
      textToMove={"ready"}
    />
  );
}

export { TaskListMustDo };
