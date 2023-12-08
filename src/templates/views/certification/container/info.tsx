/* --- Importacion de LIBRERIAS --- */

import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
    Zoom
} from '@mui/material';

/* --- Importacion de IMAGENES --- */

import az900Image from '../../../public/images/certification/az900.png';
import nlpImage from '../../../public/images/certification/nlp.png';
import dataImage from '../../../public/images/certification/data.png';
import nasaImage from '../../../public/images/certification/nasa.png';
import markdownImage from '../../../public/images/certification/markdown.png';
import ciscoImage from '../../../public/images/certification/cisco.png';

/* --- Importacion de PDFS --- */

import az900Pdf from '../../../public/documents/certification/az900.pdf'
import nlpPdf from '../../../public/documents/certification/nlp.pdf'
import dataPdf from '../../../public/documents/certification/data.pdf';
import nasaPdf from '../../../public/documents/certification/nasa.pdf';
import markdownPdf from '../../../public/documents/certification/markdown.pdf';
import ciscoPdf from '../../../public/documents/certification/cisco.pdf';


/* --- Gestion del delay, imagenes, medios de comunicación, información de certificationo, enlaces y botones --- */

const certifications = [
    {
        delay: '0ms',
        name: 'Microsoft Azure AZ-900',
        description: 'Microsoft Azure Fundamentals',
        image: az900Image,
        pdf: az900Pdf
    },
    {
        delay: '100ms',
        name: 'ANIEI - NLP: A real life case',
        description: 'Natural language processing with python ',
        image: nlpImage,
        pdf: nlpPdf
    },
    {
        delay: '150ms',
        name: 'ANIEI - Python Data',
        description: 'Data processing with python',
        image: dataImage,
        pdf: dataPdf
    },
    {
        delay: '200ms',
        name: 'Space Zero Gravity',
        description: 'Creating picosatellites using NASA project management.',
        image: nasaImage,
        pdf: nasaPdf
    },
    {
        delay: '250ms',
        name: 'UNACH - Markdown Crash Course ',
        description: 'Speaker of the Webinar Markdown Crash Course',
        image: markdownImage,
        pdf: markdownPdf
    },
    {
        delay: '300ms',
        name: 'CCNAv7',
        description: 'Switching, Routing and Wireless Essentials',
        image: ciscoImage,
        pdf: ciscoPdf
    },
];
/* --- rel='noopener noreferrer' es un parametro opcional, pero ayuda a evitar vulnerabilidades--- */
export default function Info() {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2} justifyContent='center'>
                {certifications.map((certification, index) => (
                    <Zoom in={true} style={{ transitionDelay: certification.delay }} key={index}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper elevation={6}>
                                <Card>
                                    <CardActionArea href={certification.pdf} target='_blank' rel='noopener noreferrer'>
                                        <CardMedia
                                            component='img'
                                            height='140'
                                            image={certification.image}
                                            alt='green iguana'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component='div'>
                                                {certification.name}
                                            </Typography>
                                            <Typography variant='body2' color='text.secondary'>
                                                {certification.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
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
