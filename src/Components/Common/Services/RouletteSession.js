import Parse from "parse"

export const getAllRouletteSessions = () => {
    const RouletteSession = Parse.Object.extend("RouletteSession");
    const query = new Parse.Query(RouletteSession);
  
    // Include the associated user data with each profile
    query.include(["profile", "profile.user"]);
  
    return query.find().then((results) => {
      // returns array of Roulette Session objects with associated Profile objects and User data
      return results;
    });
  };
  