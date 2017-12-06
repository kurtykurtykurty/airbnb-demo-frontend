import React from "react";
import styled from "styled-components";
import SearchIcon from "./search.svg";
import { media } from "../../../media";

const Border = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  margin-bottom: 16px;

  ${media.md`
    max-width: 230px;
    height: 32px;
  `};
`;

const Input = styled.input`
  width: 100%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  border: none;
`;

const Icon = styled.img`
  margin: 12px 12px 12px 12px;

  ${media.md`
    margin: 8px 8px 8px 10px;
  `};
`;

export default function() {
  return (
    <Border>
      <Icon src={SearchIcon} />
      <Input type="text" placeholder="Search reviews" />
    </Border>
  );
}
