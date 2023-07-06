/* --- Importacion de LIBRERIAS --- */

import React from 'react'

import {
    Box,
    Typography,
    Paper,
    Zoom
} from '@mui/material';

const Header: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', margin: 5 }}>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Paper elevation={6}>
                    <Typography variant="h2" gutterBottom>
                        Hi, I'm Gilbert ☕
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        I'm a Software Enginner student, I'm interested in everything related to technology and sotfware development.
                    </Typography>
                </Paper>
            </Zoom>
        </Box >
    )
}

export default Header