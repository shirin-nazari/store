import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Cards() {
  return (
    <>
      <ArticleCard>
        <Card
          src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
          name="lip stick"
          price="$21.00"
          text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
        />
        <Card
          src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
          name="lip stick"
          price="$21.00"
          text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
        />
        <Card
          src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
          name="lip stick"
          price="$21.00"
          text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
        />
      </ArticleCard>
    </>
  );
}
const ArticleCard = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Cards;
