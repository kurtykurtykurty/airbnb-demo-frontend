import React from "react";
import styled from "styled-components";

import bigroom from "./big_room.png";
import share from "./share.svg";

const MainImage = styled.div`
  width: 100%;
  height: 440px;
  background: url(${bigroom});
  background-size: cover;
  position: relative;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
  padding: 8px 16px;
  cursor: pointer;
`;

const Share = styled(Button)`
  position: absolute;
  right: 181px;
  top: 16px;
`;

const ShareImg = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  background-image: url(${share});
`;

export default () => (
  <div>
    <MainImage>
      <Share>
        <ShareImg />Share
      </Share>
    </MainImage>
  </div>
);
