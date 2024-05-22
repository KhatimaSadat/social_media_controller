import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { hasExceededTimeLimit } from '../utils/timelimit';
import { AuthContext } from '../context/AuthConext';
import { useContext } from 'react';
const ProtectedRoute = ({ timeLimit}) => {
  
  const isTimeLimitExceeded = hasExceededTimeLimit(timeLimit);
  return isTimeLimitExceeded ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;