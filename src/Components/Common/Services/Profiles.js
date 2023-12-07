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

export const updateUserBalance = async (amountToAdd) => {
  console.log("Updating user balalnce. Adding $", amountToAdd);
  try {
    const userProfile = await getCurrentUserProfile();
    if (userProfile) {
      let currentBalance = userProfile.get("balance");
      console.log("Adding to current balance of: ", currentBalance);
      let newBalance = currentBalance + amountToAdd;
      userProfile.set("balance", newBalance);
      await userProfile.save();
      return newBalance;
    } else {
      throw new Error("User profile not found.");
    }
  } catch (error) {
    console.error("Error updating user's balance:", error);
    throw error;
  }
};