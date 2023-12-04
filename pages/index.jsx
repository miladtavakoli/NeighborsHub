import "../src/styles/styles.css";
import Typed from "typed.js";
import Image123 from "../src/assets/images/photo_2023-12-02_00-09-19.jpg";
import Image from "next/image";
import FirstBackgroundImage from "../src/assets/images/photo_2023-12-02_00-45-20.jpg";
import CanadaBoy from "../src/assets/images/_ea7c54e7-e6f7-482f-8fd7-db3c79391715.jpg";
import Khers from "../src/assets/images/_b1cff5a2-7aa1-4143-b764-f4382980831e.jpg";
import Neigh from "../src/assets/images/photo_2023-12-02_00-01-55.jpg";
const Test = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundImage: `url(${FirstBackgroundImage.src})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            boxShadow: "#333333 0px 0px 40px 15px inset",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
            boxSizing: "border-box",
            backgroundColor: "#bcab91",

            color: "black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              width: "100%",
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
              width: "100%",
              fontSize: "30px",
              fontWeight: "200",
              color: "#6d4e2c",
              // textDecoration: 'underline',
              // textUnderlineOffset: '10px',
              fontFamily: "Pacifico-Regular",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            A Tale of Connection Beyond Borders
          </h1>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
            boxSizing: "border-box",
            background: 'radial-gradient( rgba(99,42,14,1) 0%, rgba(99,42,14,1) 50%, rgba(57,23,7,1) 100%)',
            flexDirection: "column",
            display: "flex",
            color: "#cbccce",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              lineHeight: 1.5,
              fontFamily: "Pacifico-Regular",
              fontStyle: 'italic'
            }}
          >
            As a newly arrived international student in Canada, I greatly
            believe in helping fellow immigrants and embracing the cultural
            diversity that defines this new chapter of my life.
          </p>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundImage: `url(${CanadaBoy.src})`,
            boxShadow: "#333333 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0",
          }}
        ></div>
      </div>
      {/* ///////////////////////////////// */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundImage: `url(${Khers.src})`,
            boxShadow: "#061123 0px 0px 40px 15px inset",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
            boxSizing: "border-box",
            backgroundColor: "#061123",
            color: "white",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{ fontSize: "30px", fontWeight: "lighter", lineHeight: 1.5 }}
          >
            One chilly evening in early October, while video calling my family,
            the emptiness of the silent streets around 9 PM left me feeling
            isolated and solely surrounded by the melancholy of distance from
            loved ones and homeland. Lost in thoughts, I was abruptly
            interrupted by a neighbor from house number 1957, urgently alerting
            me of a bear sighting just a short distance away. Still in shock, I
            quickly ended the call to prevent worrying my family and rushed to
            the lady, asking for guidance as a newcomer unfamiliar with such
            wildlife situations. With immense kindness, she and her friend came
            to my aid. Alone and 10,540 kilometers away from anyone familiar,
            they comforted me, constantly assuring me to remain calm. Together,
            we swiftly navigated through a different route and they led me
            safely to my home.
          </p>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
            boxSizing: "border-box",
            backgroundColor: "white",
            color: "black",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <p
            style={{ fontSize: "30px", fontWeight: "lighter", lineHeight: 1.5 }}
          >
            It was in that moment when I realized that a neighbor can sometimes
            be closer than family. In the following days, I encountered the
            lady, and gratefully kissed her hand. Every time I pass by house
            number 1957, a feeling resonates within me, telling me that this
            woman, much like a mother, is honored for saving you. Each time I
            see her, I respectfully tip my hat, offering a dignified and humble
            greeting. She taught me that in a world of freedom, we must all
            support one another. I understood that the culture of camaraderie
            and neighborliness surpasses borders and nations, marking a truly
            human experience. After this real-life incident, I revisited an idea
            that had long lingered in my mind—an application I had set aside due
            to migration concerns. This experience fueled my determination to
            revive the project. And our motto became clear: A Neighbor May be
            Closer Than Family.
          </p>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundImage: `url(${Neigh.src})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Test;
