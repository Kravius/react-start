import style from "../../styles/AddNewTask.module.css";

function AddNewTaskBTN({ handelClick }) {
  console.log(123);
  return (
    <button
      onClick={() => handelClick()}
      className={style["add-task-btn"]}
    >
      ADD +
    </button>
  );
}
export { AddNewTaskBTN };
