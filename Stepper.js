import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled,StepConnector,createTheme } from '@mui/material';



const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    }
  },
  typography: {
    fontFamily: 'poppins',
    fontSize: 16
  },
  Stepper
  
  
})

const CustomStepConnector = styled(StepConnector)({
  '& 	.MuiStepConnector-root':{
    borderTopWidth: 3,
  },
  '& .MuiStepConnector-line':{
    borderColor: '#EDEDED',
    borderTopWidth: 2,
    
      },
      '&.Mui-active':{
        '& .MuiStepConnector-line':{
          borderColor: '#DA0037',
            },
      },
  
    '&.Mui-completed':{
      '& .MuiStepConnector-line':{
        borderColor: '#DA0037',
          },
    },

});


export default function CustomStepper({TransitionTimeout = 2000}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleReset = () => {
    setActiveStep(0);
  };

  const NextStepController = setTimeout(() => {
    if(activeStep < steps.length-1){
      setActiveStep(activeStep+1);
    }
    else{
      setActiveStep(0);
    }
  },TransitionTimeout);
  React.useEffect(() => {
  
    return () => {
      clearInterval(NextStepController);
    };
  }, [NextStepController]);
  

  
  return (
    // <ThemeProvider theme={theme}>
  <Box sx={{ width: '90%' , padding:10,height:'100%vh', backgroundColor:'#171717'}}>
      <Stepper activeStep={activeStep} alternativeLabel 
      connector={<CustomStepConnector />}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps} 
             sx={{
          '& .MuiStepIcon-root ': {
          color: '#444444', 
          },

          '& .MuiStepIcon-text': {
            fill: 'white', 
          },

          '& .MuiStepLabel-root .MuiStepLabel-alternativeLabel':
            {
              color: '#444444', 
            },

          '& .MuiStepLabel-root .Mui-completed': {
            color: '#EDEDED', 
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: '#EDEDED', 
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#DA0037', 
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: '#DA0037',
            },

          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', 
          },
        }}
            >
              <StepLabel {...labelProps} 
              >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </Box> 

  );
}