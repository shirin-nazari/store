import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterMa>
      <FooterHeader>
        <hr></hr>
        <p>Markups </p>
        <hr></hr>
      </FooterHeader>
      <div>contect us</div>
      <div></div>
      <div>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-telegram-plane"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </FooterMa>
  );
}

const FooterMa = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  padding: 20px;
`;
const FooterHeader = styled.div`
  display: flex;
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
export default Footer;
