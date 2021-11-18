import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <Div>
      <Img src={props.src} alt="lip stick" />
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <p>{props.text}</p>
    </Div>
  );
}
const Div = styled.div`
  margin: 40px;

  padding: 10px;
  width: 280px;
  text-align: center;
  border: 2px solid #201e1e;
  /* height: 370px; */
  height: auto;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
export default Card;
