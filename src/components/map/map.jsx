"use client";
import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import Grid from "@mui/material/Grid";

export default function Map({ onClick = () => {} }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-123.1207);
  const [lat] = useState(49.2827);
  const [zoom] = useState(14);
  const [API_KEY] = useState("2dqVQNThsS932KjZq6KS");

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [API_KEY, lng, lat, zoom]);

  return (
    <Grid container className="map-wrap">
      <div ref={mapContainer} className="map" onClick={onClick} />
    </Grid>
  );
}
