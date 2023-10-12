import React, { useEffect, useState } from "react";
import UI from "./UI.js";
import "../../styles/roulette.css";

const axios = window.axios;

const RouletteView = ({ userId }) => {
  // // Fetch the game data when the component mounts
  // const [gameData, setGameData] = useState();

  // useEffect(() => {
  //   fetchGameData(userId).then((data) => setGameData(data));
  // }, [userId]);

  console.log("Displaying RouletteView");
  // old html, placeholder for UI logic and interactions
  return (
    <UI />
  );
};

// // fetch data from json based on userid
// export const fetchGameData = (userId) => {
//   const url = "./Games/roulette/roulette.json";
//   console.log(url);
//   return axios
//     .get(url)
//     .then((response) => {
//       console.log("response.data.userId: " + response.data.userId);
//       const userId = response.data.userId;
//       console.log(userId);
//       return userGame ? userGame : null; // returns userGame if there is one for the current user
//     })
//     .catch((err) => {
//       console.log("Fetch Game Data Error: ", err);
//     });
// };

// // placing a bet (doesn't save anywhere yet)
// export const placeBet = (userId, amount) => {
//   return fetchGameData(userId).then((gameData) => {
//     if (gameData) {
//       gameData.currentBet = amount;
//       console.log(`User ${userId} placed a bet of $${amount}.`);
//       return gameData;
//     } else {
//       console.error("User not found");
//     }
//   });
// };

// // handles win and prints what user won how much
// export const handleWin = (userId, amountWon) => {
//   return fetchGameData(userId).then((gameData) => {
//     if (gameData) {
//       gameData.win += amountWon;
//       console.log(`User ${userId} won $${amountWon}.`);
//       return gameData;
//     } else {
//       console.error("User not found");
//     }
//   });
// };

// // handles looss
// export const handleLoss = (userId, amountLost) => {
//   return fetchGameData(userId).then((gameData) => {
//     if (gameData) {
//       gameData.loss += amountLost;
//       console.log(`User ${userId} lost $${amountLost}.`);
//       return gameData;
//     } else {
//       console.error("User not found");
//     }
//   });
// };

// // this caluclates the score for the game
// export const calculateScore = (cards) => {
//   let score = 0;
//   let aces = 0;

//   cards.forEach((card) => {
//     if (["J", "Q", "K"].includes(card.value)) {
//       score += 10;
//     } else if (card.value === "A") {
//       aces += 1;
//       score += 11;
//     } else {
//       score += parseInt(card.value, 10);
//     }
//   });

//   while (score > 21 && aces > 0) {
//     score -= 10;
//     aces -= 1;
//   }

//   return score;
// };

export default RouletteView;

// Basic Roulette Rules:

// Each spin of the wheel provides a multitude of options for the player.
// A player may bet on single numbers, rows of numbers, or on adjacent numbers.
// A player also may play colors, odd or even numbers, among others.
// A bet on a single number pays 35 to 1, including the 0 and 00.
// Bets on red or black, odd or even pay 1 for 1, or even money.

// Roulette Bets & Payouts
// Single number bet pays 35 to 1. Also called “straight up.”
// Double number bet pays 17 to 1. Also called a “split.”
// Three number bet pays 11 to 1. Also called a “street.”
// Four number bet pays 8 to 1. Also called a “corner bet.”
// Five number bet pays 6 to 1. Only one specific bet which includes the following numbers: 0-00-1-2-3.
// Six number bets pays 5 to 1. Example: 7, 8, 9, 10, 11, 12. Also called a “line.”
// Twelve numbers or dozens (first, second, third dozen) pays 2 to 1.
// Column bet (12 numbers in a row) pays 2 to 1.
// 18 numbers (1-18) pays even money.
// 18 numbers (19-36) pays even money.
// Red or black pays even money.
// Odd or even bets pay even money.
