import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Views";
import { Sticky } from "react-sticky";

import flag from "../flag.svg";
import cur from "../../../Footer/cur.svg";

const Section = styled.section`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  padding: 15px 24px 24px 24px;
`;

const Body = styled.div`
  height: 273px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
  margin-bottom: 16px;
`;

const Report = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Flag = styled.div`
  background: url(${flag});
  background-size: 100%;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const FlagLabel = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #383838;
`;

const DatePick = styled.div`
  display: flex;
  padding-top: 16px;
`;

const Check = styled.div`
  width: 50%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

const DateBox = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  margin-top: 8px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #636363;
  padding: 11px 0 11px 12px;
`;

const Guests = styled.div`
  font-family: CircularAir;
  font-size: 12px;
  color: #383838;
  margin-top: 15px;
  margin-bottom: 24px;
`;

const SelectGuests = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  outline: none;
  font-family: CircularAir, sans-serif;
  color: #383838;
  background-image: url(${cur});
  background-repeat: no-repeat;
  background-position: 93% center;
  padding: 11px 0px 11px 12px;
  font-family: CircularAir;
  font-size: 14px;
  color: #636363;
  margin-top: 8px;
`;

const Request = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  width: 100%;
  padding: 9px 0 10px 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const Charged = styled.div`
  text-align: center;
  margin-top: 11px;
`;

const ChargedLabel = styled.div`
  font-family: CircularAir;

  font-size: 12px;

  color: #383838;
`;

const navHeight = 72;

function Booking({ isSticky, style }) {
  return (
    <div style={{ ...style, paddingTop: isSticky ? navHeight : 24 }}>
      <Section>
        <Header />
        <Body>
          <DatePick>
            <Check>
              Check In<DateBox>mm/dd/yyyy</DateBox>
            </Check>
            <Check>
              Check Out<DateBox>mm/dd/yyyy</DateBox>
            </Check>
          </DatePick>
          <Guests>
            Guests<SelectGuests>1 guest</SelectGuests>
          </Guests>
          <Request>Request to Book</Request>
          <Charged>
            <ChargedLabel>You won’t be charged yet</ChargedLabel>
          </Charged>
        </Body>
        <Footer />
      </Section>
      <Report>
        <Flag />
        <FlagLabel>Report this listing</FlagLabel>
      </Report>
    </div>
  );
}

export default () => <Sticky topOffset={-48}>{Booking}</Sticky>;
