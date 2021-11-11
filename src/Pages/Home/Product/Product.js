import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Card, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, img, price, desc } = product;
    const history = useHistory();

    const handlePurchase = (id) => {
        const uri = `/products/${id}`;
        history.push(uri);
        // console.log(uri);
    }

    return (
        <Grid>
            <Grid item xs={12} sm={12} md={12} sx={{ mt: 5 }}>
                <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                        image={img}
                        alt="bike"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Price: ${parseInt(price)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc.slice(0, 200)}
                        </Typography>
                    </CardContent>
                    <Button onClick={() => handlePurchase(_id)} style={{ fontWeight: 700, backgroundColor: '#1ED0C1' }} variant="contained">Purchase</Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Product;