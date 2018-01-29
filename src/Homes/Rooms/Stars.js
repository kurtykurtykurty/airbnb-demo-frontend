import React from "react";
import styled from "styled-components";
import { media } from "../../media";
import stars from "./star.svg";

const Row = styled.div`
  display: flex;
`;

const MiniStars = styled.div`
  background: url(${stars});
  margin-right: 4px;
  width: 12px;
  height: 12px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Stars = styled.div`
  background: url(${stars});
  margin-right: 4px;
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const BigStars = styled.div`
  background: url(${stars});
  margin-right: 4px;
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-repeat: no-repeat;

  ${media.md`
    width: 19px;
    height: 19px;
  `};
`;

function setStars(size, stars) {
  const num = stars > 5 ? (stars = 5) : stars;

  const StarSize =
    size === "big" ? BigStars : size === "min" ? MiniStars : Stars;
  const count = Array(num)
    .fill()
    .map(() => React.createElement(StarSize));
  if (num) return count;
}

export default props => (
  <Row className={props.className}>{setStars(props.size, props.num)}</Row>
);
