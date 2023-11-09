import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import "../../src/Dash.css";
// import authServices from '../services/authServices';
import LeftBar from '../components/LeftBar'
import { Outlet } from 'react-router-dom';
export const HomePage = () => {
  // const location = useLocation();
  // const isUserLoggedIn = authServices.isUserLoggedIn();
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
          <LeftBar/>
          {/* <Typography variant='h1'>Home</Typography> */}
          <Outlet></Outlet>
       </Box>
      
    </>
  );
};
