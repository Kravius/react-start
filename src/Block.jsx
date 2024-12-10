import styled from "styled-components";
import Button from "./Button";

const ButtonClick = styled.button`
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: ${(props) => props.color};
`;

export default function Block() {
  return (
    <>
      <Button text={"block"} disabled={true} />
      <Button text={"click"} />
      <Button text={"reset"} color="red" />
      <ButtonClick color={"green"}>top</ButtonClick>
    </>
  );
}
