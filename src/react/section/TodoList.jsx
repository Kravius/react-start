import styled from "styled-components";
import Header from "./Header";
import styles from "../../styles/ToDoList.module.css";
import { AddNewTask } from "./AddNewTask";

export default function TodoList() {
  return (
    <div className={styles.wrapper}>
      {<Header></Header>}
      {<AddNewTask></AddNewTask>}
    </div>
  );
}
