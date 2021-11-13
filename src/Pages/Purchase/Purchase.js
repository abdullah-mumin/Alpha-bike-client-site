import { Button, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useAuth from '../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';



const Purchase = () => {
    const [product, setProduct] = useState({});
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const initialInfo = { userName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);
    const { productId } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://lit-citadel-03300.herokuapp.com/purchase/${productId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data);
            })
    }, []);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchaseInfo = { ...purchaseInfo };
        newPurchaseInfo[field] = value;
        setPurchaseInfo(newPurchaseInfo);
    }

    const handlePurchaseSubmit = e => {
        const purchase = {
            ...purchaseInfo,
            productName: product?.name,
        }
        fetch('https://lit-citadel-03300.herokuapp.com/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Purchase Successfylly");
                    history.push('/home');
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            <Navigation />
            <Container>
                <Box sx={{ flexGrow: 1, mt: 4 }}>
                    <Grid container spacing={2} >
                        <Grid container item xs={12} md={6} alignItems="center" direction="column" justifyContent="center">
                            <Grid>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                                            image={product?.img}
                                            alt="bike"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product?.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Price: ${product?.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product?.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} md={6}>
                            <Container>
                                <form onSubmit={handlePurchaseSubmit}>
                                    <TextField
                                        required
                                        sx={{ width: '75%', mt: 3 }}
                                        id="outlined-required"
                                        label="Name"
                                        name="displayName"
                                        defaultValue={user?.displayName}
                                        onBlur={handleOnBlur}
                                    />
                                    <TextField
                                        required
                                        sx={{ width: '75%', mt: 3 }}
                                        id="outlined-required"
                                        label="Email"
                                        name="email"
                                        type="email"
                                        defaultValue={user.email}
                                        onBlur={handleOnBlur}
                                    />
                                    <TextField
                                        required
                                        sx={{ width: '75%', mt: 3 }}
                                        id="outlined-required"
                                        label="Address"
                                        name="address"
                                        onBlur={handleOnBlur}
                                    />
                                    <TextField
                                        required
                                        sx={{ width: '75%', mt: 3 }}
                                        id="outlined-required"
                                        label="Phone Number"
                                        name="phone"
                                        onBlur={handleOnBlur}
                                    />
                                    <Button sx={{ width: "25%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Place Order</Button>
                                </form>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Purchase;