import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Nav>
        <NavLink
          to="/"
          className="nav-link"
          style={{
            fontWeight: "bold",

            fontSize: "2rem",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Cosmetic <Icon className="fas fa-spa"></Icon>
        </NavLink>
        <Hamberger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamberger>
        <MenuUl isOpen={isOpen}>
          <MenuLi>
            <NavLink
              to="/"
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
              style={{
                display: "inline",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink
              to="/Store"
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
              style={{
                display: "inline",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Store
            </NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink
              to="/Services"
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
              style={{
                display: "inline",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Services
            </NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink
              to="/About"
              activeStyle={{
                fontWeight: "bold",
                color: "pink",
              }}
              className="nav-link"
              style={{
                display: "inline",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              About Us
            </NavLink>
          </MenuLi>
        </MenuUl>
      </Nav>
    </header>
  );
}
const Nav = styled.nav`
  background-color: #201e1e;
  color: #fff;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const Hamberger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #b46868;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-heght 0.3s ease-in;
  }
`;
const MenuLi = styled.li`
  display: inline;
  padding: 1rem 2rem;
  transition: all 0.2s ease-in;
  &:hover {
    color: #b46868;
    position: relative;
    font-weight: 500;
    transition: all 2s background-color;
    background-color: #b46868;
    font-size: large;
    /* z-index: 999; */
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
const Icon = styled.i`
  color: #b46868;
  font-weight: 900;
`;

export default Navbar;
