import Map from "components/map/map";
import { useState } from "react";
import Grid from "@mui/material/Grid";
const MapTab = () => {
  const [cordinates] = useState([
    [-74.05475183105568, 40.74206997218562],
    [-123.1227, 49.2817],
    [-123.1257, 49.2857],
    [-123.1237, 49.2877],
  ]);
  return (
    <Grid container>
      <Map cordinates={cordinates} />
    </Grid>
  );
};

export default MapTab;
