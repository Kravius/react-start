import style from "../../styles/AddNewTask.module.css";

function AddNewTaskBTN({ handelClick }) {
  return (
    <button onClick={() => handelClick()} className={style["add-task-btn"]}>
      ADD +
    </button>
  );
}
export { AddNewTaskBTN };
