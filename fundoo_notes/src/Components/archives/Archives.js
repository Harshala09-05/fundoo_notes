import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState, useEffect } from "react";
import { getNotes } from "../../Services/dataService";

//component
// import TakeNoteTwo from "../TakeNoteTwo/TakeNoteTwo";
import Archive from "../archives/Archive";
import { createNotes } from "../../Services/dataService";
import {archiveNotes} from '../CardIcons'
// import EmptyNotes from "../Notes/EmptyNotes";
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';

import DataProvider, { DataContext } from "../../context/DataProvider";
// const [archiveNotes, setArchiveNotes] = useState([]);
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function Archives(props) {
  const {archiveNotes } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Grid container style={{ marginTop: 16 }}>
          
            {archiveNotes.data.data.map((archive) => (
              <Archive
                key={archive.id}
                archive={archive}
                displayNotes={archive}
              />
            ))}
          </Grid>
       
        

        {/* <TakeNoteThree/> */}
      </Box>
    </Box>
  );
}
