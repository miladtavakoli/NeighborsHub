import { useSnackbar, SnackbarContent } from "notistack";
import React, { forwardRef } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const InnerSnackbarUtilsConfigurator = (props) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

InnerSnackbarUtilsConfigurator.propTypes = {
  setUseSnackbarRef: PropTypes.any,
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};

export const snackActions = {
  success(msg) {
    this.toast(msg, "success");
  },
  warning(msg) {
    this.toast(msg, "warning");
  },
  info(msg) {
    this.toast(msg, "info");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  toast(msg, variant = "default") {
    const snackKey = useSnackbarRef.enqueueSnackbar(msg, {
      autoHideDuration: 3000,
      preventDuplicate: true,
      variant: variant,
      action: [
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className="notification-close-button"
          onClick={() => useSnackbarRef.closeSnackbar(snackKey)}
        >
          <CloseIcon />
        </IconButton>,
      ],
    });
  },
};

// export const StyledSuccess = forwardRef((props, ref) => (
//   <SnackbarContent ref={ref}>
//     <SnackMainStyle {...props} icon={RoundedBgGreenSuccess} />
//   </SnackbarContent>
// ));

// export const StyledWarning = forwardRef((props, ref) => (
//   <SnackbarContent ref={ref}>
//     <SnackMainStyle {...props} icon={RoundedBgOrangeWarning} />
//   </SnackbarContent>
// ));

// export const StyledError = forwardRef((props, ref) => (
//   <SnackbarContent ref={ref}>
//     <SnackMainStyle {...props} icon={RoundedBgRedError} />
//   </SnackbarContent>
// ));

const SnackMainStyle = ({ message, icon }) => (
  <Grid
    container
    justifyContent="space-between"
    alignItems={"center"}
    sx={{
      minWidth: "500px",
      border: "2px solid white",
      py: 1,
      px: 2,
      borderRadius: "15px",
      backgroundColor: "#112748",
    }}
  >
    <Typography sx={{ color: "white", fontFamily: "IRANSans", ml: 2 }}>
      {message}
    </Typography>
    <img src={icon} />
  </Grid>
);

SnackMainStyle.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.any,
};
