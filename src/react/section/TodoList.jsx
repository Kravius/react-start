import { useState } from "react";
import styles from "../../styles/ToDoList.module.css";

import { taskListDataStart, DataDone } from "../constats/TaskArray";

import Header from "./Header";
import { AddNewTask } from "./AddNewTask";
import { TaskListDone } from "./TaskListDone";
import { TaskListMustDo } from "./TaskListMustDo";

export default function TodoList() {
  const [taskListData, setTaskListData] = useState(taskListDataStart);
  const [taskListDataDone, setTaskListDataDone] = useState(DataDone);
  return (
    <div className={styles["container"]}>
      <div className={styles.wrapper}>
        {<Header></Header>}
        <main>
          {<AddNewTask setTaskListData={setTaskListData}></AddNewTask>}
          {
            <TaskListMustDo
              taskListDataMustDo={taskListData}
              setTaskListDataMustDo={setTaskListData}
              setTaskListMove={setTaskListDataDone}
            />
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
    </div>
  );
}
