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

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material';


/* --- Importacion de ARCHIVOS --- */

import mysqlLogo from '../../../public/images/knowledge/database/mysql.png';
import sqlserverLogo from '../../../public/images/knowledge/database/sqlserver.png';



/* --- Gestion de los nombres y enlaces de database --- */

const databases = [
    { name: 'MySQL', link: mysqlLogo },
    { name: 'SQL Server', link: sqlserverLogo }
];

export default function NestedList() {
    // cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Slide in={true} direction="up" style={{ transitionDelay: '500ms' }}>
            <Paper elevation={6}>
                <List
                    sx={{ margin: 2 }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={<Typography variant="h5" gutterBottom>
                            Database Managment
                        </Typography>} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {databases.map((database) => (
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <Avatar src={database.link} />
                                    </ListItemIcon>
                                    <ListItemText primary={database.name} />
                                </ListItemButton>
                            ))}

                        </List>
                    </Collapse>
                </List>
            </Paper>
        </Slide>
    );
}