import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { myAddressesSelector } from "store/slices/userSlices";
import React from "react";
import { useSelector } from "react-redux";

const AddressList = () => {
  const addresses = useSelector(myAddressesSelector);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Grid container direction="column" sx={{ px: 1  }}>
      <List component="nav" aria-label="main mailbox folders">
        {addresses.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            key={item.id}
            sx={{ border: "1px solid lightGray", borderRadius: "15px", mt: 1 }}
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={item.street} />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
};

export default AddressList;
