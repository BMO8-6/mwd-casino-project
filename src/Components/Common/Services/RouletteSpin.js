import Parse from "parse"

export const getAllRouletteSpins = () => {
    const RouletteSpin = Parse.Object.extend("RouletteSpin");
    const query = new Parse.Query(RouletteSpin);
  
    // Include the associated user data with each profile
    query.include(["session", "session.profile", "session.profile.user"]);
  
    return query.find().then((results) => {
      // returns array of RouletteSpins with associated Roulette Session objects with associated Profile objects and User data
      return results;
    });
  };
  