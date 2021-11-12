import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navigation = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'blue', opacity: '50%' }} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Alpha Bike's
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></Link>
                    {
                        user?.email ?
                            <>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashBoard"><Button color="inherit">Dashboard</Button></NavLink>
                                <Button onClick={logOut} color="inherit">Log out</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;