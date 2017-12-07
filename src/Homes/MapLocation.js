import React from "react";
import GoogleMapReact, { Circle } from "google-map-react";
import styled from "styled-components";

const Wrap = styled.div`
  width: inherit;
  height: inherit;
`;

export default props => {
  return (
    <Wrap>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_CODE,
          language: "ru"
        }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        // Circle={{
        //   strokeColor: "#000000",
        //   strokeOpacity: "0.8",
        //   strokeWeight: "2",
        //   fillColor: "#FF0000",
        //   fillOpacity: " 0.35",
        //   center: { lat: 46.55189574, lng: 5.29309273 },
        //   radius: "50"
        // }}
      />
    </Wrap>
  );
};
