import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterHeader>
        <hr></hr>
        <p>Markups </p>
        <hr></hr>
      </FooterHeader>
      <FooterMain>
        <div>contect us</div>
        <span id="icons">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-telegram-plane"></i>
          <i className="fab fa-linkedin-in"></i>
        </span>
        <div>About us</div>
      </FooterMain>
    </>
  );
}

const FooterHeader = styled.div`
  display: flex;
  padding-top: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  hr {
    width: 30%;
    height: 0px;
    margin-top: 15px;
    color: #fff;
    background: #fff;
  }
  p {
    font-family: "Luxurious Script", cursive;
    font-size: 30px;
  }
`;
const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  padding-bottom: 30px;
  font-size: 20px;
  span {
    i {
      padding-left: 20px;
    }
    i:hover {
      font-size: 25px;
    }
  }
`;
export default Footer;
