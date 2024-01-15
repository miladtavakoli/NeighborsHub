import Grid from "@mui/material/Grid";
import SampleImage from "assets/images/Leonardo_Diffusion_XL_website_landing_page_background_design_w_0.jpg";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

const Post = ({ handleOpenModal, showLocationOnMap }) => {
  return (
    <>
      <Grid container direction={"column"} sx={{ p: 2, mx: 1, my: 2 }}>
        <Grid container sx={{ height: "300px", backgroundColor: "black" }}>
          <img
            src={SampleImage.src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Typography sx={{ mt: 2, fontWeight: "bold" }} variant="h5">
          Title
        </Typography>
        <Grid container justifyContent={"space-between"}>
          <Typography color="primary" sx={{ mt: 1, pl: 1 }} variant="subtitle1">
            10$ - 20$
          </Typography>
          {showLocationOnMap && (
            <Button
              variant="text"
              color="primary"
              sx={{ pl: 1, display: "flex", alignItems: "flex-start" }}
              onClick={handleOpenModal}
            >
              <LocationOnIcon sx={{ mr: 0.5 }} />
              <Typography sx={{ pt: 0.4 }} variant="subtitle2">
                {" "}
                Show On Map
              </Typography>
            </Button>
          )}
        </Grid>
        <Typography sx={{ mt: 1, pl: 1, color: "gray" }} variant="subtitle1">
          {`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20`}
        </Typography>
      </Grid>
    </>
  );
};

export default Post;
