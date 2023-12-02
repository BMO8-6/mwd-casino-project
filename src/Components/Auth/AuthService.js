import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

//  creates a Profile for a given user
export const createProfile = (user) => {
  const Profile = Parse.Object.extend("Profile");
  const profile = new Profile();
  const default_gameData = {
    "blackjack": {
      "timesPlayed": 0,
      "money": {
        "won": 0,
        "lost": 0
      },
      "record": {
        "wins": 0,
        "losses": 0
      }
    },
    "roulette": {
      "timesPlayed": 0,
      "money": {
        "won": 0,
        "lost": 0
      },
      "record": {
        "wins": 0,
        "losses": 0
      }
    }
  }
  profile.set("user", user); // user is the Parse.User object
  profile.set("balance", 100); // User will start with 100

  profile.set("gameData",default_gameData); // user's default game data
  console.log("Saving new Profile...", profile)
  return profile.save()
    .then((profileCreated) => {
      console.log("Profile created:", profileCreated);
      return profileCreated;
    }).catch((error) => {
      console.error("Error creating profile:", error);
      throw error;
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

// logout the user 
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      // This will now be null, and currentUser() will return null
      const currentUser = Parse.User.current(); 
      if (currentUser === null) {
        console.log('Successfully logged out');
      }
      return true;
    })
    .catch((error) => {
      console.error('Error while logging out ', error);
      throw error; // Re-throw the error for the calling function to handle
    });
};