import { useState } from "react";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const FileUploaderList = () => {
  const [files, setFiles] = useState([]);

  const handleAddFileToList = (e) => {
    setFiles((prevState) => [...prevState, ...e.target.files]);
  };

  return (
    <Grid container>
      {files.map((item, index) => (
        <UploadedFileThumbnail file={item} key={index} />
      ))}
      <FileUploader handleAddFile={handleAddFileToList} />
    </Grid>
  );
};

const FileUploader = ({ handleAddFile }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        border: "1px dashed lightGray",
        borderRadius: "10px",
        width: "70px",
        height: "70px",
        position: "relative",
        cursor: "pointer",
        m: 1,
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <input
        type="file"
        onChange={handleAddFile}
        style={{
          width: "100%",
          height: "100%",
          opacity: "0",
          zIndex: "10",
          cursor: "pointer",
        }}
        multiple
      />
      <AddIcon
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          fontSize: "36px",
          color: "gray",
          cursor: "pointer",
        }}
      />
    </Grid>
  );
};

const UploadedFileThumbnail = ({ file }) => {
  const lastIndex = file.name.lastIndexOf(".");
  const fileType = file.name.slice(lastIndex + 1);
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        border: "1px dashed lightGray",
        borderRadius: "10px",
        width: "70px",
        height: "70px",
        position: "relative",
        m: 1,
      }}
    >
      <Typography>{fileType}</Typography>
      {/* <img src={file} alt="name123" /> */}
    </Grid>
  );
};

export default FileUploaderList;
