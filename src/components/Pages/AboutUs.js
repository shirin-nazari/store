import React from "react";
import styled from "styled-components";
import Background from "../images/fashion-accessories-makeup-products-jewelry-handbag-pastel-background-beauty-fashion-concept-flat-lay_151851-277.jpg";

function AboutUs() {
  return (
    <MainDiv style={{ backgroundImage: "url(" + Background + ")" }}></MainDiv>
  );
}
const MainDiv = styled.div`
  /* background-image: url(Background); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
export default AboutUs;
