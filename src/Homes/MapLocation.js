import React from "react";
import GoogleMapReact from "google-map-react";

export default props => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_SECRET_MAP_CODE,
        language: "ru"
      }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    />
  );
};
