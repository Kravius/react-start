import { memo } from "react";

const Text = memo(function Text() {
  console.log("text render");
  return <p>long text</p>;
});

export default Text;
