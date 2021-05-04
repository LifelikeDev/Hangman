import React from "react";

const Header = () => {
  return (
    <>
      <h2 className="game-title">Hangman</h2>
      <p className="game-instructions">
        Keep Hangman from being hanged! Enter the missing letters of the word to
        save him.
      </p>
    </>
  );
};

export default Header;
