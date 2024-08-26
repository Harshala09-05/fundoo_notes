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
// import { Link } from 'react-router-dom';



export default function NavList({ open, handleDrawer }) {
  const [tab, setTab] = useState("Notes")
  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb /> },
    { id: 2, name: 'Archive', icon: <Archives/> },
    { id: 3, name: 'Trash', icon:  <DeleteNotes/>}
  ]
  selectTab = () => {
    setTab()
  }
  return (
    <List>
       {
            navList.map(list => (
                <ListItem button key={list.id}> // add onClick
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
