import React from "react";
import styled from "styled-components";
import SearchIcon from "./search.svg";

const SearchBorder = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 16px;
`;

const Icon = styled.img`margin: 13px 16px 13px 16px;`;

export default function() {
  return (
    <SearchBorder>
      <Icon src={SearchIcon} />
      <SearchInput type="text" placeholder="Try “Miami”" />
    </SearchBorder>
  );
}
