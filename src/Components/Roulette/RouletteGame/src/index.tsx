import { useInputState } from '@mantine/hooks';
import { Button, TextInput } from '@mantine/core';
import React, { useEffect, useState } from "react";
import Parse from "parse";
import RouletteWrapper from "./RouletteWrapper";
import { getAllProfiles } from "../../../Common/Services/Profiles.js";  
import "../../../../styles/roulette.css";

function RouletteGame() {
  let usernameValue = Parse.User.current()?.get('username');
  var userProfile;
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getAllProfiles().then((profiles) => {
      setProfiles(profiles);
    });
  }, []);

  if (profiles.length === 0) {
    return ( 
      <div>LOADING...</div>
    );
  }

  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].get("user").get("username") === Parse.User.current()?.get("username")) {
      userProfile = profiles[i];
      break;
    }
  }
  
  return (
    <RouletteWrapper username={usernameValue} profile={userProfile}/>
  );
}

export default RouletteGame;
