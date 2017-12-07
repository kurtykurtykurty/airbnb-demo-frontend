import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import Star from "../Stars";
import Search from "./InputSearch";
import Rating, { RatingRow } from "./Rating";
import Review from "./Review";
import Pages from "./Pages";

import marlee from "./userpic.png";
import michelle from "./userpic2.png";

const Section = styled.div`
  padding-top: 47px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  color: #383838;
  margin-bottom: 14px;
  width: 100%;

  ${media.md`
    font-size: 28px;
    width: 50%;
  `};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Input = styled(Search)`
  margin-bottom: 160px;
  background: red;
`;
const RatingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
  padding-bottom: 7px;
`;

const More = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #0f7276;
  cursor: pointer;
`;

const Stars = styled(Star)`
  margin-left: 12px;
`;

export default () => (
  <div className="container">
    <Section>
      <div className="col-xs-12 col-lg-8">
        <Header>
          <Title>
            113 Reviews<Stars size="big" num={5} />
          </Title>
          <Input />
        </Header>
      </div>
      <RatingWrap>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Rating>
            <RatingRow propertie="Accuracy" rating={5} />
            <RatingRow propertie="Communication" rating={5} />
            <RatingRow propertie="Cleanliness" rating={5} />
          </Rating>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Rating>
            <RatingRow propertie="Location" rating={5} />
            <RatingRow propertie="Check In" rating={5} />
            <RatingRow propertie="Value" rating={5} />
          </Rating>
        </div>
      </RatingWrap>
      <div className="col-xs-12 col-lg-8">
        <Review pic={marlee} name="Marlee" date="November 2017">
          This was one of my favourite places we stayed in all on Colombia. A
          very peaceful setting and a great spot to unwind.
        </Review>
        <Review pic={michelle} name="Michelle" date="November 2017">
          What an absolutely wonderful place to stay! Yudy and Victoria were so
          kind and lovely, even after we arrived super late due to problems at
          the airport, and Hernando our driver was super friendly and really
          patient with our little Spanish. Victoria was a lovely host and gave
          us so…<More>Read more</More>
        </Review>
        <Pages />
      </div>
    </Section>
  </div>
);
