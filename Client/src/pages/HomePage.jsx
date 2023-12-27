import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography} from '@mui/material';
import "../../src/Dash.css";
import authServices from '../services/authServices';
import LeftBar from '../components/LeftBar'
import Navbar from '../components/Navbar';
import HomeElement from '../components/HomeElement';
import DashBoard from '../components/DashBoard'
import LogoutHomepage from '../components/LogoutHomepage'
export const HomePage = () => {
  const location = useLocation();
  const isUserLoggedIn = authServices.isUserLoggedIn();
  const val = 1;
  return (
    <>
      <Navbar />
      {isUserLoggedIn? 
      <div>
        <LeftBar/>
        {location.pathname === '/'? <DashBoard/>: <Outlet />}
      </div>
      : 
        <LogoutHomepage/>
      }
    </>
  );
};
