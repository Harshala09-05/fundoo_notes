import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar,Toolbar,Typography,IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



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

export default function HeaderBar({ open, handleDrawer }) {
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
        <img src={logo} alt="logo" style={{ width: 27, height: 50 , marginTop: 1 }}></img>
        <Heading>
          Keep
        </Heading>
      </Toolbar>
    </Header>
  );
}
