import Grid from "@mui/material/Grid";
import SampleImage from "assets/images/Leonardo_Diffusion_XL_website_landing_page_background_design_w_0.jpg";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { BASE_URL } from "services/constants";

const Post = ({ handleOpenModal, showLocationOnMap, data }) => {
  return (
    <>
      <Grid container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
        <Grid container sx={{ height: "300px", backgroundColor: "black" }}>
          <img
            src={BASE_URL + data.media?.[0]?.file}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Typography sx={{ mt: 2, fontWeight: "bold" }} variant="h5">
          {data.title}
        </Typography>
        <Grid
          container
          justifyContent={"space-between"}
          direction={"row-reverse"}
        >
          {showLocationOnMap && (
            <Button
              variant="text"
              color="primary"
              sx={{ pl: 1, display: "flex", alignItems: "flex-start" }}
              onClick={() => handleOpenModal(data)}
            >
              <LocationOnIcon sx={{ mr: 0.5 }} />
              <Typography sx={{ pt: 0.4 }} variant="subtitle2">
                {" "}
                Show On Map
              </Typography>
            </Button>
          )}
          {/* <Typography color="primary" sx={{ mt: 1, pl: 1 }} variant="subtitle1">
            10$ - 20$
          </Typography> */}
        </Grid>
        <Typography sx={{ mt: 1, pl: 1, color: "gray" }} variant="subtitle1">
          {data.body}
        </Typography>
      </Grid>
    </>
  );
};

export default Post;
