import Grid from "@mui/material/Grid";

const FullHeight = ({ image, direction, title, children }) => {
  return (
    <Grid container alignContent={"center"}>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          height: "100vh",
          backgroundImage: `url(${Coding.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          boxShadow: "#333333 0px 0px 40px 15px inset",
        }}
      />

      <Grid
        item
        container
        md={6}
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        sx={{ height: "100vh" }}
      >
        {children ? (
          children
        ) : (
          <>
            <h1
              style={{
                fontSize: "80px",
                margin: "10px 0",
                fontWeight: "bolder",
                color: "#402E32",
                fontFamily: "Ephesis-Regular",
                textAlign: "center",
              }}
            >
              Neighborly Bonds
            </h1>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "200",
                color: "#6d4e2c",
                fontFamily: "Pacifico-Regular",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              A Tale of Connection Beyond Borders
            </h1>
          </>
        )}
      </Grid>
    </Grid>
  );
};
