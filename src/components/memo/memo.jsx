import { useState } from "react";
import Text from "./Text";

// Возьмите код компонента App, который мы делали на этом уроке, оставьте в нем только первый инпут. Создайте React компонент Text, содержащий абзац с текстом 'long text', и разместите его в App после инпута.

// В компоненте Text добавьте строчку console.log('text render');. Убедитесь, что при вводе символов в инпут компонент Text перерисовывается каждый раз.

// А теперь оберните компонент Text в memo. Убедитесь, что при вводе символов в инпут компонент Text не перерисовывается повторно.

function Memo() {
  const [name, setName] = useState("");

  return (
    <div>
      <label>
        name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <Text />
    </div>
  );
}

export default Memo;
