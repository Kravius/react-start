import { useState } from "react";
import { bunUser, editBtnInputs } from "./User-function";
import Employee from "./Employee";

export function CreateEmployees({ initUsers }) {
  const [users, setUsers] = useState(initUsers);

  const handleBunUser = (id) => {
    setUsers((prevUsers) => editBtnInputs(id, prevUsers, "userIsBun"));
  };

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
  const result = users.map(({ id, name, surname, salary, userIsBun, edit }) => (
    <Employee
      key={id}
      id={id}
      name={name}
      salary={salary}
      surname={surname}
      userIsBun={userIsBun}
      handleBunUser={handleBunUser}
      handleEditInputs={handleEditInputs}
    />
  ));
  return <>{result}</>;
}
