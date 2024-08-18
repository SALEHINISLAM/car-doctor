import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import About from '../../About/About';

const Home = props => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <About/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;