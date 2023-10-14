import Parse from "parse"

export const getAllProfiles = () => {
    const Profile = Parse.Object.extend("Profile");
    const query = new Parse.Query(Profile);
  
    // Include the associated user data with each profile
    query.include("user");
  
    return query.find().then((results) => {
      // returns array of Profile objects with associated User data
      return results;
    });
  };
  