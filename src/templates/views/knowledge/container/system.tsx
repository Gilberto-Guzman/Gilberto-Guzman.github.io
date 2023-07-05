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
    Typography
} from '@mui/material';

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material';


/* --- Importacion de ARCHIVOS --- */

import windowsLogo from '../../../public/images/knowledge/system/windows.png';
import ubuntuLogo from '../../../public/images/knowledge/system/ubuntu.png';


/* --- Gestion de los nombres y enlaces de system --- */

const systems = [
    { name: 'Windows', link: windowsLogo },
    { name: 'Ubuntu', link: ubuntuLogo },
];

export default function NestedList() {
    // cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Paper elevation={6}>
            <List
                sx={{ margin: 2 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary={<Typography variant="h5" gutterBottom>
                        Operanting Systems
                    </Typography>} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        {systems.map((system) => (
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Avatar src={system.link} />
                                </ListItemIcon>
                                <ListItemText primary={system.name} />
                            </ListItemButton>
                        ))}

                    </List>
                </Collapse>
            </List>
        </Paper>
    );
}