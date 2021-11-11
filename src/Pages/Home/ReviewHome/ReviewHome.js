import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, Grid, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';

const ReviewHome = ({ review }) => {
    const { title, rating, desc } = review;
    return (
        <Grid>
            <Grid item xs={12} sm={12} md={12} sx={{ mt: 5 }}>
                <Card sx={{ maxWidth: 345, border: 0, boxShadow: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: 500 }} gutterBottom variant="h5" component="div">
                            Title: {title}
                        </Typography>
                        <Typography gutterBottom component="div" >
                            <Stack spacing={1} alignItems='center'>
                                <Rating name="half-rating-read" defaultValue={parseFloat(rating)} precision={0.1} readOnly />
                            </Stack>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ReviewHome;