import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <div>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 2 }} gutterBottom variant="h4" component="div">
                        OUR PRODUCTS
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                products.slice(0, 6).map(product => <Product
                                    key={product.id}
                                    product={product}
                                ></Product>)
                            }
                        </Grid>
                    </Box>
                </Container>
            </div>
            <ReviewsHome></ReviewsHome>
            <Award></Award>
            <Footer></Footer>
        </div>
    );
};

export default Home;