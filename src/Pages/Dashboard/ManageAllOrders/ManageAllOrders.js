import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [reload]);

    const handleCancle = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete!');
        if (confirmation) {
            fetch(`http://localhost:5000/delete/${id}`, {
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
    };

    const handleConfirm = (id) => {
        const confirmation = window.confirm('Are you sure you want to Confirm!');
        if (confirmation) {
            fetch(`http://localhost:5000/confirmation/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setReload(!reload)
                    }
                    else {
                        window.confirm('Already Confirmed!');
                    }
                })
        }
    };

    return (
        <div>
            <h2>Total Orders:{orders.length} </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Cancle</TableCell>
                            <TableCell align="right">Confirm</TableCell>
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
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleCancle(row._id)}>Cancle</Button></TableCell>
                                <TableCell align="right"><Button onClick={() => handleConfirm(row._id)}>Confirm</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;