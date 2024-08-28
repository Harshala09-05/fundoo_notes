import React, { useEffect, useState } from "react";
import TakeNoteOne from "../Components/TakeNoteOne/TakeNoteOne";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { tab } from '../Components/NavList';
import SwipeDrawer from "../Components/SwipeDrawer";
import { getNotes } from "../Services/dataService";
import TakeNoteThree from "../Components/TakeNoteThree/TakeNoteThree";
export default function Dashboard({ tab }) {
  // const { tab } = props;
  const [displayNotes, setDisplayNotes] = useState([
    {
      title: "",
      description: "",
      color: "",
      isArchived: false,
      isDeleted: false,
    },
  ]);

  const [noteColor, setNoteColor] = useState("");
  useEffect(() => {
    getAllNotes();
    console.log(" Tab:",tab, noteColor);
  }, [tab,noteColor]);

  const getAllNotes = async () => {
    let response = await getNotes();
    // console.log(tab);
    if (tab === "Notes") {
      let data = response.data.data.data.data.filter(
        (val) => val.isArchived === false && val.isDeleted === false
      );
      //  console.log(data)
      setDisplayNotes(data);
    } else if (tab === "Archive") {
      let data = response.data.data.data.data.filter(
        (val) => val.isArchived === true && val.isDeleted === false
      );

      setDisplayNotes(data);
    } else if (tab === "Trash") {
      let data = response.data.data.data.data.filter(
        (val) => val.isArchived === false && val.isDeleted === true
      );

      setDisplayNotes(data);
    } else {
      console.log("Not in list");
    }
    setDisplayNotes(response.data);
    console.log("Data", response);
  };

  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer />
      <TakeNoteOne displayNotes={displayNotes} getAllNotes={getAllNotes} setNoteColor={setNoteColor} noteColor={noteColor} />
      {/* console.log(notes); */}
      {/* {notes.map((notes) => ( */}
      {/* <TakeNoteThree key={notes.id} notes={notes} refreshNotes={getAllNotes} /> */}
      {/* ))} */}
    </Box>
  );
}
