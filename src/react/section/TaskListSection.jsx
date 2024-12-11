import { useState } from "react";
import style from "../../styles/TaskList.module.css";
import CreateTaskOfLi from "../components/TaskOfLi";

function TaskListSection({ setTaskListData, taskListData }) {
  // const [taskList, setTaskListData] = useState(taskListData);

  function handleInputChange(id) {
    return (ev) => {
      setTaskListData((prev) => {
        const newTaskArr = [...prev];
        newTaskArr[id] = ev.target.value;
        return newTaskArr;
      });
    };
  }

  const createLi = taskListData.map((taskText, id) => (
    <li key={id}>
      {
        <CreateTaskOfLi
          id={id}
          taskText={taskText}
          handleInputChange={handleInputChange(id)}
        ></CreateTaskOfLi>
      }
    </li>
  ));
  return (
    <section>
      <div>
        <ul className={style["task-lists"]}>{createLi}</ul>
      </div>
    </section>
  );
}

export { TaskListSection };
