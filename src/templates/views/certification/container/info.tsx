/* --- Importacion de LIBRERIAS --- */

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Paper,
    Typography,
    Zoom
} from '@mui/material';

/* --- Importacion de PDFS --- */
import az900Pdf from '../../../public/documents/Certificados/Microsoft_Certified_Azure_Fundamentals.pdf'


/* --- Gestion del delay, imagenes, medios de comunicación, información de certificationo, enlaces y botones --- */

const certifications = [
    {
        delay: '0ms',
        name: 'Microsoft Azure AZ-900',
        pdf: az900Pdf
    },
];
/* --- rel='noopener noreferrer' es un parametro opcional, pero ayuda a evitar vulnerabilidades--- */
export default function Info() {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2} justifyContent='center'>
                {certifications.map((certification, index) => (
                    <Zoom in={true} style={{ transitionDelay: certification.delay }} key={index}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={6}>
                                <Card>
                                    <CardContent>
                                        <Typography >
                                            {certification.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={certification.pdf} target='_blank' rel='noopener noreferrer'>View certificate</Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    </Zoom>
                ))}
            </Grid>
        </Box>
    );
}
