import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { hasExceededTimeLimit } from "../utils/timelimit";

const ProtectedRoute = ({ timeLimit }) => {
  const isTimeLimitExceeded = hasExceededTimeLimit(timeLimit);
  const activeCotroller = localStorage.getItem("activeCotroller")
  return isTimeLimitExceeded && activeCotroller? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
