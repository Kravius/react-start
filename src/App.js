import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import { CreateEmployees } from "./Employees";

function id() {
  return nanoid(5);
}

const initUsers = [
  {
    id: id(),
    name: "Gleb",
    surname: "Shemenkov",
    salary: 100,
    userIsBun: false,
  },
  { id: id(), name: "Olek", surname: "Franc", salary: 200, userIsBun: false },
  {
    id: id(),
    name: "Vadim",
    surname: "Lialkovic",
    salary: 300,
    userIsBun: false,
  },
];

function App() {
  return (
    <>
      <CreateEmployees initUsers={initUsers} />
    </>
  );
}
export default App;
