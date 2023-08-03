/* --- Importacion de LIBRERIAS --- */

import React from 'react'

import {
    Box,
    Typography,
    Paper,
    Zoom,
    // Avatar
} from '@mui/material';

// import avatarImage from '../../../public/images/home/avatar.jpeg';


const Header: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Paper elevation={6}>
                    <Typography variant='h2' gutterBottom>
                        Hi, I'm Gilbert ☕
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        I'm a Software Enginner student, I'm interested in everything related to technology and sotfware development.
                    </Typography>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                        <Avatar alt='Gilberto Guzman' src={avatarImage} sx={{ width: 200, height: 200 }} />
                    </Box> */}
                </Paper>
            </Zoom>


        </Box >
    )
}

export default Header