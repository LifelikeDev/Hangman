import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { username } = useGlobalContext();

  return (
    <header>
      <div className="header-bar">
        <h2 className="game-title">Hangman</h2>
        <h3 className="username__header">{username}</h3>
      </div>
      <div className="header-content">
        <p className="game-instructions">
          Keep Hangman from being hanged! Enter the missing letters of the word
          to save him.
        </p>
      </div>
    </header>
  );
};

export default Header;
