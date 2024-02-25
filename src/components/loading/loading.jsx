import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const Loading = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
