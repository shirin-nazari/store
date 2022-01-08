import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Cards() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <ArticleCard>
      <h2>●•⋯ Beauty Collection ⋯•●</h2>
      <Slider {...settings}>
        <Card
          src="https://www.pngall.com/wp-content/uploads/4/Glossy-Red-Lipstick-PNG-Clipart.png"
          name="lip stick"
          price="$21.00"
          text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
        />
        <Card
          src="https://ae01.alicdn.com/kf/HTB1yRDTRXXXXXa7apXXq6xXFXXXy/bb.jpg"
          name="Cream BB"
          price="$19.47"
          text=" OneSpring Roller Natural Face Cream Facial Cream BB Cream Face Concealer Dark Spot Foundation "
        />
        <Card
          src="https://pngimg.com/uploads/mascara/mascara_PNG70.png"
          name="IN EXTREME DIMENSION 3D BLACK LASH MASCARA
"
          price="$25.00"
          text="A carbon black mascara with a large molded brush."
        />
        <Card
          src="https://www.seekpng.com/png/detail/328-3282821_professional-selection-eye-shadow-palette-makeup-factory-eyeshadow.png"
          name="Eye Shadow"
          price="$11.57"
          text="8 Colors Matte Natural Eye Shadow Palette Eye Shadow Nude Eyelid Waterproof Makeup"
        />
        <Card
          src="https://388616.smushcdn.com/1873035/wp-content/uploads/2016/11/shutterstock_103290758-1000x675.jpg?lossy=0&strip=1&webp=1"
          name="30g Long Lasting DD Cream"
          price="$10.57"
          text="Make UP Korean Cosmetics Whitening Concealer Upgrade BB Cream Maquiagem"
        />
        <Card
          src="https://www.sephora.com/productimages/sku/s2419711-main-zoom.jpg?imwidth=315"
          name="lip stick"
          price="$10.00"
          text=" A stacked deck of five holiday-exclusive Matte, Cremesheen and Frost
        shades."
        />
      </Slider>
    </ArticleCard>
  );
}
const ArticleCard = styled.div`
  text-align: center;

  .slick-arrow {
    background: #191919;

    height: 34px;
    width: 35px;
    border-radius: 100px;
    margin: -30px;
    text-align: center;
  }
  .slick-arrow::hover,
  ::active {
    background-color: #727272 !important;
  }

  h2 {
    color: #3b3b3b;
  }

  margin: 40px;
  @media (max-width: 1024px) {
    margin: 10px;
  }
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
export default Cards;
