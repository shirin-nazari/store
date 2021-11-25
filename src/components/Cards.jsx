import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Cards() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <ArticleCard>
        <h2>●•⋯ Beauty Collection ⋯•●</h2>
        <Slider {...settings}>
          <Card
            src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
            name="lip stick"
            price="$21.00"
            text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
          />
          <Card
            src="https://cdn.shopify.com/s/files/1/0127/2332/products/Fullest-Mascara_Open_White-background_640x.jpg?v=1627925309"
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
        </Slider>
      </ArticleCard>
    </>
  );
}
const ArticleCard = styled.article`
  text-align: center;

  h2 {
    color: #3b3b3b;
  }
  margin: 40px;
  width: 1000px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Cards;
