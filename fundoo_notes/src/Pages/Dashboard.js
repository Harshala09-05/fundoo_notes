
import React, { useEffect,useState } from 'react'
import TakeNoteOne from '../Components/TakeNoteOne/TakeNoteOne'
import { Box } from '@mui/material';
import { DataContext } from '../context/DataProvider';

import SwipeDrawer from '../Components/SwipeDrawer';
import { getNotes } from '../Services/dataService';
import TakeNoteThree from '../Components/TakeNoteThree/TakeNoteThree';
export default function Dashboard() {
  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, [])
  
  const getAllNotes = async () => {
    let response = await getNotes()
    setNotes(response.data)
    console.log("Data",response)
  }
  return (
    <Box style={{display: 'flex', width: '100%'}}>
      <SwipeDrawer />
      <TakeNoteOne />
      console.log(notes);
      {/* {notes.map((notes) => ( */}
        <TakeNoteThree key={notes.id} notes={notes} refreshNotes={getAllNotes} />
      {/* ))} */}
    </Box>
  )
}




