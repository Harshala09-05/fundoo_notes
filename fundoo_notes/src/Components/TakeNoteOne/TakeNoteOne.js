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
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';

import DataProvider, { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function TakeNoteOne(props) {
  const { displayNotes,getAllNotes } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TakeNoteTwo getAllNotes={getAllNotes} />

        {displayNotes?.data?.data?.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
          
            {displayNotes.data.data.map((notes) => (
              <TakeNoteThree
                key={notes.id}
                notes={notes}
                displayNotes={notes}
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
