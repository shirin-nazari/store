import React from "react";
import styled from "styled-components";
import image from "./images/kisspng-beauty-parlour-cosmetics-food-samosa-5af4fdf389fc62.png";
import notTested from "./images/not-tested.png";
function SectionFooter() {
  return (
    <Articles>
      <span>
        <h2>Kind To Skin & Planet</h2>
        We've been making products that respect your skin and the planet for a
        full-circle clean—from source to disposal—since 1984.
      </span>
      <Images src={image} alt="green-comstic" />
      <Images src={notTested} alt="not tested" />
      <Images
        src="https://cdn-icons-png.flaticon.com/512/3778/3778743.png"
        alt="non-toxic "
      />
    </Articles>
  );
}
const Images = styled.img`
  width: 100px;
  height: 100px;
`;
const Articles = styled.article`
  /* display: grid;
  grid-template-columns: 40% 20% 20% 20%;
  grid-gap: 2em; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 5px;
  span {
    width: 40%;
  }
`;
export default SectionFooter;
