import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import PhoneNumberDialog from "components/profile/personalData/phoneNumberDialog";
import EmailDialog from "components/profile/personalData/emailDialog";
import { updateMyInfo } from "store/actions/userActions";

const PersonalData = () => {
  const myInfo = useSelector(myInfoSelector);
  const { enqueueSnackbar } = useSnackbar();
  const [avatar, setAvatar] = useState("");
  const firstName = useInputHandler("");
  const lastName = useInputHandler("");
  const phoneNumber = useInputHandler("");
  const email = useInputHandler("");
  const [openPhoneNumberDialog, setOpenPhoneNumberDialog] = useState(false);
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firstName.onChange({ target: { value: myInfo.first_name } });
    lastName.onChange({ target: { value: myInfo.last_name } });
    phoneNumber.onChange({ target: { value: myInfo.mobile } });
    email.onChange({ target: { value: myInfo.email } });
    setAvatar(myInfo?.avatar?.media?.file);
  }, [myInfo]);

  const handleRegister = async () => {
    dispatch(
      updateMyInfo({ first_name: firstName.value, last_name: lastName.value })
    )
      .then((res) => {
        enqueueSnackbar("Profile Updated Successfuly", {
          variant: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err, { variant: "error" });
      });
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
        src={avatar}
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
