import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import toast from 'react-hot-toast';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f3f4',
  '&:focus-within': {
    backgroundColor: 'white',
  },
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: 'black',
  },
  width: '100%',
}));

export default function HeaderBar({ open, handleDrawer, toggleView, searchText, setSearchText }) {
  const [hide, setHide] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showListView = () => {
    setHide(!hide);
    toggleView(hide);
  };

  const navigate = useNavigate();
  
  const onSignOut = () => {
    localStorage.removeItem('token');
    toast(() => (
      <span style={{ display: 'flex', alignItems: 'center' }}><InfoIcon color='primary' />You have Logged Out</span>
    ), { duration: 2000 });
    navigate('/');
  };

  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton onClick={handleDrawer} edge="start" sx={{ marginRight: '20px' }}>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 27, height: 40, marginTop: 1 }} />
        <Heading>Keep</Heading>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flexstart', alignItems: 'center', borderRadius: '10px', padding: '5px', bgcolor: "#f1f3f4", width: '40vw', boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', marginLeft: '4vw' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchText} onChange={(e) => setSearchText(e.target.value)}
            />
          </Search>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end", marginLeft: '30vw' }}>
          <IconButton sx={{ marginRight: '20px' }}>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton sx={{ marginRight: '20px' }}>
            {hide ? <GridViewOutlinedIcon onClick={showListView} /> : <ViewStreamOutlinedIcon onClick={showListView} />}
          </IconButton>
          <IconButton sx={{ marginRight: '20px' }}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="black"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Header>
  );
}
