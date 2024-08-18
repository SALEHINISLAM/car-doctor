import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

const Services = props => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(datum=>setServices(datum))
    },[])
    return (
        <div className='container mx-auto space-y-12'>
            <div className="text-center space-y-8">
                <h3 className='text-error text-xl font-bold'>
                Service
                </h3>
                <h1 className='lg:text-5xl font-bold text-black text-4xl'>
                Our Service Area
                </h1>
                <p className='text-[#737373]'>
                We service your car needs across the world and its surrounding areas. <br /> Enjoy convenient and reliable car care at your doorstep.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full gap-6">
                {
                    services.map((service, index)=><ServiceCard service={service} key={index}/>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    
};

export default Services;