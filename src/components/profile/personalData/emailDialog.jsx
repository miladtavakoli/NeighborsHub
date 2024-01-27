import Modal from "components/modal/modal";
import { useState } from "react";
import { useInputHandler } from "hooks/useInputHandler";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { sendOtpToEmail, verifyEmailOtp } from "store/actions/authActions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const STATES = {
  EMAIL: "EMAIL",
  CODE: "CODE",
};

const EmailDialog = ({ open, handleClose }) => {
  const email = useInputHandler("");
  const code = useInputHandler("");
  const [state, setState] = useState(STATES.EMAIL);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitEmail = () => {
    dispatch(sendOtpToEmail({ email: email.value })).then(() => {
      setState(STATES.CODE);
    });
  };

  const handleSubmitCode = () => {
    dispatch(verifyEmailOtp({ email: email.value, otp: code.value })).then(
      () => {
        handleClose();
        enqueueSnackbar("Email Edited Successfuly", { variant: "success" });
      }
    );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {state === STATES.EMAIL ? (
        <Grid container direction="column">
          <TextField
            fullWidth
            sx={{ my: 1 }}
            label="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            {...email}
          />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmitEmail}
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
            onClick={handleSubmitCode}
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

export default EmailDialog;
