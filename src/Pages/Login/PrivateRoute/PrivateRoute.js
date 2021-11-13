import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    if (!user.email) { return <CircularProgress /> }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        )
    }
};

export default PrivateRoute;