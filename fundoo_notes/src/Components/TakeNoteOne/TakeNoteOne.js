import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState, useEffect } from "react";
import { getNotes } from "../../Services/dataService";
import CircularProgress from '@mui/material/CircularProgress';

//component
import TakeNoteTwo from "../TakeNoteTwo/TakeNoteTwo";
import TakeNoteThree from "../TakeNoteThree/TakeNoteThree";
import { createNotes } from "../../Services/dataService";
import EmptyNotes from "../Notes/EmptyNotes";
import NavList from "../NavList";
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';

import DataProvider, { DataContext } from "../../context/DataProvider";
import EditLabel from "../EditLabel";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function TakeNoteOne(props) {
  const { displayNotes, getAllNotes, tab, name, setNoteColor, noteColor, toggleView, hide } = props;
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    color: "",
    isArchived: false,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      await getAllNotes(); // Fetch notes
      setLoading(false);
    };

    fetchNotes();
  }, [getAllNotes]);
// console.log("data in t3--------",displayNotes);
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <TakeNoteTwo getAllNotes={getAllNotes} /> */}
        {/* {tab === 'Notes' && <TakeNoteTwo getAllNotes={getAllNotes} />} */}
        {(tab === 'Notes' || tab === 'Edit Labels') && <TakeNoteTwo getAllNotes={getAllNotes} setNotes={setNotes} notes={notes}/>}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        {tab === 'Edit Labels' && <EditLabel/>}
        </div>
        {/* {tab === 'Edit Labels' && <EditLabel/>} */}

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <CircularProgress />
          </Box>
        ) : displayNotes?.length > 0 ? (
          <Grid container spacing={2} style={{ marginTop: 16 }}>
            {displayNotes.map((note) => (
              <Grid item xs={hide ? 12 : 3} key={note.id}>
                <TakeNoteThree
                  notes={note}
                  setNotes={setNotes}
                  displayNotes={note}
                  setNoteColor={setNoteColor}
                  noteColor={noteColor}
                  tab={tab}
                  toggleView={toggleView}
                  hide={hide}
                  getAllNotes={getAllNotes}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
}
