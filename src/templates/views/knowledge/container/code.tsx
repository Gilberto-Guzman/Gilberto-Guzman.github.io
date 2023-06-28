import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Paper, ListSubheader, Avatar, Typography } from '@mui/material';

import avatarImage from '../../../public/images/home/avatar.jpeg';

export default function NestedList() {
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
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="Python" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="C" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="C++" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="C#" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="HTML 5" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="Markdown" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="JavaScript" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Avatar src={avatarImage} />
                            </ListItemIcon>
                            <ListItemText primary="PHP" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Paper>

    );
}