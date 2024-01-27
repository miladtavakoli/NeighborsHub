import Modal from "components/modal/modal";
import { useState } from "react";
import { useInputHandler } from "hooks/useInputHandler";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";

const STATES = {
  PHONE_NUMBER: "PHONE_NUMBER",
  CODE: "CODE",
};

const PhoneNumberDialog = ({ open, handleClose }) => {
  const phoneNumber = useInputHandler("");
  const code = useInputHandler("");
  const [state, setState] = useState(STATES.PHONE_NUMBER);

  const handleSubmitPhoneNumber = () => {
    setState(STATES.CODE);
  };

  const handleSubmitCode = () => {};

  return (
    <Modal open={open} onClose={handleClose}>
      {state === STATES.PHONE_NUMBER ? (
        <Grid container direction="column">
          <TextField
            fullWidth
            sx={{ my: 1 }}
            label="phoneNumber"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
            {...phoneNumber}
          />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmitPhoneNumber}
          >
            submit
          </Button>
        </Grid>
      ) : state === STATES.CODE ? (
        <Grid container direction="column">
          <TextField
            fullWidth
            sx={{ my: 1 }}
            label="code"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
            {...code}
          />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmitPhoneNumber}
          >
            submit
          </Button>
        </Grid>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default PhoneNumberDialog;
