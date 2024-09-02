import {Card, CardActions, CardContent, Typography,Grid } from '@mui/material'
import React, { useEffect ,useState} from 'react';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Container,TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import CardIcons from '../CardIcons';
import { updateNotes } from '../../Services/dataService';
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
  const { notes, displayNotes, noteId, updateColor, setNoteColor, noteColor, toggleView, hide, tab,getAllNotes,setNotes } = props
  const [open, setOpen] = useState(false);
  const [localNotes, setLocalNotes] = useState(notes);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const UpdateNote = async () => {
    let response = await updateNotes(localNotes);
    console.log("Repsonse", response);
    response.status === 200 && getAllNotes();
    // getAllNotes();
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setLocalNotes({
      ...localNotes,
      [e.target.name]: e.target.value,
    });
  };
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


<>
<Grid item xs={{ backgroundColor: `${notes.color}`, height: hide ? 'auto' : '100%' }} onClick={handleOpen} key={notes.id}>
<StyledCard style={{ backgroundColor: `${notes.color}`}} onClick={handleOpen}>
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

<Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px'}}>
        <Container>
          
            <TextField
              placeholder="Title"
              id="title"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              style={{ marginBottom: 10 }}
              name="title"
              value={localNotes.title}
              onChange={(e) => onChangeHandler(e)}
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
            value={localNotes.description}
           
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <CardIcons />
            <Button
              variant="text"
              onClick={UpdateNote}
              sx={{ width: '50px', height: '30px' }}
            >
              Close
            </Button>
          </Box>
        </Container>
      </Box>
    </Modal>
</>

  )
}
