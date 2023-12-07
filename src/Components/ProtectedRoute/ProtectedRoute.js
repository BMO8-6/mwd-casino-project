import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService.js";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!checkUser()) {
      navigate('/login');  
    }
  }, [navigate]); 

  // If the user is authenticated, render the component passed to the ProtectedRoute
  // else render null while the user is being redirected
  return checkUser() ? <Component {...rest} /> : null;
};

export default ProtectedRoute;
