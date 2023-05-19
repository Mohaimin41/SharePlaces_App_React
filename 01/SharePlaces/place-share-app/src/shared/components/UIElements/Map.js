import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";


function Map(props) {
  const { center, zoom } = props;
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: center, // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
    // Create a new marker.
    const marker = new mapboxgl.Marker({
      color: "#FF1212",
      draggable: false,
    })
      .setLngLat(center)
      .addTo(map);
  }, [center, zoom]);

  return (
    <div
      id="map"
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}

export default Map;
