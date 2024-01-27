import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import { useSnackbar } from "notistack";
import { myInfoSelector } from "store/slices/userSlices";
import { useInputHandler } from "hooks/useInputHandler";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import PhoneNumberDialog from "components/profile/personalData/phoneNumberDialog";
import EmailDialog from "components/profile/personalData/emailDialog";

const PersonalData = () => {
  const myInfo = useSelector(myInfoSelector);
  const { enqueueSnackbar } = useSnackbar();
  const firstName = useInputHandler(myInfo?.first_name);
  const lastName = useInputHandler(myInfo?.last_name);
  const phoneNumber = useInputHandler(myInfo?.mobile);
  const email = useInputHandler(myInfo?.email);
  const [openPhoneNumberDialog, setOpenPhoneNumberDialog] = useState(false);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);

  const handleRegister = async () => {
    // const result = await Apis.auth.register({
    //   email_mobile:
    // })
  };

  const handleOpenPhoneNumberDialog = () => {
    setOpenPhoneNumberDialog(true);
  };

  const handleOpenEmailDialog = () => {
    setOpenEmailDialog(true);
  };

  const handleClosePhoneNumberDialog = () => {
    setOpenPhoneNumberDialog(false);
  };

  const handleClostEmailDialog = () => {
    setOpenEmailDialog(false);
  };

  return (
    <Grid container direction="column" alignItems={"center"}>
      <Avatar
        alt="Remy Sharp"
        // src="/static/images/avatar/1.jpg"
        sx={{ width: "100px", height: "100px", my: 3 }}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="first name"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        {...firstName}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="last name"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        {...lastName}
      />
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleRegister}
      >
        submit
      </Button>
      <Divider sx={{ width: "100%", my: 2 }} />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="phoneNumber"
        onClick={handleOpenPhoneNumberDialog}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <PhoneIphoneIcon />
            </InputAdornment>
          ),
        }}
        {...phoneNumber}
      />
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="email"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        onClick={handleOpenEmailDialog}
        {...email}
      />
      <PhoneNumberDialog
        open={openPhoneNumberDialog}
        handleClose={handleClosePhoneNumberDialog}
      />
      <EmailDialog
        open={openEmailDialog}
        handleClose={handleClostEmailDialog}
      />
    </Grid>
  );
};

export default PersonalData;
