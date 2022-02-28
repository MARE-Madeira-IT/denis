import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
    const auth = true; //your logic

    return auth ? <Component /> : <Navigate to="/" />
};

export default PrivateRoute;
