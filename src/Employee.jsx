import { CreateEmployeeFields } from "./EmployeeField";

function Employee({
  id,
  name,
  surname,
  salary,
  handleBunUser,
  userIsBun,
  edit,
  handleEditInputs,
  handleBtnEdit,
}) {
  return (
    <>
      <p>
        <CreateEmployeeFields
          name={name}
          id={id}
          edit={edit}
          type={"name"}
          handleEditInputs={handleEditInputs}
        />
        <CreateEmployeeFields
          name={surname}
          id={id}
          edit={edit}
          type={"surname"}
          handleEditInputs={handleEditInputs}
        />
        <CreateEmployeeFields
          name={salary}
          id={id}
          edit={edit}
          type={"salary"}
          handleEditInputs={handleEditInputs}
        />
        <span>userIsBun:{`${userIsBun}`}</span>
      </p>
      <button onClick={() => handleBunUser(id)}>
        {userIsBun ? "unBun" : "Bun"}
      </button>
      <button onClick={() => handleBtnEdit(id)}>
        {edit ? "Save" : "Edit"}
      </button>
    </>
  );
}

export default Employee;
