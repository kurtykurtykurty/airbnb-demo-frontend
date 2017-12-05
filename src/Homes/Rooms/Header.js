import React from "react";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import MobileSocialButton from "./MobileSocialButton";
import { media } from "../../media";

import bigroom from "./big_room.png";
import share from "./share.svg";
import mobileShare from "./share_mobile.svg";
import like from "./like.svg";
import mobileLike from "./like_mobile.svg";

const MainImage = styled.div`
  width: 100%;
  height: 290px;
  background: url(${bigroom});
  background-size: cover;

  ${media.md`
    height: 360px;
  `};

  ${media.lg`
    height: 440px;
  `};
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
  height: 290px;

  ${media.md`
    height: 360px;
  `};

  ${media.lg`
    height: 440px;
  `};
`;

const Bottom = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  height: 100%;

  ${media.md`
    justify-content: flex-start;
  `};
`;

const Button = styled.button`
  display: flex;
  border: none;
  background: #ffffff;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-family: CircularAir;
  color: #383838;
  cursor: pointer;
  padding: 8px 16px;
`;

const ViewPhotos = styled(Button)`
  font-weight: bold;
  margin-bottom: 16px;

  ${media.md`
    margin-bottom: 24px;    
  `};
`;

const Share = styled(SocialButton)`
  margin-top: 16px;
  margin-right: 16px;
`;

const MobileShare = styled(MobileSocialButton)`
  margin-top: 12px;
  margin-right: 16px;
`;

const Like = styled(SocialButton)`
  margin-top: 16px;
`;

const MobileLike = styled(MobileSocialButton)`
  margin-top: 12px;
`;

const Label = styled.div`
  font-size: 12px;
  line-height: normal;

  ${media.md`
  line-height: 24px;
    font-size: 14px;
  `};
`;

export default () => (
  <div>
    <MainImage>
      <div className="container">
        <Wrapper>
          <Social>
            <Share label="Share">
              <img src={share} />
            </Share>
            <MobileShare>
              <img src={mobileShare} />
            </MobileShare>
            <Like label="Save">
              <img src={like} />
            </Like>
            <MobileLike>
              <img src={mobileLike} />
            </MobileLike>
          </Social>
          <Bottom>
            <ViewPhotos>
              <Label>View Photos</Label>
            </ViewPhotos>
          </Bottom>
        </Wrapper>
      </div>
    </MainImage>
  </div>
);
