import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  return (
    <Header>
      <nav>
        <Div>
          <Link to="/" className="nav-logo">
            Cosmetic <i className="fas fa-spa"></i>
          </Link>
        </Div>
        <Ulnav>
          <Link to="/">
            <Li>Home</Li>
          </Link>
          <Link to="/Store">
            <Li>Store</Li>
          </Link>
          <Link to="/About">
            <Li>About Us</Li>
          </Link>
          <Link to="/Services">
            <Li>Services</Li>
          </Link>
        </Ulnav>
      </nav>
    </Header>
  );
}

export default Navbar;
const Header = styled.header`
  background-color: #181717;
  font-size: 24px;
  color: #fff;

  width: 100%;
  height: 80px;
`;
const Div = styled.div`
  justify-content: start;
  padding-top: 20px;
  margin: 5px;
  color: #fff;
`;
const Ulnav = styled.ul`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  list-style: none;
`;
const Li = styled.li`
  padding-left: 20px;
  padding-bottom: 50px;
`;

const Button = styled.button`
  border: 1px solid #fff;
  width: 150px;
  height: 150px;
`;
