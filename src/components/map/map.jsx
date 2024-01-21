"use client";
import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import * as maptilersdk from "@maptiler/sdk";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import Grid from "@mui/material/Grid";

import { MAP_API_KEY } from "constants";

export default function Map({
  onClick,
  cordinates = [],
  myCordinate = [],
  handleMarkerClicked,
  handleMyMarkerClicked,
  center = [0, 0],
  zoom = 0,
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [API_KEY] = useState(MAP_API_KEY);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [center[1], center[0]],
      zoom,
      geolocateControl: true,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      "bottom-right"
    );

    if (onClick) {
      var marker = new maptilersdk.Marker();

      function add_marker(event) {
        var coordinates = event.lngLat;
        marker.setLngLat(coordinates).addTo(map.current);
        onClick([coordinates.lat, coordinates.lng]);
      }

      map.current.on("click", add_marker);
    }
  }, []);

  useEffect(() => {
    if (myCordinate[0]) {
      const marker = new maplibregl.Marker({ color: "lightBlue" })
        .setLngLat([myCordinate[1], myCordinate[0]])
        .addTo(map.current);
      handleMyMarkerClicked &&
        marker.getElement().addEventListener("click", () => {
          handleMyMarkerClicked();
        });
    }
  }, [myCordinate[0]]);

  useEffect(() => {
    map.current.flyTo({ center: [center[1], center[0]], zoom: 14 });
  }, [center[0], center[1]]);

  useEffect(() => {
    cordinates.forEach((element) => {
      const marker = new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([element[1], element[0]])
        .addTo(map.current);
      handleMarkerClicked &&
        marker.getElement().addEventListener("click", () => {
          handleMarkerClicked(element);
        });
    });
  }, [cordinates]);

  return (
    <Grid container className="map-wrap">
      <div ref={mapContainer} className="map" />
    </Grid>
  );
}
