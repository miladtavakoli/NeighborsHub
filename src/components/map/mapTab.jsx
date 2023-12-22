import Map from "components/map/map";
import Modal from "components/modal/modal";
import ListItem from "components/list/listItem";
import { useState } from "react";
import Grid from "@mui/material/Grid";
const MapTab = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container>
      <Map onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ListItem />
      </Modal>
    </Grid>
  );
};

export default MapTab;
