import React from 'react'
import {Box, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import { useContext } from 'react';


//component
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree'
import { createNotes } from '../../Services/dataService';
import EmptyNotes from '../Notes/EmptyNotes';
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';

import DataProvider, { DataContext } from '../../context/DataProvider';


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));
export default function TakeNoteOne() {
  // const { notes, setNotes } = useContext(DataContext);
  
  return (
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader/>
        < TakeNoteTwo />
        {/* {
          notes.length > 0?
        
        <Grid container style={{ marginTop: 16 }}>
        {
          notes.map(map => (
            <Grid item>
               <TakeNoteThree notes={notes} />
            </Grid>
          ))
        }
        </Grid>
        :<EmptyNotes/>
        } */}
              
              
        </Box>  

    </Box>
  )
}
