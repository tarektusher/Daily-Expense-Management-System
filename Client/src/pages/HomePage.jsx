import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import "../../src/Dash.css";
// import authServices from '../services/authServices';
import LeftBar from '../components/LeftBar'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeElement from '../components/HomeElement';

export const HomePage = () => {
  // const location = useLocation();
  // const isUserLoggedIn = authServices.isUserLoggedIn();
  const val = 1;
  return (
    <>
      {/* <LeftBar />
      {isUserLoggedIn? 
      <div>
        {location.pathname === '/'? <DashBoard/>: <Outlet />}
      </div>
      : 
        // <LogoutHomepage/>
        null
      }
       */}
      <Navbar/>
      <LeftBar/>
      {val == 1 ?
          <Outlet/>
      : 
      <Box sx={{display : 'flex'}}  className = "bgColor">
          <HomeElement/>
      </Box>}
      
      
      
    </>
  );
};
