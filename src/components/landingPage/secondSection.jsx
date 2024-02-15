import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import IsometricCity from "assets/images/isometircCity2.jpg";
import Hidden from "@mui/material/Hidden";
import BlobSvg from "assets/svgs/blob1.svg";
import Image from "next/image";
import "./css.css";
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
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Discover the Benefits of a Connected Neighborhood
          </Typography>
        </Hidden>
        <Typography variant="body1" sx={{ pt: 2 }}>
          Experience the convenience of accessing local services and fostering
          meaningful community relationships.
        </Typography>
        <Grid sx={{ pt: 4 }}>
          <Link href="/app">
            <Button
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(90deg, #0D869C, #3BB4DD)",
                borderRadius: "15px",
                boxShadow: "none",
                mt: 1,
                mr: 1,
              }}
            >
              Start for free
            </Button>
          </Link>
          <Link href="/about-us">
            <Button
              variant="outlined"
              sx={{
                // backgroundColor: "#4F62C9",
                borderRadius: "15px",
                boxShadow: "none",
                mx: { xs: 0 },
                mt: 1,
                backgroundColor: "transparent",
                border: "1px solid #e85a02",
                color: "#e85a02",
                "&:hover": {
                  backgroundImage: "linear-gradient(90deg, #f27527, #ff9959)",
                  border: "1px solid #e85a02",
                  color: "white",
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
