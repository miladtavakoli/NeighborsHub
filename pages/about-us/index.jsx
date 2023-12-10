import "styles/styles.css";
import Image from "next/image";
import CanadaBoy from "assets/images/canadaBoy.jpg";
import AngryBear from "assets/images/angryBear.jpg";
import Bear from "assets/images/bear.jpg";
// import Neighbors from "assets/images/neighbors.jpg";
import Neighbors from "assets/images/neighborsCelebrating.jpg";
import Coding from "assets/images/coding.jpg";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Woman from "assets/images/woman.jpg";
const AboutUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  var w = typeof window !== "undefined" && window.innerWidth;
  var h = typeof window !== "undefined" && window.innerHeight;
  return matches ? (
    <Grid container>
      <Grid container alignContent={"center"}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            height: "100vh",
            justifyContent: "center",
            overflow: "hidden",
          }}
          container
        >
          <video
            style={w / 2 > h ? { width: "100%" } : { height: "100%" }}
            autoPlay
            muted
            loop
          >
            <source
              src={`/neighborsCelebrating_animation (4).mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Grid>

        <Grid
          item
          container
          md={6}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          sx={{ height: "100vh", backgroundColor: "#f3f3f3", p: 3 }}
          direction={"column"}
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
            Neighbors Hub
          </h1>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "200",
              color: "#6d4e2c",
              fontFamily: "Cinzel",
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
            backgroundColor: "#f3f3f3",
            // color: "#cbccce",
            px: matchesLg ? 5 : 10,
          }}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
              // fontStyle: "italic",
            }}
          >
            {`As a recent international student in Canada, I'm passionate about
            supporting fellow immigrants and embracing the rich cultural
            diversity of my new life. One chilly October evening, while video
            calling my family, the silent streets left me feeling isolated.`}
          </p>
        </Grid>
        <Grid
          md={6}
          xs={12}
          style={{
            height: "100vh",
            backgroundImage: `url(${CanadaBoy.src})`,
            // boxShadow: "#333333 0px 0px 40px 15px inset",
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
            backgroundImage: `url(${Bear.src})`,
            // boxShadow: "#061123 0px 0px 40px 15px inset",
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
            px: matchesLg ? 5 : 10,
          }}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              // fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
              // fontStyle: "italic",
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
            py: 0,
            px: matchesLg ? 5 : 10,
            backgroundColor: "#f3f3f3",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
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
            backgroundImage: `url(${Woman.src})`,
            // backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "35% ",
          }}
        ></Grid>
      </Grid>
    </Grid>
  ) : (
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <Grid container sx={{ overflowX: "hidden", height: "100vh" }}>
      <Grid
        sx={{ height: "100vh", overflow: "hidden" }}
        container
        alignContent={"center"}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            height: "100vh",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
          container
        >
          <Grid
            item
            container
            md={6}
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              textShadow: "0 0 20px black",
              // height: "250px",
              backgroundImage:
                "radial-gradient( rgb(255,255,255 , 0.1) ,   transparent 70% )",
              margin: "auto",
              // border: "1px solid red",
            }}
            direction={"column"}
          >
            <h1
              style={{
                fontSize: "90px",
                margin: "10px 0",
                fontWeight: "bolder",
                color: "white",
                fontFamily: "Ephesis-Regular",
                textAlign: "center",
                fontWeight: "bold",
                // "-webkit-text-stroke": "1px white" /* width and color */,
              }}
            >
              Neighbors Hub
            </h1>
            <h1
              style={{
                fontSize: matchesLg ? "25px" : "30px",
                fontWeight: "200",
                color: "white",
                fontFamily: "Pacifico-Regular",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              A Tale of Connection Beyond Borders
            </h1>
          </Grid>
          <video
            // style={{
            //   // maxWidth: "100%",
            //   maxHeight: "100%",
            //   minHeight: "100%",
            //   height: "100%",
            //   // width: "300%",
            //   // position: "absolute",
            //   // top: "0",
            //   // right: "0",
            // }}
            style={{ height: "100%" }}
            autoPlay
            muted
            loop
          >
            <source
              src={`/neighborsCelebrating_animation (4).mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
            backgroundPosition: "center",
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
            // background:
            //   "radial-gradient( rgba(99,42,14,1) 0%, rgba(99,42,14,1) 50%, rgba(57,23,7,1) 100%)",
            backgroundColor: "#f3f3f3",
            // color:
            //   "radial-gradient( rgba(99,42,14,1) 0%, rgba(99,42,14,1) 50%, rgba(57,23,7,1) 100%)",
            py: 2,
            px: 5,
          }}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
              textAlign: "center",
            }}
          >
            {`As a recent international student in Canada, I'm passionate about
            supporting fellow immigrants and embracing the rich cultural
            diversity of my new life. One chilly October evening, while video
            calling my family, the silent streets left me feeling isolated.`}
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
            backgroundImage: `url(${Bear.src})`,
            boxShadow: "#061123 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
            backgroundColor: "#f3f3f3",

            // color: "white",
            py: 2,
            px: 5,
          }}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
              textAlign: "center",
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
          sx={{
            height: "100%",
            backgroundImage: `url(${Woman.src})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "52%",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            py: 2,
            px: 5,
            backgroundColor: "#f3f3f3",
            // color: "white",
          }}
        >
          <p
            style={{
              fontSize: matchesLg ? "25px" : "30px",
              // fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Cinzel",
              textAlign: "center",
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
