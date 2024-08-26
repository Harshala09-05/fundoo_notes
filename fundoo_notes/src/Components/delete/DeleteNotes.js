// import React from "react";
// import { Box, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { useContext, useState, useEffect } from "react";
// import { getNotes } from "../../Services/dataService";

// //component
// import DeleteNote from "../delete/DeleteNote";
// import { createNotes } from "../../Services/dataService";
// import {deletedNotes} from '../CardIcons'

// // import Note from './Note';
// // import EmptyNotes from './EmptyNotes';

// import DataProvider, { DataContext } from "../../context/DataProvider";
// import NavList from "../NavList";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));
// export default function DeleteNotes(props) {
//   const { displayNotes,getAllNotes ,deletedNotes} = props;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//               <DrawerHeader />
              
//           <Grid container style={{ marginTop: 16 }}>
          
//             {deletedNotes.data.data.map((notes) => (
//               <DeleteNote
//                 key={notes.id}
//                 notes={notes}
//                 deletedNotes={notes}
//               />
//             ))}
//           </Grid>
       
//         {/* <TakeNoteThree/> */}
//       </Box>
//     </Box>
//   );
// }
