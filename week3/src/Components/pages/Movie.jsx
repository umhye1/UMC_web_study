import { useState } from "react";
import styled from "styled-components";

export const Movie = ({ backImg, title, star, detail }) => {
  const [isHovering, setIsHovering] = useState(false);

  const ImgUrlBase = "https://image.tmdb.org/t/p/w500/";

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <MovieContainer
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
    >
      {isHovering && (
        <HoverBase>
          <HoverTitle>{title}</HoverTitle>
          <HoverSub>{detail}</HoverSub>
        </HoverBase>
      )}

      <MovieImg src={ImgUrlBase + backImg} alt="Movie poster"></MovieImg>
      <TextContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieStar>{star}</MovieStar>
      </TextContainer>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  width: 200px;
  height: 320px;
  border-radius: 8px;
  background-color: #373b69;
  display: flex;
  margin: 12px;
  flex-direction: column;
  justify-content: start;
  box-shadow: 1px 2px 8px #111327;
`;
const HoverBase = styled.div`
  width: 168px;
  border-radius: 8px;
  height: 288px;
  position: absolute;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px;
  width: calc(200-32) px;
`;
const MovieImg = styled.img`
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  height: 70%;
`;
const MovieTitle = styled.h1`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`;
const MovieStar = styled.h3`
  color: white;
  font-size: 14px;
  font-weight: 200;
  margin-left: 16px;
`;
const HoverTitle = styled.h1`
  color: white;
  font-size: 15px;
  width: 168px;
  font-weight: 800;
  line-height: 150%;
`;
const HoverSub = styled.h1`
  color: white;
  font-size: 12px;
  margin-top: 12px;
  width: 168px;
  /* top: 40%; */
  font-weight: 400;
  line-height: 120%;
`;
