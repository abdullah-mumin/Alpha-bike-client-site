import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { allContexts } = useAuth();
    const { user, isLoading, admin } = allContexts;
    if (!admin) { return <CircularProgress /> }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default AdminRoute;