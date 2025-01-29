import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedEmail, restrictEmail, redirectPath }) => {
  const token = sessionStorage.getItem("User"); // Use sessionStorage for consistency
  const user = token ? JSON.parse(token) : null;

  // Debugging logs (optional, for testing purposes)
  console.log("Current user:", user);

  // If the user is not logged in, redirect to login
  if (!user || !user.email) {
    return <Navigate to="/userlogin" replace />;
  }

  // If `allowedEmail` is specified and the user email does not match, redirect
  if (allowedEmail && user.email !== allowedEmail) {
    return <Navigate to={redirectPath} replace />;
  }

  // If `restrictEmail` is specified and the user email matches, redirect
  if (restrictEmail && user.email === restrictEmail) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
