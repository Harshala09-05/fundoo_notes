import React, { useState } from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Popover, Box } from "@mui/material";
import { archieveData, trashNotes, updateColor,archieveList, deleteForever } from "../Services/dataService";
import { DeleteForever } from "@mui/icons-material";


export default function CardIcons(props) {
  const { noteId, displayNotes, setNoteColor,tab,isArchived,isDeleted } = props;
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
//     console.log("Note ID List:", noteIdList);
// console.log("Color:", selectColor);
  };

  const archiveNote = async (props) => {
  console.log(tab);
    await archieveData({ noteIdList: [noteId], isArchived: true });
  };
 
  const unarchiveNote = async () => {
    await archieveData({ noteIdList: [noteId], isArchived: false });
  };
  const deleteNote = async () => {
    await trashNotes({ noteIdList: [noteId], isDeleted: true });
  };
  const restoreDelete = async () => {
    await trashNotes({ noteIdList: [noteId], isDeleted: false });
  };
  const DeleteForeverNote = async () => {
    await deleteForever({ noteIdList: [noteId], isDeleted: false });
  };

  return (
    <div style={{ display: "flex", justifyContent: "start", marginTop: "8px", marginRight: "40px", width: "20vw" ,marginLeft: '-7px'}}>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <AddAlertOutlinedIcon />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}  onClick={() => (isArchived ? unarchiveNote() : archiveNote())}
      >
        {isArchived ? (
          <UnarchiveOutlinedIcon fontSize="12px" />
        ) : (
          <ArchiveOutlined fontSize="12px" />
        )}
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
      <IconButton style={{ color: "#424242" }} onClick={() => (isDeleted ? restoreDelete() : deleteNote() )}
      >
        {isDeleted ? (
          <RestoreFromTrashIcon fontSize="12px" />
        ) : (
          <DeleteOutlineOutlined fontSize="12px" />
        )}
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}  onClick={() => (isDeleted ? DeleteForeverNote() : null )}
      >
        {isDeleted ? (
          <DeleteForeverIcon fontSize="12px" />
        ) : (
          <PersonAddAltOutlinedIcon fontSize="12px" />
        )}
      </IconButton>
      {/* <IconButton style={{ color: "#424242", marginRight: "10px" }}  onClick={() => (isArchived ? unarchiveNote() : archiveNote())}
      >
        {isArchived ? (
          <UnarchiveOutlinedIcon fontSize="12px" />
        ) : (
          <ArchiveOutlined fontSize="12px" />
        )}
      </IconButton> */}
    </div>
  );
}
