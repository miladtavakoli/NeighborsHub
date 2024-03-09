import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AddLocationIcon from "@mui/icons-material/AddLocation";
const ThirdSection = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: 8,
      }}
    >
      <Grid
        container
        item
        lg={6}
        md={7}
        xs={12}
        direction={"column"}
        justifyContent={"flex-start"}
        sx={{
        //   flex: 1,
          p: { md: 0, xs: 5 },
          mt: 4,
        }}
      >
        <Hidden smDown>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
            Join Our Neighborhood and Connect with Neighbors
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Join Our Neighborhood and Connect with Neighbors
          </Typography>
        </Hidden>
        <Grid>
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #B42CFF, #3BB4DD)",
              borderRadius: "15px",
              boxShadow: "none",
              mt: 3,
            }}
          >
            Join now
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={5}
        lg={6}
        justifyContent={"flex-start"}
        sx={{
        //   flex: 1,
          p: 2,
          pl: { md: 2, lg: 0 },
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ pt: 4 }} justifyContent={"space-between"}>
          <Grid item xs={12}>
            <Item
              title={"Easy Registration"}
              text={
                "Create an account and start connecting with your neighbors in minutes."
              }
              icon={<HowToRegIcon sx={{ fontSize: "40px" }} />}
            />
            <Item
              title={"Discover Services"}
              text={
                "Browse through a wide range of services offered by your neighbors."
              }
              icon={<TravelExploreIcon sx={{ fontSize: "40px" }} />}
            />
            <Item
              title={"Request Assistance"}
              text={
                "Post a request for help and get support from your local community."
              }
              icon={<HandshakeIcon sx={{ fontSize: "40px" }} />}
            />
            <Item
              title={"Offer Services"}
              text={
                "Utilize your skills and earn by providing services to your neighbors."
              }
              withLine={false}
              icon={<AddLocationIcon sx={{ fontSize: "40px" }} />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Item = ({ title, text, icon, withLine = true }) => (
  <Grid item xs={12} sx={{ mt: 2 }}>
    <Grid item xs={12} container alignItems={"center"}>
      <Grid
        item
        xs={4}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        {icon}
      </Grid>
      <Grid item xs={8} alignItems={"center"}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {title}
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12} container sx={{ mt: 2 }}>
      <Grid
        item
        xs={4}
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        {withLine && (
          <Grid sx={{ width: "2px", height: "100px", bgcolor: "black" }} />
        )}
      </Grid>
      <Grid item xs={8}>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default ThirdSection;
