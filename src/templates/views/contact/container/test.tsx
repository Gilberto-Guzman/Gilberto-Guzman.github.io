import {
    Box,
    Grid,
    Paper,
    Slide,
    Typography,
    Avatar,
    Button
} from '@mui/material';

// import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Test() {
    return (
        <Slide in={true} direction='up' style={{ transitionDelay: '300ms' }}>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                                <Avatar sx={{ width: 100, height: 100, backgroundColor: '#3D4043' }}>
                                    <PhoneIcon sx={{ fontSize: 60 }} />
                                </Avatar>
                            </Box>
                            <Typography variant='h4' textAlign='center' sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'inherit' }}>
                                Phone
                            </Typography>
                            <Typography variant='h6' textAlign='center'>
                                (221)529-2048
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                                <Button variant="contained" color="inherit">
                                    <Typography variant='h6' sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'inherit' }}>
                                        Start a call
                                    </Typography>
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={6}>
                            <Typography variant='h5' align='center' gutterBottom>
                                Correo Electrónico
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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
