import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Background from "../images/headerHome2.jpg";

function Home() {
  return (
    <>
      <HeaderSection style={{ backgroundImage: "url(" + Background + ")" }}>
        <H1header>COSMETIC</H1header>
        <Button />
      </HeaderSection>
      <section>this is card</section>
    </>
  );
}
export default Home;
const HeaderSection = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
`;
const H1header = styled.h1`
  text-align: center;
  padding: 200px 50px 50px;
  font-weight: bolder;
  font-size: 8rem;
  color: #161616;
`;
