import React from "react";
import styled from "styled-components";

import bigroom from "./big_room.png";
import share from "./share.svg";
import like from "./like.svg";

const MainImage = styled.div`
  width: 100%;
  height: 440px;
  background: url(${bigroom});
  background-size: cover;
`;

const Social = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 440px;
`;

const Button = styled.button`
  display: flex;
  height: 40px;
  border: none;
  background: #ffffff;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
  cursor: pointer;
`;

const Share = styled(Button)`
  margin-top: 16px;
  margin-right: 16px;
`;

const Save = styled(Button)`
  margin-top: 16px;
`;

const ViewPhotos = styled(Button)`
  font-weight: bold;
  margin-bottom: 16px;
`;

const ShareImg = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  margin: 8px 8px 8px 16px;
  background-image: url(${share});
`;

const LikeImg = styled.div`
  display: flex;
  width: 18px;
  height: 16px;
  margin-right: 12px;
  background-image: url(${like});
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const Label = styled.div`
  margin: 8px 16px 8px 0;
  display: flex;
  text-align: center;
`;

export default () => (
  <div>
    <MainImage>
      <div className="container">
        <Wrapper>
          <Social>
            <Share>
              <ShareImg />
              <Label>Share</Label>
            </Share>
            <Save>
              <LikeImg />Save
            </Save>
          </Social>
          <Bottom>
            <ViewPhotos>ViewPhotos</ViewPhotos>
          </Bottom>
        </Wrapper>
      </div>
    </MainImage>
  </div>
);
