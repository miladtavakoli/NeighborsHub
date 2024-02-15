import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import IsometricCity from "assets/images/isometircCity2.jpg";
import Hidden from "@mui/material/Hidden";
import BlobSvg from "assets/svgs/blob1.svg";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const SecondSection = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: 8,
      }}
    >
      <Hidden mdDown>
        <Grid
          container
          item
          xs={6}
          md={5}
          lg={6}
          justifyContent={"flex-start"}
          sx={{
            flex: 1,
            height: "calc( 100vh - 150px )",
            p: 2,
            pl: { md: 2, lg: 0 },
            overflow: "hidden",
            maxHeight: "500px",
          }}
        >
          <img
            src={BlobSvg.src}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "100%",

              //   objectFit: "cover",
              mask: `url( '${IsometricCity.src}' )!important`,
              clipPath: `url( '${IsometricCity.src}' )`,
              //   WebkitMask: `url( '${IsometricCity.src}' )`,
              //   WebkitMaskImage: `url( '${IsometricCity.src}' )`,
              //   border: "10px solid blue",
              //   maskImage: "linear-gradient(black, transparent)",
            }}
            alt="Picture of the author"
          />
        </Grid>
      </Hidden>
      <Grid
        container
        item
        lg={6}
        md={7}
        xs={12}
        direction={"column"}
        justifyContent={"center"}
        sx={{
          flex: 1,
          p: { md: 0, xs: 5 },
        }}
      >
        <Hidden smDown>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
            Discover the Benefits of a Connected Neighborhood
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Discover the Benefits of a Connected Neighborhood
          </Typography>
        </Hidden>
        <Typography variant="body1" sx={{ pt: 2, color: "#4d4d4d" }}>
          Experience the convenience of accessing local services and fostering
          meaningful community relationships.
        </Typography>
        <Grid container sx={{ pt: 4 }} justifyContent={"space-between"}>
          <Grid container item xs={5} direction="column">
            <Grid container alignItems={"center"}>
              <HomeRepairServiceIcon sx={{ fontSize: "30px" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
                Convenient Services
              </Typography>
            </Grid>
            <Typography sx={{ mt: 2, color: "#4d4d4d" }}>
              Easily find and connect with trusted local service providers for
              your needs
            </Typography>
          </Grid>
          <Grid container item xs={5} direction="column">
            <Grid container alignItems={"center"}>
              <HandshakeIcon sx={{ fontSize: "30px" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
                Strong Community
              </Typography>
            </Grid>
            <Typography sx={{ mt: 2, color: "#4d4d4d" }}>
              Build lasting relationships with your neighbors and create a
              supportive community.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
