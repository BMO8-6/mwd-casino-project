import { useInputState } from '@mantine/hooks';
import { Button, TextInput } from '@mantine/core';
import React, { useEffect, useState } from "react";
import Parse from "parse";
import RouletteWrapper from "./RouletteWrapper";
import { getCurrentUserProfile } from "../../../Common/Services/Profiles.js";  
import "../../../../styles/roulette.css";

function RouletteGame() {
  let usernameValue = Parse.User.current()?.get('username');
  var userProfile;
  const [profile, setProfiles] = useState(null);

  useEffect(() => {
    getCurrentUserProfile().then((profile) => {
      setProfiles(profile);
    });
  }, []);

  if (!profile) {
    return ( 
      <div>LOADING...</div>
    );
  }

  if (profile.get("user").get("username") === Parse.User.current()?.get("username")) {
      userProfile = profile;
  }
  
  return (
    <RouletteWrapper username={usernameValue} profile={userProfile}/>
  );
}

export default RouletteGame;
