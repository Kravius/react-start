import "./App.css";
import "./style/hookUseContextParent.css";

import { useState } from "react";
import { MyContext } from "./components/useContext/MyContext";

import HookUseRef from "./components/useRef/HookUseRef";

function App() {
  return (
    <>
      <HookUseRef />
    </>
  );
}

export default App;
