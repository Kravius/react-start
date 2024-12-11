import Header from "./Header";
import styles from "../../styles/ToDoList.module.css";
import { AddNewTask } from "./AddNewTask";
import { TaskListSection } from "./TaskList";

export default function TodoList() {
  return (
    <div className={styles.wrapper}>
      {<Header></Header>}
      <main>
        {<AddNewTask></AddNewTask>}
        {<TaskListSection></TaskListSection>}
      </main>
    </div>
  );
}
