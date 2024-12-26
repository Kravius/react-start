import style from "../../styles/DeleteListOfTaskBTN.module.css";
export default function DeleteListOfTaskBTN({ setTaskListData, id }) {
  const handelDeleteBtn = () => {
    // setTaskListData((prev) => prev.filter((_, prevId) => prevId !== id));
    setTaskListData((prev) => prev.filter((_, prevId) => prevId !== id));
  };
  return (
    <button className={style["delete-btn"]} onClick={handelDeleteBtn}>
      <img src="iconTrash.png" alt="Delete" />
    </button>
  );
}
