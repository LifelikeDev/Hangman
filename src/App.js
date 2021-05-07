import React from "react";
import Game from "./Screens/Game";
import Welcome from "./Screens/Welcome";
import Loading from "./Screens/Loading";
import { useGlobalContext } from "./context";

const Base = () => {
  const { welcome, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return <>{welcome ? <Welcome /> : <Game />}</>;
};

export default Base;
