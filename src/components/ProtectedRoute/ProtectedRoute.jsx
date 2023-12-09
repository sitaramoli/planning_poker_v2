import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute = () => {
    const { user } = useContext(UserContext);
    return user.token ? <Outlet /> : <Navigate to='/login' replace={true} />;
};
export default ProtectedRoute;