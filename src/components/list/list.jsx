import ListItem from "./listItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useState } from "react";

const List = () => {
  const [open, setOpen] = useState(false);
  const [cordinates] = useState([[-123.1207, 49.2827]]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => setOpen(true);
  return (
    <>
      <Grid container direction="column">
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem showLocationOnMap handleOpenModal={handleOpenModal} />
        </Card>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ mt: 3, overflowY: "auto", height: "calc( 100vh - 180px )" }}
        >
          <Map cordinates={cordinates} isOnList />
        </Grid>
      </Modal>
    </>
  );
};

export default List;
