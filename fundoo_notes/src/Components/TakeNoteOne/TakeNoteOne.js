import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState, useEffect } from "react";
import { getNotes } from "../../Services/dataService";

//component
import TakeNoteTwo from "../TakeNoteTwo/TakeNoteTwo";
import TakeNoteThree from "../TakeNoteThree/TakeNoteThree";
import { createNotes } from "../../Services/dataService";
import EmptyNotes from "../Notes/EmptyNotes";
import NavList from "../NavList";
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';

import DataProvider, { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function TakeNoteOne(props) {
  const { displayNotes,getAllNotes ,tab,name, setNoteColor,noteColor} = props;
console.log("data in t3--------",displayNotes);
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <TakeNoteTwo getAllNotes={getAllNotes} /> */}
        {tab === 'Notes' && <TakeNoteTwo getAllNotes={getAllNotes} />}

        {displayNotes?.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
          
            {displayNotes.map((notes) => (
              <TakeNoteThree
                key={notes.id}
                notes={notes}
                displayNotes={notes}
                setNoteColor={setNoteColor}
                noteColor={noteColor}
              />
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}

        {/* <TakeNoteThree/> */}
      </Box>
    </Box>
  );
}
