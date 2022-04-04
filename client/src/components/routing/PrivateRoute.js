import React, { useContext } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const PrivateRoute = ({ component: Component }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;


  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" state={{ from: location }} replace  />
};

export default PrivateRoute;

