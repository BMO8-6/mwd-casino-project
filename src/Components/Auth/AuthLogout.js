import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './AuthService';
import "../../styles/auth.css";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/auth/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">Logout</button>
  );
};

export default LogoutButton;