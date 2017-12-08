import React from "react";
import styled from "styled-components";
import { StickyContainer, Sticky } from "react-sticky";

import { media } from "../../media";

const Navigate = styled.div`
  background: #ffffff;
  box-shadow: ${props => props.theme.main};
  color: #0f7276;
  padding: 11px 0 11px 0;

  ${media.md`
    padding: 16px 0 15px 0;
  `};
`;

Navigate.defaultProps = {
  theme: {
    main: "0px 0.5px 0px rgba(72, 72, 72, 0.2)"
  }
};

const theme = {
  main: "none"
};

const Link = styled.button`
  border: none;
  background: #fff;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #0f7276;
  cursor: pointer;

  ${media.md`
    font-size: 14px;
  `};
`;

const FixedContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
`;

// function Content(params) {
//   const { style } = params;

//   console.log("params", params);

//   return (

//   );
// }

export default props => (
  <StickyContainer>
    <Sticky>
      {({ distanceFromTop }) => {
        if (distanceFromTop <= 0)
          return (
            <FixedContainer>
              <div className="container">
                <Navigate theme={theme}>
                  <Link>Overview</Link> ·
                  <Link>Reviews</Link> ·
                  <Link>The Host</Link> ·
                  <Link>Location</Link>
                </Navigate>
              </div>
            </FixedContainer>
          );
        else {
          return (
            <Navigate>
              <Link>Overview</Link> ·
              <Link>Reviews</Link> ·
              <Link>The Host</Link> ·
              <Link>Location</Link>
            </Navigate>
          );
        }
      }}
    </Sticky>
  </StickyContainer>
);
