import Parse from "parse";

export const getCurrentUserProfile = () => {
  const currentUser = Parse.User.current();
  if (!currentUser) {
    // Handle case when no user is logged in
    return Promise.reject("No user currently logged in.");
  }

  const Profile = Parse.Object.extend("Profile");
  const query = new Parse.Query(Profile);
  query.equalTo("user", currentUser); // Set the user pointer to the current user
  query.include("user"); // Optionally include user data

  return query.first(); // Use first to get the single profile
};
