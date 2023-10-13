import Parse from "parse"

export const getAllBlackjackHands = () => {
    const BlackjackHand = Parse.Object.extend("BlackjackHand");
    const query = new Parse.Query(BlackjackHand);
  
    // Include the associated user data with each profile
    query.include(["session", "session.profile", "session.profile.user"]);
  
    return query.find().then((results) => {
      // returns array of BlackjackHands with associated Blackjack  Session objects with associated Profile objects and User data
      return results;
    });
  };
  