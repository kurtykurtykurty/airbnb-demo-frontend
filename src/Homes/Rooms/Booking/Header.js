import React from "react";
import styled from "styled-components";
import MobileSocialButton from "../Header/MobileSocialButton";
import Price from "./Price";

import like from "./like.svg";
import share from "./share.svg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialButtons = styled.div`
  display: flex;
`;

const MobileShare = styled(MobileSocialButton)`
  margin-top: 12px;
  margin-right: 16px;
`;

const MobileLike = styled(MobileSocialButton)`
  margin-top: 12px;
`;

export default () => (
  <Header>
    <Price />
    <SocialButtons>
      <MobileShare>
        <img src={share} />
      </MobileShare>
      <MobileLike>
        <img src={like} />
      </MobileLike>
    </SocialButtons>
  </Header>
);
