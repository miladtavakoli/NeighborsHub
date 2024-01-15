import Map from "components/map/map";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import Button from "@mui/material/Button";

const MapTab = () => {
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 15 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [cordinates] = useState([
    [40.74206997218562, -74.05475183105568],
    [49.2817, -123.1227],
  ]);

  return (
    <Grid container alignContent={'flex-start'}>
      <Grid container justifyContent={"flex-end"} item xs={12}>
        <Button variant="contained">Add New Post</Button>
      </Grid>
      <Grid item xs={12}>
        <Map
          cordinates={cordinates}
          clickable={false}
          center={initilaCordinate}
          zoom={zoom}
          myCordinate={myCordinate}
        />
      </Grid>
    </Grid>
  );
};

export default MapTab;
