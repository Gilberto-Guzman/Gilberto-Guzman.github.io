/* --- Importacion de LIBRERIAS --- */

import {
    Box,
    Grid,
    Paper,
    Slide,
    Typography,
} from '@mui/material';


export default function Test() {

    return (
        <Slide in={true} direction='up' style={{ transitionDelay: '300ms' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Paper elevation={6}>
                            <Typography variant='h5' align='center' gutterBottom>
                                Télefono
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper elevation={6}>
                            <Typography variant='h5' align='center' gutterBottom>
                                Correo Electrónico
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper elevation={6}>
                            <Typography variant='h5' align='center' gutterBottom>
                                Github
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Slide >
    );
}