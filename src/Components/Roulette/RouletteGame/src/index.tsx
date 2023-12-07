import { useInputState } from '@mantine/hooks';
import { Button, TextInput } from '@mantine/core';
import Parse from "parse";
import RouletteWrapper from "./RouletteWrapper";
import "../../../../styles/roulette.css";

function RouletteGame() {
  let usernameValue = Parse.User.current()?.get('username');
  return (
    <RouletteWrapper username={usernameValue}/>
  );
}

export default RouletteGame;
