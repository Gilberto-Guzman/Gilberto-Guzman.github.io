import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Button, Card, CardActions, CardContent, Grid, Paper, Zoom } from '@mui/material';


/* --- Importacion de PDFS --- */
import Microsoft_Certified_Azure_Fundamentals_Pdf from '../../../public/documents/Certificate/Microsoft_Certified_Azure_Fundamentals.pdf'
import Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals_PDF from '../../../public/documents/Certificate/Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals.pdf'

/* --- Gestion del delay, imagenes, medios de comunicación, información de certificationo, enlaces y botones --- */

const certificates = [
    {
        delay: '0ms',
        name: 'Microsoft Azure Fundamentals',
        pdf: Microsoft_Certified_Azure_Fundamentals_Pdf
    },
    {
        delay: '0ms',
        name: 'Microsoft Azure Security, Compliance And Identity Fundamentals',
        pdf: Microsoft_Certified_Security_Compliance_And_Identity_Fundamentals_PDF
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
                    <Typography>{children}</Typography>
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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Certificates" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Acknowledgements" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={3} justifyContent='flex-start'>
                    {certificates.map((certification, index) => (
                        <Zoom in={true} style={{ transitionDelay: certification.delay }} key={index}>
                            <Grid item xs={12}>
                                <Paper elevation={6}>
                                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                                        <CardContent>
                                            <Typography variant='h5'>
                                                {certification.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                href={certification.pdf}
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
                            </Grid>
                        </Zoom>
                    ))}
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Acknowledgements
            </CustomTabPanel>
        </Box>
    );
}
