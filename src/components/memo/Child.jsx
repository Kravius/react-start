import { memo } from "react";

const Child = memo(function Child({ name }) {
  // console.log("render");
  return <h3>{name}</h3>;
});

export default Child;
