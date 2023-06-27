import React from 'react'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';



const Header: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', margin: 5 }}>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Paper elevation={6}>
                    <Typography variant="h1" gutterBottom>
                        Hi, I'm Gilbert ☕
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        I'm a Software Enginner student, I'm interested in everything related to technology and sotfware development.
                    </Typography>
                </Paper>
            </Zoom>
        </Box >
    )
}

export default Header