/* --- Importacion de LIBRERIAS --- */

import * as React from 'react';

import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Box,
    Paper,
    Slide,
    Tab,
    Tabs,
} from '@mui/material';

/* --- Importacion de Pdfs para los certificados --- */

import Microsoft_Student_Ambassador_Certificate_PDF from '../../../public/documents/Certificate/Microsoft_Student_Ambassador_Certificate.pdf';

import Microsoft_Certified_Azure_Fundamentals_PDF from '../../../public/documents/Certificate/Microsoft_Certified_Azure_Fundamentals.pdf';
import Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals_PDF from '../../../public/documents/Certificate/Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals.pdf';
import CCNAv7_Switching_Routing_And_Wireless_Essentials_PDF from '../../../public/documents/Certificate/CCNAv7_Switching_Routing_And_Wireless_Essentials.pdf';

import Una_Mirada_Al_TEA_De_Alto_Funcionamiento_PDF from '../../../public/documents/Certificate/Una_Mirada_Al_TEA_De_Alto_Funcionamiento.pdf';
import Investigacion_Operativa_Para_La_Optimizacion_De_La_Distribucion_De_Alimentos_A_Familias_Vulnerables_PDF from '../../../public/documents/Certificate/Investigacion_Operativa_Para_La_Optimizacion_De_La_Distribucion_De_Alimentos_A_Familias_Vulnerables.pdf';

import Constancia_Catedra_Excelencia_Academica_PDF from '../../../public/documents/Certificate/Constancia_Catedra_Excelencia_Academica.pdf';
import Constancia_Asistentes_Al_Panel_De_Empresarios_PDF from '../../../public/documents/Certificate/Constancia_Asistentes_Al_Panel_De_Empresarios.pdf';
import Constancia_Presentacion_Del_Proyecto_Farmacias_Guadalajara_PDF from '../../../public/documents/Certificate/Constancia_Presentacion_Del_Proyecto_Farmacias_Guadalajara.pdf';

import Aprende_A_Utilizar_Power_Automate_PDF from '../../../public/documents/Certificate/Aprende_A_Utilizar_Power_Automate.pdf';
import Excel_En_La_Actualidad_PDF from '../../../public/documents/Certificate/Excel_En_La_Actualidad.pdf';
import Aprende_A_Utilizar_Outlook_PDF from '../../../public/documents/Certificate/Aprende_A_Utilizar_Outlook.pdf';
import Aprende_A_Usar_Microsoft_Teams_En_Entrevistas_Laborales_PDF from '../../../public/documents/Certificate/Aprende_A_Usar_Microsoft_Teams_En_Entrevistas_Laborales.pdf';

import NLP_Un_Caso_En_La_Vida_Real_PDF from '../../../public/documents/Certificate/NLP_Un_Caso_En_La_Vida_Real.pdf';
import Tratamiento_De_Datos_Con_Python_PDF from '../../../public/documents/Certificate/Tratamiento_De_Datos_Con_Python.pdf';

import Fundamentos_De_Ciberseguridad_PDF from '../../../public/documents/Certificate/Fundamentos_De_Ciberseguridad.pdf';
import Ciberseguridad_En_El_Trabajo_PDF from '../../../public/documents/Certificate/Ciberseguridad_En_El_Trabajo.pdf';
import Introduccion_A_La_IA_Generativa_En_Ciberseguridad_PDF from '../../../public/documents/Certificate/Introduccion_A_La_IA_Generativa_En_Ciberseguridad.pdf';

import Como_Crear_Un_CV_Desde_Cero_PDF from '../../../public/documents/Certificate/Como_Crear_Un_CV_Desde_Cero.pdf';
import Que_Hacer_Ante_La_Suplantacion_De_Identidad_En_Redes_Sociales_PDF from '../../../public/documents/Certificate/Que_Hacer_Ante_La_Suplantacion_De_Identidad_En_Redes_Sociales.pdf';
import Valemadrismo_Sustentable_PDF from '../../../public/documents/Certificate/Valemadrismo_Sustentable.pdf';

/* --- Importacion de Pdfs para los reconocimientos --- */


