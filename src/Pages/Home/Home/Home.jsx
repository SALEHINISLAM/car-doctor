import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Components/Banner';
import About from '../../About/About';
import Services from '../../Services/Services';

const Home = props => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;