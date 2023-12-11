import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    MenuItem,
    Link
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import avatarImage from '../public/images/home/avatar.jpeg';

/* --- Gestion de los nombres y enlaces del NAVBAR --- */
const pages = [
    { name: 'Home', icon: <HomeIcon sx={{ fontSize: 30 }} />, link: '/' },
    { name: 'Knowledge', icon: <TerminalIcon sx={{ fontSize: 30 }} />, link: '/knowledge/' },
    { name: 'Certifications', icon: <SchoolIcon sx={{ fontSize: 30 }} />, link: '/certification/' },
    { name: 'Contact', icon: <RecentActorsIcon sx={{ fontSize: 30 }} />, link: '/contact/' }
];

export default function Navbar() {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    /* --- Manejadores de eventos para abrir y cerrar los menus --- */

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0, mr: 2 }}>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt='Gilberto Guzmán' src={avatarImage} />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id='menu-appbar'
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#050505',
                                textDecoration: 'none',
                            }}
                        >
                            Gilberto Guzmán
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-start' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        href={page.link}
                                        underline='none'
                                        color='#67686c'
                                    >
                                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                            <Typography textAlign='center'>{page.name}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#050505',
                                textDecoration: 'none',
                            }}
                        >
                            Gilberto Guzmán
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                            {pages.map((page, index) => (
                                <Link key={index} href={page.link} underline='none' color='#67686c'>
                                    <Button
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
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
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
