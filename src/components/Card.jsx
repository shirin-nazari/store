import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <Div>
      <Img src={props.src} alt="lip stick" />
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <p>{props.text}</p>
    </Div>
  );
}
const Div = styled.div`
  margin: 40px;

  padding: 10px;
  width: 280px;
  text-align: center;
  border: 2px solid #53535337;
  box-shadow: 10px 10px 15px #5050504c;
  /* height: 370px; */

  height: auto;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
export default Card;
