import {Card, CardActions, CardContent, Typography,Grid } from '@mui/material'
import React, { useEffect ,useState} from 'react';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import IconButton from "@mui/material/IconButton";
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import CardIcons from '../CardIcons';
// import { updateColor } from '../Services/dataService';
// import { getAllNotes } from '../Pages/dashboard';

const StyledCard = styled(Card)`
     width: 262px;
     margin: 8px;
     box-shadow: none;
     border: 1px solid #e0e0e0;
     border-radius: 8px;
`

export default function TakeNoteThree(props) {
    const { notes, displayNotes, noteId, updateColor,setNoteColor,noteColor,toggleView,hide,tab } = props
     // Default color is white
    // console.log("t3--------------------------------->>>>", displayNotes
    // );
    
    // useEffect(() => {
    //     console.log("color",noteColor)
    // },[noteColor])
    
    // const newColor = () => {
    //   props.getAllNotes();
    // };
    // const { getAllNotes } = useContext(DataContext);
    // useEffect(()=>{
    //     refreshNotes()
    // console.log("notes",notes);
    // }, [])
    
  return (
    //   <StyledCard style={{backgroundColor: `${displayNotes.color}`}}>
    //       <CardContent>
    //           <Typography>{displayNotes.title}</Typography>
    //           <Typography>{displayNotes.description}</Typography>
    //       </CardContent>
    //       <CardActions>
    //           {/* <Archive
    //               fontSize="small"
    //               style={{ marginLeft: 'auto'}}
    //               onClick={()=>archiveNote()}
    //           />
    //           <Delete
    //               fontSize="small"
    //               onClick={()=>deleteNote()}
    //           /> */}
    //           <IconButton />
    //           <CardIcons  sx={{ width:'2fw' }} noteId={displayNotes.id} setNoteColor={setNoteColor}/>
    //       </CardActions>
    // </StyledCard>



<Grid item xs={hide ? 12 : 4} key={notes.id}>
<StyledCard style={{ backgroundColor: `${notes.color}`}}>
<CardContent>
 <Typography variant="h6">{notes.title}</Typography>
 <Typography variant="body1">{notes.description}</Typography>
</CardContent>
<CardActions>
 <IconButton />
 <CardIcons noteId={notes.id} setNoteColor={setNoteColor} tab={tab} isArchived={notes.isArchived} isDeleted={notes.isDeleted}  />
</CardActions>
</StyledCard>
</Grid>



  )
}