import Carta_Recomendacion_Gilberto_Firmada_PDF from '../../../public/documents/Acknowledgement/Carta_Recomendacion_Gilberto_Firmada.pdf';

import Jornada_Del_Conocimiento_Chiapas_ChatGPT_Prompt_Enginnering_PDF from '../../../public/documents/Acknowledgement/Jornada_Del_Conocimiento_Chiapas_ChatGPT_Prompt_Enginnering.pdf';
import Conferencia_ChatGPT_Prompt_Enginnering_PDF from '../../../public/documents/Acknowledgement/Conferencia_ChatGPT_Prompt_Enginnering.pdf';

import Desarrollo_Pruebas_Y_Desarrollo_De_Picosatelites_NASA from '../../../public/documents/Acknowledgement/Desarrollo_Pruebas_Y_Desarrollo_De_Picosatelites_NASA.pdf';

import Webinar_React_Material_UI_PDF from '../../../public/documents/Acknowledgement/Webinar_React_Material_UI.pdf';
import Webinar_Markdown_Crash_Course_Microsoft_Y_Red_Por_La_Ciberseguridad_PDF from '../../../public/documents/Acknowledgement/Webinar_Markdown_Crash_Course_Microsoft_Y_Red_Por_La_Ciberseguridad.pdf';
import Webinar_Markdown_Crash_Course_UNACH_PDF from '../../../public/documents/Acknowledgement/Webinar_Markdown_Crash_Course_UNACH.pdf';
import Webinar_ChatGPT_Prompt_Enginnering_PDF from '../../../public/documents/Acknowledgement/Webinar_ChatGPT_Prompt_Enginnering.pdf';


const certificates = [
    {
        name: 'Microsoft student ambassadors',
        pdf: Microsoft_Student_Ambassador_Certificate_PDF
    },
    {
        name: 'Microsoft azure fundamentals',
        pdf: Microsoft_Certified_Azure_Fundamentals_PDF
    },
    {
        name: 'Microsoft azure security, compliance and identity fundamentals',
        pdf: Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals_PDF
    },
    {
        name: 'CCNAv7 switching routing and wireless essentials',
        pdf: CCNAv7_Switching_Routing_And_Wireless_Essentials_PDF
    },
    {
        name: 'From our own experience: A look at high-functioning: ASD Asperger Syndrome',
        pdf: Una_Mirada_Al_TEA_De_Alto_Funcionamiento_PDF
    },
    {
        name: 'Operational research for the optimization of food distribution to vulnerable families',
        pdf: Investigacion_Operativa_Para_La_Optimizacion_De_La_Distribucion_De_Alimentos_A_Familias_Vulnerables_PDF
    },
    {
        name: 'Academic excellence chair',
        pdf: Constancia_Catedra_Excelencia_Academica_PDF
    },
    {
        name: 'Entrepreneur panel attendees',
        pdf: Constancia_Asistentes_Al_Panel_De_Empresarios_PDF
    },
    {
        name: 'Guadalajara pharmacies project presentation',
        pdf: Constancia_Presentacion_Del_Proyecto_Farmacias_Guadalajara_PDF
    },
    {
        name: 'Learn how to use Power Automate',
        pdf: Aprende_A_Utilizar_Power_Automate_PDF
    },
    {
        name: 'Excel currently',
        pdf: Excel_En_La_Actualidad_PDF
    },
    {
        name: 'Learn how to use Outlook',
        pdf: Aprende_A_Utilizar_Outlook_PDF
    },
    {
        name: 'Learn how to use Microsoft Teams for job interviews',
        pdf: Aprende_A_Usar_Microsoft_Teams_En_Entrevistas_Laborales_PDF
    },
    {
        name: 'NLP: A real life case',
        pdf: NLP_Un_Caso_En_La_Vida_Real_PDF
    },
    {
        name: 'Data processing with Python',
        pdf: Tratamiento_De_Datos_Con_Python_PDF
    },
    {
        name: 'Cybersecurity fundamentals',
        pdf: Fundamentos_De_Ciberseguridad_PDF
    },
    {
        name: 'Cybersecurity at work',
        pdf: Ciberseguridad_En_El_Trabajo_PDF
    },
    {
        name: 'Introduction to generative AI in cybersecurity',
        pdf: Introduccion_A_La_IA_Generativa_En_Ciberseguridad_PDF
    },
    {
        name: 'How to create a CV from scratch',
        pdf: Como_Crear_Un_CV_Desde_Cero_PDF
    },
    {
        name: 'What to do in case of identity theft in social networks',
        pdf: Que_Hacer_Ante_La_Suplantacion_De_Identidad_En_Redes_Sociales_PDF
    },
    {
        name: 'Sustainable valemadrismo',
        pdf: Valemadrismo_Sustentable_PDF
    }
];

