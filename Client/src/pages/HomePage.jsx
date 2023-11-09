import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import "../../src/Dash.css";
import  Navbar  from '../components/Navbar';
import DashBoard from '../components/DashBoard';
import authServices from '../services/authServices';
import LogoutHomepage from '../components/LogoutHomepage';
import LeftBar from '../components/LeftBar'
export const HomePage = () => {
  const location = useLocation();
  const isUserLoggedIn = authServices.isUserLoggedIn();
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
       <Box sx={{ display: 'flex' }}>
          <LeftBar></LeftBar>
          <Typography variant='h1'>Home</Typography>
          
       </Box>
      
    </>
  );
};
