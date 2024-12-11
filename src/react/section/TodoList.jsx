import Header from "./Header";
import styles from "../../styles/ToDoList.module.css";
import { AddNewTask } from "./AddNewTask";
import { TaskListSection } from "./TaskListSection";

import { taskListDataStart } from "../constats/TaskArray";
import { useState } from "react";

export default function TodoList() {
  const [taskListData, setTaskListData] = useState(taskListDataStart);
  return (
    <div className={styles.wrapper}>
      {<Header></Header>}
      <main>
        {<AddNewTask setTaskListData={setTaskListData}></AddNewTask>}
        {
          <TaskListSection
            taskListData={taskListData}
            setTaskListData={setTaskListData}
          ></TaskListSection>
        }
      </main>
    </div>
  );
}
