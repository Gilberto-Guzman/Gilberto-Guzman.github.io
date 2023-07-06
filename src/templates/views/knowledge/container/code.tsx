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

import pythonLogo from '../../../public/images/knowledge/code/python.png';
import cLogo from '../../../public/images/knowledge/code/c.png';
import cppLogo from '../../../public/images/knowledge/code/cpp.png';
import csharpLogo from '../../../public/images/knowledge/code/csharp.png';
import htmlLogo from '../../../public/images/knowledge/code/html.png';
import markdownLogo from '../../../public/images/knowledge/code/markdown.png';
import cssLogo from '../../../public/images/knowledge/code/css.png';
import javascriptLogo from '../../../public/images/knowledge/code/javascript.png';
import phpLogo from '../../../public/images/knowledge/code/php.png';

/* --- Gestion de los nombres y enlaces de code --- */

const codes = [
    { name: 'Python', link: pythonLogo },
    { name: 'C', link: cLogo },
    { name: 'C++', link: cppLogo },
    { name: 'C#', link: csharpLogo },
    { name: 'HTML', link: htmlLogo },
    { name: 'Markdown', link: markdownLogo },
    { name: 'CSS', link: cssLogo },
    { name: 'JavaScript', link: javascriptLogo },
    { name: 'PHP', link: phpLogo }
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
                        Code
                    </Typography>} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        {codes.map((code) => (
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Avatar src={code.link} />
                                </ListItemIcon>
                                <ListItemText primary={code.name} />
                            </ListItemButton>
                        ))}

                    </List>
                </Collapse>
            </List>
        </Paper>
    );
}