const Acknowledgements = [
    {
        name: 'Letter of recommendation Gilberto Signed Microsoft and Red for Cibersecurity',
        pdf: Carta_Recomendacion_Gilberto_Firmada_PDF
    },
    {
        name: 'Chiapas ChatGPT prompt enginnering knowledge journey',
        pdf: Jornada_Del_Conocimiento_Chiapas_ChatGPT_Prompt_Enginnering_PDF
    },
    {
        name: 'ChatGPT prompt enginnering conference',
        pdf: Conferencia_ChatGPT_Prompt_Enginnering_PDF
    },
    {
        name: 'Development, testing and development of picosatellites NASA',
        pdf: Desarrollo_Pruebas_Y_Desarrollo_De_Picosatelites_NASA
    },
    {
        name: 'Webinar React + Material UI Microsoft and Red for Cybersecurity',
        pdf: Webinar_React_Material_UI_PDF
    },
    {
        name: 'Webinar Markdown crash course Microsoft and Red for Cybersecurity',
        pdf: Webinar_Markdown_Crash_Course_Microsoft_Y_Red_Por_La_Ciberseguridad_PDF
    },
    {
        name: 'Webinar Markdown crash course UNACH',
        pdf: Webinar_Markdown_Crash_Course_UNACH_PDF
    },
    {
        name: 'Webinar ChatGPT Prompt Enginnering UNACH',
        pdf: Webinar_ChatGPT_Prompt_Enginnering_PDF
    },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Info() {
    const [value, setValue] = React.useState(0);
    const delayIncrement = 100;
    const initialDelay = 0;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Certificates" {...a11yProps(0)} />
                    <Tab label="Acknowledgements" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={3} justifyContent='flex-start'>
                    {certificates.map((certificate, index) => (
                        <Grid item xs={12} key={index}>
                            <Slide in={true} direction="right" style={{ transitionDelay: `${initialDelay + index * delayIncrement}ms` }}>
                                <Paper elevation={6}>
                                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                                        <CardContent>
                                            <Typography variant='h5' component="div">
                                                {certificate.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                href={certificate.pdf}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#ebf5ff',
                                                    '&:hover': {
                                                        backgroundColor: '#0866ff',
                                                        '& .MuiTypography-root': {
                                                            color: '#ffffff',
                                                        },
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant='h6'
                                                    sx={{
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700,
                                                        color: '#1d76d6',
                                                    }}
                                                >
                                                    View PDF
                                                </Typography>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={3} justifyContent='flex-start'>
                    {Acknowledgements.map((Acknowledgement, index) => (
                        <Grid item xs={12} key={index}>
                            <Slide in={true} direction="right" style={{ transitionDelay: `${initialDelay + index * delayIncrement}ms` }}>
                                <Paper elevation={6}>
                                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                                        <CardContent>
                                            <Typography variant='h5' component="div">
                                                {Acknowledgement.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                href={Acknowledgement.pdf}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#ebf5ff',
                                                    '&:hover': {
                                                        backgroundColor: '#0866ff',
                                                        '& .MuiTypography-root': {
                                                            color: '#ffffff',
                                                        },
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    variant='h6'
                                                    sx={{
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700,
                                                        color: '#1d76d6',
                                                    }}
                                                >
                                                    View PDF
                                                </Typography>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>
            </CustomTabPanel>
        </Box >
    );
}
