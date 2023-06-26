import React from 'react'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
const Header: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', margin: 5 }}>
            <Paper elevation={6}>
                <Typography variant="h1" gutterBottom>
                    Hi, I'm Gilbert ☕
                </Typography>
                <Typography variant="h4" gutterBottom>
                    I'm a Software Enginner student, I'm interested in everything related to technology and sotfware development.
                </Typography>
            </Paper>
        </Box>
    )
}

export default Header