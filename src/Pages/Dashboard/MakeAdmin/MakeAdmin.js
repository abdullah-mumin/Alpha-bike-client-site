import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography sx={{ fontWeight: 700, fontSize: 30, mb: 3 }} variant="body2" gutterBottom>Admin Panel</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    required
                    sx={{ width: '25%' }}
                    id="outlined-required"
                    label="Email"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button sx={{ width: "20%", m: 1, mt: 2, backgroundColor: '#1ED0C1' }} type="submit" variant="contained">Add Admin</Button>
            </form>
            {
                success && <Alert severity='success'>Make as Admin Successfully!</Alert>
            }
        </Container>
    );
};

export default MakeAdmin;