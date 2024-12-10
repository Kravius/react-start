import styled from "styled-components";
// import { Button, ButtonClick } from "./Button";

const DIVA = styled.div`
  width: 150px;
  background: yellow;
  border: 2px solid black;
  padding: 15px;
  margin: 15px;
`;
const DIVB = styled(DIVA)`
  background: green;
  border: 5px solid black;
`;

export default function Block1() {
  return (
    <>
      <DIVA></DIVA>
      <DIVB></DIVB>
      <DIVA></DIVA>
    </>
  );
}
