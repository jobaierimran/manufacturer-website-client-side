import React from 'react';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;