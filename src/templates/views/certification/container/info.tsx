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
} from "@mui/material";

/* --- Importacion de ICONOS --- */

import az900Image from "../../../public/images/certification/az900.png";
import nlpImage from "../../../public/images/certification/nlp.png";
import dataImage from "../../../public/images/certification/data.png";
import nasaImage from "../../../public/images/certification/nasa.png";
import markdownImage from "../../../public/images/certification/markdown.png";
import ciscoImage from "../../../public/images/certification/cisco.png";

/* --- Gestion del delay, iconos, medios de comunicación, información de certificationo, enlaces y botones --- */

const certifications = [
    {
        delay: '0ms',
        name: "Microsoft Azure AZ-900",
        description: "Microsoft Azure Fundamentals",
        image: az900Image
    },
    {
        delay: '100ms',
        name: "ANIEI - NLP: A real life case",
        description: "Natural language processing with python ",
        image: nlpImage
    },
    {
        delay: '150ms',
        name: "ANIEI - Python Data",
        description: "Data processing with python",
        image: dataImage
    },
    {
        delay: '200ms',
        name: "Space Zero Gravity",
        description: "Creating picosatellites using NASA's project management.",
        image: nasaImage
    },
    {
        delay: '250ms',
        name: "UNACH - Markdown Crash Course ",
        description: "Speaker of the Webinar Markdown Crash Course",
        image: markdownImage
    },
    {
        delay: '300ms',
        name: "CCNAv7",
        description: "Switching, Routing and Wireless Essentials",
        image: ciscoImage
    },
];

export default function Info() {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                {certifications.map((certification) => (
                    <Zoom in={true} style={{ transitionDelay: certification.delay }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper elevation={6}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={certification.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {certification.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {certification.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        {/* <Button size="small" color="primary">
                                            Share
                                        </Button> */}
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
