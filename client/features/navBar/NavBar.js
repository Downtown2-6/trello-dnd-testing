import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { logout } from '../auth/authSlice';



const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/signup');
  };

  const id = useSelector((state) => state.auth.me.cartId);
  const user = useSelector((state) => state.auth.me)
  const email = useSelector((state) => state.auth.me.email)


  return (
    <>
          {isLoggedIn ? (
          <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Diversity2Icon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate(`/home`)}>
              Trell-O
            </Typography>
            <Button color="inherit" onClick={() => navigate(`/calendar`)}>My Calendar</Button>
            <Button color="inherit" onClick={() => logoutAndRedirectHome()}>Logout</Button>
          </Toolbar>
        </AppBar>
        ) : (
          <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Diversity2Icon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate(`/home`)}>
        Trell-O
      </Typography>
      <Button color="inherit" onClick={() => navigate(`/login`)}>Login</Button>
      <Button color="inherit" onClick={() => navigate(`/signup`)}>Sign UP</Button>
    </Toolbar>
  </AppBar>
        )}
    </>
    

  );
};

export default Navbar;
