import React, { useState } from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Popover, Box } from "@mui/material";
import { archieveData, trashNotes, updateColor } from "../Services/dataService";


export default function CardIcons(props) {
  const { noteId, displayNotes, setNoteColor } = props;
  // const { setArchiveNotes } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const colors = ["#2ECC71", "#AF7AC5", "#ffffff", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8"];

  const handleColorClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleColorClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-popover' : undefined;

  const selectColor = async (color) => {
    await updateColor({ noteIdList: [noteId], color: color });
    setNoteColor(color)
    handleColorClose();
  };

  const archiveNote = async () => {
    await archieveData({ noteIdList: [noteId], isArchived: true });
  };

  const deleteNote = async () => {
    await trashNotes({ noteIdList: [noteId], isDeleted: true });
  };

  return (
    <div style={{ display: "flex", justifyContent: "start", marginTop: "8px", marginRight: "40px", width: "20vw" }}>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <AddAlertOutlinedIcon />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <PersonAddAltOutlinedIcon />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }} onClick={handleColorClick}>
        <ColorLensOutlinedIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleColorClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ display: 'flex', padding: '5px' }}>
          {colors.map((color, index) => (
            <IconButton
              key={index}
              style={{ backgroundColor: color, margin: '2px' }}
              onClick={() => selectColor(color)}
            />
          ))}
        </Box>
      </Popover>
      <IconButton style={{ color: "#424242" }} onClick={deleteNote}>
        <DeleteOutlineOutlined />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }} onClick={archiveNote}>
        <ArchiveOutlined />
      </IconButton>
    </div>
  );
}
