import React from "react";
import { Box, TextField, ClickAwayListener, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createNotes } from "../../Services/dataService";

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

export default function TakeNoteTwo() {
  const [notes , setNotes] = useState({
    title: "",
    description: "",
    color: "",
    isArchived: false,
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  };

  //   const onTextAreaClick = () => {
  //     setShowTextField(true);
  //     containerRef.current.style.minHeight = '70px'
  //   };

  //     const handleClickAway = () => {
  //       setShowTextField(false);
  //       containerRef.current.style.minHeight = '30px'
  //       setAddNote({ ...note, id: uuid() });

  //       if (addNote.heading || addNote.text) {
  //         setNotes(prevArr => [addNote, ...prevArr]);
  //         console.log(notes);
  //       }

  //   }

  const createNote = async () => {
    let response = await createNotes(notes);
    console.log("Repsonse", response);
  };

  return (
    // <ClickAwayListener onClickAway={handleClickAway}>
    <Container>
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
      />
      <Button onClick={createNote}>Cancel</Button>
    </Container>
    // </ClickAwayListener>
  );
}
