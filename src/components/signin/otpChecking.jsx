"use client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import STATUS from "components/signup/status";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { optLoginCheckingAction } from "store/actions/authActions";

const OtpChecking = ({ setCurrentState, otp, emailPhoneNumber }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      optLoginCheckingAction({
        mobile: emailPhoneNumber.value,
        otp: otp.value,
      })
    ).then(() => {
      router.push("/");
    });
  };

  const handleBack = () => {
    otp.onChange({ target: { value: "" } });
    setCurrentState(STATUS.GET_EMAIL_MOBILE);
  };

  return (
    <>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Typography textAlign={"center"}>Enter your Code</Typography>

        <TextField
          sx={{
            mt: 1,
            borderRadius: "30px",
            "& .MuiOutlinedInput-notchedOutline": {
              fontSize: "12px",
              borderRadius: "10px!important",
            },
            "& .MuiInputBase-input": {
              padding: "12px 20px",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "darkenGray",
              fontSize: "12px",
              fontWeight: "bold",
            },
          }}
          fullWidth
          variant="outlined"
          label="Code"
          name="your code"
          {...otp}
        />
        <Button
          sx={{
            mt: 3,
            borderRadius: "10px",
            height: "47px",
            fontSize: "13px",
            backgroundColor: "#0298e8",
          }}
          fullWidth
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
        <Button
          sx={{
            mt: 2,
            borderRadius: "10px",
            height: "47px",
            fontSize: "13px",
            backgroundColor: "transparent",
            border: "1px solid #e85a02",
            color: "#e85a02",
            "&:hover": {
              backgroundColor: "#f27527",
              border: "1px solid #e85a02",
              color: "white",
            },
          }}
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={handleBack}
        >
          Back
        </Button>
      </form>
    </>
  );
};

export default OtpChecking;
