export function CreateEmployeeFields({
  name,
  edit,
  id,
  type,
  handleEditInputs,
}) {
  return (
    <>
      {type}:
      {edit ? (
        <input
          value={name}
          onChange={(ev) => handleEditInputs(ev, type, id)}
        ></input>
      ) : (
        <span>{name} </span>
      )}
    </>
  );
}
