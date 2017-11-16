import React from "react";
import styled from "styled-components";
import { media } from "../../media";

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`padding-top: 162px;`;
// Враппер для карточек Homes с flex и margin-bottom
export const Wrapper = styled.div`
  margin-bottom: 24px;

  ${media.md`
    margin-bottom: 40px;
  `};
`;
