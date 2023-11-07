import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import "../../styles/auth.css";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth-container">
      {/* <div className="auth-logo">
        <img src="../../images/logo.jpg" alt="Logo" />
      </div> */}
      <h1>Welcome!</h1>
      <p>Please register or log in to continue.</p>
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <br />
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
