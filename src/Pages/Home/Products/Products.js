import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Footer from '../../Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://lit-citadel-03300.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2 }} gutterBottom variant="h4" component="div">
                    OUR PRODUCTS
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;