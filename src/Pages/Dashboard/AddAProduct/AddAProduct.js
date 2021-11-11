import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Product from '../../Home/Product/Product';
import useAuth from '../../hooks/useAuth';

const AddAProduct = () => {
    const history = useHistory();
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const initialInfo = { email: user.email, name: '', img: '', desc: '', price: '' };
    const [productInfo, setProductInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...productInfo };
        newProduct[field] = value;
        setProductInfo(newProduct);
    }

    const handleOnSubmit = e => {
        const product = {
            ...productInfo
        };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }
    // console.log(productInfo);
    return (
        <Container>
            <Typography sx={{ fontWeight: 700, fontSize: 30 }} variant="body2" gutterBottom>Add A Product</Typography>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    required
                    sx={{ width: '75%', mt: 3 }}
                    id="outlined-required"
                    label="Product Name"
                    name="name"
                    type="text"
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%', mt: 3 }}
                    id="outlined-required"
                    label="Price"
                    type="number"
                    name="price"
                    inputProps={{ min: 0 }}
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%', mt: 3 }}
                    id="outlined-required"
                    label="Image URL"
                    name="img"
                    type="url"
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%', mt: 3 }}
                    id="outlined-required"
                    label="Description"
                    name="desc"
                    type="text"
                    multiline
                    rows={4}
                    onBlur={handleOnBlur}
                />
                <Button sx={{ width: "25%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Added</Button>
            </form>
        </Container>
    );
};

export default AddAProduct;