import React from "react";
import styled from "styled-components";
import Button from "../Button";
import CardMains from "../CardMains";
import Cards from "../Cards";
import Footer from "../Footer";
import Background from "../images/headerHome2.jpg";
import SectionFooter from "../SectionFooter";

function Home() {
  return (
    <>
      <HeaderSection style={{ backgroundImage: "url(" + Background + ")" }}>
        <H1header>COSMETIC</H1header>
        <Button />
      </HeaderSection>
      <SectionMain>
        <Cards />
      </SectionMain>
      <CardMains />
      <section>
        <SectionFooter />
      </section>
      <FooterMain>
        <Footer />
      </FooterMain>
    </>
  );
}
const SectionMain = styled.section`
  margin: 60px;
`;
const FooterMain = styled.footer`
  background-color: #201e1e;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export default Home;
const HeaderSection = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  @media (max-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    h1 {
      text-align: center;
      padding: 150px 50px 50px;
      font-weight: bolder;
      font-size: 4rem;
    }
  }
`;
const H1header = styled.h1`
  text-align: center;
  padding: 200px 50px 50px;
  font-weight: bolder;
  font-size: 8rem;
  color: #161616;
`;
