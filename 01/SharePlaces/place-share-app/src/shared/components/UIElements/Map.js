import React from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

function Map(props) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidmlqYXktMjMiLCJhIjoiY2xodW45eDloMDFqcjNjbXd1MWMyancxciJ9.JsDVHcgX9Q3bYNKroNofCg";

  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: props.center, // starting position [lng, lat]
    zoom: props.zoom, // starting zoom
  });
  
  return <div id='map' className={`map ${props.className}`} style={props.style}></div>;
}

export default Map;
