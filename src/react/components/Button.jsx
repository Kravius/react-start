import styled from "styled-components";
const ButtonClick = styled.button`
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: ${(props) => (props.$warn  ? "red" : "white")};
  background: ${(props) => (props.$warn  ? "yellow" : "green")};
`;

function Button({ text, ...props }) {
  return <ButtonClick {...props}>{text}</ButtonClick>;
}
export { ButtonClick, Button };
