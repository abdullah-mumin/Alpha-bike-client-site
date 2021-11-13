import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../AdminRoute/AdminRoute';

const drawerWidth = 190;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { allContexts } = useAuth();
    const { admin, logOut } = allContexts;


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button variant="contained" sx={{ mb: 2, width: '90%' }}>Explore</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}`}><Button variant="contained" sx={{ width: '90%' }}>Dashboard</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/pay`}><Button variant="contained" sx={{ mt: 2, width: '90%' }}>Payment</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/review`}><Button variant="contained" sx={{ my: 2, width: '90%' }}>Review</Button></Link>
                {
                    admin && <Box>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/manageAllOrders`}><Button variant="contained" sx={{ width: '90%' }}>Manage All Orders</Button></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/addProduct`}><Button variant="contained" sx={{ my: 2, width: '90%' }}>Add Product</Button></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/makeAdmin`}><Button variant="contained" sx={{ width: '90%' }}>Make Admin</Button></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`${url}/manageProducts`}><Button variant="contained" sx={{ mt: 2, width: '90%' }}>Manage Products</Button></Link>
                    </Box>
                }
                <Link to="/home" style={{ textDecoration: 'none' }}><Button style={{ color: 'white' }} onClick={logOut} variant="contained" sx={{ width: '90%', my: 2 }}>Log out</Button></Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;