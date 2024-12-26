import { useState } from "react";

import Header from "./Header";
import styles from "../../styles/ToDoList.module.css";
import { AddNewTask } from "./AddNewTask";
import { TaskListSection } from "./TaskListSection";
import { TaskListDone } from "./TaskListDone";
import { MoveListToOtherSection } from "../components/MoveListToOtherSection";

import { taskListDataStart, DataDone } from "../constats/TaskArray";

export default function TodoList() {
  const [taskListData, setTaskListData] = useState(taskListDataStart);
  const [taskListDataDone, setTaskListDataDone] = useState(DataDone);
  return (
    <div className={styles.wrapper}>
      {<Header></Header>}
      <main>
        {<AddNewTask setTaskListData={setTaskListData}></AddNewTask>}
        {
          <TaskListSection
            taskListDataWeBield={taskListData}
            setTaskListDataWeBield={setTaskListData}
            setTaskListMove={setTaskListDataDone}
            text={"ready"}
          ></TaskListSection>
        }
        {
          <TaskListDone
            taskListDataDone={taskListDataDone}
            setTaskListDataDone={setTaskListDataDone}
            setTaskListMove={setTaskListData}
          />
        }
      </main>
    </div>
  );
}
