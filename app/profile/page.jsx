"use client";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonalData from "components/profile/personalData/personalData";
import Addresses from "components/profile/addresses/addresses";
import { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Profile = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const status = {
    0: <PersonalData />,
    1: <Addresses />,
  };

  return (
    <Container
      maxWidth={"sm"}
      sx={{ overflowY: "auto", height: "calc( 100vh - 150px )", pb: 1, px: 0 }}
    >
      <Card sx={{ display: "flex", flexDirection: "column", px: 2, py: 3 }}>
        <Grid container sx={{ width: "100%" , justifyContent: 'center' }}>
          <Tabs
            sx={{ width: "100%", justifyContent: "center", display: "flex" , '& .MuiTabs-scroller':{
              display: 'flex', justifyContent: 'center'
            } }}
            value={value}
            onChange={handleChange}
          >
            <Tab label="Personal Data" />
            <Tab label="Address" />
          </Tabs>
        </Grid>
        <Grid container justifyContent={"center"} sx={{ mt: 3 }}>
          {status[value]}
        </Grid>
      </Card>
    </Container>
  );
};
export default Profile;
