import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(props) {
  return (
    <Div>
      <Link to="/Store" style={{ textDecoration: "none" }}>
        <Img src={props.src} alt="lip stick" />
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <p>{props.text}</p>
      </Link>
    </Div>
  );
}
const Div = styled.div`
  /* margin: 40px; */
  color: #0c0b0b;
  padding: 10px;
  width: 280px;
  text-align: center;
  border: 2px solid #53535337;
  box-shadow: 5px 5px 5px #5050504c;

  /* height: 370px; */

  p {
    color: #0c0b0b;
  }
  h3 {
    color: #0c0b0b;
  }
  h4 {
    color: #0c0b0b;
  }
  height: auto;
  @media (max-width: 1024px) {
    width: 200px;
  }
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  @media (max-width: 1024px) {
    width: 150px;
  }
`;
export default Card;
