/* --- Importacion de LIBRERIAS --- */

import * as React from 'react';

import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Paper,
    Avatar,
    Typography,
    Slide
} from '@mui/material';

/* --- Importacion de ICONOS --- */

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material';


/* --- Importacion de ARCHIVOS --- */

import azureLogo from '../../../public/images/knowledge/tech/azure.png';
import visualstudioLogo from '../../../public/images/knowledge/tech/visualstudio.png';
import visualstudiocodeLogo from '../../../public/images/knowledge/tech/visualstudiocode.png';
import androidstudioLogo from '../../../public/images/knowledge/tech/androidstudio.png';



/* --- Gestion de los nombres y enlaces de tech --- */

const techs = [
    { 
        name: 'Microsoft Azure', 
        link: azureLogo 
    },
    { 
        name: 'Microsoft Visual Studio', 
        link: visualstudioLogo 
    },
    { 
        name: 'Microsoft Visual Studio Code', 
        link: visualstudiocodeLogo 
    },
    { 
        name: 'Android Studio', 
        link: androidstudioLogo 
    }
];

export default function Tech() {
    // cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Slide in={true} direction='up' style={{ transitionDelay: '700ms' }}>
            <Paper elevation={6}>
                <List
                    sx={{ margin: 2 }}
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={<Typography variant='h5' gutterBottom>
                            Technologies
                        </Typography>} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>

                            {techs.map((tech) => (
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <Avatar src={tech.link} />
                                    </ListItemIcon>
                                    <ListItemText primary={tech.name} />
                                </ListItemButton>
                            ))}

                        </List>
                    </Collapse>
                </List>
            </Paper>
        </Slide >
    );
}