import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const initialInfo = { userName: user.displayName, email: user.email, title: '', rating: '', desc: '' };
    const [reviewInfo, setReviewInfo] = useState(initialInfo);
    const history = useHistory();



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...reviewInfo };
        newReview[field] = value;
        // console.log(field, value);
        setReviewInfo(newReview);
    }

    const handleOnSubmit = e => {
        const review = {
            ...reviewInfo,
        };
        fetch('https://lit-citadel-03300.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully!');
                    history.push('/home');
                }
            })
        console.log(reviewInfo);
        e.preventDefault();
    }


    return (
        <Container>
            <Typography sx={{ fontWeight: 700, fontSize: 30 }} variant="body2" gutterBottom>Add Review</Typography>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    required
                    sx={{ width: '75%', mt: 3 }}
                    id="outlined-required"
                    label="Title"
                    name="title"
                    type="text"
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%', my: 4 }}
                    id="outlined-required"
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%' }}
                    id="outlined-required"
                    label="Rating out of 5"
                    type="text"
                    // InputLabelProps={{ shrink: true }}
                    name="rating"
                    inputProps={{ min: 0, max: 5 }}
                    onBlur={handleOnBlur}
                />
                <TextField
                    required
                    sx={{ width: '75%', my: 5 }}
                    id="outlined-required"
                    label="Description"
                    name="desc"
                    type="text"
                    multiline
                    rows={4}
                    onBlur={handleOnBlur}
                />
                <Button sx={{ width: "25%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Submit</Button>
            </form>
        </Container>
    );
};

export default Review;