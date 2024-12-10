import styled from "styled-components";
import Header from "./Header";
import styles from "../../styles/ToDoList.module.css";

export default function TodoList() {
  return <div className={styles.wrapper}>{<Header></Header>}</div>;
}
