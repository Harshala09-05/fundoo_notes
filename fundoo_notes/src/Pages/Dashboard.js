import React, { useEffect, useState } from "react";
import TakeNoteOne from "../Components/TakeNoteOne/TakeNoteOne";
import { Box } from "@mui/material";
import SwipeDrawer from "../Components/SwipeDrawer";
import { getNotes } from "../Services/dataService";

export default function Dashboard() {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("Notes");
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [displayNotes, setDisplayNotes] = useState([]);

  const toggleView = (hide) => {
    setHide(!hide);
  };

  const [noteColor, setNoteColor] = useState("");

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        let response = await getNotes();
        let allNotes = response.data.data.data;

        // Apply tab-specific filters
        let filterData;
        if (tab === "Notes" || tab === "Edit Label") {
          filterData = allNotes.filter(
            (val) => val.isArchived === false && val.isDeleted === false
          );
        } else if (tab === "Archive") {
          filterData = allNotes.filter(
            (val) => val.isArchived === true && val.isDeleted === false
          );
        } else if (tab === "Trash") {
          filterData = allNotes.filter(
            (val) => val.isArchived === false && val.isDeleted === true
          );
        } else {
          console.log("Not in list");
          filterData = [];
        }

        // Apply search filter if searchText is present
        if (searchText !== '') {
          filterData = filterData.filter(note =>
            note.title.toLowerCase().includes(searchText.toLowerCase()) ||
            note.description.toLowerCase().includes(searchText.toLowerCase())
          );
        }

        // Update state with the filtered notes
        setDisplayNotes(filterData);
        console.log("Data", filterData);
      } catch (error) {
        console.error("Error fetching notes", error);
      }
    };

    getAllNotes();

    console.log(" Tab:", tab, noteColor);
  }, [tab, noteColor, searchText]);

  const getAllNotes = async () => {
    let response = await getNotes();
    let allNotes = response.data.data.data;
    setData(displayNotes);
  }

  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <SwipeDrawer 
        tab={tab} 
        setTab={setTab} 
        toggleView={toggleView} 
        searchText={searchText} 
        setSearchText={setSearchText} 
      />
      <TakeNoteOne 
        tab={tab} 
        setTab={setTab} 
        displayNotes={displayNotes} 
        getAllNotes={getAllNotes} 
        setNoteColor={setNoteColor} 
        noteColor={noteColor} 
        toggleView={toggleView} 
        hide={hide} 
      />
    </Box>
  );
}
