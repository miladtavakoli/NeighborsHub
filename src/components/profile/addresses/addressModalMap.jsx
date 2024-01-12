import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Map from "components/map/map";

const AddressModalMap = ({ handleSubmit }) => {
  const [mapCenter, setMapCenter] = useState();
  const [selectedCordinate, setSelectedCordinate] = useState([null, null]);
  const handleSetSelectedLocation = (location) => {
    setSelectedCordinate(location);
  };

  return (
    <Grid sx={{ height: "500px" }} container direction={"column"}>
      <Grid>
        <Typography textAlign={"center"} sx={{ color: "gray" }}>
          Select your location on map
        </Typography>
      </Grid>
      <Grid sx={{ flex: 1, mt: 1 }}>
        <Map
          center={mapCenter}
          zoom={"0"}
          onClick={handleSetSelectedLocation}
        />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => handleSubmit(selectedCordinate)}
          disabled={!selectedCordinate[0] && !selectedCordinate[1]}
        >
          {!selectedCordinate[0] && !selectedCordinate[1]
            ? "Click your position on map"
            : "Submit"}
        </Button>
      </Grid>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </Grid>
  );
};

export default AddressModalMap;
