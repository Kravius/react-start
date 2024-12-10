import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Block1 from "./Block";

function id() {
  return nanoid(5);
}

function App() {
  return (
    <div>
      <Block1 />
    </div>
  );
}

export default App;
