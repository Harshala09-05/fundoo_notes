import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {LightbulbOutlined as Lightbulb,ArchiveOutlined as Archive,DeleteOutlined as Delete} from '@mui/icons-material';
import List from '@mui/material/List';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';
import { useState,useEffect} from "react";
// import { Link } from 'react-router-dom';



export default function NavList({ open, handleDrawer }) {
  const [tab, setTab] = useState("Notes")
  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />,route:'/dashboard' },
    { id: 2, name: 'Archive', icon: <Archive/> ,route:'/archive'},
    { id: 3, name: 'Trash', icon:  <Delete/>,route:'/trash'}
  ]
  let selectTab = (name, event, list) => {
    console.log(tab)
    setTab(name);
    // console.log(`${name}`);
    // if (event.key === list.name) {
    //   return;
    // }
  }
  useEffect(() => {
    console.log("Current Tab:", tab);
  }, [tab]);
  
  



  const handleTitleUpdate = (name) => {
    console.log(name)
    
  }

  return (
    <List>
       {
            navList.map(list => (
              <ListItem button key={list.name} to={list.route} onClick={()=>selectTab(list.name)} >
                    {/* <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}> */}
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} onClick={() => handleTitleUpdate(list.name)} />
                    {/* </Link> */}
                </ListItem>
            ))
        }
  </List>
  )
}
