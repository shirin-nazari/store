import React from "react";
import styled from "styled-components";
import CardMain from "./CardMain";
function CardMains() {
  return (
    <Div>
      <CardMain
        src="https://ertclinic.ca/wp-content/uploads/2020/05/5.5-skincare.jpeg"
        alt="massage"
        text="massage is very good "
      />
      <CardMain
        src="https://slikbeauty.com/wp-content/uploads/2020/08/Portfolio.jpg"
        alt="massage"
        text="massage is very good "
      />
      <CardMain
        src="https://phy.imgix.net/PhyNet-dermatology-dermatologist-facials2.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&q=80&w=450&s=6052534ebd747d4f682f2c5929d2288a"
        alt="massage"
        text="massage is very good "
      />
    </Div>
  );
}
const Div = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 2em;
  justify-items: center;
  text-align: center;
  padding-left: 50px;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 30% 30%;
    grid-column-gap: 2rem;
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;
export default CardMains;
