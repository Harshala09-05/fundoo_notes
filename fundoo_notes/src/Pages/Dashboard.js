import React, { useEffect, useState } from "react";
import TakeNoteOne from "../Components/TakeNoteOne/TakeNoteOne";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { tab } from '../Components/NavList';
import SwipeDrawer from "../Components/SwipeDrawer";
import { getNotes } from "../Services/dataService";
import TakeNoteThree from "../Components/TakeNoteThree/TakeNoteThree";
export default function Dashboard() {
  // const { tab } = props;
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("Notes")
  const [displayNotes, setDisplayNotes] = useState([
    {
      title: "",
      description: "",
      color: "",
      isArchived: false,
      isDeleted: false,
    },
  ]);
  const toggleView = (hide) => {
    setHide(!hide);
 }
  const [noteColor, setNoteColor] = useState("");
  useEffect(() => {
    getAllNotes();
    console.log(" Tab:",tab, noteColor);
  }, [tab,noteColor]);

  const getAllNotes = async () => {
    let response = await getNotes();
    console.log(tab);
    let data = response.data.data.data;
    let filterData;
    if (tab === "Notes") {
      
       filterData = data.filter(
        (val) => val.isArchived === false && val.isDeleted === false
      );
      // console.log(data);
      console.log(filterData);
      setDisplayNotes(filterData);
    }
  
  else if (tab === "Archive") {
     filterData = data.filter(
      (val) => val.isArchived === true && val.isDeleted === false
    );
    // console.log(data);
    console.log(filterData);
    setDisplayNotes(filterData);
  }
     else if (tab === "Trash") {
     filterData = data.filter(
        (val) => val.isArchived === false && val.isDeleted === true
      );
      console.log(filterData);
      setDisplayNotes(filterData);
    } else {
      console.log("Not in list");
    }
    setDisplayNotes(filterData);
    console.log("Data", displayNotes);
  };

  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer tab={tab} setTab={setTab} toggleView={toggleView} />
      <TakeNoteOne tab={tab} setTab={setTab} displayNotes={displayNotes} getAllNotes={getAllNotes} setNoteColor={setNoteColor} noteColor={noteColor} toggleView={toggleView} hide={hide} />
      {/* console.log(notes); */}
      {/* {notes.map((notes) => ( */}
      {/* <TakeNoteThree key={notes.id} notes={notes} refreshNotes={getAllNotes} /> */}
      {/* ))} */}
    </Box>
  );
}
