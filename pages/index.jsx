import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ flex: 1 }}
      >
        <Link href="/app">
          <Button variant="contained">Go to App</Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default LandingPage;
