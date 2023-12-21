import ListItem from "./listItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Map from "components/map/map";
import Modal from "components/modal/modal";
import { useState } from "react";

const List = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => setOpen(true);
  return (
    <>
      <Grid container direction="column" sx={{ overflowY: "auto" }}>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem handleOpenModal={handleOpenModal} />
        </Card>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          <ListItem handleOpenModal={handleOpenModal} />
        </Card>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Map />
      </Modal>
    </>
  );
};

export default List;
