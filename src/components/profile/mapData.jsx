import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Map from "components/map/map";

const MapData = () => {
  return (
    <Grid container direction="column" alignItems={"center"}>
      <TextField fullWidth sx={{ mt: 2 }} label="Address" />
      <Grid container sx={{ height: "300px", mt: 2 }}>
        <Map />
      </Grid>
      <Button sx={{ mt: 2 }} variant="contained" fullWidth color="primary">
        submit
      </Button>
    </Grid>
  );
};

export default MapData;
