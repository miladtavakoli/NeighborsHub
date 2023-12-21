import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import { useState } from "react";
import Container from "@mui/material/Container";

const CustomModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Container maxWidth="sm" fullWidth>
        <Card container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
          {children}
        </Card>
      </Container>
    </Modal>
  );
};

export default CustomModal;
