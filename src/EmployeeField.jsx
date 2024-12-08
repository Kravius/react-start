import { useState } from "react";

export function CreateEmployeeFields({
  name,
  id,
  type,
  handleEditInputs,
}) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {type}:
      {isEdit ? (
        <input
          value={name}
          onChange={(ev) => handleEditInputs(ev, type, id)}
          onBlur={() => setIsEdit(false)}
        ></input>
      ) : (
        <span onClick={() => setIsEdit(true)}>{name} </span>
      )}
    </>
  );
}
