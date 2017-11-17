import React from "react";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../media";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;

  ${media.md`
    display: flex;
    align-items: center;
  `};
`;

const TitleCard = styled.h2`
  line-height: normal;
  text-align: left;
  font-family: CircularAir;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 0px 0px 12px;

  ${media.md`
    font-size: 17px;
    padding: 0px; 
  `};
`;

const ImgCard = styled.img`
  display: none;

  ${media.md`
    display: block;
    margin: 0 24px 0 0
  `};
`;

const ImgCardM = styled.img`
  height: 100%;
  width: 100%;

  ${media.md`
    display: none;
  `};
`;

const Link = styled(ReactLink)`text-decoration: none;`;

export default props => (
  <Link to={props.link || ""}>
    <Card>
      <ImgCard src={props.img} />
      <ImgCardM src={props.imgm} />
      <TitleCard>{props.title}</TitleCard>
    </Card>
  </Link>
);
