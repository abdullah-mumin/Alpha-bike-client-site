import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { allContexts } = useAuth();
    const { loginUser, user, isLoading, setUser } = allContexts;
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
    }

    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('Login successful');
        e.preventDefault();
    }


    return (
        <Container sx={{ my: 6 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={8} md={6}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20 }} variant="body2" gutterBottom>Login</Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none', width: '75%' }} to="/register">
                            <Button>New User? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={4} md={6}>
                    <img style={{ width: '500px' }} src="" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;