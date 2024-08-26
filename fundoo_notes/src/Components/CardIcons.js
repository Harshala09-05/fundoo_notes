import React, { useState } from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { archieveData, trashNotes } from "../Services/dataService";

export default function CardIcons(props) {
  const { displayNotes = [], setDisplayNotes, noteId } = props;
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  const archiveNote = async () => {
    console.log("value", noteId);

    // displayNotes.filter((data) => {
    //   if (data.id === noteId) {
        // setArchiveNotes({noteIdList: [noteId], isArchived: true });
      // }
    // });

    let response = await archieveData({noteIdList: [noteId], isArchived: true });
    console.log("Response", response);
  };

  const deleteNote = async () => {
    
    let response = await trashNotes({noteIdList: [noteId], isDeleted: true });
    console.log("Response", response);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        marginTop: "8px",
        marginRight: "40px",
        width: "20vw",
      }}
    >
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <AddAlertOutlinedIcon />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <PersonAddAltOutlinedIcon />
      </IconButton>
      <IconButton style={{ color: "#424242", marginRight: "10px" }}>
        <ColorLensOutlinedIcon />
      </IconButton>
      <IconButton
        style={{ color: "#424242" }}
        onClick={deleteNote}
      >
        <DeleteOutlineOutlined />
      </IconButton>
      <IconButton
        style={{ color: "#424242", marginRight: "10px" }}
        onClick={archiveNote}
      >
        <ArchiveOutlined />
      </IconButton>
     
    </div>
  );
}
