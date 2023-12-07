import React, { useEffect, useState } from 'react';
import Parse from "parse";
import Components from "./Components/Components.js";
import * as Env from "./environments.js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(Env.STRIPE_PUBLISHABLE);

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    loadStripe(Env.STRIPE_PUBLISHABLE).then((stripeInstance) => {
      setStripe(stripeInstance);
    });
  }, []);

  if (!stripe) {
    return <div>Loading...</div>; 
  }
  return (
    <Components stripePromise={stripePromise}/> 
  );
}

export default App;
