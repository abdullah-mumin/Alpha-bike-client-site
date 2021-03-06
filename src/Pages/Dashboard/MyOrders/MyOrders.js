import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import { Button, Grid } from '@mui/material';

const MyOrders = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const url = `https://lit-citadel-03300.herokuapp.com/purchases?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setReload(!reload);
            })
    }, [reload]);

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete!');
        if (confirmation) {
            fetch(`https://lit-citadel-03300.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const selectAfterDelete = orders.filter((product) => product._id !== id);
                        setOrders(selectAfterDelete);
                    }
                    else {
                        alert('Something went wrong!');
                    }
                })
        }
    }


    return (
        <div>
            <Grid item xs={6} md={12}>
                <h2>My Orders:{orders.length} </h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.userName}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row._id}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right">{row.productName}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
    );
};

export default MyOrders;