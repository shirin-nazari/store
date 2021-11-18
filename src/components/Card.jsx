import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Div>
      <img
        src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
        alt="lip stick"
      />
      <h2>lip stick</h2>
      <h3>$21.00</h3>
      <p>
        A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades.
      </p>
    </Div>
  );
}
const Div = styled.div`
  margin: 40px;
  width: 250px;
  height: 250px;
`;
export default Card;
