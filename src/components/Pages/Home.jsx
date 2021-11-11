import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HeaderSection>
      <h1>COSMETIC</h1>
    </HeaderSection>
  );
}

export default Home;
const HeaderSection = styled.section`
  background-image: url("../images/headerHome.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
