import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import Parse from 'parse';
import Banner from "../../Components/Banner/Banner.js";
import "../../styles/checkout.css";

const CheckoutForm = ({ stripePromise }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // handle change in amount in text area 
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // submitting payment 
  const handlePaymentIntent= async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    // Convert the amount to cents for USD
    const amountInCents = Math.round(parseFloat(amount) * 100);
    try {
      const result = await Parse.Cloud.run('createPaymentIntent', { amount: amountInCents, currency: 'usd' });
      setClientSecret(result.clientSecret);
      setIsProcessing(false);
    } catch (error) {
      console.error('Error creating payment intent:', error);
      setIsProcessing(false);
    }
  };

  const handlePaymentConfirmation = async (event) => {
    event.preventDefault();
    if (!stripe) {
      console.log("Stripe has not loaded");
      return;
    }
  
    setIsProcessing(true);
  
    try {
      // Assuming clientSecret is correctly set to the PaymentIntent's client secret
      const result = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      });
  
      if (result.error) {
        console.error('Payment confirmation error:', result.error);
        // Handle specific error scenarios here, if needed
      } else {
        console.log(`Payment initiated, redirecting or awaiting payment confirmation.`);
      }
    } catch (error) {
      console.error('Error during payment confirmation:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  
  // appearance of Stripe's PaymentElement since it looked ugly 
  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#902323', 
      colorBackground: '#f9f9f9', 
      colorText: '#333', 
      colorDanger: '#df1b41',
      borderRadius: '10px',
      spacingUnit: '5px' 
    },
    rules: {
      '.Input': {
        backgroundColor: 'var(--colorBackground)',
        color: 'var(--colorText)',
      },
      '.Block': {
        backgroundColor: 'var(--colorBackground)',
      },
    },
  };

  return (
    <div>
      <Banner/>
      {!clientSecret && (
        <div className="checkout-container">
        <form onSubmit={handlePaymentIntent}>
            <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount of money you'd like to add to your balance (US Dollar)"
            />
            <button disabled={isProcessing || !amount} >Add Funds</button>
        </form>
        </div>
      )}
      {clientSecret && (
        <div className="checkout-container">
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <form onSubmit={handlePaymentConfirmation}>
            <PaymentElement />
            <button disabled={!stripe} className='button'>Confirm Payment</button>
          </form>
        </Elements>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;


/* this is the cloud function in back4app */
// const Stripe = require('stripe');
// const stripe = Stripe(secret_key);

// Parse.Cloud.define("createPaymentIntent", async (request) => {
//   const { amount, currency } = request.params;
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//     });
//     return { clientSecret: paymentIntent.client_secret };
//   } catch (error) {
//     throw new Parse.Error(Parse.ErrorCode.SCRIPT_FAILED, `Stripe Error: ${error.message}`);
//   }
// });
