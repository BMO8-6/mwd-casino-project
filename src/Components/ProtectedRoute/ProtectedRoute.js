import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkUser()) {
      navigate('/login');  
    }
  }, [navigate]); 

  return checkUser() ? <Component {...rest} /> : null;
};


export default ProtectedRoute;
