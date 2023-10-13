import Parse from "parse"

export const getAllBlackjackSessions = () => {
    const BlackjackSession = Parse.Object.extend("BlackjackSession");
    const query = new Parse.Query(BlackjackSession);
  
    // Include the associated user data with each profile
    query.include(["profile", "profile.user"]);
  
    return query.find().then((results) => {
      // returns array of BlackjackSession objects with associated Profile objects and User data
      return results;
    });
  };
  