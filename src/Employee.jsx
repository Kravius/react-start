import { CreateEmployeeFields } from "./EmployeeField";

function Employee({
  id,
  name,
  surname,
  salary,
  handleBunUser,
  userIsBun,
  handleEditInputs,
}) {
  return (
    <>
      <p>
        <CreateEmployeeFields
          name={name}
          id={id}
          type={"name"}
          handleEditInputs={handleEditInputs}
        />
        <CreateEmployeeFields
          name={surname}
          id={id}
          type={"surname"}
          handleEditInputs={handleEditInputs}
        />
        <CreateEmployeeFields
          name={salary}
          id={id}
          type={"salary"}
          handleEditInputs={handleEditInputs}
        />
        <span>userIsBun:{`${userIsBun}`}</span>
      </p>
      <button onClick={() => handleBunUser(id)}>
        {userIsBun ? "unBun" : "Bun"}
      </button>
    </>
  );
}

export default Employee;
