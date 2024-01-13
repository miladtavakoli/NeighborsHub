import Map from "components/map/map";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";

const MapTab = () => {
  const myAddressCordinate = useSelector(myAddressesSelector);
  const mainAddress = myAddressCordinate.find((item) => item.is_main_address);
  const initilaCordinate = mainAddress?.location.coordinates || [0, 0];
  const zoom = mainAddress ? 15 : 0;
  const myCordinate = mainAddress?.location?.coordinates;
  const [cordinates] = useState([
    [-74.05475183105568, 40.74206997218562],
    [-123.1227, 49.2817],
    [-123.1257, 49.2857],
    [-123.1237, 49.2877],
  ]);

  return (
    <Grid container>
      <Map
        cordinates={cordinates}
        clickable={false}
        center={initilaCordinate}
        zoom={zoom}
        myCordinate={myCordinate}
      />
    </Grid>
  );
};

export default MapTab;
