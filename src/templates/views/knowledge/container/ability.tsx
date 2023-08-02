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

import officeLogo from '../../../public/images/knowledge/ability/office.png';
import filmoraLogo from '../../../public/images/knowledge/ability/filmora.png';
import canvaLogo from '../../../public/images/knowledge/ability/canva.png';
import preziLogo from '../../../public/images/knowledge/ability/prezi.png';
import vismeLogo from '../../../public/images/knowledge/ability/visme.png';


/* --- Gestion de los nombres y enlaces de ability --- */

const abilities = [
    { name: 'Microsoft Office', link: officeLogo },
    { name: 'Filmora', link: filmoraLogo },
    { name: 'Canva', link: canvaLogo },
    { name: 'Prezi', link: preziLogo },
    { name: 'Visme', link: vismeLogo }
];

export default function Ability() {
    // cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Slide in={true} direction='up' style={{ transitionDelay: '800ms' }}>
            <Paper elevation={6}>
                <List
                    sx={{ margin: 2 }}
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={<Typography variant='h5' gutterBottom>
                            Other Abilities
                        </Typography>} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>

                            {abilities.map((ability) => (
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <Avatar src={ability.link} />
                                    </ListItemIcon>
                                    <ListItemText primary={ability.name} />
                                </ListItemButton>
                            ))}

                        </List>
                    </Collapse>
                </List>
            </Paper>
        </Slide >
    );
}