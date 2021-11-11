import { Button, Container, Grid, TextField } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { allContexts } = useAuth();
    const { registerUser, user } = allContexts;
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container sx={{ my: 6 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={8} md={6}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20 }} variant="body2" gutterBottom>Register</Typography>
                    {<form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Re-enter Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Register</Button>
                        <NavLink style={{ textDecoration: 'none', width: '75%' }} to="/login">
                            <Button>Already Register? Please Login</Button>
                        </NavLink>
                    </form>}
                    {/* {isLoading && <CircularProgress />} */}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        <strong>Successfully Registered!</strong>
                    </Alert>}
                </Grid>
                <Grid item xs={4} md={6}>
                    <img style={{ width: '500px' }} src="" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;