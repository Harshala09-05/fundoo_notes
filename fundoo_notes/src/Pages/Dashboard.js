import React, { useEffect, useState } from "react";
import TakeNoteOne from "../Components/TakeNoteOne/TakeNoteOne";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataProvider";

import SwipeDrawer from "../Components/SwipeDrawer";
import { getNotes } from "../Services/dataService";
import TakeNoteThree from "../Components/TakeNoteThree/TakeNoteThree";
export default function Dashboard() {
  const [displayNotes, setDisplayNotes] = useState([
    {
      title: "",
      description: "",
      color: "",
      isArchived: false,
      isDeleted: false,
    },
  ]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let response = await getNotes();
    if (tab === "Notes") {
      let data = response.data.data.data.filter(
        (val) => val.isArchived === false && val.isDeleted === false
      );

      setDisplayNotes(data);
    } else if (tab === "Archive") {
      let data = response.data.data.data.filter(
        (val) => val.isArchived === true && val.isDeleted === false
      );

      setDisplayNotes(data);
    }
    setDisplayNotes(response.data);
    console.log("Data", response);
  };
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer />
      <TakeNoteOne displayNotes={displayNotes} getAllNotes={getAllNotes} />
      {/* console.log(notes); */}
      {/* {notes.map((notes) => ( */}
      {/* <TakeNoteThree key={notes.id} notes={notes} refreshNotes={getAllNotes} /> */}
      {/* ))} */}
    </Box>
  );
}
