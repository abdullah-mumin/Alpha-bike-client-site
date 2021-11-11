import { Container, Typography } from '@mui/material';
import React from 'react';

const Pay = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 2, marginTop: '50px', marginBottom: '100px' }} gutterBottom variant="h4" component="div">
                This Payment function is not available right now!
            </Typography>
        </Container>
    );
};

export default Pay;