import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Paper, ListSubheader, Avatar, Typography } from '@mui/material';

import pythonLogo from '../../../public/images/knowledge/code/python.png';
import cLogo from '../../../public/images/knowledge/code/c.png';
import cppLogo from '../../../public/images/knowledge/code/cpp.png'
import csharpLogo from '../../../public/images/knowledge/code/csharp.png'
import htmlLogo from '../../../public/images/knowledge/code/html.png'
import markdownLogo from '../../../public/images/knowledge/code/markdown.png'
import cssLogo from '../../../public/images/knowledge/code/css.png'
import javascriptLogo from '../../../public/images/knowledge/code/javascript.png'
import phpLogo from '../../../public/images/knowledge/code/php.png'


const codes = [
    { name: 'Python', link: pythonLogo },
    { name: 'C', link: cLogo },
    { name: 'C++', link: cppLogo },
    { name: 'C#', link: csharpLogo },
    { name: 'HTML', link: htmlLogo },
    { name: 'Markdown', link: markdownLogo },
    { name: 'CSS', link: cssLogo },
    { name: 'JavaScript', link: javascriptLogo },
    { name: 'PHP', link: phpLogo },
];

export default function NestedList() {
    // cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Paper elevation={6}>
            <List
                sx={{ margin: 5 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
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