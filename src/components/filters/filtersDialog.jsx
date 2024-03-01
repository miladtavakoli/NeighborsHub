import Grid from "@mui/material/Grid";
import Modal from "components/modal/modal";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getPosts } from "store/actions/postsActions";

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1000,
    label: "1000 meter",
  },
  {
    value: 2000,
    label: "2000 meter",
  },
  {
    value: 3000,
    label: "3000 meter",
  },
];

const defaultFilters = { location: false, distance: false };

const FiltersDialog = ({ open, handleClose, handleSubmitFilters }) => {
  const [state, setState] = useState({
    filters: defaultFilters,
    distance: [0, 1000],
  });

  const handleCheckbox = (e) => {
    setState((prevState) => ({
      ...prevState,
      filters: { ...prevState.filters, [e.target.name]: e.target.checked },
    }));
  };

  const handleClear = () => {
    setState((prevState) => ({
      ...prevState,
      filters: defaultFilters,
    }));
    handleClose();
    handleSubmitFilters({ ...state, filters: defaultFilters });
  };

  const handleSetDistance = (e, distance) => {
    setState((prevState) => ({
      ...prevState,
      distance,
    }));
  };

  return (
    <Modal open={open} onClose={handleClose} width="sm">
      <Grid container direction={"column"}>
        <Typography variant="h6">FILTERS</Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container direction={"column"} sx={{ px: 1 }}>
          <Grid container justifyContent={"flex-start"}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.filters.distance}
                  onChange={handleCheckbox}
                  name="distance"
                />
              }
              label="Distance"
            />
          </Grid>
          <Grid sx={{ px: 4 }}>
            <Slider
              value={state.distance}
              onChange={handleSetDistance}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={3000}
              step={100}
              marks={marks}
              disabled={!state.filters.distance}
            />
          </Grid>
        </Grid>
        <Grid container direction={"column"} sx={{ mt: 2, px: 1 }}>
          <Grid container justifyContent={"flex-start"}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.filters.location}
                  onChange={handleCheckbox}
                  name="location"
                />
              }
              label="Location"
            />
          </Grid>
          <Grid container>
            <Grid
              container
              alignItems={"center"}
              sx={{
                border: "1px solid #DEDEDE",
                backgroundColor: state.filters.location ? "#ebf7fc" : "#f2f2f2",
                width: "auto",
                borderRadius: "30px",
                p: 0.5,
              }}
            >
              <Chip
                avatar={<Avatar alt="Natacha" />}
                label="Avatar"
                sx={{ mr: 1, backgroundColor: "" }}
              />
              <Chip
                avatar={<Avatar alt="Natacha" />}
                label="Avatar"
                sx={{ mr: 1 }}
              />
              <IconButton disabled={!state.filters.location}>
                <CloseIcon sx={{ color: "#7a7a7a" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 3 }}>
          <Grid container xs={6} sx={{ px: 0.5 }}>
            <Button
              sx={{
                borderRadius: "10px",
                height: "47px",
                fontSize: "13px",
                backgroundColor: "#e85a02",
                "&:hover": {
                  backgroundColor: "#f27527",
                },
              }}
              fullWidth
              variant="contained"
              type="submit"
              color="secondary"
              name="otpLogin"
              onClick={handleClear}
              disabled={!Object.values(state.filters).filter(Boolean).length}
            >
              Clear All Filters
            </Button>
          </Grid>
          <Grid container xs={6} sx={{ px: 0.5 }}>
            <Button
              sx={{
                borderRadius: "10px",
                height: "47px",
                fontSize: "13px",
                backgroundColor: "#0298e8",
              }}
              fullWidth
              variant="contained"
              type="submit"
              // disabled={loading || !emailPhoneNumber.value}
              name="passwordLogin"
              onClick={() => handleSubmitFilters(state)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default FiltersDialog;
