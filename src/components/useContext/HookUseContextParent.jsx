import { useEffect, useState } from "react";
import Daughter from "./Daughter";

// В пустом компоненте App создайте компонент Parent, а в нем компонент Daughter, а в Daughter компонент Grandson. Используя контекст, передайте из App значение возраста 42, а с помощью useContext выведите его в компоненте Daughter.

function HookUseContextParent() {
  const div = <div>this is parent{<Daughter />}</div>;
  return <>{div}</>;
}

export default HookUseContextParent;
