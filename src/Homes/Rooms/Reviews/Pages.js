import React from "react";
import styled from "styled-components";
import circle from "./circle.svg";
import next from "./next.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 24px;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #0f7276;
  height: 32px;
  width: 32px;
  margin-left: 6px;
  margin-right: 6px;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 16px;
`;

const CurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: url(${circle});
  background-repeat: no-repeat;
  height: 32px;
  width: 32px;
  margin-left: 6px;
  margin-right: 6px;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 16px;
`;

const NextPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: url(${next});
  background-repeat: no-repeat;
  height: 32px;
  width: 32px;
  margin-left: 6px;
  margin-right: 6px;
`;

const Numbar = styled.div`
  display: flex;
  padding-bottom: 15px;
`;

export default function() {
  return (
    <Wrapper>
      <Numbar>
        <CurrentPage>1</CurrentPage>
        <Page>2</Page>
        <Page>3</Page>
        <Page>. . .</Page>
        <Page>17</Page>
        <NextPage />
      </Numbar>
    </Wrapper>
  );
}
