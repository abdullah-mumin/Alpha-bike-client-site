import { Container, Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/Banner/banner.jpg';

const Banner = () => {
    return (
        <Container>
            <Grid item xs={12} md={12} sx={{ mt: 4 }}>
                <img style={{ width: '100%' }} src={banner} alt="" />
            </Grid>
        </Container>
    );
};

export default Banner;