import React from "react";
import { Box, TextField, ClickAwayListener, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
// import image from '.\src\Assets\image.png';
import { v4 as uuid } from "uuid";
import { createNotes, getNotes } from "../../Services/dataService";
import {  DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import CardIcons from "../CardIcons";

// import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 30px;
  margin-left: 25vw;
  margin-top: ;
`;
// const note = {
//   id: '',
//   heading: '',
//   text: ''
// }

export default function TakeNoteTwo(props) {
  const { getAllNotes,notes,setNotes } = props
  const [showTextField, setShowTextField] = useState(false);
  const [addNote,setAddNote]= useState({})
  // const [notes, setNotes] = useState({
  //   title: "",
  //   description: "",
  //   color: "",
  //   isArchived: false,
  // });


  const onChangeHandler = (e) => {
    e.preventDefault();
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    // containerRef.current.style.minHeight = '70px'
  };

  const handleClickAway = () => {
    setShowTextField(false);
  
    // containerRef.current.style.minHeight = '30px'
    // setAddNote({ ...note, id: uuid() });

        if (addNote.tile || addNote.description) {
          setNotes(prevArr => [addNote, ...prevArr]);
          console.log(notes);
        }

    }
  


    const createNote = async () => {
      let response = await createNotes(notes);
      console.log("Repsonse", response);
      response.status === 200 && getAllNotes();
      // getAllNotes();
    };

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container>
          {showTextField &&
            <TextField
              placeholder="Title"
              id="title"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              style={{ marginBottom: 10 }}
              onChange={(e) => onChangeHandler(e)}
              name="title"
              value={notes.title}
            />
          }
          <TextField
            placeholder="Take a note..."
            multiline
            maxRows={Infinity}
            variant="standard"
            id="description"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => onChangeHandler(e)}
            name="description"
            value={notes.description}
            onClick={onTextAreaClick}
          />

          {/* <image/> */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <CardIcons />
            <Button
              variant="text"
              onClick={createNote}
              sx={{ width: '50px', height: '30px' }}
            >
              Close
            </Button>
          </Box>
          {/* <Button onClick={createNote} width="10px" height='10px' >Cancel</Button> */}
        </Container>
      </ClickAwayListener>
    );
  }

