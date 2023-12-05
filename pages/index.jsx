import "styles/styles.css";
import Image from "next/image";
import CanadaBoy from "assets/images/canadaBoy.jpg";
import AngryBear from "assets/images/angryBear.jpg";
import Neighbors from "assets/images/neighbors.jpg";
import Coding from "assets/images/coding.jpg";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  console.log(matches, "gggggggggg");
  return matches ? (
    <Grid container>
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
        </Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          sx={{
            height: "100vh",
            background:
              "radial-gradient( rgba(99,42,14,1) 0%, rgba(99,42,14,1) 50%, rgba(57,23,7,1) 100%)",
            color: "#cbccce",
            p: 10,
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`As a recent international student in Canada, I'm passionate about
            supporting fellow immigrants and embracing the rich cultural
            diversity of my new life. One chilly October evening, while video
            calling my family, the silent streets left me feeling isolated. Yet,
            a neighbor from house number 1957 would soon teach me the true
            meaning of community`}
          </p>
        </Grid>
        <Grid
          md={6}
          xs={12}
          style={{
            height: "100vh",
            backgroundImage: `url(${CanadaBoy.src})`,
            boxShadow: "#333333 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0",
          }}
        ></Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container>
        <Grid
          container
          md={6}
          xs={12}
          item
          sx={{
            height: "100vh",
            backgroundImage: `url(${AngryBear.src})`,
            boxShadow: "#061123 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
        <Grid
          container
          md={6}
          xs={12}
          item
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            height: "100vh",
            backgroundColor: "#061123",
            color: "white",
            p: 10,
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`Abruptly interrupted, I learned of a bear sighting nearby. Panicked and unfamiliar with such situations, I sought guidance. The kindness of my neighbor from house number 1957 and her friend was immediate. Together, we navigated safely home, turning a potential danger into a lesson about the unexpected closeness of neighbors.`}
          </p>
        </Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            p: 10,
            backgroundColor: "gray",
            color: "white",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`Gratefully encountering the lady in the following days, I realized that, in a world of freedom, supporting one another is crucial. The experience inspired me to revive a project I had set aside. Now, with a motto of "A Neighbor May be Closer Than Family," I am reminded each time I pass house number 1957 that the true essence of humanity lies in the bonds we build with those around us.`}
          </p>
        </Grid>
        <Grid
          md={6}
          xs={12}
          style={{
            height: "100vh",
            backgroundImage: `url(${Neighbors.src})`,
          }}
        ></Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid container>
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
        </Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container>
        <Grid
          md={6}
          xs={12}
          style={{
            height: "100vh",
            backgroundImage: `url(${CanadaBoy.src})`,
            boxShadow: "#333333 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0",
          }}
        ></Grid>
        <Grid
          item
          md={6}
          xs={12}
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          sx={{
            // height: "100vh",
            background:
              "radial-gradient( rgba(99,42,14,1) 0%, rgba(99,42,14,1) 50%, rgba(57,23,7,1) 100%)",
            color: "#cbccce",
            p: 10,
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`As a recent international student in Canada, I'm passionate about
            supporting fellow immigrants and embracing the rich cultural
            diversity of my new life. One chilly October evening, while video
            calling my family, the silent streets left me feeling isolated. Yet,
            a neighbor from house number 1957 would soon teach me the true
            meaning of community`}
          </p>
        </Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container>
        <Grid
          container
          md={6}
          xs={12}
          item
          sx={{
            height: "100vh",
            backgroundImage: `url(${AngryBear.src})`,
            boxShadow: "#061123 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid
          container
          md={6}
          xs={12}
          item
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            // height: "100vh",
            backgroundColor: "#061123",
            color: "white",
            p: 10,
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`Abruptly interrupted, I learned of a bear sighting nearby. Panicked and unfamiliar with such situations, I sought guidance. The kindness of my neighbor from house number 1957 and her friend was immediate. Together, we navigated safely home, turning a potential danger into a lesson about the unexpected closeness of neighbors.`}
          </p>
        </Grid>
      </Grid>
      {/* ///////////////////////////////// */}
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          md={6}
          xs={12}
          style={{
            height: "100vh",
            backgroundImage: `url(${Neighbors.src})`,
          }}
        ></Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            p: 10,
            backgroundColor: "gray",
            color: "white",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
            }}
          >
            {`Gratefully encountering the lady in the following days, I realized that, in a world of freedom, supporting one another is crucial. The experience inspired me to revive a project I had set aside. Now, with a motto of "A Neighbor May be Closer Than Family," I am reminded each time I pass house number 1957 that the true essence of humanity lies in the bonds we build with those around us.`}
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
