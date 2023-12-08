/* --- Importacion de LIBRERIAS --- */

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


/* --- Importacion de ARCHIVOS --- */

import avatarImage from '../public/images/home/avatar.jpeg';


/* --- Gestion de los nombres y enlaces del NAVBAR --- */

const pages = [
    { name: 'Home', link: '/' },
    { name: 'Knowledge', link: '/knowledge/' },
    { name: 'Certifications', link: '/certification/' },
    { name: 'Contact', link: '/contact/' }
];

export default function Navbar() {

    /* --- Estado local para controlar los elementos del menu --- */

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    /* --- Manejadores de eventos para abrir y cerrar los menus --- */

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: '#3D4043' }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0, mr: 2 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='Gilberto Guzman' src={avatarImage} />
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
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
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
                                color='inherit'
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
                                        color='inherit'
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
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Gilberto Guzmán
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                            {
                                pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        href={page.link}
                                        underline='none'
                                        color='inherit'
                                    >
                                        <Button
                                            key={page.name}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </>
    );
}