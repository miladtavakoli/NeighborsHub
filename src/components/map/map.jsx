"use client";
import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import Grid from "@mui/material/Grid";
import Modal from "components/modal/modal";
import ListItem from "components/list/listItem";

export default function Map({ onClick = () => {}, cordinates = [], isOnList }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-123.1207);
  const [lat] = useState(49.2827);
  const [zoom] = useState(14);
  const [API_KEY] = useState("2dqVQNThsS932KjZq6KS");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    cordinates.forEach((element) => {
      const marker = new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat(element)
        .addTo(map.current);
      !isOnList &&
        marker.getElement().addEventListener("click", () => {
          setOpen(true);
        });
    });
  }, [API_KEY, lng, lat, zoom]);

  return (
    <Grid container className="map-wrap">
      <div ref={mapContainer} className="map" onClick={onClick} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ListItem />
      </Modal>
    </Grid>
  );
}
