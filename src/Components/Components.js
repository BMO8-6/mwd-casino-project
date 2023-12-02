import React from "react";
import HomeApp from "./Home/HomeApp.js";
import Blackjack from "./Blackjack/BlackjackApp.js";
import Roulette from "./Roulette/RouletteApp.js";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js"; 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CheckoutForm from "./Checkout/CheckoutForm.js";
import { Elements } from '@stripe/react-stripe-js';

const Components = ({ stripePromise }) => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/" element={
          <ProtectedRoute element={() => <HomeApp />} />
        } />
        <Route path="/blackjack" element={
          <ProtectedRoute element={() => <Blackjack />} />
        } />
        <Route path="/roulette" element={
          <ProtectedRoute element={() => <Roulette />} />
        } />
        <Route path="/checkout" element={
          <ProtectedRoute element={() => (
            <Elements stripe={stripePromise}>
              <CheckoutForm stripePromise={stripePromise}/>
            </Elements>
          )}/>
        } />
        <Route path="/auth" element={<AuthModule />} /> 
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
