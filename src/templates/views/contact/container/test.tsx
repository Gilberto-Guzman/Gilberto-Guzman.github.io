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

    return (
        <Slide in={true} direction="up" style={{ transitionDelay: '300ms' }}>
            <Paper elevation={6}>
                <h1>gsadfsfd</h1>
            </Paper>
        </Slide >
    );
}