import styled from "styled-components";
const ButtonClick = styled.button`
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  color: ${(props) => props.color};
`;

export default function Button(props) {
  return <ButtonClick {...props}>{props.text}</ButtonClick>;
}
