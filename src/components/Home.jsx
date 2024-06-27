import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from '../theme';
import Header from './Header';

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Header title={"Welcome Home (Sanitarium)"} subtitle={"Dashboard v2"} />
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          React Admin Dashboard Tutorial from scratch by Ed Roh.<br/> <br/>  
          Using ReactJS, Material UI, Nivo Charts, <br/>  
          Formik, Yup, FullCalendar and Data Grid <br/> 
           to build this entire application.<br/>  
          
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
        <br/> This application consists of Light and Dark Mode, 4 different Charts,<br/> 
          3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.<br/> 
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
        <br/> Follow the dev: <br/> 
          Youtube: <a href="https://www.youtube.com/@EdRohDev">@EdRohDev</a><br/>
          Github: <a href="https://github.com/ed-roh">github.com/ed-roh</a> 
        </Typography>
        </Box>        
    </div>
  )
}

export default Home