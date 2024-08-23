import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {LightbulbOutlined as Lightbulb,ArchiveOutlined as Archive,DeleteOutlined as Delete} from '@mui/icons-material';
import List from '@mui/material/List';
// import { Link } from 'react-router-dom';



export default function NavList({ open, handleDrawer }) {
  const NavList = [
    { id: 1, name: 'Notes', icon: <Lightbulb /> },
    { id: 1, name: 'Archive', icon: <Archive/> },
    { id: 1, name: 'Trash', icon:  <Delete/>}
  ]
  return (
    <List>
       {
            NavList.map(list => (
                <ListItem button key={list.id}>
                    {/* <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}> */}
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    {/* </Link> */}
                </ListItem>
            ))
        }
  </List>
  )
}
