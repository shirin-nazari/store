import React from "react";
import Cards from "../Cards";
import CardMains from "../CardMains";
import styled from "styled-components";
function Store() {
  return (
    <Div>
      <Cards />
      <CardMains />
    </Div>
  );
}
const Div = styled.div`
  /* margin: 20px;
  width: 100%;
  height: 100%; */
  padding: 20px;
`;
export default Store;
