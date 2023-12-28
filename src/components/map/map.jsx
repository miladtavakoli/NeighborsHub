"use client";
import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import Grid from "@mui/material/Grid";
import Modal from "components/modal/modal";
import ListItem from "components/list/listItem";
import { MAP_API_KEY } from "constants";

export default function Map({
  onClick = () => {},
  cordinates = [],
  isOnList,
  center = [-74.006, 40.7128],
  zoom = 11,
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [API_KEY] = useState(MAP_API_KEY);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // if (map.current) return; // stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center,
      zoom,
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
  }, [center, zoom]);

  return (
    <Grid container className="map-wrap">
      <div ref={mapContainer} className="map" onClick={onClick} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ListItem />
      </Modal>
    </Grid>
  );
}
