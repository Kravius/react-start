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
  blurEditInput,
  handleEditInput,
}) {
  return (
    <>
      <p>
        name:
        {edit ? (
          <input
            value={name}
            onChange={(ev) => handleEditInputs(ev, "name", id)}
          ></input>
        ) : (
          <span>{name} </span>
        )}
        surname:
        {edit ? (
          <input
            value={surname}
            onChange={(ev) => handleEditInputs(ev, "surname", id)}
          ></input>
        ) : (
          <span>{surname} </span>
        )}
        salary:
        {edit ? (
          <input
            value={salary}
            onChange={(ev) => handleEditInputs(ev, "salary", id)}
          ></input>
        ) : (
          <span>{salary} </span>
        )}
        bunUser: <span>{`${userIsBun}`} </span>
      </p>
      {/* <button onClick={() => bunUser(id, setUsers)}>Bun</button> */}
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
