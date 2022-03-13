import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import CustomStepper from './Stepper'
import AlertDemo from './AlertDemo'

const Page = () => {
    return (
        <Box sx={{

            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#171717",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",

        }}>
            <Box component="span" 
            // sx={{ 
            //     display:'flex',
            //     flexDirection:"column",

            //     justifyContent: 'start' 
            //     }}
                >
                <Typography variant="h1" component="h2" sx={{ color: '#EDEDED' }}>
                    WELCOME
                </Typography>
                <Typography variant="h4" component="h4" sx={{ color: '#DA0037' }}>
                    Subtext - VIT DRONE TEAM
                </Typography>
            </Box>

            <CustomStepper />
            {/* <Notes /> */}
            <AlertDemo/>
            <AlertDemo/>
            <AlertDemo/>
            
        </Box>
    )
}

export default Page