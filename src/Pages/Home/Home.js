import React from 'react';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import Explore from './Explore';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Reviews></Reviews>
            <Explore></Explore>
        </div>
    );
};

export default Home;