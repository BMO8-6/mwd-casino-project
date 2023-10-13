import React, { useEffect, useState } from "react";
import UI from "./UI.js";
import "../../styles/blackjack.css";

const BlackjackView = ({ userId }) => {
  // // Fetch the game data when the component mounts
  // const [gameData, setGameData] = useState();

  // useEffect(() => {
  //   fetchGameData(userId).then((data) => setGameData(data));
  // }, [userId]);

  console.log("Displaying BlackjackView");
  return (
    < UI />
  );
};


// ''' future game logic '''
// // fetch data from json based on userid
// export const fetchGameData = (userId) => {
//   const url = "./Games/blackjack/blackjack.json";
//   // console.log(url);
//   return axios
//     .get(url)
//     .then((response) => {
//       console.log("response.data.userId: " + response.data.userId);
//       const userId = response.data.userId;
//       console.log(userId);
//       return response.data ? userId : null; // returns userGame if there is one for the current user
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

export default BlackjackView;

// Basic Blackjack Rules:

// The goal of blackjack is to beat the dealer's hand without going over 21.
// Face cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.
// Each player starts with two cards, one of the dealer's cards is hidden until the end.
// To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.
// If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
// If you are dealt 21 from the start (Ace & 10), you got a blackjack.
// Blackjack usually means you win 1.5 the amount of your bet. Depends on the casino.
// Dealer will hit until his/her cards total 17 or higher.
// Doubling is like a hit, only the bet is doubled and you only get one more card.
// Split can be done when you have two of the same card - the pair is split into two hands.
// Splitting also doubles the bet, because each new hand is worth the original bet.
// You can only double/split on the first move, or first move of a hand created by a split.
// You cannot play on two aces after they are split.
// You can double on a hand resulting from a split, tripling or quadrupling you bet.
