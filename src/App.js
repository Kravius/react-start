import "./App.css";
import "./style/hookUseContextParent.css";

import { useState } from "react";
import { MyContext } from "./components/MyContext";
import HookUseContextParent from "./components/HookUseContextParent";

function App() {
  const [age, setAge] = useState(42);
  console.log(MyContext);
  return (
    <>
      <MyContext.Provider value={{ age, setAge }}>
        <HookUseContextParent />
      </MyContext.Provider>
    </>
  );
}

export default App;
