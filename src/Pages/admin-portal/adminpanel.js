import React, { useContext, useEffect } from "react";
import AdminPortal from "./index";
import MyContext from "../../ContextApi/MyContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminPanel() {
    
  const { signUser } = useContext(MyContext);
  // If the user is not logged in, redirect to login
  if (!signUser) {
    return <Navigate to="/userlogin" replace />;
  }

  // If the user is not an admin, redirect to unauthorized page
  if (signUser.email !== "capobrain@gmail.com") {
    return <Navigate to="/unauthorized" replace />;
  }

  // If the user is an admin, render child routes
  return <Outlet />;
}
