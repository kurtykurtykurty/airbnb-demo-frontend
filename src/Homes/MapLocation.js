import React from "react";
import GoogleMapReact from "google-map-react";

export default props => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBcxbp8mmiru5-BGizzftdJm8CwpuWO9RY",
        language: "ru"
      }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    />
  );
};
