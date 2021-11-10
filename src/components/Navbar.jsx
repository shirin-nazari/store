import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Navbar() {
  const DivContainer = styled.div`
    background-color: #161313;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    font-size: 2rem;
    position: sticky;
    top: 0;
  `;

  return (
    <DivContainer>
      <div>
        <Link to="/" className="nav-logo">
          Cosmetic <i className="fas fa-spa"></i>
        </Link>
      </div>
    </DivContainer>
  );
}

export default Navbar;
