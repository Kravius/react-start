import { useState } from "react";
import { bunUser } from "./BunUser";
import Employee from "./Employee";

export function CreateEmployees({ initUsers }) {
  const [users, setUsers] = useState(initUsers);

  const handleBunUser = (id) => {
    setUsers((prevUsers) => bunUser(id, prevUsers));
  };

  console.log(users);
  return users.map(({ id, name, surname, salary, userIsBun }) => (
    <Employee
      key={id}
      id={id}
      name={name}
      salary={salary}
      surname={surname}
      userIsBun={userIsBun}
      handleBunUser={handleBunUser}
    />
  ));
}
