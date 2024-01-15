import Modal from "components/modal/modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ConfirmationModal = ({
  open,
  handleClose,
  handleSubmit,
  text = "",
  width,
}) => {
  return (
    <Modal open={open} handleClose={handleClose} width={width}>
      <Grid container direction="column">
        <Typography>{text}</Typography>
      </Grid>
      <Grid container justifyContent={"flex-end"}>
        <Button variant="text" onClick={handleClose} sx={{ m: 1 }}>
          Close
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{ m: 1 }}>
          Submit
        </Button>
      </Grid>
    </Modal>
  );
};

export default ConfirmationModal;
