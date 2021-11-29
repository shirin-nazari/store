import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Cards() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
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
          src="https://388616.smushcdn.com/1873035/wp-content/uploads/2016/11/shutterstock_103290758-1000x675.jpg?lossy=0&strip=1&webp=1"
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
  );
}
const ArticleCard = styled.article`
  text-align: center;
  .slick-arrow {
    background-color: #929292;
    height: 35px;
    width: 35px;
    border-radius: 100px;
  }
  .slick-arrow::hover,
  ::active {
    background-color: #929292 !important;
  }

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
