import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location)
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user?.email) {
        return children;
    }
    return (
        <Navigate to={'/login'} state={location.pathname} replace/>
    );
};

PrivateRoutes.propTypes = {
    
};

export default PrivateRoutes;