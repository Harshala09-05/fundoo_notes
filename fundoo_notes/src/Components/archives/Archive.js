import {Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import IconButton from "@mui/material/IconButton";
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import CardIcons from '../CardIcons';
import{archiveNote} from '../CardIcons'
// import { getNotes } from '../Services/dataService';
// import { getAllNotes } from '../Pages/dashboard';

const StyledCard = styled(Card)`
     width: 240px;
     margin: 8px;
     box-shadow: none;
     border: 1px solid #e0e0e0;
     border-radius: 8px;
`

export default function Archive({props}) {
    const { notes, displayNotes,archiveNote} =props
    // const { getAllNotes } = useContext(DataContext);
    // useEffect(()=>{
    //     refreshNotes()
    // console.log("notes",notes);
    // }, [])
    
  return (
      <StyledCard>
          <CardContent>
              <Typography>{displayNotes.title}</Typography>
              <Typography>{displayNotes.description}</Typography>
          </CardContent>
          <CardActions>
              <Unarchive
                  fontSize="small"
                  style={{ marginLeft: 'auto'}}
                  onClick={()=>archiveNote()}
              />
              <Delete
                  fontSize="small"
                //   onClick={()=>deleteNote()}
              />
              <IconButton />
              <CardIcons/>
          </CardActions>
    </StyledCard>
  )
}
