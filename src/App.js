import React from "react";
import Game from "./Screens/Game";
import Welcome from "./Screens/Welcome";
import { useGlobalContext } from "./context";

const Base = () => {
  const { welcome } = useGlobalContext();

  return <>{welcome ? <Welcome /> : <Game />}</>;
};

export default Base;
