import style from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style["text-main"]}>To-Do List</h1>
      <span>Do all that you want</span>
    </header>
  );
}
