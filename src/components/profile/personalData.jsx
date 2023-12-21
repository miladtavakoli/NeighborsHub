import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const PersonalData = () => {
  return (
    <Grid container direction="column" alignItems={"center"}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: "100px", height: "100px", my: 2 }}
      />
      <TextField fullWidth sx={{ mt: 2 }} label="first name" />
      <TextField fullWidth sx={{ mt: 2 }} label="last name" />
      <TextField fullWidth sx={{ mt: 2 }} label="phoneNumber" />
      <TextField fullWidth sx={{ mt: 2 }} label="first name" />
      <Button sx={{ mt: 2 }} variant="contained" fullWidth color="primary">
        submit
      </Button>
    </Grid>
  );
};

export default PersonalData;
