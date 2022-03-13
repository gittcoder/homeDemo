import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
import { createTheme } from '@mui/material/styles';
import { green, purple,gray } from '@mui/material/colors';
import Box from '@mui/material/Box'


const theme = createTheme({
  palette: {
    primary: {
      main: '#696969',
    },
    secondary: {
      main: green[500],
    },
  },
  
});

const StyledAlert = styled(Alert)({
  '.MuiAlert-icon':
  {
    color:'#DA0037'
  },

  '&:hover': 
  {
    border:'2px solid #DA0037',
    color:'#DA0037'
  },

  ".MuiAlert-filledWarning":{
    backGroundColor:"#DCDCDC",
  },
  ".MuiAlert-outlinedError":{
    BackgroundColor:"#ADCDA"
  }

 
});


export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <Box
      sx={{height:"10vh"}}>
      <StyledAlert variant="d" color="error" sx={{
        width: "50vw",
        height: "5vh",
        border:"2px solid #DCDCDC",
        color:"#DCDCDC",
        
        
      }}>We are recruiting!!!!</StyledAlert>
      </Box>
    </ThemeProvider>
  );
}