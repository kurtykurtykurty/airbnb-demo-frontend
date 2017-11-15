import React from "react";
import styled from "styled-components";
import cur from "./cur.svg";
import logo from "./logo.svg";
import face from "./face.svg";
import twit from "./twitter.svg";
import inst from "./inst.svg";
import { media } from "../media";

const Footer = styled.footer`box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);`;
const Socle = styled.div`
  padding: 16px 0 24px 0;

  ${media.md`
    padding: 48px 0 48px 0;
  `};
`;
const Select = styled.select`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  font-size: 12px;
  font-weight: 200;
  line-height: 21px;
  outline: none;
  width: 100%;
  font-family: CircularAir;
  line-height: normal;
  color: #383838;
  appearance: none;
  outline: none;
  background-image: url(${cur});
  background-repeat: no-repeat;
  background-position: 93% center;
  padding: 12px 0 12px 8px;
  displa: flex;
  ${media.md`
    font-size: 15px
    padding: 14px 0 15px 8px;
    margin-bottom: 16px;
    `};

  ${media.lg`
    font-size: 18px;
    padding: 12px 0 13px 16px;
  `};
`;
const Option = styled.option`
  font-size: 12px;

  ${media.md`
    font-size: 15px;
  `};

  ${media.lg`
    font-size: 18px;
  `};
`;

const LinksTitle = styled.div`
  text-align: left;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
  font-weight: bold;
  padding: 0 0 8px 0;
  font-size: 12px;

  ${media.lg`
    font-size: 15px;
  `};
`;
const Link = styled.div`
  text-align: left;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #636363;
  padding: 8px 0 8px 0;

  ${media.lg`
    font-size: 15px;
  `};
`;
const Basement = styled.div`
  display: flex;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 18px 0 18px 0;
  flex-direction: column;

  ${media.md`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 36px 0 36px 0;
  `};

  ${media.lg`
    padding: 34px 0 34px 0;
  `};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 12px;

  ${media.md`
    margin: 0;
  `};
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.md`
    justify-content: flex-end;
  `};
`;
const Logo = styled.img`margin: 0px 15px 0px 0px;`;
const Copyright = styled.span`
  font-family: CircularAir;
  line-height: normal;
  color: #636363;
  font-size: 12px;

  ${media.lg`
  font-size: 15px;
  `};
`;
const Button = styled.button`
  line-height: 24px;
  text-align: center;
  color: #636363;
  background: #fff;
  font-family: CircularAir;
  font-size: 12px;
  border: 0;
  margin: 0px 8px 0 0;
  padding: 0 8px 0 0;
  ${media.md`
    font-size: 15px;
  `};
`;
const Social = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.img`
  margin: 0 6px 0 6px;
  width: 16px;
  height: 16px;

  ${media.md`
    width: 24px;
    height: 24px;
  `};
`;

const SelectBox = styled.div`
  display: flex;
  margin: 0 -8px 0 -8px;

  ${media.md`
    flex-direction: column;
  `};
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Socle>
          <div className="row">
            <div className="col-xs-12 col-md-3 col-lg-3">
              <SelectBox>
                <div className="col-xs-6 col-md-12">
                  <Select>
                    <Option>English</Option>
                    <Option>Русский</Option>
                  </Select>
                </div>
                <div className="col-xs-6 col-md-12">
                  <Select>
                    <Option>United States dollar</Option>
                    <Option>Рубли</Option>
                  </Select>
                </div>
              </SelectBox>
            </div>

            <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
              <LinksTitle>Airbnb</LinksTitle>
              <Link>About us</Link>
              <Link>Careers</Link>
              <Link>Press</Link>
              <Link>Policies</Link>
              <Link>Help</Link>
              <Link>About Diversity</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
              <LinksTitle>Discover</LinksTitle>
              <Link>Trust & Safety</Link>
              <Link>Travel Credit</Link>
              <Link>Gift Cards</Link>
              <Link>Airbnb Citizen</Link>
              <Link>Business Travel</Link>
              <Link>Guidebooks</Link>
              <Link>Airbnbmag</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
              <LinksTitle>Hosting</LinksTitle>
              <Link>Why Host</Link>
              <Link>Hospitality</Link>
              <Link>Responsible Hosting</Link>
              <Link>Community Center</Link>
            </div>
          </div>
        </Socle>
        <Basement>
          <Left>
            <Logo src={logo} />
            <Copyright>© Airbnb Inc.</Copyright>
          </Left>
          <Right>
            <Button>Terms</Button>
            <Button>Privacy</Button>
            <Button>Site map</Button>
            <Social>
              <SocialIcon src={face} />
              <SocialIcon src={twit} />
              <SocialIcon src={inst} />
            </Social>
          </Right>
        </Basement>
      </div>
    </Footer>
  );
}
