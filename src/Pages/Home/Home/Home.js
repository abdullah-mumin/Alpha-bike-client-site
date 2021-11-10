import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Award></Award>
        </div>
    );
};

export default Home;