import {
    Box,
    Grid,
    Paper,
    Slide,
    Typography,
    Avatar,
    Button
} from '@mui/material';


/* --- Importacion de ICONOS --- */
import {
    Phone,
    Email,
    GitHub
} from '@mui/icons-material';

/* --- Gestion de ... --- */

const contacts = [
    { icon: <Phone sx={{ fontSize: 60 }} />, media: 'Phone', info: '(221)529-2048', link: 'tel:+2215292048', button: 'Start a call' },
    { icon: <Email sx={{ fontSize: 60 }} />, media: 'E-Mail', info: 'josegilbertoguzmangutierrez@gmail.com', link: 'mailto:josegilbertoguzmangutierrez@gmail.com', button: 'Send me an email' },
    { icon: <GitHub sx={{ fontSize: 60 }} />, media: 'Github', info: 'https://github.com/Gilberto-Guzman', link: 'https://github.com/Gilberto-Guzman', button: 'Check my lastest work' },
];

export default function Test() {
    return (

        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Slide in={true} direction='up' style={{ transitionDelay: '300ms' }}>

                <Grid container spacing={2} justifyContent='center'>
                    {contacts.map((contact) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper elevation={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                                    <Avatar sx={{ width: 100, height: 100, backgroundColor: '#3D4043' }}>
                                        {contact.icon}
                                    </Avatar>
                                </Box>
                                <Typography variant='h4' textAlign='center' sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'inherit' }}>
                                    {contact.media}
                                </Typography>
                                <Typography variant='h6' textAlign='center'>
                                    {contact.info}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                                    <Button href={contact.link} variant="contained" color="inherit">
                                        <Typography variant='h6' sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'inherit' }}>
                                            {contact.button}
                                        </Typography>
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

            </Slide >
        </Box >
    );
}