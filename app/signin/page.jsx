import SigninComponent from "components/signin";
import Grid from "@mui/material/Grid";

const Signin = () => {
  return (
    <Grid
      sx={{ height: "calc( 100vh - 200px )" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SigninComponent />
    </Grid>
  );
};

export default Signin;
