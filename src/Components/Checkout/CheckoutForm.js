import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements, Elements, CardElement } from '@stripe/react-stripe-js';
import Parse from 'parse';
import Banner from "../../Components/Banner/Banner.js";
import "../../styles/checkout.css";
import { updateUserBalance } from "../Common/Services/Profiles.js";  

const CheckoutForm = ({ clientSecret, setClientSecret, amount, setAmount }) => {
  // const [amount, setAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // handle change in amount in text area 
  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    console.log("Amount entered:", newAmount); 
    setAmount(newAmount); 
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
    console.log("Amount at payment confirmation:", amount); // Debug: log amount before processing

    console.log("Payment Succeeded")
    console.log(amount)
    let amountInDollars = parseFloat(amount);
    await updateUserBalance(amountInDollars);
    alert(`Success! Added $${amountInDollars} to account.`);
  
    setIsProcessing(true);
    console.log("Client Secret: ", clientSecret)
    try { 
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/`
        },
      });
      console.log("Result: ",result)
      if (result.error) {
        console.error('Payment confirmation error:', result.error);
      } else {
        let amountInDollars = parseFloat(amount);
        await updateUserBalance(amountInDollars);
        alert(`Success! Added $${amountInDollars.toFixed(2)} to account.`);
      }
    } catch (error) {
      console.error('Error during payment confirmation:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div>
      <Banner/>
      <div className="checkout-container">
        <form onSubmit={clientSecret ? handlePaymentConfirmation : handlePaymentIntent}>
          {!clientSecret && (
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount of money you'd like to add to your balance (US Dollar)"
            />
          )}
          {clientSecret && <PaymentElement />}
          <button disabled={isProcessing || (!amount && !clientSecret)} className='button'>
            {clientSecret ? 'Confirm Payment' : 'Add Funds'}
          </button>
        </form>
      </div>
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
