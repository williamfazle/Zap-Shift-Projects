import React, { Children } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading} = useAuth();

    if (loading) {
        return <span className='loading loading-spinner loading-xl'></span>
    }

    if (!user) {
        <Navigate to="/login"></Navigate>
    }

    
    return children;
};

export default PrivateRoute;