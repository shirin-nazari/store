import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Button() {
  return (
    <DivButtons>
      <Link to="/Store" style={{ textDecoration: "none" }}>
        <Buttons>
          SHOP NOW <i class="fas fa-shopping-cart"></i>
        </Buttons>
      </Link>
      <Link to="/SignUp" style={{ textDecoration: "none" }}>
        <Buttons>SIGN UP</Buttons>
      </Link>
    </DivButtons>
  );
}
const Buttons = styled.button`
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #201e1e;
  border: 1px solid #fff;
  height: 4rem;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  width: 10rem;
  font-size: 1rem;
  transition: margin-left 0.5s ease-in;

  &:hover {
    background-color: #fff;
    border: 2px solid #1a1818;
    font-weight: bold;
    width: 11rem;
    color: #201e1e;
    transition: margin-left 0.3s ease-out;
  }
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
`;

export default Button;
