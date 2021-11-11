import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ReviewHome from '../ReviewHome/ReviewHome';
import { ReviewsRounded } from '@mui/icons-material';

const ReviewsHome = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 2 }} gutterBottom variant="h4" component="div">
                Reviews
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <ReviewHome
                            key={review._id}
                            review={review}
                        ></ReviewHome>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ReviewsHome;