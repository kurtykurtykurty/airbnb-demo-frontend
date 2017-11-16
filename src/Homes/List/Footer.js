import React from "react";
import styled from "styled-components";
import { media } from "../../media";
import circle from "./circle.png";
import next from "./next.png";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  font-family: CircularAir;
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
  font-family: CircularAir;
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

const Rentals = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
  padding-bottom: 24px;

  ${media.md`
    padding-bottom: 40px;
  `};
`;

const Advice = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  margin-bottom: 80px;

  ${media.md`
    margin-bottom: 28px;
  `};
`;

export default function() {
  return (
    <div className="container">
      <div className="col-xs-12 col-lg-8">
        <Footer>
          <Numbar>
            <CurrentPage>1</CurrentPage>
            <Page>2</Page>
            <Page>3</Page>
            <Page>. . .</Page>
            <Page>17</Page>
            <NextPage />
          </Numbar>
          <Rentals>1 – 18 of 300+ Rentals</Rentals>
          <Advice>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </Advice>
        </Footer>
      </div>
    </div>
  );
}
