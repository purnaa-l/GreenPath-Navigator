import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary

interface PrivateRouteProps {
  element: JSX.Element;
  isAdmin?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAdmin }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user?.role !== "admin") {
    // If admin route is accessed by non-admin users, redirect to user dashboard
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
