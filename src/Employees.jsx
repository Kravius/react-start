import { useState } from "react";
import { bunUser, editBtnInputs } from "./User-function";
import Employee from "./Employee";

export function CreateEmployees({ initUsers }) {
  const [users, setUsers] = useState(initUsers);
  const [editTemporaryInput, setEditTemporaryInput] = useState([]);

  const handleBunUser = (id) => {
    setUsers((prevUsers) => bunUser(id, prevUsers));
  };

  function handleBtnEdit(id) {
    setUsers((prevUsers) => editBtnInputs(id, prevUsers));
  }

  function handleEditInputs(ev, fieldName, id) {
    setUsers((prevUser) =>
      prevUser.map((user) => {
        if (user.id === id) {
          user[fieldName] = ev.target.value;
        }
        return user;
      })
    );
  }

  return users.map(({ id, name, surname, salary, userIsBun, edit }) => (
    <Employee
      key={id}
      id={id}
      name={name}
      salary={salary}
      surname={surname}
      userIsBun={userIsBun}
      handleBunUser={handleBunUser}
      edit={edit}
      handleBtnEdit={handleBtnEdit}
      // create array in all time when we change inputs
      handleEditInputs={handleEditInputs}
    />
  ));
}
