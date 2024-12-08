function Employee({ id, name, surname, salary, handleBunUser, userIsBun }) {
  return (
    <>
      <p>
        name: <span>{name} </span>
        surname: <span>{surname} </span>
        salary: <span>{salary} </span>
        bunUser: <span>{`${userIsBun}`} </span>
      </p>
      {/* <button onClick={() => bunUser(id, setUsers)}>Bun</button> */}
      <button onClick={() => handleBunUser(id)}>
        {userIsBun ? "unBun" : "Bun"}
      </button>
    </>
  );
}

export default Employee;
