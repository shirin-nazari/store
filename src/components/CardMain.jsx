import React from "react";
import styled from "styled-components";

function CardMain(props) {
  return (
    <>
      <div>
        <Image src={props.src} alt={props.alt} />
        <p>{props.text}</p>
      </div>
    </>
  );
}
const Image = styled.img`
  width: 300px;
  height: 300px;
`;
export default CardMain;
