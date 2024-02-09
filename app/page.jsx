"use client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import IsometricCity from "assets/images/isometircCity2.jpg";
import Hidden from "@mui/material/Hidden";
import Layout from "layout/HeaderFooter";

const LandingPage = () => {
  return (
    <Grid container sx={{ pt: { lg: 2, sm: 3 } }}>
      <Grid
        container
        item
        md={6}
        xs={12}
        direction={"column"}
        sx={{ flex: 1, p: { md: 0, xs: 5 } }}
      >
        <Hidden smDown>
          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 5 }}>
            Discover Your Neighborhood&apos;s Hidden Gems
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Discover Your Neighborhood&apos;s Hidden Gems
          </Typography>
        </Hidden>
        <Typography variant="body1" sx={{ pt: 2 }}>
          Welcome to our neighborhood services and products application. Connect
          with your neighbors and explore a wide range of offerings right at
          your fingertips.
        </Typography>
        <Grid sx={{ pt: 4 }}>
          <Link href="/app">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4F62C9",
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
              }}
            >
              Learn More
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid
          container
          item
          xs={6}
          justifyContent={"flex-end"}
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
            src={IsometricCity.src}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              border: "1px solid #c9c293",
            }}
            alt="Picture of the author"
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

const Test = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default Test;
