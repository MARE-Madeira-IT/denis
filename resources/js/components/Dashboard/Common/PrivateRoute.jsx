import React from 'react';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';



function PrivateRoute({ children, isAuthenticated, permissionLevel, treshold = 0, to = "/login" }) {
    return (isAuthenticated && permissionLevel >= treshold) ? children : <Navigate to={to} />;
}


function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
        permissionLevel: state.auth.permissionLevel
    };
}

export default connect(mapStateToProps)(PrivateRoute);