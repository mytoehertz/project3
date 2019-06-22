import React, { Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.699359, lng: -73.924092 }}
    >
      <Marker
        key={"little shop of soil"}
        position={{ lat: 40.699359, lng: -73.924092 }}
      />
    </GoogleMap>
  );
}

const MapContainer = withScriptjs(withGoogleMap(Map));

export default class MapGoogle extends Component {
  render() {
    return (
      <div style={{ width: "30vw", height: "20vw" }}>
        <MapContainer
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBve2YcpUXvcwNRsHCH4-vPJzz_tCMrU9U"
          }
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}
