import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar,Toolbar,Typography,IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left:25px;
`;




export default function HeaderBar({ open, handleDrawer,toggleView }) {
  const [hide, setHide] = useState(true);
  let showListView = () => {
    setHide(!hide);
    console.log(hide)
    toggleView(hide);
}

    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
    <Header  open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{ marginRight: '20px'}}
        >
          <MenuIcon />
              </IconButton>
        <img src={logo} alt="logo" style={{ width: 27, height: 40 , marginTop: 1 }}></img>
        <Heading>
          Keep
        </Heading>
        {/* <div>
          <div>
          <IconButton style={{ color: "#424242", marginRight: "10px" }} >
             <SearchOutlinedIcon />
          </IconButton>
          </div>
          <div>
           <TextField  id="search-box"
                   label="Search"
                       variant="outlined"
              style={{ width: 700, height: 6, display: "flex",flexDirection:'column', marginLeft: 80, marginBottom: 42, backgroundColor: "#d3d3d3" }} />
          </div>
        </div> */}
        <TextField  id="search-box"
                   label="Search"
                       variant="outlined"
              style={{ width: 700, height: 6, display: "flex", marginLeft: 80, marginBottom: 42, backgroundColor: "#d3d3d3" }} />
        <div style={{ display:"flex",justifyContent:"end" }}>
        <IconButton
          sx={{ marginRight: '20px',marginLeft:'20vw'}}
        >
          <RefreshOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ marginRight: '20px'}}
        >    
            {hide ? <GridViewOutlinedIcon onClick={showListView} /> : <ViewStreamOutlinedIcon onClick={showListView}/>}
            {/* {hide? <ViewStreamOutlinedIcon /> : <GridViewOutlinedIcon />} */}
              </IconButton>
              <IconButton
          sx={{ marginRight: '20px'}}
        >
                  <SettingsOutlinedIcon />
              </IconButton>
        </div>
        
      </Toolbar>
    </Header>
  );
}
