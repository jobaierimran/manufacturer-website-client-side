import React from 'react';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import Contact from './Contact';
import Explore from './Explore';
import Info from './Info';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Reviews></Reviews>
            <Explore></Explore>
            <Info></Info>
            <Contact></Contact>
        </div>
    );
};

export default Home;