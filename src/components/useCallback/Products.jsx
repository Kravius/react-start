import { memo } from "react";

function Products({ items, addItems }) {
  const res = items.map((item, index) => <li key={index}>{item}</li>);
  console.log("item render");
  return (
    <div>
      <h3>our item</h3>
      <ul>{res}</ul>
      <button onClick={addItems}>click</button>
    </div>
  );
}

export default memo(Products);
