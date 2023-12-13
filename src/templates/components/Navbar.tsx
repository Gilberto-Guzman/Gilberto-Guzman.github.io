import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Container,
    Link
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

/* --- Gestion de los nombres y enlaces del NAVBAR --- */
const pages = [
    { name: 'Home', icon: <HomeIcon sx={{ fontSize: 40 }} />, link: '/' },
    { name: 'Knowledge', icon: <TerminalIcon sx={{ fontSize: 40 }} />, link: '/knowledge/' },
    { name: 'Certifications', icon: <SchoolIcon sx={{ fontSize: 40 }} />, link: '/certification/' },
    { name: 'Contact', icon: <RecentActorsIcon sx={{ fontSize: 40 }} />, link: '/contact/' }
];

export default function Navbar() {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    /* --- Manejadores de eventos para abrir y cerrar los menus --- */


    React.useEffect(() => {
        const handleRouteChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: '#ffffff' }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                        {pages.map((page, index) => (
                            <Link key={index} href={page.link} underline='none' color='#67686c'>
                                <Button
                                    key={page.name}
                                    sx={{
                                        mx: 2,
                                        color: currentPath === page.link ? '#1976D2' : '#050505',
                                        display: 'block',
                                        '&:hover': {
                                            color: '#1976D2',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {page.icon}
                                        {currentPath === page.link && (
                                            <Box sx={{ width: '100%', height: 2, backgroundColor: '#1976D2', mt: 1 }} />
                                        )}
                                    </Box>
                                </Button>
                            </Link>
                        ))}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
