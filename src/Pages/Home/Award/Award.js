import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import award1 from '../../../images/Award/award-1.png';
import award2 from '../../../images/Award/award-2.png';
import award3 from '../../../images/Award/award-3.png';

const Award = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography sx={{ fontWeight: 600, m: 2 }} gutterBottom variant="h4" component="div">
                OUR AWARDS
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-evenly" columns={{ xs: 1, sm: 4, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4} sx={{ mt: 5 }}>
                        <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                                image={award1}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{ mt: 5 }}>
                        <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                                image={award2}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} sx={{ mt: 5 }}>
                        <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '250px', margin: '0 auto' }}
                                image={award3}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Award;