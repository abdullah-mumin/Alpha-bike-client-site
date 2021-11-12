import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Footer = () => {

    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 8 }}
                sx={{ bgcolor: 'blue', opacity: '50%', mt: 5 }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Typography sx={{ fontWeight: '500', fontSize: 35 }}>ALPHA BIKE'S</Typography>
                            <Typography sx={{ fontWeight: '500', fontSize: 15 }}>GET YOUR DERAM BIKE</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ fontWeight: '500', fontSize: 25 }} borderBottom={1}>Help</Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ fontWeight: '500', fontSize: 25 }} borderBottom={1}>Account</Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} href="/login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} href="/register" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box sx={{ fontWeight: '500', fontSize: 25 }} borderBottom={1}>Follow Us</Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} href="/" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} href="/" color="inherit">
                                    Twitter
                                </Link>
                            </Box>
                            <Box>
                                <Link sx={{ textDecoration: 'none' }} href="/" color="inherit">
                                    Youtube
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        © 2021 Copyright: Alpha Bike's . All Right Reserved
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;