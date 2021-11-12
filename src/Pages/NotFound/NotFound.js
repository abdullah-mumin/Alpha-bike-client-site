import React from 'react';
import notFound from '../../images/404/404.png';
import Navigation from '../Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;