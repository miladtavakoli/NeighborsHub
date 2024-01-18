import Modal from "components/modal/modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useInputHandler } from "hooks/useInputHandler";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileUploaderList from "components/fileUploaderList/fileUploaderList";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { myAddressesSelector } from "store/slices/userSlices";
import { useState, useEffect } from "react";
import MenuList from "@mui/material/MenuList";
import AddressList from "components/profile/addresses/addressList";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { createPost } from "store/actions/postsActions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const CreatePostModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const title = useInputHandler("");
  const description = useInputHandler("");
  const addresses = useSelector(myAddressesSelector);
  const [selectedAddress, setSelectedAddress] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setSelectedAddress(addresses.find((item) => item.is_main_address));
  }, [addresses]);

  const [addressListModalOpen, setAddressListModalOpen] = useState(false);

  const handleListItemClick = (item) => {
    setSelectedAddress(item);
    setAddressListModalOpen(false);
  };

  const handleSubmit = () => {
    dispatch(
      createPost({
        title: title.value,
        body: description.value,
        address_id: selectedAddress.id,
        medias: [],
      })
    ).then(() => {
      enqueueSnackbar("Post Created Successfuly", { variant: "success" });
      handleClose();
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Grid container direction={"column"}>
        <Typography variant="h6" textAlign={"center"}>
          Create Post
        </Typography>
        <TextField {...title} sx={{ mt: 2 }} label="Title" />
        <TextField
          {...description}
          multiline
          minRows={3}
          sx={{ mt: 2 }}
          label="Description"
        />
        {addresses.length > 1 && (
          <TextField
            multiline
            sx={{ mt: 2, cursor: "pointer" }}
            label="Address"
            onClick={() => setAddressListModalOpen(true)}
            value={selectedAddress?.street}
          />
        )}
        <Grid sx={{ mt: 2 }}>
          <FileUploaderList />
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      <Modal
        open={addressListModalOpen}
        onClose={() => setAddressListModalOpen(false)}
      >
        <Typography textAlign={"center"}>Choose Your Address</Typography>
        <List component="nav" aria-label="main mailbox folders">
          {addresses.map((item, index) => (
            <Grid
              container
              key={item.id}
              sx={{ flexWrap: "nowrap", cursor: "pointer" }}
            >
              <ListItemButton
                selected={item.id === selectedAddress?.id}
                onClick={() => handleListItemClick(item)}
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  mt: 1,
                }}
              >
                <Typography>{item.street}</Typography>
              </ListItemButton>
            </Grid>
          ))}
        </List>
      </Modal>
    </Modal>
  );
};

export default CreatePostModal;
